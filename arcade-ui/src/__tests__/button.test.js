// src/__tests__/button.test.js
import { describe, it, expect } from 'vitest'

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
