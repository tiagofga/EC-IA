# EC-IA - Inteligência Artificial

Material público da disciplina de **Inteligência Artificial** do Curso de Engenharia de Computação do **CEFET-MG, campus Divinópolis**.

**Professor:** Tiago Alves de Oliveira

- [Site da disciplina](https://tiagofga.github.io/EC-IA/)
- [Roadmap de desenvolvimento](https://tiagofga.github.io/EC-IA/roadmap/)
- [Histórico de versões](CHANGELOG.md)

O conteúdo é organizado progressivamente, dos fundamentos de IA aos métodos de aprendizagem supervisionada, computação natural e ensembles.

## Como estudar

1. Consulte os slides teóricos e práticos.
2. Revise os conceitos com a nota visual da aula.
3. Responda ao estudo guiado antes de consultar novamente os slides.
4. Explore pseudocódigos, visualizações e exemplos Python disponíveis.
5. Resolva as atividades e os simulados.
6. Consulte os enunciados oficiais dos trabalhos e seus critérios de entrega.

## Aulas

| Aula | Tema | Material |
|:---:|---|---|
| 00 | Visão Geral da Disciplina | [Acessar](aulas/00-visao-geral/) |
| 01 | Introdução à Inteligência Artificial | [Acessar](aulas/01-introducao/) |
| 02 | Agentes Inteligentes | [Acessar](aulas/02-agentes/) |
| 03 | Representação do Conhecimento e Solução de Problemas | [Acessar](aulas/03-conhecimento/) |
| 04 | Estruturas e Estratégias de Busca | [Acessar](aulas/04-busca/) |
| 05 | Lógica e Raciocínio em IA | [Acessar](aulas/05-logica/) |
| 06 | Lógica de Primeira Ordem e Inferência | [Acessar](aulas/06-lpo-inferencia/) |
| 07 | Prolog - Programação Lógica, Unificação e Busca | [Acessar](aulas/07-prolog/) |
| 08 | Aprendizagem com Exemplos e Árvores de Decisão | [Acessar](aulas/08-aprendizagem-exemplos/) |
| 09 | K-Nearest Neighbors e Preparação de Dados | [Acessar](aulas/09-knn/) |
| 10 | Support Vector Machines e PCA | [Acessar](aulas/10-svm/) |
| 11 | Atividade Integradora - DT, KNN e SVM | [Acessar](aulas/11-atividade-comparacao/) |
| 12 | Algoritmos Genéticos | [Acessar](aulas/12-algoritmos-geneticos/) |
| 13 | Inteligência de Enxames | [Acessar](aulas/13-inteligencia-enxames/) |
| 14 | Sistemas Imunológicos Artificiais | [Acessar](aulas/14-sistemas-imunologicos/) |
| 15 | Algoritmos Ensemble | [Acessar](aulas/15-ensemble/) |

As Aulas 04, 05, 06 e 12 a 15 possuem dois PDFs. Nas Aulas 12 a 15, os arquivos correspondem a teoria e prática.

### Percurso didático

| Bloco | Aulas | Conteúdos centrais |
|---|:---:|---|
| Fundamentos | 00-03 | IA, agentes, estados e representação de problemas |
| Busca | 04 | BFS, DFS, UCS, Gulosa, A*, busca local e otimização |
| Representação e raciocínio | 05-07 | Lógica proposicional, Wumpus, LPO, inferência e Prolog |
| Aprendizagem supervisionada | 08-11 | DT, KNN, SVM, PCA e avaliação de modelos |
| Computação natural | 12-14 | AG, ACO, PSO/BPSO, NSA e CLONALG |
| Ensembles | 15 | Voting, Bagging, Random Forest, Boosting e Stacking |

## Materiais complementares

| Recurso | Disponibilidade | Finalidade |
|---|---|---|
| [Notas visuais](https://tiagofga.github.io/EC-IA/notas/) | Aulas 01 a 15 | Mapas conceituais, exemplos, fórmulas contextualizadas, sínteses e checklists |
| [Estudos guiados](https://tiagofga.github.io/EC-IA/estudos-guiados/) | Aulas 01 a 15 | Perguntas, revisão ativa e autoavaliação |
| [Visualizações](https://tiagofga.github.io/EC-IA/visualizacoes/) | Conforme o catálogo | Acompanhamento de algoritmos e mecanismos de raciocínio |
| [Pseudocódigos](https://tiagofga.github.io/EC-IA/pseudocodigos/) | Conforme o catálogo | Estruturas e procedimentos conceituais |
| [Exemplos Python](exemplos/README.md) | Aulas 08 a 15 | Implementação e experimentação |
| [Atividades](https://tiagofga.github.io/EC-IA/atividades/) | Listas 01 a 05 | Exercícios para consolidação |

As notas das Aulas 08 a 15 apresentam diagramas específicos dos mecanismos estudados, exemplos interpretáveis, erros frequentes e conexões entre teoria e prática. As Aulas 14 e 15 incluem estudos guiados, pseudocódigos, exemplos Python e laboratórios interativos.

Os visualizadores de busca da Aula 04 reproduzem traces pré-calculados; os laboratórios de lógica, Prolog, aprendizagem supervisionada e computação natural permitem acompanhar os mecanismos específicos de cada método. Os códigos de ACO e BPSO incluem etapas TODO para os estudantes completarem.

## Avaliações e trabalhos

### Simulados

- **Prova 1:** três simulados públicos referentes às Aulas 01 a 04.
- **Prova 2:** simulados referentes às Aulas 05 a 12, a disponibilizar.

Consulte o [catálogo de simulados](https://tiagofga.github.io/EC-IA/simulados/). Gabaritos e soluções de referência não são publicados.

### Trabalhos práticos

| Trabalho | Escopo | Entrega |
|---|---|---|
| [01 - Busca](trabalhos/01-busca/README.md) | Busca em grade ponderada e busca local no problema das 8 Rainhas | Parte 1: 08/10/2026; Parte 2: 15/10/2026 |
| [02 - Aprendizado de Máquina e Computação Natural](trabalhos/02-aprendizagem-computacao-natural/README.md) | Comparação experimental de DT, KNN, SVM, Random Forest e AdaBoost; otimização com AG, PSO ou ACO e CLONALG | 03/12/2026 |

Os enunciados oficiais prevalecem sobre qualquer resumo. Consulte o código-base e as instruções de entrega de cada trabalho.

## Organização do repositório

```text
EC-IA/
├── planos/             # Plano didático
├── aulas/              # PDFs e READMEs por aula
├── notas/              # Mapas, sínteses e revisão
├── estudos-guiados/     # Roteiros de estudo
├── atividades/         # Listas de exercícios
├── simulados/          # Preparação para avaliações
├── visualizacoes/      # Laboratórios e visualizadores
├── pseudoalgoritmos/   # Pseudocódigos conceituais
├── exemplos/           # Scripts Python
├── trabalhos/          # Enunciados e código-base
├── docs/               # Páginas do site
├── scripts/            # Automação do build
├── mkdocs.yml
└── CHANGELOG.md
```

Para executar os exemplos de aprendizagem supervisionada, consulte as instruções de cada código. Dependências comuns:

```bash
python -m pip install numpy pandas matplotlib scikit-learn
```

## Política de publicação

O repositório contém material público destinado aos estudantes. Permanecem restritos ao docente:

- fontes LaTeX privadas de aulas e avaliações;
- gabaritos e soluções de referência ainda não liberadas;
- testes e mapas ocultos;
- geradores privados de traces;
- materiais internos de avaliação.

Modelos LaTeX explicitamente fornecidos aos estudantes podem ser publicados.

## Desenvolvimento e versões

A versão consolidada de referência é **v0.12.0**. A versão seguinte incluirá as novas aulas e a revisão dos materiais complementares após validação e integração na branch `main`.

As alterações são desenvolvidas em branches próprias, revisadas por Pull Request e registradas no [CHANGELOG](CHANGELOG.md). O histórico segue Conventional Commits. Consulte o [CONTRIBUTING](CONTRIBUTING.md) e o roadmap.

Para gerar o site localmente:

```bash
python -m pip install -r requirements.txt
bash scripts/build-site.sh
```

O script sincroniza os materiais públicos com o MkDocs e executa a compilação em modo estrito.
