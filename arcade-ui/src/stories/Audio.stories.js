// src/stories/Audio.stories.js
import { AudioManager } from '../audio/AudioManager.js'

/** Collega `data-arc-sound-*` nel canvas Storybook (equivalente a DOM dinamico post-mount). */
function bindStorySounds(canvasElement) {
  AudioManager.getInstance().bindArcadeSounds(canvasElement)
}

/** @type { import('@storybook/html').Meta } */
export default {
  title: 'Audio/AudioManager',
  play: async ({ canvasElement }) => {
    bindStorySounds(canvasElement)
  },
  parameters: {
    docs: {
      description: {
        component:
          'Web Audio synth integrato; SFX dichiarativi via `data-arc-sound-*` (`bindArcadeSounds`). Tipizzazione Angular: `ArcadeAudioService` — [`docs/angular-consumer.md`](https://github.com/davidememoli03/Arcade-UI/blob/main/arcade-ui/docs/angular-consumer.md).',
      },
    },
  },
}

// ─── Helpers UI ──────────────────────────────────────────────────────────────

const css = {
  wrap:    'padding:2rem;max-width:680px;display:flex;flex-direction:column;gap:1.5rem;',
  label:   'font-family:var(--arc-font-mono);font-size:.7rem;color:var(--arc-color-text-muted);text-transform:uppercase;letter-spacing:.1em;',
  value:   'font-family:var(--arc-font-mono);font-size:.85rem;color:var(--arc-color-cyan);',
  heading: 'font-family:var(--arc-font-pixel);font-size:1rem;color:var(--arc-color-text);letter-spacing:.1em;margin:0;',
  note:    'font-family:var(--arc-font-mono);font-size:.7rem;color:var(--arc-color-text-muted);line-height:1.6;',
  row:     'display:flex;align-items:center;gap:.75rem;flex-wrap:wrap;',
  sep:     'border:none;border-top:1px solid #1a0a2e;margin:0;',
}

function badge(text, color = 'cyan') {
  return `<span class="arc-badge arc-badge-${color}" style="font-size:.65rem;">${text}</span>`
}

function sfxGrid(audio, log) {
  const sfx = [
    { id: 'coin',     icon: '🪙', color: 'yellow',  label: 'COIN'     },
    { id: 'select',   icon: '▶',  color: 'cyan',    label: 'SELECT'   },
    { id: 'blip',     icon: '◆',  color: 'green',   label: 'BLIP'     },
    { id: 'error',    icon: '✗',  color: 'red',     label: 'ERROR'    },
    { id: 'win',      icon: '★',  color: 'yellow',  label: 'WIN'      },
    { id: 'gameover', icon: '☠',  color: 'red',     label: 'GAMEOVER' },
  ]

  const grid = document.createElement('div')
  grid.style.cssText = 'display:grid;grid-template-columns:repeat(3,1fr);gap:.75rem;'

  sfx.forEach(({ id, icon, color, label }) => {
    const btn = document.createElement('button')
    btn.className = 'arc-btn arc-btn-ghost'
    btn.style.cssText = `border-color:var(--arc-color-${color === 'green' ? 'green' : color === 'yellow' ? 'yellow' : color === 'red' ? 'red' : 'cyan'});color:var(--arc-color-${color === 'green' ? 'green' : color === 'yellow' ? 'yellow' : color === 'red' ? 'red' : 'cyan'});gap:.35rem;padding:10px 8px;font-size:11px;justify-content:flex-start;`
    btn.innerHTML = `<span>${icon}</span> ${label}`
    btn.addEventListener('click', () => {
      audio.play(id)
      addLog(log, id, color)
    })
    grid.appendChild(btn)
  })

  return grid
}

function addLog(logEl, id, color = 'cyan') {
  const line = document.createElement('div')
  line.style.cssText = `font-family:var(--arc-font-mono);font-size:.72rem;color:var(--arc-color-${color === 'green' ? 'green' : color === 'yellow' ? 'yellow' : color === 'red' ? 'red' : 'cyan'});display:flex;align-items:center;gap:.5rem;`
  const ts = new Date().toLocaleTimeString('it', { hour: '2-digit', minute: '2-digit', second: '2-digit' })
  line.innerHTML = `<span style="color:var(--arc-color-text-muted)">[${ts}]</span> audio.play(<b>'${id}'</b>)`
  logEl.prepend(line)
  if (logEl.children.length > 6) logEl.lastChild.remove()
}

// ─── Story: Overview ─────────────────────────────────────────────────────────

/** @type { import('@storybook/html').StoryObj } */
export const Overview = {
  name: 'Overview — pannello completo',
  render: () => {
    const audio = AudioManager.getInstance()
    const wrap  = document.createElement('div')
    wrap.style.cssText = css.wrap

    // ── Status bar
    const statusBar = document.createElement('div')
    statusBar.style.cssText = `${css.row}padding:.75rem 1rem;background:var(--arc-color-bg-panel);border:1px solid #1a0a2e;`

    const audioBadge = document.createElement('span')
    audioBadge.id = 'arc-story-audio-badge'
    audioBadge.innerHTML = typeof AudioContext !== 'undefined'
      ? badge('WEB AUDIO: OK ✓', 'green')
      : badge('WEB AUDIO: N/A', 'red')

    const mutedBadge = document.createElement('span')
    mutedBadge.id = 'arc-story-muted-badge'
    mutedBadge.innerHTML = audio.isMuted() ? badge('MUTED', 'red') : badge('AUDIO ON', 'green')

    const volLabel = document.createElement('span')
    volLabel.id = 'arc-story-vol-label'
    volLabel.style.cssText = `${css.value}margin-left:auto;`
    volLabel.textContent = `VOL ${Math.round(audio.getVolume() * 100)}%`

    statusBar.append(audioBadge, mutedBadge, volLabel)

    // ── Titolo
    const title = document.createElement('h2')
    title.style.cssText = css.heading
    title.innerHTML = `
      <span style="color:var(--arc-color-cyan)">▶</span>
      AUDIO MANAGER
      <span style="font-size:.6rem;color:var(--arc-color-text-muted);letter-spacing:.05em;vertical-align:middle;">
        singleton
      </span>
    `

    // ── Volume
    const volSection = document.createElement('div')
    volSection.style.cssText = 'display:flex;flex-direction:column;gap:.5rem;'
    volSection.innerHTML = `<span style="${css.label}">Volume</span>`

    const volRow = document.createElement('div')
    volRow.style.cssText = `${css.row}gap:1rem;`

    const slider = document.createElement('input')
    slider.type  = 'range'
    slider.min   = '0'
    slider.max   = '100'
    slider.value = String(Math.round(audio.getVolume() * 100))
    slider.style.cssText = 'flex:1;accent-color:var(--arc-color-cyan);cursor:pointer;'

    const sliderVal = document.createElement('span')
    sliderVal.style.cssText = css.value
    sliderVal.textContent = `${slider.value}%`

    slider.addEventListener('input', () => {
      const v = Number(slider.value) / 100
      audio.setVolume(v)
      sliderVal.textContent = `${slider.value}%`
      volLabel.textContent  = `VOL ${slider.value}%`
    })

    volRow.append(slider, sliderVal)
    volSection.append(volRow)

    // ── Mute / Unmute
    const muteSection = document.createElement('div')
    muteSection.style.cssText = 'display:flex;flex-direction:column;gap:.5rem;'
    muteSection.innerHTML = `<span style="${css.label}">Mute</span>`

    const muteRow = document.createElement('div')
    muteRow.style.cssText = css.row

    const muteBtn   = document.createElement('button')
    muteBtn.className = 'arc-btn arc-btn-danger arc-btn-sm'
    muteBtn.textContent = 'MUTE'

    const unmuteBtn = document.createElement('button')
    unmuteBtn.className = 'arc-btn arc-btn-ghost arc-btn-sm'
    unmuteBtn.textContent = 'UNMUTE'

    const muteStatus = document.createElement('span')
    muteStatus.style.cssText = css.value
    muteStatus.textContent = audio.isMuted() ? 'isMuted() → true' : 'isMuted() → false'

    const syncMuteUI = () => {
      const m = audio.isMuted()
      muteStatus.textContent = `isMuted() → ${m}`
      mutedBadge.innerHTML   = m ? badge('MUTED', 'red') : badge('AUDIO ON', 'green')
    }

    muteBtn.addEventListener('click', () => { audio.mute(); syncMuteUI() })
    unmuteBtn.addEventListener('click', () => { audio.unmute(); syncMuteUI() })

    muteRow.append(muteBtn, unmuteBtn, muteStatus)
    muteSection.append(muteRow)

    // ── SFX
    const sfxSection = document.createElement('div')
    sfxSection.style.cssText = 'display:flex;flex-direction:column;gap:.75rem;'
    sfxSection.innerHTML = `<span style="${css.label}">SFX built-in — clicca per riprodurre</span>`

    const log = document.createElement('div')
    log.style.cssText = 'display:flex;flex-direction:column;gap:.25rem;min-height:1rem;'

    const grid = sfxGrid(audio, log)
    sfxSection.append(grid)

    // ── Log
    const logSection = document.createElement('div')
    logSection.style.cssText = 'display:flex;flex-direction:column;gap:.5rem;'
    logSection.innerHTML = `<span style="${css.label}">Play log</span>`

    const logBox = document.createElement('div')
    logBox.style.cssText = 'padding:.75rem 1rem;background:var(--arc-color-bg-panel);border:1px solid #1a0a2e;min-height:3.5rem;display:flex;flex-direction:column;gap:.2rem;'
    logBox.innerHTML = `<span style="${css.note}">Interagisci con i bottoni per vedere il log…</span>`

    // override addLog to write to logBox instead
    const originalLog = log
    sfxSection.querySelectorAll && void 0 // noop

    // rewire grid buttons to log in logBox
    grid.querySelectorAll('button').forEach((btn, i) => {
      const id = AudioManager.SFX[i]
      const colors = ['yellow','cyan','green','red','yellow','red']
      btn.onclick = () => {
        audio.play(id)
        addLog(logBox, id, colors[i])
      }
    })

    logSection.append(logBox)

    // ── sessionStorage note
    const note = document.createElement('p')
    note.style.cssText = `${css.note}padding:.5rem .75rem;border-left:2px solid var(--arc-color-cyan);`
    note.textContent = 'Volume e mute sono persistiti in sessionStorage. Naviga tra le storie: lo stato rimane.'

    // ── Howler note
    const webAudioNote = document.createElement('p')
    webAudioNote.style.cssText = `${css.note}padding:.5rem .75rem;border-left:2px solid var(--arc-color-green, #0f0);`
    webAudioNote.innerHTML = `
      <b style="color:var(--arc-color-text)">Suoni built-in:</b> sintetizzati via
      <code style="color:var(--arc-color-cyan)">Web Audio API</code> — nessun file mp3 necessario.
      Per suoni custom usa <code>audio.register('id', '/path/to/file.mp3')</code> con Howler.js.
    `

    wrap.append(statusBar, title, volSection, muteSection, sfxSection, logSection, note, webAudioNote)
    return wrap
  },
}

// ─── Story: Auto-binding ──────────────────────────────────────────────────────

/** @type { import('@storybook/html').StoryObj } */
export const AutoBinding = {
  name: 'Auto-binding su .arc-btn',
  render: () => {
    const audio = AudioManager.getInstance()
    const wrap  = document.createElement('div')
    wrap.style.cssText = css.wrap

    wrap.innerHTML = `
      <h2 style="${css.heading}">AUTO-BINDING</h2>
      <p style="${css.note}">
        AudioManager collega automaticamente i suoni a tutti i
        <code style="color:var(--arc-color-cyan)">.arc-btn</code> al DOMContentLoaded.
        Usa <code>bindArcadeSounds(root)</code> per elementi aggiunti dinamicamente.
      </p>

      <div style="display:flex;flex-direction:column;gap:1.5rem;">

        <!-- Primary: click → select -->
        <div style="display:flex;flex-direction:column;gap:.5rem;">
          <span style="${css.label}">click → play('select')</span>
          <div style="${css.row}">
            <button class="arc-btn arc-btn-primary">INSERT COIN</button>
            <span style="${css.note}">
              <code>.arc-btn-primary</code> → suono <code>select</code> al click (default)
            </span>
          </div>
        </div>

        <hr style="${css.sep}">

        <!-- Qualsiasi bottone: hover → blip -->
        <div style="display:flex;flex-direction:column;gap:.5rem;">
          <span style="${css.label}">mouseenter → play('blip')</span>
          <div style="${css.row}">
            <button class="arc-btn arc-btn-ghost">GHOST BTN</button>
            <button class="arc-btn arc-btn-danger">DANGER BTN</button>
            <span style="${css.note}">tutti i <code>.arc-btn</code> → <code>blip</code> sull'hover</span>
          </div>
        </div>

        <hr style="${css.sep}">

        <!-- Override data-arc-sound-click -->
        <div style="display:flex;flex-direction:column;gap:.5rem;">
          <span style="${css.label}">data-arc-sound-click="win"</span>
          <div style="${css.row}">
            <button class="arc-btn arc-btn-primary" data-arc-sound-click="win">YOU WIN!</button>
            <span style="${css.note}">override: click suona <code>win</code> invece di <code>select</code></span>
          </div>
        </div>

        <hr style="${css.sep}">

        <!-- Override data-arc-sound-hover -->
        <div style="display:flex;flex-direction:column;gap:.5rem;">
          <span style="${css.label}">data-arc-sound-hover="error"</span>
          <div style="${css.row}">
            <button class="arc-btn arc-btn-ghost" data-arc-sound-hover="error">DANGER ZONE</button>
            <span style="${css.note}">override hover: <code>error</code> invece di <code>blip</code></span>
          </div>
        </div>

        <hr style="${css.sep}">

        <!-- Silenzioso -->
        <div style="display:flex;flex-direction:column;gap:.5rem;">
          <span style="${css.label}">data-arc-sound-hover="" — hover silenzioso</span>
          <div style="${css.row}">
            <button class="arc-btn arc-btn-ghost" data-arc-sound-hover="">SILENT HOVER</button>
            <span style="${css.note}">stringa vuota → nessun suono sull'hover</span>
          </div>
        </div>

      </div>
    `

    return wrap
  },
}

// ─── Story: markup dichiarativo (tabs, modal, card) ───────────────────────────

/** @type { import('@storybook/html').StoryObj } */
export const DeclarativeMarkup = {
  name: 'Dichiarativo — markup senza script audio',
  render: () => `
    <div style="padding:2rem;max-width:560px;display:flex;flex-direction:column;gap:1.25rem;">
      <h2 style="font-family:var(--arc-font-pixel);font-size:1rem;margin:0;">DATA-ARC-SOUND-*</h2>
      <p style="font-family:var(--arc-font-mono);font-size:.72rem;color:var(--arc-color-text-muted);margin:0;line-height:1.6;">
        Solo attributi HTML — nessun <code>audio.play()</code> nella story. Il binding avviene via hook Storybook <code>play</code> → <code>bindArcadeSounds</code>.
      </p>
      <div class="arc-tabs arc-tabs-cyan" data-arc-tabs>
        <div class="arc-tab-list" role="tablist">
          <button type="button" class="arc-tab" role="tab" data-arc-sound-click="select">STAGE 1</button>
          <button type="button" class="arc-tab" role="tab" data-arc-sound-click="blip">STAGE 2</button>
        </div>
        <div class="arc-tab-panel" role="tabpanel">Panel 1</div>
        <div class="arc-tab-panel" role="tabpanel">Panel 2</div>
      </div>
      <button type="button" class="arc-btn arc-btn-ghost" data-arc-sound-click="coin">
        OPEN MODAL (coin)
      </button>
      <article class="arc-card arc-card-cyan" data-arc-sound-hover="blip" data-arc-sound-click="win" style="cursor:pointer;padding:1rem;">
        <span class="arc-text-h4" style="margin:0;">HOVER + CLICK CARD</span>
      </article>
    </div>
  `,
}

// ─── Story: SFX Showcase ──────────────────────────────────────────────────────

/** @type { import('@storybook/html').StoryObj } */
export const SFXShowcase = {
  name: 'SFX — tutti i suoni built-in',
  render: () => {
    const audio = AudioManager.getInstance()
    const wrap  = document.createElement('div')
    wrap.style.cssText = css.wrap

    const rows = [
      { id: 'coin',     trigger: 'Apertura dialog',        color: 'yellow' },
      { id: 'select',   trigger: 'Click .arc-btn-primary', color: 'cyan'   },
      { id: 'blip',     trigger: 'Hover .arc-btn',         color: 'green'  },
      { id: 'error',    trigger: 'Validazione fallita',    color: 'red'    },
      { id: 'win',      trigger: 'Completamento',          color: 'yellow' },
      { id: 'gameover', trigger: 'Manuale',                color: 'red'    },
    ]

    const table = document.createElement('div')
    table.style.cssText = 'display:flex;flex-direction:column;gap:.5rem;'

    // Header
    const header = document.createElement('div')
    header.style.cssText = `display:grid;grid-template-columns:100px 1fr 1fr;gap:.5rem;padding:.4rem .75rem;${css.label}border-bottom:1px solid #1a0a2e;`
    header.innerHTML = '<span>PLAY</span><span>ID</span><span>TRIGGER DEFAULT</span>'
    table.appendChild(header)

    rows.forEach(({ id, trigger, color }) => {
      const arcColor = `var(--arc-color-${color === 'green' ? 'green' : color === 'yellow' ? 'yellow' : color === 'red' ? 'red' : 'cyan'})`

      const row = document.createElement('div')
      row.style.cssText = 'display:grid;grid-template-columns:100px 1fr 1fr;gap:.5rem;align-items:center;padding:.35rem .75rem;border-bottom:1px solid #0d001a;'

      const btn = document.createElement('button')
      btn.className = 'arc-btn arc-btn-ghost arc-btn-sm'
      btn.style.cssText = `border-color:${arcColor};color:${arcColor};padding:6px 12px;`
      btn.textContent = '▶ PLAY'
      btn.addEventListener('click', () => audio.play(id))

      const idCell = document.createElement('code')
      idCell.style.cssText = `font-family:var(--arc-font-mono);font-size:.8rem;color:${arcColor};`
      idCell.textContent = `'${id}'`

      const triggerCell = document.createElement('span')
      triggerCell.style.cssText = `${css.note}`
      triggerCell.textContent = trigger

      row.append(btn, idCell, triggerCell)
      table.appendChild(row)
    })

    wrap.innerHTML = `<h2 style="${css.heading}">SFX BUILT-IN</h2>`
    wrap.appendChild(table)

    const codeEx = document.createElement('pre')
    codeEx.style.cssText = 'font-family:var(--arc-font-mono);font-size:.72rem;color:var(--arc-color-text-muted);background:var(--arc-color-bg-panel);padding:1rem;margin:0;line-height:1.7;overflow:auto;'
    codeEx.textContent = [
      'import { AudioManager } from \'@davide03memoli/arcade-ui\'',
      '',
      'const audio = AudioManager.getInstance()',
      '',
      'audio.play(\'coin\')      // apertura dialog',
      'audio.play(\'select\')    // conferma',
      'audio.play(\'blip\')      // navigazione',
      'audio.play(\'error\')     // errore',
      'audio.play(\'win\')       // vittoria',
      'audio.play(\'gameover\')  // game over',
    ].join('\n')

    wrap.appendChild(codeEx)
    return wrap
  },
}

// ─── Story: Playground ───────────────────────────────────────────────────────

/** @type { import('@storybook/html').StoryObj } */
export const Playground = {
  name: 'Playground — scenario reale',
  render: () => {
    const audio = AudioManager.getInstance()
    const wrap  = document.createElement('div')
    wrap.style.cssText = `${css.wrap}max-width:560px;`

    wrap.innerHTML = `
      <h2 style="${css.heading}">
        <span style="color:var(--arc-color-yellow)">★</span>
        STAGE CLEAR
      </h2>
      <p style="${css.note}">
        Esempio di scenario: un pannello con bottoni che usano i suoni built-in
        e override tramite attributi data-*.
      </p>

      <div class="arc-panel arc-panel-cyan" style="gap:1rem;">
        <div class="arc-panel-header">
          <span style="font-family:var(--arc-font-pixel);font-size:.85rem;">PLAYER STATS</span>
          <span class="arc-badge arc-badge-yellow arc-badge-pulse" style="margin-left:auto;">LEVEL 7</span>
        </div>

        <div class="arc-panel-body" style="display:flex;flex-direction:column;gap:.5rem;font-family:var(--arc-font-mono);font-size:.8rem;">
          <div style="display:flex;justify-content:space-between;">
            <span>SCORE</span>
            <span style="color:var(--arc-color-yellow)">024,800</span>
          </div>
          <div style="display:flex;justify-content:space-between;">
            <span>LIVES</span>
            <span style="color:var(--arc-color-red)">♥ ♥ ♥</span>
          </div>
          <div style="display:flex;justify-content:space-between;">
            <span>TIME</span>
            <span style="color:var(--arc-color-cyan)">02:34</span>
          </div>
        </div>

        <div class="arc-panel-footer" style="gap:.75rem;">
          <!-- Primary: auto → select -->
          <button class="arc-btn arc-btn-primary">
            CONTINUE
          </button>

          <!-- Win sound on click -->
          <button class="arc-btn arc-btn-ghost" data-arc-sound-click="win">
            SAVE &amp; EXIT
          </button>

          <!-- Error on hover, gameover on click -->
          <button class="arc-btn arc-btn-danger"
            data-arc-sound-hover="error"
            data-arc-sound-click="gameover">
            QUIT
          </button>
        </div>
      </div>

      <p style="${css.note}">
        <code style="color:var(--arc-color-cyan)">CONTINUE</code> → click suona <code>select</code> (default .arc-btn-primary)<br>
        <code style="color:var(--arc-color-cyan)">SAVE &amp; EXIT</code> → click suona <code>win</code> (data-arc-sound-click)<br>
        <code style="color:var(--arc-color-red)">QUIT</code> → hover suona <code>error</code>, click suona <code>gameover</code>
      </p>
    `

    return wrap
  },
}
