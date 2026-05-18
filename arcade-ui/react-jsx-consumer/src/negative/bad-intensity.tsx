/**
 * Regression fixture: **must not typecheck** when `@davide03memoli/arcade-ui/react` is loaded —
 * `data-arc-glitch-intensity` is narrowed to low | medium | high.
 *
 * Remove the side-effect import below and `"bogus"` becomes a plain string → TS accepts it
 * (matches default React DOM looseness). See README § TypeScript + React (JSX).
 */
import '@davide03memoli/arcade-ui/react'

export function BadIntensityFixture() {
  return <span data-arc-glitch-intensity="bogus" />
}
