"""Exemplo didático: SVM linear, RBF, PCA e visualização no dataset Iris."""
import matplotlib.pyplot as plt
from sklearn.datasets import load_iris
from sklearn.decomposition import PCA
from sklearn.metrics import accuracy_score
from sklearn.model_selection import GridSearchCV, train_test_split
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.svm import SVC

# -----------------------------------------------------------------------------
# Dados e separacao treino/teste
# -----------------------------------------------------------------------------
X, y = load_iris(return_X_y=True)
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, stratify=y, random_state=42
)

# -----------------------------------------------------------------------------
# 1) SVM linear nos atributos originais
# -----------------------------------------------------------------------------
linear = make_pipeline(StandardScaler(), SVC(kernel="linear", C=1.0))
linear.fit(X_train, y_train)
acc_linear = accuracy_score(y_test, linear.predict(X_test))
print(f"SVM linear: {acc_linear:.3f}")

# -----------------------------------------------------------------------------
# 2) SVM RBF com busca simples de hiperparametros
# -----------------------------------------------------------------------------
rbf = make_pipeline(StandardScaler(), SVC(kernel="rbf"))
param_grid = {
    "svc__C": [0.1, 1, 10, 100],
    "svc__gamma": ["scale", 0.01, 0.1, 1],
}
grid = GridSearchCV(rbf, param_grid=param_grid, cv=5, scoring="accuracy")
grid.fit(X_train, y_train)
acc_rbf = accuracy_score(y_test, grid.predict(X_test))
print("Melhores parametros RBF:", grid.best_params_)
print(f"SVM RBF: {acc_rbf:.3f}")

# -----------------------------------------------------------------------------
# 3) PCA passo a passo
# Ajuste scaler e PCA SOMENTE no conjunto de treino.
# -----------------------------------------------------------------------------
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

pca = PCA(n_components=2)
X_train_pca = pca.fit_transform(X_train_scaled)
X_test_pca = pca.transform(X_test_scaled)

print("\nTreino original:", X_train.shape)
print("Treino apos PCA:", X_train_pca.shape)
print("Variancia explicada por componente:", pca.explained_variance_ratio_)
print(
    "Variancia acumulada nas duas componentes:",
    f"{pca.explained_variance_ratio_.sum():.3f}",
)

# Visualizacao das duas primeiras componentes.
# y_train e usado APENAS para colorir o grafico; PCA nao usa os rotulos.
plt.figure(figsize=(7, 5))
scatter = plt.scatter(
    X_train_pca[:, 0],
    X_train_pca[:, 1],
    c=y_train,
)
plt.xlabel("PC1")
plt.ylabel("PC2")
plt.title("Iris projetado nas duas primeiras componentes principais")
plt.legend(*scatter.legend_elements(), title="Classe")
plt.tight_layout()
plt.show()

# -----------------------------------------------------------------------------
# 4) SVM treinada no espaco reduzido pelo PCA
# -----------------------------------------------------------------------------
svm_pca = SVC(kernel="linear", C=1.0)
svm_pca.fit(X_train_pca, y_train)
y_pred_pca = svm_pca.predict(X_test_pca)
acc_pca = accuracy_score(y_test, y_pred_pca)
print(f"PCA + SVM linear: {acc_pca:.3f}")

print("\nComparacao final")
print(f"Original + SVM linear: {acc_linear:.3f}")
print(f"Original + SVM RBF:    {acc_rbf:.3f}")
print(f"PCA(2) + SVM linear:   {acc_pca:.3f}")
