# DFS - Busca em Profundidade

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

