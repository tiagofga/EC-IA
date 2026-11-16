# Exemplos Python - Aula 15: Algoritmos Ensemble

## Execução

```bash
python -m pip install -r requirements.txt
python ensemble.py
```

A base Breast Cancer Wisconsin é disponibilizada pelo scikit-learn, sem download adicional. A classe positiva é maligno (1). O código compara DT, KNN, SVM, votação hard/soft, bagging, Random Forest, AdaBoost, Gradient Boosting e stacking. A divisão estratificada reserva 20% para teste; os resultados de validação cruzada com cinco folds no treinamento incluem média e desvio-padrão das quatro métricas e tempo médio de ajuste.

Execute os comandos dentro de `exemplos/15-ensemble/`. A criação de ambiente virtual é opcional. Arquivos: [ensemble.py](ensemble.py) e [requirements.txt](requirements.txt).

## Experimentos

```bash
python ensemble.py --estimadores 10
python ensemble.py --estimadores 100
```

Compare as tabelas CSV, mantendo a seed 42. Escolha configurações usando somente validação cruzada. Depois de congelar a escolha, execute a avaliação final uma vez (substitua 50 pelo número de estimadores escolhido):

```bash
python ensemble.py --estimadores 50 --teste
```

A matriz tem linhas reais e colunas preditas, na ordem 0, 1. Não use o teste para ajustar hiperparâmetros. Para estudar variabilidade, repita o protocolo completo com outras seeds e registre todas as execuções, sem selecionar a melhor seed. Os tempos dependem do equipamento.

## Trabalho 2

Substitua o carregamento de dados pela base escolhida. Identifique a variável-alvo, classes e métricas. Inclua imputação, codificação e escalonamento dentro dos pipelines conforme necessário; use média macro em problemas multiclasse, explicitando a escolha. Se houver grupos ou dependência temporal, adapte a estratégia de divisão. Não confunda otimização da função objetivo das metaheurísticas com treinamento dos classificadores. Registre o protocolo, parâmetros, média e dispersão, e justifique a escolha do modelo.

[Voltar aos PDFs da Aula 15](../../aulas/15-ensemble/README.md).
