# A*

```text
inicializar a fronteira como fila de prioridade
atribuir g(inicial) = 0
calcular f(inicial) = g(inicial) + h(inicial)

enquanto a fronteira não estiver vazia:
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

