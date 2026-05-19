import { Injectable } from '@angular/core'

import { AudioManager } from '@davide03memoli/arcade-ui'

/**
 * Thin typed façade over {@link AudioManager} — inject in components/services instead of calling `getInstance()` everywhere.
 */
@Injectable({ providedIn: 'root' })
export class ArcadeAudioService {
  private readonly backend = AudioManager.getInstance()

  /** Built-in SFX ids exposed by Arcade UI. */
  get sfx(): readonly string[] {
    return AudioManager.SFX
  }

  /** Underlying singleton when advanced chaining is needed. */
  get manager(): AudioManager {
    return this.backend
  }

  play(idOrSrc: string): this {
    this.backend.play(idOrSrc)
    return this
  }

  setVolume(value: number): this {
    this.backend.setVolume(value)
    return this
  }

  getVolume(): number {
    return this.backend.getVolume()
  }

  mute(): this {
    this.backend.mute()
    return this
  }

  unmute(): this {
    this.backend.unmute()
    return this
  }

  isMuted(): boolean {
    return this.backend.isMuted()
  }

  register(id: string, src: string): this {
    this.backend.register(id, src)
    return this
  }

  bindButtons(root?: Document | Element): this {
    this.backend.bindButtons(root)
    return this
  }

  bindArcadeSounds(root?: Document | Element): this {
    this.backend.bindArcadeSounds(root)
    return this
  }
}
