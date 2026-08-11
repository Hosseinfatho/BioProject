#!/usr/bin/env bash
# Deploy Congat Melanoma viewer to arcade.evl.uic.edu
# App URL: https://arcade.evl.uic.edu/congat  (host port 9595)
set -euo pipefail

HOST="${DEPLOY_HOST:-arcade.evl.uic.edu}"
REMOTE_DIR="${REMOTE_DIR:-~/congat}"
SSH_USER="${SSH_USER:-}"

if [[ -n "$SSH_USER" ]]; then
  TARGET="${SSH_USER}@${HOST}"
else
  TARGET="$HOST"
fi

ROOT="$(cd "$(dirname "$0")" && pwd)"
cd "$ROOT"

echo "==> Ensuring remote directory: $REMOTE_DIR"
ssh "$TARGET" "mkdir -p $REMOTE_DIR/visualization_data $REMOTE_DIR/visualization_data_low $REMOTE_DIR/visualization_data_very_high $REMOTE_DIR/VIS2026/output $REMOTE_DIR/VIS2026/Hi_res/HI_res_channel"

echo "==> Syncing app sources (no channel .raw in image context)"
rsync -avz --delete \
  --exclude node_modules \
  --exclude dist \
  --exclude .git \
  --exclude visualization_data \
  --exclude visualization_data_low \
  --exclude visualization_data_very_high \
  --exclude 'VIS2026/Hi_res/Hi_res_dataset' \
  --exclude 'VIS2026/Hi_res_128_128_194' \
  --exclude 'VIS2026/**/*.raw' \
  --exclude 'VIS2026/**/*.npy' \
  --exclude Data \
  --exclude downloadData \
  --exclude general.ipynb \
  ./ "$TARGET:$REMOTE_DIR/"

echo "==> Syncing HIGH-res channel data (~13GB) -> visualization_data/"
rsync -avz --progress ./visualization_data/ "$TARGET:$REMOTE_DIR/visualization_data/"

echo "==> Syncing LOW-res channel data (~0.8GB) -> visualization_data_low/"
rsync -avz --progress ./visualization_data_low/ "$TARGET:$REMOTE_DIR/visualization_data_low/"

if [[ -d ./visualization_data_very_high ]]; then
  echo "==> Syncing VERY-HIGH-res channel data (~200GB if full 70 ch) -> visualization_data_very_high/"
  rsync -avz --progress ./visualization_data_very_high/ "$TARGET:$REMOTE_DIR/visualization_data_very_high/"
fi

echo "==> Syncing ROI / positions JSON"
rsync -avz ./VIS2026/output/ "$TARGET:$REMOTE_DIR/VIS2026/output/"

if [[ -d ./VIS2026/Hi_res/HI_res_channel ]]; then
  echo "==> Syncing optional HI_res_channel window"
  rsync -avz ./VIS2026/Hi_res/HI_res_channel/ "$TARGET:$REMOTE_DIR/VIS2026/Hi_res/HI_res_channel/"
fi

echo "==> Building and starting Docker on server (port 9595)"
ssh "$TARGET" "cd $REMOTE_DIR && docker compose up -d --build"

echo "==> Done. Open: https://arcade.evl.uic.edu/congat"
ssh "$TARGET" "cd $REMOTE_DIR && docker compose ps"
