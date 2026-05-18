/**
 * @license MIT
 * Angular helpers for Arcade UI — optional secondary entry `@davide03memoli/arcade-ui/angular`.
 *
 * Imports must precede re-exports so `.d.ts` consumers (especially installs from npm tarball)
 * see stable module shape — ng-packagr used to emit import-after-export blocks that confused `tsc`.
 */
import { ArcadeGlitchDirective } from './arcade-glitch.directive'
import { ArcadeThemeDirective } from './arcade-theme.directive'

export { ArcadeAudioService } from './arcade-audio.service'
export { ArcadeGlitchDirective } from './arcade-glitch.directive'
export {
  ARCADE_THEME_CLASSES,
  ArcadeThemeDirective,
} from './arcade-theme.directive'

/** Standalone directives — spread into `imports: [...]` on standalone components. */
export const arcadeUiAngularImports = [
  ArcadeThemeDirective,
  ArcadeGlitchDirective,
] as const
