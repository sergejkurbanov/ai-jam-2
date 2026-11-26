import { useState } from 'react'
import { ActionButtons } from './components/ActionButtons'
import { Header } from './components/Header'
import { HorseCard } from './components/HorseCard'
import { horses } from './data/horses'

export default function App() {
  const [index, setIndex] = useState(0)
  const horse = horses[index]
  const next = () => setIndex((i) => i + 1)

  return (
    <div className="mx-auto flex h-dvh max-w-md flex-col">
      <Header matchCount={0} />
      <main className="relative mx-4 min-h-0 flex-1">
        {horse ? (
          <HorseCard key={horse.id} horse={horse} />
        ) : (
          <p className="grid h-full place-items-center text-xl font-bold">Došli koně! 🐴</p>
        )}
      </main>
      <ActionButtons onNope={next} onLike={next} />
    </div>
  )
}
