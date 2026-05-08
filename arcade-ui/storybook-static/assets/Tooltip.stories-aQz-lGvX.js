import{n as e}from"./chunk-DnJy8xQt.js";var t,n,r,i,a,o,s,c,l,u,d,f;e((()=>{t={title:`Components/Tooltip`,tags:[`autodocs`],parameters:{layout:`centered`,docs:{description:{component:"Tooltip CSS-only via attributo `data-tooltip`. Nessun JavaScript richiesto. Appare on hover e on `:focus-visible`. Posizioni disponibili: `top` (default), `bottom`, `left`, `right`. Aggiungere `aria-label` o `aria-describedby` per accessibilità screen-reader."}}}},n=e=>`<div style="padding:80px;display:flex;align-items:center;justify-content:center">${e}</div>`,r={name:`Position: top (default)`,render:()=>n(`
<button class="arc-btn arc-btn-primary"
        data-tooltip="Tooltip above"
        aria-label="Confirm — Tooltip above">
  HOVER ME
</button>`)},i={name:`Position: bottom`,render:()=>n(`
<button class="arc-btn arc-btn-primary arc-tooltip-bottom"
        data-tooltip="Tooltip below"
        aria-label="Confirm — Tooltip below">
  HOVER ME
</button>`)},a={name:`Position: left`,render:()=>n(`
<button class="arc-btn arc-btn-primary arc-tooltip-left"
        data-tooltip="Tooltip on the left"
        aria-label="Confirm — Tooltip on the left">
  HOVER ME
</button>`)},o={name:`Position: right`,render:()=>n(`
<button class="arc-btn arc-btn-primary arc-tooltip-right"
        data-tooltip="Tooltip on the right"
        aria-label="Confirm — Tooltip on the right">
  HOVER ME
</button>`)},s={name:`On a link`,render:()=>n(`
<a href="#" class="arc-tooltip-bottom"
   data-tooltip="Opens settings"
   style="font-family:var(--arc-font-pixel);font-size:12px;color:var(--arc-color-cyan)">
  SETTINGS
</a>`)},c={name:`On a badge`,render:()=>n(`
<span class="arc-badge arc-badge-red arc-badge-pulse"
      data-tooltip="3 unread alerts"
      tabindex="0"
      aria-label="3 unread alerts">
  ALERT ×3
</span>`)},l={name:`On an input field`,render:()=>n(`
<div class="arc-input-wrapper arc-tooltip-bottom"
     data-tooltip="Max 12 characters, alphanumeric"
     style="width:240px">
  <label class="arc-label">PLAYER NAME</label>
  <input class="arc-input" placeholder="AAA" maxlength="12">
</div>`)},u={name:`All positions at a glance`,render:()=>`
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
</div>`},d={name:`In a panel (context)`,render:()=>`
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
</div>`},r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Position: top (default)',
  render: () => wrap(\`
<button class="arc-btn arc-btn-primary"
        data-tooltip="Tooltip above"
        aria-label="Confirm — Tooltip above">
  HOVER ME
</button>\`)
}`,...r.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Position: bottom',
  render: () => wrap(\`
<button class="arc-btn arc-btn-primary arc-tooltip-bottom"
        data-tooltip="Tooltip below"
        aria-label="Confirm — Tooltip below">
  HOVER ME
</button>\`)
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Position: left',
  render: () => wrap(\`
<button class="arc-btn arc-btn-primary arc-tooltip-left"
        data-tooltip="Tooltip on the left"
        aria-label="Confirm — Tooltip on the left">
  HOVER ME
</button>\`)
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Position: right',
  render: () => wrap(\`
<button class="arc-btn arc-btn-primary arc-tooltip-right"
        data-tooltip="Tooltip on the right"
        aria-label="Confirm — Tooltip on the right">
  HOVER ME
</button>\`)
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'On a link',
  render: () => wrap(\`
<a href="#" class="arc-tooltip-bottom"
   data-tooltip="Opens settings"
   style="font-family:var(--arc-font-pixel);font-size:12px;color:var(--arc-color-cyan)">
  SETTINGS
</a>\`)
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'On a badge',
  render: () => wrap(\`
<span class="arc-badge arc-badge-red arc-badge-pulse"
      data-tooltip="3 unread alerts"
      tabindex="0"
      aria-label="3 unread alerts">
  ALERT ×3
</span>\`)
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'On an input field',
  render: () => wrap(\`
<div class="arc-input-wrapper arc-tooltip-bottom"
     data-tooltip="Max 12 characters, alphanumeric"
     style="width:240px">
  <label class="arc-label">PLAYER NAME</label>
  <input class="arc-input" placeholder="AAA" maxlength="12">
</div>\`)
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'All positions at a glance',
  render: () => \`
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
</div>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'In a panel (context)',
  render: () => \`
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
</div>\`
}`,...d.parameters?.docs?.source}}},f=[`Top`,`Bottom`,`Left`,`Right`,`OnLink`,`OnBadge`,`OnInput`,`AllPositions`,`InPanel`]}))();export{u as AllPositions,i as Bottom,d as InPanel,a as Left,c as OnBadge,l as OnInput,s as OnLink,o as Right,r as Top,f as __namedExportsOrder,t as default};