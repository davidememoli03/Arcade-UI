// vite.config.js
import { defineConfig } from 'vite'
import { resolve } from 'path'
import { fileURLToPath } from 'url'
import dts from 'vite-plugin-dts'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig({
  plugins: [dts()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: 'ArcadeUI',
      formats: ['es', 'cjs'],
      fileName: (format) => `arcade-ui.${format}.js`
    },
    rollupOptions: {
      external: ['howler'],
      output: {
        globals: { howler: 'Howler' },
        assetFileNames: (assetInfo) => {
          if (assetInfo.names?.[0] === 'style.css') return 'arcade-ui.css'
          return assetInfo.names?.[0] ?? 'asset.[ext]'
        }
      }
    }
  },
  test: {
    environment: 'node',
    include: ['src/**/*.{test,spec}.{js,ts}']
  }
})
