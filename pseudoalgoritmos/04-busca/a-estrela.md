# A*

Função de avaliação:

```text
f(n) = g(n) + h(n)
```

```text
inicializar a fronteira com o nó inicial

enquanto a fronteira não estiver vazia:
    remover o nó com menor f(n)

    se o nó satisfaz o objetivo:
        retornar a solução

    para cada sucessor:
        calcular novo g(n)
        calcular f(n) = g(n) + h(n)
        atualizar a melhor alternativa conhecida quando necessário

retornar falha
```
