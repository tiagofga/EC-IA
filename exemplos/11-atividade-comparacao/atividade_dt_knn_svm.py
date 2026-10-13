"""Atividade integradora: comparação entre DT, KNN e SVM.

A classe positiva foi definida como tumor maligno (1).
As configurações são deliberadamente fixas: o objetivo da atividade é
comparar modelos sob o mesmo protocolo, e não fazer tuning.
"""

from __future__ import annotations

from dataclasses import dataclass

import numpy as np
from sklearn.datasets import load_breast_cancer
from sklearn.metrics import (
    accuracy_score,
    confusion_matrix,
    f1_score,
    precision_score,
    recall_score,
)
from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeighborsClassifier
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.svm import SVC
from sklearn.tree import DecisionTreeClassifier


@dataclass(frozen=True)
class Resultado:
    modelo: str
    acuracia: float
    precisao: float
    recall: float
    f1: float
    matriz: np.ndarray


def avaliar(nome: str, y_true: np.ndarray, y_pred: np.ndarray) -> Resultado:
    return Resultado(
        modelo=nome,
        acuracia=accuracy_score(y_true, y_pred),
        precisao=precision_score(y_true, y_pred),
        recall=recall_score(y_true, y_pred),
        f1=f1_score(y_true, y_pred),
        matriz=confusion_matrix(y_true, y_pred),
    )


def main() -> None:
    data = load_breast_cancer()
    X = data.data

    # Na base original: 0 = malignant e 1 = benign.
    # Para tornar a interpretação das métricas mais direta na atividade,
    # definimos maligno como a classe positiva (1).
    y = (data.target == 0).astype(int)

    X_train, X_test, y_train, y_test = train_test_split(
        X,
        y,
        test_size=0.25,
        stratify=y,
        random_state=42,
    )

    modelos = {
        "Decision Tree": DecisionTreeClassifier(
            max_depth=4,
            random_state=42,
        ),
        "KNN": make_pipeline(
            StandardScaler(),
            KNeighborsClassifier(n_neighbors=5),
        ),
        "SVM": make_pipeline(
            StandardScaler(),
            SVC(kernel="rbf", C=1.0, gamma="scale"),
        ),
    }

    resultados: list[Resultado] = []

    for nome, modelo in modelos.items():
        modelo.fit(X_train, y_train)
        y_pred = modelo.predict(X_test)
        resultados.append(avaliar(nome, y_test, y_pred))

    print("Classe positiva: maligno (1)\n")
    print(f"{'Modelo':<16} {'Acc':>7} {'Prec':>7} {'Recall':>7} {'F1':>7}")
    print("-" * 49)

    for r in resultados:
        print(
            f"{r.modelo:<16} "
            f"{r.acuracia:>7.3f} "
            f"{r.precisao:>7.3f} "
            f"{r.recall:>7.3f} "
            f"{r.f1:>7.3f}"
        )
        print("Matriz de confusão [[TN, FP], [FN, TP]]:")
        print(r.matriz)
        print()


if __name__ == "__main__":
    main()
