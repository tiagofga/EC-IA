# Resolução em LPO por refutação

## Ideia central

A resolução em LPO combina Forma Normal Conjuntiva, padronização de variáveis e unificação de literais complementares.

## Pseudocódigo conceitual

```text
RESOLVER-LPO(KB, consulta):

    adicionar a negação da consulta à KB
    converter todas as sentenças para FNC
    padronizar variáveis à parte
    eliminar quantificadores existenciais por Skolemização

    repetir:
        novos <- conjunto vazio

        para cada par de cláusulas:
            procurar literais complementares unificáveis

            para cada unificador θ:
                resolvente <- aplicar θ e eliminar os literais complementares

                se resolvente é a cláusula vazia:
                    retornar verdadeiro

                adicionar resolvente a novos

        se novos não acrescentam cláusulas:
            retornar falso

        adicionar novos à KB
```

## Observe

Nesta aula, a resolução aparece como fechamento conceitual. O foco principal permanece em substituição, unificação e encadeamento.
