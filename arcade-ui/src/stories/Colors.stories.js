// src/stories/Colors.stories.js
// Carica i token da src/tokens/tokens.json (source of truth) per mostrare
// la palette neon dinamicamente senza duplicare valori nel codice.

import tokensRaw from '../tokens/tokens.json'

/** @type { import('@storybook/html').Meta } */
export default {
  title: 'Tokens/Colors',
  parameters: {
    docs: {
      description: {
        component:
          'Palette neon del design system Arcade-UI. ' +
          'I valori provengono direttamente da `src/tokens/tokens.json` — la source of truth. ' +
          'Modificare il JSON e rieseguire `npm run build:tokens` per rigenerare le CSS custom properties.',
      },
    },
  },
}

// ─── Legge i token colore direttamente dal JSON sorgente ──────────────────────

const colorTokens = Object.entries(tokensRaw.color)
  .filter(([, v]) => v.$value)
  .map(([key, meta]) => ({
    name:  `--arc-color-${key}`,
    value: meta.$value,
    desc:  meta.$description ?? '',
    group: key.includes('glow')
      ? 'Glow'
      : key.startsWith('bg')
        ? 'Sfondi'
        : key.startsWith('text') || key === 'disabled'
          ? 'Testo / Stato'
          : 'Neon',
  }))

// ─── Helpers UI ───────────────────────────────────────────────────────────────

function swatchCard(token) {
  const isGlow  = token.group === 'Glow'
  const isText  = token.group === 'Testo / Stato'
  const preview = isGlow
    ? `background:${token.value};box-shadow:0 0 20px ${token.value}`
    : `background:${token.value}`

  return `
  <div style="
    display:flex;align-items:center;gap:14px;padding:10px 0;
    border-bottom:1px solid #0a0020;
  ">
    <div style="
      width:48px;height:48px;flex-shrink:0;
      ${preview};
      border:1px solid #1a1a3a;
    "></div>
    <div style="flex:1;min-width:0;">
      <div style="
        font-family:'Courier New',monospace;font-size:12px;
        color:#00f5ff;letter-spacing:.04em;
      ">${token.name}</div>
      <div style="
        font-family:'Courier New',monospace;font-size:11px;
        color:#007777;margin-top:2px;
      ">${token.value}${token.desc ? ' · ' + token.desc : ''}</div>
    </div>
    <span style="
      font-family:'Courier New',monospace;font-size:10px;
      color:#334455;padding:2px 6px;border:1px solid #1a1a3a;
    ">${token.group}</span>
  </div>`
}

function groupSection(groupName, tokens) {
  return `
  <div style="margin-bottom:24px">
    <h3 style="
      font-family:'Courier New',monospace;font-size:11px;
      color:#ffd700;letter-spacing:.12em;text-transform:uppercase;
      margin:0 0 4px;padding:0;
    ">${groupName}</h3>
    ${tokens.map(swatchCard).join('')}
  </div>`
}

// ─── Stories ──────────────────────────────────────────────────────────────────

/** @type { import('@storybook/html').StoryObj } */
export const Palette = {
  name: 'Full Palette',
  render: () => {
    const groups = {}
    for (const t of colorTokens) {
      ;(groups[t.group] ??= []).push(t)
    }
    return `
    <div style="
      max-width:640px;padding:24px;
      background:#000;color:#00f5ff;
    ">
      <h2 style="
        font-family:'Courier New',monospace;font-size:13px;
        color:#00f5ff;letter-spacing:.1em;text-transform:uppercase;
        margin:0 0 20px;padding-bottom:8px;border-bottom:1px solid #00f5ff;
      ">
        COLOR TOKENS — ${colorTokens.length} tokens from tokens.json
      </h2>
      ${Object.entries(groups).map(([g, tks]) => groupSection(g, tks)).join('')}
    </div>`
  },
}

/** @type { import('@storybook/html').StoryObj } */
export const NeonOnly = {
  name: 'Neon colours',
  render: () => `
  <div style="
    display:flex;flex-wrap:wrap;gap:16px;padding:24px;background:#000;
  ">
    ${colorTokens
      .filter(t => t.group === 'Neon')
      .map(t => `
      <div style="
        display:flex;flex-direction:column;align-items:center;gap:8px;
        font-family:'Courier New',monospace;font-size:10px;text-align:center;
      ">
        <div style="
          width:72px;height:72px;
          background:${t.value};
          box-shadow:0 0 16px ${t.value}, 0 0 32px ${t.value}40;
        "></div>
        <span style="color:#00f5ff;">${t.name.replace('--arc-color-', '')}</span>
        <span style="color:#334455;">${t.value}</span>
      </div>`)
      .join('')}
  </div>`,
}
