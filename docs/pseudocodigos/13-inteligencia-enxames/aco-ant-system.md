# Ant System para o TSP

**Entrada:** distâncias d, número de formigas m, iterações T, parâmetros α, β, ρ e Q.  
**Saída:** melhor rota R* e seu custo L*.

```text
Algoritmo ANT_SYSTEM(d, m, T, α, β, ρ, Q)
  inicializar τ[i,j] > 0 para todas as arestas
  L* ← +∞
  para t ← 1 até T faça
    para k ← 1 até m faça
      R[k] ← CONSTRUIR_ROTA_POR_AMOSTRAGEM(τ, d, α, β)
      L[k] ← CUSTO_DA_ROTA(R[k], d)
      se L[k] < L* então
        R* ← COPIAR(R[k])
        L* ← L[k]
      fim se
    fim para
    para cada aresta (i,j) faça
      τ[i,j] ← (1 − ρ) × τ[i,j]
    fim para
    para k ← 1 até m faça
      para cada aresta (i,j) utilizada em R[k] faça
        τ[i,j] ← τ[i,j] + Q / L[k]
      fim para
    fim para
  fim para
  retornar (R*, L*)
FimAlgoritmo
```

Na construção, a próxima cidade j é amostrada dentre as ainda admissíveis, com peso `τ[i,j]^α × (1/d[i,j])^β`, para distâncias positivas. Os pesos são normalizados pela soma dos pesos admissíveis.

**Observe:** neste Ant System, todas as rotas da iteração são construídas e avaliadas **antes** da evaporação e do depósito de feromônio. Em TSP simétrico, o feromônio das arestas pode ser tratado simetricamente; a implementação precisa respeitar a representação adotada.
