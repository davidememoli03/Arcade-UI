import{n as e}from"./chunk-DnJy8xQt.js";function t({wrapperClass:e=``,progressClass:t=`arc-progress-cyan`,value:n=0,label:r=``,indeterminate:i=!1,size:a=``}){let o=a?` arc-progress-${a}`:``,s=i?` arc-progress-indeterminate`:``,c=i?``:` style="--arc-progress:${n}%"`,l=i?`aria-valuenow="0"`:`aria-valuenow="${n}"`,u=r?`<span class="arc-progress-label">${r}</span>\n  `:``;return r||e?`\
<div class="arc-progress-wrapper ${e||t}">
  ${u}<div class="arc-progress${s}${o}"
       role="progressbar" ${l}
       aria-valuemin="0" aria-valuemax="100"
       aria-label="${r||`Progress`}"${c}>
    <div class="arc-progress-bar"></div>
  </div>
</div>`:`\
<div class="arc-progress ${t}${s}${o}"
     role="progressbar" ${l}
     aria-valuemin="0" aria-valuemax="100"
     aria-label="Progress"${c}>
  <div class="arc-progress-bar"></div>
</div>`}var n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_;e((()=>{n={title:`Components/Progress`,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:'Barra di avanzamento stile arcade con blocchi segmentati e glow neon. Controlla il fill con la CSS custom property `--arc-progress` (es. `style="--arc-progress:75%"`). Usa `.arc-progress-indeterminate` per lo stato di caricamento in loop.'}}}},r={name:`0% — Empty`,render:()=>t({value:0,progressClass:`arc-progress-cyan`,label:`LOADING  0%`})},i={name:`33% — One third`,render:()=>t({value:33,progressClass:`arc-progress-cyan`,label:`LOADING  33%`})},a={name:`66% — Two thirds`,render:()=>t({value:66,progressClass:`arc-progress-cyan`,label:`LOADING  66%`})},o={name:`100% — Complete`,render:()=>t({value:100,progressClass:`arc-progress-green`,label:`✓ COMPLETE`})},s={name:`Indeterminate`,render:()=>t({indeterminate:!0,progressClass:`arc-progress-cyan`,label:`PLEASE WAIT...`})},c={name:`Colour: cyan (primary)`,render:()=>t({value:60,progressClass:`arc-progress-cyan`,label:`LOADING  60%`})},l={name:`Colour: green (success)`,render:()=>t({value:80,progressClass:`arc-progress-green`,label:`HEALTH  80%`})},u={name:`Colour: yellow (warning)`,render:()=>t({value:45,progressClass:`arc-progress-yellow`,label:`AMMO  45%`})},d={name:`Colour: red (danger)`,render:()=>t({value:20,progressClass:`arc-progress-red`,label:`! FUEL  20%`})},f={name:`Colour: purple (special)`,render:()=>t({value:70,progressClass:`arc-progress-purple`,label:`MANA  70%`})},p={name:`Size: small (12px)`,render:()=>t({value:55,progressClass:`arc-progress-cyan`,size:`sm`})},m={name:`Size: large (40px)`,render:()=>t({value:75,progressClass:`arc-progress-cyan`,size:`lg`,label:`LOADING  75%`})},h={name:`All colours at a glance`,render:()=>`
<div style="display:flex;flex-direction:column;gap:16px;padding:8px">
  ${t({value:85,progressClass:`arc-progress-cyan`,label:`PRIMARY   85%`})}
  ${t({value:70,progressClass:`arc-progress-green`,label:`SUCCESS   70%`})}
  ${t({value:45,progressClass:`arc-progress-yellow`,label:`WARNING   45%`})}
  ${t({value:20,progressClass:`arc-progress-red`,label:`DANGER    20%`})}
  ${t({value:60,progressClass:`arc-progress-purple`,label:`SPECIAL   60%`})}
  ${t({indeterminate:!0,progressClass:`arc-progress-cyan`,label:`LOADING...`})}
</div>`},g={name:`In-game HUD simulation`,render:()=>`
<div class="arc-panel arc-panel-cyan" style="padding:24px;max-width:400px">
  <div class="arc-panel-header">PLAYER 1</div>
  <div class="arc-panel-body" style="display:flex;flex-direction:column;gap:12px">

    <div class="arc-progress-wrapper arc-progress-green">
      <span class="arc-progress-label">HP  78/100</span>
      <div class="arc-progress" role="progressbar"
           aria-valuenow="78" aria-valuemin="0" aria-valuemax="100"
           aria-label="Health" style="--arc-progress:78%">
        <div class="arc-progress-bar"></div>
      </div>
    </div>

    <div class="arc-progress-wrapper arc-progress-yellow">
      <span class="arc-progress-label">MP  40/100</span>
      <div class="arc-progress" role="progressbar"
           aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"
           aria-label="Magic" style="--arc-progress:40%">
        <div class="arc-progress-bar"></div>
      </div>
    </div>

    <div class="arc-progress-wrapper arc-progress-cyan">
      <span class="arc-progress-label">XP  620/1000</span>
      <div class="arc-progress" role="progressbar"
           aria-valuenow="62" aria-valuemin="0" aria-valuemax="100"
           aria-label="Experience" style="--arc-progress:62%">
        <div class="arc-progress-bar"></div>
      </div>
    </div>

  </div>
</div>`},r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: '0% — Empty',
  render: () => bar({
    value: 0,
    progressClass: 'arc-progress-cyan',
    label: 'LOADING  0%'
  })
}`,...r.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: '33% — One third',
  render: () => bar({
    value: 33,
    progressClass: 'arc-progress-cyan',
    label: 'LOADING  33%'
  })
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: '66% — Two thirds',
  render: () => bar({
    value: 66,
    progressClass: 'arc-progress-cyan',
    label: 'LOADING  66%'
  })
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: '100% — Complete',
  render: () => bar({
    value: 100,
    progressClass: 'arc-progress-green',
    label: '✓ COMPLETE'
  })
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Indeterminate',
  render: () => bar({
    indeterminate: true,
    progressClass: 'arc-progress-cyan',
    label: 'PLEASE WAIT...'
  })
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Colour: cyan (primary)',
  render: () => bar({
    value: 60,
    progressClass: 'arc-progress-cyan',
    label: 'LOADING  60%'
  })
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Colour: green (success)',
  render: () => bar({
    value: 80,
    progressClass: 'arc-progress-green',
    label: 'HEALTH  80%'
  })
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Colour: yellow (warning)',
  render: () => bar({
    value: 45,
    progressClass: 'arc-progress-yellow',
    label: 'AMMO  45%'
  })
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Colour: red (danger)',
  render: () => bar({
    value: 20,
    progressClass: 'arc-progress-red',
    label: '! FUEL  20%'
  })
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Colour: purple (special)',
  render: () => bar({
    value: 70,
    progressClass: 'arc-progress-purple',
    label: 'MANA  70%'
  })
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Size: small (12px)',
  render: () => bar({
    value: 55,
    progressClass: 'arc-progress-cyan',
    size: 'sm'
  })
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Size: large (40px)',
  render: () => bar({
    value: 75,
    progressClass: 'arc-progress-cyan',
    size: 'lg',
    label: 'LOADING  75%'
  })
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'All colours at a glance',
  render: () => \`
<div style="display:flex;flex-direction:column;gap:16px;padding:8px">
  \${bar({
    value: 85,
    progressClass: 'arc-progress-cyan',
    label: 'PRIMARY   85%'
  })}
  \${bar({
    value: 70,
    progressClass: 'arc-progress-green',
    label: 'SUCCESS   70%'
  })}
  \${bar({
    value: 45,
    progressClass: 'arc-progress-yellow',
    label: 'WARNING   45%'
  })}
  \${bar({
    value: 20,
    progressClass: 'arc-progress-red',
    label: 'DANGER    20%'
  })}
  \${bar({
    value: 60,
    progressClass: 'arc-progress-purple',
    label: 'SPECIAL   60%'
  })}
  \${bar({
    indeterminate: true,
    progressClass: 'arc-progress-cyan',
    label: 'LOADING...'
  })}
</div>\`
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'In-game HUD simulation',
  render: () => \`
<div class="arc-panel arc-panel-cyan" style="padding:24px;max-width:400px">
  <div class="arc-panel-header">PLAYER 1</div>
  <div class="arc-panel-body" style="display:flex;flex-direction:column;gap:12px">

    <div class="arc-progress-wrapper arc-progress-green">
      <span class="arc-progress-label">HP  78/100</span>
      <div class="arc-progress" role="progressbar"
           aria-valuenow="78" aria-valuemin="0" aria-valuemax="100"
           aria-label="Health" style="--arc-progress:78%">
        <div class="arc-progress-bar"></div>
      </div>
    </div>

    <div class="arc-progress-wrapper arc-progress-yellow">
      <span class="arc-progress-label">MP  40/100</span>
      <div class="arc-progress" role="progressbar"
           aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"
           aria-label="Magic" style="--arc-progress:40%">
        <div class="arc-progress-bar"></div>
      </div>
    </div>

    <div class="arc-progress-wrapper arc-progress-cyan">
      <span class="arc-progress-label">XP  620/1000</span>
      <div class="arc-progress" role="progressbar"
           aria-valuenow="62" aria-valuemin="0" aria-valuemax="100"
           aria-label="Experience" style="--arc-progress:62%">
        <div class="arc-progress-bar"></div>
      </div>
    </div>

  </div>
</div>\`
}`,...g.parameters?.docs?.source}}},_=[`Empty`,`OneThird`,`TwoThirds`,`Full`,`Indeterminate`,`ColorCyan`,`ColorGreen`,`ColorYellow`,`ColorRed`,`ColorPurple`,`SizeSmall`,`SizeLarge`,`AllColors`,`GameHUD`]}))();export{h as AllColors,c as ColorCyan,l as ColorGreen,f as ColorPurple,d as ColorRed,u as ColorYellow,r as Empty,o as Full,g as GameHUD,s as Indeterminate,i as OneThird,m as SizeLarge,p as SizeSmall,a as TwoThirds,_ as __namedExportsOrder,n as default};