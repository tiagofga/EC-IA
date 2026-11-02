# Estudo Guiado 13 - Inteligência de Enxames

Resolva as questões **antes** de consultar novamente os slides e a nota visual. Nos exercícios de programação, formule primeiro as regras; o código-base de ACO e BPSO contém `TODO` intencionais, sem soluções prontas.

## Objetivos de aprendizagem

- **Inteligência coletiva:** explicar auto-organização, emergência e compartilhamento de informação sem controlador central.
- **ACO:** interpretar feromônio, heurística, escolha probabilística, construção de rotas e atualização por evaporação e depósito.
- **PSO:** distinguir posição, velocidade, memória individual (`pbest`) e memória social (`gbest`).
- **BPSO:** explicar a adaptação da velocidade real em probabilidade de bits pela sigmoide.
- **Representações:** diferenciar o TSP com permutações da imagem de 16 bits usada na prática.
- **Comparação:** controlar função objetivo, avaliações do fitness, sementes e parâmetros.

## Questões de interpretação

1. O que torna uma solução de enxames coletiva? Por que emergência não é sinônimo de ótimo global?
2. Em que ACO difere de AG quanto à geração de novos candidatos e ao armazenamento da experiência coletiva?
3. O que representam `τ_ij`, `η_ij`, `α` e `β` na escolha da próxima cidade do TSP?
4. A transição no ACO é uma escolha determinística da cidade mais provável? Explique.
5. O que acontece com o feromônio de uma aresta **não usada** quando há evaporação? Por que isso não resolve necessariamente a estagnação?
6. Diferencie a memória `pbest` de `gbest`. Qual é o papel da velocidade no PSO contínuo?
7. Por que a expressão `x ← x + v` não pode ser usada diretamente para representar um bit no BPSO?
8. O que significa `S(v) = 0,5` na atualização de um bit? Qual é a consequência de velocidades muito positivas ou negativas?
9. Por que comparar 30 iterações de ACO com 30 iterações de BPSO pode ser inadequado se forem feitas quantidades diferentes de avaliações?

## Exercício 1 - Escolha probabilística no ACO

Considere, a partir da cidade A, três escolhas admissíveis, com `α = 1` e `β = 2`:

| Aresta | Distância | Feromônio |
|---|---:|---:|
| A-B | 2 | 1 |
| A-C | 4 | 2 |
| A-D | 5 | 1 |

Use `η = 1/d` e peso `w = τ^α η^β`.

1. Calcule os três pesos e sua soma.
2. Determine as probabilidades de transição.
3. Construa os intervalos cumulativos na ordem B, C, D.
4. Para sorteio `r = 0,75`, qual cidade é escolhida?
5. Explique por que uma cidade menos provável pode ser selecionada.

## Exercício 2 - Atualização de feromônios

Uma aresta começa com `τ = 2`. A taxa de evaporação é `ρ = 0,25` e a intensidade de depósito é `Q = 6`. Duas formigas utilizam essa aresta, com custos de rota 12 e 24.

1. Calcule o valor após a evaporação.
2. Calcule a contribuição de cada formiga e o novo valor total.
3. Determine o novo valor se nenhuma formiga usar a aresta.
4. Compare `ρ = 0,1` e `ρ = 0,8` em termos de memória das iterações anteriores, sem afirmar antecipadamente qual configuração é melhor.
5. Por que, no Ant System apresentado na aula, os depósitos ocorrem após a construção e avaliação das rotas?

## Exercício 3 - PSO e BPSO

Considere a atualização da velocidade de uma dimensão no PSO:

```text
v ← w·v + c1·r1·(pbest − x) + c2·r2·(gbest − x)
```

1. Identifique os termos de inércia, cognição e influência social.
2. Para `v = 0`, qual é a probabilidade de o novo bit valer 1 após a sigmoide?
3. Interprete uma velocidade positiva grande e uma negativa grande no BPSO.
4. Por que duas partículas com o mesmo `gbest` podem produzir resultados diferentes?
5. Descreva como atualizar `pbest` e `gbest` depois de avaliar uma nova posição.

## Exercício 4 - Mesmo alvo para AG, ACO e BPSO

Considere a imagem-alvo:

```text
0110
1001
1001
0110
```

1. Explique como representar a mesma solução por um cromossomo de AG, escolhas das formigas em ACO binário e posição de uma partícula no BPSO.
2. No ACO binário, por que cada pixel precisa de dois valores de feromônio?
3. Uma formiga com fitness 14 reforça apenas os 14 bits corretos? Explique com base na avaliação global.
4. No BPSO, quais estruturas guardam posições binárias, velocidades reais e melhores posições encontradas?
5. Descreva uma comparação justa baseada em **melhor fitness acumulado por avaliação**.
6. Uma execução atingiu fitness 16 antes das outras. O que pode ser afirmado sobre essa execução e o que ainda não pode ser concluído sobre os métodos em geral?

## Prática com Python

Abra o [código-base da Aula 13](../../exemplos/13-inteligencia-enxames/README.md) e identifique a função de cada arquivo:

- `problem.py`: alvo binário comum e fitness;
- `aco.py`: probabilidades, construção de soluções e atualização de feromônios;
- `bpso.py`: velocidade, sigmoide, atualização dos bits e memórias;
- `comparison.py`: comparação com histórico de fitness por avaliações.

Antes de preencher os `TODO`, escreva os passos esperados de cada rotina e identifique suas entradas, saídas e invariantes. Depois de completar os exercícios, execute:

```bash
python comparison.py --seed 42
```

No código-base fornecido, **a comparação ainda não executa até o fim** sem completar `aco.py` e `bpso.py`. O script de referência do AG da Aula 12 permanece separado; sua integração à comparação não foi automatizada.

## Discussão

Um método compartilha conhecimento por depósitos em trilhas; outro, por melhores posições encontradas. Como essa diferença muda a forma de representar o mesmo problema? Relacione sua resposta à seleção dos métodos e à definição da função objetivo no Trabalho 02.

## Autoavaliação

- [ ] Identifico entradas, saídas, restrições e estruturas de cada método.
- [ ] Calculo probabilidades e intervalos cumulativos do ACO.
- [ ] Calculo evaporação e depósitos de feromônio corretamente.
- [ ] Explico inércia, `pbest` e `gbest` no PSO.
- [ ] Interpreto a sigmoide e a amostragem de bits no BPSO.
- [ ] Distingo orçamento de avaliações de número de iterações.
- [ ] Explico por que resultados de uma única execução não estabelecem superioridade.
- [ ] Relaciono as estratégias de AG e enxames sem confundir seus operadores.

[Slides da Aula 13](../../aulas/13-inteligencia-enxames/README.md) · [Nota visual 13](../../notas/13-inteligencia-enxames/README.md)
