# Koníček 🐴

Tinder pro koně. Jen frontend, data a obrázky v `podklady/`. Zadání: @podklady/brief.md

## Příkazy

- `npm run dev`: vývojový server na http://localhost:5173
- `npm run build`: typová kontrola a produkční build
- `npm test`: testy (Vitest)
- `npm run lint`: oxlint
- `npm run format`: Prettier (po každé úpravě souboru ho pouští i hook)

## Stack

React 19 + TypeScript + Vite, Tailwind CSS v4 (design tokeny v `src/index.css` přes `@theme`, žádný `tailwind.config.js`), Vitest. Balíčky jen přes npm.

## Pravidla

- Funkční komponenty s pojmenovaným exportem, jedna komponenta na soubor v `src/components/`.
- Logika bez Reactu patří do `src/lib/` a má test vedle sebe (`*.test.ts`).
- Texty v UI česky a s humorem, kód a názvy v kódu anglicky.
- Barvy, fonty, stíny a zaoblení jen z design tokenů. Žádné náhodné hex barvy v komponentách.
- Nové závislosti jen po domluvě se mnou.
- Než řekneš „hotovo“, spusť `npm run build` a `npm test`. Obojí musí projít.
- Commituj po malých krocích, zprávy česky v rozkazovacím způsobu („Přidej kartu koně“).

## Přístupnost a mobil

- Tlačítka jen s ikonou mají `aria-label`, dekorativní emoji `aria-hidden="true"`.
- Kontrast textu aspoň 4,5 : 1. Když nesedí, oprav token v `src/index.css`, ne jednu komponentu.
- Animace přes `motion` respektují „omezit pohyb“ (`MotionConfig reducedMotion="user"` v `App.tsx`).
- Po větší změně UI pusť subagenta `a11y-reviewer` a zkontroluj šířku 375 px i desktop.

## Nasazení

Push do `main` spustí `.github/workflows/deploy.yml`: testy, build a GitHub Pages. `base: './'` ve `vite.config.ts` drží cesty relativní, takže appka funguje na `https://<uživatel>.github.io/<repo>/`. Obrázky odkazuj relativně (`kone/bara.svg`), ne od kořene (`/kone/…`).
