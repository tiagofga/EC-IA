# Changelog

Todas as mudanças relevantes deste projeto serão registradas neste arquivo.

O histórico de commits segue Conventional Commits.

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
