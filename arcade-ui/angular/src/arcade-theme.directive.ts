import { DOCUMENT } from '@angular/common'
import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  Renderer2,
  inject,
} from '@angular/core'

/** Theme classes shipped with Arcade UI CSS themes (see README / `arcade-ui.d.ts`). */
export const ARCADE_THEME_CLASSES = [
  'arc-theme-phosphor',
  'arc-theme-amber-crt',
  'arc-theme-magenta-wave',
  'arc-theme-ice-blue',
] as const

/**
 * Applies an `arc-theme-*` class either on `document.documentElement` or on the host element.
 *
 * @example
 * ```html
 * <body [arcadeTheme]="'arc-theme-phosphor'" arcadeThemeTarget="document"></body>
 * ```
 */
@Directive({
  selector: '[arcadeTheme]',
  standalone: true,
})
export class ArcadeThemeDirective implements OnChanges {
  private readonly doc = inject(DOCUMENT)
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef)
  private readonly renderer = inject(Renderer2)

  /** `'document'` updates `<html>` — typical app shell usage. `'host'` toggles class on this element only. */
  @Input({ alias: 'arcadeThemeTarget' }) arcadeThemeTarget: 'document' | 'host' = 'document'

  /** Theme class name (e.g. `arc-theme-phosphor`). Empty string clears known Arcade themes from the target. */
  @Input({ alias: 'arcadeTheme' }) arcadeTheme = ''

  ngOnChanges(): void {
    const targetEl =
      this.arcadeThemeTarget === 'document'
        ? this.doc.documentElement
        : this.host.nativeElement

    for (const cls of ARCADE_THEME_CLASSES) {
      this.renderer.removeClass(targetEl, cls)
    }

    const next = this.arcadeTheme?.trim() ?? ''
    if (next) {
      this.renderer.addClass(targetEl, next)
    }
  }
}
