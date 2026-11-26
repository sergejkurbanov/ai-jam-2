# AI jam #2: instalace před workshopem

Zabere to asi 20 minut. Udělej to prosím **předem**, ať na místě jen tvoříme.
Kdyby cokoliv nešlo, napiš nám na Slack. Rádi pomůžeme a na místě to nikoho nezdrží.

**Na workshopu všechny používáme jeden nástroj: [Claude Code](https://code.claude.com).**

## 1. Účet Claude Pro

Claude Code není ve verzi zdarma. Potřebuješ **Claude Pro** (cca 20 $ měsíčně + DPH, jde kdykoliv zrušit)
nebo vyšší plán (Max, Team). Založíš ho na [claude.ai](https://claude.ai).

> Platit nechceš nebo nemůžeš? Napiš nám. Zkusíme ti sehnat týdenní zkušební pozvánku (guest pass).

## 2. Git

Zkontroluj, jestli už ho máš: `git --version` (stačí jakákoliv verze).

<details>
<summary><b>macOS</b></summary>

```bash
xcode-select --install
```

(Nebo přes [Homebrew](https://brew.sh): `brew install git`.)

</details>

<details>
<summary><b>Windows</b></summary>

Stáhni a nainstaluj [Git for Windows](https://git-scm.com/install/windows). Všechno nech ve výchozím nastavení.
Přibude ti i **Git Bash**, který Claude Code na Windows rád používá.

</details>

Pak gitu řekni, kdo jsi:

```bash
git config --global user.name "Tvoje Jméno"
git config --global user.email "tvuj@email.cz"
```

## 3. Node.js

Zkontroluj `node --version`. Potřebujeme **24 nebo vyšší**.
Pokud máš starší nebo žádný, stáhni **LTS** verzi z [nodejs.org](https://nodejs.org/en/download) a nainstaluj.

## 4. Claude Code

<details>
<summary><b>macOS / Linux</b></summary>

```bash
curl -fsSL https://claude.ai/install.sh | bash
```

</details>

<details>
<summary><b>Windows (PowerShell)</b></summary>

```powershell
irm https://claude.ai/install.ps1 | iex
```

</details>

Pak **otevři nový terminál** a spusť:

```bash
claude --version
claude
```

Otevře se prohlížeč, přihlas se svým Claude účtem. Pak Clauda ukonči (`/exit` nebo dvakrát Ctrl+C).

> **`claude: command not found`?** Zavři a znovu otevři terminál (ve VS Code restartuj celý editor).
> Když to nepomůže, spusť `claude doctor` nebo nám napiš.

## 5. GitHub

1. Založ si účet na [github.com](https://github.com), pokud ho ještě nemáš.
2. Nainstaluj GitHub CLI: macOS `brew install gh`, Windows `winget install --id GitHub.cli`
   (nebo instalátor z [cli.github.com](https://cli.github.com)).
3. Přihlas se:

```bash
gh auth login
```

Vyber `GitHub.com` → `HTTPS` → `Y` (přihlásit i git) → `Login with a web browser`.

## 6. Prohlížeč s rozšířením Claude

Ve třetím bloku necháme Clauda klikat v naší appce. Potřebuješ **Chrome** (nebo Edge) a rozšíření
[Claude in Chrome](https://claude.com/chrome). Nainstaluj ho a přihlas se stejným účtem jako v kroku 1.

## 7. Editor (doporučeno)

[VS Code](https://code.visualstudio.com) a v něm rozšíření **Claude Code** (od Anthropicu).
Na workshopu ale pojedeme hlavně v terminálu, takže klidně zůstaň u svého editoru.

## 8. Generálka ✅

Tohle stáhne hotovou verzi appky, nainstaluje balíčky a pustí ji. Když uvidíš koně, máš všechno připravené:

```bash
git clone -b krok-6 https://github.com/sergejkurbanov/ai-jam-2.git konicek-generalka
cd konicek-generalka
npm install
npm run dev
```

Otevři http://localhost:5173 a zkus pár koní 🐴. Pak server zastav (Ctrl+C).
Složku `konicek-generalka` pak klidně smaž, na workshopu začneme načisto.

Pošli nám prosím na Slack screenshot výstupu těchhle příkazů, ať víme, že je všechno ready:

```bash
git --version
node --version
claude --version
gh auth status
```

Hotovo! Uvidíme se na AI jamu 💘
