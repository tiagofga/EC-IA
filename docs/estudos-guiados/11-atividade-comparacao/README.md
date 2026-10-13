# Estudo Guiado 11 - Atividade Integradora - DT, KNN e SVM

Resolva antes de consultar novamente os slides. Use os códigos somente depois de registrar suas hipóteses.

## Objetivos de aprendizagem

- **Protocolo experimental:** Mesma base, alvo, divisão, semente e métricas; sem tuning no teste.
- **Classe positiva:** Na base Breast Cancer do scikit-learn: original 0=malignant; transformar para 1=maligno como classe positiva.
- **Modelos:** DT max_depth=4, KNN k=5 e SVM RBF com C=1 e gamma=scale.
- **Métricas:** Acurácia, precisão, recall e F1; matriz de confusão [[TN,FP],[FN,TP]].
- **Decisão contextual:** Falsos negativos podem custar mais que falsos positivos; métricas são complementares.
- **Interpretação:** Resultados de uma única partição e uma base não estabelecem superioridade universal.

## Questões de interpretação

1. Qual classe positiva foi adotada na atividade?
2. Interprete TN, FP, FN e TP em uma matriz de confusão.
3. Explique a diferença entre precisão e recall para casos malignos.
4. Por que DT não exige a mesma padronização usada por KNN e SVM?
5. Por que o melhor classificador neste experimento não é universalmente superior?

## Prática com Python

Execute os scripts em `exemplos/11-atividade-comparacao/` quando houver e identifique entradas, etapas de ajuste e saída. Não utilize o conjunto de teste para selecionar hiperparâmetros.

## Discussão

Qual decisão metodológica mais influencia o resultado desta aula? Proponha uma modificação e descreva como ela poderia ser avaliada de maneira reprodutível.

## Autoavaliação

- [ ] Identifico entradas e saídas.
- [ ] Explico o funcionamento do método.
- [ ] Consigo interpretar seus parâmetros.
- [ ] Reconheço um erro experimental que invalidaria a comparação.
- [ ] Explico como a aula prepara o tema seguinte.
