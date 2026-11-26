import { useEffect, useState, type CSSProperties, type ReactNode } from 'react'
import { motion } from 'motion/react'
import QRCode from 'qrcode'

export const EASE = [0.2, 0.8, 0.2, 1] as const

/** Fades children in once the slide reaches build step `at`. */
export function Reveal({
  at = 0, step, children, y = 24, delay = 0, style, className,
}: {
  at?: number; step: number; children: ReactNode; y?: number; delay?: number; style?: CSSProperties; className?: string
}) {
  const show = step >= at
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, y }}
      animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.55, ease: EASE, delay: show ? delay : 0 }}
    >
      {children}
    </motion.div>
  )
}

/** Staggered word-by-word entrance for big headlines. */
export function Words({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) {
  return (
    <span>
      {text.split(' ').map((w, i) => (
        <motion.span
          key={i}
          className={className}
          style={{ display: 'inline-block', marginRight: '0.25em' }}
          initial={{ opacity: 0, y: 36, rotate: 3 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: delay + i * 0.06 }}
        >
          {w}
        </motion.span>
      ))}
    </span>
  )
}

/** Standard slide skeleton: kicker + title + content. */
export function Slide({
  kicker, title, children, center, style,
}: {
  kicker?: ReactNode; title?: ReactNode; children?: ReactNode; center?: boolean; style?: CSSProperties
}) {
  return (
    <div className={'slide' + (center ? ' center' : '')} style={style}>
      {kicker && <div className="kicker">{kicker}</div>}
      {title && <h2 className="h2" style={{ marginBottom: 48 }}>{title}</h2>}
      {children}
    </div>
  )
}

/** Dark box for prompts / code. Use <span className="c"> for accents, "d" for dim. */
export function Prompt({ children, label = 'Prompt', style }: { children: ReactNode; label?: string; style?: CSSProperties }) {
  return (
    <div className="prompt" style={style}>
      {label && <span className="label">{label}</span>}
      {children}
    </div>
  )
}

export function Horse({ id, size = 260, style, rotate = 0 }: { id: string; size?: number; style?: CSSProperties; rotate?: number }) {
  return (
    <img
      className="horse-deco"
      src={`./kone/${id}.svg`}
      alt=""
      width={size}
      height={size * (4 / 3)}
      style={{ width: size, height: size * (4 / 3), objectFit: 'cover', transform: `rotate(${rotate}deg)`, ...style }}
    />
  )
}

export function Qr({ url, size = 220, label, vertical }: { url: string; size?: number; label?: string; vertical?: boolean }) {
  const [svg, setSvg] = useState('')
  useEffect(() => {
    QRCode.toString(url, { type: 'svg', margin: 0, color: { dark: '#2b1d14', light: '#ffffff' } }).then(setSvg)
  }, [url])
  return (
    <div style={{ display: 'flex', flexDirection: vertical ? 'column' : 'row', alignItems: 'center', gap: 24 }}>
      <div style={{ background: '#fff', padding: 14, borderRadius: 22, boxShadow: 'var(--shadow)', lineHeight: 0 }}>
        <div style={{ width: size, height: size }} dangerouslySetInnerHTML={{ __html: svg }} />
      </div>
      {label && <div className="mono" style={{ fontSize: vertical ? 24 : Math.max(22, size * 0.12), fontWeight: 700 }}>{label}</div>}
    </div>
  )
}

/** "Teď ty!" exercise slide body: steps on the left, done-when + checkpoint on the right. */
export function Exercise({
  step, krok, title, minutes, todo, done, checkpoint,
}: {
  step: number; krok: string; title: string; minutes: number
  todo: ReactNode[]; done: ReactNode; checkpoint: string
}) {
  return (
    <div className="slide">
      <div className="kicker">Teď ty! · {krok} · ~{minutes} min</div>
      <h2 className="h2" style={{ marginBottom: 44 }}>{title}</h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1.35fr 1fr', gap: 56, flex: 1, minHeight: 0 }}>
        <ol className="list">
          {todo.map((t, i) => (
            <Reveal key={i} step={step} delay={i * 0.08}>
              <li><span className="n">{i + 1}</span><span>{t}</span></li>
            </Reveal>
          ))}
        </ol>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
          <div className="card">
            <div className="kicker" style={{ color: 'var(--meadow)', marginBottom: 16 }}>✅ Hotovo, když</div>
            <div className="body">{done}</div>
          </div>
          <div className="card flat" style={{ background: 'var(--hay-2)' }}>
            <div className="kicker" style={{ marginBottom: 16 }}>🛟 Zasekla ses?</div>
            <div className="body">Průvodce s prompty: <b>web → Kroky</b></div>
            <div className="mono" style={{ fontSize: 26, marginTop: 14, fontWeight: 700 }}>git reset --hard origin/{checkpoint}</div>
            <div className="small" style={{ marginTop: 6 }}>(svou práci si nejdřív ulož, viz Kroky)</div>
          </div>
        </div>
      </div>
    </div>
  )
}

/** Big section divider. */
export function Section({ n, title, sub, horse }: { n: string; title: ReactNode; sub: ReactNode; horse: string }) {
  return (
    <div className="slide" style={{ justifyContent: 'center' }}>
      <Horse id={horse} size={420} rotate={4} style={{ position: 'absolute', right: 170, top: 180 }} />
      <div className="kicker">Blok {n}</div>
      <h2 className="h1" style={{ maxWidth: 1150 }}>{title}</h2>
      <p className="lead" style={{ marginTop: 40, maxWidth: 1000 }}>{sub}</p>
    </div>
  )
}
