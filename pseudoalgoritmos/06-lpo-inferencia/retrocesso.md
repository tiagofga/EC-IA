# Retrocesso (Backtracking)

## Ideia central

Quando uma submeta pode ser satisfeita por mais de uma regra ou fato, o mecanismo escolhe uma alternativa. Se ela falhar, retorna ao último ponto de escolha e tenta outra.

## Pseudocódigo conceitual

```text
PROVAR-COM-RETROCESSO(meta, KB, θ):

    alternativas <- fatos e regras que podem unificar com meta

    para cada alternativa:
        θ1 <- UNIFICAR(meta, alternativa, θ)

        se θ1 falhar:
            continuar

        se alternativa é fato:
            retornar sucesso com θ1

        sucesso <- verdadeiro

        para cada premissa da regra:
            resultado <- PROVAR-COM-RETROCESSO(premissa, KB, θ1)

            se resultado falhar:
                sucesso <- falso
                interromper

            atualizar θ1 com as substituições retornadas

        se sucesso:
            retornar sucesso com θ1

    retornar falha
```

## Conexão com busca

O comportamento é semelhante a uma busca em profundidade sobre alternativas de prova. Cada falha provoca retorno ao último ponto de escolha.
