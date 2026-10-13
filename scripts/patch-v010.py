#!/usr/bin/env python3
# Integra materiais da v0.10.0
from pathlib import Path
root=Path(__file__).resolve().parents[1]
A=[('08','08-aprendizagem-exemplos','Aprendizagem com Exemplos','EC_IA_008_Aprendizagem_Exemplos.pdf'),('09','09-knn','K-Nearest Neighbors','EC_IA_009_KNN.pdf'),('10','10-svm','Support Vector Machines e PCA','EC_IA_010_SVM.pdf'),('11','11-atividade-comparacao','Atividade Integradora: DT, KNN e SVM','EC_IA_011_Atividade_Comparacao.pdf')]
def add(path,heading,rows):
 p=root/path
 if not p.exists():raise FileNotFoundError(p)
 s=p.read_text(encoding='utf-8')
 if heading not in s:
  s+='\n\n## '+heading+'\n\n'+rows+'\n'
  p.write_text(s,encoding='utf-8')
rows='\n'.join(f'| {n} | {title} | [Abrir pasta](https://github.com/tiagofga/EC-IA/tree/main/aulas/{slug}) | <span data-download="../downloads/aulas/{pdf}">Verificando PDF...</span> |' for n,slug,title,pdf in A)
add('docs/aulas/index.md','Aulas 08 a 11 - Aprendizagem supervisionada', '| Aula | Tema | Material | PDF |\n|---|---|---|---|\n'+rows)
for scope,title,path in [('notas','Notas visuais','notas'),('estudos-guiados','Estudos guiados','estudos-guiados')]:
 add('docs/'+scope+'/index.md','Aulas 08 a 11', '\n'.join(f'- [Aula {n} - {name}]({slug}/README.md)' for n,slug,name,_ in A))
add('docs/pseudocodigos/index.md','Aulas 08 a 10 - Aprendizagem', '\n'.join(f'- [Aula {n} - {name}]({slug}/README.md)' for n,slug,name,_ in A[:3]))
add('docs/visualizacoes/index.md','Aulas 08 a 11 - Aprendizagem', '\n'.join(f'- [Aula {n} - {name}]({slug}/)' for n,slug,name,_ in A))
add('docs/index.md','Bloco de aprendizagem supervisionada - Aulas 08 a 11','Aula 08: Aprendizagem e Árvores de Decisão; Aula 09: KNN e preparação de dados; Aula 10: SVM, kernels e PCA; Aula 11: comparação de classificadores. Consulte [as aulas](aulas/index.md), [os exemplos Python](https://github.com/tiagofga/EC-IA/tree/main/exemplos) e as visualizações. O Trabalho 2 está reservado para a futura versão v0.11.0.')
add('README.md','Aulas 08 a 11 - Aprendizagem supervisionada', '\n'.join(f'- Aula {n} - [{name}](aulas/{slug}/README.md)' for n,slug,name,_ in A)+'\n\nOs códigos públicos estão em `exemplos/`; instale as dependências com `python -m pip install numpy pandas matplotlib scikit-learn`. A versão v0.10.0 encerra as Aulas 08-11; o Trabalho 2 será incluído somente na v0.11.0.')
p=root/'CHANGELOG.md';s=p.read_text(encoding='utf-8');marker='## [Unreleased]';entry='''## [0.10.0] - 2026-10-13

### Added

- Aulas 08 a 11: aprendizagem com exemplos e árvores, KNN, SVM/PCA e comparação DT/KNN/SVM.
- Notas visuais, estudos guiados e visualizações interativas das Aulas 08 a 11.
- Pseudocódigos conceituais das Aulas 08 a 10.
- Seis exemplos públicos em Python e dependências documentadas (NumPy, pandas, Matplotlib e scikit-learn).

### Changed

- Navegação, catálogo e sincronização do site para as Aulas 08 a 11.

### Planned

- Trabalho 2 na versão v0.11.0; não incluído nesta publicação.

'''
if '## [0.10.0]' not in s:s=s.replace(marker,entry+marker);p.write_text(s,encoding='utf-8')
p=root/'scripts/build-site.sh';s=p.read_text(encoding='utf-8')
if '# EC-IA 0.10.0 BEGIN' not in s:
 s=s.replace('mkdocs build --strict','''# EC-IA 0.10.0 BEGIN
for unit in 08-aprendizagem-exemplos 09-knn 10-svm 11-atividade-comparacao; do
  rm -rf "docs/notas/$unit" "docs/estudos-guiados/$unit"
  cp -R "notas/$unit" "docs/notas/$unit"
  cp -R "estudos-guiados/$unit" "docs/estudos-guiados/$unit"
done
for unit in 08-aprendizagem-exemplos 09-knn 10-svm; do
  rm -rf "docs/pseudocodigos/$unit"
  cp -R "pseudoalgoritmos/$unit" "docs/pseudocodigos/$unit"
done
for unit in 08-aprendizagem-exemplos 09-knn 10-svm 11-atividade-comparacao; do
  mkdir -p "docs/visualizacoes/$unit"
  cp "visualizacoes/$unit/README.md" "docs/visualizacoes/$unit/README.md"
done
for spec in \\
  '08-aprendizagem-exemplos:EC_IA_008_Aprendizagem_Exemplos.pdf' \\
  '09-knn:EC_IA_009_KNN.pdf' \\
  '10-svm:EC_IA_010_SVM.pdf' \\
  '11-atividade-comparacao:EC_IA_011_Atividade_Comparacao.pdf'; do
  unit="${spec%%:*}"; name="${spec#*:}"
  copy_if_exists "aulas/$unit/$name" "docs/downloads/aulas/$name"
done
# EC-IA 0.10.0 END
mkdocs build --strict''')
 s=s.replace('echo "Site gerado em: $ROOT_DIR/site"','''for unit in 08-aprendizagem-exemplos 09-knn 10-svm 11-atividade-comparacao; do
  mkdir -p "site/visualizacoes/$unit"
  cp "visualizacoes/$unit/index.html" "site/visualizacoes/$unit/index.html"
done

echo "Site gerado em: $ROOT_DIR/site"''')
 p.write_text(s,encoding='utf-8')
print('Patches aplicados. Revise README, índices e CHANGELOG antes do PR.')
