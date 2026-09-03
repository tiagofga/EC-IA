# EC IA - Trabalho 01 - 2026/2

Material público do Trabalho 01 da disciplina de Inteligência Artificial.

## Informações principais

- **Valor:** 20,0 pontos.
- **Modalidade:** individual ou em dupla.
- **Linguagem:** Python.
- **Parte 1 - Busca não informada e informada:** entrega em **08/10/2026**.
- **Parte 2 - Busca local e entrega final:** entrega em **15/10/2026**.

Leia primeiro o arquivo **`EC_IA_Trabalho_01_2026.pdf`**. O enunciado prevalece sobre qualquer resumo apresentado neste README.

> Este pacote público contém somente os arquivos necessários aos estudantes. A fonte de geração do enunciado não faz parte do repositório público.

## Identificação da entrega

Preencha estes dados antes de cada submissão:

- **Aluno(a) 1:** `<nome>`
- **Aluno(a) 2:** `<nome ou não se aplica>`
- **Repositório Git:** `<link do repositório>`
- **Tag:** `entrega-parte1` ou `entrega-final`

## Entrega no SIGAA e repositório Git

O desenvolvimento deve ser mantido em um repositório Git acessível ao professor. O repositório deve permanecer **privado até o encerramento da correção**, com acesso concedido ao professor.

### 08/10/2026 - Parte 1

No SIGAA, envie um arquivo `.zip` com a versão executável da Parte 1. Antes da entrega, crie no repositório a tag:

```bash
git tag entrega-parte1
git push origin entrega-parte1
```

O `README.md` da entrega deve informar o endereço do repositório e a tag `entrega-parte1`. Não é necessário entregar o relatório final nesta etapa.

### 15/10/2026 - Entrega final

No SIGAA, envie:

- o relatório final em PDF;
- um arquivo `.zip` com o projeto completo.

Antes da entrega, crie no repositório a tag:

```bash
git tag entrega-final
git push origin entrega-final
```

O `README.md` e o relatório final devem informar o endereço do repositório e a tag `entrega-final`. A versão avaliada será a versão marcada por essa tag. Commits posteriores não substituem a versão entregue.

O histórico de commits poderá ser utilizado como elemento auxiliar na verificação da autoria e da contribuição dos integrantes, sem exigência de quantidade mínima de commits.

## Conteúdo deste pacote

```text
.
├── EC_IA_Trabalho_01_2026.pdf   # enunciado oficial
├── README.md
├── IA_USAGE.md
├── .gitignore
├── requirements.txt
├── instrucoes_relatorio.md
├── data/
│   └── mapa_teste.txt
├── src/
│   ├── __init__.py
│   ├── problem.py
│   ├── models.py
│   ├── heuristics.py
│   ├── search.py
│   ├── eight_queens.py
│   ├── hill_climbing.py
│   └── main.py
├── scripts/
│   └── run_experiments.py
├── tests/
│   └── test_problem.py
├── results/
│   └── .gitkeep
└── modelo_relatorio/
    ├── relatorio_sbc.tex
    ├── sbc-template.sty
    └── README.md
```

## Parte 1 - Busca não informada e informada

Devem ser implementados:

- Busca em Largura - BFS;
- Busca em Profundidade - DFS;
- Busca de Custo Uniforme - UCS;
- Busca Gulosa;
- A*;
- heurísticas Manhattan e Euclidiana.

O mapa público está em `data/mapa_teste.txt`. O programa também será avaliado com mapas não disponibilizados previamente.

Exemplo de execução após a implementação:

```bash
python -m src.main busca --map data/mapa_teste.txt --algorithm astar --heuristic manhattan
```

## Parte 2 - Busca local

Devem ser implementados para o problema das 8 Rainhas:

- Hill Climbing;
- Random-Restart Hill Climbing.

Exemplos:

```bash
python -m src.main rainhas --algorithm hill --seed 42
python -m src.main rainhas --algorithm restart --seed 42 --max-restarts 50
```

## Teste inicial do código-base

Antes de implementar os algoritmos, execute:

```bash
python -m unittest discover -s tests -v
```

Os testes fornecidos verificam apenas a infraestrutura inicial. A equipe deve adicionar os casos de teste exigidos no enunciado.

## Experimentos

O arquivo `scripts/run_experiments.py` é um esqueleto para a execução padronizada dos experimentos utilizados no relatório. Ele deve ser completado pela equipe.

## Relatório

Consulte `instrucoes_relatorio.md` e a pasta `modelo_relatorio/`.

O relatório deve usar o modelo SBC fornecido, sem capa separada, respeitando o limite e os requisitos definidos no enunciado.

## Uso de Inteligência Artificial

Todo uso de ferramentas de IA deve obedecer à política descrita no enunciado e ser registrado em `IA_USAGE.md`.

## Observação importante

As funções correspondentes aos algoritmos e às heurísticas estão deliberadamente incompletas. O código fornecido é apenas a infraestrutura inicial do trabalho e não contém o gabarito das implementações.
