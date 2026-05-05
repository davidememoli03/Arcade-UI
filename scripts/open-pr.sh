#!/usr/bin/env bash
# Pusha il branch corrente e apre una Pull Request su GitHub.
# Uso: ./scripts/open-pr.sh [titolo] [descrizione]
#
# Esempi:
#   ./scripts/open-pr.sh "feat: aggiungo ArcadeButton"
#   ./scripts/open-pr.sh "fix: correggo contatore" "Il contatore non si resettava correttamente"

set -euo pipefail

BRANCH=$(git rev-parse --abbrev-ref HEAD)

if [ "$BRANCH" = "main" ]; then
  echo "✗ Sei su main. Crea prima un branch con:"
  echo "  ./scripts/new-branch.sh <nome-branch>"
  exit 1
fi

TITLE=${1:-$BRANCH}
BODY=${2:-""}

echo "→ Push del branch '$BRANCH'..."
git push -u origin "$BRANCH"

echo "→ Apertura PR..."
if [ -n "$BODY" ]; then
  gh pr create --base main --title "$TITLE" --body "$BODY"
else
  gh pr create --base main --title "$TITLE" --body "$(cat <<EOF
## Cosa cambia

<!-- Descrivi brevemente le modifiche -->

## Test

- [ ] CI: Lint
- [ ] CI: Test
- [ ] CI: Build
EOF
)"
fi

echo ""
echo "✓ PR aperta. Quando la CI è verde, puoi fare il merge."
echo "  Dopo il merge ricordati di pulire i branch:"
echo "  ./scripts/cleanup.sh"
