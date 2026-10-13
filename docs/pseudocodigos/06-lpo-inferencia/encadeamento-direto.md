# Encadeamento direto em LPO

## Ideia central

O encadeamento direto é **orientado pelos dados**: parte dos fatos já conhecidos e procura regras cujas premissas possam ser satisfeitas por unificação.

## Pseudocódigo conceitual

```text
ENCADear-DIRETO(KB):

    novos_fatos <- fatos iniciais da KB

    repetir:
        adicionou <- falso

        para cada regra premissas -> conclusão:
            procurar substituições θ
            que façam as premissas corresponderem
            a fatos conhecidos

            para cada θ encontrado:
                nova_conclusao <- aplicar θ à conclusão

                se nova_conclusao ainda não está na KB:
                    adicionar nova_conclusao
                    adicionou <- verdadeiro

        se adicionou = falso:
            retornar KB expandida
```

## Ponto central

O procedimento cresce a KB a partir do que já é conhecido. Em uma consulta específica, isso pode gerar fatos corretos, mas irrelevantes para a pergunta atual.
