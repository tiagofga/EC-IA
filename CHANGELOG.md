# Changelog

Todas as mudanças relevantes deste projeto serão registradas neste arquivo.

O histórico de commits segue Conventional Commits.

## [Unreleased]

## [0.4.0] - 2026-09-03

### Added

- estrutura pública do Trabalho 01 - Busca;
- código-base incompleto para BFS, DFS, UCS, Busca Gulosa, A*, Hill Climbing e Random-Restart Hill Climbing;
- mapa público, testes de infraestrutura, roteiro de experimentos, modelo SBC e declaração de uso de IA;
- página de Trabalhos na documentação pública;
- enunciado oficial do Trabalho 01 em PDF;
- pacote público de distribuição do Trabalho 01 destinado aos estudantes.

### Changed

- README atualizado para incluir o Trabalho 01 no percurso de estudo e na estrutura pública do repositório;
- página inicial da documentação atualizada para destacar a avaliação prática de Busca;
- documentação de Trabalhos atualizada para apresentar cronograma, materiais públicos e regras de versionamento da entrega.

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
