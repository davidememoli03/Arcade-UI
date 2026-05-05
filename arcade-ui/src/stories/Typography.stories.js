// src/stories/Animation.stories.js

/** @type { import('@storybook/html').Meta } */
export default {
    title: 'Tokens/Animation',
}

/** @type { import('@storybook/html').StoryObj } */
export const Blink = {
    render: () => `
    <div style="padding:2rem;font-family:var(--arc-font-pixel);color:var(--arc-color-cyan);">
      <span style="animation:blink var(--arc-anim-normal) var(--arc-ease-step) infinite;">
        ▮ CURSOR
      </span>
    </div>
  `,
}

export const PulseGlow = {
    render: () => `
    <div style="padding:2rem;">
      <button class="arcade-btn"
        style="animation:pulse-glow var(--arc-anim-slow) var(--arc-ease-pixel) infinite;">
        PULSE
      </button>
    </div>
  `,
}

export const Glitch = {
    render: () => `
    <div style="padding:2rem;font-family:var(--arc-font-pixel);font-size:2rem;color:var(--arc-color-red);">
      <span style="display:inline-block;animation:glitch var(--arc-anim-fast) var(--arc-ease-arcade) infinite;">
        GLITCH
      </span>
    </div>
  `,
}