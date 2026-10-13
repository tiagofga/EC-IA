# Visualização 05 - Mundo do Wumpus

Esta visualização funciona como um **mini laboratório interativo** da Aula 05.

## Objetivo

Permitir que o estudante observe, em um mesmo ambiente:

- o tabuleiro do Mundo do Wumpus;
- as percepções do agente;
- as sentenças inseridas na KB por `TELL`;
- as inferências sobre casas seguras, possíveis poços e possível Wumpus;
- uma consulta didática apresentada no painel de `ASK`;
- o registro das ações do agente na KB;
- o retorno à casa inicial e a saída da caverna após coletar o ouro.

## Como usar

1. abra `index.html` no navegador;
2. use os botões para girar, avançar, atirar, pegar ouro e sair;
3. acompanhe o painel de percepções, a KB e as inferências;
4. use o botão **Revelar mundo** para alternar entre o modo aluno e o modo professor;
5. tente retornar a `[1,1]` com o ouro e usar **Sair**.

## O que a demonstração implementa

O mecanismo lógico é deliberadamente didático. Ele usa regras locais do Mundo do Wumpus para marcar casas seguras e perigos possíveis a partir de brisa e fedor. O painel de `ASK` consulta esse estado inferido para sugerir uma próxima ação.

Ele **não é um provador de teoremas proposicional completo** e não substitui os procedimentos de verificação de modelos ou resolução apresentados na aula. Essa separação é intencional: a visualização mostra o ciclo operacional do agente, enquanto os pseudocódigos de Lógica apresentam os métodos formais de inferência.

## Fio condutor

```text
percepção -> TELL -> KB -> inferência -> ASK -> ação
```

A distinção mais importante para observar durante a execução é entre:

- o que foi **percebido** diretamente;
- o que foi **armazenado** na KB;
- o que foi **inferido** a partir da KB.
