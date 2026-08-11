# Deploy Congat Melanoma viewer to arcade.evl.uic.edu (Windows)
# URL: https://arcade.evl.uic.edu/congat  |  host port 9595
#
# Prerequisites:
#   1) SSH key that works:  ssh arcade.evl.uic.edu
#   2) scp/rsync available (Git Bash, WSL, or cwRsync)
#   3) Docker on the server
#
# Usage (PowerShell):
#   .\deploy.ps1
#   .\deploy.ps1 -User hossein
#   .\deploy.ps1 -SkipData   # only rebuild app image, skip ~4GB data sync

param(
  [string]$HostName = "arcade.evl.uic.edu",
  [string]$User = "",
  [string]$RemoteDir = "~/congat",
  [switch]$SkipData
)

$ErrorActionPreference = "Stop"
$Root = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $Root

$Target = if ($User) { "$User@$HostName" } else { $HostName }

Write-Host "==> Checking SSH to $Target ..."
ssh $Target "echo connected; hostname; docker --version"

Write-Host "==> Creating remote dirs"
ssh $Target "mkdir -p $RemoteDir/visualization_data $RemoteDir/visualization_data_low $RemoteDir/VIS2026/output $RemoteDir/VIS2026/Hi_res/HI_res_channel"

# Prefer scp for Windows if rsync missing
function Sync-Dir($Local, $RemoteSub) {
  if (Get-Command rsync -ErrorAction SilentlyContinue) {
    rsync -avz --progress $Local/ "${Target}:${RemoteDir}/${RemoteSub}/"
  } else {
    Write-Host "rsync not found; using scp -r (slower)"
    scp -r "$Local/." "${Target}:${RemoteDir}/${RemoteSub}/"
  }
}

Write-Host "==> Syncing project files (excluding heavy data)"
$excludes = @(
  "node_modules", "dist", ".git", "visualization_data", "visualization_data_low",
  "Data", "downloadData", "general.ipynb"
)
# Copy compose + docker + src via tar over ssh (portable)
tar --exclude=node_modules --exclude=dist --exclude=.git `
    --exclude=visualization_data --exclude=visualization_data_low `
    --exclude=Data --exclude=downloadData --exclude=general.ipynb `
    --exclude=VIS2026/Hi_res/Hi_res_dataset --exclude=VIS2026/Hi_res_128_128_194 `
    -czf - . | ssh $Target "cd $RemoteDir && tar -xzf -"

if (-not $SkipData) {
  Write-Host "==> Syncing HIGH-res data (~3GB)"
  Sync-Dir "$Root\visualization_data" "visualization_data"
  Write-Host "==> Syncing LOW-res data (~0.8GB)"
  Sync-Dir "$Root\visualization_data_low" "visualization_data_low"
  Write-Host "==> Syncing VIS2026/output"
  Sync-Dir "$Root\VIS2026\output" "VIS2026/output"
  if (Test-Path "$Root\VIS2026\Hi_res\HI_res_channel") {
    Sync-Dir "$Root\VIS2026\Hi_res\HI_res_channel" "VIS2026/Hi_res/HI_res_channel"
  }
} else {
  Write-Host "==> Skipping data sync (-SkipData)"
}

Write-Host "==> docker compose up --build on server"
ssh $Target "cd $RemoteDir && docker compose up -d --build && docker compose ps"

Write-Host "==> Open https://arcade.evl.uic.edu/congat"
