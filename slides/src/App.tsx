import { useEffect, useState } from 'react'
import { Deck } from './deck/Deck'
import { Presenter } from './deck/Presenter'
import { slides } from './slides'
import { DocPage } from './site/DocPage'
import { docs, type DocName } from './site/docs'
import { Home } from './site/Home'

function useHash() {
  const [hash, setHash] = useState(location.hash)
  useEffect(() => {
    const on = () => setHash(location.hash)
    window.addEventListener('hashchange', on)
    return () => window.removeEventListener('hashchange', on)
  }, [])
  return hash
}

export function App() {
  const hash = useHash()
  const presenter = new URLSearchParams(location.search).has('presenter')
  const isDeck = presenter || hash.startsWith('#/slides')

  useEffect(() => {
    document.body.classList.toggle('deck-body', isDeck)
    if (isDeck) document.title = 'AI jam #2 · Koníček 🐴'
  }, [isDeck])

  if (presenter) return <Presenter slides={slides} />
  if (isDeck) return <Deck slides={slides} />

  const doc = hash.match(/^#\/doc\/([\w-]+)(?:\/(.+))?/)
  if (doc && doc[1] in docs) return <DocPage name={doc[1] as DocName} anchor={doc[2]} />
  return <Home />
}
