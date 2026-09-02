#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

python -m pip install -r requirements.txt

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

echo "Site gerado em: $ROOT_DIR/site"
