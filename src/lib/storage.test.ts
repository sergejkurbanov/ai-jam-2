import { beforeEach, describe, expect, it, vi } from 'vitest'
import { loadState, saveState } from './storage'
import type { SwipeState } from './swipe'

function memoryStorage(): Storage {
  const data = new Map<string, string>()
  return {
    get length() {
      return data.size
    },
    clear: () => data.clear(),
    getItem: (key) => data.get(key) ?? null,
    key: (index) => [...data.keys()][index] ?? null,
    removeItem: (key) => void data.delete(key),
    setItem: (key, value) => void data.set(key, String(value)),
  }
}

beforeEach(() => {
  vi.stubGlobal('localStorage', memoryStorage())
})

describe('storage', () => {
  it('survives a page reload (save → load gives the same state)', () => {
    const state: SwipeState = { decisions: { bara: 'like', pepik: 'nope' }, matches: ['bara'] }
    saveState(state)
    expect(loadState()).toEqual(state)
  })

  it('starts fresh when the stored data is broken', () => {
    localStorage.setItem('konicek:swipes', '{ not json')
    expect(loadState()).toEqual({ decisions: {}, matches: [] })
  })
})
