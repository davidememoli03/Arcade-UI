// src/components/button.js
// Binding suoni su bottoni — delega ad AudioManager.

import { AudioManager } from '../audio/AudioManager.js'

/**
 * Alias di {@link bindArcadeSounds} — mantiene compatibilità con API esistente.
 *
 * @param {Document|Element} root
 */
export function bindButtonSounds(root = document) {
  AudioManager.getInstance().bindButtons(root)
}

export { bindArcadeSounds } from './sounds.js'
