# Estudo Guiado 14 - Sistemas Imunológicos Artificiais

Resolva as questões **antes** de consultar novamente os slides e a nota visual. Registre os cálculos, as hipóteses e as justificativas. Utilize o código da prática depois de formular suas respostas.

## Objetivos de aprendizagem

- **Inspiração imunológica:** distinguir o sistema biológico de suas abstrações computacionais e reconhecer os objetivos de NSA e CLONALG.
- **Seleção negativa:** interpretar padrões próprios, detectores, limiar de reconhecimento, tolerância e cobertura.
- **Seleção clonal:** relacionar fitness, afinidade, ordenação, clonagem, hipermutação e renovação.
- **Representação:** formular problemas binários, reais ou por permutação com operadores compatíveis.
- **Experimentação:** comparar AG, ACO, BPSO e CLONALG sob o mesmo objetivo e orçamento de avaliações.

## Questões de interpretação

1. Por que Sistemas Imunológicos Artificiais não são uma simulação fiel do sistema imune?
2. Diferencie os objetivos de NSA e CLONALG. Em qual deles é necessário estabelecer uma função objetivo de otimização?
3. Por que o NSA rejeita detectores que reconhecem padrões próprios conhecidos?
4. Uma amostra que não ativa nenhum detector pode ser declarada normal? Explique.
5. Como a escala dos atributos e a escolha da distância afetam a geração e a utilização dos detectores?
6. Diferencie fitness e afinidade normalizada no CLONALG. Como tratar um objetivo de minimização?
7. Por que candidatos de alta afinidade podem receber mais clones e menor probabilidade de hipermutação?
8. Qual é a diferença entre manter a elite e renovar uma parte da população?
9. Por que a quantidade de avaliações pode ser diferente entre duas gerações com fatores de clonagem diferentes?

## Exercício 1 - Formação e ativação de detectores

Considere o espaço X = [0,12], os padrões normais S = {3,4,9} e a distância absoluta, com raio de reconhecimento r = 1.

| Candidato a detector | Posição |
|---|---:|
| A | 2,5 |
| B | 6 |
| C | 7 |
| D | 10 |
| E | 11,5 |

1. Calcule a menor distância de cada candidato a um padrão normal.
2. Identifique os detectores aceitos pela regra de rejeição dist(d,s) ≤ r.
3. Desenhe na reta numérica as regiões reconhecidas pelos detectores aceitos, limitadas ao domínio X.
4. Determine se as entradas 0, 5,5, 8, 10,5 e 12 ativam algum detector.
5. Identifique uma região sem cobertura que esteja distante dos padrões de S. Por que esse caso evidencia uma limitação?
6. Explique o efeito possível de aumentar o raio sem aumentar a quantidade de detectores.

## Exercício 2 - Reconhecimento binário no NSA

A implementação complementar utiliza cadeias de 8 bits e reconhecimento por r posições consecutivas iguais, na mesma janela, com r = 4.

Considere os padrões próprios `00000000` e `00010000`, e os candidatos `11000011`, `11111111` e `01010101`.

1. Compare cada candidato com os padrões próprios, indicando as janelas de quatro bits que coincidem, se houver.
2. Determine quais candidatos podem ser aceitos como detectores.
3. Para cada detector aceito, avalie seu reconhecimento das amostras `10101111` e `01000100`.
4. Diferencie essa regra da distância de Hamming, que conta posições diferentes independentemente de serem consecutivas.
5. Explique por que um detector com essa representação não pode ser empregado diretamente em medições contínuas sem adaptação.

## Exercício 3 - Clonagem e hipermutação

Considere quatro candidatos selecionados, ordenados por fitness, em uma tarefa de maximização com máximo conhecido igual a 16:

| Candidato | Fitness |
|---|---:|
| A | 15 |
| B | 12 |
| C | 9 |
| D | 5 |

A variante teórica utiliza:

```text
Nᵢ = max(1, floor(β · n / i))
pₘ(a) = pmin + (pmax - pmin) · (1 - a)
```

Na prática, a clonagem utiliza o arredondamento para cima (`ceil`), e a afinidade é fitness/16.

1. Calcule a afinidade de cada candidato usando a regra da prática.
2. Com β = 1,5 e n = 4, determine o número de clones pela regra teórica e pela regra da implementação.
3. Compare o total de avaliações de clones nas duas variantes. Por que a regra precisa estar documentada?
4. Com pmin = 0,02 e pmax = 0,35, calcule a probabilidade de inversão por bit para cada candidato.
5. Determine o número esperado de inversões em um clone de 16 bits de A e de D. Esse valor é garantido em uma execução?
6. Discuta o que pode ocorrer se os clones forem gerados sem mutação ou se todas as taxas forem excessivamente altas.

## Exercício 4 - Otimização com restrições

Selecione itens sob capacidade máxima C = 8:

| Item | A | B | C | D |
|---|---:|---:|---:|---:|
| Peso | 2 | 4 | 5 | 6 |
| Valor | 3 | 6 | 7 | 10 |

Utilize a codificação binária na ordem A, B, C, D e a função de maximização:

```text
f(x) = Σ vᵢ xᵢ - λ · max(0, Σ wᵢ xᵢ - C)
```

1. Com λ = 8, calcule peso, valor e fitness dos candidatos `1001`, `0110`, `1100` e `0011`.
2. Ordene os candidatos por fitness.
3. Inverta o terceiro bit de `1100`, avalie o clone e discuta sua viabilidade.
4. Explique por que aumentar o valor bruto não basta para determinar uma solução aceitável.
5. Proponha uma regra de reparo e compare-a conceitualmente com penalização. O que deveria permanecer igual em uma comparação entre métodos?

## Exercício 5 - Integração da computação natural

Retome a imagem comum das Aulas 12, 13 e 14:

```text
0110
1001
1001
0110
```

1. Represente a imagem como um candidato de 16 bits e calcule o fitness de `0110 / 1001 / 1011 / 0010`.
2. Explique como AG, ACO, BPSO e CLONALG gerariam novos candidatos nesse mesmo espaço.
3. Em CLONALG, quais etapas precisam contabilizar avaliações da função objetivo?
4. Proponha uma tabela experimental para múltiplas sementes e orçamento de 1000 avaliações, incluindo melhor fitness, avaliações efetivas e ocorrência do ótimo.
5. Se um método encontra o ótimo antes dos demais, que informações adicionais são necessárias para sustentar uma conclusão?

## Prática com Python

Utilize os arquivos da prática da Aula 14 fornecidos pelo professor. Identifique as funções de `clonalg.py`, `nsa.py` e `testes.py` antes de executar.

```bash
python testes.py
python clonalg.py --seed 42 --avaliacoes 1000 --csv base.csv
python clonalg.py --seed 42 --avaliacoes 1000 --beta 2.0 --csv clones.csv
python clonalg.py --seed 42 --avaliacoes 1000 --p-max 0.60 --csv mutacao.csv
python nsa.py
```

- Altere um parâmetro por vez, mantendo a semente para a comparação inicial.
- Registre melhor fitness, avaliações utilizadas e histórico acumulado. Compare os resultados por avaliação, não apenas por geração.
- Repita as configurações com sementes 0, 1 e 42; registre todas, sem selecionar a melhor semente.
- No NSA, identifique quais padrões são sinalizados e quais permanecem sem ativação. Não interprete ausência de sinal como normalidade comprovada.

## Discussão

No Trabalho 02, o problema de otimização é o mesmo para AG, ACO ou PSO e CLONALG. Quais operadores e estruturas devem mudar quando a solução é uma permutação ou vetor real? Explique como preservar restrições, função objetivo, interpretação da afinidade e orçamento experimental.

## Autoavaliação

- [ ] Distingo seleção negativa e seleção clonal.
- [ ] Calculo distância, aceitação e ativação de detectores.
- [ ] Interpreto cobertura e regiões não reconhecidas.
- [ ] Calculo afinidade, quantidade de clones e probabilidade de hipermutação.
- [ ] Distingo as variantes teórica e prática de clonagem.
- [ ] Avalio soluções com restrições e penalização.
- [ ] Comparo metaheurísticas com orçamento, sementes e objetivo comuns.
- [ ] Justifico a adaptação de CLONALG ao Trabalho 02.

[Slides da Aula 14](https://github.com/tiagofga/EC-IA/tree/main/aulas/14-sistemas-imunologicos) · [Nota visual 14](../../notas/14-sistemas-imunologicos/README.md)
