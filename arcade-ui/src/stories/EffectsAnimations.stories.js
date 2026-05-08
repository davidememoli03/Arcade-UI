// src/stories/EffectsAnimations.stories.js
// Utility .arc-anim-* — keyframe in tokens/animation.css

/** @type { import('@storybook/html').Meta } */
export default {
  title: 'Effects/Animations',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Utility `.arc-anim-*` per effetti CRT / cabinato. I keyframe globali ' +
          '(blink, pulse-glow, glitch, arc-flicker, …) vivono in `tokens/animation.css`.',
      },
    },
  },
}

const panel = (title, inner, extraStyle = '') => `
<div style="flex:1;min-width:240px;max-width:360px;">
  <p class="arc-text-caption" style="margin:0 0 10px;color:var(--arc-color-text-muted);text-transform:uppercase;letter-spacing:.08em;">
    ${title}
  </p>
  <div style="${extraStyle}">${inner}</div>
</div>`

/** @type { import('@storybook/html').StoryObj } */
export const Showcase = {
  name: 'All utilities',
  render: () => `
<div style="display:flex;flex-wrap:wrap;gap:28px;align-items:flex-start;">
  ${panel(
    '.arc-anim-flicker',
    `<div class="arc-anim-flicker" style="padding:var(--arc-space-4);background:var(--arc-color-bg-panel);border:2px solid var(--arc-color-cyan);font-family:var(--arc-font-pixel);color:var(--arc-color-cyan);">
      CRT FLICKER
    </div>`,
  )}
  ${panel(
    '.arc-anim-blink-cursor',
    `<div style="font-family:var(--arc-font-terminal);color:var(--arc-color-green);font-size:1.1rem;">
      &gt; READY<span class="arc-anim-blink-cursor" style="display:inline-block;width:.65em;height:1.1em;margin-left:4px;background:currentColor;vertical-align:-3px;" aria-hidden="true"></span>
    </div>`,
  )}
  ${panel(
    '.arc-anim-insert-coin',
    `<div class="arc-anim-insert-coin arc-glow-yellow" style="font-family:var(--arc-font-pixel);font-size:1.4rem;text-align:center;padding:var(--arc-space-3);">
      INSERT COIN
    </div>`,
  )}
  ${panel(
    '.arc-anim-scanline-move',
    `<div class="arc-anim-scanline-move" style="min-height:100px;padding:var(--arc-space-4);background:var(--arc-color-bg-panel);border:2px solid var(--arc-color-cyan);font-family:var(--arc-font-pixel);color:var(--arc-color-text);">
      SCANLINE OVERLAY
    </div>`,
  )}
  ${panel(
    '.arc-anim-static-noise',
    `<div class="arc-anim-static-noise" style="min-height:100px;padding:var(--arc-space-4);background:var(--arc-color-bg-panel);border:2px solid var(--arc-color-red);font-family:var(--arc-font-pixel);color:var(--arc-color-red);">
      NOISE SIGNAL
    </div>`,
  )}
</div>`,
}

/** @type { import('@storybook/html').StoryObj } */
export const FlickerPlayground = {
  name: 'Flicker (controls)',
  render: () => {
    const root = document.createElement('div')
    root.style.cssText =
      'padding:2rem;max-width:420px;font-family:var(--arc-font-mono);color:var(--arc-color-text);'
    root.innerHTML = `
      <label style="display:flex;align-items:center;gap:12px;margin-bottom:12px;">
        <span style="min-width:120px;">--arc-flicker-speed</span>
        <input type="range" data-f-speed min="0.2" max="2" step="0.05" value="0.72" style="flex:1;">
        <span data-f-speed-lbl style="min-width:3.5rem;">0.72s</span>
      </label>
      <label style="display:flex;align-items:center;gap:12px;margin-bottom:20px;">
        <span style="min-width:120px;">--arc-flicker-intensity</span>
        <input type="range" data-f-int min="0.1" max="1" step="0.05" value="0.45" style="flex:1;">
        <span data-f-int-lbl style="min-width:3.5rem;">0.45</span>
      </label>
      <div class="arc-anim-flicker" data-flicker-panel style="padding:var(--arc-space-4);background:var(--arc-color-bg-panel);border:2px solid var(--arc-color-cyan);font-family:var(--arc-font-pixel);color:var(--arc-color-cyan);font-size:1.2rem;">
        ADJUST FLICKER
      </div>
    `
    const panelEl = root.querySelector('[data-flicker-panel]')
    const speed = root.querySelector('[data-f-speed]')
    const speedLbl = root.querySelector('[data-f-speed-lbl]')
    const int = root.querySelector('[data-f-int]')
    const intLbl = root.querySelector('[data-f-int-lbl]')
    speed.addEventListener('input', () => {
      const v = speed.value
      speedLbl.textContent = `${v}s`
      panelEl.style.setProperty('--arc-flicker-speed', `${v}s`)
    })
    int.addEventListener('input', () => {
      const v = int.value
      intLbl.textContent = v
      panelEl.style.setProperty('--arc-flicker-intensity', v)
    })
    return root
  },
}

/** @type { import('@storybook/html').StoryObj } */
export const PowerOnReplay = {
  name: 'Power on (replay)',
  render: () => {
    const root = document.createElement('div')
    root.style.cssText = 'padding:2rem;'
    root.innerHTML = `
      <p style="font-family:var(--arc-font-mono);color:var(--arc-color-text-muted);margin:0 0 12px;">
        Clic per rieseguire <code style="color:var(--arc-color-cyan)">.arc-anim-power-on</code>
      </p>
      <button type="button" class="arc-btn arc-btn-primary" data-po-replay style="margin-bottom:16px;">↻ Replay power on</button>
      <div class="arc-anim-power-on" data-po-screen style="width:min(400px);min-height:120px;padding:1.5rem;background:var(--arc-color-bg-panel);border:2px solid var(--arc-color-cyan);font-family:var(--arc-font-pixel);color:var(--arc-color-cyan);box-shadow:0 0 20px var(--arc-color-cyan-glow);">
        PRESS START
      </div>
    `
    const btn = root.querySelector('[data-po-replay]')
    const screen = root.querySelector('[data-po-screen]')
    btn.addEventListener('click', () => {
      screen.classList.remove('arc-anim-power-on')
      void screen.offsetWidth
      screen.classList.add('arc-anim-power-on')
    })
    return root
  },
}

/** @type { import('@storybook/html').StoryObj } */
export const PowerOffReplay = {
  name: 'Power off (replay)',
  render: () => {
    const root = document.createElement('div')
    root.style.cssText = 'padding:2rem;'
    root.innerHTML = `
      <p style="font-family:var(--arc-font-mono);color:var(--arc-color-text-muted);margin:0 0 12px;">
        Stato iniziale acceso → clic applica <code style="color:var(--arc-color-red)">.arc-anim-power-off</code>
      </p>
      <button type="button" class="arc-btn arc-btn-danger" data-pf-replay style="margin-bottom:16px;">Power off</button>
      <button type="button" class="arc-btn arc-btn-ghost" data-pf-reset style="margin-bottom:16px;margin-left:8px;">Reset</button>
      <div data-pf-screen style="width:min(400px);min-height:120px;padding:1.5rem;background:var(--arc-color-bg-panel);border:2px solid var(--arc-color-cyan);font-family:var(--arc-font-pixel);color:var(--arc-color-cyan);box-shadow:0 0 16px var(--arc-color-cyan-glow);">
        SIGNAL LOST
      </div>
    `
    const screen = root.querySelector('[data-pf-screen]')
    root.querySelector('[data-pf-replay]').addEventListener('click', () => {
      screen.classList.remove('arc-anim-power-off')
      void screen.offsetWidth
      screen.classList.add('arc-anim-power-off')
    })
    root.querySelector('[data-pf-reset]').addEventListener('click', () => {
      screen.classList.remove('arc-anim-power-off')
    })
    return root
  },
}

/** @type { import('@storybook/html').StoryObj } */
export const KeyframesLegacy = {
  name: 'Keyframes (blink · pulse-glow · glitch)',
  render: () => `
<div style="padding:2rem;display:flex;flex-direction:column;gap:2rem;">
  <div style="font-family:var(--arc-font-pixel);color:var(--arc-color-cyan);">
    <span style="animation:blink var(--arc-anim-normal) var(--arc-ease-step) infinite;">▮ blink keyframes</span>
  </div>
  <div>
    <button class="arc-btn arc-btn-primary" style="animation:pulse-glow var(--arc-anim-slow) var(--arc-ease-pixel) infinite;">
      pulse-glow
    </button>
  </div>
  <div style="font-family:var(--arc-font-pixel);font-size:1.75rem;color:var(--arc-color-red);">
    <span style="display:inline-block;animation:glitch var(--arc-anim-fast) var(--arc-ease-arcade) infinite;">glitch</span>
  </div>
</div>`,
}
