import { motion } from 'motion/react'
import type { SlideProps } from '../deck/types'
import { EASE, Exercise, Reveal, Slide } from '../components/ui'

/* ------------------------------------------------------------------ */
export function AgentLoopSlide({ step }: SlideProps) {
  const tools = ['📖 čte soubory', '✏️ píše kód', '▶️ spouští příkazy', '🌐 kouká do prohlížeče']
  return (
    <Slide kicker="Jak funguje agent" title="Model + nástroje + smyčka">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 80, alignItems: 'center' }}>
        <div style={{ display: 'grid', gap: 28 }}>
          <div className="card" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 64 }}>🙋‍♀️</div>
            <div className="h3">Ty: cíl a kontext</div>
          </div>
          <div style={{ textAlign: 'center', fontSize: 50, color: 'var(--dim)' }}>↓</div>
          <Reveal step={step} at={2}>
            <div className="card" style={{ textAlign: 'center', background: 'var(--hay-2)' }}>
              <div className="h3">Hotovo? Jak to víš?</div>
              <div className="small">testy · build · screenshot · ty</div>
            </div>
          </Reveal>
        </div>
        <div style={{ position: 'relative', height: 640 }}>
          <motion.div
            style={{
              position: 'absolute', inset: 40, borderRadius: '50%', border: '6px dashed var(--hay-3)',
            }}
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 40, ease: 'linear' }}
          />
          <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)', textAlign: 'center' }}>
            <div style={{ fontSize: 90 }}>🧠</div>
            <div className="h3">Claude</div>
            <div className="small">přemýšlí, co dál</div>
          </div>
          {tools.map((t, i) => {
            const a = (i / tools.length) * Math.PI * 2 - Math.PI / 2
            return (
              <div key={t} style={{ position: 'absolute', left: `calc(50% + ${Math.cos(a) * 300}px)`, top: `calc(50% + ${Math.sin(a) * 270}px)`, transform: 'translate(-50%,-50%)' }}>
                <Reveal step={step} at={1} delay={i * 0.12}>
                  <div className="chip" style={{ fontSize: 26, background: '#fff' }}>{t}</div>
                </Reveal>
              </div>
            )
          })}
        </div>
      </div>
    </Slide>
  )
}

/* ------------------------------------------------------------------ */
export function ContextSlide({ step }: SlideProps) {
  const parts = [
    ['Systém', 9, 'var(--muted)'],
    ['CLAUDE.md', 11, 'var(--carrot-dark)'],
    ['Tvoje zprávy', 14, 'var(--rose-dark)'],
    ['Přečtené soubory', 24, 'var(--sky)'],
    ['Výstupy příkazů', 20, 'var(--meadow)'],
  ] as const
  return (
    <Slide kicker="Kontext" title="Co Claude „drží v hlavě“">
      <p className="lead" style={{ maxWidth: 1400 }}>
        Claude si nic nepamatuje mezi sezeními. Ví jen to, co je teď v <b style={{ color: 'var(--ink)' }}>kontextovém okně</b>. A to se plní.
      </p>
      <div style={{ display: 'flex', height: 110, borderRadius: 28, overflow: 'hidden', marginTop: 56, background: '#fff', boxShadow: 'var(--shadow)' }}>
        {parts.map(([label, w, color], i) => (
          <motion.div
            key={label}
            initial={{ width: 0 }}
            animate={{ width: step >= 1 ? `${w}%` : i < 2 ? `${w}%` : 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: i * 0.1 }}
            style={{ background: color, display: 'grid', placeItems: 'center', color: '#fff', font: '700 22px var(--mono)', whiteSpace: 'nowrap', overflow: 'hidden' }}
          >
            {label}
          </motion.div>
        ))}
      </div>
      <div className="grid3" style={{ marginTop: 64 }}>
        <Reveal step={step} at={2}>
          <div className="card"><div className="h3">Plné = horší</div><p className="small">I s miliónem tokenů platí: čím víc balastu, tím víc chyb. Tomu se říká <i>context rot</i>.</p></div>
        </Reveal>
        <Reveal step={step} at={2} delay={0.1}>
          <div className="card"><div className="h3 mono" style={{ fontSize: 40 }}>/context</div><p className="small">Ukáže, čím je kontext zaplněný.</p></div>
        </Reveal>
        <Reveal step={step} at={2} delay={0.2}>
          <div className="card"><div className="h3 mono" style={{ fontSize: 40 }}>/clear</div><p className="small">Nový úkol = čistá hlava. Nejlevnější trik pro lepší výsledky.</p></div>
        </Reveal>
      </div>
    </Slide>
  )
}

/* ------------------------------------------------------------------ */
export function ThreeThingsSlide({ step }: SlideProps) {
  const items = [
    ['🧠', 'Kontext', 'Co Claude ví', 'CLAUDE.md, skica, zadání, správné soubory'],
    ['🗺️', 'Plán', 'Co Claude udělá', 'Než vznikne kód, přečti si plán a oprav ho'],
    ['✅', 'Ověření', 'Jak pozná, že je hotovo', 'Testy, build, screenshot. Důkaz, ne „hotovo!“'],
  ]
  return (
    <Slide kicker="Celý večer v jednom slajdu" title="Tři věci, které dělají rozdíl">
      <div className="grid3" style={{ flex: 1, alignItems: 'stretch' }}>
        {items.map(([emoji, title, sub, body], i) => (
          <Reveal key={title} step={step} at={i} style={{ display: 'flex' }}>
            <div className="card" style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 18 }}>
              <div style={{ fontSize: 96 }}>{emoji}</div>
              <div className="h2" style={{ fontSize: 76 }}>{title}</div>
              <div className="h3 carrot" style={{ fontSize: 36 }}>{sub}</div>
              <p className="body muted" style={{ marginTop: 'auto' }}>{body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Slide>
  )
}

/* ------------------------------------------------------------------ */
export function TourSlide() {
  const keys: [string, string][] = [
    ['Shift+Tab', 'režim: ruční → auto úpravy → plán → auto'],
    ['Esc', 'zastav! (klidně hned, jak jde špatně)'],
    ['Esc Esc', 'vrať se v čase: kód i konverzace'],
    ['@soubor', 'přilož soubor do zprávy'],
    ['!příkaz', 'pusť příkaz v terminálu'],
    ['Ctrl+V', 'vlož obrázek (i na Macu Ctrl!)'],
    ['/model', 'který model mi teď odpovídá'],
  ]
  return (
    <Slide kicker="Claude Code za 60 sekund" title="Sedm kláves, které stačí" style={{ paddingTop: 90 }}>
      <table className="tbl tight">
        <tbody>
          {keys.map(([k, v]) => (
            <tr key={k}>
              <td style={{ width: 300 }}><span className="kbd">{k}</span></td>
              <td>{v}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="small" style={{ marginTop: 12, fontSize: 22 }}>
        Auto režim je od srpna výchozí: Claude dělá věci bez ptaní a hlídá ho bezpečnostní klasifikátor. Na učení
        doporučuju začít v ručním režimu nebo v plánu, ať vidíš, co dělá.
      </p>
    </Slide>
  )
}

export function Krok0Slide({ step }: SlideProps) {
  return (
    <Exercise
      step={step}
      krok="Krok 0"
      title="Rozhlédni se"
      minutes={5}
      checkpoint="main"
      todo={[
        <>Naklonuj repo a spusť <code className="mono">claude</code></>,
        <>Zeptej se: <i>„Co je v téhle složce a co máme postavit?“</i></>,
        <>Vyzkoušej <span className="kbd">Shift+Tab</span> a najdi <b>plan mode</b></>,
        <>Pusť <code className="mono">/context</code> a <code className="mono">!git log</code></>,
      ]}
      done={<>Claude ti vlastními slovy popsal zadání a víš, kde je plánovací režim.</>}
    />
  )
}
