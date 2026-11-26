import { AnimatePresence, MotionConfig } from 'motion/react'
import { useCallback, useEffect, useState } from 'react'
import { ActionButtons } from './components/ActionButtons'
import { Header } from './components/Header'
import { HorseCard } from './components/HorseCard'
import { MatchModal } from './components/MatchModal'
import { MatchesList } from './components/MatchesList'
import { SwipeCard } from './components/SwipeCard'
import { horses } from './data/horses'
import { useSwipeState } from './hooks/useSwipeState'
import { pageTitle } from './lib/format'
import { countMatches, isMatch, remaining, type Decision } from './lib/swipe'
import type { Horse } from './types'

export default function App() {
  const { state, decide, restart } = useSwipeState()
  const [exitDirection, setExitDirection] = useState(1)
  const [match, setMatch] = useState<Horse | null>(null)
  const [view, setView] = useState<'swipe' | 'matches'>('swipe')
  const [announcement, setAnnouncement] = useState('')
  const closeMatch = useCallback(() => setMatch(null), [])

  const deck = remaining(horses, state)
  const [top, next] = deck
  const matchedHorses = horses.filter((horse) => state.matches.includes(horse.id))

  useEffect(() => {
    document.title = pageTitle(top)
  }, [top])

  function handleDecide(decision: Decision) {
    if (!top || match || view !== 'swipe') return
    setExitDirection(decision === 'like' ? 1 : -1)
    decide(top, decision)
    const matched = isMatch(top, decision)
    if (matched) setMatch(top)
    setAnnouncement(
      decision === 'nope'
        ? `${top.name}: ne, díky.`
        : `${top.name}: líbí se ti.${matched ? ' Je to shoda!' : ''}`,
    )
  }

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === 'ArrowLeft') handleDecide('nope')
      if (event.key === 'ArrowRight') handleDecide('like')
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  })

  return (
    <MotionConfig reducedMotion="user">
      <div className="mx-auto flex h-dvh max-w-md flex-col overflow-hidden">
        <Header
          matchCount={countMatches(state)}
          showingMatches={view === 'matches'}
          onShowMatches={() => setView(view === 'matches' ? 'swipe' : 'matches')}
        />
        {view === 'matches' ? (
          <MatchesList matches={matchedHorses} onBack={() => setView('swipe')} />
        ) : (
          <>
            <main className="relative mx-4 min-h-0 flex-1">
              <h2 className="sr-only">Koně k rozhodnutí: zbývá {deck.length}</h2>
              {next && (
                <div className="absolute inset-0 scale-95 opacity-60" aria-hidden="true">
                  <HorseCard horse={next} />
                </div>
              )}
              <AnimatePresence custom={exitDirection}>
                {top && <SwipeCard key={top.id} horse={top} onDecide={handleDecide} />}
              </AnimatePresence>
              {!top && (
                <div className="grid h-full place-items-center text-center">
                  <div>
                    <p className="text-6xl" aria-hidden="true">
                      🐴💨
                    </p>
                    <h2 className="mt-4 text-3xl font-extrabold">Došli koně!</h2>
                    <p className="mt-2 text-muted">
                      Všechny jsi projela. Seno zatím nikdo nedoplnil.
                    </p>
                    <button
                      type="button"
                      onClick={restart}
                      className="mt-6 rounded-full bg-carrot-dark px-6 py-3 font-bold text-white shadow-button transition hover:bg-carrot focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-ink"
                    >
                      Začít znovu
                    </button>
                  </div>
                </div>
              )}
            </main>
            <ActionButtons
              disabled={!top}
              onNope={() => handleDecide('nope')}
              onLike={() => handleDecide('like')}
            />
          </>
        )}
        <p className="sr-only" aria-live="polite">
          {announcement}
        </p>
        <AnimatePresence>
          {match && <MatchModal horse={match} onClose={closeMatch} />}
        </AnimatePresence>
      </div>
    </MotionConfig>
  )
}
