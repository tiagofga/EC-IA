# Trabalhos

Esta seção reúne os trabalhos práticos da disciplina. Os trabalhos são avaliações de maior escopo e permanecem separados das listas de exercícios.

## Trabalho 01 - Busca

**Versão pública:** `v0.4.0`  
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

A versão `v0.4.0` consolida os materiais públicos do Trabalho 01. Estão disponíveis:

- [Abrir a pasta do Trabalho 01 no GitHub](https://github.com/tiagofga/EC-IA/tree/main/trabalhos/01-busca)
- <span data-download="../downloads/trabalhos/EC_IA_Trabalho_01_2026.pdf" data-label="Baixar enunciado em PDF">Verificando PDF...</span>
- <span data-download="../downloads/trabalhos/EC_IA_Trabalho_01_2026_Alunos.zip" data-label="Baixar pacote completo">Verificando pacote...</span>

O pacote completo reúne o código-base, mapa público, testes iniciais, instruções para o relatório, modelo SBC e declaração de uso de IA. O enunciado oficial prevalece sobre qualquer resumo apresentado na documentação do site.

## Entrega e versionamento

O desenvolvimento deve permanecer em repositório Git **privado até o encerramento da correção**, com acesso concedido ao professor.

- Parte 1: tag `entrega-parte1`;
- Entrega final: tag `entrega-final`.

A versão marcada pela tag correspondente será utilizada na avaliação. Consulte sempre o enunciado oficial para regras completas.
