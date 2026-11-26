# Tahák: Claude Code

Ověřeno na Claude Code 2.1 (listopad 2026). Celá dokumentace: [code.claude.com/docs](https://code.claude.com/docs).

## Klávesy

| | |
|---|---|
| `Shift+Tab` | přepíná režim: ruční schvalování → automatické úpravy → **plán** → auto |
| `Esc` | zastaví Clauda (kdykoliv, klidně hned, jak vidíš, že jde špatným směrem) |
| `Esc Esc` | vrátí se v čase: kód, konverzaci nebo obojí (`/rewind`) |
| `Ctrl+V` | vloží obrázek ze schránky (i na Macu je to **Ctrl**, ne Cmd) |
| `@` | přiloží soubor: `@src/App.tsx` |
| `!` | na začátku zprávy pustí příkaz v terminálu: `!npm test` |
| `Option+P` / `Alt+P` | přepnout model |
| `↑` | předchozí zpráva |

## Příkazy

| | |
|---|---|
| `/init` | napíše `CLAUDE.md` pro tvůj projekt |
| `/memory` | otevře paměťové soubory (`CLAUDE.md`, automatická paměť) |
| `/plan úkol` | rovnou plánovací režim pro tenhle úkol |
| `/clear` | čistá hlava pro nový úkol (stará konverzace jde vrátit přes `/resume`) |
| `/compact` | shrne dlouhou konverzaci, ať se vejde víc |
| `/context` | co všechno teď Claude „drží v hlavě“ |
| `/usage` | kolik jsi vyčerpala z limitu |
| `/model` | výběr modelu, `/effort` jak moc přemýšlí |
| `/btw otázka` | rychlá otázka bokem, nezanese se do konverzace |
| `/chrome` | připojí Clauda k prohlížeči (nebo spusť `claude --chrome`) |
| `/code-review` | kontrola změn čerstvýma očima |
| `/plugin` | doplňky, např. `frontend-design` |
| `/output-style` | styl odpovědí, např. **Learning** (nechá část kódu na tobě) |
| `/doctor` | když něco nefunguje |

`claude -c` naváže na poslední konverzaci, `claude -r` vybereš ze starších.

## Soubory, kterými Clauda učíš

| | |
|---|---|
| `CLAUDE.md` | paměť projektu: příkazy, pravidla, záludnosti. Načte se vždy, tak ho drž krátký |
| `CLAUDE.local.md` | tvoje osobní poznámky k projektu (necommituje se) |
| `~/.claude/CLAUDE.md` | tvoje pravidla pro všechny projekty |
| `.claude/rules/*.md` | pravidla jen pro určité soubory (`paths:` ve frontmatteru) |
| `.claude/skills/<jméno>/SKILL.md` | **skill**: návod na opakovaný úkol, načte se, až když je potřeba. Spustíš ho `/jméno` |
| `.claude/agents/<jméno>.md` | **subagent**: pomocník s vlastním kontextem a nástroji (např. jen čte) |
| `.claude/settings.json` | oprávnění a **hooky**: příkazy, které běží vždy (např. Prettier po každé úpravě) |
| `.mcp.json` | **MCP servery**: nové nástroje pro Clauda (prohlížeč, databáze, Figma…) |

`AGENTS.md` Claude taky přečte. Když máš oba soubory, napiš do `CLAUDE.md` řádek `@AGENTS.md`.

## 10 návyků, které dělají rozdíl

1. **Dej mu způsob, jak si ověřit práci.** Testy, build, linter, screenshot. Je to nejdůležitější tip ze všech.
2. **Chtěj důkaz, ne „hotovo“.** „Ukaž mi výstup testů.“ „Ukaž screenshot.“
3. **Plán před kódem.** U čehokoliv většího napřed plán, ten si přečti a oprav.
4. **Ať se tě vyptá.** „Polož mi otázky, jednu po druhé, dokud tomu nebudeš rozumět.“
5. **Buď konkrétní.** Soubor, příznak, jak poznám, že je to opravené. Přidej screenshot nebo skicu.
6. **Nový úkol = `/clear`.** Dvakrát neúspěšná oprava? Taky `/clear` a lepší zadání.
7. **Zastav ho brzo.** `Esc`, jakmile jde špatným směrem. `Esc Esc` a zkus to jinak.
8. **Git je záchranná síť.** Malé commity po každém fungujícím kroku.
9. **Test nejdřív červeně.** Test, který nikdy neselhal, nic nedokazuje.
10. **Co se opakuje, z toho udělej skill. Co musí platit vždy, z toho hook.**

## Když něco nejde

| | |
|---|---|
| `claude: command not found` | nový terminál, ve VS Code restart celého editoru, pak `claude doctor` |
| Claude se točí v kruhu | `Esc`, `/clear`, nové zadání s tím, co už víš |
| Rozbil něco, co fungovalo | `Esc Esc` (vrátit), nebo `git diff` / `git restore .` |
| Došel limit | `/usage`. Na jednoduché věci stačí menší model (`/model`) |
| Ztratila ses ve workshopu | [Dožeň nás checkpointem](kroky.md#zasekla-ses-dožeň-nás) |
