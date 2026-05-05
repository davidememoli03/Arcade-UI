// src/stories/Panel.stories.js

/** @type { import('@storybook/html').Meta } */
export default {
  title: 'Components/Panel',
}

/** @type { import('@storybook/html').StoryObj } */
export const Default = {
  render: () => `
    <div class="arcade-panel">
      <h2 class="arcade-panel-title">GAME OVER</h2>
      <p class="arcade-panel-body">Insert coin to continue.</p>
    </div>
  `,
}

export const WithButton = {
  render: () => `
    <div class="arcade-panel">
      <h2 class="arcade-panel-title">HIGH SCORE</h2>
      <p class="arcade-panel-body">You reached rank #1!</p>
      <button class="arcade-btn">CONTINUE</button>
    </div>
  `,
}
