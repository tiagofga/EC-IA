# Instruções para o relatório

O relatório deverá ser produzido em LaTeX utilizando o modelo SBC disponibilizado na pasta `modelo_relatorio/`.

## Estrutura esperada

1. Abstract e Resumo
2. Introdução
3. Representação e implementação
   - Parte 1 - Busca não informada e informada
   - Heurísticas
   - Parte 2 - Busca local no problema das 8 Rainhas
4. Metodologia experimental
5. Resultados
6. Discussão
7. Conclusão
8. Contribuições dos autores
9. Declaração de uso de IA
10. Referências

O relatório deve apresentar os resultados das buscas não informadas (BFS, DFS e UCS) e informadas (Busca Gulosa e A*) da Parte 1, além dos experimentos de busca local com Hill Climbing e Random-Restart Hill Climbing da Parte 2.

A discussão deve responder às questões do enunciado e abordar, entre outros pontos, custo versus número de ações, efeito das heurísticas, completude, optimalidade, limitações do Hill Climbing e efeito dos reinícios aleatórios.

O texto deve privilegiar metodologia, resultados e interpretação. Evite reproduções extensas de conteúdo teórico já abordado em aula e grandes trechos de código.

Em trabalhos em dupla, inclua uma seção breve de **Contribuições dos autores**, indicando objetivamente a participação de cada integrante.

O uso de ferramentas de IA deve ser resumido no relatório e detalhado no arquivo `IA_USAGE.md` entregue com o repositório.

O limite de páginas e os demais requisitos formais seguem o enunciado do Trabalho 01.

## Repositório e versão entregue

O relatório final deve informar o endereço do repositório Git utilizado no trabalho e a tag `entrega-final`. A versão avaliada será a versão marcada por essa tag. O repositório deve permanecer privado até o encerramento da correção, com acesso concedido ao professor.
