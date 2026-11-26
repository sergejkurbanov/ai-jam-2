#!/usr/bin/env bash
# Builds the finished app (branch krok-6 by default) into slides/public/app,
# so the deck's demo slide and the "Hotová appka" link work.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
REF="${1:-krok-6}"
git -C "$ROOT" rev-parse --verify --quiet "$REF^{commit}" >/dev/null || REF="origin/$REF"
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT
git -C "$ROOT" archive "$REF" | tar -x -C "$TMP"
cd "$TMP"
npm ci --no-audit --no-fund --loglevel=error
npx vite build --outDir "$ROOT/slides/public/app" --emptyOutDir
echo "built $REF → slides/public/app"
