# Exemplos Python

Esta seção reúne os exemplos didáticos de **aprendizagem de máquina** utilizados nas Aulas 08 a 11. Os scripts são materiais de estudo e não substituem a implementação solicitada nos trabalhos práticos.

## Preparação

É necessário instalar os pacotes usados nos exemplos:

```bash
python3 -m pip install numpy pandas matplotlib scikit-learn
```

A criação de ambiente virtual fica a critério do estudante.

## Exemplos por aula

| Aula | Conteúdo | Exemplos |
|---|---|---|
| 08 | Aprendizagem com Exemplos e Árvores de Decisão | [Árvore de decisão com CSV](https://github.com/tiagofga/EC-IA/tree/main/exemplos/08-aprendizagem-exemplos) |
| 09 | KNN e preparação de dados | [KNN e Titanic](https://github.com/tiagofga/EC-IA/tree/main/exemplos/09-knn) |
| 10 | SVM, kernel e PCA | [SVM e PCA com Iris](https://github.com/tiagofga/EC-IA/tree/main/exemplos/10-svm) |
| 11 | Comparação de classificadores | [DT × KNN × SVM](https://github.com/tiagofga/EC-IA/tree/main/exemplos/11-atividade-comparacao) |

Os arquivos estão disponíveis em [`exemplos/` no GitHub](https://github.com/tiagofga/EC-IA/tree/main/exemplos). Consulte o README específico de cada aula para identificar os dados de entrada e os comandos de execução.

## Boas práticas

- Realize a separação treino/teste antes de ajustar transformações que aprendem dos dados.
- Ajuste imputação, codificação e escalonamento apenas sobre dados de treinamento, preferencialmente com `Pipeline` e `ColumnTransformer`.
- Utilize a mesma divisão de dados e as mesmas métricas para comparações entre modelos.
- Registre sementes, parâmetros e versões das bibliotecas para favorecer a reprodutibilidade.

Os exemplos ilustram DT, KNN e SVM; no Trabalho 02 também serão estudados Random Forest e AdaBoost, além da implementação própria de métodos de computação natural.
