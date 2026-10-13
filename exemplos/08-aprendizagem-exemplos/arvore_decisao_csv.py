import pandas as pd
from sklearn.tree import DecisionTreeClassifier, plot_tree
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score
import matplotlib.pyplot as plt

# Carregar o dataset (substitua 'seu_dataset.csv' pelo arquivo baixado)
df = pd.read_csv("seu_dataset.csv")

# Inspecionar os dados
print(df.head())

# Pré-processar os dados (ajuste as colunas conforme necessário)
X = df[['coluna1', 'coluna2', 'coluna3']]  # Insira as colunas de entrada
y = df['target']  # Insira a coluna alvo

# Dividir os dados em treino e teste
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, 
                                                    random_state=42)

# Criar e treinar a árvore de decisão
clf = DecisionTreeClassifier(max_depth=4, random_state=42)
clf.fit(X_train, y_train)

# Fazer previsões e avaliar
y_pred = clf.predict(X_test)
print(f"Acurácia: {accuracy_score(y_test, y_pred):.2f}")

# Visualizar a árvore de decisão
plt.figure(figsize=(16, 10))
plot_tree(clf, feature_names=X.columns, class_names=['Classe1', 'Classe2'],
          filled=True)
plt.show()