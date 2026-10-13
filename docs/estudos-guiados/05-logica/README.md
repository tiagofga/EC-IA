# Estudo Guiado 05 - Lógica e Raciocínio em IA

## Objetivo

Ao concluir este estudo, você deve ser capaz de explicar como um agente baseado em conhecimento representa fatos sobre o mundo, como `TELL` e `ASK` interagem com a base de conhecimento, e como a lógica proposicional permite verificar consequência lógica por modelos e por resolução.

## 1. Pré-requisitos

Antes de começar, confirme que você consegue explicar:

- o que é um agente;
- o que é uma percepção;
- a diferença entre ambiente e representação do ambiente;
- a ideia de busca em espaço de estados.

Se necessário, retorne às Aulas 02, 03 e 04.

## 2. A pergunta central

Use esta pergunta como eixo do estudo:

> **Como um agente pode agir racionalmente quando não percebe diretamente tudo o que precisa saber?**

## 3. Agente baseado em conhecimento

Explique, com suas palavras:

1. o que é uma base de conhecimento (KB);
2. o papel da máquina de inferência;
3. o que faz `TELL`;
4. o que faz `ASK`.

Depois complete:

| Elemento | Função |
|---|---|
| KB |  |
| `TELL` |  |
| `ASK` |  |
| máquina de inferência |  |

## 4. Wumpus como domínio de demonstração

Considere a situação em que o agente está em `[1,1]` e percebe:

```text
sem brisa
sem fedor
sem brilho
```

Responda:

1. Quais informações são percebidas diretamente?
2. Quais sentenças podem ser inseridas na KB?
3. Quais conclusões podem ser inferidas sobre as casas adjacentes?
4. A conclusão "[1,2] é segura" é percepção ou inferência?

## 5. Da linguagem informal para a representação formal

Traduza as afirmações abaixo para uma forma proposicional ou descreva como você as representaria:

1. "Se há brisa em `[1,1]`, então há poço em `[1,2]` ou em `[2,1]`."
2. "Não há brisa em `[1,1]`."
3. "Não há poço em `[1,2]`."

Depois responda:

- o que muda quando passamos do português para uma linguagem formal?
- por que sintaxe e semântica precisam ser tratadas separadamente?

## 6. Sintaxe e semântica

Associe cada pergunta ao conceito adequado:

| Pergunta | Conceito |
|---|---|
| A expressão foi escrita de maneira válida? |  |
| A sentença é verdadeira neste modelo? |  |
| Os conectivos estão organizados corretamente? |  |
| A interpretação atribuída torna a fórmula verdadeira? |  |

## 7. Modelos

Explique o que significa dizer que um modelo é "compatível com a KB".

Depois, considere os símbolos `P1,2` e `P2,1`. Liste todos os quatro modelos possíveis para esses símbolos:

| `P1,2` | `P2,1` | Modelo |
|---:|---:|---|
| F | F |  |
| F | V |  |
| V | F |  |
| V | V |  |

Agora considere a informação `¬B1,1` e a regra `B1,1 ↔ (P1,2 ∨ P2,1)`. Elimine os modelos incompatíveis.

## 8. Consequência lógica

Use a notação abaixo e explique seu significado:

```text
KB ⊨ α
```

Depois responda:

1. O que precisa acontecer para que `α` seja consequência lógica da KB?
2. Basta existir um modelo em que `α` seja verdadeira? Por quê?
3. Como um contraexemplo invalida uma alegação de consequência lógica?

## 9. Verificação de modelos

Descreva o procedimento geral:

1. identificar os símbolos proposicionais;
2. enumerar os modelos possíveis;
3. filtrar os modelos que satisfazem a KB;
4. verificar se `α` é verdadeira em todos eles.

Agora complete:

| Número de símbolos | Número de modelos |
|---:|---:|
| 2 |  |
| 3 |  |
| 5 |  |
| 7 |  |
| n |  |

Explique por que a verificação de modelos se torna cara quando a KB cresce.

## 10. Propriedades de sentenças

Classifique cada caso como **válida**, **satisfatível**, **insatisfatível** ou **equivalente** quando apropriado.

1. `p ∨ ¬p`
2. `p ∧ ¬p`
3. `p ⇒ q`
4. `¬(p ∧ q)` e `¬p ∨ ¬q`

Justifique cada resposta.

## 11. Resolução por refutação

Organize as etapas da resolução na ordem correta:

- aplicar a regra de resolução;
- converter para FNC;
- adicionar a negação da consulta;
- verificar se aparece a cláusula vazia;
- encerrar quando não surgem novas cláusulas.

Depois responda:

1. Por que a cláusula vazia representa contradição?
2. O que significa encontrar a cláusula vazia durante a prova?
3. O que significa encerrar sem encontrar a cláusula vazia?

## 12. Exercício integrador

Considere a KB:

```text
1. B1,1 ↔ (P1,2 ∨ P2,1)
2. ¬B1,1
```

### Parte A - interpretação

1. O que a sentença 1 afirma no contexto do Wumpus?
2. O que a sentença 2 informa diretamente?

### Parte B - inferência

3. O que pode ser concluído sobre `P1,2`?
4. O que pode ser concluído sobre `P2,1`?
5. Essas conclusões vêm de percepção direta ou de inferência?

### Parte C - método

6. Como você verificaria essa conclusão por modelos?
7. Como você tentaria prová-la por resolução?

## 13. Use a visualização interativa

Abra a visualização `visualizacoes/05-logica/wumpus/` e teste pelo menos duas execuções.

Registre:

- percepções observadas em cada casa visitada;
- sentenças acrescentadas à KB;
- inferências marcadas pelo sistema;
- sugestão de ação retornada pelo painel de `ASK`;
- diferença entre modo aluno e modo professor.

## 14. Erros conceituais a evitar

Explique por que cada afirmação abaixo é problemática:

- "`ASK` apenas recupera fatos observados.";
- "Se a KB for verdadeira em um modelo, então qualquer sentença é consequência lógica.";
- "Resolução é só uma tabela-verdade disfarçada.";
- "Semântica e sintaxe são a mesma coisa.";
- "No Wumpus, se há brisa em uma casa então todas as adjacentes têm poço.".

## Autoavaliação

- [ ] Consigo explicar o papel de `TELL` e `ASK`.
- [ ] Consigo diferenciar percepção e inferência.
- [ ] Consigo representar uma regra simples do Wumpus.
- [ ] Entendo o que é um modelo.
- [ ] Sei interpretar `KB ⊨ α`.
- [ ] Consigo explicar a ideia de verificação de modelos.
- [ ] Diferencio validade, satisfatibilidade e equivalência.
- [ ] Consigo descrever a resolução por refutação.
- [ ] Sei usar o Wumpus interativo como apoio ao raciocínio lógico.
