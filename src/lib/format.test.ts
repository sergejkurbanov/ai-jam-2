import { describe, expect, it } from 'vitest'
import { formatAge, formatDistance, pageTitle } from './format'

describe('formatDistance', () => {
  it('shows meters under one kilometer', () => {
    expect(formatDistance(0.2)).toBe('200 m')
  })
  it('shows kilometers with Czech thousands separator', () => {
    expect(formatDistance(3)).toBe('3 km')
    expect(formatDistance(1840).replace(/\s/g, ' ')).toBe('1 840 km')
  })
})

describe('formatAge', () => {
  it('groups thousands', () => {
    expect(formatAge(3200).replace(/\s/g, ' ')).toBe('3 200')
  })
})

describe('pageTitle', () => {
  it('falls back to the app name when no horses are left', () => {
    expect(pageTitle(undefined)).toBe('Koníček 🐴')
  })
})
