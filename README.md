# EC-IA

Material público da disciplina de **Inteligência Artificial** do Curso de Engenharia de Computação do CEFET-MG, campus Divinópolis.

## Versão atual

`v0.2.0` - adiciona estudos guiados públicos para as Aulas 01 a 04.

## Conteúdo público

```text
EC-IA/
├── planos/
├── aulas/
│   ├── 01-introducao/
│   ├── 02-agentes/
│   ├── 03-conhecimento/
│   └── 04-busca/
├── atividades/
│   ├── 01-introducao/lista-01/
│   ├── 02-agentes/lista-02/
│   ├── 03-conhecimento/lista-03/
│   └── 04-busca/lista-04/
├── notas/
├── estudos-guiados/
├── pseudoalgoritmos/
├── visualizacoes/
└── docs/
```

## O que não faz parte deste repositório

As fontes LaTeX (`.tex`) das aulas e atividades permanecem com o docente e não são publicadas aqui. Também não fazem parte do repositório público:

- gabaritos;
- soluções de referência ainda não liberadas;
- testes ocultos;
- geradores privados de traces;
- materiais internos de avaliação.

## Aulas disponíveis na estrutura inicial

| Aula | Tema | Situação na v0.1.0 |
|---|---|---|
| 01 | Introdução à Inteligência Artificial | diretório público preparado |
| 02 | Agentes Inteligentes | diretório público preparado |
| 03 | Representação do Conhecimento e Solução de Problemas | diretório público preparado |
| 04 | Busca | diretório público preparado em duas partes |

A Aula 04 contempla:

- busca não informada: BFS, DFS e Custo Uniforme;
- busca informada: Busca Gulosa e A*.

## Estudos guiados

`estudos-guiados/` contém roteiros de estudo ativo para as Aulas 01 a 04. Cada roteiro combina objetivos, conceitos essenciais, perguntas de verificação, aplicação e autoavaliação. Não há simulados nesta versão.

## Atividades

O diretório `atividades/` contém somente versões destinadas aos estudantes. O Trabalho 1 não faz parte da v0.1.0 e será incorporado posteriormente.

## Visualização de Busca

`visualizacoes/04-busca/` contém uma visualização interativa baseada em **traces pré-calculados**. O visualizador não implementa os algoritmos de busca e, portanto, não fornece uma solução copiável para o Trabalho 1.

## Conventional Commits

Este repositório adota [Conventional Commits](https://www.conventionalcommits.org/) para todo o histórico.

Exemplos:

```text
feat(busca): add local search visualization
fix(pages): correct visualization path
content(aula-05): add logic lecture pdf
docs(repo): update course navigation
chore(release): prepare v0.2.0
```

## GitHub Pages

A estrutura `docs/` e o arquivo `mkdocs.yml` deixam o repositório preparado para publicação progressiva no GitHub Pages.
