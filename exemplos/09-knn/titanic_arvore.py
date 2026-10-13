"""Exemplo didático: pré-processamento do Titanic + Árvore de Decisão.

Arquivo esperado: train.csv, da competição Titanic do Kaggle.
O objetivo é mostrar um fluxo correto de tratamento de atributos numéricos
e categóricos usando Pipeline e ColumnTransformer.
"""

import pandas as pd

from sklearn.compose import ColumnTransformer
from sklearn.impute import SimpleImputer
from sklearn.metrics import accuracy_score, classification_report
from sklearn.model_selection import train_test_split
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import OneHotEncoder
from sklearn.tree import DecisionTreeClassifier


# ---------------------------------------------------------------------
# 1. Carregamento e inspeção inicial
# ---------------------------------------------------------------------

df = pd.read_csv("train.csv")

print(df.head())
print("\nInformações da base:")
print(df.info())

print("\nValores ausentes:")
print(df.isna().sum())


# ---------------------------------------------------------------------
# 2. Seleção inicial de atributos
# ---------------------------------------------------------------------

features = [
    "Pclass",
    "Sex",
    "Age",
    "SibSp",
    "Parch",
    "Fare",
    "Embarked",
]

X = df[features]
y = df["Survived"]


# ---------------------------------------------------------------------
# 3. Separação treino/teste
# ---------------------------------------------------------------------

X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.20,
    stratify=y,
    random_state=42,
)


# ---------------------------------------------------------------------
# 4. Pré-processamento
# ---------------------------------------------------------------------

numeric_features = [
    "Pclass",
    "Age",
    "SibSp",
    "Parch",
    "Fare",
]

categorical_features = [
    "Sex",
    "Embarked",
]

numeric_pipe = Pipeline(
    steps=[
        ("imputer", SimpleImputer(strategy="median")),
    ]
)

categorical_pipe = Pipeline(
    steps=[
        ("imputer", SimpleImputer(strategy="most_frequent")),
        ("onehot", OneHotEncoder(handle_unknown="ignore")),
    ]
)

preprocess = ColumnTransformer(
    transformers=[
        ("num", numeric_pipe, numeric_features),
        ("cat", categorical_pipe, categorical_features),
    ]
)


# ---------------------------------------------------------------------
# 5. Pipeline completo: pré-processamento + árvore
# ---------------------------------------------------------------------

model = Pipeline(
    steps=[
        ("preprocess", preprocess),
        (
            "classifier",
            DecisionTreeClassifier(
                max_depth=4,
                random_state=42,
            ),
        ),
    ]
)

model.fit(X_train, y_train)


# ---------------------------------------------------------------------
# 6. Avaliação
# ---------------------------------------------------------------------

y_pred = model.predict(X_test)

print(f"\nAcurácia: {accuracy_score(y_test, y_pred):.3f}")
print("\nRelatório de classificação:")
print(classification_report(y_test, y_pred))
