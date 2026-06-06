# Attribution

This repository owns its runtime generation pipeline. It does not depend on upstream generated artifacts such as `result.m3u`, `lite.json`, `adult.json`, or `full.json`.

Initial seed data and implementation references were adapted from:

- `lonnnnnng/mini-iptv`: live TV channel templates, subscription entries, aliases, and filtering concepts.
- `MayLabPro/VideoSource`: video API candidate list and lite/adult/full grouping rules.

The current GitHub Actions workflow runs this repository's own scripts and configuration to generate checked outputs under `dist/`.
