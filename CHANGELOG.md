# Changelog

Todas as mudanças relevantes deste projeto serão registradas neste arquivo.

O histórico de commits segue Conventional Commits.

## [Unreleased]

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
