# Exemplos Python - Aula 14: Sistemas Imunológicos Artificiais

Material executável para a disciplina de Inteligência Artificial (CEFET-MG, campus Divinópolis).

## Execução

Requer Python 3.10 ou superior. Não são necessárias bibliotecas externas.

```bash
python testes.py
python clonalg.py --seed 42 --avaliacoes 1000
python clonalg.py --seed 0 --avaliacoes 1000 --csv seed0.csv
python clonalg.py --seed 42 --p-max 0.10 --csv mutacao_baixa.csv
python clonalg.py --seed 42 --p-max 0.60 --csv mutacao_alta.csv
python clonalg.py --seed 42 --beta 2.0 --csv clones_altos.csv
python nsa.py
```

Os comandos devem ser executados dentro de `exemplos/14-sistemas-imunologicos/`.

Arquivos: [clonalg.py](clonalg.py), [nsa.py](nsa.py) e [testes.py](testes.py).

## CLONALG: o que o código faz

O problema é reproduzir uma imagem-alvo de 4×4 pixels por meio de um candidato de 16 bits. O fitness é a quantidade de posições corretas (0 a 16); a afinidade é `fitness/16`. A busca não consulta os bits corretos ao construir ou mutar um candidato; a imagem-alvo aparece somente na avaliação.

A implementação utiliza uma variante didática documentada:

- Clonagem por posição `ceil(beta * selecionados / posicao)`.
- Mutação independente por bit, com `p_min + (p_max - p_min) * (1 - afinidade)`.
- Seleção elitista dos melhores pais e clones, com renovação de parte da população.
- Semente de gerador pseudoaleatório para reprodutibilidade.
- Teto de avaliações da função objetivo e parada antecipada ao atingir o ótimo.

O arquivo CSV registra o melhor fitness acumulado após cada avaliação, inclusive quando uma tentativa não melhora a solução. A curva pode ser comparada às de AG/ACO/BPSO quando a mesma métrica e condições experimentais forem utilizadas. Como existe parada antecipada, verifique também a contagem efetiva de avaliações.

## NSA complementar

`nsa.py` é um exemplo separado de seleção negativa com cadeias de 8 bits e correspondência de 4 posições consecutivas. Uma amostra não detectada não deve ser declarada normal de forma conclusiva.

## Adaptação ao Trabalho 02

Não basta alterar o alvo. Analise primeiro: representação, função objetivo (maximização/minimização), viabilidade, criação de candidatos, operador de mutação, afinidade e métricas de comparação. Problemas de permutação ou de variáveis reais exigem operadores diferentes da inversão de bits. Mantenha as restrições e o protocolo de avaliação equivalentes aos utilizados nos outros algoritmos.

[Voltar aos PDFs da Aula 14](../../aulas/14-sistemas-imunologicos/README.md).
