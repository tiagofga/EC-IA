# Exemplos Python

Esta seção reúne exemplos didáticos de **aprendizagem de máquina** (Aulas 08 a 11), **computação natural** (Aulas 12 a 14) e **ensembles** (Aula 15). Os scripts são materiais de estudo e não substituem a implementação solicitada nos trabalhos práticos.

## Preparação

Para os exemplos de aprendizagem de máquina, instale os pacotes utilizados conforme o README de cada aula:

```bash
python3 -m pip install numpy pandas matplotlib scikit-learn
```

A criação de ambiente virtual fica a critério do estudante. NSA e CLONALG da Aula 14 não exigem bibliotecas externas; a Aula 15 possui um arquivo de dependências próprio.

## Exemplos por aula

| Aula | Conteúdo | Exemplos |
|---|---|---|
| 08 | Aprendizagem com Exemplos e Árvores de Decisão | [Árvore de decisão com CSV](https://github.com/tiagofga/EC-IA/tree/main/exemplos/08-aprendizagem-exemplos) |
| 09 | KNN e preparação de dados | [KNN e Titanic](https://github.com/tiagofga/EC-IA/tree/main/exemplos/09-knn) |
| 10 | SVM, kernel e PCA | [SVM e PCA com Iris](https://github.com/tiagofga/EC-IA/tree/main/exemplos/10-svm) |
| 11 | Comparação de classificadores | [DT × KNN × SVM](https://github.com/tiagofga/EC-IA/tree/main/exemplos/11-atividade-comparacao) |
| 12 | Algoritmos Genéticos | [Evolução de imagem binária - referência após a aula](https://github.com/tiagofga/EC-IA/tree/main/exemplos/12-algoritmos-geneticos) |
| 13 | Inteligência de Enxames | [ACO e BPSO - código-base com TODOs](https://github.com/tiagofga/EC-IA/tree/main/exemplos/13-inteligencia-enxames) |
| 14 | Sistemas Imunológicos Artificiais | [CLONALG e NSA - código executável e testes](https://github.com/tiagofga/EC-IA/tree/main/exemplos/14-sistemas-imunologicos) |
| 15 | Algoritmos Ensemble | [Comparação de modelos individuais e ensembles](https://github.com/tiagofga/EC-IA/tree/main/exemplos/15-ensemble) |

Os scripts `arvore_decisao_csv.py` e `knn_csv.py` são **modelos didáticos adaptáveis**: os nomes `seu_dataset.csv`, `coluna1`, `coluna2`, `coluna3` e `target` são marcadores de exemplo. Substitua-os conforme os atributos e a variável-alvo da sua base antes de executar. O exemplo do Titanic necessita do arquivo `train.csv` obtido legitimamente no Kaggle. Os exemplos com Iris e Breast Cancer carregam os conjuntos de dados pelo scikit-learn.

Os arquivos estão disponíveis em [`exemplos/` no GitHub](https://github.com/tiagofga/EC-IA/tree/main/exemplos). Consulte o README específico de cada aula para identificar os dados de entrada e os comandos de execução.

## Boas práticas

- Realize a separação treino/teste antes de ajustar transformações que aprendem dos dados.
- Ajuste imputação, codificação e escalonamento apenas sobre dados de treinamento, preferencialmente com `Pipeline` e `ColumnTransformer`.
- Utilize a mesma divisão de dados e as mesmas métricas para comparações entre modelos.
- Registre sementes, parâmetros e versões das bibliotecas para favorecer a reprodutibilidade.

O código da Aula 12 é uma referência pós-aula. Na Aula 13, `aco.py` e `bpso.py` têm TODOs intencionais, e `comparison.py` só deve ser executado após completar os checkpoints. As soluções finais de ACO e BPSO não são disponibilizadas neste momento.

Os exemplos das Aulas 14 e 15 são implementações didáticas executáveis, não soluções do Trabalho 02. O trabalho exige adaptação ao problema de otimização e à base de classificação escolhidos, com protocolo experimental documentado.
