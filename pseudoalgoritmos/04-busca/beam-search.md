# Beam Search

```text
inicializar o feixe com o estado inicial

enquanto o feixe não estiver vazio:
    se algum estado satisfaz o objetivo:
        retornar a solução

    gerar os sucessores de todos os estados do feixe
    avaliar os sucessores pela heurística
    ordenar os candidatos
    manter apenas os k melhores candidatos
    descartar os demais

retornar falha
```

O parâmetro `k` controla a largura do feixe. Valores menores reduzem o uso de memória, mas aumentam o risco de descartar caminhos importantes.
