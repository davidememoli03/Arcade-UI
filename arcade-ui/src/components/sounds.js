// src/components/sounds.js

import { AudioManager } from '../audio/AudioManager.js'

export {
  ARCADE_BUILTIN_SFX,
  ARCADE_SOUND_ATTRS,
  ARCADE_SOUND_EVENT_ERROR,
  ARCADE_SOUND_EVENT_SUCCESS,
  ARCADE_SOUND_SELECTOR,
  dispatchArcadeSound,
} from '../audio/sound-bindings.js'

/**
 * Collega SFX dichiarativi (`data-arc-sound-*`) e default `.arc-btn` in `root`.
 * Equivalente a `AudioManager.getInstance().bindArcadeSounds(root)`.
 *
 * @param {Document|Element} [root]
 */
export function bindArcadeSounds(root = document) {
  AudioManager.getInstance().bindArcadeSounds(root)
}
