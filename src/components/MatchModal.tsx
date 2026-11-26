import { motion } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import type { Horse } from '../types'

type Props = {
  horse: Horse
  onClose: () => void
}

/** Native <dialog> + showModal(): focus trap, Escape and an inert page behind it for free. */
export function MatchModal({ horse, onClose }: Props) {
  const [chatTeaser, setChatTeaser] = useState(false)
  const dialog = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const element = dialog.current
    element?.showModal()
    return () => element?.close()
  }, [])

  return (
    <motion.dialog
      ref={dialog}
      aria-labelledby="match-title"
      onCancel={(event) => {
        event.preventDefault()
        onClose()
      }}
      className="m-auto w-[calc(100%-3rem)] max-w-sm rounded-card bg-hay-50 p-8 text-center text-ink shadow-card backdrop:bg-ink/70"
      initial={{ opacity: 0, scale: 0.8, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <h2 id="match-title" className="text-4xl font-extrabold text-rose-dark">
        Je to shoda! <span aria-hidden="true">💘</span>
      </h2>
      <div className="my-6 flex justify-center" aria-hidden="true">
        <span className="grid size-24 place-items-center rounded-full border-4 border-white bg-hay-200 text-5xl shadow-button">
          🙋‍♀️
        </span>
        <img
          src={horse.photo}
          alt=""
          className="-ml-4 size-24 rounded-full border-4 border-white object-cover shadow-button"
        />
      </div>
      <p className="text-lg">Ty a {horse.name} se máte rádi.</p>
      <button
        type="button"
        onClick={() => setChatTeaser(true)}
        className="mt-6 w-full rounded-full bg-carrot-dark px-6 py-3 text-lg font-bold text-white shadow-button transition hover:bg-carrot focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-ink"
      >
        Napsat zprávu
      </button>
      <p className="mt-3 min-h-5 text-sm text-muted" aria-live="polite">
        {chatTeaser && 'Chat přijde v AI jamu #3, až budeme mít backend 😉'}
      </p>
      <button
        type="button"
        onClick={onClose}
        className="mt-1 w-full rounded-full px-6 py-2 font-bold underline underline-offset-4 focus-visible:outline-4 focus-visible:outline-ink"
      >
        Hledat dál
      </button>
    </motion.dialog>
  )
}
