#!/usr/bin/env bash
# Upload with visible progress (file names + optional pv bar).
# Run in Git Bash on Windows.
#
#   bash upload_data.sh visualization_data
#   bash upload_data.sh visualization_data_lo
#   bash upload_data.sh all

set -euo pipefail

HOST="${SSH_HOST:-hossein@arcade.evl.uic.edu}"
REMOTE_BASE="${REMOTE_DIR:-congat}"
LOCAL_DIR="${1:-visualization_data}"

ROOT="$(cd "$(dirname "$0")" && pwd)"
cd "$ROOT"

SSH_OPTS=(-o ServerAliveInterval=15 -o ServerAliveCountMax=200)

upload_dir() {
  local dir="$1"
  if [[ ! -d "$dir" ]]; then
    echo "Local folder not found: $dir"
    exit 1
  fi

  local file_count total_mb
  file_count="$(find "$dir" -type f | wc -l | tr -d ' ')"
  total_mb="$(du -sm "$dir" | awk '{print $1}')"

  echo "============================================================"
  echo " Folder : $dir"
  echo " Files  : $file_count"
  echo " Size   : ~${total_mb} MB"
  echo " Target : $HOST:~/$REMOTE_BASE/$dir"
  echo "============================================================"
  echo " Password: once for this folder"
  echo " Progress: each file name prints as it uploads"
  echo

  # tar -v prints each path to the terminal while streaming bytes to ssh
  if command -v pv >/dev/null 2>&1; then
    local total_bytes
    total_bytes="$(du -sb "$dir" | awk '{print $1}')"
    echo "Progress bar (pv):"
    tar -C "$dir" -cf - . \
      | pv -s "$total_bytes" -p -t -e -r -b \
      | ssh "${SSH_OPTS[@]}" "$HOST" \
          "mkdir -p ~/$REMOTE_BASE/$dir && tar -C ~/$REMOTE_BASE/$dir -xf - && echo OK_remote_files=\$(ls -1 ~/$REMOTE_BASE/$dir | wc -l)"
  else
    echo "File list progress (names below):"
    tar -C "$dir" -cvf - . \
      | ssh "${SSH_OPTS[@]}" "$HOST" \
          "mkdir -p ~/$REMOTE_BASE/$dir && tar -C ~/$REMOTE_BASE/$dir -xf - && echo && echo OK_remote_files=\$(ls -1 ~/$REMOTE_BASE/$dir | wc -l)"
  fi

  echo
  echo "==> Finished $dir"
}

if [[ "$LOCAL_DIR" == "all" ]]; then
  upload_dir visualization_data
  echo
  upload_dir visualization_data_lo
else
  upload_dir "$LOCAL_DIR"
fi

echo "==> All done"
