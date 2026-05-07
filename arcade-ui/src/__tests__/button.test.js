// src/__tests__/button.test.js
import { describe, it, expect, beforeEach, vi } from 'vitest'
import { bindButtonSounds } from '../components/button.js'
import { AudioManager } from '../audio/AudioManager.js'

function makeBtn(classes = '') {
  const btn = document.createElement('button')
  btn.className = `arc-btn ${classes}`.trim()
  return btn
}

describe('arc-btn — struttura DOM', () => {
  it('ha la classe base arc-btn', () => {
    const btn = makeBtn()
    expect(btn.classList.contains('arc-btn')).toBe(true)
  })

  it('primary ha arc-btn-primary', () => {
    const btn = makeBtn('arc-btn-primary')
    expect(btn.classList.contains('arc-btn-primary')).toBe(true)
  })

  it('ghost ha arc-btn-ghost', () => {
    const btn = makeBtn('arc-btn-ghost')
    expect(btn.classList.contains('arc-btn-ghost')).toBe(true)
  })

  it('danger ha arc-btn-danger', () => {
    const btn = makeBtn('arc-btn-danger')
    expect(btn.classList.contains('arc-btn-danger')).toBe(true)
  })
})

describe('arc-btn — dimensioni', () => {
  it('sm ha arc-btn-sm', () => {
    const btn = makeBtn('arc-btn-primary arc-btn-sm')
    expect(btn.classList.contains('arc-btn-sm')).toBe(true)
  })

  it('lg ha arc-btn-lg', () => {
    const btn = makeBtn('arc-btn-primary arc-btn-lg')
    expect(btn.classList.contains('arc-btn-lg')).toBe(true)
  })
})

describe('arc-btn — stato disabled', () => {
  it('ha attributo disabled', () => {
    const btn = makeBtn('arc-btn-primary')
    btn.setAttribute('disabled', '')
    expect(btn.hasAttribute('disabled')).toBe(true)
  })

  it('btn.disabled è true', () => {
    const btn = makeBtn('arc-btn-primary')
    btn.setAttribute('disabled', '')
    expect(btn.disabled).toBe(true)
  })
})

// ─── bindButtonSounds ─────────────────────────────────────────────────────────

describe('bindButtonSounds — delega ad AudioManager', () => {
  beforeEach(() => {
    AudioManager._resetForTest()
    document.body.innerHTML = ''
    vi.clearAllMocks()
  })

  it('non lancia errori con document vuoto', () => {
    expect(() => bindButtonSounds(document.body)).not.toThrow()
  })

  it('non lancia errori con root contenente .arc-btn', () => {
    document.body.innerHTML = '<button class="arc-btn arc-btn-primary">OK</button>'
    expect(() => bindButtonSounds(document.body)).not.toThrow()
  })

  it('delega a AudioManager.getInstance().bindButtons()', () => {
    const instance = AudioManager.getInstance()
    const spy = vi.spyOn(instance, 'bindButtons')
    bindButtonSounds(document.body)
    expect(spy).toHaveBeenCalledWith(document.body)
  })

  it('usa document come root di default', () => {
    const instance = AudioManager.getInstance()
    const spy = vi.spyOn(instance, 'bindButtons')
    bindButtonSounds()
    expect(spy).toHaveBeenCalledWith(document)
  })

  it('restituisce undefined (non lancia)', () => {
    expect(bindButtonSounds(document.body)).toBeUndefined()
  })
})
