# Aula 10 - Support Vector Machines e PCA

Material público da disciplina de Inteligência Artificial do CEFET-MG, campus Divinópolis.

- [Slides em PDF](./EC_IA_010_SVM.pdf)
- [Nota visual](../../notas/10-svm/README.md)
- [Estudo guiado](../../estudos-guiados/10-svm/README.md)
- [Exemplos Python](../../exemplos/10-svm/README.md)

## Percurso

- **Hiperplano e margem:** SVM procura fronteira de decisão de grande margem; vetores de suporte influenciam sua posição.
- **Soft margin e C:** C menor implica maior regularização; C maior penaliza mais violações de margem.
- **Separação não linear:** Mudança de representação e kernel trick; visualização 2D para 3D como apoio conceitual.
- **RBF/Gaussiana:** K(x,z)=exp(-gamma ||x-z||²); gamma menor amplia influência; gamma maior torna influência local.
- **Experimento:** Pipeline com StandardScaler e SVC linear/RBF; validação para escolha de parâmetros.
- **PCA:** Redução de dimensionalidade para visualização; explained_variance_ratio_ indica fração de variância explicada por componente.

## Continuidade

Continua diretamente a Aula 9.
