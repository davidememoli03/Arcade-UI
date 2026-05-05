// src/stories/Typography.stories.js

/** @type { import('@storybook/html').Meta } */
export default {
  title: 'Tokens/Typography',
}

const levels = [
  { token: '--arc-text-display', label: 'Display', sample: 'GAME OVER' },
  { token: '--arc-text-h1',      label: 'H1',      sample: 'INSERT COIN' },
  { token: '--arc-text-h2',      label: 'H2',      sample: 'High Scores' },
  { token: '--arc-text-h3',      label: 'H3',      sample: 'Player One' },
  { token: '--arc-text-body',    label: 'Body',    sample: 'Press start to continue...' },
  { token: '--arc-text-caption', label: 'Caption', sample: '© 1984 ARCADE INC' },
]

function row(level) {
  return `
    <div style="margin-bottom:2rem;border-bottom:1px solid #222;padding-bottom:1rem;">
      <div style="font-size:.7rem;color:#077;font-family:monospace;margin-bottom:.4rem;">
        ${level.token}-* · ${level.label}
      </div>
      <div style="
        font-family:var(${level.token}-font);
        font-size:var(${level.token}-size);
        line-height:var(${level.token}-lh);
        color:var(--arc-color-text);
      ">${level.sample}</div>
    </div>
  `
}

/** @type { import('@storybook/html').StoryObj } */
export const Scale = {
  render: () => `<div style="padding:2rem;">${levels.map(row).join('')}</div>`,
}
