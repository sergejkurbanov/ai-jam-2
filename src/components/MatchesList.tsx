import type { Horse } from '../types'

type Props = {
  matches: Horse[]
  onBack: () => void
}

export function MatchesList({ matches, onBack }: Props) {
  return (
    <section className="flex min-h-0 flex-1 flex-col px-5 pb-6">
      <button type="button" onClick={onBack} className="self-start font-bold text-muted">
        ← Zpět
      </button>
      <h2 className="mt-4 text-4xl font-extrabold">Tvoje shody</h2>
      {matches.length === 0 ? (
        <div className="mt-10 rounded-card border-2 border-dashed border-hay-200 p-8 text-center">
          <p className="text-5xl">🐴💔</p>
          <p className="mt-4 text-lg font-bold">Zatím žádná shoda…</p>
          <p className="text-muted">Swipuj dál! Někde tam venku je kůň jen pro tebe.</p>
        </div>
      ) : (
        <ul className="mt-6 grid grid-cols-3 gap-4 overflow-y-auto">
          {matches.map((horse) => (
            <li key={horse.id} className="text-center">
              <img
                src={horse.photo}
                className="aspect-square w-full rounded-full border-4 border-white object-cover shadow-button"
              />
              <p className="mt-2 font-bold">{horse.name}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
