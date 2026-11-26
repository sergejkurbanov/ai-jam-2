// Draws a cute front-facing horse portrait (600×800 SVG) for every horse in kone-data.mjs.
// Usage: node scripts/kone.mjs <output-dir>        (writes <id>.svg + kone.json)
import { mkdirSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { horses } from './kone-data.mjs'

const HEAD = 'M300,190 C384,190 432,244 430,330 C428,410 400,452 396,520 C392,606 360,684 300,684 C240,684 208,606 204,520 C200,452 172,410 170,330 C168,244 216,190 300,190 Z'

/** deterministic pseudo-random numbers, so re-running gives identical files */
function rng(seed) {
  let s = [...seed].reduce((a, c) => a * 31 + c.charCodeAt(0), 7) >>> 0
  return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 2 ** 32)
}

function background([top, bottom], id) {
  const r = rng(id + 'bg')
  const dots = Array.from({ length: 14 }, () => {
    const x = Math.round(r() * 600), y = Math.round(r() * 520), rr = Math.round(4 + r() * 10)
    return `<circle cx="${x}" cy="${y}" r="${rr}" fill="#fff" opacity="${(0.25 + r() * 0.35).toFixed(2)}"/>`
  }).join('')
  return `
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${top}"/><stop offset="1" stop-color="${bottom}"/></linearGradient>
    <clipPath id="head"><path d="${HEAD}"/></clipPath>
  </defs>
  <rect width="600" height="800" fill="url(#bg)"/>
  <circle cx="470" cy="150" r="70" fill="#fff" opacity=".45"/>
  ${dots}
  <path d="M0,640 C120,590 230,620 300,640 C390,610 480,585 600,630 L600,800 L0,800 Z" fill="${bottom}" opacity=".9"/>
  <path d="M0,700 C150,660 260,690 340,700 C430,680 520,670 600,690 L600,800 L0,800 Z" fill="#fff" opacity=".22"/>`
}

function ear(side, look) {
  const m = side === 'l' ? 1 : -1
  const x = v => 300 - m * (300 - v)
  const outer = `M${x(226)},262 Q${x(190)},150 ${x(236)},104 Q${x(276)},168 ${x(272)},246 Z`
  const inner = `M${x(236)},238 Q${x(214)},168 ${x(238)},136 Q${x(258)},176 ${x(258)},232 Z`
  return `<path d="${outer}" fill="${look.coat}"/><path d="${inner}" fill="${look.innerEar ?? '#f5b5b8'}" opacity=".85"/>`
}

function mane(look) {
  const c2 = look.mane2 ?? look.mane
  // long mane falling down the left side of the neck
  return `
  <path d="M228,300 C150,380 150,520 176,620 C190,680 160,740 172,800 L236,800 C226,700 250,640 238,560 C228,470 250,380 276,316 Z" fill="${look.mane}"/>
  <path d="M206,420 C186,500 196,580 214,650" stroke="${c2}" stroke-width="14" stroke-linecap="round" fill="none" opacity=".7"/>`
}

function forelock(look) {
  const c2 = look.mane2 ?? look.mane
  return `
  <path d="M236,214 Q262,150 302,168 Q338,142 368,206 Q350,252 322,240 Q306,300 286,246 Q256,268 236,214 Z" fill="${look.mane}"/>
  <path d="M276,196 Q292,226 290,252" stroke="${c2}" stroke-width="9" stroke-linecap="round" fill="none" opacity=".8"/>
  <path d="M322,188 Q330,214 322,236" stroke="${c2}" stroke-width="9" stroke-linecap="round" fill="none" opacity=".8"/>`
}

function marking(look, id) {
  const r = rng(id + 'mk')
  switch (look.marking) {
    case 'blaze':
      return `<path d="M288,236 Q300,226 312,236 L322,520 Q326,586 300,600 Q274,586 278,520 Z" fill="#fffaf2" opacity=".95"/>`
    case 'star':
      return `<path d="M300,262 L312,292 L342,300 L312,310 L300,340 L288,310 L258,300 L288,292 Z" fill="#fffaf2" opacity=".95"/>`
    case 'snip':
      return `<path d="M300,250 Q314,270 300,300 Q286,270 300,250 Z" fill="#fffaf2" opacity=".9"/><ellipse cx="300" cy="560" rx="22" ry="30" fill="#fffaf2" opacity=".55"/>`
    case 'spots':
    case 'dapples': {
      const n = look.marking === 'spots' ? 22 : 16
      return Array.from({ length: n }, () => {
        const x = 180 + r() * 240, y = 220 + r() * 300, rr = look.marking === 'spots' ? 6 + r() * 12 : 8 + r() * 10
        return `<circle cx="${x.toFixed(0)}" cy="${y.toFixed(0)}" r="${rr.toFixed(0)}" fill="${look.spotColor}" opacity="${look.marking === 'spots' ? 0.85 : 0.55}"/>`
      }).join('')
    }
    case 'wood':
      return Array.from({ length: 9 }, (_, i) => {
        const y = 230 + i * 50, w = 8 + r() * 14
        return `<path d="M160,${y} C230,${y - w} 300,${y + w} 440,${y - 4}" stroke="${look.coatDark}" stroke-width="5" fill="none" opacity=".6"/>`
      }).join('')
    default:
      return ''
  }
}

function isDark(hex) {
  const n = parseInt(hex.slice(1), 16)
  return 0.299 * (n >> 16) + 0.587 * ((n >> 8) & 255) + 0.114 * (n & 255) < 90
}

function eyes(look) {
  const ring = isDark(look.coat)
  const eye = (cx, flip) => `
    ${ring ? `<ellipse cx="${cx}" cy="388" rx="27" ry="32" fill="#f4eef6"/>` : ''}
    <ellipse cx="${cx}" cy="388" rx="20" ry="25" fill="#2a2230"/>
    <circle cx="${cx + 6}" cy="378" r="7" fill="#fff"/>
    <circle cx="${cx - 6}" cy="398" r="3" fill="#fff" opacity=".8"/>
    ${look.lashes ? `<path d="M${cx + flip * 16},370 l${flip * 14},-10 M${cx + flip * 20},380 l${flip * 16},-4" stroke="#2a2230" stroke-width="4" stroke-linecap="round"/>` : ''}`
  return eye(240, -1) + eye(360, 1)
}

function muzzle(look) {
  const dark = '#2a2230'
  return `
  <g clip-path="url(#head)"><ellipse cx="300" cy="604" rx="112" ry="92" fill="${look.muzzle}"/></g>
  <ellipse cx="262" cy="612" rx="12" ry="19" fill="${dark}" opacity=".75" transform="rotate(-14 262 612)"/>
  <ellipse cx="338" cy="612" rx="12" ry="19" fill="${dark}" opacity=".75" transform="rotate(14 338 612)"/>
  <path d="M272,652 Q300,670 328,652" stroke="${dark}" stroke-width="5" stroke-linecap="round" fill="none" opacity=".7"/>
  <ellipse cx="212" cy="470" rx="26" ry="15" fill="#ff7f9b" opacity=".3"/>
  <ellipse cx="388" cy="470" rx="26" ry="15" fill="#ff7f9b" opacity=".3"/>`
}

const accessories = {
  flowers: () => {
    const flower = (x, y, c) => `<g transform="translate(${x} ${y})">${[0, 72, 144, 216, 288].map(a => `<circle cx="${(Math.cos(a * Math.PI / 180) * 11).toFixed(1)}" cy="${(Math.sin(a * Math.PI / 180) * 11).toFixed(1)}" r="10" fill="${c}"/>`).join('')}<circle r="7" fill="#ffd34d"/></g>`
    return `<path d="M216,250 Q300,204 384,250" stroke="#6fbf73" stroke-width="7" fill="none"/>` +
      [[218, 248, '#ff8fb1'], [256, 228, '#fff'], [300, 220, '#ffb547'], [344, 228, '#fff'], [382, 248, '#ff8fb1']].map(([x, y, c]) => flower(x, y, c)).join('')
  },
  hatch: () => `
    <rect x="258" y="272" width="84" height="64" rx="8" fill="#6e4726" stroke="#4a2f18" stroke-width="5"/>
    <rect x="268" y="282" width="64" height="44" rx="4" fill="#1d140c"/>
    <circle cx="288" cy="302" r="5" fill="#fff"/><circle cx="312" cy="302" r="5" fill="#fff"/>
    <circle cx="289" cy="303" r="2.4" fill="#1d140c"/><circle cx="313" cy="303" r="2.4" fill="#1d140c"/>
    <rect x="252" y="282" width="10" height="12" rx="2" fill="#d9b25a"/><rect x="252" y="314" width="10" height="12" rx="2" fill="#d9b25a"/>`,
  bow: () => `
    <g transform="translate(378 214) rotate(18)">
      <path d="M0,0 L-46,-26 Q-56,0 -46,26 Z" fill="#ff5c8a"/><path d="M0,0 L46,-26 Q56,0 46,26 Z" fill="#ff5c8a"/>
      <circle r="13" fill="#ff8fb0"/>
    </g>`,
  headband: () => `
    <g clip-path="url(#head)"><rect x="160" y="262" width="280" height="34" fill="#ff4d5e"/><rect x="160" y="274" width="280" height="9" fill="#fff"/></g>
    <path d="M168,270 Q150,300 160,330" stroke="#ff4d5e" stroke-width="12" stroke-linecap="round" fill="none"/>`,
  horn: () => `
    <defs><linearGradient id="gold" x1="0" x2="1"><stop offset="0" stop-color="#ffe17a"/><stop offset="1" stop-color="#ffb340"/></linearGradient></defs>
    <path d="M300,70 L272,232 L328,232 Z" fill="url(#gold)"/>
    <path d="M285,200 L320,186 M282,166 L314,152 M290,130 L308,122" stroke="#e09a2a" stroke-width="5" stroke-linecap="round"/>`,
  glasses: () => `
    <circle cx="240" cy="390" r="44" fill="#fff" fill-opacity=".18" stroke="#1d1a1f" stroke-width="8"/>
    <circle cx="360" cy="390" r="44" fill="#fff" fill-opacity=".18" stroke="#1d1a1f" stroke-width="8"/>
    <path d="M284,386 Q300,374 316,386" stroke="#1d1a1f" stroke-width="8" fill="none"/>
    <path d="M196,384 L172,372 M404,384 L428,372" stroke="#1d1a1f" stroke-width="8" stroke-linecap="round"/>
    <path d="M220,368 l14,-8" stroke="#fff" stroke-width="5" stroke-linecap="round" opacity=".7"/>`,
  sunglasses: () => `
    <rect x="186" y="356" width="104" height="66" rx="26" fill="#ff3d8b"/>
    <rect x="310" y="356" width="104" height="66" rx="26" fill="#ff3d8b"/>
    <rect x="196" y="366" width="84" height="46" rx="18" fill="#221a2b"/>
    <rect x="320" y="366" width="84" height="46" rx="18" fill="#221a2b"/>
    <path d="M290,380 Q300,370 310,380" stroke="#ff3d8b" stroke-width="8" fill="none"/>
    <path d="M210,378 l22,-6 M334,378 l22,-6" stroke="#fff" stroke-width="5" stroke-linecap="round" opacity=".6"/>`,
  headphones: () => `
    <path d="M168,330 Q170,150 300,150 Q430,150 432,330" stroke="#ff8a3d" stroke-width="18" fill="none" stroke-linecap="round"/>
    <rect x="140" y="300" width="48" height="96" rx="20" fill="#ff8a3d"/><rect x="412" y="300" width="48" height="96" rx="20" fill="#ff8a3d"/>
    <rect x="150" y="316" width="28" height="64" rx="12" fill="#ffc08f"/><rect x="422" y="316" width="28" height="64" rx="12" fill="#ffc08f"/>`,
  hat: () => `
    <ellipse cx="300" cy="222" rx="186" ry="34" fill="#8a5a33"/>
    <path d="M206,222 Q206,112 262,116 Q300,140 338,116 Q394,112 394,222 Z" fill="#a46d3f"/>
    <rect x="207" y="190" width="186" height="20" fill="#5b3a20"/>
    <ellipse cx="300" cy="216" rx="186" ry="12" fill="#6f4628" opacity=".5"/>`,
  bandana: () => `
    <path d="M206,610 Q300,690 394,610 L380,700 Q300,770 220,700 Z" fill="#e8533f"/>
    <circle cx="260" cy="680" r="5" fill="#fff"/><circle cx="300" cy="700" r="5" fill="#fff"/><circle cx="340" cy="680" r="5" fill="#fff"/>
    <circle cx="282" cy="720" r="4" fill="#fff"/><circle cx="318" cy="720" r="4" fill="#fff"/>`,
  crown: () => `
    <g transform="rotate(-10 300 160)">
      <path d="M244,206 L236,132 L272,166 L300,118 L328,166 L364,132 L356,206 Z" fill="#ffc83d" stroke="#e0a21a" stroke-width="5" stroke-linejoin="round"/>
      <circle cx="300" cy="182" r="9" fill="#ff4d7a"/><circle cx="264" cy="188" r="6" fill="#4dc3ff"/><circle cx="336" cy="188" r="6" fill="#4dc3ff"/>
    </g>`,
  handle: () => `
    <rect x="120" y="292" width="360" height="26" rx="13" fill="#c98a4a"/>
    <circle cx="124" cy="305" r="18" fill="#a86d34"/><circle cx="476" cy="305" r="18" fill="#a86d34"/>`,
}

/** accessories drawn before the forelock (so hair sits on top of them) */
const UNDER_FORELOCK = new Set(['horn'])
/** accessories drawn before the ears */
const UNDER_EARS = new Set(['headphones'])

export function horseSvg(h) {
  const L = h.look
  const acc = accessories[L.accessory]?.() ?? ''
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 800" width="600" height="800">
  ${background(L.bg, h.id)}
  ${mane(L)}
  <path d="M196,800 L216,600 Q300,548 384,600 L404,800 Z" fill="${L.coatDark}"/>
  ${UNDER_EARS.has(L.accessory) ? acc : ''}
  ${ear('l', L)}${ear('r', L)}
  <path d="${HEAD}" fill="${L.coat}"/>
  <g clip-path="url(#head)">${marking(L, h.id)}</g>
  ${muzzle(L)}
  ${eyes(L)}
  ${UNDER_FORELOCK.has(L.accessory) ? acc : ''}
  ${forelock(L)}
  ${!UNDER_FORELOCK.has(L.accessory) && !UNDER_EARS.has(L.accessory) ? acc : ''}
</svg>
`
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const out = process.argv[2]
  if (!out) throw new Error('usage: node scripts/kone.mjs <output-dir>')
  mkdirSync(join(out, 'kone'), { recursive: true })
  for (const h of horses) writeFileSync(join(out, 'kone', `${h.id}.svg`), horseSvg(h))
  const data = horses.map(({ look, ...h }) => ({ ...h, photo: `kone/${h.id}.svg` }))
  writeFileSync(join(out, 'kone.json'), JSON.stringify(data, null, 2) + '\n')
  console.log(`wrote ${horses.length} horses to ${out}`)
}

/** SVG template with {{PLACEHOLDER}} colors + accessory snippets, for the `novy-kun` skill. */
export function skillFiles() {
  const sentinel = { coat: '#a1a1a1', coatDark: '#a2a2a2', mane: '#a3a3a3', muzzle: '#a4a4a4', bg: ['#a5a5a5', '#a6a6a6'], marking: 'none', accessory: 'none' }
  const svg = horseSvg({ id: 'sablona', look: sentinel })
    .replaceAll('#a1a1a1', '{{SRST}}').replaceAll('#a2a2a2', '{{STIN}}').replaceAll('#a3a3a3', '{{HRIVA}}')
    .replaceAll('#a4a4a4', '{{NOZDRY}}').replaceAll('#a5a5a5', '{{POZADI_NAHORE}}').replaceAll('#a6a6a6', '{{POZADI_DOLE}}')
    .replace('<svg ', '<!-- Šablona koně. Doplňky vlož před </svg>. -->\n<svg ')
  const doplnky = ['# Doplňky', '', 'SVG úryvky. Vlož vybraný úryvek těsně před `</svg>` v obrázku koně.', '']
  for (const [name, fn] of Object.entries(accessories)) {
    if (['hatch', 'handle'].includes(name)) continue
    doplnky.push(`## ${name}`, '', '```svg', fn().trim().replace(/\n\s+/g, '\n'), '```', '')
  }
  return { svg, doplnky: doplnky.join('\n') }
}
