# Resolução proposicional por refutação

```text
função PL-RESOLUTION(KB, α) retorna verdadeiro ou falso
    cláusulas <- converter (KB ∧ ¬α) para FNC
    novos <- conjunto vazio

    repetir:
        para cada par de cláusulas ci, cj em cláusulas:
            resolventes <- RESOLVE(ci, cj)

            se a cláusula vazia pertence a resolventes:
                retornar verdadeiro

            adicionar resolventes a novos

        se novos é subconjunto de cláusulas:
            retornar falso

        cláusulas <- cláusulas ∪ novos
```

## Ideia central

A prova é indireta. Tentamos mostrar que `KB ∧ ¬α` leva a contradição. Se isso ocorre, então `α` é consequência lógica da KB.

## Critério de parada

- se surge a cláusula vazia `□`, a consulta está provada;
- se não surgem novas cláusulas, a prova falhou naquele sistema.
