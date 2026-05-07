export default {
  title: 'Components/Tooltip',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Tooltip CSS-only via attributo `data-tooltip`. ' +
          'Nessun JavaScript richiesto. ' +
          'Appare on hover e on `:focus-visible`. ' +
          'Posizioni disponibili: `top` (default), `bottom`, `left`, `right`. ' +
          'Aggiungere `aria-label` o `aria-describedby` per accessibilità screen-reader.',
      },
    },
  },
}

// ─── Helper ───────────────────────────────────────────────────────────────────

const wrap = (inner) =>
  `<div style="padding:80px;display:flex;align-items:center;justify-content:center">${inner}</div>`

// ─── Position stories ─────────────────────────────────────────────────────────

export const Top = {
  name: 'Position: top (default)',
  render: () => wrap(`
<button class="arc-btn arc-btn-primary"
        data-tooltip="Tooltip above"
        aria-label="Confirm — Tooltip above">
  HOVER ME
</button>`),
}

export const Bottom = {
  name: 'Position: bottom',
  render: () => wrap(`
<button class="arc-btn arc-btn-primary arc-tooltip-bottom"
        data-tooltip="Tooltip below"
        aria-label="Confirm — Tooltip below">
  HOVER ME
</button>`),
}

export const Left = {
  name: 'Position: left',
  render: () => wrap(`
<button class="arc-btn arc-btn-primary arc-tooltip-left"
        data-tooltip="Tooltip on the left"
        aria-label="Confirm — Tooltip on the left">
  HOVER ME
</button>`),
}

export const Right = {
  name: 'Position: right',
  render: () => wrap(`
<button class="arc-btn arc-btn-primary arc-tooltip-right"
        data-tooltip="Tooltip on the right"
        aria-label="Confirm — Tooltip on the right">
  HOVER ME
</button>`),
}

// ─── Host variety ─────────────────────────────────────────────────────────────

export const OnLink = {
  name: 'On a link',
  render: () => wrap(`
<a href="#" class="arc-tooltip-bottom"
   data-tooltip="Opens settings"
   style="font-family:var(--arc-font-pixel);font-size:12px;color:var(--arc-color-cyan)">
  SETTINGS
</a>`),
}

export const OnBadge = {
  name: 'On a badge',
  render: () => wrap(`
<span class="arc-badge arc-badge-red arc-badge-pulse"
      data-tooltip="3 unread alerts"
      tabindex="0"
      aria-label="3 unread alerts">
  ALERT ×3
</span>`),
}

export const OnInput = {
  name: 'On an input field',
  render: () => wrap(`
<div class="arc-input-wrapper arc-tooltip-bottom"
     data-tooltip="Max 12 characters, alphanumeric"
     style="width:240px">
  <label class="arc-label">PLAYER NAME</label>
  <input class="arc-input" placeholder="AAA" maxlength="12">
</div>`),
}

// ─── All positions at a glance ────────────────────────────────────────────────

export const AllPositions = {
  name: 'All positions at a glance',
  render: () => `
<div style="display:grid;grid-template-columns:1fr 1fr;gap:80px;padding:100px;align-items:center;justify-items:center">
  <button class="arc-btn arc-btn-primary"
          data-tooltip="Top (default)"
          aria-label="Top tooltip">
    TOP
  </button>

  <button class="arc-btn arc-btn-primary arc-tooltip-bottom"
          data-tooltip="Bottom"
          aria-label="Bottom tooltip">
    BOTTOM
  </button>

  <button class="arc-btn arc-btn-primary arc-tooltip-left"
          data-tooltip="Left"
          aria-label="Left tooltip">
    LEFT
  </button>

  <button class="arc-btn arc-btn-primary arc-tooltip-right"
          data-tooltip="Right"
          aria-label="Right tooltip">
    RIGHT
  </button>
</div>`,
}

// ─── In-context (inside a panel) ──────────────────────────────────────────────

export const InPanel = {
  name: 'In a panel (context)',
  render: () => `
<div class="arc-panel arc-panel-cyan" style="padding:24px;max-width:360px">
  <div class="arc-panel-header">PLAYER CONFIG</div>
  <div class="arc-panel-body" style="display:flex;flex-direction:column;gap:16px">

    <div class="arc-input-wrapper">
      <label class="arc-label">USERNAME</label>
      <input class="arc-input" value="PLAYER_01">
    </div>

    <div style="display:flex;gap:12px">
      <button class="arc-btn arc-btn-primary"
              data-tooltip="Save changes"
              aria-label="Save — Save changes">
        SAVE
      </button>
      <button class="arc-btn arc-btn-ghost arc-tooltip-right"
              data-tooltip="Discard and go back"
              aria-label="Cancel — Discard and go back">
        CANCEL
      </button>
    </div>
  </div>
</div>`,
}
