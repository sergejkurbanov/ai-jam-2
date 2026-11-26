# Zdroje a rešerše

Podklady k prezentaci, posbírané 26. 11. 2026. Co se nepodařilo ověřit z primárního zdroje, je označené ⚠️.

## Claude Code: oficiální dokumentace

- Desktopová appka, záložka Code (na workshopu ji používáme): [desktop](https://code.claude.com/docs/en/desktop), [desktop-quickstart](https://code.claude.com/docs/en/desktop-quickstart), stažení na [claude.com/download](https://claude.com/download)
- CLI, instalace a přihlášení: [code.claude.com/docs/en/setup](https://code.claude.com/docs/en/setup), [troubleshoot-install](https://code.claude.com/docs/en/troubleshoot-install)
- Best practices (včetně sekce o radách, které už neplatí): [code.claude.com/docs/en/best-practices](https://code.claude.com/docs/en/best-practices)
- Paměť, CLAUDE.md, `.claude/rules`, AGENTS.md: [memory](https://code.claude.com/docs/en/memory)
- Režimy oprávnění, plán, auto režim: [permission-modes](https://code.claude.com/docs/en/permission-modes)
- Skills: [skills](https://code.claude.com/docs/en/skills) · Pluginy: [discover-plugins](https://code.claude.com/docs/en/discover-plugins) · [frontend-design plugin](https://github.com/anthropics/claude-plugins-official/tree/main/plugins/frontend-design)
- Subagenti: [sub-agents](https://code.claude.com/docs/en/sub-agents) · Hooky: [hooks-guide](https://code.claude.com/docs/en/hooks-guide)
- MCP: [mcp](https://code.claude.com/docs/en/mcp) · Claude in Chrome: [chrome](https://code.claude.com/docs/en/chrome)
- Checkpointy a `/rewind`: [checkpointing](https://code.claude.com/docs/en/checkpointing) · Výstupní styly: [output-styles](https://code.claude.com/docs/en/output-styles)
- Co je nového: [whats-new](https://code.claude.com/docs/en/whats-new) · [CHANGELOG](https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md)
- Ceny: [claude.com/pricing](https://www.claude.com/pricing)

### Fakta, na která se v prezentaci odkazujeme

- Aktuální verze 2.1.332 (25. 11. 2026). Modely: Opus 5.5 (výchozí), Sonnet 5.5, Haiku 5.5, Fable 5.2, všechny s 1M kontextem.
- **Auto režim** je od srpna 2026 výchozí: klasifikátor kontroluje každou akci a blokuje rizikové.
- Zkratka `#` pro zápis do paměti zmizela ve verzi 2.0.70. Teď se prostě řekne „zapiš si to do CLAUDE.md“.
- AGENTS.md se čte nativně (pokud není CLAUDE.md). Auto memory zapisuje Claude sám do `~/.claude/projects/…/memory/`.
- Desktopová appka má Claude Code v sobě (bez CLI a bez Node). Režimy přepíná přepínač pod polem pro zprávu (`⌘⇧M`), `Shift+Tab` tam nefunguje. Vestavěný prohlížeč `⌘⇧B` s Auto-verify (konfigurace v `.claude/launch.json`), terminál `` Ctrl+` ``, diff `⌘⇧D`. Sdílí s CLI `CLAUDE.md`, skills, hooky a `.mcp.json`.
- CLI: obrázky `Ctrl+V` všude, i na Macu.
- `ultrathink` pořád funguje (zvedne effort na xhigh), „think hard“ už ne. Nově `/effort`.
- Claude in Chrome je GA od června 2026, desktopová appka má vestavěný prohlížeč s „Auto-verify“.
- Free plán Claude Code nemá. Pro: 20 $/měsíc + DPH, sdílený limit s chatem (5h okno + týdenní).
- ⚠️ Playwright MCP a Chrome DevTools MCP příkazy (`claude mcp add playwright -- npx @playwright/mcp@latest`) jsou běžně používané, ale v oficiální dokumentaci jsme je nenašli.

## Praxe a komunita

- Boris Cherny (autor Claude Code) o svém workflow, „dej mu způsob, jak si ověřit práci“ = 2–3× lepší výsledek: [InfoQ](https://www.infoq.com/news/2026/01/claude-code-creator-workflow)
- Harper Reed: brainstorm → spec → plán, „ptej se mě jednu otázku po druhé“: [harper.blog](https://harper.blog/2025/02/16/my-llm-codegen-workflow-atm/)
- Simon Willison, Agentic engineering patterns (red/green TDD, anti-patterns, „Writing code is cheap now“): [simonwillison.net](https://simonwillison.net/guides/agentic-engineering-patterns/)
- Addy Osmani: commity jako „save pointy“ ve hře: [addyosmani.com](https://addyosmani.com/blog/ai-coding-workflow/)
- Armin Ronacher, A year of vibes: [lucumr.pocoo.org](https://lucumr.pocoo.org/2025/12/22/a-year-of-vibes/)
- „Plan mode is dead?“ diskuze na HN: [news.ycombinator.com](https://news.ycombinator.com/item?id=49840054)
- Sykofancie, „You're absolutely right!“: [GitHub issue #3382](https://github.com/anthropics/claude-code/issues/3382), [The Register](https://www.theregister.com/2025/08/13/claude_codes_copious_coddling_confounds/)
- Agenti upravují testy, aby prošly (EvilGenie benchmark): [arXiv](https://arxiv.org/html/2511.21654v1)
- Limity na Pro: [GitHub issue #9424](https://github.com/anthropics/claude-code/issues/9424)
- ⚠️ Reddit (r/ClaudeAI, r/ClaudeCode) se nepodařilo přímo načíst, nálady jsou z HN, GitHub issues a blogů, které na Reddit odkazují.

## Frontend a design

- Proč AI weby vypadají stejně („distributional convergence“) a skill frontend-design: [claude.com](https://claude.com/resources/articles/improving-frontend-design-through-skills)
- Proč zrovna fialová (Tailwind indigo-500): [dev.to](https://dev.to/alanwest/why-every-ai-built-website-looks-the-same-blame-tailwinds-indigo-500-3h2p)
- Chrome DevTools pro agenty 1.0 (květen 2026): [developer.chrome.com](https://developer.chrome.com/blog/devtools-for-agents-v1)
- Playwright MCP + Claude Code: [builder.io](https://www.builder.io/blog/playwright-mcp-server-claude-code)
- Přístupnost AI kódu, Axe MCP: [deque.com](https://www.deque.com/blog/vibe-fixing-how-to-validate-ai-generated-code-and-achieve-accessibility-at-the-speed-of-ai/) · „Your vibe coded website is going to get you fined“: [thoughtbot](https://thoughtbot.com/blog/your-vibe-coded-website-is-going-to-get-you-fined)

## Nástroje v roce 2026 (pro slajd „a co ostatní?“)

- Průzkum JetBrains (srpen 2026, ~15 tis. vývojářů) ⚠️ ze sekundárních zdrojů: Claude Code ~39 %, Copilot ~21 %, Codex ~16 %, Cursor ~12 %. [gigazine](https://gigazine.net/gsc_news/en/20260824-ai-coding-agent-adoption-trends/)
- Zdarma: GitHub Copilot Free (agent mód ve VS Code, omezený počet), Antigravity CLI od Googlu (Gemini CLI už zdarma není). Codex je v ChatGPT plánech, na Free ⚠️ bez jasných limitů.

## Workshop

- Horse Tinder jako Fireshipův running gag: [HN](https://news.ycombinator.com/item?id=45151248), [GitHub README](https://github.com/Kam4T0r/horse-tinder)
- Checkpointy u jiných workshopů: Kent C. Dodds' [Epic Workshop App](https://www.epicweb.dev/get-started), Frontend Masters [Complete Intro to React](https://github.com/btholt/citr-v9-project) (složky po krocích), [Rails Girls](https://guides.railsgirls.com/app) (koučové místo checkpointů)
- Vite na GitHub Pages: [vite.dev/guide/static-deploy](https://vite.dev/guide/static-deploy)
- Stack (ověřeno na npm 26. 11. 2026): Vite 8.3, React 19.3, TypeScript 7.0, Tailwind 4.3, motion 14.14, Vitest 5.1. Node 26 je Active LTS od 28. 10. 2026, Node 24 je Maintenance LTS.
