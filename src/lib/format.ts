import type { Horse } from '../types'

const number = new Intl.NumberFormat('cs-CZ', { maximumFractionDigits: 1 })

/** 0.2 → "200 m", 3 → "3 km", 1840 → "1 840 km" */
export function formatDistance(km: number): string {
  if (km < 1) return `${Math.round(km * 1000)} m`
  return `${number.format(km)} km`
}

/** 3200 → "3 200" */
export function formatAge(age: number): string {
  return number.format(age)
}

/** Browser tab title: the horse on top of the deck, or just the app name when the deck is empty. */
export function pageTitle(top: Horse | undefined): string {
  return top ? `${top.name} · Koníček 🐴` : 'Koníček 🐴'
}
