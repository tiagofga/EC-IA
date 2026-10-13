import numpy as np
import matplotlib.pyplot as plt

from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.decomposition import PCA
from sklearn.pipeline import make_pipeline
from sklearn.svm import SVC
from sklearn.metrics import accuracy_score, classification_report


# ============================================================
# 1. Carregamento da base
# ============================================================

iris = load_iris()
X = iris.data
y = iris.target

print("Atributos originais:", iris.feature_names)
print("Classes:", iris.target_names)
print("Formato de X:", X.shape)


# ============================================================
# 2. Separação entre treino e teste
# ============================================================

X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.30,
    stratify=y,
    random_state=42
)


# ============================================================
# 3. Padronização dos dados
# ============================================================

scaler = StandardScaler()

X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)


# ============================================================
# 4. PCA com todas as componentes
#    Serve para verificar quanta variância cada componente explica
# ============================================================

pca_full = PCA()
pca_full.fit(X_train_scaled)

print("\nRazão de variância explicada por componente:")
print(pca_full.explained_variance_ratio_)

variancia_acumulada = np.cumsum(
    pca_full.explained_variance_ratio_
)

print("\nVariância explicada acumulada:")
print(variancia_acumulada)

print("\nVariância explicada acumulada (%):")
print(variancia_acumulada * 100)


# ============================================================
# 5. PCA reduzindo para 2 componentes
# ============================================================

pca = PCA(n_components=2)

X_train_pca = pca.fit_transform(X_train_scaled)
X_test_pca = pca.transform(X_test_scaled)

print("\nVariância explicada pelas 2 componentes:")
print(pca.explained_variance_ratio_)

print(
    f"Variância total preservada com 2 componentes: "
    f"{pca.explained_variance_ratio_.sum() * 100:.2f}%"
)


# ============================================================
# 6. SVM usando os dados originais padronizados
# ============================================================

svm_sem_pca = SVC(
    kernel="rbf",
    C=1.0,
    gamma="scale"
)

svm_sem_pca.fit(X_train_scaled, y_train)

y_pred_sem_pca = svm_sem_pca.predict(X_test_scaled)

acc_sem_pca = accuracy_score(
    y_test,
    y_pred_sem_pca
)

print("\n" + "=" * 60)
print("SVM SEM PCA")
print("=" * 60)
print(f"Acurácia: {acc_sem_pca:.4f}")
print(
    classification_report(
        y_test,
        y_pred_sem_pca,
        target_names=iris.target_names
    )
)


# ============================================================
# 7. SVM usando apenas as 2 componentes principais
# ============================================================

svm_com_pca = SVC(
    kernel="rbf",
    C=1.0,
    gamma="scale"
)

svm_com_pca.fit(X_train_pca, y_train)

y_pred_com_pca = svm_com_pca.predict(X_test_pca)

acc_com_pca = accuracy_score(
    y_test,
    y_pred_com_pca
)

print("\n" + "=" * 60)
print("SVM COM PCA (2 componentes)")
print("=" * 60)
print(f"Acurácia: {acc_com_pca:.4f}")
print(
    classification_report(
        y_test,
        y_pred_com_pca,
        target_names=iris.target_names
    )
)


# ============================================================
# 8. Comparação
# ============================================================

print("\n" + "=" * 60)
print("COMPARAÇÃO")
print("=" * 60)

print(f"Acurácia sem PCA: {acc_sem_pca:.4f}")
print(f"Acurácia com PCA: {acc_com_pca:.4f}")

print(
    f"Variância preservada por PC1 + PC2: "
    f"{pca.explained_variance_ratio_.sum() * 100:.2f}%"
)


# ============================================================
# 9. Visualização dos dados no espaço PCA
# ============================================================

plt.figure(figsize=(8, 6))

for classe, nome_classe in enumerate(iris.target_names):
    mascara = y_train == classe

    plt.scatter(
        X_train_pca[mascara, 0],
        X_train_pca[mascara, 1],
        label=nome_classe
    )

plt.xlabel(
    f"PC1 ({pca.explained_variance_ratio_[0] * 100:.1f}% da variância)"
)
plt.ylabel(
    f"PC2 ({pca.explained_variance_ratio_[1] * 100:.1f}% da variância)"
)
plt.title("Iris após redução para 2 componentes principais")
plt.legend()
plt.grid(alpha=0.3)
plt.tight_layout()
plt.show()


# ============================================================
# 10. Versão compacta usando Pipeline
# ============================================================

modelo_pipeline = make_pipeline(
    StandardScaler(),
    PCA(n_components=2),
    SVC(kernel="rbf", C=1.0, gamma="scale")
)

modelo_pipeline.fit(X_train, y_train)

y_pred_pipeline = modelo_pipeline.predict(X_test)

print("\nAcurácia do Pipeline StandardScaler + PCA + SVM:",
      f"{accuracy_score(y_test, y_pred_pipeline):.4f}")
