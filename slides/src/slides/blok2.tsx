import type { SlideProps } from '../deck/types'
import { Exercise, Prompt, Reveal, Section, Slide } from '../components/ui'

export function Blok2Slide() {
  return (
    <Section
      n="2"
      horse="lucka"
      title={<>Z obrázku do Reactu</>}
      sub={<>(a ne do fialového gradientu). Ze skici ke komponentám, AI s vkusem, design systémem a hlavně s očima.</>}
    />
  )
}

/* ------------------------------------------------------------------ */
export function SlopSlide({ step }: SlideProps) {
  return (
    <Slide kicker="Poznáš to?" title="Každá AI appka vypadá stejně">
      <div className="grid2" style={{ alignItems: 'center' }}>
        <div
          style={{
            borderRadius: 32, overflow: 'hidden', boxShadow: 'var(--shadow)', background: '#0b0a1a', color: '#fff',
            fontFamily: 'Inter, system-ui, sans-serif', padding: '56px 48px', textAlign: 'center', height: 620,
          }}
        >
          <div style={{ display: 'inline-block', padding: '6px 16px', borderRadius: 999, background: 'rgba(139,92,246,.2)', color: '#c4b5fd', fontSize: 20 }}>✨ Now with AI</div>
          <div style={{ fontSize: 60, fontWeight: 800, lineHeight: 1.05, margin: '24px 0', background: 'linear-gradient(90deg,#8b5cf6,#ec4899)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
            Revolutionize your horse dating
          </div>
          <div style={{ fontSize: 22, color: '#a1a1aa' }}>The all-in-one platform to seamlessly connect equines.</div>
          <div style={{ margin: '32px auto', width: 260, padding: '16px 0', borderRadius: 12, background: 'linear-gradient(90deg,#6366f1,#8b5cf6)', fontSize: 22, fontWeight: 700 }}>Get started →</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 14 }}>
            {['🚀 Fast', '🔒 Secure', '⚡ Seamless'].map((t) => (
              <div key={t} style={{ border: '1px solid #27272a', borderRadius: 14, padding: '18px 0', fontSize: 20 }}>{t}</div>
            ))}
          </div>
        </div>
        <div>
          <Reveal step={step} at={1}>
            <ul className="list">
              <li>🟣 fialový gradient</li>
              <li>🔤 Inter všude</li>
              <li>✨ „Revolutionize“, „seamless“</li>
              <li>🃏 tři karty s emoji</li>
            </ul>
          </Reveal>
          <Reveal step={step} at={2}>
            <p className="body" style={{ marginTop: 44 }}>
              Bez zadání model vybere <span className="hl">to nejčastější</span>. Anthropic tomu říká <i>distributional
              convergence</i>. Za fialovou prý může výchozí <code className="mono">indigo-500</code> z Tailwindu, který je
              na půlce internetu.
            </p>
          </Reveal>
        </div>
      </div>
    </Slide>
  )
}

/* ------------------------------------------------------------------ */
export function TasteSlide({ step }: SlideProps) {
  const items = [
    ['🖼️', 'Reference', 'skica, screenshot, web, který se ti líbí'],
    ['🎨', 'Design tokeny', 'barvy, fonty, zaoblení na jednom místě'],
    ['🗣️', 'Konkrétní slova', '„teplé, hravé, výrazný font“, ne „hezké a moderní“'],
    ['🚫', 'Co NE', '„žádný fialový gradient, žádný Inter“'],
    ['🧩', 'Skill frontend-design', 'oficiální plugin proti „AI vzhledu“'],
  ]
  return (
    <Slide kicker="Jak dát AI vkus" title="Pět cest k vlastnímu stylu">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 24 }}>
        {items.map(([e, t, s], i) => (
          <Reveal key={t} step={step} delay={i * 0.08}>
            <div className="card" style={{ height: 360, display: 'flex', flexDirection: 'column', gap: 14, padding: 30 }}>
              <div style={{ fontSize: 64 }}>{e}</div>
              <div className="h3" style={{ fontSize: 36 }}>{t}</div>
              <div className="small">{s}</div>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal step={step} at={1}>
        <Prompt label="Claude Code" style={{ marginTop: 48 }}>
          /plugin install <span className="c">frontend-design@claude-plugins-official</span>
        </Prompt>
      </Reveal>
    </Slide>
  )
}

/* ------------------------------------------------------------------ */
export function SketchSlide({ step }: SlideProps) {
  return (
    <Slide kicker="Náš podklad" title="Skica od designérky (na ubrousku)">
      <div style={{ display: 'grid', gridTemplateColumns: '1.35fr 1fr', gap: 56, alignItems: 'start' }}>
        <img src="./skica.png" alt="Skica tří obrazovek appky Koníček" style={{ width: '100%', borderRadius: 24, boxShadow: 'var(--shadow)' }} />
        <Reveal step={step} at={1}>
          <Prompt style={{ fontSize: 24 }}>
            Podle první obrazovky na <span className="c">@podklady/skica.png</span> udělej kartu koně a tlačítka ✕ a ♥.{'\n\n'}
            Design: <span className="c">teplé hravé barvy</span> (seno, mrkev, růžová), nadpisy <span className="c">výrazným fontem</span>, velká zaoblení.{'\n'}
            Žádný fialový gradient, žádný Inter.{'\n\n'}
            <span className="c">Nejdřív nadefinuj design tokeny</span> v src/index.css přes @theme a pak používej jen je.
          </Prompt>
        </Reveal>
      </div>
    </Slide>
  )
}

/* ------------------------------------------------------------------ */
export function TokensSlide({ step }: SlideProps) {
  return (
    <Slide kicker="Design systém v jednom souboru" title="Design tokeny">
      <div className="grid2" style={{ alignItems: 'start' }}>
        <Prompt label="src/index.css" style={{ fontSize: 24 }}>
          @import 'tailwindcss';{'\n\n'}
          @theme {'{'}{'\n'}
          {'  '}--font-display: <span className="c">'Bricolage Grotesque'</span>;{'\n'}
          {'  '}--color-hay-50: <span className="c">#fffaf2</span>;{'\n'}
          {'  '}--color-ink: <span className="c">#2b1d14</span>;{'\n'}
          {'  '}--color-carrot: <span className="c">#ff6b2c</span>;{'\n'}
          {'  '}--color-rose: <span className="c">#ff4f7b</span>;{'\n'}
          {'  '}--radius-card: <span className="c">2rem</span>;{'\n'}
          {'}'}
        </Prompt>
        <div>
          <div style={{ display: 'flex', gap: 18 }}>
            {['#fffaf2', '#ffe2b8', '#2b1d14', '#ff6b2c', '#c2410c', '#ff4f7b'].map((c) => (
              <div key={c} style={{ width: 96, height: 96, borderRadius: 24, background: c, boxShadow: 'var(--shadow)', border: '2px solid var(--line)' }} />
            ))}
          </div>
          <Reveal step={step} at={1}>
            <p className="body" style={{ marginTop: 44 }}>
              Tailwind v4 z toho udělá třídy: <code className="mono">bg-carrot</code>, <code className="mono">font-display</code>,{' '}
              <code className="mono">rounded-card</code>.
            </p>
          </Reveal>
          <Reveal step={step} at={2}>
            <p className="body" style={{ marginTop: 28 }}>
              A do CLAUDE.md: <i>„barvy jen z tokenů“</i>. Pak když nesedí kontrast, opravíš <b>jeden řádek</b>, ne dvacet komponent.
            </p>
          </Reveal>
        </div>
      </div>
    </Slide>
  )
}

/* ------------------------------------------------------------------ */
export function SkillsSlide({ step }: SlideProps) {
  const layers = [
    ['Vždy v kontextu', 'jen název a popis: „Přidá do Koníčka nového koně…“', '~1 řádek'],
    ['Když je potřeba', 'celý SKILL.md: postup krok za krokem', '~40 řádků'],
    ['Jen když na něj dojde', 'sablona.svg, doplnky.md, skripty', 'cokoliv'],
  ]
  return (
    <Slide kicker="Skills" title="Návod, který se načte, až když je potřeba">
      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 64, alignItems: 'start' }}>
        <div style={{ display: 'grid', gap: 20 }}>
          {layers.map(([t, s, size], i) => (
            <Reveal key={t} step={step} at={i}>
              <div className="card" style={{ marginLeft: i * 48, display: 'flex', gap: 24, alignItems: 'center' }}>
                <div style={{ flex: 1 }}>
                  <div className="h3" style={{ fontSize: 34 }}>{t}</div>
                  <div className="small">{s}</div>
                </div>
                <div className="chip">{size}</div>
              </div>
            </Reveal>
          ))}
          <Reveal step={step} at={3}>
            <p className="small" style={{ marginTop: 8, fontSize: 28 }}>
              Proto jich můžeš mít desítky a kontext se nezaplní. Spustíš ho sama přes <code className="mono">/novy-kun</code>, nebo si ho Claude vezme, když se hodí.
            </p>
          </Reveal>
        </div>
        <Prompt label=".claude/skills/novy-kun/" style={{ fontSize: 24 }}>
          SKILL.md{'\n'}sablona.svg{'\n'}doplnky.md{'\n\n'}
          <span className="d">---</span>{'\n'}
          <span className="c">name:</span> novy-kun{'\n'}
          <span className="c">description:</span> Přidá do Koníčka{'\n'}
          {'  '}nového koně (profil i obrázek).{'\n'}
          {'  '}Použij, když uživatelka chce{'\n'}
          {'  '}nového koně.{'\n'}
          <span className="d">---</span>{'\n'}
          # Nový kůň{'\n'}
          1. Profil … bio do 90 znaků …{'\n'}
          2. Obrázek: zkopíruj sablona.svg …
        </Prompt>
      </div>
    </Slide>
  )
}

/* ------------------------------------------------------------------ */
export function EyesSlide({ step }: SlideProps) {
  const loop = ['✏️ napiš', '▶️ pusť', '📸 screenshot', '🔍 porovnej se skicou', '🔧 oprav']
  return (
    <Slide kicker="Dej AI oči" title="Bez prohlížeče maluje poslepu">
      <div style={{ display: 'flex', gap: 18, alignItems: 'center', flexWrap: 'wrap' }}>
        {loop.map((l, i) => (
          <Reveal key={l} step={step} delay={i * 0.1} style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
            <div className="chip" style={{ fontSize: 30, padding: '16px 26px', background: '#fff' }}>{l}</div>
            <span style={{ fontSize: 40, color: 'var(--dim)' }}>{i < loop.length - 1 ? '→' : '↺'}</span>
          </Reveal>
        ))}
      </div>
      <Reveal step={step} at={1}>
        <div className="grid3" style={{ marginTop: 60 }}>
          <div className="card">
            <div className="h3">Claude in Chrome</div>
            <p className="small">Rozšíření do Chromu. <code className="mono">claude --chrome</code> nebo <code className="mono">/chrome</code>. Kliká, čte konzoli, dělá screenshoty. <b>Tohle dnes používáme.</b></p>
          </div>
          <div className="card">
            <div className="h3">Desktopová appka</div>
            <p className="small">Vestavěný prohlížeč a „Auto-verify“: po každé změně se sám podívá.</p>
          </div>
          <div className="card">
            <div className="h3">Playwright MCP</div>
            <p className="small">Záloha pro WSL a jiné prohlížeče:<br /><code className="mono" style={{ fontSize: 20 }}>claude mcp add playwright -- npx @playwright/mcp@latest</code></p>
          </div>
        </div>
      </Reveal>
    </Slide>
  )
}

/* ------------------------------------------------------------------ */
export function McpSlide({ step }: SlideProps) {
  const plugs = ['🌐 prohlížeč', '🎨 Figma', '🗄️ databáze', '📚 aktuální dokumentace', '🐙 GitHub', '🎫 Jira / Linear']
  return (
    <Slide kicker="MCP v jednom slajdu" title="USB-C pro AI">
      <div className="grid2" style={{ alignItems: 'center' }}>
        <div>
          <p className="body">
            <b>Model Context Protocol</b> je standardní „zásuvka“. Kdokoliv napíše MCP server a Claude (i jiné AI nástroje) dostanou
            nové nástroje.
          </p>
          <Reveal step={step} at={1}>
            <Prompt label="Terminál" style={{ marginTop: 40, fontSize: 24 }}>
              claude mcp add <span className="c">jmeno</span> -- <span className="c">příkaz</span>{'\n'}
              claude mcp add --transport http <span className="c">jmeno URL</span>{'\n'}
              <span className="d"># v Claudovi: /mcp</span>
            </Prompt>
          </Reveal>
          <Reveal step={step} at={2}>
            <p className="small" style={{ marginTop: 28 }}>
              ⚠️ MCP server může číst a dělat hodně věcí. Instaluj jen ty, kterým věříš, stejně jako npm balíčky.
            </p>
          </Reveal>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 18, justifyContent: 'center' }}>
          <div className="card" style={{ width: '100%', textAlign: 'center', background: 'var(--ink)', color: '#fff3e3' }}>
            <div className="h3">🧠 Claude Code</div>
          </div>
          {plugs.map((p, i) => (
            <Reveal key={p} step={step} delay={i * 0.07}>
              <div className="chip" style={{ fontSize: 28, padding: '16px 24px', background: '#fff' }}>{p}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </Slide>
  )
}

/* ------------------------------------------------------------------ */
export function Krok2Slide({ step }: SlideProps) {
  return (
    <Exercise
      step={step}
      krok="Krok 2"
      title="Ze skici do komponent"
      minutes={25}
      checkpoint="krok-2"
      todo={[
        <><code className="mono">/clear</code> (nový úkol, nová hlava)</>,
        <>Skica + design + <b>nejdřív tokeny</b> (prompt v Krocích)</>,
        <><code className="mono">/chrome</code>: screenshot na 375 px, porovnej se skicou, oprav</>,
        <>Bonus: skill <code className="mono">/novy-kun líný poník, co miluje Netflix</code></>,
        <>Commit</>,
      ]}
      done={<>Karta koně vypadá dobře na mobilu a tlačítka přepínají koně.</>}
    />
  )
}

/* ------------------------------------------------------------------ */
export function VerifySlide({ step }: SlideProps) {
  return (
    <Slide kicker="Nejdůležitější tip večera" title="Dej mu způsob, jak si ověřit práci">
      <div className="grid2" style={{ alignItems: 'start' }}>
        <div>
          <p className="body">
            Podle Borise Chernyho, autora Claude Code, to výsledek zlepší <span className="hl">dvakrát až třikrát</span>.
            Agent, který vidí, že test spadl, se opraví sám. Agent bez zpětné vazby jen hádá.
          </p>
          <Reveal step={step} at={1}>
            <ul className="list" style={{ marginTop: 36 }}>
              <li>🧪 testy</li>
              <li>🏗️ build a typy</li>
              <li>🧹 linter</li>
              <li>📸 screenshot vedle skici</li>
            </ul>
          </Reveal>
        </div>
        <Reveal step={step} at={2}>
          <div className="card" style={{ background: 'var(--ink)', color: '#fff3e3' }}>
            <div className="h3">Chtěj důkaz, ne „hotovo!“ ✨</div>
            <p className="body" style={{ marginTop: 20 }}>„Pusť testy a build a ukaž mi celý výstup.“</p>
            <p className="body" style={{ marginTop: 12 }}>„Ukaž mi screenshot na mobilu.“</p>
            <p className="body" style={{ marginTop: 12, color: '#ffb38a' }}>
              A do CLAUDE.md: <i>„Než řekneš hotovo, musí projít build a testy.“</i>
            </p>
          </div>
        </Reveal>
      </div>
    </Slide>
  )
}

/* ------------------------------------------------------------------ */
export function TddSlide({ step }: SlideProps) {
  return (
    <Slide kicker="Testy s AI" title="Test, který nikdy nebyl červený, nic nedokazuje">
      <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
        {[
          ['🔴', 'Napiš test', 'a ukaž, že selže'],
          ['🟢', 'Napiš kód', 'ať test projde'],
          ['🔁', 'Uprav', 'testy pořád zelené'],
        ].map(([e, t, s], i) => (
          <Reveal key={t} step={step} delay={i * 0.12} style={{ flex: 1 }}>
            <div className="card" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 80 }}>{e}</div>
              <div className="h3">{t}</div>
              <div className="small">{s}</div>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal step={step} at={1}>
        <div className="grid2" style={{ marginTop: 56 }}>
          <p className="body">
            Proč? Když AI píše kód i testy naráz, testy často jen potvrdí, co kód dělá. I když je to špatně.
          </p>
          <p className="body">
            A pozor: agenti občas „opraví“ test, aby prošel. Hlídej změny v <code className="mono">*.test.ts</code> zvlášť.
          </p>
        </div>
      </Reveal>
    </Slide>
  )
}

/* ------------------------------------------------------------------ */
export function Krok3Slide({ step }: SlideProps) {
  return (
    <Exercise
      step={step}
      krok="Krok 3"
      title="Swipe, shody a testy"
      minutes={30}
      checkpoint="krok-3"
      todo={[
        <><code className="mono">/clear</code> a plan mode</>,
        <>Tahání karty (motion), tlačítka, šipky, okno „Je to shoda!“, localStorage</>,
        <>Logika do <code className="mono">src/lib/</code>: <b>nejdřív červené testy</b>, pak kód</>,
        <><i>„Pusť testy a build a ukaž mi výstup.“</i></>,
        <>Rychlice: krok 4, obrazovka „Tvoje shody“</>,
      ]}
      done={<>Jde swipovat, vyskočí shoda, testy jsou zelené a po obnovení stránky se nic neztratí.</>}
    />
  )
}
