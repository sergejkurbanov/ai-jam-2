# Koníček 🐴: zadání

> Tinder pro koně. Najdi svého koníčka.

## O co jde

Koníček je seznamka pro koně. Uživatelka vidí jednoho koně po druhém a rozhoduje se:
**doleva = ne**, **doprava = ano**. Když se líbí oběma (kůň má v datech `likesYou: true`), je to **shoda** 💘.

Jen frontend, žádný backend, žádné přihlašování. Data jsou v `podklady/kone.json`,
obrázky v `podklady/kone/`. Skica obrazovek je v `podklady/skica.png`.

## Co musí umět (MVP)

1. **Karta koně**: obrázek, jméno, věk, plemeno, vzdálenost, bio a zájmy (štítky).
2. **Rozhodování**: tažením karty do strany (myš i prst), tlačítky ✕ a ♥ a šipkami na klávesnici.
3. **Shoda**: když dám ♥ koni, který má `likesYou: true`, vyskočí okno „Je to shoda!“.
4. **Seznam shod**: obrazovka se všemi shodami. Když žádná není, hezká prázdná obrazovka.
5. **Paměť**: po obnovení stránky zůstanou shody i to, koho už jsem viděla (`localStorage`).
6. **Došli koně**: když projedu všechny, aplikace to vtipně oznámí a nabídne začít znovu.

## Jak to má působit

- Hravě, vtipně, česky. Texty klidně s koňskými slovními hříčkami.
- Teplé barvy, výrazný font. **Žádný fialový gradient**, žádný „AI vzhled“.
- Primárně pro mobil, ale musí vypadat dobře i na počítači.
- Přístupnost: ovladatelné klávesnicí, popisky pro čtečky, respektuje „omezit animace“.

## Technické požadavky (od tech leada)

- React + TypeScript + Vite, balíčky přes **npm**
- Tailwind CSS v4
- `motion` na animace a tahání karet
- Vitest na testy logiky
- Žádné další knihovny bez domluvy

## Bonusy, když zbyde čas

- ↺ Vrátit poslední rozhodnutí
- 🥕 „Super like“ (mrkev)
- Filtr podle vzdálenosti nebo plemene
- Detail koně po kliknutí na shodu
- Falešný chat: kůň odpovídá náhodnými „Íhaha!“ hláškami
- Tmavý režim
