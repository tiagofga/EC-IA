# AdaBoost - classificação binária clássica

**Entrada:** D = {(xᵢ,yᵢ)} com rótulos -1 ou +1, estimador base que aceita pesos, número máximo T de etapas.  
**Saída:** estimadores e pesos da combinação.

```text
Algoritmo ADABOOST_BINARIO(D, base, T)
  n ← |D|
  w[i] ← 1/n para i ← 1 até n
  H ← lista vazia
  para t ← 1 até T faça
    h ← TREINAR_PONDERADO(COPIAR(base), D, w)
    ε ← soma de w[i] para exemplos com y[i] ≠ h(x[i])
    se ε = 0 então
      retornar modelo perfeito no treino h, com parada antecipada
    fim se
    se ε ≥ 0,5 então
      interromper  // estimador não útil nesta variante
    fim se
    α ← 0,5 × ln((1 - ε)/ε)
    inserir (h, α) em H
    para i ← 1 até n faça
      w[i] ← w[i] × exp(-α × y[i] × h(x[i]))
    fim para
    Z ← SOMA(w)
    para i ← 1 até n faça
      w[i] ← w[i] / Z
    fim para
  fim para
  se H estiver vazio então retornar falha de ajuste
  retornar H
FimAlgoritmo

Algoritmo ADABOOST_PREDIZER(H, x)
  se H for um modelo de parada antecipada então
    retornar H(x)
  fim se
  s ← soma de α × h(x) para cada (h, α) em H
  retornar SINAL_COM_DESEMPATE(s)
FimAlgoritmo
```

**Invariantes:** pesos não negativos e normalizados; para 0 < ε < 0,5, α é positivo. A parada antecipada com erro zero evita ln de divisão por zero; ela não garante perfeição fora do treino.

**Atenção:** este é o AdaBoost binário didático dos slides, não uma reprodução de todas as variantes de biblioteca (como SAMME). Um exemplo incorreto recebe maior peso relativo, inclusive quando for ruído.
