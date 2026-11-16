# Simulado 02 - Prova 2

> **Orientações:** Aulas 05 a 12. Tempo sugerido: 100 minutos. Valor de referência: 20 pontos. Resolva sem consulta, registre cálculos e justifique decisões. Arredonde resultados decimais a três casas, quando necessário.

## 1. Modelos e inferência (3,0 pontos)

Considere `p` (pedido aprovado), `q` (estoque reservado), `r` (envio autorizado) e a base `p → q`, `q → r`, `¬r`.

1. (1,0) Determine se a base implica `¬p`. Justifique por encadeamento de regras ou resolução.
2. (1,0) Converta as duas implicações para cláusulas e mostre uma refutação ao acrescentar `p`.
3. (1,0) Construa um modelo que satisfaça apenas `p → q` e `q → r`, mas que não satisfaça `p`. Explique por que consequência lógica e verdade em um único modelo são conceitos distintos.

## 2. LPO e substituições (2,0 pontos)

Predicados `Aluno(x)`, `Projeto(y)`, `Participa(x,y)` e `Orientado(x)`.

1. (1,0) Formalize: existe um projeto do qual participa todo aluno orientado.
2. (0,5) Explique se a afirmação é equivalente a dizer que cada aluno orientado participa de algum projeto.
3. (0,5) Unifique `Participa(X, projeto(Y))` e `Participa(leo, projeto(ia))`, indicando a substituição.

## 3. Prolog e listas (2,0 pontos)

```prolog
conta(_, [], 0).
conta(X, [X|T], N) :- conta(X, T, M), N is M + 1.
conta(X, [H|T], N) :- X \= H, conta(X, T, N).
```

1. (1,0) Trace `conta(a, [b,a,c,a], N)` indicando as chamadas recursivas e o resultado final.
2. (0,5) Explique por que o caso-base é indispensável.
3. (0,5) O que `is` faz diferentemente de `=` em Prolog? Exemplifique usando `N is 2 + 1` e `N = 2 + 1`.

## 4. Árvores e entropia (3,0 pontos)

Uma base de oito exemplos contém quatro positivos e quatro negativos.

| Atributo | Valor | Positivos | Negativos |
|---|---|---:|---:|
| X | 0 | 4 | 0 |
| X | 1 | 0 | 4 |
| Y | 0 | 3 | 1 |
| Y | 1 | 1 | 3 |

Use `H(S) = −Σ p_c log₂(p_c)`, com `0 log₂(0) = 0`; `H(3/4, 1/4) ≈ 0,811`.

1. (1,0) Calcule a entropia inicial e a entropia ponderada de cada divisão.
2. (1,0) Determine o ganho de informação de X e Y e escolha o atributo pelo ID3.
3. (1,0) Desenhe a árvore mínima induzida e explique por que ganho de informação elevado no treino não garante sozinho desempenho elevado em dados novos.

## 5. KNN e preparação de dados (2,0 pontos)

Duas variáveis são temperatura em °C e pressão em Pa. Para uma consulta, as diferenças absolutas em relação a três registros são:

| Registro | Δ temperatura | Δ pressão | Classe |
|---|---:|---:|---|
| a | 1 | 100 | Normal |
| b | 4 | 20 | Falha |
| c | 2 | 200 | Normal |

1. (1,0) Determine o vizinho mais próximo pela distância euclidiana nos valores originais e depois de dividir as diferenças de temperatura por 2 e as de pressão por 100.
2. (1,0) Explique de onde devem ser estimados os parâmetros de escala durante validação cruzada e por que a escolha de k não deve ser feita usando o teste final.

## 6. SVM e PCA (3,0 pontos)

Uma SVM linear tem `w = (3,4)` e `b = −7`. Os pontos são a=(1,1), b₁=(2,1) e c=(0,1).

1. (1,0) Calcule `f(x) = wᵀx + b` e a distância geométrica dos três pontos ao hiperplano. Indique qual está sobre a fronteira e as classes dos demais.
2. (1,0) Para um conjunto com regiões curvas e não separáveis linearmente, justifique o uso de RBF e descreva o efeito de γ muito pequeno e muito grande.
3. (1,0) Em PCA, os autovalores da matriz de covariância são 5, 3 e 2. Calcule a fração de variância retida por dois componentes e explique por que retenção de variância não garante preservação de toda informação discriminativa.

## 7. Comparação de classificadores (2,0 pontos)

Dois modelos foram avaliados nos mesmos 100 exemplos, com 20 positivos e 80 negativos.

| Modelo | VP | VN | FP | FN |
|---|---:|---:|---:|---:|
| A | 12 | 78 | 2 | 8 |
| B | 18 | 68 | 12 | 2 |

1. (1,0) Calcule precisão, recall e F1 dos dois modelos.
2. (1,0) Escolha um modelo caso falsos negativos tenham custo cinco vezes maior que falsos positivos. Calcule o custo `5FN + FP` de cada modelo e explique por que a escolha pode divergir da acurácia.

## 8. Algoritmos Genéticos (3,0 pontos)

Maximize `f(x) = 2x₁ + 3x₂ + x₃ + 4x₄` para indivíduos binários com exatamente dois bits iguais a 1. População válida: `1100`, `1010`, `0101`, `0011`.

1. (1,0) Calcule o fitness e selecione os vencedores dos torneios (1,4) e (2,3), numerando a população de 1 a 4 na ordem dada.
2. (1,0) Cruze `1100` e `0011` após o segundo bit. Verifique se os descendentes continuam válidos e proponha um operador de reparo para cada um.
3. (1,0) Explique como uma mutação por troca de posições de bits diferentes preserva a restrição e como o elitismo deve tratar indivíduos inválidos.

> **Autoavaliação:** identifique os resultados que mudaram com a métrica, a escala dos atributos ou a representação escolhida.
