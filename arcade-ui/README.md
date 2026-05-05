# @davide03memoli/arcade-ui

Libreria di componenti UI ispirata ai videogiochi arcade. Stile retrò, effetti sonori e temi personalizzabili.

[![CI](https://github.com/davidememoli03/Arcade-UI/actions/workflows/ci.yml/badge.svg)](https://github.com/davidememoli03/Arcade-UI/actions/workflows/ci.yml)
[![npm](https://img.shields.io/npm/v/@davide03memoli/arcade-ui)](https://www.npmjs.com/package/@davide03memoli/arcade-ui)

---

## Installazione

```bash
npm install @davide03memoli/arcade-ui
```

> **Peer dependency:** la libreria usa [Howler.js](https://howlerjs.com/) per gli effetti sonori.
>
> ```bash
> npm install howler
> ```

---

## Utilizzo

### Importa il CSS

Aggiungi il foglio di stile all'entry point della tua applicazione:

```js
import '@davide03memoli/arcade-ui/dist/arcade-ui.css'
```

In alternativa, usa la versione minificata:

```js
import '@davide03memoli/arcade-ui/dist/arcade-ui.min.css'
```

### Importa i moduli

```js
import { version } from '@davide03memoli/arcade-ui'

console.log(version) // es. '1.0.0'
```

---

## Classi CSS disponibili

| Classe        | Descrizione                                 |
|---------------|---------------------------------------------|
| `.arcade-btn` | Bottone con stile arcade (sfondo nero, bordo e testo ciano) |

### Esempio

```html
<button class="arcade-btn">INSERT COIN</button>
```

---

## TypeScript

Il pacchetto include le dichiarazioni di tipo (`dist/arcade-ui.d.ts`). Funziona out-of-the-box senza configurazioni aggiuntive.

```ts
import { version } from '@davide03memoli/arcade-ui'
// version: string
```

---

## Compatibilità

| Formato | File                   |
|---------|------------------------|
| ESM     | `dist/arcade-ui.es.js` |
| CJS     | `dist/arcade-ui.cjs.js`|
| Types   | `dist/arcade-ui.d.ts`  |

---

## Contribuire

Vedi il [repository su GitHub](https://github.com/davidememoli03/Arcade-UI) per le istruzioni su come contribuire.

---

## Licenza

[MIT](../LICENSE)
