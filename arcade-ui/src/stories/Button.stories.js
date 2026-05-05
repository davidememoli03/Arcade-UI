// src/stories/Button.stories.js

/** @type { import('@storybook/html').Meta } */
export default {
    title: 'Components/Button',
};

/** @type { import('@storybook/html').StoryObj } */
export const Default = {
    render: () => '<button class="arcade-btn">PLAY</button>',
};

export const Disabled = {
    render: () => '<button class="arcade-btn" disabled>DISABLED</button>',
};

export const WithLabel = {
    args: { label: 'INSERT COIN' },
    render: ({ label }) => `<button class="arcade-btn">${label}</button>`,
    argTypes: {
        label: { control: 'text' },
    },
};