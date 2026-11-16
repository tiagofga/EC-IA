# Gradient Boosting - redução sequencial da perda

**Entrada:** D, perda diferenciável L, estimador base, taxa η positiva, número T de etapas.  
**Saída:** preditor aditivo F.

```text
Algoritmo GRADIENT_BOOSTING(D, L, base, η, T)
  F0 ← preditor constante que minimiza a perda inicial
  F ← F0
  H ← lista vazia
  para t ← 1 até T faça
    para cada (x[i], y[i]) em D faça
      r[i] ← -DERIVADA_DE_L(y[i], F(x[i]), em relação a F)
    fim para
    h ← TREINAR_REGRESSOR(COPIAR(base), {(x[i], r[i])})
    h ← AJUSTAR_CONTRIBUICAO_A_PERDA(h, F, D, L)
    inserir h em H
    F(x) ← F0(x) + η × SOMA(hj(x) para hj em H)
  fim para
  retornar F0, H, η
FimAlgoritmo

Algoritmo GRADIENT_BOOSTING_PREDIZER(F0, H, η, x)
  retornar F0(x) + η × SOMA(h(x) para h em H)
FimAlgoritmo
```

Para perda quadrática L = 0,5(y-F)², F0 é a média de y no treino e r[i] = y[i] - F(x[i]). O ajuste da contribuição pode ser incorporado à saída do regressor, como no exemplo didático dos slides.

**Invariantes:** cada novo estimador depende do preditor acumulado anterior; a etapa não pode ser treinada independentemente das anteriores. Em classificação, a perda e a transformação de escores em probabilidades/classes devem ser compatíveis (por exemplo, log-loss binária). Multiclasse pode exigir múltiplas contribuições por etapa.

**Atenção:** o erro do treino pode cair enquanto a generalização piora. Controle η, número de etapas e complexidade dos estimadores por validação.
