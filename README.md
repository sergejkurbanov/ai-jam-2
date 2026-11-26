# AI jam #2 · Koníček 🐴

Workshop [React Girls](https://reactgirls.com/courses/ai-jam): s [Claude Code](https://code.claude.com) za jeden večer postavíme
Tinder pro koně, od prázdného repa po nasazený frontend. **Ty vedeš, AI kóduje.**

🌐 **Web s prezentací a návody: https://sergejkurbanov.github.io/ai-jam-2/**

| | |
|---|---|
| 🧰 [Instalace](docs/instalace.md) | co si připravit předem (pošli účastnicím aspoň týden dopředu) |
| 🧭 [Kroky](docs/kroky.md) | průvodce workshopem: prompty ke zkopírování, checkpointy |
| ⌨️ [Tahák](docs/tahak.md) | Claude Code na jedné stránce |
| 🧑‍🏫 [Pro kouče](docs/lektor.md) | harmonogram, schované chyby, checklist, údržba |
| 📚 [Zdroje](docs/zdroje.md) | rešerše a odkazy |

## Na workshopu

```bash
git clone -b main https://github.com/sergejkurbanov/ai-jam-2.git konicek
cd konicek
claude
```

## Jak je repo poskládané

Jedno repo, jeden zdroj pravdy, ale appka a prezentace jsou v oddělených větvích, ať Claude u účastnic vidí jen jejich projekt:

| Větev | Co v ní je |
|---|---|
| `web` (výchozí) | tahle stránka, `docs/`, prezentace v `slides/`, skripty v `scripts/` |
| `main` = `krok-0` | start pro účastnice: zadání, skica a obrázky koní |
| `krok-1` … `krok-6` | checkpointy appky, lineární historie (`git log krok-6`) |

Co se v kterém kroku změnilo: `git diff krok-2 krok-3`.

## Prezentace lokálně

```bash
cd slides
npm install
npm run app      # postaví hotovou appku (krok-6) do public/app pro živé demo
npm run dev
```

Klávesy: šipky / mezerník / klikátko, **P** okno s poznámkami a časem, **N** poznámky přes slajd, **F** celá obrazovka.
Na slajd skočíš přes URL `#/slides/12`.

Push do `web` nasadí web na GitHub Pages (`.github/workflows/pages.yml`).

## Skripty

- `scripts/kone.mjs`: nakreslí SVG portréty koní z `scripts/kone-data.mjs` a vygeneruje `kone.json`
- `scripts/skica.html`: zdroj skici (do PNG přes headless Chrome, viz [Pro kouče](docs/lektor.md#jak-upravit-checkpointy))
- `scripts/build-app.sh`: postaví appku z checkpointu do `slides/public/app`

Koně jsou nakreslení kódem, žádné fotky, žádné licence k řešení.
