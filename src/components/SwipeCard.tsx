import { animate, motion, useMotionValue, useTransform, type PanInfo } from 'motion/react'
import type { Decision } from '../lib/swipe'
import type { Horse } from '../types'
import { HorseCard } from './HorseCard'

const THRESHOLD = 120

type Props = {
  horse: Horse
  onDecide: (decision: Decision) => void
}

export function SwipeCard({ horse, onDecide }: Props) {
  const x = useMotionValue(0)
  const rotate = useTransform(x, [-250, 250], [-16, 16])
  const likeOpacity = useTransform(x, [30, THRESHOLD], [0, 1])
  const nopeOpacity = useTransform(x, [-THRESHOLD, -30], [1, 0])

  function handleDragEnd(_: PointerEvent, info: PanInfo) {
    const power = info.offset.x + info.velocity.x * 0.2
    if (power > THRESHOLD) onDecide('like')
    else if (power < -THRESHOLD) onDecide('nope')
    else animate(x, 0, { type: 'spring', stiffness: 500, damping: 30 })
  }

  return (
    <motion.div
      className="absolute inset-0 cursor-grab touch-pan-y active:cursor-grabbing"
      style={{ x, rotate }}
      drag="x"
      onDragEnd={handleDragEnd}
      initial={{ scale: 0.95, opacity: 0.6 }}
      animate={{ scale: 1, opacity: 1 }}
      exit="exit"
      variants={{
        exit: (direction: number) => ({
          x: direction * 600,
          opacity: 0,
          transition: { duration: 0.3 },
        }),
      }}
    >
      <HorseCard horse={horse} />
      <motion.span
        aria-hidden="true"
        style={{ opacity: likeOpacity }}
        className="absolute top-8 left-6 -rotate-12 rounded-xl border-4 border-rose px-3 py-1 font-display text-4xl font-extrabold text-rose"
      >
        ÍHAHÁ!
      </motion.span>
      <motion.span
        aria-hidden="true"
        style={{ opacity: nopeOpacity }}
        className="absolute top-8 right-6 rotate-12 rounded-xl border-4 border-white px-3 py-1 font-display text-4xl font-extrabold text-white"
      >
        NÉÉÉ
      </motion.span>
    </motion.div>
  )
}
