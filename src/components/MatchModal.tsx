import { motion } from 'motion/react'
import { useState } from 'react'
import type { Horse } from '../types'

type Props = {
  horse: Horse
  onClose: () => void
}

export function MatchModal({ horse, onClose }: Props) {
  const [chatTeaser, setChatTeaser] = useState(false)

  return (
    <motion.div
      className="fixed inset-0 z-10 grid place-items-center bg-ink/70 p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        role="dialog"
        aria-labelledby="match-title"
        className="w-full max-w-sm rounded-card bg-hay-50 p-8 text-center shadow-card"
        initial={{ scale: 0.8, y: 40 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <h2 id="match-title" className="text-4xl font-extrabold text-rose">
          Je to shoda! <span aria-hidden="true">💘</span>
        </h2>
        <div className="my-6 flex justify-center">
          <span className="grid size-24 place-items-center rounded-full border-4 border-white bg-hay-200 text-5xl shadow-button">
            <span aria-hidden="true">🙋‍♀️</span>
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
          className="mt-6 w-full rounded-full bg-carrot px-6 py-3 text-lg font-bold text-white shadow-button transition hover:bg-carrot-dark"
        >
          Napsat zprávu
        </button>
        {chatTeaser && (
          <p className="mt-3 text-sm text-muted">
            Chat přijde v AI jamu #3, až budeme mít backend 😉
          </p>
        )}
        <button
          type="button"
          onClick={onClose}
          className="mt-3 w-full px-6 py-2 font-bold underline underline-offset-4"
        >
          Hledat dál
        </button>
      </motion.div>
    </motion.div>
  )
}
