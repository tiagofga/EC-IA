# Random Forest - Árvores e atributos aleatórios

**Entrada:** treino D, número M de árvores, quantidade q de atributos candidatos por nó, critérios de parada.  
**Saída:** floresta de árvores e predições agregadas.

```text
Algoritmo FLORESTA_TREINAR(D, M, q, critérios)
  H ← lista vazia
  para m ← 1 até M faça
    Dm ← BOOTSTRAP(D)
    H[m] ← CRESCER_ARVORE(Dm, q, critérios)
  fim para
  retornar H
FimAlgoritmo

Algoritmo CRESCER_ARVORE(S, q, critérios)
  se CRITERIO_DE_PARADA(S, critérios) então
    retornar FOLHA(distribuição de classes em S)
  fim se
  A ← SORTEAR_ATRIBUTOS_SEM_REPOSICAO(q)
  divisão ← MELHOR_DIVISAO_VALIDA(S, A, impureza)
  se não existe divisão válida então
    retornar FOLHA(distribuição de classes em S)
  fim se
  (S_esq, S_dir) ← PARTICIONAR(S, divisão)
  retornar NO(divisão,
              CRESCER_ARVORE(S_esq, q, critérios),
              CRESCER_ARVORE(S_dir, q, critérios))
FimAlgoritmo

Algoritmo FLORESTA_PREDIZER(H, x)
  p ← média das probabilidades de classe de H para x
  retornar ARGMAX_COM_DESEMPATE(p)
FimAlgoritmo
```

**Invariantes:** q é limitado ao número de atributos disponíveis; a seleção aleatória é repetida por nó. A divisão deve respeitar tamanhos mínimos e critérios de parada. A formulação ilustra a Random Forest clássica com bootstrap; bibliotecas podem buscar mais atributos se não houver divisão válida entre os candidatos inicialmente sorteados.

**Atenção:** restringir atributos reduz correlação potencial entre árvores, mas também pode excluir divisões úteis. Não confunda variância explicada por PCA com a impureza usada nas árvores.
