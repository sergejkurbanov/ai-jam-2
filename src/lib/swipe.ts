import type { Horse } from '../types'

export type Decision = 'like' | 'nope'

export type SwipeState = {
  /** horse id → what you decided */
  decisions: Record<string, Decision>
  /** ids of horses that liked you back, in the order you matched */
  matches: string[]
}

export const initialState: SwipeState = { decisions: {}, matches: [] }

export function isMatch(horse: Horse, decision: Decision): boolean {
  return decision === 'like' && horse.likesYou
}

/** Records a decision. Deciding about the same horse twice does nothing. */
export function decide(state: SwipeState, horse: Horse, decision: Decision): SwipeState {
  if (state.decisions[horse.id]) return state
  const matched = isMatch(horse, decision) && !state.matches.includes(horse.id)
  return {
    decisions: { ...state.decisions, [horse.id]: decision },
    matches: matched ? [...state.matches, horse.id] : state.matches,
  }
}

/** Horses you haven't decided about yet, in the original order. */
export function remaining(horses: Horse[], state: SwipeState): Horse[] {
  return horses.filter((horse) => !state.decisions[horse.id])
}

/** Start the deck again but keep your matches. */
export function restart(state: SwipeState): SwipeState {
  return { ...state, decisions: {} }
}

/** Number of matches, for the badge in the header. */
export function countMatches(state: SwipeState): number {
  return Object.values(state.decisions).filter((decision) => decision === 'like').length
}
