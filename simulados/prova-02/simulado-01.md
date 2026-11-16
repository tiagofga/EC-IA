# Simulado 01 - Prova 2

> **Atenção:** estes materiais são simulados de revisão, com oito questões para ampliar a prática dos conteúdos. A Prova 2 oficial terá apenas **cinco questões**. O formato, a distribuição de pontos e os enunciados dos simulados não correspondem necessariamente aos da avaliação oficial.

> **Orientações:** Aulas 05 a 12. Tempo sugerido: 100 minutos. Valor de referência: 20 pontos. Resolva sem consulta, registre cálculos e justifique decisões. As fórmulas fornecidas servem de apoio; nenhuma questão antecipa a prova oficial. Arredonde resultados decimais a três casas, quando necessário.

## 1. Lógica proposicional (3,0 pontos)

Um sistema de monitoramento utiliza as proposições `p` (sensor ativo), `q` (leitura acima do limite) e `r` (alarme disparado). Sua base de conhecimento contém `(p ∧ q) → r`, `p` e `¬r`.

1. (1,0) A base implica `¬q`? Apresente uma dedução justificando as regras utilizadas.
2. (1,0) Determine se `r → q` é consequência lógica dessa base; justifique por interpretação ou dedução.
3. (1,0) Explique a diferença entre uma fórmula ser satisfatível e ser válida, usando `p → q` como exemplo.

## 2. Quantificadores e inferência (2,0 pontos)

Domínio não vazio. Predicados `Tecnico(x)`, `Equipamento(y)` e `Inspeciona(x,y)`.

1. (1,0) Formalize: todo técnico inspeciona pelo menos um equipamento.
2. (0,5) Negue formalmente a sentença anterior, deslocando a negação até os predicados.
3. (0,5) Determine o unificador mais geral de `Inspeciona(X, bomba)` e `Inspeciona(ana, Y)` ou explique por que não existe.

## 3. Prolog (2,0 pontos)

Considere o programa, com fatos e cláusulas na ordem apresentada:

```prolog
conexao(a, b).
conexao(a, c).
conexao(b, d).
conexao(c, e).

alcanca(X, Y) :- conexao(X, Y).
alcanca(X, Y) :- conexao(X, Z), alcanca(Z, Y).
```

1. (1,0) Liste, na ordem de obtenção, as respostas da consulta `alcanca(a, Y)` após todos os retrocessos.
2. (0,5) Quais subconsultas são necessárias para provar `alcanca(a, d)` pelo caminho que passa por `b`?
3. (0,5) Explique por que acrescentar `conexao(d, a).` pode tornar uma consulta recursiva não terminante sem controle de visitados.

## 4. Árvore de Decisão (3,0 pontos)

Uma base de 10 registros possui 6 falhas (F) e 4 normais (N). Dois atributos candidatos têm as distribuições abaixo.

| Atributo | Valor | F | N |
|---|---|---:|---:|
| A | alto | 4 | 0 |
| A | baixo | 2 | 4 |
| B | sim | 3 | 1 |
| B | não | 3 | 3 |

Use `G(S) = 1 − Σ p_c²` e `G_split = Σ (|S_j| / |S|) G(S_j)`.

1. (1,0) Calcule a impureza do nó inicial e de cada ramo de A.
2. (1,0) Calcule o Gini ponderado das duas divisões e escolha a raiz CART.
3. (1,0) Classifique um novo registro com A=alto usando apenas a raiz calculada. Explique o que seria necessário para continuar no ramo impuro.

## 5. KNN (2,0 pontos)

Considere a consulta (2,2):

| Amostra | Coordenadas | Classe |
|---|---|---|
| a | (2,3) | A |
| b | (0,2) | B |
| c | (4,2) | B |
| d | (2,5) | A |
| e | (5,5) | A |

1. (1,0) Calcule as distâncias euclidianas e determine as classes preditas para k=1 e k=3.
2. (1,0) Para k=3, utilize voto ponderado por `w_i = 1/d_i²`. Compare com a votação simples e explique como a escala das variáveis pode interferir.

## 6. SVM e PCA (3,0 pontos)

Uma SVM linear usa `f(x) = 2x₁ + x₂ − 4`. Considere os pontos u=(1,1), v=(3,0) e z=(2,2).

1. (1,0) Calcule os escores, indique as classes pelo sinal e determine qual ponto está mais próximo da fronteira usando `d = |f(x)| / ‖w‖`.
2. (1,0) Explique como aumentar C ou aumentar γ de um kernel RBF pode afetar o ajuste ao treino e a generalização.
3. (1,0) As razões de variância explicada do PCA são 0,62, 0,25 e 0,13. Quantos componentes são necessários para reter pelo menos 85%? PCA utiliza os rótulos para escolher componentes?

## 7. Avaliação de modelos (2,0 pontos)

Em um teste independente, um classificador apresenta VP=18, VN=62, FP=8 e FN=12. Considere a classe positiva como a classe de interesse.

1. (1,0) Calcule acurácia, precisão, recall e F1.
2. (1,0) Se perder um positivo tem custo elevado, qual dessas métricas merece maior atenção? Explique por que normalizar o conjunto completo antes de separar treino e teste pode gerar vazamento de dados.

## 8. Algoritmos Genéticos (3,0 pontos)

Um indivíduo representa quatro decisões binárias. Deseja-se maximizar o número de bits iguais ao alvo `1010`. Considere a população `1000`, `0011`, `1110`, `0111`.

1. (1,0) Calcule os fitness e as probabilidades de seleção por roleta proporcional ao fitness.
2. (1,0) Cruze `1000` e `1110` após o segundo bit; apresente os dois descendentes. Inverta o terceiro bit do primeiro descendente e calcule seu novo fitness.
3. (1,0) Explique o papel do elitismo e o risco de reduzir demasiadamente a diversidade. Por que comparar algoritmos pelo número de avaliações pode ser mais justo do que pelo número de gerações?

> **Autoavaliação:** revise os cálculos e identifique quais decisões você consegue justificar sem consultar o material.
