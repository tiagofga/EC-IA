# Busca em Largura - BFS

```text
inicializar a fronteira com o nó inicial em uma fila FIFO

enquanto a fronteira não estiver vazia:
    remover o primeiro nó da fila

    se o nó satisfaz o objetivo:
        retornar a solução

    se o estado ainda não foi expandido:
        registrar o estado como explorado
        inserir sucessores ainda relevantes no final da fila

retornar falha
```
