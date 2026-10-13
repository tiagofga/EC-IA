import pandas as pd
import numpy as np
from sklearn.neighbors import KNeighborsClassifier
from sklearn.preprocessing import StandardScaler  # <- correção do import
from sklearn.model_selection import cross_val_score, train_test_split, StratifiedKFold
from sklearn.metrics import accuracy_score, precision_score, recall_score, classification_report
from sklearn.pipeline import make_pipeline
import matplotlib.pyplot as plt

# Carregar o dataset (substitua 'seu_dataset.csv' pelo arquivo baixado)
df = pd.read_csv("seu_dataset.csv")

# Inspecionar os dados
print(df.head())

# Pré-processar os dados (ajuste as colunas conforme necessário)
X = df[['coluna1', 'coluna2', 'coluna3']].values  # Insira as colunas de entrada
y = df['target'].values                            # Insira a coluna alvo

# Dividir os dados em treino e teste (com estratificação e semente fixa)
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, stratify=y, random_state=42
)

# ===== Escolha do melhor k SEM olhar para o teste (evita vazamento) =====
k_values = list(range(1, 31))
scores = []

cv = StratifiedKFold(n_splits=5, shuffle=True, random_state=42)
for k in k_values:
    # Escalonamento dentro do CV via pipeline (evita vazamento dentro das dobras)
    pipe = make_pipeline(StandardScaler(), KNeighborsClassifier(n_neighbors=k))
    score = cross_val_score(pipe, X_train, y_train, cv=cv).mean()
    scores.append(score)

# Curva do cotovelo
plt.figure(figsize=(10, 6))
plt.plot(k_values, scores)
plt.xlabel("K Values")
plt.ylabel("Accuracy (CV)")
plt.title("KNN Classifier Accuracy for Different K Values")
plt.xticks(k_values)
plt.show()

best_k = k_values[int(np.argmax(scores))]
print(f"Melhor k (CV no treino): {best_k}")

# ===== Treino final no treino e avaliação no teste =====
scaler = StandardScaler()
X_train = scaler.fit_transform(X_train)
X_test = scaler.transform(X_test)

knn = KNeighborsClassifier(n_neighbors=best_k)
knn.fit(X_train, y_train)

# Predição e métricas
y_pred = knn.predict(X_test)

accuracy = accuracy_score(y_test, y_pred)
# 'macro' funciona bem para multi-classe; em binário pode usar average='binary'
precision = precision_score(y_test, y_pred, average='macro', zero_division=0)
recall = recall_score(y_test, y_pred, average='macro', zero_division=0)

print(f"Acurácia:  {accuracy:.2f}")
print(f"Precisão:  {precision:.2f} (macro)")
print(f"Recall:    {recall:.2f} (macro)")
print("\nRelatório de Classificação:\n", classification_report(y_test, y_pred, zero_division=0))
