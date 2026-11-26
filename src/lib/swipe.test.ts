import { describe, expect, it } from 'vitest'
import type { Horse } from '../types'
import { decide, initialState, remaining, restart } from './swipe'

const horse = (id: string, likesYou: boolean): Horse => ({
  id,
  name: id,
  age: 5,
  breed: 'Testovací kůň',
  distanceKm: 1,
  likesYou,
  bio: '',
  interests: [],
  photo: '',
})

const bara = horse('bara', true)
const pepik = horse('pepik', false)

describe('decide', () => {
  it('matches when you like a horse that likes you', () => {
    expect(decide(initialState, bara, 'like').matches).toEqual(['bara'])
  })

  it('does not match when the horse does not like you', () => {
    expect(decide(initialState, pepik, 'like').matches).toEqual([])
  })

  it('does not match when you say nope', () => {
    expect(decide(initialState, bara, 'nope').matches).toEqual([])
  })

  it('ignores a second decision about the same horse', () => {
    const once = decide(initialState, bara, 'like')
    expect(decide(once, bara, 'nope')).toBe(once)
  })

  it('never stores the same match twice, even after a restart', () => {
    const state = decide(restart(decide(initialState, bara, 'like')), bara, 'like')
    expect(state.matches).toEqual(['bara'])
  })
})

describe('remaining', () => {
  it('skips horses you already decided about', () => {
    const state = decide(initialState, bara, 'nope')
    expect(remaining([bara, pepik], state)).toEqual([pepik])
  })
})
