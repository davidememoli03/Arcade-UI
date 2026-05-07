// src/index.js
import './styles/arcade-ui.css'
import pkg from '../package.json'

export { initGlitch, triggerGlitch, glitch } from './effects/glitch.js'
export { AudioManager } from './audio/AudioManager.js'
export { bindButtonSounds } from './components/button.js'
export { arcModal } from './components/modal.js'

export const version = pkg.version
