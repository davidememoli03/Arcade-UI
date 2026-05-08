# Self-hosted fonts (latin woff2)

File sotto questa cartella sono inclusi nel pacchetto npm (`@davide03memoli/arcade-ui/public/fonts`)
e referenziati da `src/base/fonts.css` con URL assoluti `/fonts/…`.

## File

| File | Famiglia |
|------|----------|
| `press-start-2p-latin.woff2` | Press Start 2P |
| `vt323-latin.woff2` | VT323 |
| `share-tech-mono-latin.woff2` | Share Tech Mono |

## Uso nell’app

1. Copia questa cartella (o installa il pacchetto e usa `node_modules/.../public/fonts`) nella root static del tuo sito come **`/fonts/`**, oppure adatta gli URL in un override CSS.
2. Importa lo stylesheet della libreria come al solito: `@font-face` locali vengono valutati prima del fallback Google Fonts in `typography.css`.

## Licenza

Font rilasciati sotto **SIL Open Font License** (stessa distribuzione di Google Fonts).
