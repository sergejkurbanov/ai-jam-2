type Props = {
  disabled: boolean
  onNope: () => void
  onLike: () => void
}

const base =
  'grid size-16 place-items-center rounded-full text-3xl shadow-button transition hover:-translate-y-1 active:scale-95 focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-ink disabled:pointer-events-none disabled:opacity-40 sm:size-18'

export function ActionButtons({ disabled, onNope, onLike }: Props) {
  return (
    <div className="py-4 sm:py-6">
      <div className="flex items-center justify-center gap-8">
        <button
          type="button"
          onClick={onNope}
          disabled={disabled}
          aria-label="Ne, díky"
          aria-keyshortcuts="ArrowLeft"
          className={`${base} bg-white text-ink`}
        >
          <span aria-hidden="true">✕</span>
        </button>
        <button
          type="button"
          onClick={onLike}
          disabled={disabled}
          aria-label="Líbí se mi"
          aria-keyshortcuts="ArrowRight"
          className={`${base} bg-rose-dark text-white hover:bg-rose`}
        >
          <span aria-hidden="true">♥</span>
        </button>
      </div>
      <p className="mt-3 hidden text-center text-sm text-muted [@media(pointer:fine)]:block">
        Tip: rozhodovat se dá i šipkami <kbd className="font-bold">←</kbd>{' '}
        <kbd className="font-bold">→</kbd>
      </p>
    </div>
  )
}
