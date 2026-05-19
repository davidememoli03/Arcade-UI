# Angular consumer guide — Arcade UI

Copy-paste reference for apps using **`@davide03memoli/arcade-ui`** with TypeScript. Live markup and variants: [Storybook](https://davidememoli03.github.io/Arcade-UI/).

## Imports & typings

| Import | Use |
|--------|-----|
| `@davide03memoli/arcade-ui` | `AudioManager`, `bindGlitch`, `initGlitch`, tokens, JS helpers (`dist/arcade-ui.d.ts`) |
| `@davide03memoli/arcade-ui/angular` | Standalone directives + `ArcadeAudioService` (`dist/angular/index.d.ts`) |

Paths must match the package **`exports`** field (see root `package.json`). Prefer these specifiers over deep paths into `dist/` unless documented.

## TypeScript strict

- Enable **`"strict": true`** for your application sources.
- **`skipLibCheck`** only relaxes checking of declaration files (`.d.ts`). Use it temporarily if a transitive typings conflict appears; it does not disable type-checking of your `.ts` templates/components.
- This library’s published Angular types are verified from an **`npm pack`** tarball with `strict` + `moduleResolution: NodeNext` (`npm run smoke:angular-types` in this repo).

## Global CSS

### A. `angular.json` → `styles`

Stable and explicit ordering:

```json
"styles": [
  "src/styles.css",
  "node_modules/@davide03memoli/arcade-ui/dist/arcade-ui.css",
  "node_modules/@davide03memoli/arcade-ui/dist/themes/phosphor-green.css"
]
```

Swap theme files: `amber-crt.css`, `magenta-wave.css`, `ice-blue.css`.

### B. Single global SCSS entry

```scss
@import '@davide03memoli/arcade-ui/dist/arcade-ui.css';
@import '@davide03memoli/arcade-ui/themes/phosphor-green';
```

Point `angular.json` `styles` at `src/styles.scss` only.

### C. `stylePreprocessorOptions`

Use **`includePaths`** for your own Sass partials (e.g. `"src/styles"`). Arcade UI styles should keep **fully qualified** package imports as above — no need to add `node_modules` unless your toolchain requires it.

Load arcade fonts via `index.html` or your asset pipeline (see main README).

## Theme on `document.documentElement`

1. Import the **theme CSS** (overlay tokens).
2. Add the matching class on **`<html>`**, e.g. `arc-theme-phosphor`.

**With helpers** (`@davide03memoli/arcade-ui/angular`): `[arcadeTheme]="'arc-theme-phosphor'"` + `arcadeThemeTarget="document"` on a root element.

**Manual:**

```typescript
document.documentElement.classList.add('arc-theme-phosphor')
```

Prefer `DOCUMENT` + `Renderer2` or `APP_INITIALIZER` in real apps if you avoid globals in constructors.

## Tree-shaking

- The package marks **`*.css` as side effects** — bundlers will **not** strip stylesheet imports.
- Import **named** symbols from `@davide03memoli/arcade-ui` so unused JS can be dropped by esbuild/webpack.
- `ArcadeAudioService` is `providedIn: 'root'` — it ships only if something injects it.

## Minimal standalone — `AfterViewInit` + `AudioManager`

```typescript
import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
} from '@angular/core'
import { AudioManager, bindGlitch } from '@davide03memoli/arcade-ui'

@Component({
  selector: 'app-glitch-demo',
  standalone: true,
  template: `
    <section class="arc-panel arc-panel-cyan">
      <span class="arc-glitch" data-text="PLAYER 1">PLAYER 1</span>
      <button type="button" class="arc-btn arc-btn-primary" (click)="coin()">COIN</button>
    </section>
  `,
})
export class GlitchDemoComponent implements AfterViewInit {
  private readonly host = inject(ElementRef<HTMLElement>)
  private readonly audio: AudioManager = AudioManager.getInstance()

  ngAfterViewInit(): void {
    bindGlitch(this.host.nativeElement)
  }

  coin(): void {
    this.audio.play('coin')
  }
}
```

## Standalone — directives + `ArcadeAudioService`

```typescript
import { Component } from '@angular/core'
import {
  ArcadeAudioService,
  arcadeUiAngularImports,
} from '@davide03memoli/arcade-ui/angular'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [...arcadeUiAngularImports],
  template: `
    <main
      [arcadeTheme]="theme"
      arcadeThemeTarget="document"
      arcadeGlitch
      arcadeGlitchTarget="element"
    >
      <button type="button" class="arc-btn arc-btn-primary" (click)="coin()">COIN</button>
    </main>
  `,
})
export class AppComponent {
  theme = 'arc-theme-phosphor'

  constructor(private readonly arcadeAudio: ArcadeAudioService) {}

  coin(): void {
    this.arcadeAudio.play('coin')
  }
}
```

## Optional DI — `InjectionToken`

When you need a typed token (tests, alternate providers) instead of `ArcadeAudioService`:

```typescript
import { InjectionToken } from '@angular/core'
import { AudioManager } from '@davide03memoli/arcade-ui'

export const ARCADE_AUDIO_MANAGER = new InjectionToken<AudioManager>(
  'ARCADE_AUDIO_MANAGER',
  {
    providedIn: 'root',
    factory: () => AudioManager.getInstance(),
  },
)
```

API reference in published typings: `angular/src/*.ts` → `dist/angular/*.d.ts`.
