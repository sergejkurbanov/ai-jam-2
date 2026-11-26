import type { SlideDef } from '../deck/types'
import { AgendaSlide, DemoSlide, HorseTinderSlide, StartSlide, TitleSlide } from './intro'
import { AgentLoopSlide, ContextSlide, Krok0Slide, ThreeThingsSlide, TourSlide } from './concepts'
import { Blok1Slide, ClaudeMdSlide, HookSlide, InterviewSlide, Krok1Slide, NewColleagueSlide, PlanSlide, WhereSlide } from './blok1'
import { Blok2Slide, EyesSlide, Krok2Slide, Krok3Slide, McpSlide, SketchSlide, SkillsSlide, SlopSlide, TasteSlide, TddSlide, TokensSlide, VerifySlide } from './blok2'
import {
  A11ySlide, AbsolutelyRightSlide, Blok3Slide, BugHuntSlide, DebugSlide, DeploySlide, HabitsSlide, Krok6Slide,
  NextSlide, PolishSlide, SubagentsSlide, ThanksSlide, UnderusedSlide,
} from './blok3'

const INTRO = 'Úvod'
const B1 = 'Blok 1 · Než napíšeš první prompt'
const B2 = 'Blok 2 · Z obrázku do Reactu'
const B3 = 'Blok 3 · Ship it!'
const END = 'Závěr'

// Speaker notes in Czech. [klik] = next build step. Minutes include the hands-on time.
export const slides: SlideDef[] = [
  // ------------------------------------------------------------------ intro (15 min)
  {
    id: 'title', title: 'Ty vedeš, AI kóduje', minutes: 1, Component: TitleSlide,
    notes: `Ahoj, jsem Sergej. Vítejte na AI jamu #2!
• Dneska za jeden večer postavíme appku od prázdného repa po nasazení. Vy vedete, AI kóduje.
• Kdo byl na AI jamu #1? (ruce) Tentokrát jedeme do hloubky a všichni v jednom nástroji: Claude Code.`,
  },
  {
    id: 'agenda', title: 'Program', minutes: 1, Component: AgendaSlide, section: INTRO,
    notes: `Čtyři části a dvě pauzy. Bloky jsou stejné jako v pozvánce.
• Zdůraznit: budeme hodně prakticky, ale vždycky nejdřív krátce proč, pak teď ty.
• Na konci máte appku online a kód na GitHubu.`,
  },
  {
    id: 'demo', title: 'Tohle dnes postavíme', minutes: 1.5, Component: DemoSlide, section: INTRO,
    notes: `Živá ukázka hotové appky (je to iframe, dá se klikat).
• Swipněte Báru doprava → shoda. Ukažte šipky na klávesnici.
• „Tohle je cíl. A každý krok k němu má hotovou verzi, takže se nikdo neztratí.“`,
  },
  {
    id: 'horse-tinder', title: 'Proč koně', steps: 3, minutes: 1, Component: HorseTinderSlide, section: INTRO,
    notes: `Horse Tinder je running gag Fireshipu, dneska skoro neoficiální benchmark AI nástrojů.
[klik] Dost malá appka na večer, dost velká na skutečné problémy: stav, persistence, animace, přístupnost, nasazení.
[klik] Koně jsou nakreslení kódem (SVG). Trojan má uvnitř překvapení. 😉`,
  },
  {
    id: 'start', title: 'Začni tady', steps: 3, minutes: 2, Component: StartSlide, section: INTRO,
    notes: `Wi-Fi: ______ / heslo: ______ (doplnit)
Ať si všichni teď otevřou web (QR). Naklonovat a spustit claude zatím nemusí, uděláme to spolu v kroku 0.
[klik] Na webu jsou Kroky: každý prompt ke zkopírování. Minule jste chtěly návod, kde se dá dohnat bez vyrušení. Tady je.
[klik] Checkpointy: kdo se ztratí, uloží si práci a skočí na krok-N. Nikdo nemusí mít „svůj“ kód. Koučové pomůžou.`,
  },
  {
    id: 'agent', title: 'Jak funguje agent', steps: 3, minutes: 2, Component: AgentLoopSlide, section: INTRO,
    notes: `Chatbot odpoví a skončí. Agent dostane cíl a pracuje ve smyčce.
[klik] Má nástroje: čte soubory, píše, spouští příkazy, kouká do prohlížeče. Po každém kroku se podívá na výsledek a rozhodne, co dál.
[klik] Klíčová otázka: jak pozná, že je hotovo? Když mu nedáte způsob, jak to ověřit, řekne „hotovo“, když mu to bude připadat hotové.`,
  },
  {
    id: 'context', title: 'Kontext', steps: 3, minutes: 2, Component: ContextSlide, section: INTRO,
    notes: `Claude nemá paměť mezi sezeními. Ví jen, co je v kontextovém okně.
[klik] Každý přečtený soubor a výstup příkazu se tam přidává. Okno je velké (1M tokenů), ale čím víc balastu, tím horší výsledky.
[klik] /context ukáže zaplnění. Nový úkol = nová session (⌘N), čistá hlava. Nejlevnější trik pro lepší výsledky.`,
  },
  {
    id: 'three', title: 'Tři věci', steps: 3, minutes: 1, Component: ThreeThingsSlide, section: INTRO,
    notes: `Celý večer stojí na třech věcech. [klik] Kontext: co Claude ví. [klik] Plán: co udělá. [klik] Ověření: jak pozná, že je hotovo.
Každý blok jednu z nich procvičí.`,
  },
  {
    id: 'tour', title: 'Klávesy', minutes: 1, Component: TourSlide, section: INTRO,
    notes: `Ukázat živě v appce: přepínač režimů pod polem pro zprávu (⌘⇧M), Shift+Tab tu nefunguje. Esc zastaví.
Prohlížeč ⌘⇧B, terminál Ctrl+\`, diff ⌘⇧D. Na Windows Ctrl místo ⌘.
Na učení doporučuju Manual nebo Plan, ať vidíte, co dělá. Kdo jede v CLI, má rozdíly v Taháku.`,
  },
  {
    id: 'krok0', title: 'Krok 0: rozhlédni se', steps: 1, minutes: 5, Component: Krok0Slide, section: INTRO,
    notes: `5 minut, pomalý rozjezd (minule jste chtěly pomalejší start).
Obejít sál s kouči: má každá claude přihlášený? Kdo nemá Pro, ať se přidá ke kamarádce.`,
  },

  // ------------------------------------------------------------------ blok 1 (40 min)
  {
    id: 'b1', title: 'Blok 1', minutes: 0.5, Component: Blok1Slide, section: B1,
    notes: `První blok: než napíšeš první prompt. Naučíme Clauda náš projekt.`,
  },
  {
    id: 'colleague', title: 'První den v práci', steps: 3, minutes: 1.5, Component: NewColleagueSlide, section: B1,
    notes: `Nová kolegyně dostane onboarding, kouká, ptá se, učí se.
[klik] Claude každé ráno začíná od nuly. Onboarding je CLAUDE.md. Ptá se, jen když ho požádáte.
[klik] Bez vašich konvencí vezme ty nejprůměrnější z internetu. Proto kód „funguje, ale není to náš styl“.`,
  },
  {
    id: 'interview', title: 'Nech se vyzpovídat', steps: 3, minutes: 1.5, Component: InterviewSlide, section: B1,
    notes: `Trik č. 1: místo dlouhého zadání ať se ptá Claude. Jedna otázka po druhé, jinak vás zavalí deseti naráz.
[klik] Výsledek ať sepíše do souboru. To je kontext pro další krok i pro příští sezení.
[klik] Harper Reed: brainstorm → spec → plán → kód.`,
  },
  {
    id: 'plan', title: 'Plán před kódem', steps: 2, minutes: 2, Component: PlanSlide, section: B1,
    notes: `Explore, plan, code, commit. Prostřední krok je nejdůležitější a nejčastěji přeskakovaný.
[klik] Plan mode: Claude jen čte a navrhuje. Plán si opravdu přečtěte! Oprava plánu = jedna věta. Oprava kódu = večer.
(Na HN se letos debatovalo „plan mode is dead“, protože modely plánují samy. Princip ale platí: nejdřív se dohodnout.)`,
  },
  {
    id: 'claudemd', title: 'CLAUDE.md', steps: 3, minutes: 2, Component: ClaudeMdSlide, section: B1,
    notes: `Co tam patří: příkazy, pravidla, záludnosti, co jste opravovaly dvakrát.
[klik] Co ne: popis složek (to si Claude přečte sám), dlouhé texty, VELKÁ PÍSMENA. Dnešní modely je berou moc doslova.
[klik] /init napíše první verzi. Pak ji zkraťte. Zkratka # na zápis do paměti už neexistuje, prostě řekněte „zapiš si to do CLAUDE.md“.
Všimněte si posledního pravidla: to je ověření, propojuje to s blokem 2.`,
  },
  {
    id: 'where', title: 'Kam s čím', steps: 3, minutes: 2, Component: WhereSlide, section: B1,
    notes: `Minule padla otázka: jaký .md soubor na co. Tady je mapa.
CLAUDE.md vždy, rules jen pro určité soubory. [klik] Skills a subagenti, až je potřeba (uvidíme v bloku 2 a 3). [klik] Hooky vždy, automaticky. MCP = nové nástroje.
AGENTS.md: Claude ho čte, když nemáte CLAUDE.md, nebo ho importujte přes @AGENTS.md.`,
  },
  {
    id: 'hook', title: 'Hooky', steps: 2, minutes: 1.5, Component: HookSlide, section: B1,
    notes: `CLAUDE.md je prosba, model ji většinou dodrží. Hook je zákon: spouští ho Claude Code, ne model.
[klik] Příklady. Náš hook: po každé úpravě Prettier. Malý Node skript, ať funguje i na Windows.`,
  },
  {
    id: 'krok1', title: 'Krok 1: založ projekt', steps: 1, minutes: 25, Component: Krok1Slide, section: B1,
    notes: `Nejdřív to celé ukázat živě (cca 8 min), pak 15–20 min práce.
Pozor na: create-vite v neprázdné složce (podklady!). V plánu musí být, že podklady/ zůstanou.
Kdo nestíhá: git reset --hard origin/krok-1. Pauza po tomhle kroku.`,
  },

  // ------------------------------------------------------------------ blok 2 (60 min)
  {
    id: 'b2', title: 'Blok 2', minutes: 0.5, Component: Blok2Slide, section: B2,
    notes: `Po pauze: z obrázku do Reactu. A ne do fialového gradientu.`,
  },
  {
    id: 'slop', title: 'AI vzhled', steps: 3, minutes: 1.5, Component: SlopSlide, section: B2,
    notes: `Poznáváte? (smích) Fialový gradient, Inter, „Revolutionize“, tři karty s emoji.
[klik] Vyjmenovat. [klik] Proč: model bez zadání vybere nejčastější volbu. Anthropic tomu říká distributional convergence.
Za fialovou prý může výchozí indigo z Tailwindu.`,
  },
  {
    id: 'taste', title: 'Jak dát AI vkus', steps: 2, minutes: 1.5, Component: TasteSlide, section: B2,
    notes: `Pět způsobů. Nejsilnější je reference (obrázek) + tokeny + konkrétní slova.
[klik] Oficiální plugin frontend-design: krátký skill, který učí Clauda vyhýbat se generickým fontům a barvám.`,
  },
  {
    id: 'sketch', title: 'Skica', steps: 2, minutes: 1, Component: SketchSlide, section: B2,
    notes: `Náš podklad: skica od „designérky“. Tři obrazovky, červené poznámky.
[klik] Prompt: reference + design slovy + co ne + nejdřív tokeny.`,
  },
  {
    id: 'tokens', title: 'Design tokeny', steps: 3, minutes: 1.5, Component: TokensSlide, section: B2,
    notes: `Tailwind v4: tokeny v CSS přes @theme, žádný tailwind.config.js.
[klik] Z tokenů jsou třídy. [klik] Pravidlo v CLAUDE.md „jen tokeny“. V bloku 3 pak opravíme kontrast jedním řádkem.`,
  },
  {
    id: 'skills', title: 'Skills', steps: 4, minutes: 2, Component: SkillsSlide, section: B2,
    notes: `Skill = složka s návodem. [klik] Do kontextu jde jen popis. [klik] Celý SKILL.md, až když je potřeba. [klik] Přílohy, až na ně dojde.
Tomu se říká progressive disclosure. [klik] Proto jich můžete mít desítky. Náš skill novy-kun přidá koně i s obrázkem.
Skills fungují i v Claude.ai a dalších nástrojích (standard Agent Skills).`,
  },
  {
    id: 'eyes', title: 'Dej AI oči', steps: 2, minutes: 2, Component: EyesSlide, section: B2,
    notes: `Bez prohlížeče Claude maluje poslepu: napíše CSS a doufá.
[klik] Dnes používáme vestavěný prohlížeč v appce (⌘⇧B) s Auto-verify. Claude in Chrome, když potřebujete svůj přihlášený prohlížeč. Playwright MCP pro jiné nástroje.
Živě ukázat: screenshot na 375 px vedle skici a „oprav rozdíly“.`,
  },
  {
    id: 'mcp', title: 'MCP', steps: 3, minutes: 1.5, Component: McpSlide, section: B2,
    notes: `MCP = USB-C pro AI. Standardní zásuvka na nové nástroje.
[klik] Přidání: .mcp.json v projektu, nebo ať to udělá Claude. [klik] Bezpečnost: MCP server je kód, který běží u vás. Jen důvěryhodné.`,
  },
  {
    id: 'krok2', title: 'Krok 2: ze skici do komponent', steps: 1, minutes: 25, Component: Krok2Slide, section: B2,
    notes: `Živě ukázat cca 7 min (prompt, tokeny, screenshot ve vestavěném prohlížeči, oprava). Pak 15–20 min.
Kdo je rychlá: skill /novy-kun. Kdo nestíhá: origin/krok-2.`,
  },
  {
    id: 'verify', title: 'Ověření', steps: 3, minutes: 1.5, Component: VerifySlide, section: B2,
    notes: `Nejdůležitější tip večera. Boris Cherny (autor Claude Code): když má Claude zpětnou vazbu, výsledek je 2–3× lepší.
[klik] Čím ověřovat. [klik] Chtějte důkaz. „Hotovo ✨“ není důkaz. A dejte to do CLAUDE.md.`,
  },
  {
    id: 'tdd', title: 'Červený test', steps: 2, minutes: 1.5, Component: TddSlide, section: B2,
    notes: `Red, green, refactor. S AI ještě důležitější.
[klik] Když AI píše kód i testy, testy potvrdí, co kód dělá, i když je to blbě. A agenti občas test upraví, aby prošel. Hlídejte diff testů.`,
  },
  {
    id: 'krok3', title: 'Krok 3: swipe, shody, testy', steps: 1, minutes: 30, Component: Krok3Slide, section: B2,
    notes: `Největší krok. Živě: režim Plan, prompt, ukázat červené testy, pak zelené. Pak 20 min práce.
Rychlice: krok 4 (seznam shod). Na začátku bloku 3 všichni skočí na krok-4, takže zpoždění se smaže. Pauza.`,
  },

  // ------------------------------------------------------------------ blok 3 (35 min)
  {
    id: 'b3', title: 'Blok 3', minutes: 0.5, Component: Blok3Slide, section: B3,
    notes: `Ship it! Debug, polish a deploy.`,
  },
  {
    id: 'absolutely', title: 'You’re absolutely right', steps: 3, minutes: 1, Component: AbsolutelyRightSlide, section: B3,
    notes: `Kdo to zažil? (ruce) [klik] Klasika. [klik] Sykofancie: model rád souhlasí a hlásí úspěch. Proto důkazy, ne sliby.`,
  },
  {
    id: 'debug', title: 'Debugging', steps: 3, minutes: 1.5, Component: DebugSlide, section: B3,
    notes: `Šest kroků. Nejdřív najít a pochopit, pak opravit.
[klik] Test a nejmenší oprava. [klik] „Oprav to“ často opraví příznak. Dvakrát nic? Nová session.`,
  },
  {
    id: 'bughunt', title: 'Krok 5a: lov chyb', steps: 1, minutes: 15, Component: BugHuntSlide, section: B3,
    notes: `VŠICHNI skočí na krok-4 (svou práci si uloží). Jsou v něm 3 chyby: obnovení stránky, počítadlo shod, pád po posledním koni.
Nejdřív hledat bez oprav. Kdo najde všechny tři první, vyhrává mrkev 🥕 (nebo nálepku).
Rozbor: všechny tři jsou typické AI chyby a žádnou nechytil TypeScript ani testy.`,
  },
  {
    id: 'subagents', title: 'Subagenti', steps: 4, minutes: 2, Component: SubagentsSlide, section: B3,
    notes: `Subagent = pomocník s vlastním kontextem. [klik] Náš a11y-reviewer: čistá hlava, smí jen číst.
[klik] Zpátky přijde jen shrnutí, kontext hlavního Clauda zůstane čistý.
[klik] Hlavní důvod: nezávislý pohled. Kdo kód psal, nevidí v něm chyby. Proto i /code-review.`,
  },
  {
    id: 'a11y', title: 'Přístupnost', steps: 2, minutes: 1.5, Component: A11ySlide, section: B3,
    notes: `Šest věcí, na které AI zapomíná. Kontrast: naše oranžová s bílým textem měla 2,8:1. Oprava v tokenu.
[klik] EAA platí od června 2025. Pravidla do CLAUDE.md, kontrola do linteru (jsx-a11y) a do subagenta.`,
  },
  {
    id: 'polish', title: 'Krok 5b: přístupnost a mobil', steps: 1, minutes: 15, Component: PolishSlide, section: B3,
    notes: `Subagent si vezmou z checkpointu jedním příkazem (git checkout origin/krok-5 -- .claude/agents/).
Kdo nestíhá, přeskočí rovnou na nasazení. Nasadit chceme stihnout všichni!`,
  },
  {
    id: 'deploy', title: 'Nasazení', steps: 2, minutes: 1.5, Component: DeploySlide, section: B3,
    notes: `Push → Actions (testy, build) → Pages.
[klik] Claude to zvládne celé přes gh. Auto režim se u pushe a vytvoření repa zeptá. Správně.`,
  },
  {
    id: 'krok6', title: 'Krok 6: ship it', steps: 1, minutes: 10, Component: Krok6Slide, section: B3,
    notes: `Prompt z Kroků. Odkazy do Slacku, pak je projdeme na plátně. 🎉`,
  },

  // ------------------------------------------------------------------ závěr (10 min)
  {
    id: 'habits', title: '10 návyků', steps: 2, minutes: 2, Component: HabitsSlide, section: END,
    notes: `Shrnutí. Všechno je i v Taháku na webu. [klik]`,
  },
  {
    id: 'underused', title: 'Co lidi nepoužívají', steps: 3, minutes: 2, Component: UnderusedSlide, section: END,
    notes: `Otázky z přípravy: využívají lidi Clauda naplno? Většinou ne, používají ho jako chat s autocomplete.
Doplnit vlastní zkušenost: poslední cool věc, kterou jsem objevil, a tip pro kamaráda na „basic levelu“.
[klik] [klik]`,
  },
  {
    id: 'next', title: 'Co dál', steps: 3, minutes: 1.5, Component: NextSlide, section: END,
    notes: `AI jam #3: backend. Chat s koňmi! [klik] Doma si zkuste. [klik] Principy platí v každém nástroji.`,
  },
  {
    id: 'thanks', title: 'Díky', minutes: 1, Component: ThanksSlide, section: END,
    notes: `Díky koučům, React Girls a partnerovi. Zpětná vazba!`,
  },
]
