# ACO binário: adaptação da prática

**Problema:** construir uma imagem de 16 bits, usando duas escolhas possíveis por posição.  
**Informação compartilhada:** feromônios `τ[i,0]` e `τ[i,1]`, ambos positivos.

```text
Algoritmo ACO_BINARIO(alvo, m, T, α, ρ, Q)
  para i ← 1 até 16 faça
    τ[i,0] ← 1
    τ[i,1] ← 1
  fim para
  melhor_fitness ← −∞
  para t ← 1 até T faça
    solucoes ← vazio
    para k ← 1 até m faça
      para i ← 1 até 16 faça
        p0 ← τ[i,0]^α / (τ[i,0]^α + τ[i,1]^α)
        sortear bit x[k,i] com P(0)=p0 e P(1)=1−p0
      fim para
      f[k] ← FITNESS_BINARIO(x[k], alvo)
      registrar avaliação e melhor fitness acumulado
      se f[k] > melhor_fitness então
        melhor ← COPIAR(x[k])
        melhor_fitness ← f[k]
      fim se
      adicionar (x[k], f[k]) a solucoes
    fim para
    para cada posição i e bit b em {0,1} faça
      τ[i,b] ← (1−ρ)×τ[i,b]
      para k ← 1 até m faça
        se x[k,i] = b então
          τ[i,b] ← τ[i,b] + Q×f[k]/16
        fim se
      fim para
    fim para
  fim para
  retornar melhor, melhor_fitness e histórico
FimAlgoritmo
```

**Observe:** a fórmula da probabilidade não utiliza a imagem-alvo. Somente o fitness global avalia as soluções, e o reforço beneficia todas as escolhas de uma formiga, inclusive bits incorretos. Assume-se α ≥ 0 e feromônios positivos; evite configurações que zerem o denominador. Esta adaptação não utiliza distância ou heurística do TSP.

O pseudocódigo formaliza a atividade, mas não disponibiliza uma implementação Python resolvida.
