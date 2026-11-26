---
name: novy-kun
description: Přidá do Koníčka nového koně (profil i obrázek). Použij, když uživatelka chce nového koně, víc koní nebo vymyslet koňské profily.
argument-hint: '[popis koně, např. "líný poník, co miluje Netflix"]'
---

# Nový kůň

Přidej koně podle zadání: $ARGUMENTS (když chybí, vymysli vtipného koně sama).

## 1. Profil

Přidej objekt na konec pole v `src/data/horses.ts` (typ `Horse` v `src/types.ts`):

- `id`: malými písmeny bez diakritiky, v souboru ještě neexistuje
- `name`: české jméno, `age`, `breed` (skutečné plemeno, nebo vtip), `distanceKm`
- `bio`: nejvýš 90 znaků, česky, jedna koňská slovní hříčka nebo vtip z IT, nikoho neuráží
- `interests`: přesně 3 krátké štítky
- `likesYou`: `true` zhruba u každého druhého koně
- `photo`: `'kone/<id>.svg'`

## 2. Obrázek

1. Zkopíruj [sablona.svg](sablona.svg) do `public/kone/<id>.svg`.
2. Nahraď placeholdery barvami: `{{SRST}}`, `{{STIN}}` (o 15 % tmavší než srst), `{{HRIVA}}`, `{{NOZDRY}}` (světlejší než srst), `{{POZADI_NAHORE}}` a `{{POZADI_DOLE}}` (pastelové, k srsti ladí).
3. Když se hodí k profilu, vlož jeden doplněk z [doplnky.md](doplnky.md) těsně před `</svg>`.

## 3. Ověření

- `npm run build` projde.
- V prohlížeči se nový kůň ukáže (je na konci balíčku) a obrázek se načte.
