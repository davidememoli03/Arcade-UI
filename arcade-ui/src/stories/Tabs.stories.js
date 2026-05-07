// src/stories/Tabs.stories.js

/** @type { import('@storybook/html').Meta } */
export default {
  title: 'Components/Tabs',
  decorators: [
    story => `<div style="padding:2rem;max-width:720px;">${story()}</div>`,
  ],
  argTypes: {
    color: {
      control: { type: 'select' },
      options: ['cyan', 'magenta', 'yellow', 'green', 'red', 'purple'],
    },
    mode: {
      control: { type: 'radio' },
      options: ['css-only', 'js-driven'],
      description: 'CSS-only usa radio + :has(); js-driven usa data-arc-tabs + arcTabs()',
    },
  },
  args: {
    color: 'cyan',
    mode: 'css-only',
  },
}

// ─── CSS-only helper ──────────────────────────────────────────────────────────

function cssOnlyTabs({ color, tabs }) {
  const uid = `tabs-${Math.random().toString(36).slice(2, 7)}`
  const radios = tabs.map((_, i) =>
    `<input class="arc-tab-radio" type="radio" name="${uid}" id="${uid}-${i + 1}"${i === 0 ? ' checked' : ''}>`,
  ).join('\n  ')

  const labels = tabs.map((t, i) =>
    `<label class="arc-tab" for="${uid}-${i + 1}">${t.label}</label>`,
  ).join('\n    ')

  const panels = tabs.map(t => `
    <div class="arc-tab-panel">
      ${t.content}
    </div>`).join('')

  return `
  <div class="arc-tabs arc-tabs-${color}">
    ${radios}
    <div class="arc-tab-list" role="tablist">
    ${labels}
    </div>
    ${panels}
  </div>`
}

// ─── JS-driven helper ─────────────────────────────────────────────────────────

function jsDrivenTabs({ color, tabs }) {
  const buttons = tabs.map(t =>
    `<button class="arc-tab" role="tab">${t.label}</button>`,
  ).join('\n    ')

  const panels = tabs.map(t => `
    <div class="arc-tab-panel" role="tabpanel">
      ${t.content}
    </div>`).join('')

  return `
  <div class="arc-tabs arc-tabs-${color}" data-arc-tabs>
    <div class="arc-tab-list" role="tablist">
    ${buttons}
    </div>
    ${panels}
  </div>
  <script type="module">
    import { arcTabs } from '/src/index.js'
    document.querySelectorAll('.arc-tabs[data-arc-tabs]').forEach(arcTabs)
  </script>`
}

// ─── Stories ──────────────────────────────────────────────────────────────────

const defaultTabs = [
  {
    label: 'PLAYER',
    content: `
      <div style="display:flex;flex-direction:column;gap:.75rem;">
        <div style="display:flex;justify-content:space-between;">
          <span style="font-family:var(--arc-font-pixel);font-size:.55rem;color:var(--arc-color-text-muted);letter-spacing:.1em;">ALIAS</span>
          <span style="font-family:var(--arc-font-pixel);font-size:.55rem;color:var(--arc-color-cyan);">NEON_RUNNER_07</span>
        </div>
        <div style="display:flex;justify-content:space-between;">
          <span style="font-family:var(--arc-font-pixel);font-size:.55rem;color:var(--arc-color-text-muted);letter-spacing:.1em;">RANK</span>
          <span class="arc-badge arc-badge-yellow">★ ACE</span>
        </div>
        <div style="display:flex;justify-content:space-between;">
          <span style="font-family:var(--arc-font-pixel);font-size:.55rem;color:var(--arc-color-text-muted);letter-spacing:.1em;">STATUS</span>
          <span class="arc-badge arc-badge-green arc-badge-pulse">ONLINE</span>
        </div>
      </div>`,
  },
  {
    label: 'STATS',
    content: `
      <div style="display:flex;flex-direction:column;gap:.5rem;">
        <div style="display:flex;justify-content:space-between;align-items:center;gap:1rem;">
          <span style="font-family:var(--arc-font-pixel);font-size:.5rem;color:var(--arc-color-text-muted);white-space:nowrap;">SCORE</span>
          <div class="arc-progress-wrapper arc-progress-cyan" style="flex:1;">
            <div class="arc-progress arc-progress-sm" style="--arc-progress:78%;"><div class="arc-progress-bar"></div></div>
          </div>
          <span style="font-family:var(--arc-font-pixel);font-size:.5rem;color:var(--arc-color-cyan);">78K</span>
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center;gap:1rem;">
          <span style="font-family:var(--arc-font-pixel);font-size:.5rem;color:var(--arc-color-text-muted);white-space:nowrap;">LIVES</span>
          <div class="arc-progress-wrapper arc-progress-green" style="flex:1;">
            <div class="arc-progress arc-progress-sm" style="--arc-progress:60%;"><div class="arc-progress-bar"></div></div>
          </div>
          <span style="font-family:var(--arc-font-pixel);font-size:.5rem;color:var(--arc-color-green);">3</span>
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center;gap:1rem;">
          <span style="font-family:var(--arc-font-pixel);font-size:.5rem;color:var(--arc-color-text-muted);white-space:nowrap;">POWER</span>
          <div class="arc-progress-wrapper arc-progress-red" style="flex:1;">
            <div class="arc-progress arc-progress-sm" style="--arc-progress:35%;"><div class="arc-progress-bar"></div></div>
          </div>
          <span style="font-family:var(--arc-font-pixel);font-size:.5rem;color:var(--arc-color-red);">LOW</span>
        </div>
      </div>`,
  },
  {
    label: 'MISSIONS',
    content: `
      <div style="display:flex;flex-direction:column;gap:.75rem;">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <span>▶ SECTOR 9 SWEEP</span>
          <span class="arc-badge arc-badge-cyan">ACTIVE</span>
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <span>▶ CARGO ESCORT</span>
          <span class="arc-badge arc-badge-yellow">PENDING</span>
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <span>▶ BOSS RAID</span>
          <span class="arc-badge arc-badge-red arc-badge-pulse">URGENT</span>
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <span>▶ RECON RUN</span>
          <span class="arc-badge arc-badge-green">DONE</span>
        </div>
      </div>`,
  },
  {
    label: 'SETTINGS',
    content: `
      <div style="display:flex;flex-direction:column;gap:1rem;">
        <div class="arc-input-wrapper">
          <label class="arc-label">CALLSIGN</label>
          <input class="arc-input" value="NEON_RUNNER_07" placeholder="ENTER CALLSIGN">
        </div>
        <div style="display:flex;gap:.75rem;">
          <button class="arc-btn arc-btn-primary arc-btn-sm">SAVE</button>
          <button class="arc-btn arc-btn-ghost arc-btn-sm">RESET</button>
        </div>
      </div>`,
  },
]

/** @type { import('@storybook/html').StoryObj } */
export const CSSOnly = {
  name: 'CSS-only (radio + :has)',
  args: { color: 'cyan' },
  render: ({ color }) => cssOnlyTabs({ color, tabs: defaultTabs }),
}

export const Magenta = {
  name: 'CSS-only — Magenta',
  args: { color: 'magenta' },
  render: ({ color }) => cssOnlyTabs({ color, tabs: defaultTabs }),
}

export const JSDriven = {
  name: 'JS-driven (data-arc-tabs)',
  args: { color: 'cyan' },
  render: ({ color }) => jsDrivenTabs({ color, tabs: defaultTabs }),
}

export const AllColors = {
  render: () => `
    <div style="display:flex;flex-direction:column;gap:2rem;">

      <div class="arc-tabs arc-tabs-cyan">
        <input class="arc-tab-radio" type="radio" name="demo-cyan" id="dc-1" checked>
        <input class="arc-tab-radio" type="radio" name="demo-cyan" id="dc-2">
        <div class="arc-tab-list">
          <label class="arc-tab" for="dc-1">STAGE 01</label>
          <label class="arc-tab" for="dc-2">STAGE 02</label>
        </div>
        <div class="arc-tab-panel">Cyan (primary) — stile default HUD.</div>
        <div class="arc-tab-panel">Secondo pannello cyan.</div>
      </div>

      <div class="arc-tabs arc-tabs-magenta">
        <input class="arc-tab-radio" type="radio" name="demo-magenta" id="dm-1" checked>
        <input class="arc-tab-radio" type="radio" name="demo-magenta" id="dm-2">
        <div class="arc-tab-list">
          <label class="arc-tab" for="dm-1">STAGE 01</label>
          <label class="arc-tab" for="dm-2">STAGE 02</label>
        </div>
        <div class="arc-tab-panel">Magenta (secondary) — stile speciale.</div>
        <div class="arc-tab-panel">Secondo pannello magenta.</div>
      </div>

      <div class="arc-tabs arc-tabs-yellow">
        <input class="arc-tab-radio" type="radio" name="demo-yellow" id="dy-1" checked>
        <input class="arc-tab-radio" type="radio" name="demo-yellow" id="dy-2">
        <div class="arc-tab-list">
          <label class="arc-tab" for="dy-1">COINS</label>
          <label class="arc-tab" for="dy-2">REWARDS</label>
        </div>
        <div class="arc-tab-panel">Yellow — monete, avvisi, highlights.</div>
        <div class="arc-tab-panel">Secondo pannello yellow.</div>
      </div>

      <div class="arc-tabs arc-tabs-green">
        <input class="arc-tab-radio" type="radio" name="demo-green" id="dg-1" checked>
        <input class="arc-tab-radio" type="radio" name="demo-green" id="dg-2">
        <div class="arc-tab-list">
          <label class="arc-tab" for="dg-1">HEALTH</label>
          <label class="arc-tab" for="dg-2">SHIELD</label>
        </div>
        <div class="arc-tab-panel">Green — vita, successo, completamento.</div>
        <div class="arc-tab-panel">Secondo pannello green.</div>
      </div>

      <div class="arc-tabs arc-tabs-red">
        <input class="arc-tab-radio" type="radio" name="demo-red" id="dr-1" checked>
        <input class="arc-tab-radio" type="radio" name="demo-red" id="dr-2">
        <div class="arc-tab-list">
          <label class="arc-tab" for="dr-1">ALERTS</label>
          <label class="arc-tab" for="dr-2">ERRORS</label>
        </div>
        <div class="arc-tab-panel">Red — pericolo, danno, errori critici.</div>
        <div class="arc-tab-panel">Secondo pannello red.</div>
      </div>

      <div class="arc-tabs arc-tabs-purple">
        <input class="arc-tab-radio" type="radio" name="demo-purple" id="dp-1" checked>
        <input class="arc-tab-radio" type="radio" name="demo-purple" id="dp-2">
        <div class="arc-tab-list">
          <label class="arc-tab" for="dp-1">MAGIC</label>
          <label class="arc-tab" for="dp-2">SPELLS</label>
        </div>
        <div class="arc-tab-panel">Purple — magia, potere speciale, arcano.</div>
        <div class="arc-tab-panel">Secondo pannello purple.</div>
      </div>

    </div>
  `,
}

export const MultiPanelDemo = {
  name: 'Multi-panel — Mission Control',
  parameters: {
    layout: 'fullscreen',
    backgrounds: { default: 'arcade-dark' },
  },
  render: () => `
    <div style="
      background:var(--arc-color-bg);
      min-height:100vh;
      padding:var(--arc-space-4);
      display:flex;
      flex-direction:column;
      gap:var(--arc-space-4);
      max-width:860px;
      margin:0 auto;
    ">
      <h1 style="
        font-family:var(--arc-font-pixel);
        font-size:.85rem;
        letter-spacing:.2em;
        color:var(--arc-color-cyan);
        text-shadow:0 0 20px var(--arc-color-cyan-glow);
        text-transform:uppercase;
        margin:0;
      ">── MISSION CONTROL ──</h1>

      <div class="arc-tabs arc-tabs-cyan">
        <input class="arc-tab-radio" type="radio" name="mc" id="mc-1" checked>
        <input class="arc-tab-radio" type="radio" name="mc" id="mc-2">
        <input class="arc-tab-radio" type="radio" name="mc" id="mc-3">
        <input class="arc-tab-radio" type="radio" name="mc" id="mc-4">

        <div class="arc-tab-list" role="tablist">
          <label class="arc-tab" for="mc-1">▶ PLAYER</label>
          <label class="arc-tab" for="mc-2">▶ STATS</label>
          <label class="arc-tab" for="mc-3">▶ MISSIONS</label>
          <label class="arc-tab" for="mc-4">▶ SETTINGS</label>
        </div>

        <!-- Panel 1: Player -->
        <div class="arc-tab-panel">
          <div style="display:flex;flex-direction:column;gap:1rem;">
            <div style="display:flex;align-items:center;gap:1.5rem;">
              <div style="
                width:80px;height:80px;
                border:var(--arc-border-sm) solid var(--arc-color-cyan);
                box-shadow:0 0 10px var(--arc-color-cyan-glow);
                display:flex;align-items:center;justify-content:center;
                font-size:2.5rem;
                background:rgb(0 245 255 / 5%);
                flex-shrink:0;
              ">🥷</div>
              <div style="display:flex;flex-direction:column;gap:.5rem;">
                <span style="font-family:var(--arc-font-pixel);font-size:.65rem;color:var(--arc-color-cyan);letter-spacing:.1em;">NEON_RUNNER_07</span>
                <div style="display:flex;gap:.5rem;flex-wrap:wrap;">
                  <span class="arc-badge arc-badge-yellow">★ ACE</span>
                  <span class="arc-badge arc-badge-green arc-badge-pulse">ONLINE</span>
                  <span class="arc-badge arc-badge-cyan">LVL 42</span>
                </div>
              </div>
            </div>
            <div style="display:flex;flex-direction:column;gap:.5rem;">
              <div style="display:flex;justify-content:space-between;font-family:var(--arc-font-pixel);font-size:.5rem;letter-spacing:.08em;">
                <span style="color:var(--arc-color-text-muted);">FACTION</span>
                <span style="color:var(--arc-color-cyan);">NEON GRID</span>
              </div>
              <div style="display:flex;justify-content:space-between;font-family:var(--arc-font-pixel);font-size:.5rem;letter-spacing:.08em;">
                <span style="color:var(--arc-color-text-muted);">KILLS</span>
                <span style="color:var(--arc-color-yellow);">1,337</span>
              </div>
              <div style="display:flex;justify-content:space-between;font-family:var(--arc-font-pixel);font-size:.5rem;letter-spacing:.08em;">
                <span style="color:var(--arc-color-text-muted);">WINS</span>
                <span style="color:var(--arc-color-green);">87%</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Panel 2: Stats -->
        <div class="arc-tab-panel">
          <div style="display:flex;flex-direction:column;gap:.75rem;">
            <div style="display:flex;align-items:center;gap:1rem;">
              <span style="font-family:var(--arc-font-pixel);font-size:.5rem;color:var(--arc-color-text-muted);width:56px;flex-shrink:0;">SCORE</span>
              <div class="arc-progress-wrapper arc-progress-cyan" style="flex:1;">
                <div class="arc-progress arc-progress-sm" style="--arc-progress:78%;"><div class="arc-progress-bar"></div></div>
              </div>
              <span style="font-family:var(--arc-font-pixel);font-size:.5rem;color:var(--arc-color-cyan);width:40px;text-align:right;">78K</span>
            </div>
            <div style="display:flex;align-items:center;gap:1rem;">
              <span style="font-family:var(--arc-font-pixel);font-size:.5rem;color:var(--arc-color-text-muted);width:56px;flex-shrink:0;">HEALTH</span>
              <div class="arc-progress-wrapper arc-progress-green" style="flex:1;">
                <div class="arc-progress arc-progress-sm" style="--arc-progress:60%;"><div class="arc-progress-bar"></div></div>
              </div>
              <span style="font-family:var(--arc-font-pixel);font-size:.5rem;color:var(--arc-color-green);width:40px;text-align:right;">60%</span>
            </div>
            <div style="display:flex;align-items:center;gap:1rem;">
              <span style="font-family:var(--arc-font-pixel);font-size:.5rem;color:var(--arc-color-text-muted);width:56px;flex-shrink:0;">POWER</span>
              <div class="arc-progress-wrapper arc-progress-red" style="flex:1;">
                <div class="arc-progress arc-progress-sm" style="--arc-progress:35%;"><div class="arc-progress-bar"></div></div>
              </div>
              <span style="font-family:var(--arc-font-pixel);font-size:.5rem;color:var(--arc-color-red);width:40px;text-align:right;">LOW</span>
            </div>
            <div style="display:flex;align-items:center;gap:1rem;">
              <span style="font-family:var(--arc-font-pixel);font-size:.5rem;color:var(--arc-color-text-muted);width:56px;flex-shrink:0;">XP</span>
              <div class="arc-progress-wrapper arc-progress-yellow" style="flex:1;">
                <div class="arc-progress arc-progress-sm" style="--arc-progress:92%;"><div class="arc-progress-bar"></div></div>
              </div>
              <span style="font-family:var(--arc-font-pixel);font-size:.5rem;color:var(--arc-color-yellow);width:40px;text-align:right;">92%</span>
            </div>
          </div>
        </div>

        <!-- Panel 3: Missions -->
        <div class="arc-tab-panel">
          <div style="display:flex;flex-direction:column;gap:.75rem;font-family:var(--arc-font-terminal);font-size:1.1rem;">
            <div style="display:flex;justify-content:space-between;align-items:center;padding:.5rem 0;border-bottom:1px solid rgb(0 245 255 / 15%);">
              <span>▶ SECTOR 9 SWEEP</span>
              <span class="arc-badge arc-badge-cyan">ACTIVE</span>
            </div>
            <div style="display:flex;justify-content:space-between;align-items:center;padding:.5rem 0;border-bottom:1px solid rgb(0 245 255 / 15%);">
              <span>▶ CARGO ESCORT</span>
              <span class="arc-badge arc-badge-yellow">PENDING</span>
            </div>
            <div style="display:flex;justify-content:space-between;align-items:center;padding:.5rem 0;border-bottom:1px solid rgb(0 245 255 / 15%);">
              <span>▶ BOSS RAID</span>
              <span class="arc-badge arc-badge-red arc-badge-pulse">URGENT</span>
            </div>
            <div style="display:flex;justify-content:space-between;align-items:center;padding:.5rem 0;">
              <span>▶ RECON RUN</span>
              <span class="arc-badge arc-badge-green">DONE</span>
            </div>
          </div>
        </div>

        <!-- Panel 4: Settings -->
        <div class="arc-tab-panel">
          <div style="display:flex;flex-direction:column;gap:1.25rem;">
            <div class="arc-input-wrapper">
              <label class="arc-label">CALLSIGN</label>
              <input class="arc-input" value="NEON_RUNNER_07" placeholder="ENTER CALLSIGN" maxlength="20">
            </div>
            <div class="arc-input-wrapper">
              <label class="arc-label">FACTION</label>
              <input class="arc-input" value="NEON GRID" placeholder="ENTER FACTION">
            </div>
            <div style="display:flex;gap:var(--arc-space-1);">
              <button class="arc-btn arc-btn-primary arc-btn-sm">SAVE</button>
              <button class="arc-btn arc-btn-ghost arc-btn-sm">RESET</button>
              <button class="arc-btn arc-btn-danger arc-btn-sm">DELETE</button>
            </div>
          </div>
        </div>

      </div>

      <!-- Second tabs widget: Magenta secondary style -->
      <div class="arc-tabs arc-tabs-magenta">
        <input class="arc-tab-radio" type="radio" name="alerts" id="al-1" checked>
        <input class="arc-tab-radio" type="radio" name="alerts" id="al-2">
        <input class="arc-tab-radio" type="radio" name="alerts" id="al-3">

        <div class="arc-tab-list" role="tablist">
          <label class="arc-tab" for="al-1">ALERTS</label>
          <label class="arc-tab" for="al-2">ENEMIES</label>
          <label class="arc-tab" for="al-3">SYSTEM</label>
        </div>

        <div class="arc-tab-panel">
          Enemy drones detected near sector 9. Deploy counter-measures immediately.
        </div>
        <div class="arc-tab-panel">
          3 enemy units on approach. ETA 2 minutes. Engage defensive protocol.
        </div>
        <div class="arc-tab-panel">
          All arcade subsystems nominal. Shield integrity: 87%. Weapons: ONLINE.
        </div>
      </div>

    </div>
  `,
}

export const InPanel = {
  name: 'Tabs inside Panel',
  render: () => `
    <div class="arc-panel arc-panel-cyan" style="max-width:560px;">
      <div class="arc-panel-header">
        CONTROL PANEL
        <span class="arc-badge arc-badge-green arc-badge-pulse" style="margin-left:auto;">LIVE</span>
      </div>
      <div class="arc-panel-body" style="padding:0;">
        <div class="arc-tabs arc-tabs-cyan" style="border:none;box-shadow:none;background:transparent;">
          <input class="arc-tab-radio" type="radio" name="panel-tabs" id="pt-1" checked>
          <input class="arc-tab-radio" type="radio" name="panel-tabs" id="pt-2">
          <div class="arc-tab-list" style="background:transparent;">
            <label class="arc-tab" for="pt-1">OVERVIEW</label>
            <label class="arc-tab" for="pt-2">DETAILS</label>
          </div>
          <div class="arc-tab-panel">
            System operational. All units reporting green status.
          </div>
          <div class="arc-tab-panel">
            CPU: 12% · RAM: 4.2 GB · NET: 820 Mb/s · UPTIME: 14d 3h
          </div>
        </div>
      </div>
      <div class="arc-panel-footer">
        <button class="arc-btn arc-btn-ghost arc-btn-sm">CLOSE</button>
      </div>
    </div>
  `,
}
