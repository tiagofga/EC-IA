# Beam Search

```text
inicializar o feixe com o estado inicial

enquanto o feixe não estiver vazio:
    se algum estado do feixe satisfaz o objetivo:
        retornar a solução

    gerar os sucessores de todos os estados do feixe
    avaliar os sucessores pela heurística
    ordenar os candidatos
    manter apenas os k melhores candidatos
    descartar os demais

retornar falha
```

**Observe:** limitar o feixe reduz o uso de memória, mas pode descartar caminhos necessários para encontrar a melhor solução.

