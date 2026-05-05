// src/stories/Panel.stories.js

/** @type { import('@storybook/html').Meta } */
export default {
  title: 'Components/Panel',
  decorators: [
    story => `<div style="padding:2rem;">${story()}</div>`,
  ],
  argTypes: {
    variant: { control: { type: 'select' }, options: ['cyan', 'red', 'yellow', 'green'] },
    glass: { control: 'boolean' },
    title: { control: 'text' },
    body: { control: 'text' },
  },
  args: {
    variant: 'cyan',
    glass: false,
    title: 'GAME OVER',
    body: 'You scored 42,000 points. Enter your name to save.',
  },
}

function renderPanel({ variant, glass, title, body }) {
  const glassClass = glass ? 'arc-panel-glass' : ''
  return `
    <div class="arc-panel arc-panel-${variant} ${glassClass}">
      <div class="arc-panel-header">${title}</div>
      <div class="arc-panel-body">${body}</div>
      <div class="arc-panel-footer">
        <button class="arc-btn arc-btn-primary arc-btn-sm">SAVE</button>
        <button class="arc-btn arc-btn-ghost arc-btn-sm">CANCEL</button>
      </div>
    </div>
  `
}

/** @type { import('@storybook/html').StoryObj } */
export const Cyan = {
  args: { variant: 'cyan' },
  render: renderPanel,
}

export const Red = {
  args: { variant: 'red' },
  render: renderPanel,
}

export const Yellow = {
  args: { variant: 'yellow' },
  render: renderPanel,
}

export const Green = {
  args: { variant: 'green' },
  render: renderPanel,
}

export const Glass = {
  args: { variant: 'cyan', glass: true },
  render: renderPanel,
  parameters: {
    backgrounds: { default: 'arcade-dark' },
  },
}

export const NoFooter = {
  render: () => `
    <div class="arc-panel arc-panel-cyan">
      <div class="arc-panel-header">HIGH SCORE</div>
      <div class="arc-panel-body">
        Congratulations! You reached the top of the leaderboard.
      </div>
    </div>
  `,
}

export const AllVariants = {
  render: () => `
    <div style="display:flex;flex-direction:column;gap:2rem;padding:2rem;">
      <div class="arc-panel arc-panel-cyan">
        <div class="arc-panel-header">CYAN</div>
        <div class="arc-panel-body">Variante default.</div>
      </div>
      <div class="arc-panel arc-panel-red">
        <div class="arc-panel-header">RED</div>
        <div class="arc-panel-body">Pericolo / errore.</div>
      </div>
      <div class="arc-panel arc-panel-yellow">
        <div class="arc-panel-header">YELLOW</div>
        <div class="arc-panel-body">Avviso / monete.</div>
      </div>
      <div class="arc-panel arc-panel-green">
        <div class="arc-panel-header">GREEN</div>
        <div class="arc-panel-body">Successo / vittoria.</div>
      </div>
    </div>
  `,
}