import { initialState, type SwipeState } from './swipe'

const KEY = 'konicek:swipes'

export function loadState(): SwipeState {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return initialState
    const parsed = JSON.parse(raw) as Partial<SwipeState>
    if (typeof parsed.decisions !== 'object' || !Array.isArray(parsed.matches)) {
      return initialState
    }
    return { decisions: parsed.decisions ?? {}, matches: parsed.matches }
  } catch {
    return initialState
  }
}

export function saveState(state: SwipeState): void {
  try {
    localStorage.setItem(KEY, JSON.stringify(state))
  } catch {
    // private mode or full storage: the app still works, it just forgets
  }
}
