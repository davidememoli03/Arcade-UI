import{n as e}from"./chunk-DnJy8xQt.js";function t({label:e,checked:t,disabled:n,labelLeft:r}){return`
    <label class="${[`arc-toggle`,r?`arc-toggle-label-left`:``].filter(Boolean).join(` `)}">
      <input type="checkbox" class="arc-toggle-input" ${t?`checked`:``} ${n?`disabled`:``}>
      <span class="arc-toggle-switch" aria-hidden="true"></span>
      <span class="arc-toggle-label">${e}</span>
    </label>
  `}var n,r,i,a,o,s,c,l,u,d,f;e((()=>{n={title:`Components/Toggle`,argTypes:{label:{control:`text`},checked:{control:`boolean`},disabled:{control:`boolean`},labelLeft:{control:`boolean`,name:`label left`}},args:{label:`SOUND FX`,checked:!1,disabled:!1,labelLeft:!1},parameters:{docs:{description:{component:`@type { import('@storybook/html').Meta }`}}}},r={render:t},i={args:{checked:!0,label:`MUSIC`},render:t},a={args:{checked:!1,label:`MUSIC`},render:t},o={name:`Label Left`,args:{checked:!0,label:`SCREEN FX`,labelLeft:!0},render:t},s={args:{checked:!1,disabled:!0,label:`LOCKED`},render:t},c={name:`Disabled (On)`,args:{checked:!0,disabled:!0,label:`LOCKED`},render:t},l={name:`Static Classes (arc-toggle-on / arc-toggle-off)`,render:()=>`
    <div style="display:flex;flex-direction:column;gap:20px;padding:2rem;">
      <p style="font-family:var(--arc-font-pixel);font-size:10px;color:var(--arc-color-text-muted);margin:0 0 8px;">
        Stato controllato via classe CSS (nessun input nativo)
      </p>

      <!-- .arc-toggle-on -->
      <label class="arc-toggle arc-toggle-on">
        <input type="checkbox" class="arc-toggle-input">
        <span class="arc-toggle-switch" aria-hidden="true"></span>
        <span class="arc-toggle-label">NEON ON</span>
      </label>

      <!-- .arc-toggle-off con input checked -->
      <label class="arc-toggle arc-toggle-off">
        <input type="checkbox" class="arc-toggle-input" checked>
        <span class="arc-toggle-switch" aria-hidden="true"></span>
        <span class="arc-toggle-label">FORCED OFF</span>
      </label>
    </div>
  `},u={name:`All States`,render:()=>`
    <div style="display:flex;flex-direction:column;gap:24px;padding:2rem;">

      <label class="arc-toggle">
        <input type="checkbox" class="arc-toggle-input">
        <span class="arc-toggle-switch" aria-hidden="true"></span>
        <span class="arc-toggle-label">OFF (default)</span>
      </label>

      <label class="arc-toggle">
        <input type="checkbox" class="arc-toggle-input" checked>
        <span class="arc-toggle-switch" aria-hidden="true"></span>
        <span class="arc-toggle-label">ON (checked)</span>
      </label>

      <label class="arc-toggle arc-toggle-label-left">
        <input type="checkbox" class="arc-toggle-input" checked>
        <span class="arc-toggle-switch" aria-hidden="true"></span>
        <span class="arc-toggle-label">LABEL LEFT</span>
      </label>

      <label class="arc-toggle">
        <input type="checkbox" class="arc-toggle-input" disabled>
        <span class="arc-toggle-switch" aria-hidden="true"></span>
        <span class="arc-toggle-label">DISABLED OFF</span>
      </label>

      <label class="arc-toggle">
        <input type="checkbox" class="arc-toggle-input" checked disabled>
        <span class="arc-toggle-switch" aria-hidden="true"></span>
        <span class="arc-toggle-label">DISABLED ON</span>
      </label>

    </div>
  `},d={name:`Form Example`,render:()=>`
    <div style="padding:2rem;">
      <div class="arc-panel arc-panel-cyan" style="max-width:320px;">
        <p class="arc-panel-title" style="font-size:12px;margin-bottom:1.5rem;">OPTIONS</p>
        <div style="display:flex;flex-direction:column;gap:16px;">

          <label class="arc-toggle arc-toggle-label-left" style="justify-content:space-between;">
            <input type="checkbox" class="arc-toggle-input" checked>
            <span class="arc-toggle-switch" aria-hidden="true"></span>
            <span class="arc-toggle-label">MUSIC</span>
          </label>

          <label class="arc-toggle arc-toggle-label-left" style="justify-content:space-between;">
            <input type="checkbox" class="arc-toggle-input" checked>
            <span class="arc-toggle-switch" aria-hidden="true"></span>
            <span class="arc-toggle-label">SFX</span>
          </label>

          <label class="arc-toggle arc-toggle-label-left" style="justify-content:space-between;">
            <input type="checkbox" class="arc-toggle-input">
            <span class="arc-toggle-switch" aria-hidden="true"></span>
            <span class="arc-toggle-label">SCANLINES</span>
          </label>

          <label class="arc-toggle arc-toggle-label-left" style="justify-content:space-between;">
            <input type="checkbox" class="arc-toggle-input" disabled>
            <span class="arc-toggle-switch" aria-hidden="true"></span>
            <span class="arc-toggle-label">ONLINE</span>
          </label>

        </div>
      </div>
    </div>
  `},r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: renderToggle
}`,...r.parameters?.docs?.source},description:{story:`@type { import('@storybook/html').StoryObj }`,...r.parameters?.docs?.description}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    checked: true,
    label: 'MUSIC'
  },
  render: renderToggle
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    checked: false,
    label: 'MUSIC'
  },
  render: renderToggle
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Label Left',
  args: {
    checked: true,
    label: 'SCREEN FX',
    labelLeft: true
  },
  render: renderToggle
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: true,
    label: 'LOCKED'
  },
  render: renderToggle
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Disabled (On)',
  args: {
    checked: true,
    disabled: true,
    label: 'LOCKED'
  },
  render: renderToggle
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Static Classes (arc-toggle-on / arc-toggle-off)',
  render: () => \`
    <div style="display:flex;flex-direction:column;gap:20px;padding:2rem;">
      <p style="font-family:var(--arc-font-pixel);font-size:10px;color:var(--arc-color-text-muted);margin:0 0 8px;">
        Stato controllato via classe CSS (nessun input nativo)
      </p>

      <!-- .arc-toggle-on -->
      <label class="arc-toggle arc-toggle-on">
        <input type="checkbox" class="arc-toggle-input">
        <span class="arc-toggle-switch" aria-hidden="true"></span>
        <span class="arc-toggle-label">NEON ON</span>
      </label>

      <!-- .arc-toggle-off con input checked -->
      <label class="arc-toggle arc-toggle-off">
        <input type="checkbox" class="arc-toggle-input" checked>
        <span class="arc-toggle-switch" aria-hidden="true"></span>
        <span class="arc-toggle-label">FORCED OFF</span>
      </label>
    </div>
  \`
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'All States',
  render: () => \`
    <div style="display:flex;flex-direction:column;gap:24px;padding:2rem;">

      <label class="arc-toggle">
        <input type="checkbox" class="arc-toggle-input">
        <span class="arc-toggle-switch" aria-hidden="true"></span>
        <span class="arc-toggle-label">OFF (default)</span>
      </label>

      <label class="arc-toggle">
        <input type="checkbox" class="arc-toggle-input" checked>
        <span class="arc-toggle-switch" aria-hidden="true"></span>
        <span class="arc-toggle-label">ON (checked)</span>
      </label>

      <label class="arc-toggle arc-toggle-label-left">
        <input type="checkbox" class="arc-toggle-input" checked>
        <span class="arc-toggle-switch" aria-hidden="true"></span>
        <span class="arc-toggle-label">LABEL LEFT</span>
      </label>

      <label class="arc-toggle">
        <input type="checkbox" class="arc-toggle-input" disabled>
        <span class="arc-toggle-switch" aria-hidden="true"></span>
        <span class="arc-toggle-label">DISABLED OFF</span>
      </label>

      <label class="arc-toggle">
        <input type="checkbox" class="arc-toggle-input" checked disabled>
        <span class="arc-toggle-switch" aria-hidden="true"></span>
        <span class="arc-toggle-label">DISABLED ON</span>
      </label>

    </div>
  \`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Form Example',
  render: () => \`
    <div style="padding:2rem;">
      <div class="arc-panel arc-panel-cyan" style="max-width:320px;">
        <p class="arc-panel-title" style="font-size:12px;margin-bottom:1.5rem;">OPTIONS</p>
        <div style="display:flex;flex-direction:column;gap:16px;">

          <label class="arc-toggle arc-toggle-label-left" style="justify-content:space-between;">
            <input type="checkbox" class="arc-toggle-input" checked>
            <span class="arc-toggle-switch" aria-hidden="true"></span>
            <span class="arc-toggle-label">MUSIC</span>
          </label>

          <label class="arc-toggle arc-toggle-label-left" style="justify-content:space-between;">
            <input type="checkbox" class="arc-toggle-input" checked>
            <span class="arc-toggle-switch" aria-hidden="true"></span>
            <span class="arc-toggle-label">SFX</span>
          </label>

          <label class="arc-toggle arc-toggle-label-left" style="justify-content:space-between;">
            <input type="checkbox" class="arc-toggle-input">
            <span class="arc-toggle-switch" aria-hidden="true"></span>
            <span class="arc-toggle-label">SCANLINES</span>
          </label>

          <label class="arc-toggle arc-toggle-label-left" style="justify-content:space-between;">
            <input type="checkbox" class="arc-toggle-input" disabled>
            <span class="arc-toggle-switch" aria-hidden="true"></span>
            <span class="arc-toggle-label">ONLINE</span>
          </label>

        </div>
      </div>
    </div>
  \`
}`,...d.parameters?.docs?.source}}},f=[`Default`,`On`,`Off`,`LabelLeft`,`Disabled`,`DisabledOn`,`StaticClasses`,`AllStates`,`FormExample`]}))();export{u as AllStates,r as Default,s as Disabled,c as DisabledOn,d as FormExample,o as LabelLeft,a as Off,i as On,l as StaticClasses,f as __namedExportsOrder,n as default};