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

mkdocs build --strict

mkdir -p site/visualizacoes
rm -rf site/visualizacoes/04-busca
cp -R visualizacoes/04-busca site/visualizacoes/04-busca

mkdir -p site/downloads/aulas site/downloads/atividades site/downloads/planos

copy_if_exists() {
  local source="$1"
  local destination="$2"

  if [[ -f "$source" ]]; then
    cp "$source" "$destination"
  fi
}

copy_if_exists "aulas/00-visao-geral/EC_IA_000_Visao_Geral.pdf" "site/downloads/aulas/EC_IA_000_Visao_Geral.pdf"
copy_if_exists "aulas/01-introducao/EC_IA_001_Introducao.pdf" "site/downloads/aulas/EC_IA_001_Introducao.pdf"
copy_if_exists "aulas/02-agentes/EC_IA_002_Agentes.pdf" "site/downloads/aulas/EC_IA_002_Agentes.pdf"
copy_if_exists "aulas/03-conhecimento/EC_IA_003_Conhecimento.pdf" "site/downloads/aulas/EC_IA_003_Conhecimento.pdf"
copy_if_exists "aulas/04-busca/EC_IA_004_Busca_Parte_1.pdf" "site/downloads/aulas/EC_IA_004_Busca_Parte_1.pdf"
copy_if_exists "aulas/04-busca/EC_IA_004_Busca_Parte_2.pdf" "site/downloads/aulas/EC_IA_004_Busca_Parte_2.pdf"

copy_if_exists "atividades/04-busca/lista-04/EC_IA_004_Busca_Lista_04.pdf" "site/downloads/atividades/EC_IA_004_Busca_Lista_04.pdf"
copy_if_exists "planos/2026-2/plano-didatico.md" "site/downloads/planos/plano-didatico-2026-2.md"

python scripts/generate-plan-pdf.py

echo "Site gerado em: $ROOT_DIR/site"
