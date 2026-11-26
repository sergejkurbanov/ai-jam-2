# Pro lektora a kouče

AI jam #2 · 3. 12. 2026 · 18:00–21:00 · cílovka: juniorky a mediorky ve frontendu, s AI si už hrály.

## Harmonogram (čistý čas ~2:40)

| Čas | Blok | Kroky | Slajdy |
|---|---|---|---|
| 18:00 | Úvod: jak funguje agent, kontext, checkpointy | `main` | 1–10 |
| 18:15 | **Blok 1** · Než napíšeš první prompt | `main` → `krok-1` | 11–18 |
| 18:55 | ☕ pauza 10 min | | |
| 19:05 | **Blok 2** · Z obrázku do Reactu | `krok-1` → `krok-3` (`krok-4` pro rychlíky) | 19–30 |
| 20:05 | ☕ pauza 10 min | | |
| 20:15 | **Blok 3** · Ship it! Všechny skočí na `krok-4` | `krok-4` → `krok-6` | 31–39 |
| 20:50 | Závěr, co dál, zpětná vazba | | 40–43 |

Když nestíháš: krok 4 (seznam shod) a skill v kroku 2 jsou volitelné. Blok 3 začíná synchronizací
na `krok-4`, takže zpoždění z bloku 2 se tam smaže.

## Co se poučit ze zpětné vazby z AI jamu #1

- **Návod krok po kroku, ať se dá dohnat bez vyrušení** → [`kroky.md`](kroky.md) + checkpointy. Ukaž to hned v úvodu a pak připomínej.
- **Git a další věci instalovat předem** → [`instalace.md`](instalace.md) včetně generálky. Ať pošlou screenshot.
- **Všichni v jednom nástroji** → desktopová appka Claude, záložka Code. CLI jen jako poznámka v Taháku, alternativy jako jeden slajd na konci.
- **Pomalejší rozjezd praktické části** → krok 0 je jen „rozhlédni se v Claudovi“, krok 1 začíná rozhovorem, ne kódem.
- **Víc do hloubky: .md soubory pro agenty, skills, subagenti, browser automation, debugging AI kódu** → to je přesně obsah bloků 1–3.
- Fungovalo a chceme znovu: připravený projekt, koučové, střídání teorie a praxe, vše na GitHubu.

## Před akcí

- [ ] Push repa: větve `web` (výchozí), `main`, `krok-0` … `krok-6`. Na GitHubu nastav výchozí větev na `web`.
- [ ] GitHub Pages pro prezentaci (Settings → Pages → GitHub Actions). Pro větev `web` povol nasazení v Settings → Environments → github-pages.
- [ ] Rozeslat [`instalace.md`](instalace.md) aspoň týden předem, sbírat screenshoty z ověření.
- [ ] Guest passy (`/passes` v Claude Code) pro ty, kdo nemají Pro.
- [ ] Projet si celý workshop načisto se stopkami, na stejném plánu (Pro) jako účastnice, ať víš, kde dojdou limity.
- [ ] Na místě: Wi-Fi heslo na slajd 3, prodlužky, adaptéry na HDMI.
- [ ] Kouče seznámit s touhle stránkou a s chybami v `krok-4`.
- [ ] Prezentace: otevřít předem, `P` = okno s poznámkami na notebook.

## Schované chyby v `krok-4` 🐛

Vznikly „refaktorem“ při přidávání seznamu shod. Testy, build i lint projdou, takže je najde jen ten, kdo appku opravdu proklikne.

| # | Příznak | Příčina | Oprava (`krok-5`) |
|---|---|---|---|
| 1 | Po obnovení stránky zmizí shody i rozhodnutí | `src/lib/storage.ts`: validace kontroluje `Array.isArray(stored.decisions)`, ale `decisions` je objekt | kontrola na objekt + test „save → load“ |
| 2 | Počítadlo v hlavičce nesedí se seznamem shod | `countMatches()` v `src/lib/swipe.ts` počítá všechna srdíčka, ne vzájemné shody | `state.matches.length` + test |
| 3 | Po posledním koni bílá obrazovka, v konzoli `Cannot read properties of undefined (reading 'name')` | `document.title = \`${top.name}…\`` v `App.tsx`, `top` je `undefined` | `pageTitle(top)` s fallbackem + test |

Pointa pro sál: všechny tři jsou typické AI chyby (špatný předpoklad o tvaru dat, funkce, co dělá něco jiného, než říká
její jméno, a chybějící okrajový případ). A žádnou nechytil TypeScript ani testy, protože testy psal ten, kdo psal kód.

## Tipy pro kouče

- Zaseknutá účastnice? Nejdřív `git status` a `git log --oneline -5`. Pak klidně checkpoint. Nikdo nemusí mít „svůj“ kód.
- Claude se točí v kruhu → `Esc`, nová session (`⌘N` / `Ctrl+N`), nové konkrétnější zadání.
- Režim se přepíná pod polem pro zprávu (Mac `⌘⇧M`), `Shift+Tab` v appce nefunguje. Na učení doporuč Manual nebo Plan, ať vidí, co Claude dělá.
- Záložka Code nejde → přihlášení účtem s Pro? Appka aktuální? Terminál v appce je pod `` Ctrl+` ``.
- Dojde limit na Pro → přepnout na menší model (`/model`), jinak jet dál s checkpointy a sledovat lektora.
- Vestavěný prohlížeč (`⌘⇧B` / `Ctrl+Shift+B`) nic neukazuje → ať Claude zkontroluje `.claude/launch.json` (příkaz `npm run dev`, port 5173).
- Prompty z [`kroky.md`](kroky.md) jsou návrh. Ať je klidně píšou po svém, jen ať zůstane: kontext, omezení, jak ověřit.

## Jak upravit checkpointy

Checkpointy jsou jedna lineární historie: `main` = `krok-0` → `krok-1` → … → `krok-6`. Každá větev ukazuje na jeden commit.

```bash
git worktree add ../konicek-dev krok-6      # pracovní kopie appky vedle prezentace
cd ../konicek-dev
git rebase -i --update-refs krok-0          # "edit" u kroku, který chceš změnit
# … uprav, npm test, git commit --amend, git rebase --continue
git branch -f main krok-0                   # main = start (pokud se změnil krok-0)
git push --force-with-lease origin main krok-0 krok-1 krok-2 krok-3 krok-4 krok-5 krok-6
```

`--update-refs` posune i větve `krok-*` mezi tím. Po změně v kroku 2 se změna propíše do 3–6 (konflikty řeš po cestě).

Obrázky koní a skica se generují skripty na větvi `web`:

```bash
node scripts/kone.mjs ../konicek-dev/podklady        # kone/*.svg + kone.json
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless --hide-scrollbars \
  --screenshot=../konicek-dev/podklady/skica.png --window-size=1600,1000 file://$PWD/scripts/skica.html
```

Koně jsou definovaní v `scripts/kone-data.mjs`. Po změně je zkopíruj i do `public/kone/` a `src/data/horses.ts` v krocích 2+.
