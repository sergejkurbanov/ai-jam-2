# Průvodce workshopem: krok za krokem

Tady je všechno, co děláme, i s prompty ke zkopírování. Když se zasekneš nebo ti něco uteče,
koukni sem a dožeň nás checkpointem. Nemusíš nikoho rušit 🙂

## Zasekla ses? Dožeň nás

Každý krok má hotovou verzi ve větvi `krok-1` až `krok-6`. Svou práci si nejdřív uložíš stranou:

```bash
git add -A
git commit -m "moje rozdělaná práce"
git branch zaloha-1
git fetch origin
git reset --hard origin/krok-3
npm install
```

- `zaloha-1` přejmenuj, když zálohuješ víckrát (`zaloha-2`, …). Ke své verzi se vrátíš přes `git switch zaloha-1`.
- `krok-3` nahraď krokem, na který chceš skočit.
- Nebo to řekni Claudovi: *„Ulož moji práci do větve zaloha-1 a přepni mě na checkpoint origin/krok-3.“*
- Chceš z checkpointu jen jeden soubor? `git checkout origin/krok-5 -- .claude/agents/a11y-reviewer.md`

| Větev | Kde jsme |
|---|---|
| `main` | prázdný start: zadání, skica a obrázky koní |
| `krok-1` | projekt založený, CLAUDE.md, formátovací hook |
| `krok-2` | karta koně podle skici, design tokeny, skill na nové koně |
| `krok-3` | swipe, shody, testy, localStorage |
| `krok-4` | seznam shod (a 3 schválně schované chyby 🐛) |
| `krok-5` | chyby opravené, mobil a přístupnost doladěné |
| `krok-6` | nasazeno na GitHub Pages 🚀 |

Rozdíl mezi dvěma kroky uvidíš přes `git diff origin/krok-2 origin/krok-3`.

---

## Krok 0: Start (18:15)

V terminálu stáhni projekt:

```bash
git clone -b main https://github.com/sergejkurbanov/ai-jam-2.git konicek
```

Pak v appce Claude otevři záložku **Code**, pod polem pro zprávu vyber **Local** a přes **Open folder…** otevři složku `konicek`.

Rozhlédni se:

- **přepínač režimů** pod polem pro zprávu (na Macu `⌘⇧M`): Manual → Accept edits → **Plan** → Auto
- `@podklady/brief.md` ve zprávě: přiloží soubor. Obrázek přidáš přes **+** nebo přetažením
- `Esc` (nebo tlačítko stop): zastaví Clauda uprostřed práce
- `` Ctrl+` ``: terminál přímo v appce. `⌘⇧B` / `Ctrl+Shift+B`: vestavěný prohlížeč
- `⌘N` / `Ctrl+N`: nová session (čistá hlava pro nový úkol)

---

## Blok 1 · Než napíšeš první prompt

### Krok 1: Založení projektu a CLAUDE.md

**1. Ať se tě Claude vyptá.** V přepínači režimů vyber **Plan** a napiš:

```text
Přečti si @podklady/brief.md a prohlédni si @podklady/skica.png.
Chystáme se v této složce založit projekt. Než cokoliv navrhneš, polož mi otázky,
které k tomu potřebuješ vědět. Vždy jen jednu otázku najednou.
```

**2. Plán, než vznikne kód.**

```text
Založ v této složce projekt podle technických požadavků z briefu:
Vite + React + TypeScript, Tailwind CSS v4, Vitest a Prettier, balíčky přes npm.
Složku podklady/ nemaž ani nepřesouvej. Zatím žádné komponenty appky,
jen základ, který jde pustit přes `npm run dev` a ukáže nadpis „Koníček 🐴“.
```

Přečti si plán. Nelíbí se ti něco? Napiš to. Až bude dobrý, schval ho.

**3. CLAUDE.md: paměť projektu.** Spusť `/init`. Claude projde projekt a napíše `CLAUDE.md`.
Pak ho doplň o pravidla, která z kódu nevyčte:

```text
Doplň do CLAUDE.md krátce naše pravidla:
- funkční komponenty s pojmenovaným exportem, jedna komponenta na soubor v src/components/
- logika bez Reactu do src/lib/ a s testem vedle (*.test.ts)
- texty v UI česky a s humorem, kód anglicky
- barvy, fonty a zaoblení jen z design tokenů v src/index.css (@theme)
- žádné nové závislosti bez zeptání
- než řekneš „hotovo“, musí projít `npm run build` a `npm test`
- commity malé, zprávy česky v rozkazovacím způsobu
Drž CLAUDE.md krátké, pod 40 řádků.
```

**4. Hook: pravidlo, které se nedá zapomenout.**

```text
Přidej do .claude/settings.json hook PostToolUse, který po každé úpravě souboru
(Edit nebo Write) spustí na ten soubor Prettier. Ať funguje na macOS i Windows,
takže žádné jq, napiš na to malý Node skript do .claude/hooks/.
```

**5. Commit.**

```text
Commitni to.
```

✅ **Hotovo, když:** `npm run dev` ukáže stránku, v projektu je `CLAUDE.md` a máš commit.

---

## Blok 2 · Z obrázku do Reactu (a ne do fialového gradientu)

### Krok 2: Karta koně podle skici

**1. Nový úkol = nový kontext.** Začni novou session (`⌘N` / `Ctrl+N`) ve stejné složce.

**2. (Volitelné) Přidej Claudovi vkus.** Oficiální plugin, který učí Clauda vyhýbat se „AI vzhledu“:
klikni na **+** vedle pole pro zprávu → **Plugins**, najdi **frontend-design** a nainstaluj.

**3. Ze skici do komponent.**

```text
Podle první obrazovky na @podklady/skica.png udělej kartu koně a tlačítka ✕ a ♥.
Data vezmi z podklady/kone.json a udělej z nich typovaný soubor src/data/horses.ts,
obrázky zkopíruj do public/kone/. Zatím bez tahání: tlačítka jen přepnou na dalšího koně.

Design: teplé hravé barvy (seno, mrkev, růžová), nadpisy výrazným fontem s charakterem
z Google Fonts, velká zaoblení, měkké stíny. Žádný fialový gradient, žádný Inter.
Nejdřív nadefinuj design tokeny v src/index.css přes @theme a pak používej jen je.
Mobil první.
```

**4. Dej Claudovi oči.** Appka má vestavěný prohlížeč (`⌘⇧B` / `Ctrl+Shift+B`), ve kterém Claude umí
pustit dev server, klikat a dělat screenshoty. Napiš:

```text
Pusť appku ve vestavěném prohlížeči, nastav šířku 375 px a udělej screenshot.
Porovnej ho se skicou @podklady/skica.png. Vypiš rozdíly a oprav je. Opakuj, dokud to nesedí.
```

Claude si u toho vytvoří `.claude/launch.json` (jak se appka spouští). Po dalších změnách se už do prohlížeče
podívá sám (**Auto-verify**).

**5. Skill: naučíme Clauda přidávat koně.** Skill je návod, který si Claude přečte, jen když ho potřebuje.

```text
Vytvoř projektový skill .claude/skills/novy-kun/SKILL.md, který přidá do appky nového koně:
vymyslí profil podle mého popisu (česky, vtipné bio do 90 znaků, 3 zájmy)
a nakreslí mu jednoduchý SVG obrázek ve stejném stylu jako ostatní v public/kone/.
```

Pak ho vyzkoušej: `/novy-kun líný poník, co miluje Netflix`. (Hotový skill je v `origin/krok-2`.)

✅ **Hotovo, když:** karta vypadá dobře na mobilu, tlačítka přepínají koně a máš commit.

### Krok 3: Swipe, shody a testy

Nová session (`⌘N` / `Ctrl+N`), režim **Plan** a napiš:

```text
Chci rozhodování o koních:
- tahání karty do stran (myš i prst) přes knihovnu motion, při tahání se karta natáčí
- tlačítka ✕ a ♥ a šipky ← → na klávesnici
- když dám ♥ koni s likesYou: true, vyskočí okno „Je to shoda!“ podle druhé obrazovky ve skice
- rozhodnutí a shody se ukládají do localStorage a přežijí obnovení stránky
- když koně dojdou, vtipná obrazovka s tlačítkem „Začít znovu“

Logiku (rozhodnutí, shody, zbývající koně) dej do src/lib/ jako čisté funkce.
Postup: nejdřív napiš testy ve Vitestu a ukaž mi, že selžou. Pak napiš kód, aby prošly.
```

Pak ověř, že nelže:

```text
Pusť testy a build a ukaž mi celý výstup.
```

Vyzkoušej si appku sama a commitni.

✅ **Hotovo, když:** jde swipovat, vyskočí shoda, testy jsou zelené a po obnovení stránky se nic neztratí.

### Krok 4: Seznam shod (pro rychlíky)

```text
Přidej obrazovku „Tvoje shody“ podle třetí obrazovky ve skice. Tlačítko Shody v hlavičce
na ni přepne, šipka Zpět vrátí swipování. Když shody nejsou, ukaž prázdný stav ze skici.
```

---

## Blok 3 · Ship it! Debug, polish a deploy

### Krok 5: Lov chyb 🐛, přístupnost a mobil

**1. Všechny skočíme na `krok-4`.** Je v něm seznam shod a **3 schválně schované chyby**.
(Svou appku si nejdřív ulož, viz [Dožeň nás](#zasekla-ses-dožeň-nás).)
Chceš raději ladit vlastní appku? Klidně, postup je stejný.

**2. Najdi, ale ještě neopravuj.**

```text
Proklikej appku ve vestavěném prohlížeči jako uživatelka: dej pár srdíček i křížků, obnov stránku,
otevři shody, projeď všechny koně až do konce. Sleduj konzoli prohlížeče.
Zatím nic neopravuj. Sepiš chyby, které najdeš: co jsi udělal, co se stalo a co se mělo stát.
```

<details>
<summary>Nápověda: co by měl Claude najít</summary>

1. Po obnovení stránky se ztratí všechny shody i rozhodnutí.
2. Počítadlo v hlavičce ukazuje jiné číslo, než kolik je shod v seznamu.
3. Po posledním koni appka zbělá a v konzoli je chyba.

</details>

**3. Oprav s testem.**

```text
Oprav ty chyby jednu po druhé. Ke každé nejdřív napiš test, který ji zachytí
a selže, pak ji oprav a ukaž, že test prošel. Na konci pusť všechny testy a build.
```

**4. Nezávislá kontrola.** Vezmi si subagenta, který jen čte a hlásí (v terminálu, `` Ctrl+` ``):

```bash
git checkout origin/krok-5 -- .claude/agents/a11y-reviewer.md
```

```text
Pusť subagenta a11y-reviewer na celou appku. Pak oprav, co najde,
od nejzávažnějšího. Kontrast oprav v design tokenech, ne v komponentách.
```

**5. Mobil i desktop.**

```text
Udělej screenshoty appky na šířce 375 px, 768 px a 1280 px, swipovací obrazovku i seznam shod.
Ověř, že se dá všechno ovládat jen klávesnicí (Tab, Enter, šipky, Esc). Oprav, co nesedí.
```

Co přesně Claude změnil, uvidíš v diffu (`⌘⇧D` nebo klik na `+12 −3` u změn). K řádkům můžeš psát komentáře.

**Bonus:** `/code-review` zkontroluje tvoje změny čerstvýma očima (nový kontext, který neviděl, jak jsi to psala).

✅ **Hotovo, když:** všechny 3 chyby jsou pryč, mají test a appka jde ovládat klávesnicí.

### Krok 6: Nasazení 🚀

```text
Chci appku nasadit na GitHub Pages pod svým účtem:
1. Současný remote origin přejmenuj na jam.
2. Přes gh vytvoř nový veřejný repozitář konicek a pushni do něj main.
3. Přidej GitHub Actions workflow, který při pushi do main pustí testy, build a nasadí na Pages.
4. Nastav Vite tak, aby appka fungovala na podadrese /konicek/.
5. Zapni Pages se zdrojem „GitHub Actions“ (gh api), pushni a pohlídej, že workflow doběhne.
Na konci mi pošli odkaz.
```

✅ **Hotovo, když:** appka běží na `https://<tvůj-github>.github.io/konicek/` a odkaz pošleš do Slacku 💘

---

## Bonusy, když zbyde čas

Vyber si cokoliv, vždycky začni plánem:

- ↺ vrátit poslední rozhodnutí
- 🥕 „super like“ (mrkev) s vlastní animací
- filtr podle vzdálenosti nebo plemene
- detail koně po kliknutí na shodu
- falešný chat: kůň odpovídá náhodnými hláškami
- tmavý režim (nové tokeny, ne nové barvy v komponentách)
- 5 nových koní přes `/novy-kun`
- end-to-end test v Playwrightu: projede všechny koně a ověří, že appka nespadla
