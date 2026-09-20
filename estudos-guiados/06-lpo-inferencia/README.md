# Estudo Guiado 06 - Lógica de Primeira Ordem e Inferência

## Objetivo

Ao concluir este estudo, você deve ser capaz de representar conhecimento em Lógica de Primeira Ordem (LPO), interpretar quantificadores, aplicar substituições, verificar unificações e explicar como encadeamento direto e reverso produzem inferências.

## 1. Pré-requisitos

Antes de começar, confirme que você consegue explicar:

- sintaxe e semântica;
- modelos e consequência lógica;
- base de conhecimento;
- inferência;
- lógica proposicional;
- resolução por refutação.

## 2. Pergunta central

> **Como representar regras gerais sobre objetos e relações e usá-las para responder consultas específicas?**

## 3. Da lógica proposicional para LPO

Considere:

```text
Humano_Socrates
Mortal_Socrates
Humano_Platao
Mortal_Platao
```

Reescreva esse conhecimento usando predicados, constantes e uma regra universal.

Depois responda:

1. O que foi generalizado?
2. Qual informação estrutural aparece na LPO?
3. Por que essa representação escala melhor?

## 4. Componentes da linguagem

Em cada expressão, identifique constantes, variáveis, funções e predicados:

```text
Humano(Socrates)
Conhece(x, Ada)
PaiDe(x)
MaiorQue(Idade(x), 18)
```

## 5. Quantificadores

Explique a diferença semântica entre:

```text
∀x Humano(x) → Mortal(x)
∃x Humano(x) ∧ Professor(x)
```

Compare também:

```text
∀x (Professor(x) → Pesquisa(x))
∀x (Professor(x) ∧ Pesquisa(x))
```

Por que não são equivalentes?

## 6. Escopo e variáveis

Indique quais variáveis estão livres ou ligadas:

```text
∀x Humano(x)
Humano(x) → Mortal(x)
∀x Conhece(x,y)
∃y ∀x Conhece(x,y)
```

## 7. Substituição

Aplique `θ = {x/Socrates}` em:

```text
Humano(x) → Mortal(x)
```

Aplique `θ = {x/Ada, y/Turing}` em:

```text
Conhece(x,y)
```

Explique por que uma substituição precisa ser consistente.

## 8. Unificação

Determine se os pares unificam. Quando possível, apresente uma substituição.

1. `Humano(x)` e `Humano(Socrates)`
2. `Conhece(x,Ada)` e `Conhece(Tiago,y)`
3. `Conhece(x,Ada)` e `Conhece(Tiago,Turing)`
4. `P(x,x)` e `P(Ada,Turing)`
5. `P(x,y)` e `P(y,x)`

## 9. MGU

Explique por que o unificador mais geral é preferível a uma substituição mais específica que também funcione.

## 10. Modus Ponens Generalizado

Considere:

```text
1. ∀x Humano(x) → Mortal(x)
2. Humano(Socrates)
```

Responda:

1. Qual regra será instanciada?
2. Qual substituição é necessária?
3. Qual conclusão é produzida?

Agora repita para:

```text
1. ∀x ∀y (Pai(x,y) → Ancestral(x,y))
2. Pai(Ada,Bia)
```

## 11. Encadeamento direto

Considere a KB:

```text
Humano(Socrates)
Humano(Platao)
∀x Humano(x) → Mortal(x)
∀x Mortal(x) → PrecisaRespirar(x)
```

Liste os fatos novos que podem ser adicionados por encadeamento direto.

Depois responda: quando o procedimento pode parar?

## 12. Encadeamento reverso

Usando a mesma KB, tente provar:

```text
PrecisaRespirar(Socrates)
```

Mostre a sequência:

```text
meta
→ regra que conclui a meta
→ submeta
→ nova regra
→ fato conhecido
```

## 13. Comparação

| Critério | Encadeamento direto | Encadeamento reverso |
|---|---|---|
| começa por |  |  |
| orientação |  |  |
| produz |  |  |
| pode explorar informação irrelevante? |  |  |
| relação com consultas |  |  |

## 14. Wumpus em LPO

Proponha uma representação em LPO para:

- casas podem ser adjacentes;
- se existe poço em uma casa adjacente, há brisa;
- uma casa sem poço e sem Wumpus é segura.

Explique por que a LPO evita repetir uma regra diferente para cada coordenada.

## 15. Use as visualizações

Na visualização de **unificação**, registre:

- expressões de entrada;
- substituição construída;
- ponto de sucesso ou falha;
- MGU resultante quando existir.

Na visualização de **inferência**, compare uma execução orientada por dados com uma orientada por meta e descreva a diferença na ordem das decisões.

## 16. Erros conceituais a evitar

Explique por que cada afirmação está errada ou incompleta:

- "Toda variável precisa ser substituída por uma constante.";
- "Se dois predicados têm o mesmo nome, sempre unificam.";
- "O quantificador existencial prova qual objeto existe.";
- "Encadeamento reverso começa pelos fatos.";
- "Unificação e inferência são a mesma operação."

## Autoavaliação

- [ ] Diferencio constantes, variáveis, funções e predicados.
- [ ] Interpreto quantificadores universal e existencial.
- [ ] Identifico escopo e variáveis livres/ligadas.
- [ ] Aplico substituições.
- [ ] Testo unificações simples.
- [ ] Entendo o significado de MGU.
- [ ] Aplico o Modus Ponens Generalizado.
- [ ] Diferencio encadeamento direto e reverso.
- [ ] Relaciono a inferência em LPO com busca.
- [ ] Entendo por que este conteúdo prepara o estudo de Prolog.
