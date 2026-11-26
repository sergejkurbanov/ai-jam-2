# Koníček 🐴 · AI jam #2

Tinder pro koně, který dnes večer postavíme s [Claude Code](https://code.claude.com). Ty vedeš, AI kóduje.

- 📋 Zadání: [`podklady/brief.md`](podklady/brief.md)
- ✏️ Skica: [`podklady/skica.png`](podklady/skica.png)
- 🖥️ Prezentace a průvodce po krocích: **https://sergejkurbanov.github.io/ai-jam-2/**

## Start

```bash
git clone -b main https://github.com/sergejkurbanov/ai-jam-2.git konicek
```

Pak v desktopové appce Claude: záložka **Code** → **Local** → **Open folder…** → `konicek`.

## Zasekla ses? Dožeň nás checkpointem

Každý krok workshopu má hotovou verzi ve větvi `krok-1` až `krok-6`.
Tvoje práce se neztratí, jen ji uložíš stranou:

```bash
git add -A
git commit -m "moje rozdělaná práce"
git branch zaloha-1
git fetch origin
git reset --hard origin/krok-3
npm install
```

(`zaloha-1` a `krok-3` si přepiš podle sebe.) Nebo to řekni Claudovi:
_„Ulož moji práci do větve zaloha-1 a přepni mě na checkpoint origin/krok-3.“_

| Větev    | Kde jsme                                                  |
| -------- | --------------------------------------------------------- |
| `main`   | prázdný start: jen zadání, skica a obrázky koní           |
| `krok-1` | projekt založený, CLAUDE.md, formátovací hook             |
| `krok-2` | karta koně podle skici, design tokeny, skill na nové koně |
| `krok-3` | swipe, shody, testy, localStorage                         |
| `krok-4` | seznam shod (a 3 schválně schované chyby 🐛)              |
| `krok-5` | chyby opravené, mobil a přístupnost doladěné              |
| `krok-6` | nasazeno na GitHub Pages 🚀                               |

## Nasazení na GitHub Pages

```bash
git remote rename origin jam
gh repo create konicek --public --source=. --remote=origin --push
gh api -X POST repos/{owner}/{repo}/pages -f build_type=workflow
```

Pak stačí každý `git push` a za minutu je nová verze na `https://<tvůj-github>.github.io/konicek/`.
Postup je v `.github/workflows/deploy.yml`.
