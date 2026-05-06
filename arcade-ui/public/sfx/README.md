# SFX – Arcade UI

Posiziona qui i file audio distribuiti con la libreria.

| File          | ID AudioManager | Trigger default               |
|---------------|-----------------|-------------------------------|
| coin.mp3      | `coin`          | Apertura dialog               |
| select.mp3    | `select`        | Click `.arc-btn-primary`      |
| blip.mp3      | `blip`          | Hover bottoni `.arc-btn`      |
| error.mp3     | `error`         | Validazione fallita           |
| win.mp3       | `win`           | Completamento                 |
| gameover.mp3  | `gameover`      | Manuale                       |

Questi file vengono copiati in `dist/sfx/` durante il build (`npm run build`).

## Percorso base personalizzato

Se i file sono serviti da CDN o da un path diverso, usa `setBasePath`:

```js
import { AudioManager } from '@davide03memoli/arcade-ui'

AudioManager.getInstance().setBasePath('https://cdn.example.com/arcade-ui')
// cercherà https://cdn.example.com/arcade-ui/sfx/coin.mp3
```

## Requisiti

- Formato raccomandato: **MP3** (massima compatibilità)
- Durata consigliata: < 2 secondi per SFX UI
- Bitrate: 64–128 kbps (file leggeri per < 50 ms latency)
