# Fonts still needed

@font-face rules already point at these paths (see src/app/globals.css).
Drop the real files in and they'll pick up automatically — no code changes
needed.

- `Druk/Druk-CondSuper.otf` — used for "IMPOSSIBLE" (`druk`)
- `Neue/NeueMontreal-Regular.otf` — `neue-mon`, weight 400
- `Neue/NeueMontreal-Light.otf` — `neue-mon`, weight 300
- `NeueBook/PPNeueMontreal-Book.otf` — body text (`neue-book`)

## swear-display

Not defined via @font-face anywhere in the reference stylesheet — Rogue
Studio loads it from an external source (likely a licensed foundry/Adobe
Fonts), not a self-hosted file. It needs to be sourced separately. Until
then, `--font-swear-display` falls back to `serif`.
