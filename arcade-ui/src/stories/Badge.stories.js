// src/stories/Badge.stories.js

/** @type { import('@storybook/html').Meta } */
export default {
  title: 'Components/Badge',
  decorators: [
    story => `<div style="padding:2rem;display:flex;gap:1rem;flex-wrap:wrap;align-items:center;">${story()}</div>`,
  ],
}

/** @type { import('@storybook/html').StoryObj } */
export const Cyan = {
  render: () => '<span class="arc-badge arc-badge-cyan">LVL 5</span>',
}

export const Red = {
  render: () => '<span class="arc-badge arc-badge-red">DANGER</span>',
}

export const Yellow = {
  render: () => '<span class="arc-badge arc-badge-yellow">★ NEW</span>',
}

export const Green = {
  render: () => '<span class="arc-badge arc-badge-green">✓ OK</span>',
}

export const Purple = {
  render: () => '<span class="arc-badge arc-badge-purple">MAGIC</span>',
}

export const Outline = {
  render: () => `
    <span class="arc-badge arc-badge-cyan arc-badge-outline">CYAN</span>
    <span class="arc-badge arc-badge-red arc-badge-outline">RED</span>
    <span class="arc-badge arc-badge-yellow arc-badge-outline">YELLOW</span>
    <span class="arc-badge arc-badge-green arc-badge-outline">GREEN</span>
    <span class="arc-badge arc-badge-purple arc-badge-outline">PURPLE</span>
  `,
}

export const Pulse = {
  render: () => `
    <span class="arc-badge arc-badge-red arc-badge-pulse">DANGER</span>
    <span class="arc-badge arc-badge-yellow arc-badge-pulse">WARNING</span>
    <span class="arc-badge arc-badge-cyan arc-badge-pulse">ONLINE</span>
  `,
}

export const AllVariants = {
  render: () => `
    <div style="display:flex;flex-direction:column;gap:1.5rem;">
      <div style="display:flex;gap:.75rem;flex-wrap:wrap;align-items:center;">
        <span class="arc-badge arc-badge-cyan">LVL 5</span>
        <span class="arc-badge arc-badge-red">DANGER</span>
        <span class="arc-badge arc-badge-yellow">★ NEW</span>
        <span class="arc-badge arc-badge-green">✓ SAVED</span>
        <span class="arc-badge arc-badge-purple">MAGIC</span>
      </div>
      <div style="display:flex;gap:.75rem;flex-wrap:wrap;align-items:center;">
        <span class="arc-badge arc-badge-cyan arc-badge-outline">OUTLINE</span>
        <span class="arc-badge arc-badge-red arc-badge-outline">OUTLINE</span>
        <span class="arc-badge arc-badge-yellow arc-badge-outline">OUTLINE</span>
      </div>
      <div style="display:flex;gap:.75rem;flex-wrap:wrap;align-items:center;">
        <span class="arc-badge arc-badge-red arc-badge-pulse">PULSE</span>
        <span class="arc-badge arc-badge-cyan arc-badge-pulse">ACTIVE</span>
      </div>
    </div>
  `,
}

export const InContext = {
  render: () => `
    <div class="arc-panel arc-panel-cyan" style="max-width:340px;">
      <div class="arc-panel-header">
        PLAYER STATS
        <span class="arc-badge arc-badge-yellow" style="margin-left:auto;">★ NEW</span>
      </div>
      <div class="arc-panel-body" style="display:flex;flex-direction:column;gap:.75rem;">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <span>LEVEL</span>
          <span class="arc-badge arc-badge-cyan">LVL 42</span>
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <span>STATUS</span>
          <span class="arc-badge arc-badge-green arc-badge-pulse">ONLINE</span>
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <span>HEALTH</span>
          <span class="arc-badge arc-badge-red">CRITICAL</span>
        </div>
      </div>
    </div>
  `,
}
