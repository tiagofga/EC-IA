# Pseudocódigos - Aula 04

Esta seção reúne versões **conceituais** dos algoritmos estudados em Busca. O objetivo é ajudar na leitura do fluxo de decisão de cada método sem fornecer uma implementação pronta em uma linguagem de programação.

> Os pseudocódigos devem ser usados em conjunto com os slides, o estudo guiado e as visualizações interativas.

## Comparação rápida

| Família | Método | Critério principal |
|---|---|---|
| Busca não informada | BFS | menor profundidade / FIFO |
| Busca não informada | DFS | maior profundidade / LIFO |
| Busca não informada | UCS | menor custo acumulado `g(n)` |
| Busca informada | Greedy Search | menor heurística `h(n)` |
| Busca informada | A* | menor `f(n) = g(n) + h(n)` |
| Busca informada | Beam Search | mantém os `k` melhores candidatos por nível |
| Busca local | Hill Climbing | move para o melhor vizinho que melhora a avaliação |
| Busca local | Simulated Annealing | pode aceitar pioras conforme a temperatura |
| Busca local/evolucionária | Algoritmo Genético | evolui uma população por seleção, cruzamento e mutação |

## BFS - Busca em Largura

```text
inicializar a fronteira com o estado inicial em uma fila FIFO

marcar nenhum estado como explorado

enquanto a fronteira não estiver vazia:
    remover o primeiro nó da fila

    se o nó satisfaz o objetivo:
        retornar a solução

    se o estado ainda não foi explorado:
        marcar o estado como explorado
        gerar os sucessores relevantes
        inserir os novos nós no final da fila

retornar falha
```

**Observe:** BFS prioriza a profundidade, não o custo do caminho.

## DFS - Busca em Profundidade

```text
inicializar a fronteira com o estado inicial em uma pilha LIFO

marcar nenhum estado como explorado

enquanto a fronteira não estiver vazia:
    remover o nó do topo da pilha

    se o nó satisfaz o objetivo:
        retornar a solução

    se o estado ainda não foi explorado:
        marcar o estado como explorado
        gerar os sucessores
        inserir os sucessores na pilha segundo a ordem definida

retornar falha
```

**Observe:** a ordem de geração dos sucessores pode alterar profundamente o percurso da DFS.

## UCS - Busca de Custo Uniforme

```text
inicializar a fronteira como fila de prioridade
atribuir g(inicial) = 0

quanto a fronteira não estiver vazia:
    remover o nó com menor g(n)

    se o nó satisfaz o objetivo:
        retornar a solução

    para cada sucessor:
        calcular o novo custo acumulado

        se este caminho for melhor que o conhecido:
            atualizar o custo e a alternativa na fronteira

retornar falha
```

**Observe:** UCS prioriza o custo já pago no caminho.

## Greedy Search - Busca Gulosa

```text
inicializar a fronteira como fila de prioridade
ordenar os nós pelo menor h(n)

quanto a fronteira não estiver vazia:
    remover o nó com menor h(n)

    se o nó satisfaz o objetivo:
        retornar a solução

    gerar os sucessores relevantes
    calcular h(n) para os sucessores
    inserir os sucessores na fronteira

retornar falha
```

**Observe:** a busca gulosa considera a estimativa até a meta, mas ignora diretamente o custo já acumulado.

## A*

```text
inicializar a fronteira como fila de prioridade
atribuir g(inicial) = 0
calcular f(inicial) = g(inicial) + h(inicial)

quanto a fronteira não estiver vazia:
    remover o nó com menor f(n)

    se o nó satisfaz o objetivo:
        retornar a solução

    para cada sucessor:
        calcular novo g(n)
        calcular f(n) = g(n) + h(n)

        se a nova alternativa for melhor:
            atualizar o nó na fronteira

retornar falha
```

**Observe:** A* combina custo acumulado e estimativa heurística.

## Beam Search

```text
inicializar o feixe com o estado inicial

enquanto o feixe não estiver vazio:
    se algum estado do feixe satisfaz o objetivo:
        retornar a solução

    gerar os sucessores de todos os estados do feixe
    avaliar os sucessores pela heurística
    ordenar os candidatos
    manter apenas os k melhores candidatos
    descartar os demais

retornar falha
```

**Observe:** limitar o feixe reduz o uso de memória, mas pode descartar caminhos necessários para encontrar a melhor solução.

## Hill Climbing

```text
escolher um estado inicial
avaliar o estado atual

repetir:
    gerar os vizinhos do estado atual
    selecionar o melhor vizinho

    se o melhor vizinho melhora o estado atual:
        mover para o melhor vizinho
    caso contrário:
        retornar o estado atual
```

**Observe:** o método pode parar em ótimos locais ou platôs.

## Simulated Annealing

```text
escolher um estado inicial
inicializar a temperatura T

repetir enquanto T for suficiente:
    escolher um vizinho do estado atual
    calcular a variação de qualidade Δ

    se o vizinho for melhor:
        aceitar o vizinho
    caso contrário:
        calcular a probabilidade de aceitação
        aceitar a piora com essa probabilidade

    reduzir a temperatura T

retornar o melhor estado encontrado
```

**Observe:** aceitar algumas pioras permite escapar de regiões locais no início da busca.

## Algoritmo Genético - AG

```text
criar uma população inicial de indivíduos
avaliar a população

repetir até atingir o critério de parada:
    selecionar indivíduos para reprodução
    aplicar cruzamento para gerar descendentes
    aplicar mutação em alguns descendentes
    avaliar os novos indivíduos
    formar a próxima população

retornar o melhor indivíduo encontrado
```

**Observe:** o AG trabalha com uma população de soluções, não com um único estado corrente.

## Como estudar esta seção

Para cada algoritmo, tente responder:

1. qual estrutura ou conjunto de estados é mantido durante a busca;
2. qual critério decide o próximo estado ou conjunto de estados;
3. qual informação é usada: profundidade, custo, heurística, temperatura ou aptidão;
4. em que situação o algoritmo pode falhar ou produzir uma solução não ótima;
5. qual diferença essencial existe em relação ao método anterior.

Os pseudocódigos desta página são intencionalmente independentes de linguagem de programação e não constituem solução pronta para as atividades da disciplina.
