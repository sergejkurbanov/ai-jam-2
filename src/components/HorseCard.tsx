import { formatAge, formatDistance } from '../lib/format'
import type { Horse } from '../types'

type Props = {
  horse: Horse
}

export function HorseCard({ horse }: Props) {
  return (
    <article className="absolute inset-0 overflow-hidden rounded-card bg-white shadow-card">
      <img
        src={horse.photo}
        alt={`${horse.name}, ${horse.breed}`}
        className="h-full w-full object-cover"
        draggable={false}
      />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 via-ink/60 to-transparent p-6 pt-24 text-white">
        <h2 className="text-4xl font-extrabold">
          {horse.name}, <span className="font-medium">{formatAge(horse.age)}</span>
        </h2>
        <p className="mt-1 font-semibold text-hay-200">
          {horse.breed} · {formatDistance(horse.distanceKm)} od tebe
        </p>
        <p className="mt-3 leading-snug">{horse.bio}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {horse.interests.map((interest) => (
            <li key={interest} className="rounded-full bg-white/20 px-3 py-1 text-sm font-bold">
              {interest}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}
