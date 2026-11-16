# Stacking - predições fora do fold (OOF)

**Entrada:** treino D, M estimadores base, metaestimador, partição de treino em K folds.  
**Saída:** bases reajustadas e metaestimador.

```text
Algoritmo STACKING_TREINAR(D, bases, meta, folds)
  Z ← matriz de características OOF inicialmente vazia
  para k ← 1 até |folds| faça
    V ← índices do fold k
    T ← demais índices de D
    para m ← 1 até |bases| faça
      h ← TREINAR(COPIAR(bases[m]), D[T])
      para cada i em V faça
        Z[i,m] ← PREDICAO_META(h, x[i])
      fim para
    fim para
  fim para
  g ← TREINAR(COPIAR(meta), {(Z[i], y[i])})
  H ← lista vazia
  para cada base em bases faça
    inserir TREINAR(COPIAR(base), D) em H
  fim para
  retornar H, g
FimAlgoritmo

Algoritmo STACKING_PREDIZER(H, g, x)
  z ← concatenar PREDICAO_META(h, x) para cada h em H
  retornar PREDIZER(g, z)
FimAlgoritmo
```

`PREDICAO_META` pode ser um escore, vetor de probabilidades alinhadas ou outra saída compatível. A notação Z[i,m] representa o bloco de colunas correspondente ao modelo m; em classificação binária, pode conter a probabilidade da classe positiva.

**Invariantes:** cada linha OOF é produzida por modelos que não foram ajustados naquele exemplo. Transformações de dados e seleção de parâmetros dos modelos base não usam os dados do fold reservado para gerar aquela predição. As características usadas em inferência têm a mesma ordem e significado das usadas no treino do metaestimador.

**Atenção:** em validação cruzada externa, todo este procedimento ocorre exclusivamente no treino de cada fold externo. O conjunto reservado de teste não é usado para gerar características OOF.
