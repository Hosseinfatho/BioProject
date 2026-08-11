#!/usr/bin/env bash
# Run ON the arcade server inside the git clone (e.g. ~/congat).
# Pulls latest code from GitHub and rebuilds the Docker container.
# Channel data stays on disk (mounted volumes) — not from git.
set -euo pipefail

cd "$(dirname "$0")"

echo "==> git status"
git status -sb

echo "==> git pull"
git pull --ff-only

echo "==> ensure data dirs exist (volumes)"
mkdir -p visualization_data visualization_data_low VIS2026/output VIS2026/Hi_res/HI_res_channel
# One-time rename from old folder name (previous deploys used visualization_data_lo)
if [ -d visualization_data_lo ] && [ ! -e visualization_data_low ]; then
  echo "==> renaming visualization_data_lo -> visualization_data_low"
  mv visualization_data_lo visualization_data_low
fi

echo "==> docker compose up --build"
docker compose up -d --build

echo "==> status"
docker compose ps
curl -sI http://127.0.0.1:9595/congat/ | head -n 1 || true
echo "==> done — https://arcade.evl.uic.edu/congat"
