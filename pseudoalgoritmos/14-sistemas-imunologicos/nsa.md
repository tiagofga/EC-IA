# NSA - Seleção Negativa

**Entrada:** padrões próprios S, função de reconhecimento, quantidade desejada N e limite de tentativas T.  
**Saída:** conjunto de detectores D e sinalização de possíveis anomalias.

## Formação dos detectores

```text
Algoritmo NSA_TREINAR(S, X, N, T, RECONHECE)
  D ← conjunto vazio
  t ← 0
  enquanto |D| < N e t < T faça
    c ← GERAR_CANDIDATO(X)
    t ← t + 1
    tolerante ← verdadeiro
    para cada s em S faça
      se RECONHECE(c, s) então
        tolerante ← falso
        interromper
      fim se
    fim para
    se tolerante então
      D ← D ∪ {c}
    fim se
  fim enquanto
  retornar D
FimAlgoritmo
```

## Detecção

```text
Algoritmo NSA_DETECTAR(x, D, RECONHECE)
  para cada d em D faça
    se RECONHECE(d, x) então
      retornar "possível anomalia"
    fim se
  fim para
  retornar "não detectada"
FimAlgoritmo
```

## Regras de reconhecimento

Na teoria, para raio fixo r, `RECONHECE(d,x)` é verdadeiro quando dist(d,x) ≤ r. Na prática complementar, cadeias binárias de mesmo comprimento são comparadas por janelas contíguas alinhadas.

```text
Algoritmo RECONHECE_CONTIGUO(a, b, r)
  requer |a| = |b| e 1 ≤ r ≤ |a|
  para i ← 1 até |a| - r + 1 faça
    se a[i..i+r-1] = b[i..i+r-1] então
      retornar verdadeiro
    fim se
  fim para
  retornar falso
FimAlgoritmo
```

**Invariantes:** nenhum detector aceito reconhece um padrão de S; o conjunto não contém duplicatas. O limite T pode encerrar a formação com menos que N detectores.

**Atenção:** tolerância ao próprio conhecido não garante cobertura completa do espaço nem ausência de falsos alarmes em novos exemplos normais. A ausência de ativação não comprova normalidade.
