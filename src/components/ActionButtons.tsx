type Props = {
  onNope: () => void
  onLike: () => void
}

export function ActionButtons({ onNope, onLike }: Props) {
  return (
    <div className="flex items-center justify-center gap-8 py-6">
      <button
        type="button"
        onClick={onNope}
        className="grid size-18 place-items-center rounded-full bg-white text-3xl text-ink shadow-button transition hover:-translate-y-1 active:scale-95"
      >
        ✕
      </button>
      <button
        type="button"
        onClick={onLike}
        className="grid size-18 place-items-center rounded-full bg-rose text-3xl text-white shadow-button transition hover:-translate-y-1 hover:bg-rose-dark active:scale-95"
      >
        ♥
      </button>
    </div>
  )
}
