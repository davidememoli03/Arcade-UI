// src/__tests__/css-smoke.test.js
//
// Smoke tests that verify critical CSS selectors and custom properties exist
// in the source files. These run against src/ (always present, no build needed)
// and catch accidental deletions or renames before they reach the bundle.
import { describe, it, expect } from 'vitest'
import { readFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'node:url'

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
  it('definisce .arc-dropdown-option-selected', () => expect(css).toContain('.arc-dropdown-option-selected'))
  it('definisce .arc-dropdown-option-disabled', () => expect(css).toContain('.arc-dropdown-option-disabled'))
  it('definisce variante .arc-dropdown-cyan', () => expect(css).toContain('.arc-dropdown-cyan'))
  it('definisce variante .arc-dropdown-red', () => expect(css).toContain('.arc-dropdown-red'))
  it('definisce variante .arc-dropdown-green', () => expect(css).toContain('.arc-dropdown-green'))
  it('usa --dropdown-accent come custom property', () => expect(css).toContain('--dropdown-accent'))
})

describe('CSS smoke — modal.css', () => {
  const css = readCss('components', 'modal.css')

  it('definisce .arc-modal-backdrop', () => expect(css).toContain('.arc-modal-backdrop'))
  it('definisce .arc-modal-backdrop-open', () => expect(css).toContain('.arc-modal-backdrop-open'))
  it('definisce .arc-modal', () => expect(css).toContain('.arc-modal'))
  it('definisce .arc-modal-header', () => expect(css).toContain('.arc-modal-header'))
  it('definisce .arc-modal-title', () => expect(css).toContain('.arc-modal-title'))
  it('definisce .arc-modal-close', () => expect(css).toContain('.arc-modal-close'))
  it('definisce .arc-modal-body', () => expect(css).toContain('.arc-modal-body'))
  it('definisce .arc-modal-footer', () => expect(css).toContain('.arc-modal-footer'))
  it('definisce variante .arc-modal-cyan', () => expect(css).toContain('.arc-modal-cyan'))
  it('definisce variante .arc-modal-green', () => expect(css).toContain('.arc-modal-green'))
  it('definisce variante .arc-modal-yellow', () => expect(css).toContain('.arc-modal-yellow'))
  it('definisce variante .arc-modal-red', () => expect(css).toContain('.arc-modal-red'))
  it('definisce variante .arc-modal-purple', () => expect(css).toContain('.arc-modal-purple'))
  it('usa --modal-accent come custom property', () => expect(css).toContain('--modal-accent'))
  it('contiene keyframes arc-modal-in', () => expect(css).toContain('arc-modal-in'))
  it('contiene keyframes arc-modal-backdrop-in', () => expect(css).toContain('arc-modal-backdrop-in'))
})

describe('CSS smoke — tooltip.css', () => {
  const css = readCss('components', 'tooltip.css')

  it('definisce [data-tooltip]', () => expect(css).toContain('[data-tooltip]'))
  it('definisce [data-tooltip]::after', () => expect(css).toContain('[data-tooltip]::after'))
  it('definisce [data-tooltip]::before', () => expect(css).toContain('[data-tooltip]::before'))
  it('usa attr(data-tooltip) nel content', () => expect(css).toContain('attr(data-tooltip)'))
  it('definisce .arc-tooltip-bottom', () => expect(css).toContain('.arc-tooltip-bottom'))
  it('definisce .arc-tooltip-left', () => expect(css).toContain('.arc-tooltip-left'))
  it('definisce .arc-tooltip-right', () => expect(css).toContain('.arc-tooltip-right'))
  it('usa opacity per show/hide', () => expect(css).toContain('opacity: 0'))
  it('appare on :hover', () => expect(css).toContain(':hover::after'))
  it('appare on :focus-visible', () => expect(css).toContain(':focus-visible::after'))
  it('usa z-index alto', () => expect(css).toContain('z-index: 9000'))
  it('usa font pixel', () => expect(css).toContain('var(--arc-font-pixel)'))
  it('usa colore cyan di default', () => expect(css).toContain('var(--arc-color-cyan)'))
  it('usa pointer-events: none', () => expect(css).toContain('pointer-events: none'))
})

describe('CSS smoke — progress.css', () => {
  const css = readCss('components', 'progress.css')

  it('definisce .arc-progress', () => expect(css).toContain('.arc-progress'))
  it('definisce .arc-progress-bar', () => expect(css).toContain('.arc-progress-bar'))
  it('definisce .arc-progress-indeterminate', () => expect(css).toContain('.arc-progress-indeterminate'))
  it('definisce .arc-progress-wrapper', () => expect(css).toContain('.arc-progress-wrapper'))
  it('definisce .arc-progress-label', () => expect(css).toContain('.arc-progress-label'))
  it('definisce .arc-progress-sm', () => expect(css).toContain('.arc-progress-sm'))
  it('definisce .arc-progress-lg', () => expect(css).toContain('.arc-progress-lg'))
  it('definisce variante .arc-progress-cyan', () => expect(css).toContain('.arc-progress-cyan'))
  it('definisce variante .arc-progress-green', () => expect(css).toContain('.arc-progress-green'))
  it('definisce variante .arc-progress-yellow', () => expect(css).toContain('.arc-progress-yellow'))
  it('definisce variante .arc-progress-red', () => expect(css).toContain('.arc-progress-red'))
  it('definisce variante .arc-progress-purple', () => expect(css).toContain('.arc-progress-purple'))
  it('usa --progress-accent come custom property', () => expect(css).toContain('--progress-accent'))
  it('usa --arc-progress per il fill width', () => expect(css).toContain('--arc-progress'))
  it('contiene keyframes arc-progress-sweep', () => expect(css).toContain('arc-progress-sweep'))
  it('usa repeating-linear-gradient per i blocchi', () => expect(css).toContain('repeating-linear-gradient'))
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

describe('CSS smoke — tokens/typography.css (wrapper)', () => {
  const css = readCss('tokens', 'typography.css')

  it('importa typography-vars.css generato da SD', () =>
    expect(css).toContain("@import url('./typography-vars.css')"))
  it('importa Google Fonts', () =>
    expect(css).toContain('fonts.googleapis.com'))
})

describe('CSS smoke — tokens/typography-vars.css (generato da SD)', () => {
  const css = readCss('tokens', 'typography-vars.css')

  it('definisce --arc-font-pixel', () => expect(css).toContain('--arc-font-pixel'))
  it('definisce --arc-font-terminal', () => expect(css).toContain('--arc-font-terminal'))
  it('definisce --arc-font-mono', () => expect(css).toContain('--arc-font-mono'))
  it('definisce --arc-text-h1-size', () => expect(css).toContain('--arc-text-h1-size'))
  it('definisce --arc-text-body-size', () => expect(css).toContain('--arc-text-body-size'))
  it('reca il banner auto-generated', () => expect(css).toContain('auto-generated'))
})

describe('CSS smoke — tokens/spacing.css', () => {
  const css = readCss('tokens', 'spacing.css')

  it('definisce --arc-space-1', () => expect(css).toContain('--arc-space-1'))
  it('definisce --arc-space-4', () => expect(css).toContain('--arc-space-4'))
  it('definisce --arc-radius-pixel', () => expect(css).toContain('--arc-radius-pixel'))
})

describe('CSS smoke — tokens/animation.css (wrapper)', () => {
  const css = readCss('tokens', 'animation.css')

  it('importa animation-vars.css generato da SD', () =>
    expect(css).toContain("@import url('./animation-vars.css')"))
  it('mantiene @keyframes blink', () => expect(css).toContain('@keyframes blink'))
  it('mantiene @keyframes pulse-glow', () => expect(css).toContain('@keyframes pulse-glow'))
  it('mantiene @keyframes glitch', () => expect(css).toContain('@keyframes glitch'))
})

describe('CSS smoke — tokens/animation-vars.css (generato da SD)', () => {
  const css = readCss('tokens', 'animation-vars.css')

  it('definisce --arc-anim-fast', () => expect(css).toContain('--arc-anim-fast'))
  it('definisce --arc-anim-normal', () => expect(css).toContain('--arc-anim-normal'))
  it('definisce --arc-ease-pixel', () => expect(css).toContain('--arc-ease-pixel'))
  it('definisce --arc-ease-arcade', () => expect(css).toContain('--arc-ease-arcade'))
  it('reca il banner auto-generated', () => expect(css).toContain('auto-generated'))
})

// ─── Style Dictionary — tokens.flat.json ─────────────────────────────────────

describe('Style Dictionary — tokens.flat.json', () => {
  const raw  = readFileSync(src('tokens', 'tokens.flat.json'), 'utf-8')
  const flat = JSON.parse(raw)

  it('è un oggetto JSON valido', () => expect(typeof flat).toBe('object'))
  it('contiene arc-color-bg', () => expect(flat).toHaveProperty('arc-color-bg'))
  it('contiene arc-color-cyan', () => expect(flat).toHaveProperty('arc-color-cyan'))
  it('contiene arc-space-1', () => expect(flat).toHaveProperty('arc-space-1'))
  it('contiene arc-anim-fast', () => expect(flat).toHaveProperty('arc-anim-fast'))
  it('contiene arc-font-pixel', () => expect(flat).toHaveProperty('arc-font-pixel'))
  it('il valore di arc-color-cyan è #00f5ff', () =>
    expect(flat['arc-color-cyan']).toBe('#00f5ff'))
  it('il valore di arc-space-1 è 8px', () =>
    expect(flat['arc-space-1']).toBe('8px'))
  it('il valore di arc-anim-fast è 150ms', () =>
    expect(flat['arc-anim-fast']).toBe('150ms'))
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
