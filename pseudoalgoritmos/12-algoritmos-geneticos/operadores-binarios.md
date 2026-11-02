# Operadores binários da prática de AG

A prática utiliza cromossomos de 16 bits. O alvo da imagem 4 × 4 é `0110100110010110`. Cada candidato tem o mesmo tamanho, e o fitness conta posições coincidentes.

## Fitness

```text
Algoritmo FITNESS_BINARIO(individuo, alvo)
  acertos ← 0
  para i ← 1 até 16 faça
    se individuo[i] = alvo[i] então
      acertos ← acertos + 1
    fim se
  fim para
  retornar acertos
FimAlgoritmo
```

## Seleção por torneio de dois

```text
Algoritmo TORNEIO(populacao)
  (a, b) ← SORTEAR_DOIS_PARTICIPANTES(populacao)
  se FITNESS(a) ≥ FITNESS(b) então
    retornar COPIAR(a)
  senão
    retornar COPIAR(b)
  fim se
FimAlgoritmo
```

O sorteio pode ser feito com ou sem reposição, desde que a convenção fique explícita. Na implementação de referência, são dois participantes distintos.

## Crossover de um ponto

```text
Algoritmo CROSSOVER_UM_PONTO(pai1, pai2)
  corte ← SORTEAR_INTEIRO(1, 15)
  filho1 ← PREFIXO(pai1, corte) + SUFIXO(pai2, corte)
  filho2 ← PREFIXO(pai2, corte) + SUFIXO(pai1, corte)
  retornar (filho1, filho2)
FimAlgoritmo
```

## Mutação por gene

```text
Algoritmo MUTAR_POR_GENE(individuo, pm)
  filho ← COPIAR(individuo)
  para i ← 1 até 16 faça
    se SORTEAR_UNIFORME(0, 1) < pm então
      filho[i] ← 1 − filho[i]
    fim se
  fim para
  retornar filho
FimAlgoritmo
```

**Atenção:** os operadores acima preservam uma representação binária, mas não devem ser transferidos diretamente a permutações do TSP.
