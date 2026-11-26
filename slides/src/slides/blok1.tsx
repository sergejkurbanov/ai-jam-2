import type { SlideProps } from '../deck/types'
import { Exercise, Prompt, Reveal, Section, Slide } from '../components/ui'

export function Blok1Slide() {
  return (
    <Section
      n="1"
      horse="doubek"
      title={<>Než napíšeš první prompt</>}
      sub={<>Naučíme AI tvůj projekt, ať přestane vymýšlet vlastní konvence a píše kód, jaký chceš vidět v code review.</>}
    />
  )
}

/* ------------------------------------------------------------------ */
export function NewColleagueSlide({ step }: SlideProps) {
  return (
    <Slide kicker="Proč AI vymýšlí vlastní konvence" title="Každý den je pro Clauda první den v práci">
      <div className="grid2">
        <Reveal step={step} at={0}>
          <div className="card" style={{ height: '100%' }}>
            <div className="h3">Nová kolegyně 👩‍💻</div>
            <ul className="list" style={{ marginTop: 24 }}>
              <li>📚 dostane onboarding</li>
              <li>👀 kouká, jak to dělají ostatní</li>
              <li>🙋‍♀️ ptá se, když neví</li>
              <li>🧠 za měsíc to umí sama</li>
            </ul>
          </div>
        </Reveal>
        <Reveal step={step} at={1}>
          <div className="card" style={{ height: '100%', background: 'var(--ink)', color: '#fff3e3' }}>
            <div className="h3">Claude 🤖</div>
            <ul className="list" style={{ marginTop: 24 }}>
              <li>📚 onboarding = <b>CLAUDE.md</b></li>
              <li>👀 kouká, jen když mu řekneš kam</li>
              <li>🙋‍♀️ ptá se, jen když ho o to požádáš</li>
              <li>🧠 zítra ráno zapomene všechno</li>
            </ul>
          </div>
        </Reveal>
      </div>
      <Reveal step={step} at={2}>
        <p className="body" style={{ marginTop: 40 }}>
          Když mu konvence neřekneš, vezme ty <span className="hl">nejprůměrnější z internetu</span>. Ne ty vaše.
        </p>
      </Reveal>
    </Slide>
  )
}

/* ------------------------------------------------------------------ */
export function InterviewSlide({ step }: SlideProps) {
  return (
    <Slide kicker="Trik č. 1" title="Nech se vyzpovídat">
      <div className="grid2" style={{ alignItems: 'start' }}>
        <div>
          <p className="body">
            Místo dlouhého zadání, na které stejně půlku zapomeneš, ať se Claude ptá tebe. Jednu otázku po druhé.
          </p>
          <Reveal step={step} at={1}>
            <p className="body" style={{ marginTop: 32 }}>
              Na konci ať to sepíše do <code className="mono">SPEC.md</code>. To je tvůj kontext pro další krok.
            </p>
          </Reveal>
          <Reveal step={step} at={2}>
            <p className="small" style={{ marginTop: 32 }}>
              Technika, kterou proslavil Harper Reed: brainstorm → specifikace → plán → kód.
            </p>
          </Reveal>
        </div>
        <Prompt>
          Přečti si <span className="c">@podklady/brief.md</span> a prohlédni si <span className="c">@podklady/skica.png</span>.{'\n'}
          Chystáme se založit projekt.{'\n\n'}
          Než cokoliv navrhneš, <span className="c">polož mi otázky</span>, které k tomu potřebuješ vědět.{'\n'}
          <span className="c">Vždy jen jednu najednou.</span>
        </Prompt>
      </div>
    </Slide>
  )
}

/* ------------------------------------------------------------------ */
export function PlanSlide({ step }: SlideProps) {
  const phases = [
    ['🔎', 'Prozkoumej', 'ať si přečte, co je potřeba'],
    ['🗺️', 'Naplánuj', 'plán si přečti a oprav'],
    ['🛠️', 'Naprogramuj', 'po malých krocích'],
    ['📦', 'Commitni', 'záchytný bod'],
  ]
  return (
    <Slide kicker="Trik č. 2" title="Plán před kódem">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 28 }}>
        {phases.map(([e, t, s], i) => (
          <Reveal key={t} step={step} delay={i * 0.1}>
            <div className="card" style={{ textAlign: 'center', background: i === 1 ? 'var(--ink)' : undefined, color: i === 1 ? '#fff3e3' : undefined }}>
              <div style={{ fontSize: 72 }}>{e}</div>
              <div className="h3">{t}</div>
              <div className="small" style={{ color: i === 1 ? '#d9c7b4' : undefined }}>{s}</div>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal step={step} at={1}>
        <div className="grid2" style={{ marginTop: 56 }}>
          <div>
            <div className="h3">Plan mode</div>
            <p className="body" style={{ marginTop: 12 }}>
              Přepínač režimů pod polem pro zprávu → <b>Plan</b> (<span className="kbd">⌘⇧M</span>).
              Claude jen čte a přemýšlí, nic nemění.
            </p>
          </div>
          <div>
            <div className="h3">Proč?</div>
            <p className="body" style={{ marginTop: 12 }}>
              Opravit plán stojí jednu větu. Opravit 400 řádků kódu stojí večer. A tokeny.
            </p>
          </div>
        </div>
      </Reveal>
    </Slide>
  )
}

/* ------------------------------------------------------------------ */
export function ClaudeMdSlide({ step }: SlideProps) {
  return (
    <Slide kicker="Paměť projektu" title="CLAUDE.md">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 64 }}>
        <div style={{ display: 'grid', gap: 28, alignContent: 'start' }}>
          <div className="card">
            <div className="h3 meadow">✓ Patří tam</div>
            <p className="body" style={{ marginTop: 10 }}>příkazy (build, test) · pravidla týmu · záludnosti · co jsi musela opravit dvakrát</p>
          </div>
          <Reveal step={step} at={1}>
            <div className="card">
              <div className="h3 rose">✗ Nepatří tam</div>
              <p className="body" style={{ marginTop: 10 }}>
                popis složek (to si přečte) · romány · <span className="mono">DŮLEŽITÉ!!!</span> velkými písmeny
                (dnešní modely to pak přehánějí)
              </p>
            </div>
          </Reveal>
          <Reveal step={step} at={2}>
            <p className="body">
              <code className="mono">/init</code> napíše první verzi. Pak ji zkrať a doplň. Drž pod ~200 řádků, načítá se do každé konverzace.
            </p>
          </Reveal>
        </div>
        <Prompt label="CLAUDE.md (Koníček)" style={{ fontSize: 23 }}>
          <span className="c"># Koníček 🐴</span>{'\n'}
          Tinder pro koně. Zadání: <span className="c">@podklady/brief.md</span>{'\n\n'}
          <span className="c">## Příkazy</span>{'\n'}
          - `npm run dev` · `npm test` · `npm run build`{'\n\n'}
          <span className="c">## Pravidla</span>{'\n'}
          - jedna komponenta na soubor v src/components/{'\n'}
          - logika bez Reactu do src/lib/ a s testem{'\n'}
          - texty česky a s humorem, kód anglicky{'\n'}
          - barvy a fonty jen z design tokenů{'\n'}
          - nové závislosti jen po domluvě{'\n'}
          - <span className="c">než řekneš „hotovo“, musí projít</span>{'\n'}
          {'  '}<span className="c">npm run build a npm test</span>
        </Prompt>
      </div>
    </Slide>
  )
}

/* ------------------------------------------------------------------ */
export function WhereSlide({ step }: SlideProps) {
  const rows: [string, string, string][] = [
    ['CLAUDE.md', 'pravidla, která platí vždy', 'vždy v kontextu'],
    ['.claude/rules/*.md', 'pravidla jen pro některé soubory', 'když sáhne na ty soubory'],
    ['.claude/skills/', 'návod na opakovaný úkol', 'když ho potřebuje (nebo /jméno)'],
    ['.claude/agents/', 'pomocník s vlastní hlavou', 'když ho zavolá'],
    ['hooks', 'co musí proběhnout pokaždé', 'vždy, automaticky'],
    ['MCP', 'nové nástroje: prohlížeč, Figma, DB', 'když je použije'],
  ]
  return (
    <Slide kicker="Ptaly jste se minule" title="Kam s čím?">
      <div style={{ display: 'grid', gap: 12 }}>
        <div className="row3 head"><span>Soubor</span><span>Co tam dát</span><span>Kdy se načte</span></div>
        {rows.map(([a, b, c], i) => (
          <Reveal key={a} step={step} at={i < 2 ? 0 : i < 4 ? 1 : 2} y={12}>
            <div className="row3"><span className="mono">{a}</span><span>{b}</span><span className="muted">{c}</span></div>
          </Reveal>
        ))}
      </div>
      <p className="small" style={{ marginTop: 20 }}>
        Máš v projektu <code className="mono">AGENTS.md</code> pro jiné nástroje? Claude ho přečte taky. Nebo do CLAUDE.md dej řádek <code className="mono">@AGENTS.md</code>.
      </p>
    </Slide>
  )
}

/* ------------------------------------------------------------------ */
export function HookSlide({ step }: SlideProps) {
  return (
    <Slide kicker="Trik č. 3" title="CLAUDE.md je prosba. Hook je zákon.">
      <div className="grid2" style={{ alignItems: 'start' }}>
        <div>
          <p className="body">
            „Formátuj kód Prettierem“ v CLAUDE.md Claude <i>většinou</i> dodrží. Hook proběhne <b>vždycky</b>: je to příkaz, který
            spustí Claude Code, ne model.
          </p>
          <Reveal step={step} at={1}>
            <ul className="list" style={{ marginTop: 36 }}>
              <li>🎨 po úpravě souboru: Prettier, ESLint</li>
              <li>🚫 před příkazem: zakázat čtení <code className="mono">.env</code></li>
              <li>🔔 když skončí: upozornění na ploše</li>
            </ul>
          </Reveal>
        </div>
        <Prompt label=".claude/settings.json" style={{ fontSize: 24 }}>
          {'{\n  "hooks": {\n    "'}<span className="c">PostToolUse</span>{'": [{\n      "matcher": "'}<span className="c">Edit|Write</span>{'",\n      "hooks": [{\n        "type": "command",\n        "command": "'}<span className="c">node .claude/hooks/format.mjs</span>{'"\n      }]\n    }]\n  }\n}'}
        </Prompt>
      </div>
    </Slide>
  )
}

/* ------------------------------------------------------------------ */
export function Krok1Slide({ step }: SlideProps) {
  return (
    <Exercise
      step={step}
      krok="Krok 1"
      title="Založ projekt a nauč ho Clauda"
      minutes={25}
      checkpoint="krok-1"
      todo={[
        <>V režimu Plan: <i>„polož mi otázky, jednu po druhé“</i></>,
        <>Nech si naplánovat Vite + React + TS + Tailwind + Vitest. <b>Přečti plán</b>, pak schval</>,
        <><code className="mono">/init</code> a doplň pravidla do CLAUDE.md</>,
        <>Hook: Prettier po každé úpravě</>,
        <><i>„Commitni to.“</i></>,
      ]}
      done={<><code className="mono">npm run dev</code> ukáže „Koníček 🐴“, máš CLAUDE.md a první commit.</>}
    />
  )
}
