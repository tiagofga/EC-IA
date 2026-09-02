# Simulated Annealing

```text
escolher um estado inicial
inicializar a temperatura T

repetir enquanto T for suficiente:
    escolher um vizinho do estado atual
    calcular a variação de qualidade Δ

    se o vizinho for melhor:
        aceitar o vizinho
    caso contrário:
        calcular a probabilidade de aceitação
        aceitar a piora com essa probabilidade

    reduzir a temperatura T

retornar o melhor estado encontrado
```

A possibilidade de aceitar algumas pioras permite escapar de ótimos locais, principalmente nas fases iniciais da busca.
