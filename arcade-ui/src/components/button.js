// src/components/button.js
// Binding suoni su bottoni — delega ad AudioManager.

import { AudioManager } from '../audio/AudioManager.js'

/**
 * Collega i suoni built-in agli elementi con data-arc-sound-hover / data-arc-sound-click
 * trovati in `root`. Chiamato automaticamente da AudioManager al DOMContentLoaded.
 *
 * @param {Document|Element} root
 */
export function bindButtonSounds(root = document) {
  AudioManager.getInstance().bindButtons(root)
}
