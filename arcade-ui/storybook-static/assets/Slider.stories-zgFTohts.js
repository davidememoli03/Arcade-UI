import{n as e}from"./chunk-DnJy8xQt.js";function t(e){return e===`default`?``:`arc-slider-${e}`}function n(e,t,n){return`${(e-t)/(n-t)*100}%`}function r({label:e,min:r,max:a,value:o,variant:s,disabled:c,showTicks:l}){let u=t(s),d=[`arc-slider`,u].filter(Boolean).join(` `),f=c?`disabled`:``,p=n(o,r,a),m=`slider-display-${Math.random().toString(36).slice(2,7)}`;return`
    <div class="arc-slider-wrapper ${u}" style="max-width:360px;">
      <div class="arc-slider-header">
        <span class="arc-slider-label">${e}</span>
        <span class="arc-slider-display" id="${m}">${o}</span>
      </div>
      <input
        type="range"
        class="${d}"
        min="${r}" max="${a}" value="${o}"
        ${f}
        style="--arc-slider-value: ${p}"
        data-arc-slider-display="${m}"
        oninput="${i}">
      ${l?`<div class="arc-slider-ticks" aria-hidden="true">
         <span>${r}</span>
         <span>${Math.round((r+a)/4)}</span>
         <span>${Math.round((r+a)/2)}</span>
         <span>${Math.round((r+a)*3/4)}</span>
         <span>${a}</span>
       </div>`:``}
    </div>
  `}var i,a,o,s,c,l,u,d,f,p,m;e((()=>{i=`
  this.style.setProperty(
    '--arc-slider-value',
    ((this.value - this.min) / (this.max - this.min) * 100) + '%'
  );
  var d = document.getElementById(this.dataset.arcSliderDisplay);
  if (d) d.textContent = this.value;
`.replace(/\s+/g,` `).trim(),a={title:`Components/Slider`,argTypes:{label:{control:`text`},min:{control:{type:`number`}},max:{control:{type:`number`}},value:{control:{type:`number`}},variant:{control:{type:`select`},options:[`default`,`danger`,`success`,`yellow`,`purple`]},disabled:{control:`boolean`},showTicks:{control:`boolean`,name:`show ticks`}},args:{label:`VOLUME`,min:0,max:100,value:75,variant:`default`,disabled:!1,showTicks:!1},parameters:{docs:{description:{component:`@type { import('@storybook/html').Meta }`}}}},o={render:r},s={args:{label:`DIFFICULTY`,value:80,variant:`danger`},render:r},c={args:{label:`HEALTH`,value:45,variant:`success`},render:r},l={args:{label:`COINS`,value:60,variant:`yellow`},render:r},u={name:`With Tick Marks`,args:{label:`BRIGHTNESS`,value:50,showTicks:!0},render:r},d={args:{label:`LOCKED`,value:30,disabled:!0},render:r},f={name:`Volume Panel Demo`,render:()=>`
    <div style="padding: 2rem;">
      <div class="arc-panel arc-panel-cyan" style="max-width: 380px;">
        <p class="arc-panel-title" style="font-size: 12px; margin-bottom: 1.5rem;">AUDIO SETTINGS</p>

        <div style="display: flex; flex-direction: column; gap: 24px;">

          <!-- Master volume -->
          <div class="arc-slider-wrapper" id="wrapper-master">
            <div class="arc-slider-header">
              <span class="arc-slider-label">MASTER</span>
              <span class="arc-slider-display" id="val-master">80</span>
            </div>
            <input type="range" class="arc-slider" min="0" max="100" value="80"
                   style="--arc-slider-value: 80%"
                   data-arc-slider-display="val-master"
                   oninput="${i}">
            <div class="arc-slider-ticks" aria-hidden="true">
              <span>0</span><span>25</span><span>50</span><span>75</span><span>100</span>
            </div>
          </div>

          <!-- Music volume (danger) -->
          <div class="arc-slider-wrapper arc-slider-success">
            <div class="arc-slider-header">
              <span class="arc-slider-label">MUSIC</span>
              <span class="arc-slider-display" id="val-music">60</span>
            </div>
            <input type="range" class="arc-slider arc-slider-success" min="0" max="100" value="60"
                   style="--arc-slider-value: 60%"
                   data-arc-slider-display="val-music"
                   oninput="${i}">
          </div>

          <!-- SFX volume (yellow) -->
          <div class="arc-slider-wrapper arc-slider-yellow">
            <div class="arc-slider-header">
              <span class="arc-slider-label">SFX</span>
              <span class="arc-slider-display" id="val-sfx">90</span>
            </div>
            <input type="range" class="arc-slider arc-slider-yellow" min="0" max="100" value="90"
                   style="--arc-slider-value: 90%"
                   data-arc-slider-display="val-sfx"
                   oninput="${i}">
          </div>

          <!-- Difficulty (danger) -->
          <div class="arc-slider-wrapper arc-slider-danger">
            <div class="arc-slider-header">
              <span class="arc-slider-label">DIFFICULTY</span>
              <span class="arc-slider-display" id="val-diff">3</span>
            </div>
            <input type="range" class="arc-slider arc-slider-danger" min="1" max="5" value="3"
                   style="--arc-slider-value: 50%"
                   data-arc-slider-display="val-diff"
                   oninput="${i}">
            <div class="arc-slider-ticks" aria-hidden="true">
              <span>EASY</span><span>NORMAL</span><span>HARD</span><span>INSANE</span><span>HELL</span>
            </div>
          </div>

          <!-- Disabled -->
          <div class="arc-slider-wrapper">
            <div class="arc-slider-header">
              <span class="arc-slider-label">ONLINE (LOCKED)</span>
              <span class="arc-slider-display">50</span>
            </div>
            <input type="range" class="arc-slider" min="0" max="100" value="50"
                   style="--arc-slider-value: 50%" disabled>
          </div>

        </div>
      </div>
    </div>
  `},p={name:`All Variants`,render:()=>`<div style="padding:2rem;display:flex;flex-direction:column;gap:24px;max-width:400px;">${[{label:`CYAN (default)`,cls:``,value:70},{label:`DANGER (red)`,cls:`arc-slider-danger`,value:85},{label:`SUCCESS (green)`,cls:`arc-slider-success`,value:40},{label:`YELLOW`,cls:`arc-slider-yellow`,value:55},{label:`PURPLE`,cls:`arc-slider-purple`,value:65}].map(({label:e,cls:t,value:n})=>{let r=`av-${e.replace(/\s/g,``).toLowerCase()}`;return`
        <div class="arc-slider-wrapper ${t}">
          <div class="arc-slider-header">
            <span class="arc-slider-label">${e}</span>
            <span class="arc-slider-display" id="${r}">${n}</span>
          </div>
          <input type="range" class="arc-slider ${t}" min="0" max="100" value="${n}"
                 style="--arc-slider-value: ${`${n}%`}"
                 data-arc-slider-display="${r}"
                 oninput="${i}">
        </div>
      `}).join(``)}</div>`},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: renderFull
}`,...o.parameters?.docs?.source},description:{story:`@type { import('@storybook/html').StoryObj }`,...o.parameters?.docs?.description}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'DIFFICULTY',
    value: 80,
    variant: 'danger'
  },
  render: renderFull
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'HEALTH',
    value: 45,
    variant: 'success'
  },
  render: renderFull
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'COINS',
    value: 60,
    variant: 'yellow'
  },
  render: renderFull
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'With Tick Marks',
  args: {
    label: 'BRIGHTNESS',
    value: 50,
    showTicks: true
  },
  render: renderFull
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'LOCKED',
    value: 30,
    disabled: true
  },
  render: renderFull
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Volume Panel Demo',
  render: () => \`
    <div style="padding: 2rem;">
      <div class="arc-panel arc-panel-cyan" style="max-width: 380px;">
        <p class="arc-panel-title" style="font-size: 12px; margin-bottom: 1.5rem;">AUDIO SETTINGS</p>

        <div style="display: flex; flex-direction: column; gap: 24px;">

          <!-- Master volume -->
          <div class="arc-slider-wrapper" id="wrapper-master">
            <div class="arc-slider-header">
              <span class="arc-slider-label">MASTER</span>
              <span class="arc-slider-display" id="val-master">80</span>
            </div>
            <input type="range" class="arc-slider" min="0" max="100" value="80"
                   style="--arc-slider-value: 80%"
                   data-arc-slider-display="val-master"
                   oninput="\${FILL_HANDLER}">
            <div class="arc-slider-ticks" aria-hidden="true">
              <span>0</span><span>25</span><span>50</span><span>75</span><span>100</span>
            </div>
          </div>

          <!-- Music volume (danger) -->
          <div class="arc-slider-wrapper arc-slider-success">
            <div class="arc-slider-header">
              <span class="arc-slider-label">MUSIC</span>
              <span class="arc-slider-display" id="val-music">60</span>
            </div>
            <input type="range" class="arc-slider arc-slider-success" min="0" max="100" value="60"
                   style="--arc-slider-value: 60%"
                   data-arc-slider-display="val-music"
                   oninput="\${FILL_HANDLER}">
          </div>

          <!-- SFX volume (yellow) -->
          <div class="arc-slider-wrapper arc-slider-yellow">
            <div class="arc-slider-header">
              <span class="arc-slider-label">SFX</span>
              <span class="arc-slider-display" id="val-sfx">90</span>
            </div>
            <input type="range" class="arc-slider arc-slider-yellow" min="0" max="100" value="90"
                   style="--arc-slider-value: 90%"
                   data-arc-slider-display="val-sfx"
                   oninput="\${FILL_HANDLER}">
          </div>

          <!-- Difficulty (danger) -->
          <div class="arc-slider-wrapper arc-slider-danger">
            <div class="arc-slider-header">
              <span class="arc-slider-label">DIFFICULTY</span>
              <span class="arc-slider-display" id="val-diff">3</span>
            </div>
            <input type="range" class="arc-slider arc-slider-danger" min="1" max="5" value="3"
                   style="--arc-slider-value: 50%"
                   data-arc-slider-display="val-diff"
                   oninput="\${FILL_HANDLER}">
            <div class="arc-slider-ticks" aria-hidden="true">
              <span>EASY</span><span>NORMAL</span><span>HARD</span><span>INSANE</span><span>HELL</span>
            </div>
          </div>

          <!-- Disabled -->
          <div class="arc-slider-wrapper">
            <div class="arc-slider-header">
              <span class="arc-slider-label">ONLINE (LOCKED)</span>
              <span class="arc-slider-display">50</span>
            </div>
            <input type="range" class="arc-slider" min="0" max="100" value="50"
                   style="--arc-slider-value: 50%" disabled>
          </div>

        </div>
      </div>
    </div>
  \`
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'All Variants',
  render: () => {
    const variants = [{
      label: 'CYAN (default)',
      cls: '',
      value: 70
    }, {
      label: 'DANGER (red)',
      cls: 'arc-slider-danger',
      value: 85
    }, {
      label: 'SUCCESS (green)',
      cls: 'arc-slider-success',
      value: 40
    }, {
      label: 'YELLOW',
      cls: 'arc-slider-yellow',
      value: 55
    }, {
      label: 'PURPLE',
      cls: 'arc-slider-purple',
      value: 65
    }];
    const rows = variants.map(({
      label,
      cls,
      value
    }) => {
      const id = \`av-\${label.replace(/\\s/g, '').toLowerCase()}\`;
      const fill = \`\${value}%\`;
      return \`
        <div class="arc-slider-wrapper \${cls}">
          <div class="arc-slider-header">
            <span class="arc-slider-label">\${label}</span>
            <span class="arc-slider-display" id="\${id}">\${value}</span>
          </div>
          <input type="range" class="arc-slider \${cls}" min="0" max="100" value="\${value}"
                 style="--arc-slider-value: \${fill}"
                 data-arc-slider-display="\${id}"
                 oninput="\${FILL_HANDLER}">
        </div>
      \`;
    }).join('');
    return \`<div style="padding:2rem;display:flex;flex-direction:column;gap:24px;max-width:400px;">\${rows}</div>\`;
  }
}`,...p.parameters?.docs?.source}}},m=[`Default`,`Danger`,`Success`,`Yellow`,`WithTicks`,`Disabled`,`VolumePanelDemo`,`AllVariants`]}))();export{p as AllVariants,s as Danger,o as Default,d as Disabled,c as Success,f as VolumePanelDemo,u as WithTicks,l as Yellow,m as __namedExportsOrder,a as default};