/**
 * Synthetic strict consumer: exercises package.json exports + hand-written DTS.
 * Run via scripts/smoke-dts-consumer.mjs (npm pack → temp install → tsc).
 */
import type { ArcSpriteController } from '@davide03memoli/arcade-ui'
import {
  AudioManager,
  arcCountdown,
  arcModal,
  arcSprite,
  arcSpriteInit,
  arcTabs,
  arcToast,
  bindArcDisplays,
  bindArcadeSounds,
  bindButtonSounds,
  dispatchArcadeSound,
  bindSliders,
  bindTabs,
  glitch,
  bindGlitch,
  initGlitch,
  hasGlitchTargets,
  setArcDisplayValue,
  triggerGlitch,
  updateSlider,
  version,
} from '@davide03memoli/arcade-ui'
import { version as versionViaJsExport } from '@davide03memoli/arcade-ui/js'
import tokens from '@davide03memoli/arcade-ui/tokens/tokens.json' with { type: 'json' }

import '@davide03memoli/arcade-ui/dist/arcade-ui.css'
import '@davide03memoli/arcade-ui/dist/arcade-ui.min.css'
import '@davide03memoli/arcade-ui/themes/amber-crt'
import '@davide03memoli/arcade-ui/themes/ice-blue'
import '@davide03memoli/arcade-ui/themes/magenta-wave'
import '@davide03memoli/arcade-ui/themes/phosphor-green'
import '@davide03memoli/arcade-ui/tokens/animation'
import '@davide03memoli/arcade-ui/tokens/colors'
import '@davide03memoli/arcade-ui/tokens/spacing'
import '@davide03memoli/arcade-ui/tokens/typography'

function exerciseDomApis(doc: Document): void {
  bindGlitch(doc)
  hasGlitchTargets(doc)
  initGlitch(doc)
  initGlitch(doc.documentElement)
  triggerGlitch(doc.body)

  glitch.bindGlitch()
  glitch.initGlitch()
  glitch.triggerGlitch(doc.body)

  const audio = AudioManager.getInstance()
  audio.play('coin').setVolume(0.5).mute().unmute()
  void audio.isMuted()
  void audio.getVolume()
  void AudioManager.SFX
  audio.register('custom', '/beep.mp3').bindButtons(doc.body)

  bindArcadeSounds(doc)
  bindButtonSounds(doc)
  dispatchArcadeSound(doc.body, 'success')

  arcModal.open('backdrop-id')
  arcModal.close('backdrop-id')
  arcModal.bindModalTriggers(doc)

  arcToast.show({ message: 'OK' })
  arcToast.show({ message: 'x', type: 'error', duration: 0, position: 'top-left' })
  const id = arcToast.show({ message: 'y' })
  arcToast.dismiss(id)
  arcToast.dismissAll()

  const tabsRoot = doc.querySelector('.arc-tabs')
  if (tabsRoot) {
    const { activate } = arcTabs(tabsRoot)
    activate(0)
  }
  const tabInstances = bindTabs(doc)
  for (const [, inst] of tabInstances) inst.activate(0)

  const input = doc.querySelector('input[type="range"]')
  if (input instanceof HTMLInputElement) updateSlider(input)
  const unbindSliders = bindSliders(doc)
  unbindSliders()

  const displayHost = doc.createElement('div')
  setArcDisplayValue(displayHost, 42, {
    pad: 4,
    flash: true,
    reducedMotion: false,
    ariaLabel: 'score',
  })

  const countdown = arcCountdown(displayHost, {
    seconds: 3,
    onTick: (n: number) => {
      void n
    },
    onEnd: () => {},
    display: { pad: 2 },
  })
  countdown.stop()
  void countdown.getRemaining()

  bindArcDisplays(doc.body)

  const spriteEl = doc.createElement('div')
  const spriteCtl: ArcSpriteController | null = arcSpriteInit(spriteEl)
  spriteCtl?.play().pause().setFps(12).setFrame(0)
  void arcSprite.init(spriteEl)
}

export function runSmoke(doc: Document): string {
  exerciseDomApis(doc)
  void tokens
  // Published JS API surface matches secondary export entry.
  if (version !== versionViaJsExport) throw new Error('version mismatch across export entries')
  return version
}
