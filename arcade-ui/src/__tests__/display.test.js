// src/__tests__/display.test.js
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { setArcDisplayValue, arcCountdown } from '../components/display.js'

describe('display.js', () => {
  beforeEach(() => {
    document.body.innerHTML = ''
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('setArcDisplayValue crea .arc-display-body e cifre', () => {
    const el = document.createElement('div')
    el.className = 'arc-display'
    document.body.appendChild(el)
    setArcDisplayValue(el, 42, { pad: 4 })
    const body = el.querySelector('.arc-display-body')
    expect(body).toBeTruthy()
    const digits = el.querySelectorAll('.arc-display-digit')
    expect(digits.length).toBe(4)
    expect([...digits].map((d) => d.textContent).join('')).toBe('0042')
  })

  it('setArcDisplayValue supporta il separatore timer', () => {
    const el = document.createElement('div')
    el.className = 'arc-display arc-display-timer'
    document.body.appendChild(el)
    setArcDisplayValue(el, '01:05')
    expect(el.querySelectorAll('.arc-display-sep').length).toBe(1)
    expect([...el.querySelectorAll('.arc-display-digit')].map((d) => d.textContent).join('')).toBe('0105')
  })

  it('setArcDisplayValue ignora caratteri non validi', () => {
    const el = document.createElement('div')
    el.className = 'arc-display'
    document.body.appendChild(el)
    setArcDisplayValue(el, '12ab34')
    expect([...el.querySelectorAll('.arc-display-digit')].map((d) => d.textContent).join('')).toBe('1234')
  })

  it('arcCountdown aggiorna display e chiama onEnd', () => {
    vi.useFakeTimers()
    const el = document.createElement('div')
    el.className = 'arc-display arc-display-timer'
    document.body.appendChild(el)
    const onEnd = vi.fn()
    arcCountdown(el, { seconds: 2, onEnd })
    expect(el.querySelectorAll('.arc-display-digit').length).toBe(4)
    expect([...el.querySelectorAll('.arc-display-digit')].map((d) => d.textContent).join('')).toBe('0002')
    vi.advanceTimersByTime(1000)
    expect([...el.querySelectorAll('.arc-display-digit')].map((d) => d.textContent).join('')).toBe('0001')
    vi.advanceTimersByTime(1000)
    expect([...el.querySelectorAll('.arc-display-digit')].map((d) => d.textContent).join('')).toBe('0000')
    expect(onEnd).toHaveBeenCalledTimes(1)
  })
})
