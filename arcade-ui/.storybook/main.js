// .storybook/main.js
/** @type { import('@storybook/html-vite').StorybookConfig } */
const config = {
    stories: ['../src/**/*.stories.js'],
    addons: [],   // in v10 gli essentials (backgrounds, controls, docs...) sono nel core
    framework: {
        name: '@storybook/html-vite',
        options: {},
    },
};

export default config;