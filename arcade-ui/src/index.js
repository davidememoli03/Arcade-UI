// src/index.js
import './styles/arcade-ui.css'
import pkg from '../package.json'

export { initGlitch, triggerGlitch, glitch } from './effects/glitch.js'
export { AudioManager } from './audio/AudioManager.js'
export { bindButtonSounds } from './components/button.js'
export { arcModal } from './components/modal.js'
export { arcTabs, bindTabs } from './components/tabs.js'
export { updateSlider, bindSliders } from './components/slider.js'
export { arcToast } from './components/toast.js'
export { setArcDisplayValue, arcCountdown, bindArcDisplays } from './components/display.js'

export const version = pkg.version
