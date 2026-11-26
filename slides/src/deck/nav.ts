import type { SlideDef } from './types'

export type Pos = { index: number; step: number }

export const channel =
  typeof BroadcastChannel !== 'undefined' ? new BroadcastChannel('ai-jam-2-deck') : null

export type Msg =
  | { type: 'state'; pos: Pos }
  | { type: 'nav'; dir: 1 | -1 }
  | { type: 'goto'; pos: Pos }
  | { type: 'hello' }

export function stepsOf(s: SlideDef) {
  return Math.max(1, s.steps ?? 1)
}

export function nextPos(slides: SlideDef[], p: Pos): Pos {
  if (p.step < stepsOf(slides[p.index]) - 1) return { index: p.index, step: p.step + 1 }
  if (p.index < slides.length - 1) return { index: p.index + 1, step: 0 }
  return p
}

export function prevPos(slides: SlideDef[], p: Pos): Pos {
  if (p.step > 0) return { index: p.index, step: p.step - 1 }
  if (p.index > 0) return { index: p.index - 1, step: stepsOf(slides[p.index - 1]) - 1 }
  return p
}

/** #/slides/12/2 → slide 12, build step 2 */
export function readHash(slides: SlideDef[]): Pos {
  const m = location.hash.match(/^#\/slides\/(\d+)(?:\/(\d+))?/)
  if (!m) return { index: 0, step: 0 }
  const index = Math.min(slides.length - 1, Math.max(0, parseInt(m[1], 10) - 1))
  const step = Math.min(stepsOf(slides[index]) - 1, Math.max(0, parseInt(m[2] ?? '0', 10)))
  return { index, step }
}

export function writeHash(p: Pos) {
  const h = `#/slides/${p.index + 1}${p.step ? '/' + p.step : ''}`
  if (location.hash !== h) history.replaceState(null, '', h)
}

export function isTyping(e: KeyboardEvent) {
  const t = e.target as HTMLElement | null
  if (!t) return false
  return t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable
}
