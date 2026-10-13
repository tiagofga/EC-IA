# Encadeamento reverso em LPO

## Ideia central

O encadeamento reverso é **orientado pela meta**: começa com uma consulta e procura regras que possam justificá-la.

## Pseudocódigo conceitual

```text
PROVAR(meta, KB, θ):

    aplicar θ à meta

    se a meta corresponde a um fato da KB:
        retornar sucesso com a substituição

    para cada regra cuja conclusão possa unificar com a meta:
        θ1 <- UNIFICAR(conclusão_da_regra, meta, θ)

        se θ1 não falhou:
            sucesso <- verdadeiro

            para cada premissa da regra:
                se PROVAR(premissa, KB, θ1) falhar:
                    sucesso <- falso
                    interromper

            se sucesso:
                retornar sucesso com θ1

    retornar falha
```

## Ponto central

Cada regra selecionada transforma uma meta em novas submetas. Por isso, o procedimento pode ser interpretado como busca no espaço de provas.
