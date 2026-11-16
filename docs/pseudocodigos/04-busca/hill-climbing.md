# Hill Climbing

```text
escolher um estado inicial
avaliar o estado atual

repetir:
    gerar os vizinhos do estado atual
    selecionar o melhor vizinho

    se o melhor vizinho melhora o estado atual:
        mover para o melhor vizinho
    caso contrário:
        retornar o estado atual
```

**Observe:** o método pode parar em ótimos locais ou platôs.

