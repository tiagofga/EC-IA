# Agente baseado em conhecimento

```text
função KB-AGENT(percepção) retorna ação
    persistir o tempo t entre as chamadas
    persistir a base de conhecimento KB entre as chamadas

    inserir na KB a sentença produzida a partir da percepção atual
        TELL(KB, MAKE-PERCEPT-SENTENCE(percepção, t))

    consultar na KB qual ação deve ser executada
        ação <- ASK(KB, MAKE-ACTION-QUERY(t))

    registrar na KB a ação escolhida
        TELL(KB, MAKE-ACTION-SENTENCE(ação, t))

    avançar o relógio interno
        t <- t + 1

    retornar ação
```

## Ideia central

O agente usa a percepção para atualizar a KB, consulta a KB para decidir o que fazer e registra a própria ação como parte do histórico do mundo.

## O que observar

- `TELL` insere fatos ou sentenças na KB;
- `ASK` depende da máquina de inferência;
- a ação escolhida pode resultar de inferência, não de percepção direta.
