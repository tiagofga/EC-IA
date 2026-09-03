# EC-IA - Inteligência Artificial

Material público da disciplina de **Inteligência Artificial** do Curso de Engenharia de Computação do **CEFET-MG, campus Divinópolis**.

> **Página da disciplina:** https://tiagofga.github.io/EC-IA/

Este repositório reúne materiais de apoio às aulas, atividades, estudos guiados, pseudocódigos conceituais e visualizações didáticas. O conteúdo é organizado progressivamente ao longo do semestre.

## Como usar este repositório

Para cada assunto, a sequência recomendada é:

1. revisar o conteúdo apresentado na aula;
2. realizar o estudo guiado correspondente;
3. resolver a atividade proposta;
4. usar as visualizações para acompanhar o comportamento dos algoritmos;
5. consultar notas e pseudocódigos para revisar conceitos específicos.

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

## Estudos guiados

Os estudos guiados das Aulas 01 a 04 foram preparados para revisão ativa. Eles incluem:

- objetivos de aprendizagem;
- conceitos que precisam estar claros;
- perguntas de verificação;
- aplicações e comparações;
- erros conceituais a evitar;
- autoavaliação ao final.

A recomendação é tentar responder às perguntas **antes** de consultar novamente os slides ou as notas.

## Visualizações de busca

A Aula 04 possui uma visualização interativa baseada em **traces pré-calculados**.

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

A visualização permite acompanhar estados, fronteiras, custos, heurísticas, configurações e decisões registradas em cada passo.

**Importante:** o visualizador público não implementa os algoritmos. Ele apenas reproduz traces previamente gerados. Dessa forma, o recurso pode ser utilizado para estudo sem disponibilizar uma implementação reutilizável diretamente nas atividades da disciplina.

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
├── estudos-guiados/
├── notas/
├── pseudoalgoritmos/
├── visualizacoes/
└── docs/
```

## O que não é publicado aqui

Para preservar a organização da disciplina e a integridade das atividades, alguns materiais permanecem restritos ao docente, incluindo:

- fontes LaTeX (`.tex`);
- gabaritos;
- soluções de referência ainda não liberadas;
- testes ocultos;
- geradores privados de traces;
- materiais internos de avaliação.

## Versão de referência

A última versão marcada é a `v0.2.0`. O conteúdo atualmente consolidado na `main`, incluindo aulas e atividades públicas, prepara a próxima versão `v0.3.0`.

## Desenvolvimento do repositório

O histórico utiliza **Conventional Commits**. Exemplos:

```text
feat(busca): add local search visualization
fix(pages): correct visualization path
content(aula-05): add logic lecture pdf
docs(repo): improve student navigation
chore(release): prepare v0.3.0
```
