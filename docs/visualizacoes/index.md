# Visualizações

As visualizações foram preparadas para ajudar na compreensão do **comportamento dos algoritmos e dos mecanismos de raciocínio**, e não apenas do resultado final.

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

## Aula 05 - Mundo do Wumpus

A visualização da Aula 05 funciona como um mini laboratório de lógica. O estudante controla o agente em um tabuleiro 4x4 e acompanha, simultaneamente:

- percepções locais: brisa, fedor, brilho, colisão e grito;
- sentenças acrescentadas à base de conhecimento por `TELL`;
- inferências sobre casas seguras, possíveis poços e possível Wumpus;
- uma sugestão de ação apresentada como resultado de `ASK`;
- alternância entre **modo aluno** e **modo professor**, revelando ou ocultando o mundo real.

O objetivo é tornar visível o ciclo:

```text
percepção -> TELL -> KB -> inferência -> ASK -> ação
```

<a href="05-logica/wumpus/" class="btn">Abrir Mundo do Wumpus</a>

## Como estudar com as visualizações

Para Busca, tente prever o próximo estado antes de avançar e compare ordem de expansão, custos e heurísticas.

No Wumpus, compare sempre três níveis:

1. o que o agente **percebe**;
2. o que foi **registrado na KB**;
3. o que foi **inferido** a partir dessas sentenças.

## Integridade acadêmica

A visualização pública da Aula 04 continua baseada em **traces pré-calculados** e não disponibiliza implementações reutilizáveis dos algoritmos exigidos nas avaliações.

A visualização do Wumpus é uma demonstração didática independente das implementações cobradas no Trabalho 01 e serve para explorar os conceitos de representação e inferência da Aula 05.
