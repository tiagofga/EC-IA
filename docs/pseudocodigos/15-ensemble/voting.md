# Voting - Hard e Soft

**Entrada:** treino D, M estimadores base, classes C, pesos não negativos w com soma positiva.  
**Saída:** estimadores ajustados e predição agregada.

## Treinamento

```text
Algoritmo VOTING_TREINAR(D, modelos)
  H ← lista vazia
  para cada modelo em modelos faça
    inserir TREINAR(COPIAR(modelo), D) em H
  fim para
  retornar H
FimAlgoritmo
```

## Hard voting

```text
Algoritmo HARD_VOTING(H, x, C, w)
  votos[c] ← 0 para cada c em C
  para m ← 1 até |H| faça
    c ← PREDIZER_CLASSE(H[m], x)
    votos[c] ← votos[c] + w[m]
  fim para
  retornar ARGMAX_COM_DESEMPATE(votos)
FimAlgoritmo
```

## Soft voting

```text
Algoritmo SOFT_VOTING(H, x, C, w)
  soma[c] ← 0 para cada c em C
  para m ← 1 até |H| faça
    p ← PROBABILIDADES_ALINHADAS(H[m], x, C)
    para cada c em C faça
      soma[c] ← soma[c] + w[m] × p[c]
    fim para
  fim para
  media[c] ← soma[c] / SOMA(w) para cada c em C
  retornar ARGMAX_COM_DESEMPATE(media)
FimAlgoritmo
```

**Invariantes:** pesos válidos, classes alinhadas e regra de desempate definida. No soft voting, cada vetor de probabilidades deve possuir significado compatível.

**Atenção:** hard e soft voting podem discordar. Pesos, calibração e hiperparâmetros devem ser escolhidos no treinamento/validação, nunca pelo teste final.
