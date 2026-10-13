# Exemplos Python - Aula 08: Aprendizagem com Exemplos

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

- `arvore_decisao_csv.py`

O script utiliza dados em CSV; confira no código qual arquivo de entrada é esperado e coloque-o no caminho indicado. Dados de terceiros não estão incluídos automaticamente no repositório.

Execute a partir da pasta de trabalho que contenha os dados necessários, por exemplo:

```bash
python nome_do_script.py
```

Não ajuste modelos, transformações nem hiperparâmetros usando dados do conjunto de teste.
