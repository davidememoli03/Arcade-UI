#!/usr/bin/env bash
# Elimina i branch locali e remoti già mergati in main.
# Uso: ./scripts/cleanup.sh
#
# Opzioni:
#   --dry-run   Mostra cosa verrebbe eliminato senza farlo davvero

set -euo pipefail

DRY_RUN=false
if [ "${1:-}" = "--dry-run" ]; then
  DRY_RUN=true
  echo "[dry-run] Nessun branch verrà eliminato davvero."
  echo ""
fi

echo "→ Aggiorno la lista dei branch remoti..."
git fetch --prune origin

git checkout main 2>/dev/null || true
git pull origin main --quiet

MERGED=$(git branch --merged main \
  | grep -v '^\*' \
  | grep -v '^\s*main$' \
  | sed 's/^[[:space:]]*//' \
  | grep -v '^$' || true)

if [ -z "$MERGED" ]; then
  echo "✓ Nessun branch locale da eliminare."
else
  echo "Branch locali mergati in main:"
  echo "$MERGED" | sed 's/^/  - /'
  echo ""

  if [ "$DRY_RUN" = false ]; then
    echo "$MERGED" | while read -r b; do
      git branch -d "$b" && echo "  ✓ eliminato locale: $b"
    done
  fi
fi

REMOTE_MERGED=$(git branch -r --merged origin/main \
  | grep 'origin/' \
  | grep -v 'origin/main' \
  | grep -v 'origin/HEAD' \
  | sed 's|origin/||' \
  | sed 's/^[[:space:]]*//' \
  | grep -v '^$' || true)

if [ -z "$REMOTE_MERGED" ]; then
  echo "✓ Nessun branch remoto da eliminare."
else
  echo ""
  echo "Branch remoti mergati in main:"
  echo "$REMOTE_MERGED" | sed 's/^/  - /'
  echo ""

  if [ "$DRY_RUN" = false ]; then
    echo "$REMOTE_MERGED" | while read -r b; do
      git push origin --delete "$b" 2>/dev/null && echo "  ✓ eliminato remoto: $b" || echo "  ⚠ remoto non trovato: $b"
    done
  fi
fi

echo ""
if [ "$DRY_RUN" = true ]; then
  echo "Riesegui senza --dry-run per eliminare davvero i branch."
else
  echo "✓ Pulizia completata."
fi
