// .storybook/manager.js
import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming/create';

const arcadeTheme = create({
    base: 'dark',
    brandTitle: 'Arcade UI',
    brandUrl: 'https://github.com/davide03memoli/Arcade-UI',
    appBg: '#0a0010',
    appContentBg: '#0a0010',
    appPreviewBg: '#0a0010',
    barBg: '#110020',
    colorPrimary: '#00ffff',
    colorSecondary: '#00ffff',
});

addons.setConfig({ theme: arcadeTheme });