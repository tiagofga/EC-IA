# Busca Gulosa

Função de avaliação:

```text
f(n) = h(n)
```

```text
inicializar a fronteira com o nó inicial

enquanto a fronteira não estiver vazia:
    remover o nó com menor h(n)

    se o nó satisfaz o objetivo:
        retornar a solução

    expandir o nó e inserir os candidatos relevantes

retornar falha
```
