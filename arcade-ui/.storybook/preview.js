// .storybook/preview.js
import '../src/styles/arcade-ui.css';
import '../src/themes/phosphor-green.css';
import '../src/themes/amber-crt.css';
import '../src/themes/magenta-wave.css';
import '../src/themes/ice-blue.css';

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