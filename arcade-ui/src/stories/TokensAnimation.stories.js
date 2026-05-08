// src/stories/TokensAnimation.stories.js
// Compatibilità URL: mantiene gli id `tokens-animation--blink|pulse-glow|glitch`
// usati da bookmark / link esterni. Le demo complete stanno in Effects/Animations.

/** @type { import('@storybook/html').Meta } */
export default {
  title: 'Tokens/Animation',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Keyframe base da `tokens/animation.css`. Per le utility `.arc-anim-*` vedi ' +
          '**Effects → Animations**.',
      },
    },
  },
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

/** @type { import('@storybook/html').StoryObj } */
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

/** @type { import('@storybook/html').StoryObj } */
export const Glitch = {
  render: () => `
    <div style="padding:2rem;font-family:var(--arc-font-pixel);font-size:2rem;color:var(--arc-color-red);">
      <span style="display:inline-block;animation:glitch var(--arc-anim-fast) var(--arc-ease-arcade) infinite;">
        GLITCH
      </span>
    </div>
  `,
}

/** Alias per vecchi link `?path=/story/tokens-animation--keyframes` (se presenti). */
/** @type { import('@storybook/html').StoryObj } */
export const Keyframes = {
  name: 'keyframes',
  render: () => `
    <p style="font-family:var(--arc-font-mono);color:var(--arc-color-text-muted);padding:1rem;">
      Usa <strong>Blink</strong>, <strong>PulseGlow</strong> o <strong>Glitch</strong> qui sotto,
      oppure <a href="?path=/story/effects-animations--showcase" style="color:var(--arc-color-cyan)">Effects / Animations</a> per tutte le utility.
    </p>
  `,
}
