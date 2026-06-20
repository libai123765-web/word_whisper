param(
  [string]$OutputPath = ""
)

$ErrorActionPreference = "Stop"

$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$projectRoot = Resolve-Path (Join-Path $scriptDir "..")
$releaseDir = Join-Path $projectRoot "release"

if (-not $OutputPath) {
  $OutputPath = Join-Path $releaseDir "word-whisper-release.zip"
}

New-Item -ItemType Directory -Force -Path $releaseDir | Out-Null

$stagingDir = Join-Path ([System.IO.Path]::GetTempPath()) ("word-whisper-release-" + [System.Guid]::NewGuid().ToString("N"))
New-Item -ItemType Directory -Force -Path $stagingDir | Out-Null

$items = @(
  "index.html",
  "app.js",
  "styles.css",
  "server.js",
  "package.json",
  "package-lock.json",
  "ecosystem.config.js",
  "README.md",
  "assets",
  "js",
  "deploy"
)

try {
  foreach ($item in $items) {
    $source = Join-Path $projectRoot $item
    if (Test-Path $source) {
      Copy-Item -Path $source -Destination $stagingDir -Recurse -Force
    }
  }

  if (Test-Path $OutputPath) {
    Remove-Item -LiteralPath $OutputPath -Force
  }

  Compress-Archive -Path (Join-Path $stagingDir "*") -DestinationPath $OutputPath -Force
  Write-Host "Release package created: $OutputPath"
} finally {
  if (Test-Path $stagingDir) {
    Remove-Item -LiteralPath $stagingDir -Recurse -Force
  }
}
