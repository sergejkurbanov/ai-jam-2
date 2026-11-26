type Props = {
  matchCount: number
  onShowMatches: () => void
}

export function Header({ matchCount, onShowMatches }: Props) {
  return (
    <header className="flex items-center justify-between px-5 py-4">
      <h1 className="text-2xl font-extrabold tracking-tight">
        <span aria-hidden="true">🐴</span> Koníček
      </h1>
      <button
        type="button"
        onClick={onShowMatches}
        className="rounded-full bg-white px-4 py-2 font-bold shadow-button transition hover:-translate-y-0.5"
      >
        <span aria-hidden="true">💘</span> Shody ({matchCount})
      </button>
    </header>
  )
}
