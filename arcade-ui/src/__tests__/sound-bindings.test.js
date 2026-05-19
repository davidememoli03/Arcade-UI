import { describe, it, expect, vi, beforeEach } from 'vitest'
import {
  bindArcadeSoundsInRoot,
  dispatchArcadeSound,
  ARCADE_SOUND_EVENT_SUCCESS,
  hasArcadeSoundTargets,
} from '../audio/sound-bindings.js'

describe('bindArcadeSoundsInRoot', () => {
  /** @type {WeakSet<Element>} */
  let bound
  /** @type {ReturnType<typeof vi.fn>} */
  let play

  beforeEach(() => {
    bound = new WeakSet()
    play = vi.fn()
    document.body.innerHTML = ''
  })

  it('collega data-arc-sound-click su elementi non .arc-btn', () => {
    document.body.innerHTML =
      '<a href="#" class="arc-card" data-arc-sound-click="coin">OPEN</a>'
    bindArcadeSoundsInRoot(play, document.body, bound)
    document.querySelector('.arc-card').dispatchEvent(new MouseEvent('click', { bubbles: true }))
    expect(play).toHaveBeenCalledWith('coin')
  })

  it('collega data-arc-sound-focus', () => {
    document.body.innerHTML =
      '<button class="arc-btn" data-arc-sound-focus="select">FOCUS</button>'
    bindArcadeSoundsInRoot(play, document.body, bound)
    document.querySelector('button').dispatchEvent(new Event('focus'))
    expect(play).toHaveBeenCalledWith('select')
  })

  it('collega data-arc-sound-pointerdown', () => {
    document.body.innerHTML =
      '<button class="arc-btn" data-arc-sound-pointerdown="blip">TAP</button>'
    bindArcadeSoundsInRoot(play, document.body, bound)
    document.querySelector('button').dispatchEvent(new PointerEvent('pointerdown', { bubbles: true }))
    expect(play).toHaveBeenCalledWith('blip')
  })

  it('data-arc-sound-success risponde a dispatchArcadeSound', () => {
    document.body.innerHTML =
      '<div data-arc-sound-success="win"><span id="inner">OK</span></div>'
    bindArcadeSoundsInRoot(play, document.body, bound)
    dispatchArcadeSound(document.getElementById('inner'), 'success')
    expect(play).toHaveBeenCalledWith('win')
  })

  it('non rilega elementi già nel WeakSet', () => {
    document.body.innerHTML = '<button class="arc-btn" data-arc-sound-click="coin">X</button>'
    bindArcadeSoundsInRoot(play, document.body, bound)
    bindArcadeSoundsInRoot(play, document.body, bound)
    document.querySelector('button').dispatchEvent(new MouseEvent('click'))
    expect(play).toHaveBeenCalledTimes(1)
  })

  it('ignora target disabilitati', () => {
    document.body.innerHTML =
      '<button class="arc-btn" disabled data-arc-sound-click="coin">X</button>'
    bindArcadeSoundsInRoot(play, document.body, bound)
    document.querySelector('button').dispatchEvent(new MouseEvent('click'))
    expect(play).not.toHaveBeenCalled()
  })
})

describe('hasArcadeSoundTargets', () => {
  beforeEach(() => {
    document.body.innerHTML = ''
  })

  it('false senza hook né .arc-btn', () => {
    document.body.innerHTML = '<p>plain</p>'
    expect(hasArcadeSoundTargets(document.body)).toBe(false)
  })

  it('true con .arc-btn', () => {
    document.body.innerHTML = '<button class="arc-btn">x</button>'
    expect(hasArcadeSoundTargets(document)).toBe(true)
  })

  it('true con data-arc-sound-click', () => {
    document.body.innerHTML = '<span data-arc-sound-click="coin">x</span>'
    expect(hasArcadeSoundTargets(document)).toBe(true)
  })
})

describe('dispatchArcadeSound', () => {
  it('emette ARCADE_SOUND_EVENT_SUCCESS', () => {
    const target = document.createElement('div')
    const handler = vi.fn()
    target.addEventListener(ARCADE_SOUND_EVENT_SUCCESS, handler)
    dispatchArcadeSound(target, 'success')
    expect(handler).toHaveBeenCalled()
  })
})
