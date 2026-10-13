# Listas recursivas em Prolog

## Pertencimento

```text
PERTENCE(elemento, lista)
    se a cabeça da lista unifica com elemento:
        sucesso

    se a lista possui uma cauda:
        tentar PERTENCE(elemento, cauda)

    falha
```

## Último elemento

```text
ULTIMO(elemento, lista)
    se lista contém apenas um elemento:
        unificar esse elemento com elemento
        sucesso

    descartar a cabeça
    tentar ULTIMO(elemento, cauda)
```

## Tamanho

```text
TAMANHO(lista)
    se lista está vazia:
        retornar 0

    calcular TAMANHO(cauda)
    avaliar resultado + 1
```

A operação de tamanho exige avaliação aritmética, enquanto pertencimento e último elemento podem ser definidos apenas com unificação e recursão.
