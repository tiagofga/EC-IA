# Estudo Guiado 07 - Prolog

Use este roteiro depois da Aula 07 e da nota visual. Tente responder primeiro sem executar os programas; depois confirme no SWI-Prolog.

## Objetivos

Ao final da revisão, você deve conseguir:

- distinguir fatos, regras e consultas;
- identificar átomos, variáveis e termos compostos;
- prever o resultado de consultas simples e com variáveis;
- aplicar unificação;
- explicar resolução de metas e retrocesso;
- relacionar Prolog com encadeamento reverso e busca em profundidade;
- reconhecer o papel da recursão;
- diferenciar unificação de avaliação aritmética;
- interpretar estruturas e listas.

## 1. Da LPO para Prolog

Explique a relação entre os conceitos abaixo:

    fato em uma base de conhecimento
    regra lógica
    consulta / meta
    unificação
    encadeamento reverso
    retrocesso

Quais deles já apareciam na Aula 06? O que muda quando passam a fazer parte de uma linguagem executável?

## 2. Fatos

Considere:

    progenitor(ana, bruno).
    progenitor(bruno, clara).
    progenitor(bruno, diego).

Responda antes de executar:

1. `?- progenitor(ana, bruno).`
2. `?- progenitor(ana, clara).`
3. `?- progenitor(bruno, X).`
4. `?- progenitor(X, clara).`

Para cada consulta, indique se a resposta é `true`, `false` ou uma substituição.

## 3. Termos e variáveis

Classifique cada elemento:

- `ana`
- `X`
- `20`
- `ponto(2,4)`
- `progenitor(ana,bruno)`

Explique por que `X` e `x` não representam o mesmo tipo de termo em Prolog.

## 4. Regras

Considere:

    avo(X, Z) :-
        progenitor(X, Y),
        progenitor(Y, Z).

Responda:

1. qual é a cabeça da regra?
2. quais são as submetas?
3. qual papel a variável `Y` desempenha?
4. como a regra pode provar `avo(ana, clara)`?

## 5. Unificação

Determine se há unificação e, quando houver, indique a substituição:

1. `pessoa(X,20)` e `pessoa(ana,Y)`
2. `ponto(X,2)` e `ponto(3,4)`
3. `f(X,g(Y))` e `f(a,g(b))`
4. `progenitor(X,X)` e `progenitor(ana,bruno)`

Depois confirme usando o operador `=` no Prolog.

## 6. Múltiplas respostas e retrocesso

Considere:

    progenitor(bruno, clara).
    progenitor(bruno, diego).

Para:

    ?- progenitor(bruno, X).

explique:

- qual é a primeira resposta;
- o que o ponto e vírgula solicita;
- onde ocorre o retrocesso;
- por que `false` aparece depois de todas as alternativas.

## 7. Relações inversas

Escreva uma regra para:

    filho(Filho, Progenitor)

usando apenas `progenitor/2`.

Depois escreva consultas para:

- verificar se `bruno` é filho de `ana`;
- encontrar todos os filhos de `bruno`.

## 8. Irmãos e restrições

Escreva uma regra para `irmaos(X,Y)` usando um progenitor em comum.

Explique por que é necessário impedir `X = Y` se a intenção é representar pessoas distintas.

## 9. Recursão

Considere:

    maior(urso, lobo).
    maior(lobo, raposa).
    maior(raposa, coelho).

    maior_que(X, Y) :- maior(X, Y).
    maior_que(X, Y) :- maior(X, Z), maior_que(Z, Y).

Sem executar, responda:

1. `?- maior_que(urso, raposa).`
2. `?- maior_que(raposa, urso).`
3. `?- maior_que(urso, X).`

Mostre a cadeia de regras usada para demonstrar que o urso é maior que o coelho.

## 10. Árvore de prova

Para a consulta:

    ?- maior_que(urso, coelho).

desenhe uma árvore de prova simples indicando:

- meta inicial;
- cláusula selecionada;
- novas submetas;
- escolhas alternativas;
- ponto em que ocorre sucesso.

## 11. Prolog e DFS

Explique a analogia entre:

| Prolog | Busca |
|---|---|
| meta | estado/problema atual |
| cláusula aplicável | operador/ação |
| submeta | novo estado |
| escolha alternativa | ramo |
| retrocesso | retorno na DFS |

Em que sentido a analogia ajuda? Em que sentido Prolog não é simplesmente 'DFS genérica'?

## 12. Ordem das cláusulas

Explique por que a ordem de fatos e regras pode alterar:

- a ordem das respostas;
- o custo da execução;
- a possibilidade de não término.

## 13. Aritmética

Explique a diferença entre:

    X = 2 + 3

e uma avaliação numérica da expressão `2 + 3`.

Por que unificação e cálculo não devem ser confundidos?

## 14. Estruturas

Considere:

    ponto(2,4)
    aluno(tiago, engenharia_computacao)

Explique como termos compostos permitem representar dados estruturados.

## 15. Listas

Analise conceitualmente:

    [a,b,c]
    [H|T]

Explique o papel de cabeça e cauda e por que essa decomposição combina naturalmente com recursão.

## 16. Integração com a Aula 06

Complete o fluxo:

    LPO
      ↓
    cláusulas / regras
      ↓
    unificação
      ↓
    __________________
      ↓
    retrocesso
      ↓
    respostas da consulta

Explique por que `encadeamento reverso` é a resposta esperada para a lacuna.

## 17. Use a visualização

Na visualização de resolução de metas:

1. execute a consulta passo a passo;
2. identifique a cláusula selecionada;
3. registre a substituição gerada por unificação;
4. acompanhe as submetas;
5. force uma alternativa que exija retrocesso;
6. compare a árvore de prova com DFS.

## 18. Erros conceituais a evitar

Explique por que cada afirmação está errada ou incompleta:

- "`=` significa atribuição."
- "Se Prolog responde `false`, a afirmação é impossível no mundo real."
- "Uma regra é executada de cima para baixo como uma sequência imperativa comum."
- "Recursão e retrocesso são a mesma coisa."
- "A ordem das cláusulas não importa em Prolog."
- "Unificação sempre produz uma resposta."

## Autoavaliação

- [ ] Diferencio fatos, regras e consultas.
- [ ] Identifico termos e variáveis.
- [ ] Prevejo consultas simples e com variáveis.
- [ ] Aplico unificação.
- [ ] Entendo o papel do retrocesso.
- [ ] Consigo acompanhar uma árvore de prova.
- [ ] Relaciono Prolog com encadeamento reverso.
- [ ] Relaciono Prolog com DFS.
- [ ] Entendo recursão.
- [ ] Diferencio unificação de aritmética.
- [ ] Interpreto termos compostos e listas.
- [ ] Consigo explicar por que a ordem operacional importa.

Depois desta revisão, resolva as questões de Prolog da [Lista 05](../../atividades/05-logica-lpo-prolog/README.md).
