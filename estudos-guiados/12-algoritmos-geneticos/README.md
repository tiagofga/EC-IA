# Estudo Guiado 12 - Algoritmos Genéticos

Resolva as questões **antes** de consultar os slides e a nota visual. Registre hipóteses e cálculos; utilize o código de referência apenas após tentar a resolução.

## Objetivos de aprendizagem

- **Representação:** identificar indivíduo, gene, cromossomo, população e restrições; distinguir codificações binárias, reais e por permutação.
- **Avaliação:** diferenciar objetivo de minimização e aptidão usada pela seleção.
- **Seleção:** aplicar roleta e torneio, interpretando suas probabilidades e pressão seletiva.
- **Operadores:** executar crossover de um ponto, mutação por gene e preservação por elitismo.
- **Ciclo:** descrever inicialização, avaliação, seleção, reprodução, nova geração e parada.
- **Experimentação:** analisar parâmetros, sementes, diversidade e limites de comparação por execução isolada.

## Questões de interpretação

1. Em que sentido o AG amplia a busca local? Ter uma população garante o ótimo global?
2. Qual a diferença entre um indivíduo, seu cromossomo e sua aptidão? Como essa distinção aparece no TSP?
3. Por que a representação deve ser definida antes de escolher crossover e mutação? Dê um exemplo de operador inválido para permutações.
4. Um problema pede minimizar o custo de uma rota. Por que usar diretamente o custo como peso de uma roleta de **maximização** pode inverter a preferência desejada?
5. Compare seleção por roleta e por torneio. Por que o melhor candidato da população pode não ser selecionado?
6. Como elitismo de um indivíduo afeta o melhor fitness observado entre gerações? Por que isso não garante diversidade?
7. Qual a diferença entre probabilidade de mutação **por gene** e **por indivíduo**?
8. Quais variáveis experimentais devem ser controladas para comparar duas taxas de mutação sem atribuir diferenças ao acaso?

## Exercício 1 - Roleta e torneio

Uma população possui aptidões não negativas: A = 1, B = 2, C = 3 e D = 4.

1. Calcule as probabilidades da roleta e os intervalos acumulados na ordem A, B, C, D.
2. Com sorteio uniforme r = 0,52, indique o indivíduo selecionado e justifique pelo intervalo.
3. Num torneio entre A, C e D, quem vence? O resultado depende da aptidão de B?
4. Se o tamanho do torneio aumenta sob as mesmas condições de amostragem, qual tendência se espera para a pressão seletiva?

## Exercício 2 - Operadores binários

Considere P1 = `110|010` e P2 = `001|111`; o símbolo `|` indica o ponto de corte.

1. Produza dois filhos por crossover de um ponto.
2. Inverta o bit da posição 2 (contagem a partir de 1, da esquerda para a direita) do primeiro filho.
3. A mutação necessariamente melhorou a solução? Qual informação falta?
4. Para 16 genes com probabilidade de mutação independente p = 0,10, calcule o **número esperado** de bits mutados; explique por que esse não é o número garantido.

## Exercício 3 - Prática da imagem binária 4 × 4

A imagem-alvo da aula é:

```text
0110
1001
1001
0110
```

1. Escreva sua codificação linear de 16 bits.
2. Calcule o fitness do candidato `0110 / 1010 / 1001 / 0110`, considerando coincidências de bits.
3. Indique o fitness máximo e o mínimo possível e construa um exemplo que atinja cada extremo.
4. Descreva as verificações mínimas para garantir que uma população de 20 indivíduos permaneça válida após crossover, mutação e elitismo.
5. Uma nova geração contém a elite e pares de filhos; como evitar ultrapassar o tamanho da população quando ele é ímpar?
6. Compare qualitativamente taxas de mutação de 0,01 e 0,20: o que observaria nas curvas? Por que não concluiria antecipadamente qual é melhor?

## Exercício 4 - Transferência para o TSP

Um candidato do TSP representa a ordem em que as cidades são visitadas.

1. Explique a diferença entre a aptidão binária da imagem e o custo de uma rota fechada.
2. Mostre como um crossover de um ponto, copiado diretamente da codificação binária, pode gerar uma permutação inválida.
3. Proponha uma estratégia geral para garantir descendentes válidos, sem precisar programá-la.
4. Indique o que deve permanecer igual se duas implementações de AG forem comparadas experimentalmente.

## Prática com Python

Consulte [`ag_imagem_4x4.py`](../../exemplos/12-algoritmos-geneticos/ag_imagem_4x4.py) **após** resolver os exercícios. O script é uma solução de referência liberada após a prática.

```bash
python ag_imagem_4x4.py --seed 42 --testes --sem-grafico
python ag_imagem_4x4.py --seed 42 --mutacao 0.20 --sem-grafico
```

Registre para cada execução a semente, taxa de mutação, melhor fitness e geração de parada. Repita com sementes 0, 1 e 42, mantendo a mesma imagem e demais parâmetros. A comparação com três sementes é exploratória, não uma demonstração estatística de superioridade.

## Discussão

Se um algoritmo encontra a imagem-alvo rapidamente, isso o torna adequado para qualquer problema de otimização? Relacione dificuldade da instância, codificação, função objetivo e orçamento de avaliações.

## Autoavaliação

- [ ] Identifico entradas, saídas e restrições do problema.
- [ ] Calculo probabilidades de roleta e resolvo torneios.
- [ ] Executo crossover e mutação binária manualmente.
- [ ] Explico por que elitismo preserva o melhor candidato conhecido.
- [ ] Reconheço operadores incompatíveis com permutações.
- [ ] Registro parâmetros e sementes sem tirar conclusões universais.
- [ ] Relaciono a evolução por operadores ao compartilhamento de informação da Aula 13.

[Slides da Aula 12](../../aulas/12-algoritmos-geneticos/README.md) · [Nota visual 12](../../notas/12-algoritmos-geneticos/README.md)
