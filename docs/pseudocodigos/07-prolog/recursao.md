# Recursão e relações transitivas

```text
RELACAO_TRANSITIVA(X, Y)
    se existe relação direta entre X e Y:
        sucesso

    para cada Z relacionado diretamente a X:
        se RELACAO_TRANSITIVA(Z, Y) tiver sucesso:
            sucesso

    falha
```

## Ideia central

Uma relação recursiva define um caso base e um caso recursivo. Em Prolog, a ordem desses casos e das metas influencia a execução.

Exemplo conceitual: alcançar um nó diretamente ou alcançar algum intermediário que, por sua vez, alcança o destino.
