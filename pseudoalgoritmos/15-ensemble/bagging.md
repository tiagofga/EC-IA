# Bagging - Bootstrap Aggregating

**Entrada:** dados de treino D de tamanho n, estimador base, número M de estimadores.  
**Saída:** conjunto de estimadores e predição agregada.

```text
Algoritmo BAGGING_TREINAR(D, base, M)
  H ← lista vazia
  para m ← 1 até M faça
    I[m] ← sortear |D| índices de D com reposição
    Dm ← exemplos de D nos índices I[m]
    H[m] ← TREINAR(COPIAR(base), Dm)
  fim para
  retornar H, I
FimAlgoritmo

Algoritmo BAGGING_PREDIZER(H, x)
  obter predições dos estimadores de H para x
  retornar AGREGAR(predições)
FimAlgoritmo
```

Em classificação, a agregação pode ser votação ou média de probabilidades; em regressão, média de valores numéricos. A amostra bootstrap contém n sorteios, mas pode conter menos de n exemplos distintos.

## Avaliação out-of-bag (OOB)

```text
Algoritmo BAGGING_OOB(H, I, D)
  para cada índice i de D faça
    elegíveis ← {m : i não pertence a I[m]}
    se elegíveis não for vazio então
      pred[i] ← AGREGAR(predições de elegíveis para D[i])
    senão
      marcar i como sem predição OOB
    fim se
  fim para
  retornar predições OOB e cobertura
FimAlgoritmo
```

**Invariantes:** as amostras são retiradas apenas do treino; modelos são ajustados independentemente. Não use as árvores que viram o exemplo para sua avaliação OOB.

**Atenção:** OOB não substitui automaticamente o teste externo. Mais estimadores aumentam custo e podem não melhorar o resultado.
