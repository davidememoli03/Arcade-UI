// vite.config.js
//
// TypeScript types are maintained by hand in src/arcade-ui.d.ts (runtime API) and
// src/arcade-ui-react.d.ts (React JSX DOM augmentation). Both are copied to dist/ via the
// build script. The Angular adapter compiles from angular/ into dist/angular (ng-packagr).
// vite-plugin-dts is intentionally NOT used: the library source is plain
// JavaScript, so there are no .ts files for the plugin to derive declarations from.
import { defineConfig } from 'vite'
import { resolve } from 'path'
import { fileURLToPath } from 'url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig({
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: 'ArcadeUI',
      formats: ['es', 'cjs'],
      fileName: (format) => `arcade-ui.${format}.js`
    },
    rollupOptions: {
      external: ['howler'],
      output: {
        globals: {
          howler: 'Howler'
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.names?.[0] === 'style.css') return 'arcade-ui.css'
          return assetInfo.names?.[0] ?? 'asset.[ext]'
        }
      }
    }
  }
})
