# Busca de Custo Uniforme - UCS

```text
inicializar a fronteira como fila de prioridade com g(inicial) = 0

enquanto a fronteira não estiver vazia:
    remover o nó com menor g(n)

    se o nó satisfaz o objetivo:
        retornar a solução

    para cada sucessor:
        calcular o novo custo acumulado
        atualizar a melhor alternativa conhecida quando necessário

retornar falha
```
