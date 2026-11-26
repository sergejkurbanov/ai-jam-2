import { initialState, type SwipeState } from './swipe'

const KEY = 'konicek:swipes'
const VERSION = 2

type Stored = SwipeState & { version: number }

function isValid(value: unknown): value is Stored {
  const stored = value as Partial<Stored> | null
  return (
    stored?.version === VERSION &&
    typeof stored.decisions === 'object' &&
    stored.decisions !== null &&
    !Array.isArray(stored.decisions) &&
    Array.isArray(stored.matches)
  )
}

export function loadState(): SwipeState {
  try {
    const parsed: unknown = JSON.parse(localStorage.getItem(KEY) ?? 'null')
    if (!isValid(parsed)) return initialState
    return { decisions: parsed.decisions, matches: parsed.matches }
  } catch {
    return initialState
  }
}

export function saveState(state: SwipeState): void {
  try {
    const stored: Stored = { version: VERSION, ...state }
    localStorage.setItem(KEY, JSON.stringify(stored))
  } catch {
    // private mode or full storage: the app still works, it just forgets
  }
}
