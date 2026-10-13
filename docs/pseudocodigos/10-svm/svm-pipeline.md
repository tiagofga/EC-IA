# Pipeline e seleção de SVM

```text
dividir treino e teste (teste reservado)
para cada configuração (kernel, C, gamma):
  avaliar em validação cruzada do treino:
    ajustar StandardScaler apenas no fold de treino
    ajustar SVM com atributos transformados
    avaliar no fold de validação
selecionar a configuração segundo a métrica definida
reajustar pipeline no treino completo
avaliar no teste reservado
```
Não é pseudocódigo do otimizador interno da SVM; representa o protocolo experimental apresentado na aula.
