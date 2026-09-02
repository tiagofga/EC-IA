# Visualização - Busca

Visualização didática para:

## Busca não informada

- BFS;
- DFS;
- Custo Uniforme.

## Busca informada

- Busca Gulosa;
- A*.

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

O código público:

- desenha o grafo;
- destaca o nó atual;
- mostra fronteira e explorados;
- apresenta `g`, `h` ou `f` quando existentes no trace;
- avança ou retorna entre passos.

O código público **não**:

- escolhe o próximo nó;
- implementa estruturas de fronteira;
- calcula prioridades;
- executa qualquer algoritmo de busca.

## Execução local

Na raiz do repositório:

```bash
python -m http.server 8000
```

Depois:

```text
http://localhost:8000/visualizacoes/04-busca/
```
