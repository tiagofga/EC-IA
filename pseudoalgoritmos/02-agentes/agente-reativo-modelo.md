# Agente reativo baseado em modelo

Pseudocódigo conceitual baseado no programa de agente reativo com estado interno apresentado na Aula 02.

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

A diferença central em relação ao agente reativo simples é a manutenção de um estado interno que resume aspectos do ambiente não diretamente observáveis na percepção atual.
