import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  OnChanges,
  Renderer2,
  inject,
} from '@angular/core'

import { bindArcadeSounds } from '@davide03memoli/arcade-ui'

/**
 * Mirrors declarative `data-arc-sound-*` on the host element, then runs `bindArcadeSounds` on that subtree.
 *
 * Use on buttons, cards, tabs, or any interactive host. Empty string (`""`) disables a hook (e.g. silent hover).
 *
 * @example
 * ```html
 * <button type="button" class="arc-btn arc-btn-primary" arcadeSoundClick="win">YOU WIN</button>
 * <button type="button" class="arc-btn" [arcadeSoundHover]="''">SILENT HOVER</button>
 * ```
 */
@Directive({
  selector:
    '[arcadeSoundClick], [arcadeSoundHover], [arcadeSoundPointerdown], [arcadeSoundFocus], [arcadeSoundSuccess], [arcadeSoundError]',
  standalone: true,
})
export class ArcadeSoundDirective implements OnChanges, AfterViewInit {
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef)
  private readonly renderer = inject(Renderer2)

  /** Built-in / registered SFX id, URL, or `""` to disable. Maps to `data-arc-sound-click`. */
  @Input({ alias: 'arcadeSoundClick' }) arcadeSoundClick?: string

  @Input({ alias: 'arcadeSoundPointerdown' }) arcadeSoundPointerdown?: string

  @Input({ alias: 'arcadeSoundHover' }) arcadeSoundHover?: string

  @Input({ alias: 'arcadeSoundFocus' }) arcadeSoundFocus?: string

  /** Responds to `dispatchArcadeSound(el, 'success')` on this element or descendants. */
  @Input({ alias: 'arcadeSoundSuccess' }) arcadeSoundSuccess?: string

  @Input({ alias: 'arcadeSoundError' }) arcadeSoundError?: string

  ngOnChanges(): void {
    this.syncAttr('data-arc-sound-click', this.arcadeSoundClick)
    this.syncAttr('data-arc-sound-pointerdown', this.arcadeSoundPointerdown)
    this.syncAttr('data-arc-sound-hover', this.arcadeSoundHover)
    this.syncAttr('data-arc-sound-focus', this.arcadeSoundFocus)
    this.syncAttr('data-arc-sound-success', this.arcadeSoundSuccess)
    this.syncAttr('data-arc-sound-error', this.arcadeSoundError)
  }

  ngAfterViewInit(): void {
    if (!this.hasAnySoundBinding()) return
    bindArcadeSounds(this.host.nativeElement)
  }

  private syncAttr(attr: string, value: string | undefined): void {
    const el = this.host.nativeElement
    if (value === undefined) {
      this.renderer.removeAttribute(el, attr)
      return
    }
    this.renderer.setAttribute(el, attr, value)
  }

  private hasAnySoundBinding(): boolean {
    return (
      this.arcadeSoundClick !== undefined ||
      this.arcadeSoundPointerdown !== undefined ||
      this.arcadeSoundHover !== undefined ||
      this.arcadeSoundFocus !== undefined ||
      this.arcadeSoundSuccess !== undefined ||
      this.arcadeSoundError !== undefined
    )
  }
}
