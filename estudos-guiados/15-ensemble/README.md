# Estudo Guiado 15 - Algoritmos Ensemble

Resolva as questões **antes** de consultar novamente os slides e a nota visual. Registre cálculos e hipóteses antes de executar os experimentos. Não utilize o conjunto de teste para escolher modelos ou hiperparâmetros.

## Objetivos de aprendizagem

- **Fundamentos:** relacionar diversidade, viés, variância e generalização aos modelos individuais das Aulas 08 a 11.
- **Voting:** aplicar votação de classes e média ponderada de probabilidades.
- **Bagging e Random Forest:** interpretar bootstrap, out-of-bag e seleção aleatória de atributos.
- **Boosting:** distinguir adaptação dos pesos em AdaBoost e redução sequencial da perda em Gradient Boosting.
- **Stacking:** explicar predições fora do fold, metaestimador e prevenção de vazamento de dados.
- **Experimentação:** comparar modelos individuais e ensembles usando validação cruzada, métricas, dispersão e custo.

## Questões de interpretação

1. Por que combinar classificadores que cometem erros diferentes pode ajudar? Diversidade sem qualidade individual é suficiente?
2. Diferencie viés e variância. Por que diminuir a variância não implica automaticamente maior acurácia?
3. Quando hard voting e soft voting podem produzir predições diferentes?
4. Por que a calibração das probabilidades importa no soft voting?
5. Diferencie bagging de Random Forest quanto à origem da diversidade.
6. O que significa um exemplo estar out-of-bag para uma árvore? Por que isso não o torna parte do teste externo?
7. Explique a diferença entre treinamento paralelizável em bagging e treinamento sequencial em boosting.
8. Em AdaBoost, por que um exemplo incorreto pode ganhar peso relativo? Qual é o risco dessa estratégia na presença de ruído?
9. Por que Gradient Boosting não é apenas outra fórmula de reponderação de exemplos?
10. Em stacking, por que o metaestimador precisa de predições fora dos folds? Como ocorre a predição depois do treinamento?

## Exercício 1 - Diversidade e variância

Considere M preditores numéricos de variância individual σ² = 2 e correlação comum ρ:

```text
Var(h̄) = σ² · [ρ + (1 - ρ)/M]
```

1. Identifique o significado de σ², ρ, M e h̄.
2. Para M = 5, calcule a variância da média com ρ = 0, 0,4 e 1.
3. Repita os cálculos com M = 20.
4. Compare o efeito de aumentar M e de diminuir ρ.
5. Explique as hipóteses dessa expressão e por que não se deve interpretá-la como fórmula de acurácia.

## Exercício 2 - Voting simples e ponderado

Considere três modelos que geram as seguintes probabilidades:

| Modelo | P(0) | P(1) | Peso |
|---|---:|---:|---:|
| DT | 0,35 | 0,65 | 1 |
| KNN | 0,45 | 0,55 | 1 |
| SVM | 0,90 | 0,10 | 2 |

1. Identifique a classe prevista individualmente por cada modelo.
2. Calcule hard voting com pesos iguais.
3. Calcule hard voting com os pesos da tabela e discuta como resolver eventual empate.
4. Calcule soft voting com pesos iguais e, em seguida, com os pesos da tabela.
5. Explique as possíveis diferenças das decisões. Qual problema ocorreria se as probabilidades de um modelo estivessem associadas às classes na ordem incorreta?
6. Proponha um protocolo para selecionar pesos sem utilizar os rótulos do teste.

## Exercício 3 - Bootstrap e Random Forest

O conjunto de treinamento contém os índices de 1 a 6. Três árvores recebem as seguintes amostras:

| Árvore | Índices da amostra |
|---|---|
| 1 | 1, 2, 2, 4, 5, 5 |
| 2 | 2, 3, 3, 5, 6, 6 |
| 3 | 1, 1, 3, 4, 4, 6 |

1. Determine os exemplos OOB para cada árvore.
2. Identifique quais árvores podem produzir uma predição OOB para o exemplo 2.
3. Calcule a probabilidade de um exemplo específico ficar fora de uma amostra de seis sorteios com reposição.
4. Explique por que essa probabilidade se aproxima de 1/e para conjuntos grandes.
5. Uma base tem oito atributos e a floresta utiliza três candidatos por divisão. Compare esse procedimento com bagging de árvores que consideram todos os atributos.
6. Discuta o efeito esperado de alterar `n_estimators`, `max_features` e `max_depth` sobre diversidade, complexidade e custo.

## Exercício 4 - Uma etapa de AdaBoost

Quatro exemplos de classificação binária possuem pesos iniciais iguais a 0,25:

| Exemplo | Rótulo real | Predição |
|---|---:|---:|
| A | +1 | +1 |
| B | -1 | +1 |
| C | +1 | +1 |
| D | -1 | -1 |

Use as expressões da variante binária clássica:

```text
ε = Σ wᵢ · 1[yᵢ ≠ h(xᵢ)]
α = 0,5 · ln((1 - ε)/ε)
wᵢ' ∝ wᵢ · exp(-α · yᵢ · h(xᵢ))
```

1. Determine o erro ponderado ε e a contribuição α do estimador.
2. Calcule os quatro pesos não normalizados.
3. Normalize os pesos para que a soma seja 1.
4. Identifique o exemplo que ganha maior importância para a próxima etapa.
5. Discuta o significado de ε = 0,5 e o tratamento necessário quando ε = 0.
6. Se dois estimadores seguintes divergem, com pesos α₁ = 0,7 e α₂ = 0,4 e predições +1 e -1, qual é a decisão da combinação ponderada?

## Exercício 5 - Gradient Boosting e resíduos

Considere uma tarefa de regressão com perda quadrática:

| Exemplo | Valor real | Predição inicial F₀ |
|---|---:|---:|
| A | 3 | 5 |
| B | 5 | 5 |
| C | 7 | 5 |
| D | 9 | 5 |

1. Calcule os resíduos y - F₀.
2. Supondo que o estimador h₁ reproduza exatamente esses resíduos, calcule F₁ = F₀ + ηh₁ com η = 0,25.
3. Calcule o erro quadrático médio antes e depois da atualização.
4. Repita com η = 1 e explique por que ajuste perfeito neste exemplo não garante boa generalização.
5. Explique o papel da perda e da taxa de aprendizagem em problemas de classificação.

## Exercício 6 - Stacking e prevenção de vazamento

Um conjunto de treinamento contém seis exemplos, divididos em três folds:

| Fold | Exemplos |
|---|---|
| F1 | A, B |
| F2 | C, D |
| F3 | E, F |

1. Para cada fold, indique em quais exemplos DT, KNN e SVM devem ser ajustados e para quais exemplos devem produzir predições OOF.
2. Desenhe a matriz que seria fornecida ao metaestimador, considerando uma probabilidade de classe positiva de cada modelo por exemplo.
3. Explique o uso dos rótulos no ajuste do metaestimador.
4. Descreva como reajustar os modelos base e classificar uma entrada ainda não observada.
5. Explique por que usar predições de modelos ajustados nos próprios exemplos de treino para construir essa matriz pode comprometer o experimento.
6. Em uma validação cruzada externa de cinco folds, em qual parte de cada divisão deve acontecer a geração interna das predições OOF?

## Prática com Python

Utilize o programa `ensemble.py` e o arquivo `requirements.txt` fornecidos na prática da Aula 15. A base Breast Cancer Wisconsin é carregada pelo scikit-learn, com maligno representado pela classe positiva 1.

```bash
python -m pip install -r requirements.txt
python ensemble.py --seed 42 --estimadores 10
python ensemble.py --seed 42 --estimadores 50
python ensemble.py --seed 42 --estimadores 100
```

1. Identifique os três modelos individuais e as sete configurações ensemble.
2. Leia os CSVs produzidos e construa uma tabela com média e desvio-padrão de F1, precisão, recall, acurácia e tempo médio de treinamento.
3. Quais configurações variam com `--estimadores`? Por que os modelos de voting e stacking não mudam por esse parâmetro na implementação?
4. Compare qualidade média, dispersão e custo. A maior média de F1 implica necessariamente a melhor escolha?
5. Repita o protocolo completo com outras sementes predefinidas, se pertinente, sem escolher a semente pelo desempenho observado.
6. Após congelar a escolha, utilize `--teste` uma única vez com a configuração escolhida para realizar a avaliação externa. Não ajuste os modelos após observar esses resultados.

## Discussão

No Trabalho 02, a classificação deve utilizar a mesma base para os modelos individuais e ensembles. Explique como definir a classe positiva ou a estratégia de média para problemas multiclasse, escolher um protocolo de validação adequado ao conjunto de dados e justificar a seleção de um modelo sem confundir o resultado experimental com superioridade universal.

## Autoavaliação

- [ ] Explico o papel de diversidade, viés e variância.
- [ ] Calculo votação de classes e média de probabilidades.
- [ ] Identifico amostras bootstrap e exemplos OOB.
- [ ] Distingo bagging e Random Forest.
- [ ] Calculo erro, peso e atualização de AdaBoost binário.
- [ ] Aplico uma etapa de Gradient Boosting para perda quadrática.
- [ ] Construo predições OOF sem vazamento para stacking.
- [ ] Comparo modelos por métricas, dispersão e custo.
- [ ] Mantenho o conjunto de teste isolado até finalizar as escolhas.

[Slides da Aula 15](https://github.com/tiagofga/EC-IA/tree/main/aulas/15-ensemble) · [Nota visual 15](../../notas/15-ensemble/README.md)
