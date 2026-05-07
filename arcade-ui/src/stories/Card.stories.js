// src/stories/Card.stories.js

/** @type { import('@storybook/html').Meta } */
export default {
  title: 'Components/Card',
  decorators: [
    story => `<div style="padding:3rem;background:var(--arc-color-bg);min-height:100vh;">${story()}</div>`,
  ],
  argTypes: {
    color: {
      control: { type: 'select' },
      options: ['cyan', 'red', 'yellow', 'green', 'purple'],
    },
    variant: {
      control: { type: 'select' },
      options: ['none', 'glow', 'selected', 'locked'],
    },
    title: { control: 'text' },
    subtitle: { control: 'text' },
    avatar: { control: 'text' },
  },
  args: {
    color: 'cyan',
    variant: 'none',
    title: 'RYU',
    subtitle: 'Street Fighter',
    avatar: '🥷',
  },
}

function renderCard({ color, variant, title, subtitle, avatar }) {
  const variantClass = variant !== 'none' ? ` arc-card--${variant}` : ''
  return `
    <div class="arc-card arc-card-${color}${variantClass}">
      <div class="arc-card-header">
        <div class="arc-card-avatar">${avatar}</div>
        <p class="arc-card-title">${title}</p>
        <p class="arc-card-subtitle">${subtitle}</p>
      </div>
      <div class="arc-card-body">
        <div class="arc-card-meta">
          <span class="arc-card-meta-key">STR</span>
          <span class="arc-card-meta-value">92</span>
        </div>
        <div class="arc-card-meta">
          <span class="arc-card-meta-key">DEF</span>
          <span class="arc-card-meta-value">78</span>
        </div>
        <div class="arc-card-meta">
          <span class="arc-card-meta-key">SPD</span>
          <span class="arc-card-meta-value">85</span>
        </div>
      </div>
      <div class="arc-card-footer">
        <button class="arc-btn arc-btn-primary arc-btn-sm">SELECT</button>
      </div>
    </div>
  `
}

/** @type { import('@storybook/html').StoryObj } */
export const Default = {
  render: renderCard,
}

export const Glow = {
  args: { color: 'cyan', variant: 'glow', title: 'SONIC', subtitle: 'SEGA Genesis', avatar: '🦔' },
  render: renderCard,
}

export const Selected = {
  args: { color: 'yellow', variant: 'selected', title: 'LINK', subtitle: 'Hyrule', avatar: '🗡️' },
  render: renderCard,
}

export const Locked = {
  args: { color: 'red', variant: 'locked', title: '???', subtitle: 'LOCKED', avatar: '❓' },
  render: renderCard,
}

export const AllColors = {
  render: () => `
    <div style="display:flex;gap:2rem;flex-wrap:wrap;align-items:flex-start;">
      <div class="arc-card arc-card-cyan">
        <div class="arc-card-header">
          <div class="arc-card-avatar">🥷</div>
          <p class="arc-card-title">RYU</p>
          <p class="arc-card-subtitle">Street Fighter</p>
        </div>
        <div class="arc-card-body">
          <div class="arc-card-meta"><span class="arc-card-meta-key">STR</span><span class="arc-card-meta-value">92</span></div>
          <div class="arc-card-meta"><span class="arc-card-meta-key">DEF</span><span class="arc-card-meta-value">78</span></div>
        </div>
        <div class="arc-card-footer">
          <button class="arc-btn arc-btn-primary arc-btn-sm">SELECT</button>
        </div>
      </div>
      <div class="arc-card arc-card-red">
        <div class="arc-card-header">
          <div class="arc-card-avatar">🔥</div>
          <p class="arc-card-title">KEN</p>
          <p class="arc-card-subtitle">USA</p>
        </div>
        <div class="arc-card-body">
          <div class="arc-card-meta"><span class="arc-card-meta-key">STR</span><span class="arc-card-meta-value">88</span></div>
          <div class="arc-card-meta"><span class="arc-card-meta-key">DEF</span><span class="arc-card-meta-value">72</span></div>
        </div>
        <div class="arc-card-footer">
          <button class="arc-btn arc-btn-danger arc-btn-sm">SELECT</button>
        </div>
      </div>
      <div class="arc-card arc-card-yellow">
        <div class="arc-card-header">
          <div class="arc-card-avatar">⚡</div>
          <p class="arc-card-title">PIKACHU</p>
          <p class="arc-card-subtitle">Kanto</p>
        </div>
        <div class="arc-card-body">
          <div class="arc-card-meta"><span class="arc-card-meta-key">SPD</span><span class="arc-card-meta-value">99</span></div>
          <div class="arc-card-meta"><span class="arc-card-meta-key">PWR</span><span class="arc-card-meta-value">68</span></div>
        </div>
        <div class="arc-card-footer">
          <button class="arc-btn arc-btn-primary arc-btn-sm">SELECT</button>
        </div>
      </div>
      <div class="arc-card arc-card-green">
        <div class="arc-card-header">
          <div class="arc-card-avatar">🍄</div>
          <p class="arc-card-title">LUIGI</p>
          <p class="arc-card-subtitle">Mushroom Kingdom</p>
        </div>
        <div class="arc-card-body">
          <div class="arc-card-meta"><span class="arc-card-meta-key">JMP</span><span class="arc-card-meta-value">95</span></div>
          <div class="arc-card-meta"><span class="arc-card-meta-key">STR</span><span class="arc-card-meta-value">70</span></div>
        </div>
        <div class="arc-card-footer">
          <button class="arc-btn arc-btn-primary arc-btn-sm">SELECT</button>
        </div>
      </div>
      <div class="arc-card arc-card-purple">
        <div class="arc-card-header">
          <div class="arc-card-avatar">💜</div>
          <p class="arc-card-title">MEWTWO</p>
          <p class="arc-card-subtitle">Cerulean Cave</p>
        </div>
        <div class="arc-card-body">
          <div class="arc-card-meta"><span class="arc-card-meta-key">PSI</span><span class="arc-card-meta-value">99</span></div>
          <div class="arc-card-meta"><span class="arc-card-meta-key">DEF</span><span class="arc-card-meta-value">90</span></div>
        </div>
        <div class="arc-card-footer">
          <button class="arc-btn arc-btn-primary arc-btn-sm">SELECT</button>
        </div>
      </div>
    </div>
  `,
}

export const AllVariants = {
  render: () => `
    <div style="display:flex;gap:3rem;flex-wrap:wrap;align-items:flex-start;padding-bottom:3rem;">
      <div style="display:flex;flex-direction:column;gap:.5rem;align-items:center;">
        <span style="font-family:var(--arc-font-pixel);font-size:.5rem;color:var(--arc-color-text-muted);letter-spacing:.1em;">DEFAULT</span>
        <div class="arc-card arc-card-cyan">
          <div class="arc-card-header">
            <div class="arc-card-avatar">🥷</div>
            <p class="arc-card-title">FIGHTER</p>
            <p class="arc-card-subtitle">Class A</p>
          </div>
          <div class="arc-card-body">
            <div class="arc-card-meta"><span class="arc-card-meta-key">PWR</span><span class="arc-card-meta-value">80</span></div>
          </div>
          <div class="arc-card-footer">
            <button class="arc-btn arc-btn-primary arc-btn-sm">SELECT</button>
          </div>
        </div>
      </div>
      <div style="display:flex;flex-direction:column;gap:.5rem;align-items:center;">
        <span style="font-family:var(--arc-font-pixel);font-size:.5rem;color:var(--arc-color-text-muted);letter-spacing:.1em;">--GLOW</span>
        <div class="arc-card arc-card-purple arc-card-glow">
          <div class="arc-card-header">
            <div class="arc-card-avatar">✨</div>
            <p class="arc-card-title">WIZARD</p>
            <p class="arc-card-subtitle">Arcane</p>
          </div>
          <div class="arc-card-body">
            <div class="arc-card-meta"><span class="arc-card-meta-key">MGC</span><span class="arc-card-meta-value">99</span></div>
          </div>
          <div class="arc-card-footer">
            <button class="arc-btn arc-btn-primary arc-btn-sm">SELECT</button>
          </div>
        </div>
      </div>
      <div style="display:flex;flex-direction:column;gap:.5rem;align-items:center;padding-bottom:2rem;">
        <span style="font-family:var(--arc-font-pixel);font-size:.5rem;color:var(--arc-color-text-muted);letter-spacing:.1em;">--SELECTED</span>
        <div class="arc-card arc-card-yellow arc-card-selected">
          <div class="arc-card-header">
            <div class="arc-card-avatar">⚔️</div>
            <p class="arc-card-title">WARRIOR</p>
            <p class="arc-card-subtitle">Chosen</p>
          </div>
          <div class="arc-card-body">
            <div class="arc-card-meta"><span class="arc-card-meta-key">STR</span><span class="arc-card-meta-value">95</span></div>
          </div>
          <div class="arc-card-footer">
            <button class="arc-btn arc-btn-primary arc-btn-sm">CONFIRM</button>
          </div>
        </div>
      </div>
      <div style="display:flex;flex-direction:column;gap:.5rem;align-items:center;">
        <span style="font-family:var(--arc-font-pixel);font-size:.5rem;color:var(--arc-color-text-muted);letter-spacing:.1em;">--LOCKED</span>
        <div class="arc-card arc-card-red arc-card-locked">
          <div class="arc-card-header">
            <div class="arc-card-avatar">❓</div>
            <p class="arc-card-title">???</p>
            <p class="arc-card-subtitle">LOCKED</p>
          </div>
          <div class="arc-card-body">
            <div class="arc-card-meta"><span class="arc-card-meta-key">LVL</span><span class="arc-card-meta-value">??</span></div>
          </div>
          <div class="arc-card-footer">
            <button class="arc-btn arc-btn-ghost arc-btn-sm" disabled>LOCKED</button>
          </div>
        </div>
      </div>
    </div>
  `,
}

export const CharacterSelectScreen = {
  name: 'Character Select — Demo Grid',
  parameters: {
    layout: 'fullscreen',
    backgrounds: { default: 'arcade-dark' },
  },
  render: () => `
    <div style="
      background: var(--arc-color-bg);
      min-height: 100vh;
      padding: var(--arc-space-4);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: var(--arc-space-4);
    ">
      <h1 style="
        font-family: var(--arc-font-pixel);
        font-size: 1rem;
        letter-spacing: .2em;
        color: var(--arc-color-cyan);
        text-shadow: 0 0 20px var(--arc-color-cyan-glow);
        text-transform: uppercase;
        margin: 0;
      ">
        ─── SELECT YOUR CHARACTER ───
      </h1>

      <div style="
        display: grid;
        grid-template-columns: repeat(auto-fit, 220px);
        gap: var(--arc-space-3);
        justify-content: center;
        width: 100%;
        max-width: 1200px;
      ">

        <!-- P1 SELECTED -->
        <div style="display:flex;flex-direction:column;align-items:center;gap:var(--arc-space-3);">
          <div class="arc-card arc-card-cyan arc-card-selected">
            <div class="arc-card-header">
              <div class="arc-card-avatar">🥷</div>
              <p class="arc-card-title">RYU</p>
              <p class="arc-card-subtitle">Street Fighter</p>
            </div>
            <div class="arc-card-body">
              <div class="arc-card-meta"><span class="arc-card-meta-key">STR</span><span class="arc-card-meta-value">92</span></div>
              <div class="arc-card-meta"><span class="arc-card-meta-key">DEF</span><span class="arc-card-meta-value">78</span></div>
              <div class="arc-card-meta"><span class="arc-card-meta-key">SPD</span><span class="arc-card-meta-value">85</span></div>
            </div>
            <div class="arc-card-footer">
              <button class="arc-btn arc-btn-primary arc-btn-sm">CONFIRM</button>
            </div>
          </div>
        </div>

        <!-- Normal -->
        <div class="arc-card arc-card-red">
          <div class="arc-card-header">
            <div class="arc-card-avatar">🔥</div>
            <p class="arc-card-title">KEN</p>
            <p class="arc-card-subtitle">USA</p>
          </div>
          <div class="arc-card-body">
            <div class="arc-card-meta"><span class="arc-card-meta-key">STR</span><span class="arc-card-meta-value">88</span></div>
            <div class="arc-card-meta"><span class="arc-card-meta-key">DEF</span><span class="arc-card-meta-value">72</span></div>
            <div class="arc-card-meta"><span class="arc-card-meta-key">SPD</span><span class="arc-card-meta-value">90</span></div>
          </div>
          <div class="arc-card-footer">
            <button class="arc-btn arc-btn-danger arc-btn-sm">SELECT</button>
          </div>
        </div>

        <!-- Glow -->
        <div class="arc-card arc-card-purple arc-card-glow">
          <div class="arc-card-header">
            <div class="arc-card-avatar">💜</div>
            <p class="arc-card-title">MEWTWO</p>
            <p class="arc-card-subtitle">Cerulean Cave</p>
          </div>
          <div class="arc-card-body">
            <div class="arc-card-meta"><span class="arc-card-meta-key">PSI</span><span class="arc-card-meta-value">99</span></div>
            <div class="arc-card-meta"><span class="arc-card-meta-key">DEF</span><span class="arc-card-meta-value">90</span></div>
            <div class="arc-card-meta"><span class="arc-card-meta-key">SPD</span><span class="arc-card-meta-value">80</span></div>
          </div>
          <div class="arc-card-footer">
            <button class="arc-btn arc-btn-primary arc-btn-sm">SELECT</button>
          </div>
        </div>

        <!-- Normal yellow -->
        <div class="arc-card arc-card-yellow">
          <div class="arc-card-header">
            <div class="arc-card-avatar">⚡</div>
            <p class="arc-card-title">PIKACHU</p>
            <p class="arc-card-subtitle">Kanto</p>
          </div>
          <div class="arc-card-body">
            <div class="arc-card-meta"><span class="arc-card-meta-key">SPD</span><span class="arc-card-meta-value">99</span></div>
            <div class="arc-card-meta"><span class="arc-card-meta-key">PWR</span><span class="arc-card-meta-value">68</span></div>
            <div class="arc-card-meta"><span class="arc-card-meta-key">DEF</span><span class="arc-card-meta-value">55</span></div>
          </div>
          <div class="arc-card-footer">
            <button class="arc-btn arc-btn-primary arc-btn-sm">SELECT</button>
          </div>
        </div>

        <!-- Normal green -->
        <div class="arc-card arc-card-green">
          <div class="arc-card-header">
            <div class="arc-card-avatar">🍄</div>
            <p class="arc-card-title">LUIGI</p>
            <p class="arc-card-subtitle">Mushroom Kingdom</p>
          </div>
          <div class="arc-card-body">
            <div class="arc-card-meta"><span class="arc-card-meta-key">JMP</span><span class="arc-card-meta-value">95</span></div>
            <div class="arc-card-meta"><span class="arc-card-meta-key">STR</span><span class="arc-card-meta-value">70</span></div>
            <div class="arc-card-meta"><span class="arc-card-meta-key">SPD</span><span class="arc-card-meta-value">80</span></div>
          </div>
          <div class="arc-card-footer">
            <button class="arc-btn arc-btn-primary arc-btn-sm">SELECT</button>
          </div>
        </div>

        <!-- Locked -->
        <div class="arc-card arc-card-red arc-card-locked">
          <div class="arc-card-header">
            <div class="arc-card-avatar">❓</div>
            <p class="arc-card-title">???</p>
            <p class="arc-card-subtitle">LOCKED</p>
          </div>
          <div class="arc-card-body">
            <div class="arc-card-meta"><span class="arc-card-meta-key">LVL</span><span class="arc-card-meta-value">??</span></div>
            <div class="arc-card-meta"><span class="arc-card-meta-key">REQ</span><span class="arc-card-meta-value">LVL 10</span></div>
            <div class="arc-card-meta"><span class="arc-card-meta-key">EXP</span><span class="arc-card-meta-value">??</span></div>
          </div>
          <div class="arc-card-footer">
            <button class="arc-btn arc-btn-ghost arc-btn-sm" disabled>LOCKED</button>
          </div>
        </div>

      </div>

      <p style="
        font-family: var(--arc-font-pixel);
        font-size: .5rem;
        color: var(--arc-color-text-muted);
        letter-spacing: .15em;
        animation: blink 1s steps(1) infinite;
        margin: 0;
      ">PRESS START TO CONFIRM</p>
    </div>
  `,
}

export const NoFooter = {
  render: () => `
    <div class="arc-card arc-card-cyan">
      <div class="arc-card-header">
        <div class="arc-card-avatar">🎮</div>
        <p class="arc-card-title">PLAYER 1</p>
        <p class="arc-card-subtitle">Ready</p>
      </div>
      <div class="arc-card-body">
        <div class="arc-card-meta"><span class="arc-card-meta-key">SCORE</span><span class="arc-card-meta-value">12,400</span></div>
        <div class="arc-card-meta"><span class="arc-card-meta-key">LIVES</span><span class="arc-card-meta-value">3</span></div>
      </div>
    </div>
  `,
}

export const WithBadge = {
  render: () => `
    <div class="arc-card arc-card-purple arc-card-glow" style="padding-top:var(--arc-space-1);">
      <div class="arc-card-header">
        <div style="position:relative;display:inline-block;">
          <div class="arc-card-avatar">🧙</div>
          <span class="arc-badge arc-badge-yellow" style="position:absolute;top:-6px;right:-8px;">★</span>
        </div>
        <p class="arc-card-title">DARK MAGE</p>
        <p class="arc-card-subtitle">Legendary</p>
      </div>
      <div class="arc-card-body">
        <div class="arc-card-meta"><span class="arc-card-meta-key">MGC</span><span class="arc-card-meta-value">99</span></div>
        <div class="arc-card-meta"><span class="arc-card-meta-key">INT</span><span class="arc-card-meta-value">96</span></div>
        <div class="arc-card-meta"><span class="arc-card-meta-key">STR</span><span class="arc-card-meta-value">42</span></div>
      </div>
      <div class="arc-card-footer">
        <button class="arc-btn arc-btn-primary arc-btn-sm">SELECT</button>
        <button class="arc-btn arc-btn-ghost arc-btn-sm">INFO</button>
      </div>
    </div>
  `,
}
