// src/stories/Input.stories.js

/** @type { import('@storybook/html').Meta } */
export default {
    title: 'Components/Input',
};

/** @type { import('@storybook/html').StoryObj } */
export const Default = {
    render: () => '<input class="arcade-input" placeholder="ENTER NAME" />',
};

export const Disabled = {
    render: () => '<input class="arcade-input" placeholder="LOCKED" disabled />',
};

export const WithLabel = {
    render: () => `
    <label class="arcade-label">
      PLAYER NAME
      <input class="arcade-input" placeholder="AAA" maxlength="3" />
    </label>
  `,
};