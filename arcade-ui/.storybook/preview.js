// .storybook/preview.js
import '../src/styles/arcade-ui.css';

/** @type { import('@storybook/html').Preview } */
const preview = {
    parameters: {
        backgrounds: {
            default: 'arcade-dark',
            values: [
                { name: 'arcade-dark', value: '#0a0010' },
                { name: 'white', value: '#ffffff' },
            ],
        },
    },
};

export default preview;