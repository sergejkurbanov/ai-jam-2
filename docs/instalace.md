# AI jam #2: instalace před workshopem

Zabere to asi 15 minut. Udělej to prosím **předem**, ať na místě jen tvoříme.
Kdyby cokoliv nešlo, napiš nám na Slack. Rádi pomůžeme a na místě to nikoho nezdrží.

**Na workshopu všechny používáme jeden nástroj: desktopovou appku Claude (záložka Code).**

## 1. Účet Claude Pro

Claude Code není ve verzi zdarma. Potřebuješ **Claude Pro** (cca 20 $ měsíčně + DPH, jde kdykoliv zrušit)
nebo vyšší plán (Max, Team). Založíš ho na [claude.ai](https://claude.ai).

## 2. Desktopová appka Claude

Stáhni a nainstaluj z [claude.com/download](https://claude.com/download) (macOS i Windows).
Přihlas se a otevři záložku **Code**. Claude Code je v appce už v sobě, nic dalšího k němu instalovat nemusíš.

## 3. Git

Zkontroluj v terminálu, jestli už ho máš: `git --version` (stačí jakákoliv verze).

**macOS:** v terminálu spusť

```bash
xcode-select --install
```

(Nebo přes [Homebrew](https://brew.sh): `brew install git`.)

**Windows:** stáhni a nainstaluj [Git for Windows](https://git-scm.com/install/windows). Všechno nech ve výchozím nastavení.

Pak gitu řekni, kdo jsi:

```bash
git config --global user.name "Tvoje Jméno"
git config --global user.email "tvuj@email.cz"
```

## 4. Node.js

Zkontroluj `node --version`. Potřebujeme **24 nebo vyšší**.
Pokud máš starší nebo žádný, stáhni **LTS** verzi z [nodejs.org](https://nodejs.org/en/download) a nainstaluj.

## 5. GitHub

1. Založ si účet na [github.com](https://github.com), pokud ho ještě nemáš.
2. Nainstaluj GitHub CLI: macOS `brew install gh`, Windows `winget install --id GitHub.cli`
   (nebo instalátor z [cli.github.com](https://cli.github.com)).
3. Přihlas se:

```bash
gh auth login
```

Vyber `GitHub.com` → `HTTPS` → `Y` (přihlásit i git) → `Login with a web browser`.

## Hotovo? Ověř to ✅

Otevři **nový** terminál a spusť:

```bash
git --version
node --version
gh auth status
```

Všechny tři příkazy by měly vypsat verzi nebo „Logged in“, a v appce Claude by měla jít otevřít záložka Code.

Uvidíme se na AI jamu 💘
