# K-Nearest Neighbors

```text
KNN(D, x, k):
  para cada (xi, yi) de D: calcular d(x, xi)
  ordenar exemplos por distância crescente
  selecionar os k mais próximos
  contar votos por classe
  retornar a classe com mais votos
```
Em caso de empate, é necessária uma regra operacional explícita.
