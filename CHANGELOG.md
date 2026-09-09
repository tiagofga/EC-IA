# Changelog

Todas as mudanças relevantes deste projeto serão registradas neste arquivo.

O histórico de commits segue Conventional Commits.

## [Unreleased]

### Added

- Aula 05 - Lógica e Raciocínio em IA publicada em duas partes;
- nota visual da Aula 05 com síntese de agentes baseados em conhecimento, `TELL`, `ASK`, Mundo do Wumpus, modelos, consequência lógica e resolução;
- Estudo Guiado 05 com exercícios de representação, modelos, consequência lógica e resolução;
- pseudocódigos conceituais de agente baseado em conhecimento, verificação de modelos e resolução proposicional por refutação;
- mini laboratório interativo do Mundo do Wumpus com modo aluno e modo professor;
- painéis da visualização para percepções, `TELL`, inferências, `ASK` e estado corrente.

### Changed

- índices de Aulas, Notas, Estudos Guiados e Visualizações atualizados para incluir a Aula 05;
- página inicial e README atualizados para refletir os novos materiais públicos;
- script de build atualizado para publicar os PDFs da Aula 05, sincronizar nota e estudo guiado, copiar os pseudocódigos de lógica e publicar a visualização do Wumpus;
- workflows de validação e publicação passam a reagir também a alterações em `notas/**` e `pseudoalgoritmos/**`;
- navegação principal reorganizada para acompanhar o percurso de estudo: Aulas, Notas visuais, Estudos guiados, Atividades, Simulados, Visualizações, Pseudocódigos e Trabalhos;
- identidade visual do site e das visualizações harmonizada com uma paleta comum, hierarquia de cartões e controles mais consistente;
- visualizadores das Aulas 04 e 05 alinhados em tipografia, cabeçalho, estados de foco, botões, cores semânticas e comportamento responsivo;
- README revisado para refletir a Aula 05 já integrada ao `main` e documentar a identidade visual das visualizações.

### Fixed

- menu lateral impedido de exibir títulos internos das páginas como uma segunda árvore de navegação;
- responsividade do Mundo do Wumpus em telas largas, intermediárias e móveis;
- distinção visual das percepções de brisa, fedor e brilho no tabuleiro do Wumpus;
- encerramento explícito da partida do Wumpus em condições de sucesso ou falha;
- conflito de build entre o `README.md` e o `index.html` da visualização do Wumpus;
- links e sincronização da visualização do Wumpus ajustados para manter `mkdocs build --strict` válido.

### Notes

- as fontes LaTeX da Aula 05 permanecem fora do repositório público;
- a numeração da Aula 05 segue a organização didática da disciplina; bibliograficamente, o conteúdo se relaciona principalmente ao Capítulo 7 de Russell & Norvig;
- as mudanças permanecem em `Unreleased` até a definição do próximo release.

## [0.6.0] - 2026-09-09

### Added

- seção pública de Simulados no site e no repositório;
- três simulados progressivos para revisão integrada das Aulas 01 a 04;
- grafos em Mermaid para as questões de execução de busca;
- exercício de busca informada em grafo didático inspirado em cidades brasileiras;
- identificação explícita das siglas, cidades e UFs utilizadas no Simulado 03.

### Changed

- navegação do MkDocs atualizada para incluir Simulados como seção principal;
- percurso recomendado de estudo atualizado para incluir os simulados após atividades e estudos guiados;
- página inicial do site e README atualizados para refletir a nova camada de revisão;
- script de build atualizado para sincronizar `simulados/` com a documentação publicada;
- workflows de validação e publicação atualizados para reagir a alterações em `simulados/**`;
- página canônica da seção de simulados consolidada em `simulados/index.md`.

### Fixed

- cortes de nós e rótulos nas bordas dos diagramas Mermaid, com ajuste de `viewBox` após a renderização;
- margem interna e responsividade dos SVGs Mermaid, preservando proporção e legibilidade;
- contraste da paleta Mermaid no modo escuro;
- conflito de build causado pela coexistência de `README.md` e `index.md` na seção de simulados.

### Notes

- apenas os enunciados dos simulados são públicos;
- gabaritos e soluções de referência permanecem fora do repositório e do site público;
- os simulados são apresentados sem ano ou referência a uma edição específica da disciplina;
- a versão `v0.6.0` substitui a preparação não publicada da `v0.5.2`, que foi encerrada sem merge.

## [0.5.1] - 2026-09-08

### Added

- alternador de modo claro/escuro no site público;
- persistência da preferência visual no navegador;
- detecção automática de `prefers-color-scheme` quando não há escolha manual;
- figuras de síntese visual para as notas das Aulas 01 a 04.

### Changed

- estilos do conteúdo, tabelas, códigos, blocos de revisão, navegação e diagramas ajustados para suportar o modo escuro;
- diagramas Mermaid passam a usar uma paleta colorida própria nos modos claro e escuro;
- Mermaid é renderizado novamente quando o usuário alterna o tema, preservando contraste e cores;
- figuras de síntese posicionadas no início de cada nota, sem substituir mapas Mermaid, tabelas, explicações, revisão e checklist.

### Fixed

- robustez da renderização Mermaid, com normalização de rótulos e isolamento de falhas por diagrama;
- incompatibilidades de rótulos com `<br>`/`<br/>` nos diagramas;
- links entre notas visuais e estudos guiados verificados no site publicado.

## [0.5.0] - 2026-09-04

### Added

- notas visuais completas para as Aulas 01 a 04 em Markdown;
- mapas mentais, fluxos Mermaid, tabelas comparativas, resumos rápidos, alertas conceituais e checklists de revisão;
- renderização Mermaid no site público;
- seção principal de Notas visuais no MkDocs.

### Changed

- percurso de estudo atualizado para usar a sequência aula -> nota visual -> estudo guiado -> atividade;
- índice de notas reformulado como mapa de estudo;
- script de build atualizado para sincronizar `notas/` com a documentação publicada;
- estilos do site ampliados para diagramas e blocos de revisão;
- navegação ajustada para manter Notas visuais no mesmo nível de Aulas, Atividades, Trabalhos, Estudos guiados e Visualizações;
- README atualizado para refletir a nova camada didática e a versão de referência `v0.5.0`.

### Notes

- as notas visuais são materiais conceituais de revisão e não incluem gabaritos, soluções de referência, testes/mapas ocultos ou implementações prontas dos algoritmos exigidos no Trabalho 01;
- a versão `v0.4.0` permanece como o marco de consolidação do Trabalho 01 - Busca.

## [0.4.0] - 2026-09-03

### Added

- estrutura pública do Trabalho 01 - Busca;
- código-base incompleto para BFS, DFS, UCS, Busca Gulosa, A*, Hill Climbing e Random-Restart Hill Climbing;
- mapa público, testes de infraestrutura, roteiro de experimentos, modelo SBC e declaração de uso de IA;
- página de Trabalhos na documentação pública;
- enunciado oficial do Trabalho 01 em PDF.

### Changed

- README atualizado para incluir o Trabalho 01 no percurso de estudo e na estrutura pública do repositório;
- página inicial da documentação atualizada para destacar a avaliação prática de Busca;
- documentação de Trabalhos atualizada para apresentar cronograma, materiais públicos e regras de versionamento da entrega;
- distribuição pública do Trabalho 01 mantida diretamente na estrutura versionada do repositório, sem arquivo ZIP duplicado.

### Notes

- o Trabalho 01 vale 20,0 pontos, com entregas em 08/10/2026 e 15/10/2026;
- as implementações centrais permanecem deliberadamente incompletas no código-base público;
- fontes LaTeX de aulas e enunciados, gabaritos, testes/mapas ocultos e soluções de referência permanecem fora do repositório público;
- nenhum simulado foi incluído nesta versão.

## [0.3.0] - 2026-09-03

### Added

- PDFs públicos das Aulas 00 a 04;
- PDFs públicos das Atividades 01 a 04;
- página de notas complementares na navegação do site;
- configuração estática específica para publicação da branch `gh-pages` na Vercel.

### Changed

- documentação atualizada para refletir os materiais efetivamente publicados;
- estrutura dos PDFs das atividades padronizada dentro de `lista-01/` a `lista-04/`;
- script de build atualizado para usar os caminhos canônicos dos materiais públicos;
- README atualizado para refletir a estrutura pública atual.

### Fixed

- deploy da Vercel ao publicar a branch `gh-pages`, evitando a execução de `scripts/build-site.sh` em uma branch que contém apenas o site compilado.

### Notes

- nenhum simulado foi incluído nesta versão;
- fontes LaTeX, gabaritos e soluções restritas continuam fora do repositório público.

## [0.2.0] - 2026-09-02

### Added

- estudos guiados públicos para as Aulas 01 a 04;
- roteiro de revisão com perguntas de verificação, aplicação e autoavaliação;
- integração dos estudos guiados à navegação do material público.

### Notes

- nenhum simulado foi incluído nesta versão;
- fontes LaTeX, gabaritos e soluções restritas continuam fora do repositório público.

## [0.1.0] - 2026-09-02

### Added

- estrutura pública inicial do repositório;
- organização das Aulas 01 a 04;
- organização das Listas 01 a 04;
- Lista 04 pública em PDF;
- pseudocódigos conceituais de BFS, DFS, Custo Uniforme, Busca Gulosa e A*;
- visualização de Busca baseada em traces;
- Plano Didático 2026/2 em formato público;
- base do GitHub Pages com MkDocs.

### Notes

- fontes LaTeX permanecem fora do repositório público;
- gabaritos e soluções restritas não são versionados neste repositório.
