# Agentes baseados em tabela e regras

Nos slides da Aula 02 aparecem três estruturas que efetivamente podem ser representadas como pseudocódigo. Os demais tipos de agentes são apresentados como arquiteturas conceituais.

### Agente baseado em tabela

```text
receber uma nova percepção
adicionar a percepção à sequência perceptiva
consultar na tabela a ação correspondente à sequência perceptiva
retornar a ação encontrada
```

**Ideia central:** a função do agente é representada por uma tabela que associa sequências perceptivas a ações. A abordagem é simples, mas não escala para ambientes grandes.

### Agente reativo simples

```text
receber a percepção atual
interpretar a percepção como um estado
selecionar a regra condição-ação compatível com o estado
retornar a ação indicada pela regra
```

**Ideia central:** a decisão depende apenas da percepção atual. Não existe memória explícita do passado.

### Agente reativo baseado em modelo

```text
receber a percepção atual
atualizar o estado interno usando:
    estado interno anterior
    percepção atual
    modelo de evolução do ambiente
    informação sobre a ação anterior

selecionar a regra condição-ação compatível com o estado interno
retornar a ação indicada pela regra
```

**Ideia central:** o agente mantém um estado interno para representar aspectos do ambiente que não são diretamente observáveis na percepção corrente.

### O que não foi convertido em pseudocódigo

A Aula 02 também apresenta:

- agente orientado por metas;
- agente orientado por utilidade;
- agente de aprendizagem.

Nos slides, esses modelos aparecem como **diagramas de arquitetura**, e não como pseudocódigos. Por isso, esta seção preserva a forma original do conteúdo e não cria algoritmos que não foram apresentados em aula.

