# Pseudocódigos - Aula 04

Material conceitual, independente de linguagem de programação, para apoiar a revisão das estratégias de busca estudadas na disciplina.

## Métodos disponíveis

| Família | Estratégia | Regra principal |
|---|---|---|
| Busca não informada | BFS | menor profundidade / FIFO |
| Busca não informada | DFS | maior profundidade / LIFO |
| Busca não informada | Custo Uniforme - UCS | menor `g(n)` |
| Busca informada | Busca Gulosa | menor `h(n)` |
| Busca informada | A* | menor `f(n) = g(n) + h(n)` |
| Busca informada | Beam Search | mantém os `k` melhores candidatos |
| Busca local | Hill Climbing | melhor vizinho que melhora a avaliação |
| Busca local | Simulated Annealing | aceita algumas pioras conforme a temperatura |
| Busca local/evolucionária | Algoritmo Genético | seleção, cruzamento e mutação sobre uma população |

## Como usar

Use os pseudocódigos para identificar:

1. qual estrutura ou conjunto de estados o método mantém;
2. como o próximo estado é escolhido;
3. qual informação orienta a busca;
4. em que situações o algoritmo pode falhar, parar cedo ou produzir uma solução não ótima.

Os arquivos desta pasta são deliberadamente conceituais e não constituem implementações prontas para o Trabalho 1.
