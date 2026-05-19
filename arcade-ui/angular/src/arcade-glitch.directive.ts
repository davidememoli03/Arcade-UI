import { DOCUMENT } from '@angular/common'
import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  inject,
} from '@angular/core'

import { bindGlitch } from '@davide03memoli/arcade-ui'

/**
 * Runs `bindGlitch` after the view initializes — either on the host subtree or on the whole `document`.
 *
 * Safe under React-style double-invoke patterns: `initGlitch` inside `bindGlitch` only fills missing `data-text`.
 *
 * @example
 * ```html
 * <main arcadeGlitch arcadeGlitchTarget="element">...</main>
 * ```
 */
@Directive({
  selector: '[arcadeGlitch]',
  standalone: true,
})
export class ArcadeGlitchDirective implements AfterViewInit {
  private readonly doc = inject(DOCUMENT)
  private readonly host = inject<ElementRef<Element>>(ElementRef)

  /** `'element'` scopes work to the host node (recommended inside routed views). `'document'` mirrors `main.ts` one-shot bootstrap. */
  @Input({ alias: 'arcadeGlitchTarget' }) arcadeGlitchTarget: 'document' | 'element' = 'element'

  ngAfterViewInit(): void {
    const root =
      this.arcadeGlitchTarget === 'document' ? this.doc : this.host.nativeElement
    bindGlitch(root)
  }
}
