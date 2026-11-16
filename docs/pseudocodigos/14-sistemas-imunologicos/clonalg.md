# CLONALG - Seleção Clonal para otimização

**Entrada:** objetivo f de maximização, representação, tamanho N, número n de selecionados, fator β, taxas pmin e pmax, quantidade R de renovações e orçamento B de avaliações.  
**Saída:** melhor candidato conhecido, fitness e histórico de melhor fitness por avaliação.

## Ciclo de seleção clonal

```text
Algoritmo CLONALG(f, N, n, β, pmin, pmax, R, B)
  requer 1 ≤ n ≤ N, 0 ≤ R < N e B ≥ N
  P ← INICIALIZAR_POPULACAO(N)
  melhor ← vazio
  avaliações ← 0
  para cada c em P faça
    avaliar c
    avaliações ← avaliações + 1
    atualizar melhor se vazio ou se c for superior
    registrar (avaliações, fitness(melhor))
  fim para
  enquanto avaliações < B e não ATINGIU_PARADA(melhor) faça
    E ← n melhores de P, ordenados por fitness
    Q ← COPIAR(P)
    para i ← 1 até |E| faça
      a ← AFINIDADE(E[i])
      quantidade ← QUANTIDADE_CLONES(β, n, i)
      pm ← pmin + (pmax - pmin) × (1 - a)
      para j ← 1 até quantidade faça
        se avaliações = B então interromper
        c ← HIPERMUTAR(COPIAR(E[i]), pm)
        avaliar c
        avaliações ← avaliações + 1
        inserir c em Q
        atualizar melhor se c for superior
        registrar (avaliações, fitness(melhor))
      fim para
    fim para
    P ← N - R melhores de Q
    para j ← 1 até R faça
      se avaliações = B então interromper
      c ← GERAR_CANDIDATO_VALIDO()
      avaliar c
      avaliações ← avaliações + 1
      inserir c em P
      atualizar melhor se c for superior
      registrar (avaliações, fitness(melhor))
    fim para
  fim enquanto
  retornar melhor, fitness(melhor), histórico
FimAlgoritmo
```

## Hipermutação de candidato binário

```text
Algoritmo HIPERMUTAR_BINARIO(c, pm)
  para i ← 1 até |c| faça
    u ← SORTEAR_UNIFORME(0,1)
    se u < pm então
      c[i] ← 1 - c[i]
    fim se
  fim para
  retornar c
FimAlgoritmo
```

## Variantes da teoria e da prática

| Elemento | Variante teórica | Prática de 16 bits |
|---|---|---|
| Clonagem por ranking | max(1, floor(βn/i)) | ceil(βn/i), β > 0 |
| Afinidade | Normalização coerente com o objetivo | Fitness/16 |
| Mutação | Dependente da afinidade, adequada à representação | Inversão independente por bit |
| Parada | Gerações ou critério definido | Orçamento de avaliações e condição do melhor |

**Invariantes:** afinidade em [0,1]; taxas válidas; melhor fitness acumulado não diminui; cada chamada ao objetivo consome uma avaliação. A população pode terminar incompleta quando se esgota o orçamento durante a renovação. O teste do ótimo no início de cada geração permite concluir a geração corrente, conforme a prática.

**Atenção:** o registro deve atualizar o melhor após cada avaliação, inclusive na inicialização. Em permutações ou variáveis reais, substitua a mutação binária por operador compatível. Defina a validade, restrições e a afinidade antes de adaptar ao Trabalho 02.
