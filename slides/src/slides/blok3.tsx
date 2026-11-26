import { motion } from 'motion/react'
import type { SlideProps } from '../deck/types'
import { SITE_URL } from '../config'
import { EASE, Exercise, Horse, Prompt, Qr, Reveal, Section, Slide } from '../components/ui'

export function Blok3Slide() {
  return (
    <Section
      n="3"
      horse="hvezda"
      title={<>Ship it!</>}
      sub={<>AI si appku sama proklikne, najde chyby, doladí mobil i přístupnost. Na konci je Koníček online.</>}
    />
  )
}

/* ------------------------------------------------------------------ */
export function AbsolutelyRightSlide({ step }: SlideProps) {
  return (
    <div className="slide center">
      <div className="kicker">Meme večera</div>
      <motion.div
        className="card"
        style={{ maxWidth: 1300, textAlign: 'left', padding: '48px 56px' }}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        <p className="body muted">🙋‍♀️ Tohle tlačítko nefunguje.</p>
        <p className="h3" style={{ marginTop: 18 }}>🤖 You're absolutely right! Opravil jsem to. ✅</p>
        <Reveal step={step} at={1}>
          <p className="body muted" style={{ marginTop: 28 }}>🙋‍♀️ Pořád nefunguje.</p>
          <p className="h3" style={{ marginTop: 18 }}>🤖 You're absolutely right! Teď už to určitě funguje. ✅✅</p>
        </Reveal>
      </motion.div>
      <Reveal step={step} at={2}>
        <p className="lead" style={{ marginTop: 56, maxWidth: 1300 }}>
          Modely rády souhlasí a rády hlásí úspěch. Proto <b style={{ color: 'var(--ink)' }}>důkazy</b>, ne sliby: reprodukce, test, screenshot.
        </p>
      </Reveal>
    </div>
  )
}

/* ------------------------------------------------------------------ */
export function DebugSlide({ step }: SlideProps) {
  const steps = [
    ['Reprodukuj', 'přesně: co udělám, co se stane, co se mělo stát'],
    ['Posbírej důkazy', 'konzole, síť, screenshot, chybová hláška celá'],
    ['Hypotéza', '„proč myslíš, že se to děje?“ (a ať to ověří)'],
    ['Červený test', 'který chybu chytí'],
    ['Oprava', 'nejmenší možná'],
    ['Ověř', 'test zelený, appka v prohlížeči funguje'],
  ]
  return (
    <Slide kicker="Debugging s AI" title="Nejdřív najdi, pak oprav">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
        {steps.map(([t, s], i) => (
          <Reveal key={t} step={step} at={i < 3 ? 0 : 1} delay={(i % 3) * 0.1}>
            <div className="card" style={{ height: 230 }}>
              <div className="mono carrot" style={{ fontSize: 28, fontWeight: 800 }}>{i + 1}</div>
              <div className="h3" style={{ marginTop: 8 }}>{t}</div>
              <div className="small" style={{ marginTop: 8 }}>{s}</div>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal step={step} at={2}>
        <p className="body" style={{ marginTop: 40 }}>
          Když řekneš jen „oprav to“, Claude často opraví <i>příznak</i>, ne <i>příčinu</i>. Dvakrát neúspěšně? <code className="mono">/clear</code> a lepší zadání s tím, co už víš.
        </p>
      </Reveal>
    </Slide>
  )
}

/* ------------------------------------------------------------------ */
export function BugHuntSlide({ step }: SlideProps) {
  return (
    <Exercise
      step={step}
      krok="Krok 5a"
      title="Lov chyb 🐛"
      minutes={15}
      checkpoint="krok-4"
      todo={[
        <>Všechny skočíme na <code className="mono">krok-4</code>. Jsou v něm <b>3 schované chyby</b></>,
        <><i>„Proklikej appku v prohlížeči jako uživatelka, obnov stránku, projeď všechny koně. Sleduj konzoli. <b>Zatím nic neopravuj</b>, sepiš chyby.“</i></>,
        <><i>„Ke každé chybě nejdřív červený test, pak oprava.“</i></>,
      ]}
      done={<>Našla jsi všechny tři chyby, každá má test, který ji hlídá, a testy i build jsou zelené.</>}
    />
  )
}

/* ------------------------------------------------------------------ */
export function SubagentsSlide({ step }: SlideProps) {
  return (
    <Slide kicker="Subagenti" title="Pomocník s vlastní hlavou">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }}>
        <div style={{ position: 'relative', height: 560 }}>
          <div className="card" style={{ position: 'absolute', inset: '0 120px 0 0', background: 'var(--hay-2)' }}>
            <div className="h3">🧠 Tvůj Claude</div>
            <p className="small">celá konverzace, kód, plán…</p>
          </div>
          <Reveal step={step} at={1} style={{ position: 'absolute', right: 0, top: 150, width: 400 }}>
            <div className="card" style={{ background: 'var(--ink)', color: '#fff3e3' }}>
              <div className="h3">♿ a11y-reviewer</div>
              <p className="small" style={{ color: '#d9c7b4' }}>čistý kontext · smí jen číst · vrátí tabulku nálezů</p>
            </div>
          </Reveal>
          <Reveal step={step} at={2} style={{ position: 'absolute', left: 40, bottom: 40, right: 160 }}>
            <div className="chip" style={{ fontSize: 24 }}>↩ zpátky přijde jen shrnutí, ne 40 přečtených souborů</div>
          </Reveal>
        </div>
        <div>
          <Prompt label=".claude/agents/a11y-reviewer.md" style={{ fontSize: 23 }}>
            <span className="d">---</span>{'\n'}
            <span className="c">name:</span> a11y-reviewer{'\n'}
            <span className="c">description:</span> Kontroluje přístupnost{'\n'}
            {'  '}podle WCAG 2.2 AA. Nic neupravuje.{'\n'}
            <span className="c">tools:</span> Read, Grep, Glob{'\n'}
            <span className="c">model:</span> sonnet{'\n'}
            <span className="d">---</span>{'\n'}
            Jsi auditorka přístupnosti…
          </Prompt>
          <Reveal step={step} at={3}>
            <p className="body" style={{ marginTop: 32 }}>
              Proč? <b>Nezávislý pohled.</b> Kdo kód psal, ten v něm chyby nevidí. Platí to pro lidi i pro AI. Proto taky <code className="mono">/code-review</code>.
            </p>
          </Reveal>
        </div>
      </div>
    </Slide>
  )
}

/* ------------------------------------------------------------------ */
export function A11ySlide({ step }: SlideProps) {
  const items = [
    ['⌨️', 'Klávesnice', 'všechno jde bez myši, fokus je vidět'],
    ['🏷️', 'Popisky', 'tlačítko „✕“ potřebuje aria-label'],
    ['🎨', 'Kontrast', 'text aspoň 4,5 : 1 (bílá na oranžové 2,8 ✗)'],
    ['💬', 'Dialogy', 'nativní <dialog>, Esc, vrácení fokusu'],
    ['📣', 'Oznámení', 'aria-live: „Je to shoda!“ i pro čtečku'],
    ['🐢', 'Pohyb', 'respektuj „omezit animace“'],
  ]
  return (
    <Slide kicker="Přístupnost není bonus" title="AI na ni zapomíná. Ty nezapomeň.">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
        {items.map(([e, t, s], i) => (
          <Reveal key={t} step={step} delay={i * 0.07}>
            <div className="card" style={{ display: 'flex', gap: 22, alignItems: 'start' }}>
              <div style={{ fontSize: 56 }}>{e}</div>
              <div>
                <div className="h3" style={{ fontSize: 36 }}>{t}</div>
                <div className="small">{s}</div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal step={step} at={1}>
        <p className="body" style={{ marginTop: 44 }}>
          Od června 2025 platí v EU <b>Akt o přístupnosti</b> (EAA) i pro řadu e-shopů a aplikací. Pravidla dej do CLAUDE.md, kontrolu do linteru (<code className="mono">jsx-a11y</code>) a do subagenta.
        </p>
      </Reveal>
    </Slide>
  )
}

/* ------------------------------------------------------------------ */
export function PolishSlide({ step }: SlideProps) {
  return (
    <Exercise
      step={step}
      krok="Krok 5b"
      title="Přístupnost a mobil"
      minutes={15}
      checkpoint="krok-5"
      todo={[
        <>Vezmi si subagenta: <code className="mono">git checkout origin/krok-5 -- .claude/agents/</code></>,
        <><i>„Pusť subagenta a11y-reviewer a oprav nálezy. Kontrast v tokenech.“</i></>,
        <><i>„Screenshoty na 375, 768 a 1280 px. Projdi appku jen klávesnicí.“</i></>,
        <>Bonus: <code className="mono">/code-review</code></>,
      ]}
      done={<>Appka jde ovládat klávesnicí, tlačítka mají popisky a na mobilu nic nepřetéká.</>}
    />
  )
}

/* ------------------------------------------------------------------ */
export function DeploySlide({ step }: SlideProps) {
  const pipe = ['💻 git push', '🐙 GitHub', '⚙️ Actions: test + build', '🌍 GitHub Pages']
  return (
    <Slide kicker="Nasazení" title="Push a za minutu je to online">
      <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
        {pipe.map((p, i) => (
          <Reveal key={p} step={step} delay={i * 0.12} style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            <div className="card" style={{ padding: '28px 32px' }}><div className="h3" style={{ fontSize: 36 }}>{p}</div></div>
            {i < pipe.length - 1 && <span style={{ fontSize: 50, color: 'var(--dim)' }}>→</span>}
          </Reveal>
        ))}
      </div>
      <Reveal step={step} at={1}>
        <div className="grid2" style={{ marginTop: 60 }}>
          <div>
            <p className="body">Claude zvládne celé: vytvořit repo přes <code className="mono">gh</code>, napsat workflow, zapnout Pages, pushnout a pohlídat, že to doběhlo.</p>
            <p className="body" style={{ marginTop: 24 }}>Na podadrese <code className="mono">/konicek/</code> pozor na cesty: <code className="mono">base: './'</code> ve Vite.</p>
          </div>
          <div className="card" style={{ background: 'var(--hay-2)' }}>
            <div className="h3">🛡️ Auto režim se zeptá</div>
            <p className="small" style={{ marginTop: 10 }}>
              Push, vytvoření repa a nasazení jsou akce „ven ze světa“. Klasifikátor je nechá schválit tebou. A tak to má být.
            </p>
          </div>
        </div>
      </Reveal>
    </Slide>
  )
}

export function Krok6Slide({ step }: SlideProps) {
  return (
    <Exercise
      step={step}
      krok="Krok 6"
      title="Ship it! 🚀"
      minutes={10}
      checkpoint="krok-6"
      todo={[
        <>Prompt na nasazení zkopíruj z Kroků</>,
        <>Schval vytvoření repa a push</>,
        <>Otevři odkaz na mobilu 📱</>,
        <>Pošli ho do Slacku 💘</>,
      ]}
      done={<>Koníček běží na <code className="mono">tvuj-github.github.io/konicek</code>.</>}
    />
  )
}

/* ------------------------------------------------------------------ */
export function HabitsSlide({ step }: SlideProps) {
  const habits = [
    'Dej mu způsob, jak si ověřit práci',
    'Chtěj důkaz, ne „hotovo“',
    'Plán před kódem',
    'Nech se vyzpovídat',
    'Buď konkrétní: soubor, příznak, cíl',
    'Nový úkol = /clear',
    'Zastav ho brzo (Esc)',
    'Malé commity = záchranná síť',
    'Test nejdřív červeně',
    'Co se opakuje → skill, co musí platit → hook',
  ]
  return (
    <Slide kicker="Co si odnést" title="10 návyků">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: 'repeat(5, auto)', gridAutoFlow: 'column', gap: '22px 64px' }}>
        {habits.map((h, i) => (
          <Reveal key={h} step={step} at={i < 5 ? 0 : 1} delay={(i % 5) * 0.06}>
            <div style={{ display: 'flex', gap: 22, alignItems: 'baseline' }}>
              <span className="mono carrot" style={{ fontSize: 34, fontWeight: 800, width: 50 }}>{i + 1}</span>
              <span className="body" style={{ fontSize: 36, fontWeight: 700 }}>{h}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </Slide>
  )
}

/* ------------------------------------------------------------------ */
export function UnderusedSlide({ step }: SlideProps) {
  const items = [
    ['Esc Esc / /rewind', 'vrátit kód i konverzaci o kus zpět. Odvaha zkoušet.'],
    ['Výstupní styl Learning', 'Claude nechá část kódu na tobě. Ideální, když se učíš.'],
    ['/btw', 'rychlá otázka bokem, která nezaplní kontext'],
    ['Claude in Chrome', 'agent, který vidí, co nakódoval'],
    ['Skills a hooky', 'jednou napíšeš, pořád to funguje'],
    ['Paralelní sezení', 'claude -w jmeno: víc úkolů najednou, každý ve vlastní kopii repa'],
  ]
  return (
    <Slide kicker="Co lidi skoro nepoužívají" title="Využíváš ho celého?">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
        {items.map(([t, s], i) => (
          <Reveal key={t} step={step} at={i < 2 ? 0 : i < 4 ? 1 : 2}>
            <div className="card" style={{ padding: '26px 34px' }}>
              <div className="h3 mono" style={{ fontSize: 34 }}>{t}</div>
              <div className="small" style={{ marginTop: 6 }}>{s}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </Slide>
  )
}

/* ------------------------------------------------------------------ */
export function NextSlide({ step }: SlideProps) {
  return (
    <Slide kicker="Co dál" title="Koník potřebuje backend">
      <div className="grid2" style={{ alignItems: 'start' }}>
        <div>
          <p className="body">
            Tlačítko „Napsat zprávu“ zatím jen slibuje. Na <b>AI jamu #3</b> přidáme backend: chat s koňmi, databázi a přihlášení. 🐴💬
          </p>
          <Reveal step={step} at={1}>
            <div className="card" style={{ marginTop: 40 }}>
              <div className="h3">Doma si zkus</div>
              <ul className="list" style={{ marginTop: 16 }}>
                <li>🎯 bonusy z Kroků (undo, mrkev, tmavý režim)</li>
                <li>🧩 vlastní skill pro svou práci</li>
                <li>📖 Tahák a Zdroje na webu</li>
              </ul>
            </div>
          </Reveal>
        </div>
        <Reveal step={step} at={2}>
          <div className="card flat">
            <div className="h3">A co ostatní nástroje?</div>
            <p className="small" style={{ marginTop: 12 }}>
              Principy z dneška platí všude: kontext, plán, ověření.
            </p>
            <ul className="list" style={{ marginTop: 20 }}>
              <li style={{ fontSize: 28 }}><b>Cursor</b> editor s agentem a našeptávačem</li>
              <li style={{ fontSize: 28 }}><b>Codex</b> od OpenAI, v plánech ChatGPT</li>
              <li style={{ fontSize: 28 }}><b>Copilot</b> má free verzi s agent módem ve VS Code</li>
            </ul>
          </div>
        </Reveal>
      </div>
    </Slide>
  )
}

/* ------------------------------------------------------------------ */
export function ThanksSlide() {
  return (
    <div className="slide" style={{ justifyContent: 'center' }}>
      <Horse id="bara" size={300} rotate={-6} style={{ position: 'absolute', right: 560, top: 140 }} />
      <Horse id="trojan" size={300} rotate={5} style={{ position: 'absolute', right: 170, top: 240 }} />
      <div className="kicker">To je všechno, přátelé</div>
      <h2 className="h1" style={{ fontSize: 170 }}>Íhahá! 💘</h2>
      <p className="lead" style={{ marginTop: 32, maxWidth: 900 }}>
        Díky! Prosím vyplň zpětnou vazbu, podle ní stavíme AI jam #3.
      </p>
      <div style={{ marginTop: 64 }}>
        <Qr url={SITE_URL} size={220} label={SITE_URL.replace('https://', '')} />
      </div>
    </div>
  )
}
