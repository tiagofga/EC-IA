#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

mkdir -p docs/estudos-guiados

for guide in \
  01-introducao \
  02-agentes \
  03-conhecimento \
  04-busca
 do
  rm -rf "docs/estudos-guiados/$guide"
  cp -R "estudos-guiados/$guide" "docs/estudos-guiados/$guide"
done

# Prepare public downloads inside docs before MkDocs validates links.
mkdir -p docs/downloads/aulas docs/downloads/atividades docs/downloads/planos

copy_if_exists() {
  local source="$1"
  local destination="$2"

  if [[ -f "$source" ]]; then
    cp "$source" "$destination"
  fi
}

copy_if_exists "aulas/00-visao-geral/EC_IA_000_Visao_Geral.pdf" "docs/downloads/aulas/EC_IA_000_Visao_Geral.pdf"
copy_if_exists "aulas/01-introducao/EC_IA_001_Introducao.pdf" "docs/downloads/aulas/EC_IA_001_Introducao.pdf"
copy_if_exists "aulas/02-agentes/EC_IA_002_Agentes.pdf" "docs/downloads/aulas/EC_IA_002_Agentes.pdf"
copy_if_exists "aulas/03-conhecimento/EC_IA_003_Conhecimento.pdf" "docs/downloads/aulas/EC_IA_003_Conhecimento.pdf"
copy_if_exists "aulas/04-busca/EC_IA_004_Busca_Parte1.pdf" "docs/downloads/aulas/EC_IA_004_Busca_Parte1.pdf"
copy_if_exists "aulas/04-busca/EC_IA_004_Busca_Parte2.pdf" "docs/downloads/aulas/EC_IA_004_Busca_Parte2.pdf"

copy_if_exists "atividades/01-introducao/lista-01/EC_IA_001_Introducao_Atividades.pdf" "docs/downloads/atividades/EC_IA_001_Introducao_Atividades.pdf"
copy_if_exists "atividades/02-agentes/lista-02/EC_IA_002_Agentes_Atividades.pdf" "docs/downloads/atividades/EC_IA_002_Agentes_Atividades.pdf"
copy_if_exists "atividades/03-conhecimento/lista-03/EC_IA_003_Conhecimento_Atividades.pdf" "docs/downloads/atividades/EC_IA_003_Conhecimento_Atividades.pdf"
copy_if_exists "atividades/04-busca/lista-04/EC_IA_004_Busca_Atividades.pdf" "docs/downloads/atividades/EC_IA_004_Busca_Atividades.pdf"

copy_if_exists "planos/2026-2/plano-didatico.md" "docs/downloads/planos/plano-didatico-2026-2.md"
copy_if_exists "planos/2026-2/Plano_Didatico_IA_2026_2.pdf" "docs/downloads/planos/Plano_Didatico_IA_2026_2.pdf"

mkdocs build --strict

mkdir -p site/visualizacoes
rm -rf site/visualizacoes/04-busca
cp -R visualizacoes/04-busca site/visualizacoes/04-busca

echo "Site gerado em: $ROOT_DIR/site"
