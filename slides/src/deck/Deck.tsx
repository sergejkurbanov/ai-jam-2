import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import type { SlideDef } from './types'
import { channel, isTyping, nextPos, prevPos, readHash, stepsOf, writeHash, type Msg, type Pos } from './nav'

function useStageScale() {
  const [s, setS] = useState({ scale: 1, portrait: false })
  useLayoutEffect(() => {
    const fit = () =>
      setS({
        scale: Math.min(window.innerWidth / 1920, window.innerHeight / 1080),
        portrait: window.innerHeight > window.innerWidth * 1.1,
      })
    fit()
    window.addEventListener('resize', fit)
    return () => window.removeEventListener('resize', fit)
  }, [])
  return s
}

const touchDevice = typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches

/** Swipe left/right to change slides, except when the finger starts on something interactive. */
function useSwipe(go: (d: 1 | -1) => void) {
  useEffect(() => {
    let start: { x: number; y: number; t: number } | null = null
    const down = (e: TouchEvent) => {
      const el = e.target as HTMLElement
      start =
        e.touches.length === 1 && !el.closest('input,textarea,button,iframe,[data-noswipe]')
          ? { x: e.touches[0].clientX, y: e.touches[0].clientY, t: Date.now() }
          : null
    }
    const up = (e: TouchEvent) => {
      if (!start) return
      const dx = e.changedTouches[0].clientX - start.x
      const dy = e.changedTouches[0].clientY - start.y
      if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5 && Date.now() - start.t < 800) go(dx < 0 ? 1 : -1)
      start = null
    }
    window.addEventListener('touchstart', down, { passive: true })
    window.addEventListener('touchend', up, { passive: true })
    return () => {
      window.removeEventListener('touchstart', down)
      window.removeEventListener('touchend', up)
    }
  }, [go])
}

export function Deck({ slides }: { slides: SlideDef[] }) {
  const [pos, setPos] = useState<Pos>(() => readHash(slides))
  const [notes, setNotes] = useState(false)
  const [help, setHelp] = useState(false)
  const [chrome, setChrome] = useState(true)
  const dir = useRef<1 | -1>(1)
  const { scale, portrait } = useStageScale()

  const go = useCallback(
    (d: 1 | -1) => {
      dir.current = d
      setPos((p) => (d === 1 ? nextPos(slides, p) : prevPos(slides, p)))
    },
    [slides],
  )

  useSwipe(go)

  // keep URL + presenter window in sync
  useEffect(() => {
    writeHash(pos)
    channel?.postMessage({ type: 'state', pos } satisfies Msg)
  }, [pos])

  useEffect(() => {
    const ch = channel
    if (!ch) return
    const onMsg = (e: MessageEvent<Msg>) => {
      const m = e.data
      if (m.type === 'nav') go(m.dir)
      if (m.type === 'goto') setPos(m.pos)
      if (m.type === 'hello') ch.postMessage({ type: 'state', pos } satisfies Msg)
    }
    ch.addEventListener('message', onMsg)
    return () => ch.removeEventListener('message', onMsg)
  }, [go, pos])

  useEffect(() => {
    const onHash = () => {
      if (location.hash.startsWith('#/slides')) setPos(readHash(slides))
    }
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [slides])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      // clickers send PageUp/PageDown; always navigate, even inside inputs
      if (e.key === 'PageDown') { e.preventDefault(); (document.activeElement as HTMLElement)?.blur?.(); go(1); return }
      if (e.key === 'PageUp') { e.preventDefault(); (document.activeElement as HTMLElement)?.blur?.(); go(-1); return }
      if (isTyping(e)) {
        if (e.key === 'Escape') (e.target as HTMLElement).blur()
        return
      }
      if (e.metaKey || e.ctrlKey || e.altKey) return
      switch (e.key) {
        case 'ArrowRight': case 'ArrowDown': case ' ': case 'Enter':
          e.preventDefault(); go(1); break
        case 'ArrowLeft': case 'ArrowUp': case 'Backspace':
          e.preventDefault(); go(-1); break
        case 'Home': setPos({ index: 0, step: 0 }); break
        case 'End': setPos({ index: slides.length - 1, step: 0 }); break
        case 'n': case 'N': setNotes((v) => !v); break
        case 'h': case 'H': setChrome((v) => !v); break
        case '?': setHelp((v) => !v); break
        case 'f': case 'F':
          if (document.fullscreenElement) document.exitFullscreen()
          else document.documentElement.requestFullscreen()
          break
        case 'p': case 'P':
          window.open(location.pathname + '?presenter' + location.hash, 'ai-jam-presenter', 'width=1100,height=760')
          break
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [go, slides.length])

  const slide = slides[pos.index]
  const S = slide.Component
  const total = slides.length

  return (
    <div className="viewport">
      <div className="stage" style={{ transform: `translate(-50%, -50%) scale(${scale})` }}>
        <AnimatePresence initial={false} custom={dir.current}>
          <motion.div
            key={slide.id}
            className="slide-layer"
            custom={dir.current}
            variants={{
              enter: (d: number) => ({ opacity: 0, x: 60 * d }),
              center: { opacity: 1, x: 0 },
              exit: (d: number) => ({ opacity: 0, x: -60 * d }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <S step={pos.step} />
          </motion.div>
        </AnimatePresence>
        {chrome && (
          <>
            <div className="progress" style={{ width: `${((pos.index + (pos.step + 1) / stepsOf(slide)) / total) * 100}%` }} />
            <a className="brand" href="#/">🐴 AI JAM #2 · REACT GIRLS</a>
            {slide.section && <div className="section-tag">{slide.section}</div>}
            <div className="counter">{pos.index + 1} / {total}</div>
          </>
        )}
      </div>
      {touchDevice && (
        <div className="touch-nav">
          <button aria-label="Zpět" onClick={() => go(-1)}>‹</button>
          <span>{pos.index + 1} / {total}</span>
          <button aria-label="Dál" onClick={() => go(1)}>›</button>
        </div>
      )}
      {touchDevice && portrait && (
        <div className="rotate-hint">📱↻ Otoč telefon na šířku, slajdy jsou 16:9.<br />Listuje se tažením do strany nebo šipkami dole.</div>
      )}
      {notes && (
        <div className="notes-overlay">
          <b>{pos.index + 1}. {slide.title}</b> · krok {pos.step + 1}/{stepsOf(slide)}{'\n\n'}{slide.notes}
        </div>
      )}
      {help && (
        <div className="help-overlay" onClick={() => setHelp(false)}>
          <div className="help-panel">
            <div><kbd>→</kbd> / <kbd>mezerník</kbd> / klikátko: dál</div>
            <div><kbd>←</kbd> zpět</div>
            <div><kbd>P</kbd> okno přednášejícího (poznámky + čas)</div>
            <div><kbd>N</kbd> poznámky přes slajd</div>
            <div><kbd>F</kbd> celá obrazovka</div>
            <div><kbd>H</kbd> skrýt lištu a počítadlo</div>
          </div>
        </div>
      )}
    </div>
  )
}
