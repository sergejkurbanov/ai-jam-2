import { REPO_URL } from '../config'
import { docs, type DocName } from './docs'

export function SiteNav({ active }: { active?: DocName }) {
  return (
    <nav className="site-nav" aria-label="Hlavní">
      <a className="logo" href="#/">🐴 AI jam #2</a>
      <a href="#/slides/1">Prezentace</a>
      {(Object.keys(docs) as DocName[]).map((name) => (
        <a key={name} href={`#/doc/${name}`} aria-current={active === name ? 'page' : undefined}>
          {docs[name].title}
        </a>
      ))}
      <a href={REPO_URL} target="_blank" rel="noreferrer">GitHub</a>
    </nav>
  )
}
