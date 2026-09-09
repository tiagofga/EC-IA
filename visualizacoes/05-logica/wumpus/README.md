# Visualização 05 - Mundo do Wumpus

Esta visualização funciona como um **mini laboratório interativo** da Aula 05.

## Objetivo

Permitir que o estudante observe, em um mesmo ambiente:

- o tabuleiro do Mundo do Wumpus;
- as percepções do agente;
- as sentenças inseridas na KB por `TELL`;
- as inferências sobre casas seguras, possíveis poços e possível Wumpus;
- uma sugestão simples de ação, apresentada como resultado de `ASK`.

## Como usar

1. abra `index.html` no navegador;
2. use os botões para girar, avançar, pegar ouro e reiniciar;
3. acompanhe o painel de percepções, a KB e as inferências;
4. use o botão **Revelar mundo** para alternar entre o modo aluno e o modo professor.

## Observação didática

A visualização não substitui a prova formal, mas ajuda a tornar visível a sequência:

```text
percepção -> TELL -> KB -> inferência -> ASK -> ação
```
