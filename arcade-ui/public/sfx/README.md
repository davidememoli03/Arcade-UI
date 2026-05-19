# SFX – Arcade UI

## Built-in sounds (no files required)

All built-in sound effects are **synthesized at runtime via the Web Audio API** —
no MP3 files, no network requests, no extra dependencies.

| ID | Trigger | Description |
|----|---------|-------------|
| `coin` | dialog open | Two-tone "bling" |
| `select` | `.arc-btn-primary` click | Ascending sweep — confirm |
| `blip` | `.arc-btn` hover | Short beep — navigation |
| `error` | validation failed | Descending buzz |
| `win` | completion | Ascending C-major arpeggio |
| `gameover` | manual | Descending sequence |

```js
import { AudioManager } from '@davide03memoli/arcade-ui'

const audio = AudioManager.getInstance()
audio.play('coin')      // works immediately — no files needed
audio.play('select')
audio.play('blip')
audio.play('error')
audio.play('win')
audio.play('gameover')
```

`bindArcadeSounds()` runs at `DOMContentLoaded` (via `AudioManager`): declarative
`data-arc-sound-*` on any element, plus `.arc-btn` defaults (hover → `blip`,
primary click → `select`). See README for the full attribute table.

```html
<button class="arc-tab" data-arc-sound-click="select">STAGE 2</button>
<button class="arc-btn arc-btn-primary" data-arc-sound-click="win">YOU WIN</button>
<button class="arc-btn" data-arc-sound-hover="">SILENT HOVER</button>
```

---

## Custom sounds (bring your own files)

To play your own audio files, install the optional peer dependency
[Howler.js](https://howlerjs.com/) and register each sound before playing it:

```bash
npm install howler
```

```js
import { AudioManager } from '@davide03memoli/arcade-ui'

const audio = AudioManager.getInstance()

// Register once (preloads the file)
audio.register('powerup', '/sounds/powerup.mp3')
audio.register('jump',    '/sounds/jump.ogg')

// Play by ID
audio.play('powerup')
audio.play('jump')
```

### Recommended file specs

| Property | Recommendation |
|----------|----------------|
| Format | MP3 (broadest support), OGG as fallback |
| Duration | < 2 s for UI SFX |
| Bitrate | 64–128 kbps (keeps latency < 50 ms) |
| Sample rate | 44.1 kHz |

### Serving files

Arcade UI does **not** ship MP3 files in the npm package.
Host your custom sounds wherever suits your project:

- `public/sounds/` in your own app (Vite, Next.js, etc.)
- A CDN or object storage bucket
- Any reachable URL path

Pass the full URL or root-relative path to `register()`:

```js
// Root-relative (served from your app's public dir)
audio.register('powerup', '/sounds/powerup.mp3')

// Absolute CDN URL
audio.register('powerup', 'https://cdn.example.com/sfx/powerup.mp3')
```

> **Note:** This `public/sfx/` folder exists only as documentation.
> Its contents are excluded from the npm package and are **not** copied to `dist/`
> during build. Place your audio files in your own application's assets, not here.

### Sample sprite sheets (Storybook / dev)

PNG di esempio per le story Sprite (non inclusi nel tarball npm):

| File | Uso |
|------|-----|
| `sample-sprite-strip.png` | 4 frame × 16×16 px in una riga |
| `sample-sprite-grid.png` | Griglia 4×2 (8 frame) 16×16 px |
