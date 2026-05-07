// src/__tests__/css-smoke.test.js
//
// Smoke tests that verify critical CSS selectors and custom properties exist
// in the source files. These run against src/ (always present, no build needed)
// and catch accidental deletions or renames before they reach the bundle.
import { describe, it, expect } from 'vitest'
import { readFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const src = (...parts) => resolve(__dirname, '..', ...parts)

function readCss(...parts) {
  return readFileSync(src(...parts), 'utf-8')
}

// ─── Component selectors ──────────────────────────────────────────────────────

describe('CSS smoke — button.css', () => {
  const css = readCss('components', 'button.css')

  it('definisce .arc-btn', () => expect(css).toContain('.arc-btn'))
  it('definisce .arc-btn-primary', () => expect(css).toContain('.arc-btn-primary'))
  it('definisce .arc-btn-ghost', () => expect(css).toContain('.arc-btn-ghost'))
  it('definisce .arc-btn-danger', () => expect(css).toContain('.arc-btn-danger'))
  it('definisce .arc-btn-sm', () => expect(css).toContain('.arc-btn-sm'))
  it('definisce .arc-btn-lg', () => expect(css).toContain('.arc-btn-lg'))
})

describe('CSS smoke — panel.css', () => {
  const css = readCss('components', 'panel.css')

  it('definisce .arc-panel', () => expect(css).toContain('.arc-panel'))
  it('definisce .arc-panel-header', () => expect(css).toContain('.arc-panel-header'))
  it('definisce .arc-panel-body', () => expect(css).toContain('.arc-panel-body'))
  it('definisce .arc-panel-footer', () => expect(css).toContain('.arc-panel-footer'))
})

describe('CSS smoke — input.css', () => {
  const css = readCss('components', 'input.css')

  it('definisce .arc-input', () => expect(css).toContain('.arc-input'))
  it('definisce .arc-label', () => expect(css).toContain('.arc-label'))
  it('definisce .arc-input-wrapper', () => expect(css).toContain('.arc-input-wrapper'))
})

describe('CSS smoke — select.css (arc-dropdown)', () => {
  const css = readCss('components', 'select.css')

  it('definisce .arc-dropdown', () => expect(css).toContain('.arc-dropdown'))
  it('definisce .arc-dropdown-trigger', () => expect(css).toContain('.arc-dropdown-trigger'))
  it('definisce .arc-dropdown-menu', () => expect(css).toContain('.arc-dropdown-menu'))
  it('definisce .arc-dropdown-option', () => expect(css).toContain('.arc-dropdown-option'))
  it('definisce .arc-dropdown-chevron', () => expect(css).toContain('.arc-dropdown-chevron'))
  it('definisce .arc-dropdown-option--selected', () => expect(css).toContain('.arc-dropdown-option--selected'))
  it('definisce .arc-dropdown-option--disabled', () => expect(css).toContain('.arc-dropdown-option--disabled'))
  it('definisce variante .arc-dropdown-cyan', () => expect(css).toContain('.arc-dropdown-cyan'))
  it('definisce variante .arc-dropdown-red', () => expect(css).toContain('.arc-dropdown-red'))
  it('definisce variante .arc-dropdown-green', () => expect(css).toContain('.arc-dropdown-green'))
  it('usa --dropdown-accent come custom property', () => expect(css).toContain('--dropdown-accent'))
})

describe('CSS smoke — badge.css', () => {
  const css = readCss('components', 'badge.css')

  it('definisce .arc-badge', () => expect(css).toContain('.arc-badge'))
  it('definisce .arc-badge-cyan', () => expect(css).toContain('.arc-badge-cyan'))
  it('definisce .arc-badge-red', () => expect(css).toContain('.arc-badge-red'))
})

describe('CSS smoke — accordion.css', () => {
  const css = readCss('components', 'accordion.css')

  it('definisce .arc-accordion', () => expect(css).toContain('.arc-accordion'))
})

describe('CSS smoke — glow.css', () => {
  const css = readCss('components', 'glow.css')

  it('definisce .arc-glow-cyan', () => expect(css).toContain('.arc-glow-cyan'))
  it('definisce .arc-box-glow-cyan', () => expect(css).toContain('.arc-box-glow-cyan'))
})

describe('CSS smoke — glitch.css', () => {
  const css = readCss('components', 'glitch.css')

  it('definisce .arc-glitch', () => expect(css).toContain('.arc-glitch'))
  it('definisce .arc-glitch-active', () => expect(css).toContain('.arc-glitch-active'))
  it('definisce .arc-glitch-hover', () => expect(css).toContain('.arc-glitch-hover'))
})

describe('CSS smoke — crt.css', () => {
  const css = readCss('components', 'crt.css')

  it('definisce .arc-crt-screen', () => expect(css).toContain('.arc-crt-screen'))
  it('definisce .arc-crt-global', () => expect(css).toContain('.arc-crt-global'))
})

// ─── Design tokens ────────────────────────────────────────────────────────────

describe('CSS smoke — tokens/colors.css', () => {
  const css = readCss('tokens', 'colors.css')

  it('definisce --arc-color-bg', () => expect(css).toContain('--arc-color-bg'))
  it('definisce --arc-color-cyan', () => expect(css).toContain('--arc-color-cyan'))
  it('definisce --arc-color-red', () => expect(css).toContain('--arc-color-red'))
  it('definisce --arc-color-yellow', () => expect(css).toContain('--arc-color-yellow'))
  it('definisce --arc-color-green', () => expect(css).toContain('--arc-color-green'))
  it('definisce --arc-color-purple', () => expect(css).toContain('--arc-color-purple'))
  it('definisce --arc-color-text', () => expect(css).toContain('--arc-color-text'))
  it('definisce --arc-color-disabled', () => expect(css).toContain('--arc-color-disabled'))
})

describe('CSS smoke — tokens/typography.css', () => {
  const css = readCss('tokens', 'typography.css')

  it('definisce --arc-font-pixel', () => expect(css).toContain('--arc-font-pixel'))
  it('definisce --arc-font-terminal', () => expect(css).toContain('--arc-font-terminal'))
  it('definisce --arc-font-mono', () => expect(css).toContain('--arc-font-mono'))
})

describe('CSS smoke — tokens/spacing.css', () => {
  const css = readCss('tokens', 'spacing.css')

  it('definisce --arc-space-1', () => expect(css).toContain('--arc-space-1'))
  it('definisce --arc-space-4', () => expect(css).toContain('--arc-space-4'))
  it('definisce --arc-radius-pixel', () => expect(css).toContain('--arc-radius-pixel'))
})

describe('CSS smoke — tokens/animation.css', () => {
  const css = readCss('tokens', 'animation.css')

  it('definisce --arc-anim-fast', () => expect(css).toContain('--arc-anim-fast'))
  it('definisce --arc-anim-normal', () => expect(css).toContain('--arc-anim-normal'))
  it('definisce --arc-ease-pixel', () => expect(css).toContain('--arc-ease-pixel'))
})

// ─── Deprecated selectors are marked (not silently removed) ──────────────────

describe('CSS smoke — arcade-ui.css contiene blocco deprecated', () => {
  const css = readCss('styles', 'arcade-ui.css')

  it('contiene il blocco DEPRECATED con nota v2.0', () =>
    expect(css).toContain('REMOVED in v2.0'))

  it('.arcade-btn è marcata @deprecated', () =>
    expect(css).toMatch(/@deprecated[\s\S]{0,60}\.arcade-btn/))

  it('.arcade-input è marcata @deprecated', () =>
    expect(css).toMatch(/@deprecated[\s\S]{0,60}\.arcade-input/))

  it('.arcade-panel è marcata @deprecated', () =>
    expect(css).toMatch(/@deprecated[\s\S]{0,60}\.arcade-panel/))
})
