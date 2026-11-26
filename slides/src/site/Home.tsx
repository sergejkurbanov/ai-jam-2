import { APP_URL, REPO_URL } from '../config'
import { docs, type DocName } from './docs'
import { SiteNav } from './SiteNav'

export function Home() {
  return (
    <div className="site">
      <SiteNav />
      <header className="home-hero">
        <h1>
          Ty vedeš,
          <br />
          AI kóduje.
        </h1>
        <p>
          AI jam #2 od React Girls. Za jeden večer s Claude Code postavíme Koníčka: Tinder pro koně 🐴💘. Od prázdného repa
          až po nasazený frontend.
        </p>
      </header>
      <div className="tiles">
        <a className="tile" href="#/slides/1" style={{ background: 'var(--ink)', color: '#fff3e3' }}>
          <span className="emoji">🎬</span>
          <b>Prezentace</b>
          <span style={{ color: '#d9c7b4' }}>Šipkami dál, P = poznámky</span>
        </a>
        {(Object.keys(docs) as DocName[]).map((name) => (
          <a key={name} className="tile" href={`#/doc/${name}`}>
            <span className="emoji">{docs[name].emoji}</span>
            <b>{docs[name].title}</b>
            <span>{docs[name].blurb}</span>
          </a>
        ))}
        <a className="tile" href={APP_URL} target="_blank" rel="noreferrer">
          <span className="emoji">🐴</span>
          <b>Hotová appka</b>
          <span>Takhle to bude vypadat na konci</span>
        </a>
        <a className="tile" href={REPO_URL} target="_blank" rel="noreferrer">
          <span className="emoji">🐙</span>
          <b>GitHub</b>
          <span>Kód, checkpointy krok-1 až krok-6</span>
        </a>
      </div>
    </div>
  )
}
