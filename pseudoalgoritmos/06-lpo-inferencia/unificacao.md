# Unificação

## Objetivo

Encontrar uma substituição que torne duas expressões compatíveis, preferencialmente produzindo o **unificador mais geral (MGU)**.

## Pseudocódigo conceitual

```text
UNIFICAR(x, y, θ):

    se θ representa falha:
        retornar falha

    se x e y são idênticos após aplicar θ:
        retornar θ

    se x é variável:
        retornar UNIFICAR-VARIAVEL(x, y, θ)

    se y é variável:
        retornar UNIFICAR-VARIAVEL(y, x, θ)

    se x e y são expressões compostas
       e possuem mesmo símbolo principal
       e mesma aridade:

        para cada par de argumentos correspondentes:
            θ <- UNIFICAR(argumento_x, argumento_y, θ)

            se θ representa falha:
                retornar falha

        retornar θ

    retornar falha
```

```text
UNIFICAR-VARIAVEL(var, termo, θ):

    se var já possui associação em θ:
        unificar θ(var) com termo

    se termo contém var de forma incompatível:
        retornar falha

    adicionar {var/termo} a θ
    propagar a substituição nas associações existentes
    retornar θ
```

## Exemplo

```text
Conhece(x, Ada)
Conhece(Tiago, y)

θ = {}
x ↔ Tiago  => {x/Tiago}
Ada ↔ y    => {x/Tiago, y/Ada}
```

## Observe

- mesmo nome de predicado não é suficiente;
- aridade e argumentos precisam ser compatíveis;
- a substituição deve ser consistente;
- o objetivo é preservar generalidade.
