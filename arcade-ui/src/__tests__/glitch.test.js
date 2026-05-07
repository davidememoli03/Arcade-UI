// src/__tests__/glitch.test.js
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { initGlitch, triggerGlitch, glitch } from '../effects/glitch.js'

// ─── Helpers ──────────────────────────────────────────────────────────────────

function makeEl(tag = 'span', classes = 'arc-glitch', text = 'GAME OVER') {
  const el = document.createElement(tag)
  if (classes) el.className = classes
  if (text) el.textContent = text
  document.body.appendChild(el)
  return el
}

// ─── initGlitch ───────────────────────────────────────────────────────────────

describe('initGlitch — data-text population', () => {
  beforeEach(() => { document.body.innerHTML = '' })

  it('imposta data-text dal textContent su .arc-glitch', () => {
    const el = makeEl('span', 'arc-glitch', 'PLAYER 1')
    initGlitch(document.body)
    expect(el.dataset.text).toBe('PLAYER 1')
  })

  it('imposta data-text dal textContent su .arc-glitch-hover', () => {
    const el = makeEl('span', 'arc-glitch-hover', 'INSERT COIN')
    initGlitch(document.body)
    expect(el.dataset.text).toBe('INSERT COIN')
  })

  it('imposta data-text su elementi con [data-arc-glitch]', () => {
    const el = document.createElement('div')
    el.setAttribute('data-arc-glitch', '')
    el.textContent = 'LEVEL UP'
    document.body.appendChild(el)
    initGlitch(document.body)
    expect(el.dataset.text).toBe('LEVEL UP')
  })

  it('non sovrascrive data-text se già presente', () => {
    const el = makeEl('span', 'arc-glitch', 'NUOVO TESTO')
    el.dataset.text = 'TESTO ORIGINALE'
    initGlitch(document.body)
    expect(el.dataset.text).toBe('TESTO ORIGINALE')
  })

  it('imposta data-text="" su elementi IMG', () => {
    const img = document.createElement('img')
    img.className = 'arc-glitch'
    document.body.appendChild(img)
    initGlitch(document.body)
    expect(img.dataset.text).toBe('')
  })

  it('trimma il textContent', () => {
    const el = makeEl('span', 'arc-glitch', '  SCORE  ')
    initGlitch(document.body)
    expect(el.dataset.text).toBe('SCORE')
  })

  it('accetta un root element personalizzato', () => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    const inside = document.createElement('span')
    inside.className = 'arc-glitch'
    inside.textContent = 'INSIDE'
    container.appendChild(inside)

    const outside = makeEl('span', 'arc-glitch', 'OUTSIDE')

    initGlitch(container)

    expect(inside.dataset.text).toBe('INSIDE')
    expect(outside.dataset.text).toBeUndefined()
  })

  it('usa document come root di default', () => {
    const el = makeEl('span', 'arc-glitch', 'DEFAULT ROOT')
    initGlitch()
    expect(el.dataset.text).toBe('DEFAULT ROOT')
  })

  it('non lancia errori su root senza elementi glitch', () => {
    document.body.innerHTML = '<p>No glitch here</p>'
    expect(() => initGlitch(document.body)).not.toThrow()
  })

  it('processa più elementi nella stessa chiamata', () => {
    const a = makeEl('span', 'arc-glitch', 'ALPHA')
    const b = makeEl('div', 'arc-glitch', 'BETA')
    const c = makeEl('p', 'arc-glitch-hover', 'GAMMA')
    initGlitch(document.body)
    expect(a.dataset.text).toBe('ALPHA')
    expect(b.dataset.text).toBe('BETA')
    expect(c.dataset.text).toBe('GAMMA')
  })
})

// ─── triggerGlitch ────────────────────────────────────────────────────────────

describe('triggerGlitch — class manipulation', () => {
  beforeEach(() => {
    document.body.innerHTML = ''
    vi.useFakeTimers()
  })
  afterEach(() => { vi.useRealTimers() })

  it('aggiunge arc-glitch-active all\'elemento', () => {
    const el = makeEl('span', 'arc-glitch', 'GLITCH')
    triggerGlitch(el)
    expect(el.classList.contains('arc-glitch-active')).toBe(true)
  })

  it('rimuove arc-glitch-active dopo la durata di default (600ms)', () => {
    const el = makeEl('span', 'arc-glitch', 'GLITCH')
    triggerGlitch(el)
    vi.advanceTimersByTime(600)
    expect(el.classList.contains('arc-glitch-active')).toBe(false)
  })

  it('rimuove arc-glitch-active dopo una durata custom', () => {
    const el = makeEl('span', 'arc-glitch', 'GLITCH')
    triggerGlitch(el, 300)

    vi.advanceTimersByTime(299)
    expect(el.classList.contains('arc-glitch-active')).toBe(true)

    vi.advanceTimersByTime(1)
    expect(el.classList.contains('arc-glitch-active')).toBe(false)
  })

  it('rimuove arc-glitch-active prima di aggiungerla (reset animazione)', () => {
    const el = makeEl('span', 'arc-glitch', 'GLITCH')
    el.classList.add('arc-glitch-active')

    const removeSpy = vi.spyOn(el.classList, 'remove')
    triggerGlitch(el)

    expect(removeSpy).toHaveBeenCalledWith('arc-glitch-active')
    expect(el.classList.contains('arc-glitch-active')).toBe(true)
  })

  it('non lancia errori su elementi senza arc-glitch-active', () => {
    const el = makeEl('span', 'arc-glitch', 'GLITCH')
    expect(() => triggerGlitch(el)).not.toThrow()
  })

  it('la classe rimane presente tra 0 e la durata', () => {
    const el = makeEl('span', 'arc-glitch', 'GLITCH')
    triggerGlitch(el, 1000)
    vi.advanceTimersByTime(500)
    expect(el.classList.contains('arc-glitch-active')).toBe(true)
  })
})

// ─── glitch namespace ─────────────────────────────────────────────────────────

describe('glitch namespace', () => {
  it('esporta initGlitch', () => {
    expect(typeof glitch.initGlitch).toBe('function')
  })

  it('esporta triggerGlitch', () => {
    expect(typeof glitch.triggerGlitch).toBe('function')
  })

  it('glitch.initGlitch è la stessa funzione di initGlitch', () => {
    expect(glitch.initGlitch).toBe(initGlitch)
  })

  it('glitch.triggerGlitch è la stessa funzione di triggerGlitch', () => {
    expect(glitch.triggerGlitch).toBe(triggerGlitch)
  })
})
