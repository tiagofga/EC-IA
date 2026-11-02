# BFS - Busca em Largura

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

