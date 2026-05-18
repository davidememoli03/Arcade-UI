/**
 * Mirrors a Vite / CRA `main.tsx` bootstrap: side-effect CSS + theme class + one-shot JS API.
 * Keeping `initGlitch(document)` here (outside React) avoids Strict Mode double-mount quirks.
 */
import '@davide03memoli/arcade-ui/react'
import '@davide03memoli/arcade-ui/dist/arcade-ui.css'
import '@davide03memoli/arcade-ui/themes/phosphor-green'
import { initGlitch } from '@davide03memoli/arcade-ui'

import { ArcadeJsxSmokeApp } from './App.js'

/** Apply theme token class on `<html>` (see README theme section). */
export function applyArcadeThemeClass(themeClass: string): void {
  document.documentElement.classList.remove(
    'arc-theme-phosphor',
    'arc-theme-amber-crt',
    'arc-theme-magenta-wave',
    'arc-theme-ice-blue',
  )
  if (themeClass) document.documentElement.classList.add(themeClass)
}

/**
 * Call once after CSS imports — typically from `main.tsx` before `createRoot(...).render(...)`.
 */
export function bootstrapArcadeJs(documentRef: Document): void {
  applyArcadeThemeClass('arc-theme-phosphor')
  initGlitch(documentRef)
}

bootstrapArcadeJs(document)

export { ArcadeJsxSmokeApp }
