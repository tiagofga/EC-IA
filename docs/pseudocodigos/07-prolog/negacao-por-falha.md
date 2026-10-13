# Negação por falha

```text
NEGACAO_POR_FALHA(meta)
    tentar provar meta

    se meta tiver sucesso:
        falha

    se meta não puder ser provada:
        sucesso
```

## Interpretação

Esse mecanismo descreve o comportamento operacional de `\+ Meta` em Prolog.

Ele não corresponde, em geral, a uma demonstração de negação clássica. O resultado depende do conhecimento disponível e do grau de instanciação da meta no momento da consulta.

## Relação com mundo fechado

Em muitos programas Prolog, uma informação que não pode ser provada é tratada operacionalmente como falha. Essa hipótese deve ser distinguida da semântica clássica da Lógica de Primeira Ordem.
