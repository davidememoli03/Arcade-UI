import{n as e}from"./chunk-DnJy8xQt.js";var t,n,r,i,a,o,s,c;e((()=>{t={title:`Effects/Animations`,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:"Utility `.arc-anim-*` per effetti CRT / cabinato. I keyframe globali (blink, pulse-glow, glitch, arc-flicker, …) vivono in `tokens/animation.css`."}}}},n=(e,t,n=``)=>`
<div style="flex:1;min-width:240px;max-width:360px;">
  <p class="arc-text-caption" style="margin:0 0 10px;color:var(--arc-color-text-muted);text-transform:uppercase;letter-spacing:.08em;">
    ${e}
  </p>
  <div style="${n}">${t}</div>
</div>`,r={name:`All utilities`,render:()=>`
<div style="display:flex;flex-wrap:wrap;gap:28px;align-items:flex-start;">
  ${n(`.arc-anim-flicker`,`<div class="arc-anim-flicker" style="padding:var(--arc-space-4);background:var(--arc-color-bg-panel);border:2px solid var(--arc-color-cyan);font-family:var(--arc-font-pixel);color:var(--arc-color-cyan);">
      CRT FLICKER
    </div>`)}
  ${n(`.arc-anim-blink-cursor`,`<div style="font-family:var(--arc-font-terminal);color:var(--arc-color-green);font-size:1.1rem;">
      &gt; READY<span class="arc-anim-blink-cursor" style="display:inline-block;width:.65em;height:1.1em;margin-left:4px;background:currentColor;vertical-align:-3px;" aria-hidden="true"></span>
    </div>`)}
  ${n(`.arc-anim-insert-coin`,`<div class="arc-anim-insert-coin arc-glow-yellow" style="font-family:var(--arc-font-pixel);font-size:1.4rem;text-align:center;padding:var(--arc-space-3);">
      INSERT COIN
    </div>`)}
  ${n(`.arc-anim-scanline-move`,`<div class="arc-anim-scanline-move" style="min-height:100px;padding:var(--arc-space-4);background:var(--arc-color-bg-panel);border:2px solid var(--arc-color-cyan);font-family:var(--arc-font-pixel);color:var(--arc-color-text);">
      SCANLINE OVERLAY
    </div>`)}
  ${n(`.arc-anim-static-noise`,`<div class="arc-anim-static-noise" style="min-height:100px;padding:var(--arc-space-4);background:var(--arc-color-bg-panel);border:2px solid var(--arc-color-red);font-family:var(--arc-font-pixel);color:var(--arc-color-red);">
      NOISE SIGNAL
    </div>`)}
</div>`},i={name:`Flicker (controls)`,render:()=>{let e=document.createElement(`div`);e.style.cssText=`padding:2rem;max-width:420px;font-family:var(--arc-font-mono);color:var(--arc-color-text);`,e.innerHTML=`
      <label style="display:flex;align-items:center;gap:12px;margin-bottom:12px;">
        <span style="min-width:120px;">--arc-flicker-speed</span>
        <input type="range" data-f-speed min="0.2" max="2" step="0.05" value="0.72" style="flex:1;">
        <span data-f-speed-lbl style="min-width:3.5rem;">0.72s</span>
      </label>
      <label style="display:flex;align-items:center;gap:12px;margin-bottom:20px;">
        <span style="min-width:120px;">--arc-flicker-intensity</span>
        <input type="range" data-f-int min="0.1" max="1" step="0.05" value="0.45" style="flex:1;">
        <span data-f-int-lbl style="min-width:3.5rem;">0.45</span>
      </label>
      <div class="arc-anim-flicker" data-flicker-panel style="padding:var(--arc-space-4);background:var(--arc-color-bg-panel);border:2px solid var(--arc-color-cyan);font-family:var(--arc-font-pixel);color:var(--arc-color-cyan);font-size:1.2rem;">
        ADJUST FLICKER
      </div>
    `;let t=e.querySelector(`[data-flicker-panel]`),n=e.querySelector(`[data-f-speed]`),r=e.querySelector(`[data-f-speed-lbl]`),i=e.querySelector(`[data-f-int]`),a=e.querySelector(`[data-f-int-lbl]`);return n.addEventListener(`input`,()=>{let e=n.value;r.textContent=`${e}s`,t.style.setProperty(`--arc-flicker-speed`,`${e}s`)}),i.addEventListener(`input`,()=>{let e=i.value;a.textContent=e,t.style.setProperty(`--arc-flicker-intensity`,e)}),e}},a={name:`Power on (replay)`,render:()=>{let e=document.createElement(`div`);e.style.cssText=`padding:2rem;`,e.innerHTML=`
      <p style="font-family:var(--arc-font-mono);color:var(--arc-color-text-muted);margin:0 0 12px;">
        Clic per rieseguire <code style="color:var(--arc-color-cyan)">.arc-anim-power-on</code>
      </p>
      <button type="button" class="arc-btn arc-btn-primary" data-po-replay style="margin-bottom:16px;">↻ Replay power on</button>
      <div class="arc-anim-power-on" data-po-screen style="width:min(400px);min-height:120px;padding:1.5rem;background:var(--arc-color-bg-panel);border:2px solid var(--arc-color-cyan);font-family:var(--arc-font-pixel);color:var(--arc-color-cyan);box-shadow:0 0 20px var(--arc-color-cyan-glow);">
        PRESS START
      </div>
    `;let t=e.querySelector(`[data-po-replay]`),n=e.querySelector(`[data-po-screen]`);return t.addEventListener(`click`,()=>{n.classList.remove(`arc-anim-power-on`),n.offsetWidth,n.classList.add(`arc-anim-power-on`)}),e}},o={name:`Power off (replay)`,render:()=>{let e=document.createElement(`div`);e.style.cssText=`padding:2rem;`,e.innerHTML=`
      <p style="font-family:var(--arc-font-mono);color:var(--arc-color-text-muted);margin:0 0 12px;">
        Stato iniziale acceso → clic applica <code style="color:var(--arc-color-red)">.arc-anim-power-off</code>
      </p>
      <button type="button" class="arc-btn arc-btn-danger" data-pf-replay style="margin-bottom:16px;">Power off</button>
      <button type="button" class="arc-btn arc-btn-ghost" data-pf-reset style="margin-bottom:16px;margin-left:8px;">Reset</button>
      <div data-pf-screen style="width:min(400px);min-height:120px;padding:1.5rem;background:var(--arc-color-bg-panel);border:2px solid var(--arc-color-cyan);font-family:var(--arc-font-pixel);color:var(--arc-color-cyan);box-shadow:0 0 16px var(--arc-color-cyan-glow);">
        SIGNAL LOST
      </div>
    `;let t=e.querySelector(`[data-pf-screen]`);return e.querySelector(`[data-pf-replay]`).addEventListener(`click`,()=>{t.classList.remove(`arc-anim-power-off`),t.offsetWidth,t.classList.add(`arc-anim-power-off`)}),e.querySelector(`[data-pf-reset]`).addEventListener(`click`,()=>{t.classList.remove(`arc-anim-power-off`)}),e}},s={name:`Keyframes (blink · pulse-glow · glitch)`,render:()=>`
<div style="padding:2rem;display:flex;flex-direction:column;gap:2rem;">
  <div style="font-family:var(--arc-font-pixel);color:var(--arc-color-cyan);">
    <span style="animation:blink var(--arc-anim-normal) var(--arc-ease-step) infinite;">▮ blink keyframes</span>
  </div>
  <div>
    <button class="arc-btn arc-btn-primary" style="animation:pulse-glow var(--arc-anim-slow) var(--arc-ease-pixel) infinite;">
      pulse-glow
    </button>
  </div>
  <div style="font-family:var(--arc-font-pixel);font-size:1.75rem;color:var(--arc-color-red);">
    <span style="display:inline-block;animation:glitch var(--arc-anim-fast) var(--arc-ease-arcade) infinite;">glitch</span>
  </div>
</div>`},r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'All utilities',
  render: () => \`
<div style="display:flex;flex-wrap:wrap;gap:28px;align-items:flex-start;">
  \${panel('.arc-anim-flicker', \`<div class="arc-anim-flicker" style="padding:var(--arc-space-4);background:var(--arc-color-bg-panel);border:2px solid var(--arc-color-cyan);font-family:var(--arc-font-pixel);color:var(--arc-color-cyan);">
      CRT FLICKER
    </div>\`)}
  \${panel('.arc-anim-blink-cursor', \`<div style="font-family:var(--arc-font-terminal);color:var(--arc-color-green);font-size:1.1rem;">
      &gt; READY<span class="arc-anim-blink-cursor" style="display:inline-block;width:.65em;height:1.1em;margin-left:4px;background:currentColor;vertical-align:-3px;" aria-hidden="true"></span>
    </div>\`)}
  \${panel('.arc-anim-insert-coin', \`<div class="arc-anim-insert-coin arc-glow-yellow" style="font-family:var(--arc-font-pixel);font-size:1.4rem;text-align:center;padding:var(--arc-space-3);">
      INSERT COIN
    </div>\`)}
  \${panel('.arc-anim-scanline-move', \`<div class="arc-anim-scanline-move" style="min-height:100px;padding:var(--arc-space-4);background:var(--arc-color-bg-panel);border:2px solid var(--arc-color-cyan);font-family:var(--arc-font-pixel);color:var(--arc-color-text);">
      SCANLINE OVERLAY
    </div>\`)}
  \${panel('.arc-anim-static-noise', \`<div class="arc-anim-static-noise" style="min-height:100px;padding:var(--arc-space-4);background:var(--arc-color-bg-panel);border:2px solid var(--arc-color-red);font-family:var(--arc-font-pixel);color:var(--arc-color-red);">
      NOISE SIGNAL
    </div>\`)}
</div>\`
}`,...r.parameters?.docs?.source},description:{story:`@type { import('@storybook/html').StoryObj }`,...r.parameters?.docs?.description}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Flicker (controls)',
  render: () => {
    const root = document.createElement('div');
    root.style.cssText = 'padding:2rem;max-width:420px;font-family:var(--arc-font-mono);color:var(--arc-color-text);';
    root.innerHTML = \`
      <label style="display:flex;align-items:center;gap:12px;margin-bottom:12px;">
        <span style="min-width:120px;">--arc-flicker-speed</span>
        <input type="range" data-f-speed min="0.2" max="2" step="0.05" value="0.72" style="flex:1;">
        <span data-f-speed-lbl style="min-width:3.5rem;">0.72s</span>
      </label>
      <label style="display:flex;align-items:center;gap:12px;margin-bottom:20px;">
        <span style="min-width:120px;">--arc-flicker-intensity</span>
        <input type="range" data-f-int min="0.1" max="1" step="0.05" value="0.45" style="flex:1;">
        <span data-f-int-lbl style="min-width:3.5rem;">0.45</span>
      </label>
      <div class="arc-anim-flicker" data-flicker-panel style="padding:var(--arc-space-4);background:var(--arc-color-bg-panel);border:2px solid var(--arc-color-cyan);font-family:var(--arc-font-pixel);color:var(--arc-color-cyan);font-size:1.2rem;">
        ADJUST FLICKER
      </div>
    \`;
    const panelEl = root.querySelector('[data-flicker-panel]');
    const speed = root.querySelector('[data-f-speed]');
    const speedLbl = root.querySelector('[data-f-speed-lbl]');
    const int = root.querySelector('[data-f-int]');
    const intLbl = root.querySelector('[data-f-int-lbl]');
    speed.addEventListener('input', () => {
      const v = speed.value;
      speedLbl.textContent = \`\${v}s\`;
      panelEl.style.setProperty('--arc-flicker-speed', \`\${v}s\`);
    });
    int.addEventListener('input', () => {
      const v = int.value;
      intLbl.textContent = v;
      panelEl.style.setProperty('--arc-flicker-intensity', v);
    });
    return root;
  }
}`,...i.parameters?.docs?.source},description:{story:`@type { import('@storybook/html').StoryObj }`,...i.parameters?.docs?.description}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Power on (replay)',
  render: () => {
    const root = document.createElement('div');
    root.style.cssText = 'padding:2rem;';
    root.innerHTML = \`
      <p style="font-family:var(--arc-font-mono);color:var(--arc-color-text-muted);margin:0 0 12px;">
        Clic per rieseguire <code style="color:var(--arc-color-cyan)">.arc-anim-power-on</code>
      </p>
      <button type="button" class="arc-btn arc-btn-primary" data-po-replay style="margin-bottom:16px;">↻ Replay power on</button>
      <div class="arc-anim-power-on" data-po-screen style="width:min(400px);min-height:120px;padding:1.5rem;background:var(--arc-color-bg-panel);border:2px solid var(--arc-color-cyan);font-family:var(--arc-font-pixel);color:var(--arc-color-cyan);box-shadow:0 0 20px var(--arc-color-cyan-glow);">
        PRESS START
      </div>
    \`;
    const btn = root.querySelector('[data-po-replay]');
    const screen = root.querySelector('[data-po-screen]');
    btn.addEventListener('click', () => {
      screen.classList.remove('arc-anim-power-on');
      void screen.offsetWidth;
      screen.classList.add('arc-anim-power-on');
    });
    return root;
  }
}`,...a.parameters?.docs?.source},description:{story:`@type { import('@storybook/html').StoryObj }`,...a.parameters?.docs?.description}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Power off (replay)',
  render: () => {
    const root = document.createElement('div');
    root.style.cssText = 'padding:2rem;';
    root.innerHTML = \`
      <p style="font-family:var(--arc-font-mono);color:var(--arc-color-text-muted);margin:0 0 12px;">
        Stato iniziale acceso → clic applica <code style="color:var(--arc-color-red)">.arc-anim-power-off</code>
      </p>
      <button type="button" class="arc-btn arc-btn-danger" data-pf-replay style="margin-bottom:16px;">Power off</button>
      <button type="button" class="arc-btn arc-btn-ghost" data-pf-reset style="margin-bottom:16px;margin-left:8px;">Reset</button>
      <div data-pf-screen style="width:min(400px);min-height:120px;padding:1.5rem;background:var(--arc-color-bg-panel);border:2px solid var(--arc-color-cyan);font-family:var(--arc-font-pixel);color:var(--arc-color-cyan);box-shadow:0 0 16px var(--arc-color-cyan-glow);">
        SIGNAL LOST
      </div>
    \`;
    const screen = root.querySelector('[data-pf-screen]');
    root.querySelector('[data-pf-replay]').addEventListener('click', () => {
      screen.classList.remove('arc-anim-power-off');
      void screen.offsetWidth;
      screen.classList.add('arc-anim-power-off');
    });
    root.querySelector('[data-pf-reset]').addEventListener('click', () => {
      screen.classList.remove('arc-anim-power-off');
    });
    return root;
  }
}`,...o.parameters?.docs?.source},description:{story:`@type { import('@storybook/html').StoryObj }`,...o.parameters?.docs?.description}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Keyframes (blink · pulse-glow · glitch)',
  render: () => \`
<div style="padding:2rem;display:flex;flex-direction:column;gap:2rem;">
  <div style="font-family:var(--arc-font-pixel);color:var(--arc-color-cyan);">
    <span style="animation:blink var(--arc-anim-normal) var(--arc-ease-step) infinite;">▮ blink keyframes</span>
  </div>
  <div>
    <button class="arc-btn arc-btn-primary" style="animation:pulse-glow var(--arc-anim-slow) var(--arc-ease-pixel) infinite;">
      pulse-glow
    </button>
  </div>
  <div style="font-family:var(--arc-font-pixel);font-size:1.75rem;color:var(--arc-color-red);">
    <span style="display:inline-block;animation:glitch var(--arc-anim-fast) var(--arc-ease-arcade) infinite;">glitch</span>
  </div>
</div>\`
}`,...s.parameters?.docs?.source},description:{story:`@type { import('@storybook/html').StoryObj }`,...s.parameters?.docs?.description}}},c=[`Showcase`,`FlickerPlayground`,`PowerOnReplay`,`PowerOffReplay`,`KeyframesLegacy`]}))();export{i as FlickerPlayground,s as KeyframesLegacy,o as PowerOffReplay,a as PowerOnReplay,r as Showcase,c as __namedExportsOrder,t as default};