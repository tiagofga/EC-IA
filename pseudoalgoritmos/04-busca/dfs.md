# Busca em Profundidade - DFS

```text
inicializar a fronteira com o nó inicial em uma pilha LIFO

enquanto a fronteira não estiver vazia:
    remover o nó do topo

    se o nó satisfaz o objetivo:
        retornar a solução

    se o estado ainda não foi expandido:
        registrar o estado como explorado
        inserir os sucessores segundo a ordem definida

retornar falha
```
