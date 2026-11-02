# Exemplos Python - Aula 13: Inteligência de Enxames

Este diretório contém o **código-base incompleto** da prática guiada, para que os estudantes desenvolvam as etapas de ACO binário e BPSO. Os trechos `TODO` e as exceções `NotImplementedError` são intencionais.

Arquivos:

- `problem.py`: problema binário 4 × 4 e função fitness.
- `aco.py`: construção e atualização de feromônios a completar.
- `bpso.py`: velocidade e posição binárias a completar.
- `comparison.py`: comparação por avaliações após completar os algoritmos.

Python 3.10+; `matplotlib` é opcional para os gráficos (`python -m pip install matplotlib`). Após concluir os TODOs:

```bash
python comparison.py --seed 42
```

A comparação de ACO e BPSO utiliza 600 avaliações por método. Não execute `comparison.py` esperando resultados antes de implementar os checkpoints. O código de AG da Aula 12 é disponibilizado separadamente; sua integração à comparação não está automatizada neste pacote.

[Voltar aos PDFs da Aula 13](../../aulas/13-inteligencia-enxames/README.md).
