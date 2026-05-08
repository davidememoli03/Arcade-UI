import cssnano from 'cssnano'

// Evita postcss-svgo sui data URL con `#id` (filtro --arc-static-noise-filter).
export default {
  plugins: [
    cssnano({
      preset: ['default', { svgo: false }],
    }),
  ],
}
