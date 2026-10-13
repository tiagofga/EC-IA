# Estudo Guiado 09 - K-Nearest Neighbors (KNN)

Resolva antes de consultar novamente os slides. Use os códigos somente depois de registrar suas hipóteses.

## Objetivos de aprendizagem

- **Preparação dos dados:** Titanic train.csv; atributos Pclass, Sex, Age, SibSp, Parch, Fare e Embarked; alvo Survived.
- **Ausências e outliers:** Imputação de mediana/moda segundo a coluna; outlier não é automaticamente erro.
- **Codificação:** OneHotEncoder para categorias nominais; ColumnTransformer e Pipeline evitam inconsistências.
- **Evitar vazamento:** Treino/teste antes de aprender mediana, escala e parâmetros da transformação.
- **KNN:** Distância aos exemplos de treino, ordenação, k vizinhos e voto majoritário.
- **Escala e seleção de k:** StandardScaler e validação cruzada k-fold; escolher k sem consultar conjunto de teste.

## Questões de interpretação

1. Por que remover todos os passageiros sem Age pode ser inadequado?
2. O que há de errado em calcular a mediana com treino e teste juntos?
3. Por que OneHotEncoder é preferível à numeração arbitrária para Embarked?
4. Classifique um ponto novo por maioria com k=3.
5. Por que k deve ser escolhido por validação e não pelo teste?

## Prática com Python

Execute os scripts em `exemplos/09-knn/` quando houver e identifique entradas, etapas de ajuste e saída. Não utilize o conjunto de teste para selecionar hiperparâmetros.

## Discussão

Qual decisão metodológica mais influencia o resultado desta aula? Proponha uma modificação e descreva como ela poderia ser avaliada de maneira reprodutível.

## Autoavaliação

- [ ] Identifico entradas e saídas.
- [ ] Explico o funcionamento do método.
- [ ] Consigo interpretar seus parâmetros.
- [ ] Reconheço um erro experimental que invalidaria a comparação.
- [ ] Explico como a aula prepara o tema seguinte.
