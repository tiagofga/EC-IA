# EC-IA - Inteligência Artificial

Material público da disciplina de **Inteligência Artificial** do Curso de Engenharia de Computação do **CEFET-MG, campus Divinópolis**.

> **Página da disciplina:** https://tiagofga.github.io/EC-IA/

Este repositório reúne materiais de apoio às aulas, notas visuais, atividades, estudos guiados, simulados, trabalhos, pseudocódigos conceituais e visualizações didáticas. O conteúdo é organizado progressivamente ao longo do semestre.

## Como usar este repositório

Para cada assunto, a sequência recomendada é:

1. revisar o conteúdo apresentado na aula;
2. consultar a nota visual correspondente para reorganizar os conceitos;
3. realizar o estudo guiado;
4. resolver a atividade proposta;
5. resolver os simulados de forma progressiva e, inicialmente, sem consulta;
6. usar as visualizações para acompanhar algoritmos e mecanismos de raciocínio;
7. consultar pseudocódigos para revisar estruturas e procedimentos específicos;
8. desenvolver os trabalhos práticos somente após revisar os requisitos e critérios de entrega.

A proposta não é apenas disponibilizar arquivos, mas organizar um percurso de estudo que possa ser retomado antes de atividades e avaliações.

## Conteúdo disponível

| Seção | O que você encontra |
|---|---|
| `planos/` | plano didático e organização da disciplina |
| `aulas/` | materiais públicos organizados por aula |
| `notas/` | mapas mentais e guias visuais de revisão |
| `atividades/` | listas destinadas aos estudantes |
| `estudos-guiados/` | roteiros de revisão e autoavaliação |
| `simulados/` | simulados públicos para revisão integrada, sem gabaritos |
| `pseudoalgoritmos/` | descrições conceituais dos algoritmos e procedimentos estudados |
| `visualizacoes/` | visualizações interativas para acompanhar execuções e raciocínio |
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
| 05 | Lógica e Raciocínio em IA |

Os PDFs públicos das Aulas 00 a 05 e das Atividades 01 a 04 já fazem parte do repositório.

## Notas visuais

As Aulas 01 a 05 possuem notas públicas em Markdown concebidas como **mapas mentais e guias de estudo**. Elas incluem:

- figuras de síntese visual;
- mapas conceituais e fluxos Mermaid colorido;
- tabelas comparativas;
- resumos de 30 segundos e de 1 minuto;
- conexões entre aulas;
- erros conceituais frequentes;
- checklists de revisão.

A Aula 05 acrescenta uma síntese específica sobre agentes baseados em conhecimento, `TELL`, `ASK`, Mundo do Wumpus, modelos, consequência lógica e resolução.

## Aula 05 - Lógica e Raciocínio em IA

A Aula 05 é organizada em duas partes:

- **Parte I - Representação, Conhecimento e Agentes Baseados em Conhecimento**;
- **Parte II - Lógica Proposicional**.

O Mundo do Wumpus funciona como fio condutor. O material complementar da aula inclui:

- nota visual;
- estudo guiado;
- pseudocódigo de agente baseado em conhecimento;
- pseudocódigo de verificação de modelos;
- pseudocódigo de resolução proposicional por refutação;
- visualização interativa do Mundo do Wumpus.

A visualização destaca explicitamente o ciclo:

```text
percepção -> TELL -> KB -> inferência -> ASK -> ação
```

A numeração da Aula 05 segue a organização didática da disciplina. Nas listas e referências bibliográficas, esse conteúdo se relaciona principalmente ao Capítulo 7 de Russell & Norvig.

## Simulados

A seção `simulados/` reúne três simulados públicos para revisão integrada das Aulas 01 a 04. O conjunto trabalha conceitos fundamentais de IA, agentes inteligentes, PEAS, representação e formulação de problemas, BFS, DFS, UCS, heurísticas, Busca Gulosa e A*.

Os simulados foram organizados em progressão: revisão conceitual e execução, análise e comparação, e uma resolução integrada em condições próximas às de uma avaliação. O Simulado 03 inclui uma questão de busca informada em um grafo didático inspirado em cidades brasileiras, com identificação explícita das siglas utilizadas. Os gabaritos e soluções de referência não são publicados.

## Trabalho 01 - Busca

O Trabalho 01 integra os conteúdos da Aula 04 em duas etapas:

- **Parte 1 - Busca não informada e informada:** BFS, DFS, UCS, Busca Gulosa e A* em uma grade ponderada, com entrega em **08/10/2026**;
- **Parte 2 - Busca local:** Hill Climbing e Random-Restart Hill Climbing no problema das 8 Rainhas, com entrega final em **15/10/2026**.

O trabalho vale **20,0 pontos** e pode ser desenvolvido individualmente ou em dupla. O código-base público contém apenas infraestrutura, testes iniciais e funções deliberadamente incompletas.

A versão `v0.4.0` consolidou oficialmente o Trabalho 01 no repositório, incluindo o enunciado em PDF, o código-base e os recursos públicos organizados em `trabalhos/01-busca/`.

Consulte `trabalhos/01-busca/README.md` antes de iniciar.

## Estudos guiados

Os estudos guiados das Aulas 01 a 05 foram preparados para revisão ativa. Eles incluem objetivos de aprendizagem, conceitos essenciais, perguntas de verificação, aplicações, erros conceituais a evitar e autoavaliação.

A recomendação é tentar responder às perguntas **antes** de consultar novamente os slides ou as notas.

## Visualizações

### Aula 04 - Busca

A Aula 04 possui visualizações interativas baseadas em **traces pré-calculados** para:

- Busca em Largura - BFS;
- Busca em Profundidade - DFS;
- Busca de Custo Uniforme - UCS;
- Busca Gulosa - Greedy Search;
- A*;
- Beam Search;
- Hill Climbing;
- Simulated Annealing;
- Algoritmo Genético - AG.

**Importante:** o visualizador público da Aula 04 não implementa os algoritmos. Ele apenas reproduz traces previamente gerados.

### Aula 05 - Mundo do Wumpus

A Aula 05 possui um mini laboratório interativo que permite controlar o agente, observar percepções, acompanhar `TELL`, inferências e uma sugestão de `ASK`, além de alternar entre modo aluno e modo professor.

## Organização do repositório

```text
EC-IA/
├── planos/
├── aulas/
│   ├── 00-visao-geral/
│   ├── 01-introducao/
│   ├── 02-agentes/
│   ├── 03-conhecimento/
│   ├── 04-busca/
│   └── 05-logica/
├── notas/
│   ├── 01-introducao/
│   ├── 02-agentes/
│   ├── 03-conhecimento/
│   ├── 04-busca/
│   └── 05-logica/
├── atividades/
│   ├── 01-introducao/lista-01/
│   ├── 02-agentes/lista-02/
│   ├── 03-conhecimento/lista-03/
│   └── 04-busca/lista-04/
├── simulados/
│   ├── index.md
│   ├── simulado-01.md
│   ├── simulado-02.md
│   └── simulado-03.md
├── trabalhos/
│   └── 01-busca/
├── estudos-guiados/
├── pseudoalgoritmos/
│   └── 05-logica/
├── visualizacoes/
│   ├── 04-busca/
│   └── 05-logica/wumpus/
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

A versão pública de referência é a **`v0.6.0`**. As mudanças da Aula 05 permanecem em **Unreleased** até a definição do próximo release.

Marcos anteriores:

- `v0.5.1` - figuras de síntese, Mermaid colorido e suporte a modo claro/escuro;
- `v0.5.0` - introdução das notas visuais;
- `v0.4.0` - consolidação do Trabalho 01 - Busca.

## Desenvolvimento do repositório

O histórico utiliza **Conventional Commits**. Exemplos:

```text
feat(busca): add local search visualization
feat(aula-05): add Wumpus logic lab
fix(pages): correct visualization path
content(trabalho-01): add search assignment starter
docs(notas): add aula 05 visual review guide
docs(repo): improve student navigation
chore(release): prepare v0.6.0
```
