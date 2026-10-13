# Validação cruzada k-fold para selecionar k

```text
para cada k candidato:
  dividir somente os dados de desenvolvimento em K folds
  para cada fold de validação:
    ajustar preparação e KNN apenas nos folds de treinamento
    avaliar no fold de validação
  calcular média das métricas
escolher k com base na validação
ajustar configuração escolhida com todos os dados de treino
avaliar uma única vez no teste reservado
```
