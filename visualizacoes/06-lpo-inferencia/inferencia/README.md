# Visualização - Inferência em LPO

Esta visualização compara encadeamento direto e reverso usando a mesma base de conhecimento.

## Base usada

```text
Humano(Socrates)
Humano(Platao)
∀x Humano(x) → Mortal(x)
∀x Mortal(x) → PrecisaRespirar(x)
```

Consulta:

```text
PrecisaRespirar(Socrates)
```

O objetivo é observar que o conhecimento é o mesmo, mas a ordem de exploração muda.
