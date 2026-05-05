#!/usr/bin/env bash
# Crea un nuovo branch aggiornato da main.
# Uso: ./scripts/new-branch.sh <nome-branch>
#
# Esempi:
#   ./scripts/new-branch.sh feat/arcade-button
#   ./scripts/new-branch.sh fix/counter-bug

set -euo pipefail

BRANCH=${1:-}

if [ -z "$BRANCH" ]; then
  echo "Uso: $0 <nome-branch>"
  echo ""
  echo "Esempi:"
  echo "  $0 feat/arcade-button"
  echo "  $0 fix/counter-bug"
  exit 1
fi

echo "→ Aggiorno main..."
git checkout main
git pull origin main

echo "→ Creo il branch '$BRANCH'..."
git checkout -b "$BRANCH"

echo ""
echo "✓ Branch '$BRANCH' pronto. Puoi iniziare a lavorare."
echo ""
echo "Quando hai finito:"
echo "  ./scripts/open-pr.sh \"Titolo della PR\""
