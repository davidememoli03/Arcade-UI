// src/__tests__/audio-manager.test.js
import { describe, it, expect, beforeEach, vi } from 'vitest'

// ─── Mock Howler (solo per suoni custom via register) ─────────────────────────

const mockHowlPlay   = vi.fn()
const mockHowlVolume = vi.fn()

class MockHowl {
  constructor(opts) { this._vol = opts.volume ?? 1 }
  play()    { mockHowlPlay() }
  volume(v) { if (v !== undefined) { this._vol = v; mockHowlVolume(v) } return this._vol }
}

vi.mock('howler', () => ({ Howl: MockHowl }))

// ─── Mock Web Audio API ───────────────────────────────────────────────────────

const mockOscStart    = vi.fn()
const mockOscStop     = vi.fn()
const mockCtxResume   = vi.fn().mockResolvedValue(undefined)

function createMockCtx() {
  return {
    currentTime:      0,
    state:            'running',
    destination:      {},
    resume:           mockCtxResume,
    createOscillator: vi.fn(() => ({
      connect:   vi.fn(),
      type:      '',
      frequency: {
        setValueAtTime:              vi.fn(),
        exponentialRampToValueAtTime: vi.fn(),
      },
      start: mockOscStart,
      stop:  mockOscStop,
    })),
    createGain: vi.fn(() => ({
      connect: vi.fn(),
      gain: {
        setValueAtTime:              vi.fn(),
        linearRampToValueAtTime:     vi.fn(),
        exponentialRampToValueAtTime: vi.fn(),
      },
    })),
  }
}

// flush microtasks (attende #initHowler async)
const flushPromises = () => new Promise(resolve => setTimeout(resolve, 0))

// ─── Import sotto test ────────────────────────────────────────────────────────

import { AudioManager } from '../audio/AudioManager.js'

// ─── Helpers ──────────────────────────────────────────────────────────────────

function simulateUserClick() {
  document.dispatchEvent(new MouseEvent('click', { bubbles: true }))
}

// ─── Suite ───────────────────────────────────────────────────────────────────

describe('AudioManager — singleton', () => {
  beforeEach(() => {
    AudioManager._resetForTest()
    sessionStorage.clear()
    vi.clearAllMocks()
    Object.defineProperty(globalThis, 'AudioContext', {
      value:        vi.fn(createMockCtx),
      configurable: true,
      writable:     true,
    })
  })

  it('getInstance() restituisce sempre la stessa istanza', () => {
    const a = AudioManager.getInstance()
    const b = AudioManager.getInstance()
    expect(a).toBe(b)
  })

  it('_resetForTest() crea una nuova istanza', () => {
    const a = AudioManager.getInstance()
    AudioManager._resetForTest()
    const b = AudioManager.getInstance()
    expect(a).not.toBe(b)
  })

  it('SFX contiene i 6 ID built-in', () => {
    expect(AudioManager.SFX).toEqual(['coin', 'select', 'blip', 'error', 'win', 'gameover'])
  })
})

describe('AudioManager — volume', () => {
  beforeEach(() => {
    AudioManager._resetForTest()
    sessionStorage.clear()
    vi.clearAllMocks()
  })

  it('volume default è 0.5', () => {
    expect(AudioManager.getInstance().getVolume()).toBe(0.5)
  })

  it('setVolume() aggiorna getVolume()', () => {
    const audio = AudioManager.getInstance()
    audio.setVolume(0.8)
    expect(audio.getVolume()).toBe(0.8)
  })

  it('setVolume() clamp a [0, 1]', () => {
    const audio = AudioManager.getInstance()
    audio.setVolume(2)
    expect(audio.getVolume()).toBe(1)
    audio.setVolume(-1)
    expect(audio.getVolume()).toBe(0)
  })

  it('setVolume() persiste in sessionStorage', () => {
    AudioManager.getInstance().setVolume(0.7)
    expect(sessionStorage.getItem('arc-audio-volume')).toBe('0.7')
  })

  it('una nuova istanza legge il volume da sessionStorage', () => {
    sessionStorage.setItem('arc-audio-volume', '0.3')
    expect(AudioManager.getInstance().getVolume()).toBe(0.3)
  })

  it('setVolume() restituisce this per chaining', () => {
    const audio = AudioManager.getInstance()
    expect(audio.setVolume(0.5)).toBe(audio)
  })
})

describe('AudioManager — mute/unmute', () => {
  beforeEach(() => {
    AudioManager._resetForTest()
    sessionStorage.clear()
    vi.clearAllMocks()
  })

  it('isMuted() è false per default', () => {
    expect(AudioManager.getInstance().isMuted()).toBe(false)
  })

  it('mute() imposta isMuted() a true', () => {
    const audio = AudioManager.getInstance()
    audio.mute()
    expect(audio.isMuted()).toBe(true)
  })

  it('unmute() ripristina isMuted() a false', () => {
    const audio = AudioManager.getInstance()
    audio.mute()
    audio.unmute()
    expect(audio.isMuted()).toBe(false)
  })

  it('mute() persiste in sessionStorage', () => {
    AudioManager.getInstance().mute()
    expect(sessionStorage.getItem('arc-audio-muted')).toBe('true')
  })

  it('unmute() aggiorna sessionStorage', () => {
    const audio = AudioManager.getInstance()
    audio.mute()
    audio.unmute()
    expect(sessionStorage.getItem('arc-audio-muted')).toBe('false')
  })

  it('una nuova istanza legge muted da sessionStorage', () => {
    sessionStorage.setItem('arc-audio-muted', 'true')
    expect(AudioManager.getInstance().isMuted()).toBe(true)
  })

  it('mute() restituisce this per chaining', () => {
    const audio = AudioManager.getInstance()
    expect(audio.mute()).toBe(audio)
  })

  it('unmute() restituisce this per chaining', () => {
    const audio = AudioManager.getInstance()
    expect(audio.unmute()).toBe(audio)
  })
})

describe('AudioManager — play (Web Audio built-in)', () => {
  beforeEach(() => {
    AudioManager._resetForTest()
    sessionStorage.clear()
    mockOscStart.mockClear()
    mockOscStop.mockClear()
    Object.defineProperty(globalThis, 'AudioContext', {
      value:        vi.fn(createMockCtx),
      configurable: true,
      writable:     true,
    })
  })

  it('play() non lancia errori senza interazione utente', () => {
    expect(() => AudioManager.getInstance().play('coin')).not.toThrow()
  })

  it('play() avvia un oscillatore dopo attivazione utente', async () => {
    const audio = AudioManager.getInstance()
    await flushPromises()

    simulateUserClick()
    audio.play('select')

    expect(mockOscStart).toHaveBeenCalled()
  })

  it('play() accoda i suoni prima dell\'attivazione e li riproduce dopo', async () => {
    const audio = AudioManager.getInstance()
    await flushPromises()

    audio.play('blip')
    audio.play('coin')
    expect(mockOscStart).not.toHaveBeenCalled()

    simulateUserClick()
    // coin produce 2 oscillatori, blip ne produce 1 → totale >= 2
    expect(mockOscStart.mock.calls.length).toBeGreaterThanOrEqual(2)
  })

  it('mute() impedisce la riproduzione dei built-in', async () => {
    const audio = AudioManager.getInstance()
    await flushPromises()

    simulateUserClick()
    audio.mute()
    audio.play('select')

    expect(mockOscStart).not.toHaveBeenCalled()
  })

  it('unmute() riabilita la riproduzione', async () => {
    const audio = AudioManager.getInstance()
    await flushPromises()

    simulateUserClick()
    audio.mute()
    audio.unmute()
    audio.play('blip')

    expect(mockOscStart).toHaveBeenCalled()
  })

  it('play() con ID sconosciuto non lancia errori', async () => {
    const audio = AudioManager.getInstance()
    await flushPromises()
    simulateUserClick()
    expect(() => audio.play('nonexistent')).not.toThrow()
  })

  it('play() restituisce this per chaining', () => {
    const audio = AudioManager.getInstance()
    expect(audio.play('blip')).toBe(audio)
  })

  it('tutti i 6 SFX built-in avviano oscillatori', async () => {
    const audio = AudioManager.getInstance()
    await flushPromises()
    simulateUserClick()

    AudioManager.SFX.forEach(id => audio.play(id))
    expect(mockOscStart).toHaveBeenCalled()
  })

  it('play() senza AudioContext non lancia errori', async () => {
    Object.defineProperty(globalThis, 'AudioContext', {
      value:        undefined,
      configurable: true,
      writable:     true,
    })
    const audio = AudioManager.getInstance()
    await flushPromises()
    simulateUserClick()
    expect(() => audio.play('coin')).not.toThrow()
  })
})

describe('AudioManager — binding bottoni DOM', () => {
  beforeEach(() => {
    AudioManager._resetForTest()
    sessionStorage.clear()
    mockOscStart.mockClear()
    document.body.innerHTML = ''
    Object.defineProperty(globalThis, 'AudioContext', {
      value:        vi.fn(createMockCtx),
      configurable: true,
      writable:     true,
    })
  })

  it('bindButtons() non lancia errori su root vuoto', () => {
    expect(() => AudioManager.getInstance().bindButtons(document.body)).not.toThrow()
  })

  it('hover su .arc-btn avvia oscillatore (blip) dopo attivazione', async () => {
    document.body.innerHTML = '<button class="arc-btn">Play</button>'
    const audio = AudioManager.getInstance()
    await flushPromises()

    audio.bindButtons(document.body)
    simulateUserClick()

    document.querySelector('.arc-btn').dispatchEvent(new MouseEvent('mouseenter'))
    expect(mockOscStart).toHaveBeenCalled()
  })

  it('click su .arc-btn-primary avvia oscillatore (select) dopo attivazione', async () => {
    document.body.innerHTML = '<button class="arc-btn arc-btn-primary">Start</button>'
    const audio = AudioManager.getInstance()
    await flushPromises()

    audio.bindButtons(document.body)
    simulateUserClick()

    document.querySelector('.arc-btn-primary').dispatchEvent(new MouseEvent('click'))
    expect(mockOscStart).toHaveBeenCalled()
  })

  it('data-arc-sound-hover="" disabilita il suono hover', async () => {
    document.body.innerHTML = '<button class="arc-btn" data-arc-sound-hover="">Silent</button>'
    const audio = AudioManager.getInstance()
    await flushPromises()

    audio.bindButtons(document.body)
    simulateUserClick()

    document.querySelector('.arc-btn').dispatchEvent(new MouseEvent('mouseenter'))
    expect(mockOscStart).not.toHaveBeenCalled()
  })

  it('data-arc-sound-click sovrascrive il suono click', async () => {
    document.body.innerHTML =
      '<button class="arc-btn arc-btn-primary" data-arc-sound-click="win">Win</button>'
    const audio = AudioManager.getInstance()
    await flushPromises()

    audio.bindButtons(document.body)
    simulateUserClick()

    document.querySelector('.arc-btn-primary').dispatchEvent(new MouseEvent('click'))
    // win genera 4 oscillatori
    expect(mockOscStart.mock.calls.length).toBeGreaterThanOrEqual(1)
  })

  it('click su .arc-btn non-primary non produce suoni di default', async () => {
    document.body.innerHTML = '<button class="arc-btn arc-btn-ghost">Ghost</button>'
    const audio = AudioManager.getInstance()
    await flushPromises()

    audio.bindButtons(document.body)
    simulateUserClick()

    document.querySelector('.arc-btn-ghost').dispatchEvent(new MouseEvent('click'))
    expect(mockOscStart).not.toHaveBeenCalled()
  })
})

describe('AudioManager — register (Howler custom)', () => {
  beforeEach(async () => {
    AudioManager._resetForTest()
    sessionStorage.clear()
    mockHowlPlay.mockClear()
    Object.defineProperty(globalThis, 'AudioContext', {
      value:        vi.fn(createMockCtx),
      configurable: true,
      writable:     true,
    })
    await flushPromises()
  })

  it('register() + play() non lancia errori', async () => {
    const audio = AudioManager.getInstance()
    await flushPromises()
    simulateUserClick()
    expect(() => {
      audio.register('custom', '/sounds/custom.mp3')
      audio.play('custom')
    }).not.toThrow()
  })

  it('register() usa Howler per suoni custom', async () => {
    const audio = AudioManager.getInstance()
    await flushPromises()
    simulateUserClick()

    audio.register('custom', '/sounds/custom.mp3')
    audio.play('custom')

    expect(mockHowlPlay).toHaveBeenCalledTimes(1)
  })

  it('register() restituisce this per chaining', async () => {
    const audio = AudioManager.getInstance()
    await flushPromises()
    expect(audio.register('test', '/test.mp3')).toBe(audio)
  })
})
