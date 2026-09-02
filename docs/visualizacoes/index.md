# Visualizações

As visualizações foram preparadas para ajudar na compreensão do **comportamento dos algoritmos**, e não apenas do resultado final.

Use os botões de avanço e retorno para observar cada passo com calma e tente explicar por que o próximo estado foi escolhido antes de avançar.

## Aula 04 - Estratégias de Busca

### Busca não informada

- **Busca em Largura - BFS** - observe a exploração por níveis e a organização da fronteira;
- **Busca em Profundidade - DFS** - observe o aprofundamento por um ramo antes do retorno;
- **Busca de Custo Uniforme - UCS** - acompanhe o custo acumulado `g(n)`.

### Busca informada

- **Busca Gulosa - Greedy Search** - acompanhe a heurística `h(n)`;
- **A*** - compare `g(n)`, `h(n)` e `f(n) = g(n) + h(n)`;
- **Beam Search** - observe como somente os `k` candidatos mais promissores permanecem no feixe.

### Busca local e evolucionária

- **Hill Climbing** - observe a melhora local e o ponto em que o algoritmo pode ficar preso;
- **Simulated Annealing** - observe quando uma piora pode ser aceita para escapar de regiões locais;
- **Algoritmo Genético - AG** - acompanhe snapshots da evolução da população ao longo das gerações.

<a href="04-busca/" class="btn">Abrir visualização interativa da Aula 04</a>

## Como estudar com o visualizador

Uma sequência útil é:

1. selecione um algoritmo;
2. observe o estado inicial;
3. tente prever o próximo passo;
4. avance uma etapa;
5. confira fronteira, explorados, custos, heurísticas ou configuração atual;
6. compare o comportamento com outro algoritmo sobre o mesmo problema.

Para as buscas em grafo, procure principalmente comparar **ordem de expansão**, **informação utilizada para decisão**, **custo do caminho** e **quantidade de estados considerados**.

Para as buscas locais, observe que o foco deixa de ser a construção de um caminho completo em um grafo e passa a ser a **melhoria de um estado candidato**.

## Integridade acadêmica

A visualização pública é baseada em **traces pré-calculados**. O navegador apenas representa estados previamente produzidos.

O código público não executa BFS, DFS, UCS, Busca Gulosa, A*, Beam Search, Hill Climbing, Simulated Annealing ou Algoritmo Genético. Também não contém os mecanismos privados utilizados para gerar os traces.

Assim, o recurso pode ser utilizado para compreender e comparar os algoritmos sem disponibilizar uma implementação diretamente reutilizável nas atividades da disciplina.
