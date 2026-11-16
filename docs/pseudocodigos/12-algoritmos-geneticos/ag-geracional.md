# AG geracional com elitismo

**Entrada:** problema e função fitness, tamanho de população N, limite de gerações G, taxas de crossover pc e mutação pm.  
**Saída:** melhor solução conhecida e seu fitness.

```text
Algoritmo AG_GERACIONAL(problema, N, G, pc, pm)
  P ← INICIALIZAR_POPULACAO(N, problema)
  AVALIAR(P)
  melhor_global ← MELHOR(P)
  para geracao ← 1 até G faça
    se CRITERIO_PARADA(melhor_global) então
      retornar melhor_global
    fim se
    Q ← [COPIAR(MELHOR(P))]  // elitismo de um indivíduo
    enquanto |Q| < N faça
      pai1 ← SELECIONAR_POR_TORNEIO(P)
      pai2 ← SELECIONAR_POR_TORNEIO(P)
      se SORTEAR_PROBABILIDADE(pc) então
        (f1, f2) ← CROSSOVER_UM_PONTO(pai1, pai2)
      senão
        (f1, f2) ← (COPIAR(pai1), COPIAR(pai2))
      fim se
      para cada filho em (f1, f2) faça
        se |Q| < N então
          INSERIR(Q, MUTAR_POR_GENE(filho, pm))
        fim se
      fim para
    fim enquanto
    P ← Q
    AVALIAR(P)
    se FITNESS(MELHOR(P)) > FITNESS(melhor_global) então
      melhor_global ← COPIAR(MELHOR(P))
    fim se
  fim para
  retornar melhor_global
FimAlgoritmo
```

**Invariantes:** população com N candidatos válidos; a elite não é alterada pela mutação; o melhor fitness acumulado não diminui quando a avaliação é fixa. O teste de parada pode ocorrer após a inicialização e após cada geração, conforme a implementação. O pseudocódigo assume maximização do fitness e operadores compatíveis com a representação.

**Atenção:** preservação da elite não implica manutenção da diversidade. O número de avaliações de fitness deve ser registrado quando se comparam algoritmos.
