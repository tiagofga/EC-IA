# Greedy Search - Busca Gulosa

```text
inicializar a fronteira como fila de prioridade
ordenar os nós pelo menor h(n)

enquanto a fronteira não estiver vazia:
    remover o nó com menor h(n)

    se o nó satisfaz o objetivo:
        retornar a solução

    gerar os sucessores relevantes
    calcular h(n) para os sucessores
    inserir os sucessores na fronteira

retornar falha
```

**Observe:** a Busca Gulosa considera a estimativa até a meta, mas ignora diretamente o custo já acumulado.

