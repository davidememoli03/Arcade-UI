/**
 * React JSX ergonomics for Arcade UI markup — extends `@types/react` DOM props with
 * optional hooks documented in README / Storybook (`data-*`, glitch helpers).
 *
 * Import once in app bootstrap:
 *   import '@davide03memoli/arcade-ui/react'
 *
 * Requires `@types/react` (React does not ship TS types).
 *
 * @see README § TypeScript + React (JSX)
 */
/// <reference types="react" />

declare module 'react' {
  interface HTMLAttributes<T> {
    // ─── Tooltip (CSS-only, attr(data-tooltip)) ───────────────────────────────

    /** Tooltip copy surfaced via CSS `attr(data-tooltip)`. Mirror with aria-label / aria-describedby for SR users. */
    'data-tooltip'?: string | undefined

    // ─── Modal triggers ───────────────────────────────────────────────────────

    /** Targets `#id` of `.arc-modal-backdrop` to open (`bindModalTriggers` / arcModal). */
    'data-arc-modal-open'?: string | undefined

    // ─── Arcade buttons → AudioManager (optional overrides on `.arc-btn`) ─────

    /** Built-in / registered SFX id on `mouseenter`. Empty string = silent. */
    'data-arc-sound-hover'?: string | undefined

    /** SFX on `click` (keyboard + pointer). Overrides `.arc-btn-primary` default. */
    'data-arc-sound-click'?: string | undefined

    /** SFX on `pointerdown` (touch-friendly, prima del click). */
    'data-arc-sound-pointerdown'?: string | undefined

    /** SFX on `focus`. */
    'data-arc-sound-focus'?: string | undefined

    /** SFX on bubbling custom event `arc:success` (`dispatchArcadeSound`). */
    'data-arc-sound-success'?: string | undefined

    /** SFX on bubbling custom event `arc:error`. */
    'data-arc-sound-error'?: string | undefined

    // ─── Tabs (JS-driven `.arc-tabs`) ────────────────────────────────────────────

    /** Enables ArcTabs auto-init (`bindTabs` / DOMContentLoaded) on this container. */
    'data-arc-tabs'?: boolean | '' | undefined

    /** Internal marker set by `arcTabs()` — usually omit in markup. */
    'data-arc-tabs-js'?: boolean | '' | undefined

    // ─── Sprite seven-segment (`bindArcDisplays`) ───────────────────────────────

    /** Opt-in container for arcade numeric displays. */
    'data-arc-display'?: boolean | '' | undefined

    /** Raw digits/value fed into `setArcDisplayValue`. */
    'data-arc-display-value'?: string | number | undefined

    /** Zero-padding hint (`pad` option). */
    'data-arc-display-pad'?: string | number | undefined

    // ─── Slider (`bindSliders` range fills) ─────────────────────────────────────

    /** Enables `--arc-slider-value` sync on this `<input type="range">`. */
    'data-arc-slider'?: boolean | '' | undefined

    /** Element `#id` whose text mirrors the slider value. */
    'data-arc-slider-display'?: string | undefined

    // ─── Themes demo helper (`Themes.stories` pattern) ───────────────────────────

    /** Theme class on `<html>` / `:root` (e.g. `arc-theme-phosphor`). Empty resets default. */
    'data-arc-theme'?: string | undefined

    // ─── Glitch / glow (`initGlitch`, `[data-arc-glitch]`) ───────────────────────

    /** Selector hook matching glitch presets besides `.arc-glitch`. */
    'data-arc-glitch'?: boolean | '' | undefined

    /**
     * Glitch burst cadence preset (`Glitch.stories`).
     * **Augmentation narrows this**: typos become TS errors once `@davide03memoli/arcade-ui/react` is imported.
     */
    'data-arc-glitch-intensity'?: 'low' | 'medium' | 'high' | undefined

    /**
     * Label echoed via CSS `attr(data-text)` for chromatic / glitch layers.
     * `initGlitch` may populate from textContent when omitted.
     */
    'data-text'?: string | undefined
  }
}

export {}
