# Resolução de metas em Prolog

```text
RESOLVER(meta, programa, substituição)
    se meta estiver vazia:
        retornar substituição como solução

    selecionar a primeira submeta

    para cada cláusula do programa cuja cabeça possa unificar com a submeta:
        calcular a substituição produzida pela unificação

        se a unificação tiver sucesso:
            aplicar a substituição ao corpo da cláusula
            combinar o corpo com as demais submetas
            tentar RESOLVER(novas_submetas, programa, substituição_atualizada)

            se uma solução for encontrada:
                retornar a solução

    retornar falha
```

## Ideia central

A consulta é decomposta em submetas. Cada cláusula compatível oferece uma alternativa de prova. A unificação conecta a meta à cláusula e produz substituições que precisam permanecer consistentes.

## Relação com busca

O conjunto de submetas representa o estado corrente da prova. Escolher uma cláusula corresponde a escolher um ramo da árvore de busca.
