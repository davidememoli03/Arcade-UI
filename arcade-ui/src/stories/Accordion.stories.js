
/** @type { import('@storybook/html').Meta } */
export default {
  title: 'Components/Accordion',
  decorators: [
    story => `<div style="padding:2rem;max-width:720px;">${story()}</div>`,
  ],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['cyan', 'red', 'yellow', 'green'],
    },
    open: { control: 'boolean' },
    title: { control: 'text' },
    body: { control: 'text' },
  },
  args: {
    variant: 'cyan',
    open: false,
    title: 'SYSTEM STATUS',
    body: 'All arcade subsystems are online. Insert coin to continue mission.',
  },
}

function renderAccordion({ variant, open, title, body }) {
  const openAttr = open ? 'open' : ''
  return `
    <details class="arc-accordion arc-accordion-${variant}" ${openAttr}>
      <summary class="arc-accordion-summary">${title}</summary>
      <div class="arc-accordion-content">${body}</div>
    </details>
  `
}

/** @type { import('@storybook/html').StoryObj } */
export const Default = {
  render: renderAccordion,
}

export const Opened = {
  args: { open: true },
  render: renderAccordion,
}

export const Red = {
  args: { variant: 'red' },
  render: renderAccordion,
}

export const Yellow = {
  args: { variant: 'yellow' },
  render: renderAccordion,
}

export const Green = {
  args: { variant: 'green' },
  render: renderAccordion,
}

export const Stack = {
  render: () => `
    <div>
      <details class="arc-accordion arc-accordion-cyan" open>
        <summary class="arc-accordion-summary">PLAYER PROFILE</summary>
        <div class="arc-accordion-content">
          Alias: NEON-RUNNER_07<br />
          Rank: Captain
        </div>
      </details>
      <details class="arc-accordion arc-accordion-yellow">
        <summary class="arc-accordion-summary">MISSIONS</summary>
        <div class="arc-accordion-content">
          3 active missions are available. Select one to start.
        </div>
      </details>
      <details class="arc-accordion arc-accordion-red">
        <summary class="arc-accordion-summary">ALERTS</summary>
        <div class="arc-accordion-content">
          Enemy drones detected near sector 9.
        </div>
      </details>
    </div>
  `,
}
