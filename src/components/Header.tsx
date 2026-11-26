type Props = {
  matchCount: number
  showingMatches: boolean
  onShowMatches: () => void
}

export function Header({ matchCount, showingMatches, onShowMatches }: Props) {
  return (
    <header className="flex items-center justify-between px-5 py-4">
      <h1 className="text-2xl font-extrabold tracking-tight">
        <span aria-hidden="true">🐴</span> Koníček
      </h1>
      <button
        type="button"
        onClick={onShowMatches}
        aria-pressed={showingMatches}
        className="rounded-full bg-white px-4 py-2 font-bold shadow-button transition hover:-translate-y-0.5 focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-ink aria-pressed:bg-ink aria-pressed:text-white"
      >
        <span aria-hidden="true">💘</span> Shody ({matchCount})
      </button>
    </header>
  )
}
