# Estudo Guiado 03 - Representação do Conhecimento e Solução de Problemas

## Objetivo

Ao concluir este estudo, você deve ser capaz de explicar por que representar um domínio é uma decisão de projeto, formular um problema em termos computacionais e distinguir espaço de estados, árvore de busca e fronteira.

## 1. Fio condutor

A questão central desta aula é:

> Como transformar uma meta de um agente em uma representação computável de problema e, depois, em uma sequência de ações?

Antes de avançar, tente responder a essa pergunta usando apenas os conceitos da Aula 02.

## 2. Dado, informação, conhecimento e representação

Crie um exemplo próprio e identifique:

- um dado bruto;
- uma informação obtida a partir dele;
- um conhecimento que permita interpretar ou utilizar essa informação;
- uma forma de representar esse conhecimento computacionalmente.

O objetivo não é memorizar quatro definições independentes, mas perceber a transformação de um nível para outro.

## 3. Por que representar?

Uma representação pode ser usada para:

- interpretar o ambiente;
- organizar elementos e relações do domínio;
- formular consultas;
- prever consequências;
- deduzir novos fatos;
- apoiar decisão, planejamento ou aprendizagem.

Escolha um domínio e explique quais dessas finalidades seriam relevantes.

## 4. Simbólico e sub-simbólico

Compare uma representação explícita por regras ou relações com uma representação distribuída em vetores ou parâmetros aprendidos.

Analise:

- interpretabilidade;
- facilidade de manipulação;
- capacidade de representar conhecimento incompleto ou ruidoso;
- necessidade de dados;
- facilidade de explicar uma decisão;
- adequação ao problema.

Evite concluir que uma abordagem é universalmente superior à outra.

## 5. Abstração

A formulação de um problema exige decidir o que será representado e o que será omitido.

Para um problema de navegação em um campus, considere duas representações:

1. cada posição física possível em coordenadas contínuas;
2. apenas prédios e caminhos relevantes entre eles.

Responda:

- qual representação possui mais detalhes;
- qual pode produzir um espaço de estados maior;
- que informações são irrelevantes para algumas metas;
- em que situação a representação mais abstrata poderia deixar de ser suficiente.

## 6. Componentes de um problema

Você deve conseguir identificar, para qualquer problema de busca:

- estado inicial;
- conjunto ou representação de estados;
- ações;
- modelo de transição ou função sucessora;
- teste de objetivo;
- custo de ação e custo de caminho, quando aplicáveis.

### Exercício de formulação

Formule um problema em que um robô precisa deslocar-se entre salas de um prédio.

Não escolha ainda BFS, DFS ou qualquer outro algoritmo. Primeiro descreva apenas o problema.

Depois pergunte:

- dois caminhos diferentes podem chegar ao mesmo estado?
- o custo depende apenas da quantidade de ações?
- toda ação é possível em todo estado?
- como reconhecer que a meta foi atingida?

## 7. Estado não é nó

Explique com suas palavras:

- o que é um estado do problema;
- o que é um nó da árvore de busca;
- por que o mesmo estado pode aparecer em nós diferentes;
- quais informações adicionais um nó pode armazenar, como pai, ação, profundidade e custo.

Essa distinção será essencial na Aula 04.

## 8. Espaço de estados e árvore de busca

Desenhe um pequeno problema com pelo menos cinco estados e duas rotas alternativas para a mesma meta.

Depois represente:

1. o grafo ou espaço de estados;
2. os primeiros níveis de uma árvore de busca iniciada em um estado específico.

Compare as duas representações e identifique repetições que aparecem na árvore.

## 9. Fronteira

A fronteira contém nós gerados que ainda podem ser escolhidos para expansão.

Considere três maneiras de retirar elementos da fronteira:

- primeiro que entrou;
- último que entrou;
- elemento com menor prioridade numérica.

Explique por que a mesma estrutura geral de busca pode produzir comportamentos diferentes apenas alterando a regra de seleção da fronteira.

Não implemente os algoritmos ainda. O objetivo é entender a consequência conceitual da estrutura de dados utilizada.

## 10. Ponte para a Aula 04

Ao final desta aula, a pergunta deixa de ser apenas "como representar o problema?" e passa a ser:

> Entre todos os nós disponíveis na fronteira, qual deve ser expandido em seguida?

Essa decisão dá origem às diferentes estratégias de busca.

## Autoavaliação

- [ ] Consigo explicar por que a representação é uma escolha de projeto.
- [ ] Consigo comparar representações simbólicas e sub-simbólicas sem simplificações excessivas.
- [ ] Consigo formular um problema com estado inicial, ações, transições, meta e custos.
- [ ] Consigo diferenciar estado e nó.
- [ ] Consigo diferenciar espaço de estados e árvore de busca.
- [ ] Consigo explicar o papel da fronteira.
- [ ] Consigo explicar por que a estratégia de seleção da fronteira muda o comportamento da busca.
