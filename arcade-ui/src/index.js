// src/index.js
import './styles/arcade-ui.css'
import pkg from '../package.json'

export { initGlitch, triggerGlitch, glitch } from './effects/glitch.js'
export { AudioManager } from './audio/AudioManager.js'
export { bindButtonSounds, bindArcadeSounds } from './components/button.js'
export {
  ARCADE_BUILTIN_SFX,
  ARCADE_SOUND_ATTRS,
  ARCADE_SOUND_EVENT_ERROR,
  ARCADE_SOUND_EVENT_SUCCESS,
  dispatchArcadeSound,
} from './components/sounds.js'
export { arcModal } from './components/modal.js'
export { arcTabs, bindTabs } from './components/tabs.js'
export { updateSlider, bindSliders } from './components/slider.js'
export { arcToast } from './components/toast.js'
export { setArcDisplayValue, arcCountdown, bindArcDisplays } from './components/display.js'
export { arcSprite, arcSpriteInit } from './components/sprite.js'

export const version = pkg.version
