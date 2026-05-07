/**
 * style-dictionary.config.js
 *
 * Reads src/tokens/tokens.json (DTCG format) and generates:
 *   src/tokens/colors.css         — color CSS custom properties
 *   src/tokens/spacing.css        — spacing / border / radius / breakpoint
 *   src/tokens/animation-vars.css — animation durations and easing
 *   src/tokens/typography-vars.css — font stacks and text scale
 *   src/tokens/tokens.flat.json   — flat JSON for non-CSS consumers
 *
 * Run: npm run build:tokens
 *
 * Value transforms are intentionally omitted so raw values from the JSON
 * pass through unchanged (no px→rem, no ms→s, no hex→rgb conversions).
 */

/** @type {import('style-dictionary').Config} */
export default {
  source: ['src/tokens/tokens.json'],

  platforms: {

    // ── Color CSS custom properties ─────────────────────────────────────────
    cssColors: {
      transforms: ['name/kebab'],
      prefix: 'arc',
      files: [{
        destination: 'src/tokens/colors.css',
        format: 'css/variables',
        filter: (token) => token.path[0] === 'color',
        options: { outputReferences: false },
      }],
    },

    // ── Spacing CSS custom properties ────────────────────────────────────────
    cssSpacing: {
      transforms: ['name/kebab'],
      prefix: 'arc',
      files: [{
        destination: 'src/tokens/spacing.css',
        format: 'css/variables',
        filter: (token) => ['space', 'bp', 'radius', 'border'].includes(token.path[0]),
        options: { outputReferences: false },
      }],
    },

    // ── Animation CSS custom properties ─────────────────────────────────────
    cssAnimation: {
      transforms: ['name/kebab'],
      prefix: 'arc',
      files: [{
        destination: 'src/tokens/animation-vars.css',
        format: 'css/variables',
        filter: (token) => ['anim', 'ease'].includes(token.path[0]),
        options: { outputReferences: false },
      }],
    },

    // ── Typography CSS custom properties ─────────────────────────────────────
    cssTypography: {
      transforms: ['name/kebab'],
      prefix: 'arc',
      files: [{
        destination: 'src/tokens/typography-vars.css',
        format: 'css/variables',
        filter: (token) => ['font', 'text'].includes(token.path[0]),
        options: { outputReferences: false },
      }],
    },

    // ── Flat JSON for non-CSS consumers ─────────────────────────────────────
    jsonFlat: {
      transforms: ['name/kebab'],
      prefix: 'arc',
      files: [{
        destination: 'src/tokens/tokens.flat.json',
        format: 'json/flat',
      }],
    },

  },
}
