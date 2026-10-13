# Estudo Guiado 10 - Support Vector Machines e PCA

Resolva antes de consultar novamente os slides. Use os códigos somente depois de registrar suas hipóteses.

## Objetivos de aprendizagem

- **Hiperplano e margem:** SVM procura fronteira de decisão de grande margem; vetores de suporte influenciam sua posição.
- **Soft margin e C:** C menor implica maior regularização; C maior penaliza mais violações de margem.
- **Separação não linear:** Mudança de representação e kernel trick; visualização 2D para 3D como apoio conceitual.
- **RBF/Gaussiana:** K(x,z)=exp(-gamma ||x-z||²); gamma menor amplia influência; gamma maior torna influência local.
- **Experimento:** Pipeline com StandardScaler e SVC linear/RBF; validação para escolha de parâmetros.
- **PCA:** Redução de dimensionalidade para visualização; explained_variance_ratio_ indica fração de variância explicada por componente.

## Questões de interpretação

1. Qual é o papel dos vetores de suporte?
2. Como C influencia a tolerância a violações da margem?
3. Descreva geometricamente o efeito de gamma no kernel RBF.
4. Por que StandardScaler deve estar dentro do Pipeline?
5. O que significa explained_variance_ratio_ de dois componentes PCA?

## Prática com Python

Execute os scripts em `exemplos/10-svm/` quando houver e identifique entradas, etapas de ajuste e saída. Não utilize o conjunto de teste para selecionar hiperparâmetros.

## Discussão

Qual decisão metodológica mais influencia o resultado desta aula? Proponha uma modificação e descreva como ela poderia ser avaliada de maneira reprodutível.

## Autoavaliação

- [ ] Identifico entradas e saídas.
- [ ] Explico o funcionamento do método.
- [ ] Consigo interpretar seus parâmetros.
- [ ] Reconheço um erro experimental que invalidaria a comparação.
- [ ] Explico como a aula prepara o tema seguinte.
