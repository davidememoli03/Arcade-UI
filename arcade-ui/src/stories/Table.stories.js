// src/stories/Table.stories.js

/** @type { import('@storybook/html').Meta } */
export default {
  title: 'Components/Table',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Tabella arcade ottimizzata per leaderboard e statistiche di gioco. ' +
          'Header con sfondo neon invertito, righe alternate con scanlines, ' +
          'prima riga gold pulsante e hover con bordo neon sinistro. CSS-only — nessun JS richiesto.',
      },
    },
  },
}

// ─── Dati leaderboard (10 entry) ─────────────────────────────────────────────

const LEADERBOARD = [
  { rank: 1,  icon: '🏆', name: 'ACE',      score: '999,999', stage: '8-4', time: '14:22' },
  { rank: 2,  icon: '🥈', name: 'SHADOW',   score: '842,500', stage: '7-3', time: '15:01' },
  { rank: 3,  icon: '🥉', name: 'BLAZE',    score: '731,200', stage: '7-1', time: '16:48' },
  { rank: 4,  icon: '',   name: 'NEO',       score: '620,000', stage: '6-4', time: '18:33' },
  { rank: 5,  icon: '',   name: 'VIPER',     score: '514,750', stage: '6-2', time: '19:12' },
  { rank: 6,  icon: '',   name: 'GHOST',     score: '408,100', stage: '5-3', time: '20:55' },
  { rank: 7,  icon: '',   name: 'PIXEL',     score: '312,450', stage: '4-4', time: '22:08' },
  { rank: 8,  icon: '',   name: 'ROGUE',     score: '208,300', stage: '3-3', time: '24:17' },
  { rank: 9,  icon: '',   name: 'NOVA',      score: '104,700', stage: '2-4', time: '26:42' },
  { rank: 10, icon: '',   name: '???',       score: '---,---', stage: '-',   time: '--:--' },
]

/** Formatta il numero di rank con zero padding */
function padRank(n) {
  return n.toString().padStart(2, '0')
}

/** Genera una singola riga leaderboard */
function makeRow({ rank, icon, name, score, stage, time }, isGold = false) {
  const goldClass = isGold ? ' arc-table-row-gold' : ''
  const mutedClass = name === '???' ? ' arc-table-row-muted' : ''
  const iconHtml = icon
    ? `<span class="arc-table-rank-icon" aria-hidden="true">${icon}</span>`
    : ''

  return `
    <tr class="arc-table-row${goldClass}${mutedClass}">
      <td class="arc-table-td arc-table-td-rank">
        <span class="arc-table-rank-num">${padRank(rank)}</span>${iconHtml}
      </td>
      <td class="arc-table-td">${name}</td>
      <td class="arc-table-td arc-table-td-num">${score}</td>
      <td class="arc-table-td arc-table-td-num">${stage}</td>
      <td class="arc-table-td arc-table-td-num">${time}</td>
    </tr>`
}

/** Genera la tabella leaderboard completa */
function makeLeaderboard({ variant = 'cyan', caption = 'HIGH SCORES', compact = false } = {}) {
  const compactClass = compact ? ' arc-table-compact' : ''
  const rows = LEADERBOARD.map((entry, i) => makeRow(entry, i === 0)).join('')

  return `
<div class="arc-table-wrapper arc-table-${variant}" style="max-width:720px">
  <table class="arc-table arc-table-leaderboard${compactClass}">
    <caption>${caption}</caption>
    <thead>
      <tr>
        <th class="arc-table-th arc-table-th-rank">#</th>
        <th class="arc-table-th">PLAYER</th>
        <th class="arc-table-th arc-table-th-num">SCORE</th>
        <th class="arc-table-th arc-table-th-num">STAGE</th>
        <th class="arc-table-th arc-table-th-num">TIME</th>
      </tr>
    </thead>
    <tbody>${rows}
    </tbody>
  </table>
</div>`
}

// ─── Stories ──────────────────────────────────────────────────────────────────

/** Leaderboard completa con 10 entry, variante cyan (default). */
export const Leaderboard = {
  name: 'Leaderboard (default)',
  render: () => makeLeaderboard({ caption: 'HIGH SCORES — ARCADE MODE' }),
}

/** Variante green — stile MISSION COMPLETE / progress screen. */
export const LeaderboardGreen = {
  name: 'Variant: green',
  render: () => makeLeaderboard({ variant: 'green', caption: 'MISSION RANKINGS' }),
}

/** Variante yellow — stile COINS / economy screen. */
export const LeaderboardYellow = {
  name: 'Variant: yellow',
  render: () => makeLeaderboard({ variant: 'yellow', caption: 'COIN LEADERBOARD' }),
}

/** Variante red — stile DANGER / elimination screen. */
export const LeaderboardRed = {
  name: 'Variant: red',
  render: () => makeLeaderboard({ variant: 'red', caption: 'ELIMINATION TABLE' }),
}

/** Variante purple — stile MAGIC / special screen. */
export const LeaderboardPurple = {
  name: 'Variant: purple',
  render: () => makeLeaderboard({ variant: 'purple', caption: 'WIZARD RANKINGS' }),
}

/** Modificatore compact — densità alta, righe più sottili. */
export const Compact = {
  name: 'Modifier: compact',
  render: () => makeLeaderboard({ compact: true, caption: 'SPEED RUN RECORDS' }),
}

/** Tabella statistiche generiche — senza modificatore leaderboard. */
export const Stats = {
  name: 'Stats table (no leaderboard modifier)',
  render: () => `
<div class="arc-table-wrapper arc-table-cyan" style="max-width:560px">
  <table class="arc-table">
    <caption>PLAYER STATISTICS</caption>
    <thead>
      <tr>
        <th class="arc-table-th">STAT</th>
        <th class="arc-table-th arc-table-th-num">VALUE</th>
        <th class="arc-table-th arc-table-th-num">BEST</th>
      </tr>
    </thead>
    <tbody>
      <tr class="arc-table-row">
        <td class="arc-table-td">Kills</td>
        <td class="arc-table-td arc-table-td-num">1,482</td>
        <td class="arc-table-td arc-table-td-num">2,048</td>
      </tr>
      <tr class="arc-table-row">
        <td class="arc-table-td">Deaths</td>
        <td class="arc-table-td arc-table-td-num">312</td>
        <td class="arc-table-td arc-table-td-num">—</td>
      </tr>
      <tr class="arc-table-row arc-table-row-active">
        <td class="arc-table-td">K/D Ratio</td>
        <td class="arc-table-td arc-table-td-num">4.75</td>
        <td class="arc-table-td arc-table-td-num">6.10</td>
      </tr>
      <tr class="arc-table-row">
        <td class="arc-table-td">Accuracy</td>
        <td class="arc-table-td arc-table-td-num">72.3%</td>
        <td class="arc-table-td arc-table-td-num">88.1%</td>
      </tr>
      <tr class="arc-table-row">
        <td class="arc-table-td">Avg. Score</td>
        <td class="arc-table-td arc-table-td-num">42,180</td>
        <td class="arc-table-td arc-table-td-num">99,500</td>
      </tr>
      <tr class="arc-table-row">
        <td class="arc-table-td">Play Time</td>
        <td class="arc-table-td arc-table-td-num">48h 22m</td>
        <td class="arc-table-td arc-table-td-num">—</td>
      </tr>
      <tr class="arc-table-row arc-table-row-muted">
        <td class="arc-table-td">Achievements</td>
        <td class="arc-table-td arc-table-td-num">12 / 50</td>
        <td class="arc-table-td arc-table-td-num">—</td>
      </tr>
    </tbody>
  </table>
</div>`,
}

/** Tutte le varianti colore affiancate — overview rapida. */
export const AllVariants = {
  name: 'All colour variants',
  render: () => {
    const variants = ['cyan', 'green', 'yellow', 'red', 'purple']
    const mini = variants.map(v => `
<div class="arc-table-wrapper arc-table-${v}" style="max-width:300px">
  <table class="arc-table arc-table-leaderboard">
    <caption>${v.toUpperCase()}</caption>
    <thead>
      <tr>
        <th class="arc-table-th arc-table-th-rank">#</th>
        <th class="arc-table-th">PLAYER</th>
        <th class="arc-table-th arc-table-th-num">SCORE</th>
      </tr>
    </thead>
    <tbody>
      ${LEADERBOARD.slice(0, 3).map((e, i) => `
      <tr class="arc-table-row${i === 0 ? ' arc-table-row-gold' : ''}">
        <td class="arc-table-td arc-table-td-rank">
          <span class="arc-table-rank-num">${padRank(e.rank)}</span>
          ${e.icon ? `<span class="arc-table-rank-icon" aria-hidden="true">${e.icon}</span>` : ''}
        </td>
        <td class="arc-table-td">${e.name}</td>
        <td class="arc-table-td arc-table-td-num">${e.score}</td>
      </tr>`).join('')}
    </tbody>
  </table>
</div>`).join('')

    return `<div style="display:flex;flex-wrap:wrap;gap:24px;padding:16px">${mini}</div>`
  },
}

/** Tabella con un giocatore corrente evidenziato (arc-table-row-active). */
export const WithCurrentPlayer = {
  name: 'Current player highlighted',
  render: () => {
    const rows = LEADERBOARD.slice(0, 7).map((entry, i) => {
      const isGold = i === 0
      const isCurrent = entry.name === 'VIPER'
      const goldClass    = isGold    ? ' arc-table-row-gold'   : ''
      const activeClass  = isCurrent ? ' arc-table-row-active' : ''
      const icon = entry.icon
        ? `<span class="arc-table-rank-icon" aria-hidden="true">${entry.icon}</span>`
        : ''

      return `
      <tr class="arc-table-row${goldClass}${activeClass}">
        <td class="arc-table-td arc-table-td-rank">
          <span class="arc-table-rank-num">${padRank(entry.rank)}</span>${icon}
        </td>
        <td class="arc-table-td">${entry.name}${isCurrent ? ' ◀ YOU' : ''}</td>
        <td class="arc-table-td arc-table-td-num">${entry.score}</td>
        <td class="arc-table-td arc-table-td-num">${entry.stage}</td>
      </tr>`
    }).join('')

    return `
<div class="arc-table-wrapper arc-table-cyan" style="max-width:600px">
  <table class="arc-table arc-table-leaderboard">
    <caption>TOP PLAYERS — YOUR RANK: #5</caption>
    <thead>
      <tr>
        <th class="arc-table-th arc-table-th-rank">#</th>
        <th class="arc-table-th">PLAYER</th>
        <th class="arc-table-th arc-table-th-num">SCORE</th>
        <th class="arc-table-th arc-table-th-num">STAGE</th>
      </tr>
    </thead>
    <tbody>${rows}
    </tbody>
  </table>
</div>`
  },
}
