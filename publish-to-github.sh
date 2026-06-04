#!/usr/bin/env bash
set -euo pipefail

cd /root/.openclaw/workspace/libergrid

echo "Checking GitHub authentication..."
if ! gh auth status >/tmp/libergrid-gh-auth.log 2>&1; then
  cat /tmp/libergrid-gh-auth.log
  echo
  echo "GitHub auth is not valid. Run this on the Seoul server first:"
  echo "  gh auth login -h github.com"
  exit 1
fi

git branch -M main
git add .
git commit -m "Update LiberGrid repository docs" 2>/dev/null || true

if ! gh repo view libergrid >/dev/null 2>&1; then
  gh repo create libergrid --public --source=. --remote=origin --description "LiberGrid: token for every one. Distributed AI compute network." --push
else
  git remote remove origin 2>/dev/null || true
  OWNER="$(gh api user --jq .login)"
  git remote add origin "https://github.com/${OWNER}/libergrid.git"
  git push -u origin main
fi

echo "Published LiberGrid to GitHub."
