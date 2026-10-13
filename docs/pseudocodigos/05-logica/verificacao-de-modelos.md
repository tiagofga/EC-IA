# Verificação de modelos

```text
função MODEL-CHECKING(KB, α) retorna verdadeiro ou falso
    símbolos <- todos os símbolos proposicionais que aparecem em KB e α
    modelos <- enumerar todas as interpretações possíveis para esses símbolos

    para cada modelo em modelos:
        se modelo satisfaz KB:
            se modelo não satisfaz α:
                retornar falso

    retornar verdadeiro
```

## Ideia central

`KB ⊨ α` quando **todo** modelo que satisfaz a KB também satisfaz `α`.

## Propriedades

- correto em relação à definição semântica de consequência lógica;
- completo para KBs finitas em lógica proposicional;
- custo exponencial no número de símbolos: `O(2^n)` modelos.
