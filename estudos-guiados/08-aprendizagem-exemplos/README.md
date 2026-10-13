# Estudo Guiado 08 - Aprendizagem com Exemplos

Resolva antes de consultar novamente os slides. Use os códigos somente depois de registrar suas hipóteses.

## Objetivos de aprendizagem

- **De regras para exemplos:** D={(x_i,y_i)}; hipótese h(x) aproxima relação f(x); desempenho relevante é em exemplos não vistos.
- **Classificação e regressão:** Classificação prevê classes; regressão prevê valores numéricos contínuos; o alvo define a tarefa.
- **Generalização:** Underfitting e overfitting; treinamento e teste devem ser separados antes de avaliar.
- **Árvores de decisão:** Nós são testes, ramos são resultados, folhas são predições; caminho raiz-folha equivale a regra.
- **Escolha de divisões:** Entropia mede incerteza, Gini mede impureza e ganho de informação compara divisões.
- **Implementação:** DecisionTreeClassifier, fit, predict, max_depth e representação da árvore.

## Questões de interpretação

1. Qual diferença entre conhecimento codificado em regras e hipótese induzida por exemplos?
2. Quais variáveis diferenciam classificação de regressão?
3. Por que maximizar a acurácia no treinamento não basta?
4. Calcule a entropia de um nó com classes balanceadas e de um nó puro.
5. Por que max_depth pode melhorar a generalização?

## Prática com Python

Execute os scripts em `exemplos/08-aprendizagem-exemplos/` quando houver e identifique entradas, etapas de ajuste e saída. Não utilize o conjunto de teste para selecionar hiperparâmetros.

## Discussão

Qual decisão metodológica mais influencia o resultado desta aula? Proponha uma modificação e descreva como ela poderia ser avaliada de maneira reprodutível.

## Autoavaliação

- [ ] Identifico entradas e saídas.
- [ ] Explico o funcionamento do método.
- [ ] Consigo interpretar seus parâmetros.
- [ ] Reconheço um erro experimental que invalidaria a comparação.
- [ ] Explico como a aula prepara o tema seguinte.
