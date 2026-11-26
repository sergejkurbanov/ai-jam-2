import { motion } from 'motion/react'
import type { SlideProps } from '../deck/types'
import { APP_URL, CLONE, SITE_URL } from '../config'
import { EASE, Horse, Prompt, Qr, Reveal, Slide, Words } from '../components/ui'

/* ------------------------------------------------------------------ */
export function TitleSlide() {
  return (
    <div className="slide" style={{ justifyContent: 'center' }}>
      {[
        ['bara', -6, 1240, 120],
        ['trojan', 5, 1500, 250],
        ['doubek', -3, 1300, 560],
      ].map(([id, r, x, y], i) => (
        <motion.div
          key={id}
          style={{ position: 'absolute', left: x as number, top: y as number }}
          initial={{ opacity: 0, y: 60, rotate: 0 }}
          animate={{ opacity: 1, y: 0, rotate: r as number }}
          transition={{ delay: 0.6 + i * 0.15, duration: 0.7, ease: EASE }}
        >
          <Horse id={id as string} size={250} style={{ position: 'static' }} />
        </motion.div>
      ))}
      <Reveal step={0} delay={0.1}>
        <div className="kicker">React Girls · AI jam #2</div>
      </Reveal>
      <h1 className="h1" style={{ fontSize: 150, maxWidth: 1100 }}>
        <Words text="Ty vedeš," delay={0.2} />
        <br />
        <Words text="AI kóduje." className="carrot" delay={0.4} />
      </h1>
      <Reveal step={0} delay={0.9}>
        <p className="lead" style={{ marginTop: 40, maxWidth: 950 }}>
          Dnes s Claude Code postavíme <b style={{ color: 'var(--ink)' }}>Koníčka</b>: Tinder pro koně. Od prázdného repa po
          nasazenou appku 🐴💘
        </p>
      </Reveal>
      <Reveal step={0} delay={1.2}>
        <div style={{ marginTop: 64, display: 'flex', alignItems: 'center', gap: 18 }}>
          <span style={{ width: 48, height: 4, borderRadius: 2, background: 'var(--carrot)' }} />
          <span style={{ font: '700 34px var(--display)' }}>Sergej Kurbanov</span>
        </div>
      </Reveal>
    </div>
  )
}

/* ------------------------------------------------------------------ */
export function AgendaSlide({ step }: SlideProps) {
  const blocks = [
    ['18:00', 'Úvod', 'Jak funguje agent a proč je kontext všechno', 'pepik'],
    ['18:15', 'Než napíšeš první prompt', 'Pravidla projektu, plán před kódem, CLAUDE.md, hooky', 'doubek'],
    ['19:05', 'Z obrázku do Reactu', 'Skica → komponenty, design tokeny, skills, AI s očima, testy', 'lucka'],
    ['20:15', 'Ship it!', 'Lov chyb, subagenti, přístupnost, mobil a nasazení', 'hvezda'],
  ]
  return (
    <Slide kicker="Dnešní večer" title="Čtyři části, dvě pauzy, jedna appka">
      <div style={{ display: 'grid', gap: 22 }}>
        {blocks.map(([time, title, sub, horse], i) => (
          <Reveal key={time} step={step} delay={i * 0.1}>
            <div className="card" style={{ display: 'flex', alignItems: 'center', gap: 36, padding: '22px 36px' }}>
              <img src={`./kone/${horse}.svg`} alt="" style={{ width: 84, height: 84, borderRadius: '50%', objectFit: 'cover' }} />
              <div className="mono" style={{ fontSize: 30, fontWeight: 700, color: 'var(--muted)', width: 110 }}>{time}</div>
              <div>
                <div className="h3" style={{ fontSize: 42 }}>{title}</div>
                <div className="small" style={{ fontSize: 26 }}>{sub}</div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal step={step} delay={0.5}>
        <p className="body" style={{ marginTop: 36 }}>
          Na konci máš <b>appku online</b> a <b>kód na GitHubu</b>. A hlavně návyky, které si odneseš do práce.
        </p>
      </Reveal>
    </Slide>
  )
}

/* ------------------------------------------------------------------ */
export function DemoSlide() {
  return (
    <div className="slide" style={{ flexDirection: 'row', alignItems: 'center', gap: 120 }}>
      <div style={{ flex: 1 }}>
        <div className="kicker">Tohle dnes postavíme</div>
        <h2 className="h1" style={{ fontSize: 120 }}>
          Koníček <span aria-hidden="true">🐴</span>
        </h2>
        <p className="lead" style={{ marginTop: 32 }}>Najdi svého koníčka.</p>
        <ul className="list" style={{ marginTop: 48 }}>
          <li>👉 swipe doleva, doprava, šipkami</li>
          <li>💘 shoda, když se líbíte oba</li>
          <li>💾 pamatuje si, koho jsi viděla</li>
          <li>📱 mobil, klávesnice, čtečky</li>
          <li>🚀 nasazené na GitHub Pages</li>
        </ul>
      </div>
      <div
        data-noswipe
        style={{
          width: 430, height: 880, borderRadius: 64, padding: 16, background: 'var(--ink)', boxShadow: 'var(--shadow)', flex: '0 0 auto',
        }}
      >
        <iframe
          title="Hotová appka Koníček"
          src={APP_URL}
          style={{ width: '100%', height: '100%', border: 0, borderRadius: 50, background: 'var(--hay)' }}
        />
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
export function HorseTinderSlide({ step }: SlideProps) {
  return (
    <Slide kicker="Proč zrovna koně?" title="„Postav mi Tinder pro koně“">
      <div className="grid2" style={{ alignItems: 'center' }}>
        <div>
          <p className="body">
            Running gag z YouTube kanálu <b>Fireship</b>. Kdykoliv je potřeba ukázat, co umí nový framework nebo AI
            model, staví se <span className="hl">Horse Tinder</span>.
          </p>
          <Reveal step={step} at={1}>
            <p className="body" style={{ marginTop: 32 }}>
              Dneska je to neoficiální benchmark AI nástrojů. A taky ideální workshopová appka: dost malá na jeden večer,
              dost velká na skutečné problémy.
            </p>
          </Reveal>
          <Reveal step={step} at={2}>
            <p className="body" style={{ marginTop: 32 }}>
              Všech 12 koní je nakreslených kódem 🎨. Seznamte se třeba s <b>Trojanem</b>: uvnitř má velké překvapení.
            </p>
          </Reveal>
        </div>
        <div style={{ position: 'relative', height: 640 }}>
          {['bara', 'unicornelius', 'trojan', 'hopik', 'max'].map((id, i) => (
            <Horse key={id} id={id} size={230} rotate={(i - 2) * 6} style={{ left: 40 + i * 110, top: 40 + Math.abs(i - 2) * 40 }} />
          ))}
        </div>
      </div>
    </Slide>
  )
}

/* ------------------------------------------------------------------ */
export function StartSlide({ step }: SlideProps) {
  return (
    <Slide kicker="Začni tady" title="Všechno je na jednom webu">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 80, alignItems: 'start' }}>
        <div style={{ display: 'grid', gap: 28 }}>
          <Prompt label="Terminál" style={{ fontSize: 23 }}>
            {CLONE}
            {'\n'}<span className="d"># pak v appce Claude: Code → Local → Open folder… → konicek</span>
          </Prompt>
          <Reveal step={step} at={1}>
            <div className="card">
              <div className="h3" style={{ fontSize: 40 }}>Na webu najdeš</div>
              <p className="body" style={{ marginTop: 12 }}>
                🎬 tuhle prezentaci · 🧭 <b>Kroky</b>: všechny prompty ke zkopírování · ⌨️ <b>Tahák</b> na Claude Code
              </p>
            </div>
          </Reveal>
          <Reveal step={step} at={2}>
            <div className="card flat" style={{ background: 'var(--hay-2)' }}>
              <div className="h3" style={{ fontSize: 40 }}>🛟 Zasekla ses? Nevadí.</div>
              <p className="body" style={{ marginTop: 12 }}>
                Každý krok má hotovou verzi ve větvi <code className="mono">krok-1</code> až <code className="mono">krok-6</code>.
                Svou práci uložíš stranou a skočíš tam, kde jsme. Bez ptaní, bez stresu.
              </p>
            </div>
          </Reveal>
        </div>
        <Qr url={SITE_URL} size={300} vertical label={SITE_URL.replace('https://', '')} />
      </div>
    </Slide>
  )
}
