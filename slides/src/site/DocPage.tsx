import { Marked } from 'marked'
import { useEffect, useMemo, useRef } from 'react'
import { docs, type DocName } from './docs'
import { SiteNav } from './SiteNav'

/** GitHub-compatible heading ids, so links like kroky.md#zasekla-ses-dožeň-nás work on both GitHub and here. */
export function slug(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/<[^>]+>/g, '')
    .replace(/[^\p{L}\p{N}\s-]/gu, '')
    .replace(/\s/g, '-')
}

const marked = new Marked({
  renderer: {
    heading({ tokens, depth }) {
      const html = this.parser.parseInline(tokens)
      return `<h${depth} id="${slug(html)}">${html}</h${depth}>\n`
    },
    link({ href, title, tokens }) {
      const text = this.parser.parseInline(tokens)
      let to = href
      const md = href.match(/^([\w-]+)\.md(?:#(.*))?$/)
      if (md && md[1] in docs) to = `#/doc/${md[1]}${md[2] ? '/' + md[2] : ''}`
      else if (href.startsWith('#')) to = `#/doc/${current}/${href.slice(1)}`
      const external = /^https?:/.test(to)
      return `<a href="${to}"${title ? ` title="${title}"` : ''}${external ? ' target="_blank" rel="noreferrer"' : ''}>${text}</a>`
    },
  },
})
let current: DocName = 'kroky'

export function DocPage({ name, anchor }: { name: DocName; anchor?: string }) {
  const ref = useRef<HTMLElement>(null)
  const html = useMemo(() => {
    current = name
    return marked.parse(docs[name].md) as string
  }, [name])

  useEffect(() => {
    document.title = `${docs[name].title} · AI jam #2`
    const root = ref.current
    if (!root) return
    // copy buttons on code blocks
    for (const pre of root.querySelectorAll('pre')) {
      if (pre.querySelector('.copy')) continue
      const button = document.createElement('button')
      button.className = 'copy'
      button.type = 'button'
      button.textContent = 'Kopírovat'
      button.onclick = async () => {
        await navigator.clipboard.writeText(pre.querySelector('code')?.textContent ?? '')
        button.textContent = 'Zkopírováno ✓'
        setTimeout(() => (button.textContent = 'Kopírovat'), 1500)
      }
      pre.appendChild(button)
    }
    if (anchor) document.getElementById(decodeURIComponent(anchor))?.scrollIntoView()
    else window.scrollTo(0, 0)
  }, [html, anchor, name])

  return (
    <div className="site">
      <SiteNav active={name} />
      <article ref={ref} className="doc" dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}
