# Exemplos Python - Aula 09: K-Nearest Neighbors (KNN)

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

- `titanic_arvore.py`
- `knn_csv.py`

O arquivo `titanic_arvore.py` utiliza `train.csv` da [competição Titanic no Kaggle](https://www.kaggle.com/competitions/titanic/data); esse arquivo não é distribuído no repositório. Já `knn_csv.py` é um **modelo didático para adaptação**: substitua `seu_dataset.csv`, os nomes das colunas de entrada e `target` pelos dados reais. A seleção de `k` depende de uma quantidade suficiente de amostras em cada fold da validação cruzada.

Execute a partir da pasta de trabalho que contenha os dados necessários, por exemplo:

```bash
python nome_do_script.py
```

Não ajuste modelos, transformações nem hiperparâmetros usando dados do conjunto de teste.
