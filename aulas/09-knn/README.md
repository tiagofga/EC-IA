# Aula 09 - K-Nearest Neighbors (KNN)

Material público da disciplina de Inteligência Artificial do CEFET-MG, campus Divinópolis.

- [Slides em PDF](./EC_IA_009_KNN.pdf)
- [Nota visual](../../notas/09-knn/README.md)
- [Estudo guiado](../../estudos-guiados/09-knn/README.md)
- [Exemplos Python](../../exemplos/09-knn/README.md)

## Percurso

- **Preparação dos dados:** Titanic train.csv; atributos Pclass, Sex, Age, SibSp, Parch, Fare e Embarked; alvo Survived.
- **Ausências e outliers:** Imputação de mediana/moda segundo a coluna; outlier não é automaticamente erro.
- **Codificação:** OneHotEncoder para categorias nominais; ColumnTransformer e Pipeline evitam inconsistências.
- **Evitar vazamento:** Treino/teste antes de aprender mediana, escala e parâmetros da transformação.
- **KNN:** Distância aos exemplos de treino, ordenação, k vizinhos e voto majoritário.
- **Escala e seleção de k:** StandardScaler e validação cruzada k-fold; escolher k sem consultar conjunto de teste.

## Continuidade

Continua diretamente a Aula 8.
