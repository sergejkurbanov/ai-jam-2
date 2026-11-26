import { useEffect, useState } from 'react'
import type { SlideDef } from './types'
import { channel, readHash, stepsOf, type Msg, type Pos } from './nav'

function fmt(ms: number) {
  const s = Math.max(0, Math.floor(ms / 1000))
  return `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`
}

export function Presenter({ slides }: { slides: SlideDef[] }) {
  const [pos, setPos] = useState<Pos>(() => readHash(slides))
  const [start, setStart] = useState<number | null>(null)
  const [now, setNow] = useState(Date.now())

  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 500)
    return () => clearInterval(t)
  }, [])

  useEffect(() => {
    const ch = channel
    if (!ch) return
    const onMsg = (e: MessageEvent<Msg>) => {
      if (e.data.type === 'state') setPos(e.data.pos)
    }
    ch.addEventListener('message', onMsg)
    ch.postMessage({ type: 'hello' } satisfies Msg)
    return () => ch.removeEventListener('message', onMsg)
  }, [])

  const nav = (dir: 1 | -1) => {
    if (start === null) setStart(Date.now())
    channel?.postMessage({ type: 'nav', dir } satisfies Msg)
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (['ArrowRight', 'ArrowDown', ' ', 'PageDown', 'Enter'].includes(e.key)) { e.preventDefault(); nav(1) }
      if (['ArrowLeft', 'ArrowUp', 'PageUp', 'Backspace'].includes(e.key)) { e.preventDefault(); nav(-1) }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  })

  const slide = slides[pos.index]
  const next = slides[pos.index + 1]
  // planned time up to the end of the current slide
  const planned = slides.slice(0, pos.index + 1).reduce((a, s) => a + (s.minutes ?? 0.6), 0)
  const total = slides.reduce((a, s) => a + (s.minutes ?? 0.6), 0)
  const elapsed = start ? now - start : 0

  return (
    <div className="presenter">
      <main>
        <div className="p-label">Slajd {pos.index + 1} / {slides.length} · krok {pos.step + 1} / {stepsOf(slide)}</div>
        <div className="p-title">{slide.title}</div>
        <div className="p-notes">{slide.notes}</div>
      </main>
      <aside>
        <div>
          <div className="p-label">Uplynulo</div>
          <div className="p-big">{fmt(elapsed)}</div>
          <div className="small">plán: ~{planned.toFixed(1)} z {total.toFixed(0)} min</div>
          <button style={{ marginTop: 12, width: '100%' }} onClick={() => setStart(Date.now())}>
            {start ? 'Znovu od nuly' : 'Spustit čas'}
          </button>
        </div>
        <div>
          <div className="p-label">Hodiny</div>
          <div className="p-big" style={{ fontSize: 34 }}>{new Date(now).toLocaleTimeString('cs-CZ', { hour: '2-digit', minute: '2-digit' })}</div>
        </div>
        <div>
          <div className="p-label">Další</div>
          <div style={{ font: '600 24px var(--display)', marginTop: 8 }}>
            {pos.step < stepsOf(slide) - 1 ? `(krok ${pos.step + 2} na tomhle slajdu)` : next ? next.title : 'konec'}
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginTop: 'auto' }}>
          <button onClick={() => nav(-1)}>← Zpět</button>
          <button onClick={() => nav(1)}>Další →</button>
        </div>
      </aside>
    </div>
  )
}
