#!/usr/bin/env bash
# Rebuilds the Latin subset of the brand font. Requires: pip install fonttools brotli
# Keep the unicode list in sync with the @font-face in src/styles/global.css.
set -euo pipefail
pyftsubset brand/fonts/InterVariable.woff2 \
  --unicodes="U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0300-0301,U+0303,U+0327,U+2000-206F,U+20AC,U+2122,U+2190-2193,U+2212,U+2215" \
  --layout-features='kern,liga,calt,cv11,ss01,tnum,case' \
  --flavor=woff2 \
  --output-file=src/assets/fonts/InterVariable-latin.woff2
