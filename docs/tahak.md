# Tahák: Claude Code

Ověřeno v desktopové appce Claude a Claude Code 2.1 (listopad 2026). Celá dokumentace: [code.claude.com/docs](https://code.claude.com/docs).

## Desktopová appka: záložka Code

| | |
|---|---|
| **přepínač režimů** pod polem pro zprávu (`⌘⇧M` na Macu) | Manual → Accept edits → **Plan** → Auto |
| `Esc` / tlačítko stop | zastaví Clauda (klidně hned, jak vidíš, že jde špatným směrem) |
| `⌘N` / `Ctrl+N` | nová session: čistá hlava pro nový úkol |
| `@` | přiloží soubor: `@src/App.tsx` |
| **+** nebo přetažení | přiloží obrázek nebo soubor (skicu, screenshot chyby) |
| `⌘⇧B` / `Ctrl+Shift+B` | vestavěný prohlížeč: Claude v něm pouští appku, kliká a dělá screenshoty |
| `` Ctrl+` `` | terminál v appce, otevře se ve složce projektu |
| `⌘⇧D` | diff: co přesně Claude změnil, k řádkům jdou psát komentáře |
| `⌘;` | vedlejší chat: rychlá otázka bokem, nezanese se do hlavní konverzace |
| **+** → **Plugins** | doplňky, např. `frontend-design` |

## Příkazy

Napiš `/` a appka ukáže, co jde použít (vestavěné příkazy i tvoje skills).

| | |
|---|---|
| `/init` | napíše `CLAUDE.md` pro tvůj projekt |
| `/compact` | shrne dlouhou konverzaci, ať se vejde víc |
| `/context` | co všechno teď Claude „drží v hlavě“ |
| `/model` | výběr modelu |
| `/code-review` | kontrola změn čerstvýma očima |
| `/novy-kun …` | tvůj vlastní skill (tenhle přidá koně) |
| `/resume` | návrat ke starší konverzaci |

> **Radši terminál?** Všechno funguje i v CLI (`claude`). Rozdíly: režimy přepíná `Shift+Tab`, nový úkol `/clear`,
> obrázky `Ctrl+V` (i na Macu), vrácení v čase `Esc Esc`, prohlížeč přes rozšíření Claude in Chrome (`claude --chrome`).

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
| `.claude/launch.json` | jak se appka spouští ve vestavěném prohlížeči (vytvoří si ho Claude sám) |
| `.mcp.json` | **MCP servery**: nové nástroje pro Clauda (databáze, Figma, dokumentace…) |

`AGENTS.md` Claude taky přečte. Když máš oba soubory, napiš do `CLAUDE.md` řádek `@AGENTS.md`.

## 10 návyků, které dělají rozdíl

1. **Dej mu způsob, jak si ověřit práci.** Testy, build, linter, screenshot. Je to nejdůležitější tip ze všech.
2. **Chtěj důkaz, ne „hotovo“.** „Ukaž mi výstup testů.“ „Ukaž screenshot.“
3. **Plán před kódem.** U čehokoliv většího napřed plán, ten si přečti a oprav.
4. **Ať se tě vyptá.** „Polož mi otázky, jednu po druhé, dokud tomu nebudeš rozumět.“
5. **Buď konkrétní.** Soubor, příznak, jak poznám, že je to opravené. Přidej screenshot nebo skicu.
6. **Nový úkol = nová session.** Dvakrát neúspěšná oprava? Taky nová session a lepší zadání.
7. **Zastav ho brzo.** `Esc`, jakmile jde špatným směrem, a napiš, co chceš jinak.
8. **Git je záchranná síť.** Malé commity po každém fungujícím kroku.
9. **Test nejdřív červeně.** Test, který nikdy neselhal, nic nedokazuje.
10. **Co se opakuje, z toho udělej skill. Co musí platit vždy, z toho hook.**

## Když něco nejde

| | |
|---|---|
| Záložka Code nejde otevřít | jsi přihlášená účtem s plánem Pro (nebo vyšším)? |
| Claude se točí v kruhu | `Esc`, nová session, nové zadání s tím, co už víš |
| Rozbil něco, co fungovalo | podívej se do diffu (`⌘⇧D`), pak „vrať tyhle změny“, nebo v terminálu `git restore .` |
| Došel limit | `/model` a menší model na jednoduché věci |
| Ztratila ses ve workshopu | [Dožeň nás checkpointem](kroky.md#zasekla-ses-dožeň-nás) |
