# UCS - Busca de Custo Uniforme

```text
inicializar a fronteira como fila de prioridade
atribuir g(inicial) = 0

enquanto a fronteira não estiver vazia:
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

