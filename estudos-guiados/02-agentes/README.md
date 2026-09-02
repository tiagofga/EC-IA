# Estudo Guiado 02 - Agentes Inteligentes

## Objetivo

Ao concluir este estudo, você deve ser capaz de modelar um sistema como agente, definir sua tarefa por meio de PEAS, classificar o ambiente e justificar a arquitetura de agente mais adequada ao problema.

## 1. Retomada

Antes de iniciar, responda:

- o que significa agir racionalmente;
- por que uma ação pode ser racional mesmo quando o resultado final não é o melhor possível;
- qual é a diferença entre ter informação completa e agir da melhor forma com a informação disponível.

Essas respostas conectam a Aula 01 ao conceito de agente racional.

## 2. Vocabulário fundamental

Certifique-se de distinguir:

- agente;
- ambiente;
- percepção;
- sequência perceptiva;
- sensor;
- atuador;
- ação;
- função do agente;
- programa do agente;
- medida de desempenho;
- racionalidade.

Não trate sensor e percepção como sinônimos, nem atuador e ação como a mesma coisa.

## 3. Modelo percepção-ação

Escolha dois exemplos diferentes, como um robô móvel e um agente de software. Para cada um, complete:

| Elemento | Exemplo 1 | Exemplo 2 |
|---|---|---|
| Ambiente |  |  |
| Sensores/fontes de percepção |  |  |
| Percepções |  |  |
| Ações |  |  |
| Atuadores/meios de atuação |  |  |
| Medida de desempenho |  |  |

Depois responda: o que mudaria se o agente tivesse acesso apenas parcial ao ambiente?

## 4. PEAS

PEAS organiza a especificação da tarefa de um agente:

- **P** - Performance measure, ou medida de desempenho;
- **E** - Environment, ou ambiente;
- **A** - Actuators, ou atuadores;
- **S** - Sensors, ou sensores.

Monte um PEAS completo para um dos seguintes sistemas:

- veículo autônomo;
- agente de recomendação acadêmica;
- sistema de monitoramento de infraestrutura;
- robô de entrega.

Não use apenas palavras genéricas. A medida de desempenho deve permitir discutir o que significa uma ação boa ou ruim naquele contexto.

## 5. Racionalidade não é onisciência

Considere um agente que toma uma decisão com base em informações incompletas e, depois, descobre que outra ação teria produzido resultado melhor.

Responda:

1. Isso prova que a decisão inicial foi irracional?
2. Que informação estava disponível no momento da decisão?
3. Qual era a medida de desempenho?
4. A ação escolhida maximizava o desempenho esperado com base no que era conhecido?

A racionalidade deve ser analisada no momento da decisão, não apenas depois de observar o resultado.

## 6. Natureza do ambiente

Para um sistema escolhido por você, classifique o ambiente segundo os pares estudados na aula, justificando cada classificação:

- completamente observável ou parcialmente observável;
- determinístico ou estocástico;
- episódico ou sequencial;
- estático ou dinâmico;
- discreto ou contínuo;
- agente único ou multiagente.

Em seguida, altere uma hipótese do problema e verifique se alguma classificação muda.

## 7. Estruturas de agentes

Compare as seguintes arquiteturas:

- agente reativo simples;
- agente reativo baseado em modelo;
- agente orientado por metas;
- agente orientado por utilidade;
- agente com aprendizagem.

Para cada uma, responda:

- que informação precisa ser mantida;
- como a ação é escolhida;
- que limitação da arquitetura anterior ela procura superar;
- em que tipo de ambiente ela seria adequada.

## 8. Discussão: ChatGPT é um agente?

Não responda apenas "sim" ou "não". Analise dois cenários:

### Cenário A

Um modelo recebe uma mensagem e produz uma resposta, sem executar ações externas.

### Cenário B

Um sistema usa um modelo para observar informações, decidir passos, chamar ferramentas, verificar resultados e continuar até atingir uma meta.

Para os dois cenários, identifique:

- ambiente;
- percepções;
- ações;
- grau de autonomia;
- medida de desempenho ou objetivo;
- se a descrição como agente é adequada.

## 9. Ponte para a Aula 03

Um agente orientado por metas precisa saber algo sobre o mundo e sobre as consequências de suas ações.

Explique por que isso conduz naturalmente às perguntas:

- como representar estados do ambiente?
- como representar ações e transições?
- como transformar uma meta em um problema computacional?

## Autoavaliação

- [ ] Consigo definir agente sem depender de um exemplo específico.
- [ ] Consigo distinguir percepção, sensor, ação e atuador.
- [ ] Consigo montar um PEAS coerente.
- [ ] Consigo diferenciar racionalidade de onisciência.
- [ ] Consigo classificar um ambiente e justificar cada propriedade.
- [ ] Consigo comparar as principais estruturas de agentes.
- [ ] Consigo explicar a passagem de agentes orientados por metas para formulação de problemas.
