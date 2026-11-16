# Simulado 03 - Prova 2

> **Atenção:** estes materiais são simulados de revisão, com oito questões para ampliar a prática dos conteúdos. A Prova 2 oficial terá apenas **cinco questões**. O formato, a distribuição de pontos e os enunciados dos simulados não correspondem necessariamente aos da avaliação oficial.

> **Orientações:** Aulas 05 a 12. Tempo sugerido: 100 minutos. Valor de referência: 20 pontos. Resolva sem consulta e justifique as conclusões. Arredonde resultados decimais a três casas, quando necessário.

## 1. Base de conhecimento e decisão (3,0 pontos)

Um sistema de diagnóstico utiliza `p` (vibração anormal), `q` (temperatura elevada), `r` (inspeção necessária) e `s` (equipamento parado). A base contém `(p ∨ q) → r`, `r → s` e `q`.

1. (1,0) Determine se `s` é consequência lógica da base, justificando a dedução.
2. (1,0) A base permite concluir `p`? Apresente um modelo que justifique sua resposta.
3. (1,0) Acrescente o fato `¬s`. Explique se a base resultante é satisfatível e o que isso significa para um agente baseado em conhecimento.

## 2. Lógica de primeira ordem (2,0 pontos)

Use os predicados `Sensor(x)`, `Falha(x)`, `Inspecionado(x)` e `EmArea(x,y)`.

1. (1,0) Formalize: nenhum sensor com falha está sem inspeção.
2. (0,5) A partir da sentença anterior e dos fatos `Sensor(s1)` e `Falha(s1)`, obtenha uma conclusão por instanciação universal e inferência.
3. (0,5) Determine se `EmArea(X, X)` e `EmArea(s1, sala2)` são unificáveis, considerando `s1` e `sala2` constantes distintas.

## 3. Prolog (2,0 pontos)

```prolog
requer(ia, programacao).
requer(ia, estatistica).
requer(estatistica, calculo).

pre(X, Y) :- requer(X, Y).
pre(X, Y) :- requer(X, Z), pre(Z, Y).
```

1. (1,0) Liste todas as respostas de `pre(ia, Y)` na ordem em que Prolog as encontra.
2. (0,5) Mostre uma sequência de resoluções bem-sucedida para `pre(ia, calculo)`.
3. (0,5) A consulta `pre(calculo, ia)` falha. Isso prova que a proposição correspondente é falsa em qualquer mundo possível? Justifique distinguindo falha de prova e falsidade lógica.

## 4. Árvore de Decisão (3,0 pontos)

Há 12 amostras, seis de cada classe. A divisão por A resulta nos ramos (5+,1−) e (1+,5−). A divisão por B resulta nos ramos (3+,0−) e (3+,6−).

1. (1,0) Calcule a impureza inicial pelo índice de Gini e a impureza dos quatro ramos.
2. (1,0) Calcule as duas impurezas ponderadas e selecione o atributo da raiz CART.
3. (1,0) Com profundidade máxima igual a 1, classifique uma amostra em cada ramo da raiz escolhida utilizando maioria. Explique o possível efeito de aumentar a profundidade máxima.

## 5. KNN (2,0 pontos)

Para a consulta q=(0,0), considere os registros a=(1,0), b=(0,2), c=(1,2), d=(3,0), e=(0,4), com classes A, B, B, A e A, respectivamente.

1. (1,0) Determine a ordem dos vizinhos pela distância euclidiana e classifique a consulta para k=3 e k=5. Use ordem alfabética somente em empates de distância.
2. (1,0) Para k=3, calcule o voto ponderado por `1/d` e compare com maioria simples. Explique como ruído local e k muito pequeno podem afetar o resultado.

## 6. SVM e PCA (3,0 pontos)

Considere a função de decisão `f(x) = x₁ − 2x₂ + 1`. Pontos rotulados: (3,1) com classe +1; (2,3) com classe -1; (0,0) com classe -1.

1. (1,0) Calcule as predições pelo sinal e identifique os erros de classificação. Entre os três, qual ponto está geometricamente mais próximo da fronteira?
2. (1,0) Distinga o escore de decisão da distância geométrica. Explique como regularização e escolha de kernel influenciam o modelo.
3. (1,0) Uma base de cinco atributos tem razões de variância explicada 0,46, 0,24, 0,16, 0,10 e 0,04. Quantos componentes são necessários para reter pelo menos 90%? Descreva como aplicar PCA corretamente em um pipeline com SVM e validação cruzada.

## 7. Avaliação experimental (2,0 pontos)

Um grupo compara DT, KNN e SVM. Obteve os seguintes F1 médios em cinco folds, todos com o mesmo protocolo de validação: DT=0,83, KNN=0,86 e SVM=0,87. Os desvios-padrão são 0,03, 0,04 e 0,06, respectivamente. O teste final ainda não foi utilizado.

1. (1,0) Qual modelo possui maior média? Qual apresenta menor variabilidade? É suficiente afirmar que o melhor modelo encontrado será superior em qualquer população de dados? Justifique.
2. (1,0) Descreva um protocolo experimental que evite vazamento e que permita selecionar hiperparâmetros sem reutilizar o teste final.

## 8. Algoritmos Genéticos (3,0 pontos)

Considere a representação binária de quatro posições para escolher componentes. O alvo é `1101`, e o fitness é a quantidade de bits corretos. A população contém `0001`, `1111`, `1000` e `0100`.

1. (1,0) Calcule o fitness e as probabilidades de seleção por roleta. Qual indivíduo seria preservado por elitismo unitário?
2. (1,0) Em uma nova execução, o orçamento é de 100 avaliações. A população inicial de 10 indivíduos é avaliada uma vez e cada geração avalia 10 novos candidatos, inclusive eventuais cópias da elite. Quantas gerações completas podem ser executadas após a inicialização? Explique por que não se deve contar apenas avaliações que melhoram o melhor fitness.
3. (1,0) A melhor aptidão permanece constante durante cinco gerações, mas a população ainda contém indivíduos diferentes. Explique por que isso não prova que o ótimo foi encontrado e sugira um ajuste experimental, mantendo o orçamento fixo.

> **Autoavaliação:** antes de encerrar, explique por escrito a diferença entre inferência, classificação supervisionada e otimização.
