# Aula 11 - Atividade Integradora - DT, KNN e SVM

Material público da disciplina de Inteligência Artificial do CEFET-MG, campus Divinópolis.

- [Slides em PDF](./EC_IA_011_Atividade_Comparacao.pdf)
- [Nota visual](../../notas/11-atividade-comparacao/README.md)
- [Estudo guiado](../../estudos-guiados/11-atividade-comparacao/README.md)
- [Exemplos Python](../../exemplos/11-atividade-comparacao/README.md)

## Percurso

- **Protocolo experimental:** Mesma base, alvo, divisão, semente e métricas; sem tuning no teste.
- **Classe positiva:** Na base Breast Cancer do scikit-learn: original 0=malignant; transformar para 1=maligno como classe positiva.
- **Modelos:** DT max_depth=4, KNN k=5 e SVM RBF com C=1 e gamma=scale.
- **Métricas:** Acurácia, precisão, recall e F1; matriz de confusão [[TN,FP],[FN,TP]].
- **Decisão contextual:** Falsos negativos podem custar mais que falsos positivos; métricas são complementares.
- **Interpretação:** Resultados de uma única partição e uma base não estabelecem superioridade universal.

## Continuidade

Continua diretamente a Aula 10.
