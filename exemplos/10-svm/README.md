# Exemplos Python - Aula 10: Support Vector Machines e PCA

## Dependências

Instale os pacotes necessários na instalação de Python de sua preferência:

```bash
python -m pip install -r requirements.txt
```

Não é necessário criar um ambiente virtual para seguir os exemplos (embora ambientes isolados sejam recomendados para evitar conflitos de versões). Em algumas instalações Ubuntu, o Python gerenciado pelo sistema não permite instalar pacotes diretamente; nesse caso, utilize um ambiente Python já configurado ou peça orientação antes de modificar o Python do sistema.

Para testar:

```bash
python -c "import numpy, pandas, matplotlib, sklearn; print('Pacotes OK')"
```

## Scripts

- `svm_iris.py`
- `svm_pca_iris.py`

Estes scripts utilizam conjuntos de dados disponibilizados pelo scikit-learn ou preparados no próprio código. Consulte o script para conferir as entradas e saídas.

Execute a partir da pasta de trabalho que contenha os dados necessários, por exemplo:

```bash
python nome_do_script.py
```

Não ajuste modelos, transformações nem hiperparâmetros usando dados do conjunto de teste.
