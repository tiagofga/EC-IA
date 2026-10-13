# Indução conceitual de Árvore de Decisão

```text
INDUZIR_ARVORE(exemplos):
  se todas as classes forem iguais: retornar folha da classe
  se nenhuma divisão útil existir: retornar folha da maioria
  para cada divisão candidata:
    calcular impureza ponderada dos filhos (Gini ou entropia)
  escolher a melhor divisão
  construir recursivamente os filhos
  retornar nó de decisão
```
A implementação de `DecisionTreeClassifier` pode empregar otimizações adicionais.
