# Modelo de relatório - formato SBC

O relatório do Trabalho 01 deve ser produzido a partir de `relatorio_sbc.tex`, utilizando o formato de conferências da Sociedade Brasileira de Computação (SBC). O arquivo `sbc-template.sty` está incluído para permitir compilação local ou no Overleaf.

## Arquivos

- `relatorio_sbc.tex`: modelo que deve ser preenchido pelo estudante ou pela dupla;
- `sbc-template.sty`: estilo LaTeX necessário para a compilação.

## Compilação

No Overleaf, envie os arquivos desta pasta para um novo projeto e defina `relatorio_sbc.tex` como arquivo principal.

Em ambiente local:

```bash
pdflatex relatorio_sbc.tex
pdflatex relatorio_sbc.tex
```

## Regras do relatório

- máximo de 6 páginas de conteúdo no formato SBC, incluindo título, resumo e abstract;
- referências bibliográficas podem ultrapassar esse limite;
- não deve haver capa separada;
- o foco deve ser metodologia, resultados e discussão, e não uma revisão extensa dos algoritmos;
- as tabelas fornecidas são um ponto de partida e podem ser ajustadas sem alterar as métricas obrigatórias;
- grandes trechos de código não devem ser inseridos no relatório;
- a discussão deve contemplar buscas não informadas, buscas informadas, busca local, completude e optimalidade;
- o uso de IA deve ser detalhado em `IA_USAGE.md` e resumido no relatório;
- em trabalhos em dupla, deve ser preenchida a seção de contribuições dos autores.
- o relatório deve informar o endereço do repositório Git e a tag `entrega-final`.

Os textos instrucionais do modelo devem ser substituídos pela produção dos autores antes da entrega.
