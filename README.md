# EC-IA - Inteligência Artificial

Material público da disciplina de **Inteligência Artificial** do Curso de Engenharia de Computação do **CEFET-MG, campus Divinópolis**.

> **Página da disciplina:** https://tiagofga.github.io/EC-IA/

Este repositório reúne materiais de apoio às aulas, atividades, estudos guiados, trabalhos, pseudocódigos conceituais e visualizações didáticas. O conteúdo é organizado progressivamente ao longo do semestre.

## Como usar este repositório

Para cada assunto, a sequência recomendada é:

1. revisar o conteúdo apresentado na aula;
2. realizar o estudo guiado correspondente;
3. resolver a atividade proposta;
4. usar as visualizações para acompanhar o comportamento dos algoritmos;
5. consultar notas e pseudocódigos para revisar conceitos específicos;
6. desenvolver os trabalhos práticos somente após revisar os requisitos e critérios de entrega.

A proposta não é apenas disponibilizar arquivos, mas organizar um percurso de estudo que possa ser retomado antes de atividades e avaliações.

## Conteúdo disponível

| Seção | O que você encontra |
|---|---|
| `planos/` | plano didático e organização da disciplina |
| `aulas/` | materiais públicos organizados por aula |
| `atividades/` | listas destinadas aos estudantes |
| `estudos-guiados/` | roteiros de revisão e autoavaliação |
| `notas/` | notas públicas complementares |
| `pseudoalgoritmos/` | descrições conceituais dos algoritmos estudados |
| `visualizacoes/` | visualizações interativas para acompanhar execuções passo a passo |
| `trabalhos/` | enunciados, código-base e recursos públicos dos trabalhos práticos |
| `docs/` | páginas utilizadas na publicação do site |

### Aulas organizadas

| Aula | Tema |
|---|---|
| 00 | Visão Geral da Disciplina |
| 01 | Introdução à Inteligência Artificial |
| 02 | Agentes Inteligentes |
| 03 | Representação do Conhecimento e Solução de Problemas |
| 04 | Estruturas e Estratégias de Busca |

Os PDFs públicos das Aulas 00 a 04 e das Atividades 01 a 04 já fazem parte do repositório.

## Trabalho 01 - Busca

O Trabalho 01 integra os conteúdos da Aula 04 em duas etapas:

- **Parte 1 - Busca não informada e informada:** BFS, DFS, UCS, Busca Gulosa e A* em uma grade ponderada, com entrega em **08/10/2026**;
- **Parte 2 - Busca local:** Hill Climbing e Random-Restart Hill Climbing no problema das 8 Rainhas, com entrega final em **15/10/2026**.

O trabalho vale **20,0 pontos** e pode ser desenvolvido individualmente ou em dupla. O código-base público contém apenas infraestrutura, testes iniciais e funções deliberadamente incompletas.

A versão `v0.4.0` passa a consolidar oficialmente o Trabalho 01 no repositório, incluindo o enunciado em PDF, o código-base e os recursos públicos organizados em `trabalhos/01-busca/`.

Consulte `trabalhos/01-busca/README.md` antes de iniciar.

## Estudos guiados

Os estudos guiados das Aulas 01 a 04 foram preparados para revisão ativa. Eles incluem objetivos de aprendizagem, conceitos essenciais, perguntas de verificação, aplicações, erros conceituais a evitar e autoavaliação.

A recomendação é tentar responder às perguntas **antes** de consultar novamente os slides ou as notas.

## Visualizações de busca

A Aula 04 possui visualizações interativas baseadas em **traces pré-calculados**.

### Busca não informada

- Busca em Largura - BFS;
- Busca em Profundidade - DFS;
- Busca de Custo Uniforme - UCS.

### Busca informada

- Busca Gulosa - Greedy Search;
- A*;
- Beam Search.

### Busca local e evolucionária

- Hill Climbing;
- Simulated Annealing;
- Algoritmo Genético - AG.

**Importante:** o visualizador público não implementa os algoritmos. Ele apenas reproduz traces previamente gerados. Dessa forma, o recurso pode ser utilizado para estudo sem disponibilizar uma implementação reutilizável diretamente nas atividades e no Trabalho 01.

## Organização do repositório

```text
EC-IA/
├── planos/
├── aulas/
│   ├── 00-visao-geral/
│   ├── 01-introducao/
│   ├── 02-agentes/
│   ├── 03-conhecimento/
│   └── 04-busca/
├── atividades/
│   ├── 01-introducao/lista-01/
│   ├── 02-agentes/lista-02/
│   ├── 03-conhecimento/lista-03/
│   └── 04-busca/lista-04/
├── trabalhos/
│   └── 01-busca/
├── estudos-guiados/
├── notas/
├── pseudoalgoritmos/
├── visualizacoes/
└── docs/
```

## O que não é publicado aqui

Para preservar a organização da disciplina e a integridade das avaliações, permanecem restritos ao docente:

- fontes LaTeX utilizadas para gerar aulas e enunciados;
- gabaritos;
- soluções de referência ainda não liberadas;
- testes e mapas ocultos;
- geradores privados de traces;
- materiais internos de avaliação.

Modelos LaTeX explicitamente destinados aos estudantes, como o modelo SBC do Trabalho 01, podem ser publicados.

## Versão de referência

A versão pública de referência é a **`v0.4.0`**, que consolida o Trabalho 01 - Busca, seu enunciado oficial, código-base e demais recursos públicos.

## Desenvolvimento do repositório

O histórico utiliza **Conventional Commits**. Exemplos:

```text
feat(busca): add local search visualization
fix(pages): correct visualization path
content(trabalho-01): add search assignment starter
docs(repo): improve student navigation
chore(release): prepare v0.4.0
```
