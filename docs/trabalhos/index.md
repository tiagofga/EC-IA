# Trabalhos

Esta seção reúne os trabalhos práticos da disciplina. Os trabalhos são avaliações de maior escopo e permanecem separados das listas de exercícios.

## Trabalho 01 - Busca

**Valor:** 20,0 pontos  
**Modalidade:** individual ou em dupla  
**Linguagem:** Python

### Cronograma

| Etapa | Conteúdo | Entrega |
|---|---|---|
| Parte 1 | Busca não informada e informada | **08/10/2026** |
| Parte 2 e entrega final | Busca local + relatório final | **15/10/2026** |

### Parte 1 - Busca não informada e informada

O agente deve navegar em uma grade ponderada. Devem ser implementados:

- BFS;
- DFS;
- Busca de Custo Uniforme - UCS;
- Busca Gulosa;
- A*;
- heurísticas Manhattan e Euclidiana.

O código-base já fornece a representação do ambiente, leitura do mapa, estruturas de resultado e interface de linha de comando. As funções dos algoritmos permanecem deliberadamente incompletas.

### Parte 2 - Busca local

O segundo problema utiliza as 8 Rainhas e exige:

- Hill Climbing básico, sem movimentos laterais;
- Random-Restart Hill Climbing;
- experimentos com sementes de 0 a 99;
- análise quantitativa e discussão das falhas e reinícios.

### Materiais públicos

Estão disponíveis:

- [Abrir a pasta do Trabalho 01 no GitHub](https://github.com/tiagofga/EC-IA/tree/main/trabalhos/01-busca)
- <span data-download="../downloads/trabalhos/EC_IA_Trabalho_01_2026.pdf" data-label="Baixar enunciado em PDF">Verificando PDF...</span>

Na pasta do trabalho estão disponíveis o código-base, mapa público, testes iniciais, instruções para o relatório, modelo SBC e declaração de uso de IA. O enunciado oficial prevalece sobre qualquer resumo apresentado na documentação do site.

## Instruções de entrega do Trabalho 01

O desenvolvimento deve permanecer em repositório Git **privado até o encerramento da correção**, com acesso concedido ao professor.

- Parte 1: tag `entrega-parte1`;
- Entrega final: tag `entrega-final`.

A versão marcada pela tag correspondente será utilizada na avaliação. Consulte sempre o enunciado oficial para regras completas.

## Trabalho 02 - Aprendizado de Máquina e Computação Natural

**Entrega:** 03/12/2026 · **Valor:** 20,0 pontos.

O enunciado oficial estabelece os requisitos completos. O trabalho compreende três partes:

1. **Aprendizado supervisionado (8,0 pontos):** escolha de uma base UCI/Kaggle, análise exploratória, preparação dos dados e comparação entre Árvore de Decisão, KNN, SVM, Random Forest e AdaBoost.
2. **Computação Natural (8,0 pontos):** escolha de um dos 50 problemas oficiais, com implementação própria de AG, PSO ou ACO e CLONALG (ou alternativa imune aprovada), sob a mesma formulação.
3. **Comparação, documentação e entrega (4,0 pontos):** protocolo experimental, relatório e reprodutibilidade.

### Materiais do Trabalho 02

- <span data-download="../downloads/trabalhos/EC_IA_Trabalho_02_2026.pdf" data-label="Baixar enunciado do Trabalho 02 (PDF)">Verificando PDF...</span>
- [Orientações resumidas no GitHub](https://github.com/tiagofga/EC-IA/tree/main/trabalhos/02-aprendizagem-computacao-natural)
- [Exemplos Python de aprendizagem supervisionada](../exemplos/index.md)

O PDF contém a lista dos 50 problemas de otimização e orientações de adaptação dos três métodos. O enunciado oficial prevalece sobre os resumos desta página. Não são disponibilizadas implementações dos métodos de computação natural exigidos.
