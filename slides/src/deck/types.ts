import type { FC } from 'react'

export type SlideProps = {
  /** current build step on this slide (0-based) */
  step: number
}

export type SlideDef = {
  id: string
  title: string
  /** number of build steps (default 1 = no builds) */
  steps?: number
  /** speaker notes (Czech) */
  notes: string
  /** rough minutes to spend */
  minutes?: number
  /** section label shown top-left */
  section?: string
  Component: FC<SlideProps>
}
