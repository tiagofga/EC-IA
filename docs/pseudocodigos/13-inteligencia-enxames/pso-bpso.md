# PSO contínuo e BPSO binário

No PSO contínuo, cada partícula guarda posição `x`, velocidade `v`, melhor posição própria `pbest` e melhor posição coletiva `gbest`.

## PSO contínuo

```text
Algoritmo PSO_CONTINUO(f, m, T, w, c1, c2)
  inicializar posições e velocidades das m partículas
  avaliar as posições iniciais
  pbest ← posições iniciais
  gbest ← melhor pbest
  para t ← 1 até T faça
    para cada partícula k e dimensão i faça
      r1, r2 ← sorteios uniformes independentes em [0,1)
      v[k,i] ← w×v[k,i] + c1×r1×(pbest[k,i]−x[k,i])
                          + c2×r2×(gbest[i]−x[k,i])
      x[k,i] ← x[k,i] + v[k,i]
    fim para
    avaliar novas posições e atualizar pbest e gbest
  fim para
  retornar gbest
FimAlgoritmo
```

## BPSO para 16 bits

A velocidade continua real; a posição é amostrada como bit, e não calculada por deslocamento geométrico.

```text
Algoritmo BPSO_BINARIO(alvo, m, T, w, c1, c2)
  inicializar m posições binárias de 16 bits
  inicializar velocidades reais
  avaliar posições, definir pbest e gbest
  registrar avaliações iniciais e melhor fitness acumulado
  para t ← 2 até T faça
    para cada partícula k faça
      para i ← 1 até 16 faça
        r1, r2 ← sorteios uniformes independentes em [0,1)
        v[k,i] ← w×v[k,i] + c1×r1×(pbest[k,i]−x[k,i])
                            + c2×r2×(gbest[i]−x[k,i])
        v[k,i] ← LIMITAR(v[k,i], −6, 6)
        prob1 ← 1/(1+exp(−v[k,i]))
        x[k,i] ← 1 se SORTEAR_UNIFORME(0,1) < prob1, senão 0
      fim para
      avaliar x[k]
      se x[k] supera pbest[k] então pbest[k] ← COPIAR(x[k])
      se x[k] supera gbest então gbest ← COPIAR(x[k])
      registrar avaliação e melhor fitness acumulado
    fim para
  fim para
  retornar gbest e histórico
FimAlgoritmo
```

**Observe:** a inicialização já consome m avaliações. Com m=20 e T=30, o total é 600 avaliações, incluindo as posições iniciais. A convenção de contagem deve ser mantida ao comparar ACO e BPSO. O limite de velocidade `[-6,6]` é o utilizado no código-base da prática, e não uma propriedade universal do método.

Os algoritmos acima são descrição conceitual. Os `TODO` de `bpso.py` permanecem destinados aos estudantes.
