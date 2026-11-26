import instalace from '../../../docs/instalace.md?raw'
import kroky from '../../../docs/kroky.md?raw'
import lektor from '../../../docs/lektor.md?raw'
import tahak from '../../../docs/tahak.md?raw'
import zdroje from '../../../docs/zdroje.md?raw'

export const docs = {
  instalace: { title: 'Instalace', emoji: '🧰', blurb: 'Co si připravit předem (15 min)', md: instalace },
  kroky: { title: 'Kroky', emoji: '🧭', blurb: 'Průvodce s prompty a checkpointy', md: kroky },
  tahak: { title: 'Tahák', emoji: '⌨️', blurb: 'Claude Code na jedné stránce', md: tahak },
  lektor: { title: 'Pro kouče', emoji: '🧑‍🏫', blurb: 'Harmonogram, schované chyby, údržba', md: lektor },
  zdroje: { title: 'Zdroje', emoji: '📚', blurb: 'Rešerše a odkazy', md: zdroje },
} as const

export type DocName = keyof typeof docs
