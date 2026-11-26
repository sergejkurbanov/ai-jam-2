import { useEffect, useState } from 'react'
import { loadState, saveState } from '../lib/storage'
import { decide, restart, type Decision } from '../lib/swipe'
import type { Horse } from '../types'

export function useSwipeState() {
  const [state, setState] = useState(loadState)

  useEffect(() => saveState(state), [state])

  return {
    state,
    decide: (horse: Horse, decision: Decision) => setState((s) => decide(s, horse, decision)),
    restart: () => setState(restart),
  }
}
