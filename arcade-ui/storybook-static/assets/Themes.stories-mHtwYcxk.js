import{n as e}from"./chunk-DnJy8xQt.js";function t(...e){for(let t of e)if(t)for(let e of i)t.classList.remove(e)}function n(e){let n=document.documentElement,r=document.body;t(n,r),e&&(n.classList.add(e),r.classList.add(e))}function r(){return`
  <div class="arc-panel arc-panel-cyan">
    <div class="arc-panel-header">
      <span class="arc-glow-cyan arc-text-h3" style="margin:0;text-transform:uppercase;">THEME PREVIEW</span>
      <span class="arc-badge arc-badge-yellow">HUD</span>
    </div>
    <div class="arc-panel-body arc-text-body">
      Primary / muted / accent: racchiudono stati UI tipici dei cabinati.
    </div>
    <div class="arc-panel-footer" style="display:flex;flex-wrap:wrap;gap:8px;align-items:center;">
      <button type="button" class="arc-btn arc-btn-primary arc-btn-sm">OK</button>
      <button type="button" class="arc-btn arc-btn-ghost arc-btn-sm">CANCEL</button>
      <button type="button" class="arc-btn arc-btn-danger arc-btn-sm">DANGER</button>
      <span class="arc-badge arc-badge-green">+100</span>
      <span class="arc-badge arc-badge-red">LOW</span>
    </div>
  </div>`}var i,a,o,s,c,l,u,d,f,p;e((()=>{i=[`arc-theme-phosphor`,`arc-theme-amber-crt`,`arc-theme-magenta-wave`,`arc-theme-ice-blue`],a={title:`Tokens/Themes`,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:"Temi colore alternativi che sovrascrivono le variabili di `tokens/colors`. Importa un file da `themes/*` e applica la classe `.arc-theme-*` su `<html>`, `<body>` o un wrapper."}}}},o=`arc-theme-switcher-root`,s={name:`Live switcher`,render:()=>`
<div id="${o}" style="max-width:520px;">
  <p class="arc-text-caption" style="margin:0 0 12px;color:var(--arc-color-text-muted);">
    Tema applicato su <code style="font-family:var(--arc-font-mono)">&lt;html&gt;</code> e
    <code style="font-family:var(--arc-font-mono)">&lt;body&gt;</code> (classe rimossa = default neon).
  </p>
  <div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:20px;">
    <button type="button" class="arc-btn arc-btn-ghost arc-btn-sm" data-arc-theme="">Default</button>
    <button type="button" class="arc-btn arc-btn-primary arc-btn-sm" data-arc-theme="arc-theme-phosphor">Phosphor</button>
    <button type="button" class="arc-btn arc-btn-primary arc-btn-sm" data-arc-theme="arc-theme-amber-crt">Amber CRT</button>
    <button type="button" class="arc-btn arc-btn-primary arc-btn-sm" data-arc-theme="arc-theme-magenta-wave">Magenta</button>
    <button type="button" class="arc-btn arc-btn-primary arc-btn-sm" data-arc-theme="arc-theme-ice-blue">Ice blue</button>
  </div>
  ${r()}
</div>`,play:()=>{let e=document.getElementById(o);e&&e.querySelectorAll(`[data-arc-theme]`).forEach(e=>{e.addEventListener(`click`,()=>{n(e.getAttribute(`data-arc-theme`)||``)})})}},c={name:`Gallery (scoped)`,render:()=>{let e=(e,t)=>`
<div class="${e}" style="padding:16px;border:var(--arc-border-md) solid var(--arc-color-cyan);background:var(--arc-color-bg);min-width:0;">
  <p class="arc-text-caption" style="margin:0 0 8px;color:var(--arc-color-text-muted);">.${e}</p>
  <p class="arc-text-h3" style="margin:0 0 12px;color:var(--arc-color-cyan);text-transform:uppercase;">${t}</p>
  <button type="button" class="arc-btn arc-btn-primary arc-btn-sm">PLAY</button>
  <span class="arc-badge arc-badge-yellow" style="margin-left:8px;">PTS</span>
</div>`;return`
<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:16px;align-items:start;">
  ${e(`arc-theme-phosphor`,`Phosphor`)}
  ${e(`arc-theme-amber-crt`,`Amber`)}
  ${e(`arc-theme-magenta-wave`,`Magenta`)}
  ${e(`arc-theme-ice-blue`,`Ice`)}
</div>`}},l={name:`Phosphor green (full preview)`,render:()=>`<div class="arc-theme-phosphor">${r()}</div>`},u={name:`Amber CRT (full preview)`,render:()=>`<div class="arc-theme-amber-crt">${r()}</div>`},d={name:`Magenta wave (full preview)`,render:()=>`<div class="arc-theme-magenta-wave">${r()}</div>`},f={name:`Ice blue (full preview)`,render:()=>`<div class="arc-theme-ice-blue">${r()}</div>`},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Live switcher',
  render: () => \`
<div id="\${SWITCHER_ID}" style="max-width:520px;">
  <p class="arc-text-caption" style="margin:0 0 12px;color:var(--arc-color-text-muted);">
    Tema applicato su <code style="font-family:var(--arc-font-mono)">&lt;html&gt;</code> e
    <code style="font-family:var(--arc-font-mono)">&lt;body&gt;</code> (classe rimossa = default neon).
  </p>
  <div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:20px;">
    <button type="button" class="arc-btn arc-btn-ghost arc-btn-sm" data-arc-theme="">Default</button>
    <button type="button" class="arc-btn arc-btn-primary arc-btn-sm" data-arc-theme="arc-theme-phosphor">Phosphor</button>
    <button type="button" class="arc-btn arc-btn-primary arc-btn-sm" data-arc-theme="arc-theme-amber-crt">Amber CRT</button>
    <button type="button" class="arc-btn arc-btn-primary arc-btn-sm" data-arc-theme="arc-theme-magenta-wave">Magenta</button>
    <button type="button" class="arc-btn arc-btn-primary arc-btn-sm" data-arc-theme="arc-theme-ice-blue">Ice blue</button>
  </div>
  \${demoMarkup()}
</div>\`,
  play: () => {
    const root = document.getElementById(SWITCHER_ID);
    if (!root) return;
    root.querySelectorAll('[data-arc-theme]').forEach(btn => {
      btn.addEventListener('click', () => {
        applyThemeClass(btn.getAttribute('data-arc-theme') || '');
      });
    });
  }
}`,...s.parameters?.docs?.source},description:{story:`@type { import('@storybook/html').StoryObj }`,...s.parameters?.docs?.description}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Gallery (scoped)',
  render: () => {
    const block = (themeClass, title) => \`
<div class="\${themeClass}" style="padding:16px;border:var(--arc-border-md) solid var(--arc-color-cyan);background:var(--arc-color-bg);min-width:0;">
  <p class="arc-text-caption" style="margin:0 0 8px;color:var(--arc-color-text-muted);">.\${themeClass}</p>
  <p class="arc-text-h3" style="margin:0 0 12px;color:var(--arc-color-cyan);text-transform:uppercase;">\${title}</p>
  <button type="button" class="arc-btn arc-btn-primary arc-btn-sm">PLAY</button>
  <span class="arc-badge arc-badge-yellow" style="margin-left:8px;">PTS</span>
</div>\`;
    return \`
<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:16px;align-items:start;">
  \${block('arc-theme-phosphor', 'Phosphor')}
  \${block('arc-theme-amber-crt', 'Amber')}
  \${block('arc-theme-magenta-wave', 'Magenta')}
  \${block('arc-theme-ice-blue', 'Ice')}
</div>\`;
  }
}`,...c.parameters?.docs?.source},description:{story:`Quattro anteprime affiancate: ogni blocco imposta il tema solo su quel contenitore.`,...c.parameters?.docs?.description}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Phosphor green (full preview)',
  render: () => \`<div class="arc-theme-phosphor">\${demoMarkup()}</div>\`
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Amber CRT (full preview)',
  render: () => \`<div class="arc-theme-amber-crt">\${demoMarkup()}</div>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Magenta wave (full preview)',
  render: () => \`<div class="arc-theme-magenta-wave">\${demoMarkup()}</div>\`
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Ice blue (full preview)',
  render: () => \`<div class="arc-theme-ice-blue">\${demoMarkup()}</div>\`
}`,...f.parameters?.docs?.source}}},p=[`LiveSwitcher`,`Gallery`,`PhosphorGreen`,`AmberCrt`,`MagentaWave`,`IceBlue`]}))();export{u as AmberCrt,c as Gallery,f as IceBlue,s as LiveSwitcher,d as MagentaWave,l as PhosphorGreen,p as __namedExportsOrder,a as default};