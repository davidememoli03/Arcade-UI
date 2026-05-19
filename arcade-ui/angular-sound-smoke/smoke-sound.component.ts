/**
 * Compiled by `npm run smoke:angular-sound` — proves `ArcadeSoundDirective` inputs bind in templates.
 */
import { Component } from '@angular/core'

import { arcadeUiAngularImports } from '@davide03memoli/arcade-ui/angular'

@Component({
  selector: 'app-sound-smoke',
  standalone: true,
  imports: [...arcadeUiAngularImports],
  template: `
    <button
      type="button"
      class="arc-btn arc-btn-primary"
      arcadeSoundClick="coin"
      arcadeSoundHover="blip">
      COIN
    </button>
    <button type="button" class="arc-btn" [arcadeSoundHover]="''">SILENT</button>
    <button type="button" class="arc-tab" arcadeSoundClick="select">STAGE</button>
  `,
})
export class SmokeSoundComponent {}
