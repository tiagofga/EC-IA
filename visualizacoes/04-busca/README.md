# Visualização - Métodos de Busca

Visualização didática baseada em **traces pré-calculados** para os métodos apresentados na Aula 04.

## Busca não informada

- Busca em Largura - BFS;
- Busca em Profundidade - DFS;
- Busca de Custo Uniforme - UCS.

## Busca informada

- Busca Gulosa - Greedy Search;
- A*;
- Beam Search.

## Busca local e otimização

- Hill Climbing;
- Simulated Annealing;
- Algoritmo Genético - AG.

### Representações utilizadas

- BFS, DFS, UCS, Busca Gulosa, A* e Beam Search: grafo didático;
- Hill Climbing e Simulated Annealing: problema das 8 rainhas;
- Algoritmo Genético: snapshots de uma população de soluções para 8 rainhas.

## Arquitetura de integridade acadêmica

```text
gerador privado
      |
      v
traces JSON públicos
      |
      v
renderer HTML/CSS/JS
```

O código público apenas representa estados previamente calculados. Ele **não** escolhe nós, gera vizinhos, calcula prioridades, executa operadores evolutivos ou implementa os algoritmos de busca.

## Execução local

Na raiz do repositório:

```bash
python -m http.server 8000
```

Depois acesse:

```text
http://localhost:8000/visualizacoes/04-busca/
```
