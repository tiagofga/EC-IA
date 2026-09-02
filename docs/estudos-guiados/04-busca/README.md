# Estudo Guiado 04 - Estratégias de Busca

## Objetivo

Ao concluir este estudo, você deve ser capaz de executar e comparar BFS, DFS, Busca de Custo Uniforme, Busca Gulosa e A*, explicando como cada estratégia seleciona nós da fronteira e em quais condições suas propriedades diferem.

## 1. Pré-requisitos

Antes de estudar os algoritmos, confirme que consegue explicar:

- estado e nó;
- espaço de estados e árvore de busca;
- expansão de um nó;
- fronteira;
- caminho e custo de caminho;
- teste de objetivo.

Se algum desses termos ainda estiver impreciso, retorne ao Estudo Guiado 03.

## 2. A pergunta central

Todos os algoritmos deste capítulo trabalham sobre o mesmo problema geral. A diferença central está em:

> Qual nó da fronteira será selecionado para expansão em seguida?

Use essa pergunta como eixo para comparar os métodos.

## 3. Busca não informada

### 3.1 Busca em Largura - BFS

Estude a relação entre BFS e uma fronteira FIFO.

Verifique se consegue responder:

1. Por que os nós de menor profundidade são expandidos primeiro?
2. Em que condição BFS encontra uma solução de menor custo?
3. Por que o consumo de memória pode crescer rapidamente?
4. O que acontece quando o fator de ramificação é elevado?

### 3.2 Busca em Profundidade - DFS

Estude a relação entre DFS e uma fronteira LIFO.

Responda:

1. Por que DFS tende a seguir um ramo antes de explorar alternativas?
2. Qual é sua principal vantagem de memória em comparação com BFS?
3. Em que tipo de espaço a profundidade pode se tornar um problema?
4. Por que encontrar uma solução primeiro não significa encontrar a melhor solução?

### 3.3 Busca de Custo Uniforme - UCS

A prioridade é o custo acumulado:

```text
g(n)
```

Responda:

1. Qual é a diferença entre profundidade e custo acumulado?
2. Quando UCS e BFS podem produzir comportamento equivalente?
3. Por que um caminho com mais ações pode ser preferível?
4. O que deve acontecer se um caminho mais barato para um estado já conhecido for encontrado?

## 4. Primeira comparação

Complete sem consultar o material:

| Estratégia | Critério principal | Usa custo `g(n)`? | Usa heurística? |
|---|---|---:|---:|
| BFS |  |  |  |
| DFS |  |  |  |
| UCS |  |  |  |

Depois confira nos slides e pseudocódigos.

## 5. Heurísticas

Uma heurística `h(n)` estima o custo ou distância restante entre um nó e uma meta.

Antes de estudar Gulosa e A*, responda:

- uma heurística precisa ser exata?
- uma heurística ruim pode prejudicar a busca?
- qual é a diferença entre custo conhecido e custo estimado?
- o que significa uma heurística superestimar o custo real?

### Admissibilidade

Uma heurística admissível não superestima o custo real mínimo até a meta.

Crie três valores hipotéticos de custo real e três estimativas heurísticas. Classifique quais estimativas preservam admissibilidade.

### Consistência

Explique a relação entre a estimativa de um nó, o custo de avançar para um sucessor e a estimativa desse sucessor.

Não memorize apenas a desigualdade. Interprete o que ela significa para o comportamento da estimativa ao longo de um caminho.

## 6. Busca Gulosa

A Busca Gulosa prioriza:

```text
h(n)
```

Responda:

1. Que informação sobre o passado da trajetória é ignorada pela prioridade?
2. Por que a estratégia pode parecer muito eficiente em alguns mapas?
3. Por que uma boa estimativa local não garante o melhor caminho global?
4. Como uma heurística enganosa pode alterar a ordem de expansão?

## 7. A*

A* combina:

```text
f(n) = g(n) + h(n)
```

Interprete os três termos:

- `g(n)` - custo já acumulado;
- `h(n)` - estimativa do custo restante;
- `f(n)` - estimativa do custo total de uma solução passando por `n`.

Responda:

1. Por que A* não é apenas uma Busca Gulosa com outro nome?
2. O que acontece conceitualmente quando `h(n) = 0` para todos os nós?
3. Como a qualidade da heurística afeta a quantidade de nós explorados?
4. Que propriedade da heurística é importante para discutir otimalidade?

## 8. Use a visualização interativa

Abra `visualizacoes/04-busca/` e execute os traces disponíveis.

Para cada estratégia, registre:

- primeiro nó expandido após o inicial;
- sequência de nós atuais;
- como a fronteira muda;
- quando o objetivo aparece na fronteira;
- quando o objetivo é efetivamente selecionado;
- caminho final mostrado.

### Observação importante

A visualização não executa os algoritmos. Ela reproduz traces pré-calculados. Portanto, use-a para interpretar a dinâmica da busca, não para inferir uma implementação pronta.

## 9. Comparação integrada

Complete a tabela com base no que você estudou:

| Estratégia | Seleção da fronteira | `g(n)` | `h(n)` | Otimalidade | Memória |
|---|---|---:|---:|---|---|
| BFS |  |  |  |  |  |
| DFS |  |  |  |  |  |
| UCS |  |  |  |  |  |
| Gulosa |  |  |  |  |  |
| A* |  |  |  |  |  |

Não preencha "sim" ou "não" mecanicamente para completude e otimalidade. Registre também as condições necessárias quando elas existirem.

## 10. Problema de execução manual

Desenhe um grafo pequeno com:

- um estado inicial;
- uma meta;
- pelo menos seis estados;
- dois caminhos diferentes para a meta;
- custos não uniformes;
- valores heurísticos.

Execute manualmente:

1. BFS;
2. DFS;
3. UCS;
4. Gulosa;
5. A*.

Para cada passo, registre:

```text
nó atual
fronteira
explorados
custo g(n), quando aplicável
heurística h(n), quando aplicável
f(n), quando aplicável
```

Depois compare os caminhos e a ordem de expansão.

## 11. Escolha da estratégia

Para cada cenário, indique qual estratégia você consideraria primeiro e justifique:

1. todas as ações têm mesmo custo e a solução mais rasa é desejada;
2. memória é muito limitada e qualquer solução pode ser aceitável;
3. custos são diferentes e não há heurística disponível;
4. existe uma heurística barata e velocidade é mais importante que garantia de caminho ótimo;
5. existe uma heurística adequada e o custo da solução é importante.

A justificativa é mais importante que o nome do algoritmo.

## 12. Erros conceituais a evitar

Verifique se você consegue explicar por que estas frases são problemáticas:

- "BFS é sempre ótima";
- "DFS é mais rápida que BFS";
- "UCS escolhe o caminho com menos passos";
- "Gulosa considera o custo total da solução";
- "A* sempre é ótima independentemente da heurística";
- "se o objetivo apareceu na fronteira, qualquer estratégia já pode encerrar".

## Autoavaliação

- [ ] Consigo executar BFS e DFS manualmente.
- [ ] Consigo explicar quando BFS é ótima.
- [ ] Consigo executar UCS usando `g(n)`.
- [ ] Consigo explicar o papel de uma heurística.
- [ ] Consigo distinguir admissibilidade e consistência.
- [ ] Consigo executar Busca Gulosa usando `h(n)`.
- [ ] Consigo executar A* usando `g(n) + h(n)`.
- [ ] Consigo comparar as cinco estratégias por critério de seleção, completude, otimalidade, tempo e memória.
- [ ] Consigo escolher uma estratégia e justificar a decisão pelas propriedades do problema.
