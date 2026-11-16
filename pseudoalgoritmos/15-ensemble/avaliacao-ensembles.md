# Avaliação experimental - modelos individuais e ensembles

**Entrada:** dados rotulados D, configurações candidatas, seed, K folds e métricas.  
**Saída:** resultados de validação e avaliação final das configurações previamente escolhidas.

```text
Algoritmo COMPARAR_MODELOS(D, configurações, seed, K)
  (treino, teste) ← DIVIDIR_ESTRATIFICADO(D, seed)
  folds ← GERAR_FOLDS_ESTRATIFICADOS(treino, K, seed)
  resultados ← lista vazia
  para cada configuração em configurações faça
    métricas_fold ← lista vazia
    para cada (T, V) em folds faça
      modelo ← CRIAR_PIPELINE(COPIAR(configuração))
      ajustar modelo somente em treino[T]
      pred ← PREDIZER(modelo, treino[V])
      inserir (CALCULAR_METRICAS(treino[V], pred), tempo de ajuste) em métricas_fold
    fim para
    inserir (configuração, MEDIA(métricas_fold), DESVIO_PADRAO(métricas_fold)) em resultados
  fim para
  retornar resultados, treino, teste
FimAlgoritmo

Algoritmo AVALIAR_FINAL(configurações_congeladas, treino, teste)
  para cada configuração em configurações_congeladas faça
    modelo ← CRIAR_PIPELINE(COPIAR(configuração))
    ajustar modelo em todo o treino
    pred ← PREDIZER(modelo, teste)
    registrar métricas e matriz de confusão
  fim para
  retornar resultados finais
FimAlgoritmo
```

Na prática da Aula 15, a divisão reserva 20% para teste, e a comparação utiliza cinco folds estratificados no treino, com acurácia, precisão, recall, F1 e tempo de ajuste. Stacking usa validação interna dentro do treino de cada fold externo.

**Invariantes:** mesmas divisões e classe positiva para todas as configurações; transformações ajustadas apenas nos subconjuntos de treino; configurações congeladas antes de consultar o teste. Para dados temporais ou com grupos, adapte a divisão para respeitar a dependência.

**Atenção:** a melhor média de validação não garante superioridade universal. A dispersão entre folds não equivale automaticamente a um intervalo de confiança. Não utilize o teste para reajustar parâmetros.
