# EchOverse Club — Design System Specification

## Visual Direction
- **Mode:** Persuade / Experience (Modern editorial digital magazine meets university student media collective)
- **Language & Direction:** Arabic (`lang="ar"`, `dir="rtl"`) with modern Latin wordmark accents (`font-latin`).
- **Tone:** Youthful, confident, cinematic, editorial, authentic, prestigious.

## Color System
- `--bg-base`: `#090b0e` (Deep Obsidian Charcoal)
- `--bg-surface`: `#101319` (Card and section background)
- `--bg-surface-elevated`: `#161a22` (Elevated focus surface)
- `--border-subtle`: `rgba(255, 255, 255, 0.08)`
- `--border-medium`: `rgba(255, 255, 255, 0.14)`
- `--text-primary`: `#f8fafc` (High contrast off-white, >= 12:1 against base)
- `--text-secondary`: `#cbd5e1` (Slate text, >= 7:1 against base)
- `--text-muted`: `#94a3b8` (Muted caption text, >= 4.5:1 against base)
- `--accent-primary`: `#2563eb` (Cinematic cobalt blue)
- `--accent-cyan`: `#38bdf8` (Electric cyan glow)
- `--gold-primary`: `#f59e0b` (Warm gold prestige accent for "Best Club Award")
- `--gold-border`: `rgba(245, 158, 11, 0.35)`

## Typography
- **Arabic Display & Body:** `Alexandria` (Weights 300..900) via Google Fonts with geometric numerals and crisp terminal strokes.
- **Latin Wordmark & Accents:** `Plus Jakarta Sans` (Weights 500..800).
- Responsive fluid scales using CSS `clamp()`.

## Mobile-First & QR Optimization
- Designed for immediate orientation within 3 seconds of scanning a QR code.
- Header communicates EchOverse identity, Faculty of Science & Technology, University of Biskra, and prominent Instagram CTA above the fold.
- Minimum touch target size: 48px height for all buttons and interactive triggers.
- Lightweight assets: WebP formats with fallback JPEGs, total image weight optimized from original 3.5MB down to ~1.9MB without quality loss.
- Zero horizontal overflow (`overflow-x: hidden`).
