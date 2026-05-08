import{n as e}from"./chunk-DnJy8xQt.js";var t,n,r,i,a,o,s,c,l,u,d,f,p=e((()=>{t=`https://styledictionary.com/reference/document-schema/`,n="Arcade-UI design tokens — source of truth. Edit this file; run `npm run build:tokens` to regenerate CSS/JSON outputs.",r={$type:`color`,$description:`Neon palette + background surfaces`,bg:{$value:`#000`,$description:`Main screen background, absolute black`},"bg-alt":{$value:`#0a0010`,$description:`Alternate surface (hover, striping)`},"bg-panel":{$value:`#110020`,$description:`Card / panel / dialog surface`},cyan:{$value:`#00f5ff`,$description:`Primary neon — default border and text`},"cyan-glow":{$value:`#00f5ff40`,$description:`Cyan at 25% opacity for glow shadows`},red:{$value:`#ff2d55`,$description:`Danger, life lost, error`},"red-glow":{$value:`#ff2d5540`,$description:`Red at 25% opacity`},yellow:{$value:`#ffd700`,$description:`Coins, warnings, highlights`},"yellow-glow":{$value:`#ffd70040`,$description:`Yellow at 25% opacity`},green:{$value:`#39ff14`,$description:`Victory, success, health`},"green-glow":{$value:`#39ff1440`,$description:`Green at 25% opacity`},purple:{$value:`#bf00ff`,$description:`Magic, special power-ups`},"purple-glow":{$value:`#bf00ff40`,$description:`Purple at 25% opacity`},pink:{$value:`#ff69b4`,$description:`Bonus, extra life, charm`},"pink-glow":{$value:`#ff69b440`,$description:`Pink at 25% opacity`},text:{$value:`#00f5ff`,$description:`Primary text colour (mirrors cyan)`},"text-muted":{$value:`#077`,$description:`Secondary / placeholder text`},"text-accent":{$value:`#ffd700`,$description:`Inline highlight (mirrors yellow)`},disabled:{$value:`#345`,$description:`Disabled controls`}},i={$type:`dimension`,$description:`8-px baseline grid — always use these instead of raw px`,1:{$value:`8px`},2:{$value:`16px`},3:{$value:`24px`},4:{$value:`32px`},5:{$value:`40px`},6:{$value:`48px`},7:{$value:`56px`},8:{$value:`64px`},9:{$value:`72px`},10:{$value:`80px`},11:{$value:`88px`},12:{$value:`96px`}},a={$type:`dimension`,$description:`Responsive breakpoints`,pocket:{$value:`480px`,$description:`Smartphone / small screens`},handheld:{$value:`1280px`,$description:`Tablet / standard game monitor`}},o={$type:`dimension`,$description:`Border radii — pixel-art style uses sharp corners`,none:{$value:`0px`,$description:`Sharp pixel-art corners (default UI)`},pixel:{$value:`4px`,$description:`Minimal rounding`}},s={$type:`dimension`,$description:`Border widths`,sm:{$value:`2px`,$description:`Thin border — inputs, secondary cards`},md:{$value:`4px`,$description:`Standard border — panels, buttons`},lg:{$value:`6px`,$description:`Emphasised border — active highlight`}},c={$type:`duration`,$description:`Animation durations`,instant:{$value:`50ms`,$description:`Immediate feedback (toggle, flash)`},fast:{$value:`150ms`,$description:`Short transitions (hover, focus)`},normal:{$value:`300ms`,$description:`Standard transitions (slide, fade)`},slow:{$value:`600ms`,$description:`Emphasised animations (modal open)`},dramatic:{$value:`1200ms`,$description:`Intro, game-over, cutscene`}},l={$description:`CSS timing functions (steps-based for pixel-art feel)`,step:{$value:`steps(1)`,$description:`Binary ON/OFF, no interpolation`},pixel:{$value:`steps(4)`,$description:`4-frame pixel-art transition`},arcade:{$value:`steps(8)`,$description:`8-frame classic arcade movement`}},u={$description:`Font stacks — Press Start 2P / VT323 via Google Fonts or self-hosted woff2 in /fonts/`,display:{$value:`'Press Start 2P', 'Courier New', courier, monospace`,$description:`Headlines, game titles, scores — official pixel display face`},body:{$value:`'VT323', 'Courier New', courier, monospace`,$description:`Body copy, dialogues, secondary terminal-style text`},mono:{$value:`'Share Tech Mono', 'Courier New', courier, monospace`,$description:`Monospace for code snippets, raw data, technical readouts`},pixel:{$value:`{font.display}`,$description:`Legacy alias — same stack as font.display (--arc-font-pixel)`},terminal:{$value:`{font.body}`,$description:`Legacy alias — same stack as font.body (--arc-font-terminal)`}},d={$description:`Typographic scale — each level defines font-size and line-height`,display:{size:{$type:`dimension`,$value:`64px`,$description:`Hero / Game Over title`},lh:{$value:`1.1`},font:{$value:`{font.display}`,$description:`Uses display / pixel face`}},h1:{size:{$type:`dimension`,$value:`32px`,$description:`Primary section heading`},lh:{$value:`1.2`},font:{$value:`{font.display}`,$description:`Uses display / pixel face`}},h2:{size:{$type:`dimension`,$value:`24px`,$description:`Sub-title, card heading`},lh:{$value:`1.3`},font:{$value:`{font.display}`,$description:`Uses display / pixel face`}},h3:{size:{$type:`dimension`,$value:`20px`,$description:`Group label, minor heading`},lh:{$value:`1.4`},font:{$value:`{font.display}`,$description:`Uses display / pixel face`}},body:{size:{$type:`dimension`,$value:`20px`,$description:`Running text, dialogues`},lh:{$value:`1.6`},font:{$value:`{font.body}`,$description:`Uses body / terminal face`}},caption:{size:{$type:`dimension`,$value:`14px`,$description:`Labels, notes, placeholders`},lh:{$value:`1.5`},font:{$value:`{font.body}`,$description:`Uses body / terminal face`}}},f={$schema:t,$description:n,color:r,space:i,bp:a,radius:o,border:s,anim:c,ease:l,font:u,text:d}}));function m(e){let t=e.group===`Glow`;return e.group,`
  <div style="
    display:flex;align-items:center;gap:14px;padding:10px 0;
    border-bottom:1px solid #0a0020;
  ">
    <div style="
      width:48px;height:48px;flex-shrink:0;
      ${t?`background:${e.value};box-shadow:0 0 20px ${e.value}`:`background:${e.value}`};
      border:1px solid #1a1a3a;
    "></div>
    <div style="flex:1;min-width:0;">
      <div style="
        font-family:'Courier New',monospace;font-size:12px;
        color:#00f5ff;letter-spacing:.04em;
      ">${e.name}</div>
      <div style="
        font-family:'Courier New',monospace;font-size:11px;
        color:#007777;margin-top:2px;
      ">${e.value}${e.desc?` · `+e.desc:``}</div>
    </div>
    <span style="
      font-family:'Courier New',monospace;font-size:10px;
      color:#334455;padding:2px 6px;border:1px solid #1a1a3a;
    ">${e.group}</span>
  </div>`}function h(e,t){return`
  <div style="margin-bottom:24px">
    <h3 style="
      font-family:'Courier New',monospace;font-size:11px;
      color:#ffd700;letter-spacing:.12em;text-transform:uppercase;
      margin:0 0 4px;padding:0;
    ">${e}</h3>
    ${t.map(m).join(``)}
  </div>`}var g,_,v,y,b;e((()=>{p(),g={title:`Tokens/Colors`,parameters:{docs:{description:{component:"Palette neon del design system Arcade-UI. I valori provengono direttamente da `src/tokens/tokens.json` — la source of truth. Modificare il JSON e rieseguire `npm run build:tokens` per rigenerare le CSS custom properties."}}}},_=Object.entries(f.color).filter(([,e])=>e.$value).map(([e,t])=>({name:`--arc-color-${e}`,value:t.$value,desc:t.$description??``,group:e.includes(`glow`)?`Glow`:e.startsWith(`bg`)?`Sfondi`:e.startsWith(`text`)||e===`disabled`?`Testo / Stato`:`Neon`})),v={name:`Full Palette`,render:()=>{let e={};for(let t of _)(e[t.group]??=[]).push(t);return`
    <div style="
      max-width:640px;padding:24px;
      background:#000;color:#00f5ff;
    ">
      <h2 style="
        font-family:'Courier New',monospace;font-size:13px;
        color:#00f5ff;letter-spacing:.1em;text-transform:uppercase;
        margin:0 0 20px;padding-bottom:8px;border-bottom:1px solid #00f5ff;
      ">
        COLOR TOKENS — ${_.length} tokens from tokens.json
      </h2>
      ${Object.entries(e).map(([e,t])=>h(e,t)).join(``)}
    </div>`}},y={name:`Neon colours`,render:()=>`
  <div style="
    display:flex;flex-wrap:wrap;gap:16px;padding:24px;background:#000;
  ">
    ${_.filter(e=>e.group===`Neon`).map(e=>`
      <div style="
        display:flex;flex-direction:column;align-items:center;gap:8px;
        font-family:'Courier New',monospace;font-size:10px;text-align:center;
      ">
        <div style="
          width:72px;height:72px;
          background:${e.value};
          box-shadow:0 0 16px ${e.value}, 0 0 32px ${e.value}40;
        "></div>
        <span style="color:#00f5ff;">${e.name.replace(`--arc-color-`,``)}</span>
        <span style="color:#334455;">${e.value}</span>
      </div>`).join(``)}
  </div>`},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Full Palette',
  render: () => {
    const groups = {};
    for (const t of colorTokens) {
      ;
      (groups[t.group] ??= []).push(t);
    }
    return \`
    <div style="
      max-width:640px;padding:24px;
      background:#000;color:#00f5ff;
    ">
      <h2 style="
        font-family:'Courier New',monospace;font-size:13px;
        color:#00f5ff;letter-spacing:.1em;text-transform:uppercase;
        margin:0 0 20px;padding-bottom:8px;border-bottom:1px solid #00f5ff;
      ">
        COLOR TOKENS — \${colorTokens.length} tokens from tokens.json
      </h2>
      \${Object.entries(groups).map(([g, tks]) => groupSection(g, tks)).join('')}
    </div>\`;
  }
}`,...v.parameters?.docs?.source},description:{story:`@type { import('@storybook/html').StoryObj }`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Neon colours',
  render: () => \`
  <div style="
    display:flex;flex-wrap:wrap;gap:16px;padding:24px;background:#000;
  ">
    \${colorTokens.filter(t => t.group === 'Neon').map(t => \`
      <div style="
        display:flex;flex-direction:column;align-items:center;gap:8px;
        font-family:'Courier New',monospace;font-size:10px;text-align:center;
      ">
        <div style="
          width:72px;height:72px;
          background:\${t.value};
          box-shadow:0 0 16px \${t.value}, 0 0 32px \${t.value}40;
        "></div>
        <span style="color:#00f5ff;">\${t.name.replace('--arc-color-', '')}</span>
        <span style="color:#334455;">\${t.value}</span>
      </div>\`).join('')}
  </div>\`
}`,...y.parameters?.docs?.source},description:{story:`@type { import('@storybook/html').StoryObj }`,...y.parameters?.docs?.description}}},b=[`Palette`,`NeonOnly`]}))();export{y as NeonOnly,v as Palette,b as __namedExportsOrder,g as default};