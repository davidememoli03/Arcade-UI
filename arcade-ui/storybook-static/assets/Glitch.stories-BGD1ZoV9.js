import{n as e}from"./chunk-DnJy8xQt.js";function t(e=document){e.querySelectorAll(r).forEach(e=>{if(e.dataset.text!==void 0)return;let t=e.tagName===`IMG`||getComputedStyle(e).backgroundImage!==`none`;e.dataset.text=t?``:e.textContent.trim()})}function n(e,t=600){e.classList.remove(`arc-glitch-active`),e.offsetWidth,e.classList.add(`arc-glitch-active`),setTimeout(()=>e.classList.remove(`arc-glitch-active`),t)}var r,i=e((()=>{r=`.arc-glitch, .arc-glitch-hover, [data-arc-glitch]`})),a,o,s,c,l,u,d,f;e((()=>{i(),a={title:`Effects/Glitch`,parameters:{docs:{description:{component:`@type { import('@storybook/html').Meta }`}}}},o={name:`.arc-glitch (sempre attivo)`,render:()=>`
    <div style="padding:2rem;display:flex;flex-direction:column;gap:2rem;">
      <span
        class="arc-glitch arc-glow-cyan"
        data-text="GAME OVER"
        style="font-family:var(--arc-font-pixel);font-size:3rem;letter-spacing:.15em;">
        GAME OVER
      </span>
      <span
        class="arc-glitch arc-glow-red"
        data-text="CRITICAL ERROR"
        style="font-family:var(--arc-font-pixel);font-size:1.5rem;">
        CRITICAL ERROR
      </span>
      <span
        class="arc-glitch"
        data-text="SIGNAL LOST"
        style="font-family:var(--arc-font-terminal);font-size:1.2rem;color:var(--arc-color-text-muted);">
        SIGNAL LOST
      </span>
    </div>
  `},s={name:`.arc-glitch-hover (on hover)`,render:()=>`
    <div style="padding:2rem;display:flex;flex-direction:column;gap:2rem;">
      <span
        class="arc-glitch-hover arc-glow-cyan"
        data-text="HOVER ME"
        style="font-family:var(--arc-font-pixel);font-size:2.5rem;cursor:pointer;">
        HOVER ME
      </span>
      <button
        class="arc-btn arc-btn-primary arc-glitch-hover"
        data-text="PLAY GAME">
        PLAY GAME
      </button>
      <p style="font-family:var(--arc-font-mono);font-size:.75rem;color:var(--arc-color-text-muted);">
        Il glitch si attiva solo al passaggio del mouse.
      </p>
    </div>
  `},c={name:`triggerGlitch() via JS`,render:()=>{let e=document.createElement(`div`);return e.style.cssText=`padding:2rem;display:flex;flex-direction:column;gap:1.5rem;align-items:flex-start;`,e.innerHTML=`
      <span
        id="glitch-target"
        class="arc-glow-yellow"
        data-text="READY PLAYER ONE"
        style="font-family:var(--arc-font-pixel);font-size:2rem;">
        READY PLAYER ONE
      </span>
      <div style="display:flex;gap:.75rem;flex-wrap:wrap;">
        <button class="arc-btn arc-btn-primary" id="btn-glitch-short">GLITCH 300ms</button>
        <button class="arc-btn arc-btn-ghost"   id="btn-glitch-long">GLITCH 1200ms</button>
        <button class="arc-btn arc-btn-danger"  id="btn-glitch-intense">INTENSE</button>
      </div>
      <p style="font-family:var(--arc-font-mono);font-size:.75rem;color:var(--arc-color-text-muted);">
        Chiama <code>triggerGlitch(el, duration)</code> dal JS.
      </p>
    `,e.querySelector(`#btn-glitch-short`).addEventListener(`click`,()=>{n(e.querySelector(`#glitch-target`),300)}),e.querySelector(`#btn-glitch-long`).addEventListener(`click`,()=>{n(e.querySelector(`#glitch-target`),1200)}),e.querySelector(`#btn-glitch-intense`).addEventListener(`click`,()=>{let t=e.querySelector(`#glitch-target`);t.dataset.arcGlitchIntensity=`high`,n(t,800),setTimeout(()=>delete t.dataset.arcGlitchIntensity,900)}),e}},l={name:`Varianti intensità`,render:()=>`
    <div style="padding:2rem;display:flex;flex-direction:column;gap:2.5rem;">
      <div>
        <p style="font-family:var(--arc-font-mono);font-size:.75rem;color:var(--arc-color-text-muted);margin-bottom:.5rem;">
          data-arc-glitch-intensity="low" — burst ogni 8s
        </p>
        <span
          class="arc-glitch arc-glow-green"
          data-text="LOW INTENSITY"
          data-arc-glitch-intensity="low"
          style="font-family:var(--arc-font-pixel);font-size:1.8rem;">
          LOW INTENSITY
        </span>
      </div>
      <div>
        <p style="font-family:var(--arc-font-mono);font-size:.75rem;color:var(--arc-color-text-muted);margin-bottom:.5rem;">
          data-arc-glitch-intensity="medium" — burst ogni 4s (default)
        </p>
        <span
          class="arc-glitch arc-glow-yellow"
          data-text="MEDIUM INTENSITY"
          data-arc-glitch-intensity="medium"
          style="font-family:var(--arc-font-pixel);font-size:1.8rem;">
          MEDIUM INTENSITY
        </span>
      </div>
      <div>
        <p style="font-family:var(--arc-font-mono);font-size:.75rem;color:var(--arc-color-text-muted);margin-bottom:.5rem;">
          data-arc-glitch-intensity="high" — burst ogni 1.5s, offset 10px
        </p>
        <span
          class="arc-glitch arc-glow-red"
          data-text="HIGH INTENSITY"
          data-arc-glitch-intensity="high"
          style="font-family:var(--arc-font-pixel);font-size:1.8rem;">
          HIGH INTENSITY
        </span>
      </div>
    </div>
  `},u={name:`Su background-image`,render:()=>{let e=document.createElement(`div`);return e.style.cssText=`padding:2rem;display:flex;flex-direction:column;gap:1.5rem;`,e.innerHTML=`
      <div
        class="arc-glitch"
        data-arc-glitch-intensity="high"
        style="
          width:320px;height:180px;
          background: repeating-linear-gradient(
            45deg,
            var(--arc-color-bg-panel) 0px, var(--arc-color-bg-panel) 10px,
            var(--arc-color-bg-alt)   10px, var(--arc-color-bg-alt)   20px
          );
          display:flex;align-items:center;justify-content:center;
          border:2px solid var(--arc-color-cyan);
        ">
        <span class="arc-glow-cyan" style="font-family:var(--arc-font-pixel);font-size:1.2rem;">BG GLITCH</span>
      </div>
      <p style="font-family:var(--arc-font-mono);font-size:.75rem;color:var(--arc-color-text-muted);max-width:340px;">
        Il layer ::before clona <code>background: inherit</code>, spostando
        lo sfondo durante il burst. Chiama <code>initGlitch()</code> per
        popolare automaticamente <code>data-text</code>.
      </p>
    `,t(e),e}},d={name:`Showcase completo`,render:()=>{let e=document.createElement(`div`);e.style.cssText=`padding:2rem;max-width:640px;display:flex;flex-direction:column;gap:3rem;`,e.innerHTML=`
      <!-- Hero -->
      <div style="text-align:center;">
        <h1
          class="arc-glitch arc-glow-cyan"
          data-text="ARCADE UI"
          data-arc-glitch-intensity="high"
          style="font-family:var(--arc-font-pixel);font-size:4rem;letter-spacing:.2em;">
          ARCADE UI
        </h1>
        <p class="arc-glow-yellow arc-u-blink" style="font-family:var(--arc-font-pixel);margin-top:.75rem;font-size:.9rem;">
          ► INSERT COIN TO CONTINUE ◄
        </p>
      </div>

      <!-- Panel con glitch-hover -->
      <div class="arc-panel arc-panel-red">
        <div class="arc-panel-header">
          <span class="arc-glitch-hover arc-glow-red" data-text="SYSTEM ALERT">SYSTEM ALERT</span>
          <span class="arc-badge arc-badge-red arc-badge-pulse" style="margin-left:auto;">DANGER</span>
        </div>
        <div class="arc-panel-body" style="line-height:2;">
          <div>&gt; MEMORY CORRUPTION DETECTED</div>
          <div>&gt; ATTEMPTING RECOVERY...</div>
          <div class="arc-glow-red arc-u-blink">&gt; ██ FATAL ERROR ██</div>
        </div>
        <div class="arc-panel-footer">
          <button id="glitch-btn" class="arc-btn arc-btn-danger">TRIGGER GLITCH</button>
          <button class="arc-btn arc-btn-ghost">IGNORE</button>
        </div>
      </div>

      <!-- Intensity grid -->
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:1rem;">
        <div class="arc-panel" style="align-items:center;padding:1rem;">
          <span class="arc-glitch arc-glow-green" data-text="LOW" data-arc-glitch-intensity="low"
            style="font-family:var(--arc-font-pixel);font-size:1.2rem;">LOW</span>
          <span style="font-family:var(--arc-font-mono);font-size:.65rem;color:var(--arc-color-text-muted);margin-top:.5rem;">8s</span>
        </div>
        <div class="arc-panel" style="align-items:center;padding:1rem;">
          <span class="arc-glitch arc-glow-yellow" data-text="MED" data-arc-glitch-intensity="medium"
            style="font-family:var(--arc-font-pixel);font-size:1.2rem;">MED</span>
          <span style="font-family:var(--arc-font-mono);font-size:.65rem;color:var(--arc-color-text-muted);margin-top:.5rem;">4s</span>
        </div>
        <div class="arc-panel" style="align-items:center;padding:1rem;">
          <span class="arc-glitch arc-glow-red" data-text="HIGH" data-arc-glitch-intensity="high"
            style="font-family:var(--arc-font-pixel);font-size:1.2rem;">HIGH</span>
          <span style="font-family:var(--arc-font-mono);font-size:.65rem;color:var(--arc-color-text-muted);margin-top:.5rem;">1.5s</span>
        </div>
      </div>
    `;let t=e.querySelector(`#glitch-btn`),r=e.querySelector(`.arc-panel-red`);return t.addEventListener(`click`,()=>n(r,800)),e}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: '.arc-glitch (sempre attivo)',
  render: () => \`
    <div style="padding:2rem;display:flex;flex-direction:column;gap:2rem;">
      <span
        class="arc-glitch arc-glow-cyan"
        data-text="GAME OVER"
        style="font-family:var(--arc-font-pixel);font-size:3rem;letter-spacing:.15em;">
        GAME OVER
      </span>
      <span
        class="arc-glitch arc-glow-red"
        data-text="CRITICAL ERROR"
        style="font-family:var(--arc-font-pixel);font-size:1.5rem;">
        CRITICAL ERROR
      </span>
      <span
        class="arc-glitch"
        data-text="SIGNAL LOST"
        style="font-family:var(--arc-font-terminal);font-size:1.2rem;color:var(--arc-color-text-muted);">
        SIGNAL LOST
      </span>
    </div>
  \`
}`,...o.parameters?.docs?.source},description:{story:`@type { import('@storybook/html').StoryObj }`,...o.parameters?.docs?.description}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: '.arc-glitch-hover (on hover)',
  render: () => \`
    <div style="padding:2rem;display:flex;flex-direction:column;gap:2rem;">
      <span
        class="arc-glitch-hover arc-glow-cyan"
        data-text="HOVER ME"
        style="font-family:var(--arc-font-pixel);font-size:2.5rem;cursor:pointer;">
        HOVER ME
      </span>
      <button
        class="arc-btn arc-btn-primary arc-glitch-hover"
        data-text="PLAY GAME">
        PLAY GAME
      </button>
      <p style="font-family:var(--arc-font-mono);font-size:.75rem;color:var(--arc-color-text-muted);">
        Il glitch si attiva solo al passaggio del mouse.
      </p>
    </div>
  \`
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'triggerGlitch() via JS',
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'padding:2rem;display:flex;flex-direction:column;gap:1.5rem;align-items:flex-start;';
    wrapper.innerHTML = \`
      <span
        id="glitch-target"
        class="arc-glow-yellow"
        data-text="READY PLAYER ONE"
        style="font-family:var(--arc-font-pixel);font-size:2rem;">
        READY PLAYER ONE
      </span>
      <div style="display:flex;gap:.75rem;flex-wrap:wrap;">
        <button class="arc-btn arc-btn-primary" id="btn-glitch-short">GLITCH 300ms</button>
        <button class="arc-btn arc-btn-ghost"   id="btn-glitch-long">GLITCH 1200ms</button>
        <button class="arc-btn arc-btn-danger"  id="btn-glitch-intense">INTENSE</button>
      </div>
      <p style="font-family:var(--arc-font-mono);font-size:.75rem;color:var(--arc-color-text-muted);">
        Chiama <code>triggerGlitch(el, duration)</code> dal JS.
      </p>
    \`;
    wrapper.querySelector('#btn-glitch-short').addEventListener('click', () => {
      const el = wrapper.querySelector('#glitch-target');
      triggerGlitch(el, 300);
    });
    wrapper.querySelector('#btn-glitch-long').addEventListener('click', () => {
      const el = wrapper.querySelector('#glitch-target');
      triggerGlitch(el, 1200);
    });
    wrapper.querySelector('#btn-glitch-intense').addEventListener('click', () => {
      const el = wrapper.querySelector('#glitch-target');
      el.dataset.arcGlitchIntensity = 'high';
      triggerGlitch(el, 800);
      setTimeout(() => delete el.dataset.arcGlitchIntensity, 900);
    });
    return wrapper;
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Varianti intensità',
  render: () => \`
    <div style="padding:2rem;display:flex;flex-direction:column;gap:2.5rem;">
      <div>
        <p style="font-family:var(--arc-font-mono);font-size:.75rem;color:var(--arc-color-text-muted);margin-bottom:.5rem;">
          data-arc-glitch-intensity="low" — burst ogni 8s
        </p>
        <span
          class="arc-glitch arc-glow-green"
          data-text="LOW INTENSITY"
          data-arc-glitch-intensity="low"
          style="font-family:var(--arc-font-pixel);font-size:1.8rem;">
          LOW INTENSITY
        </span>
      </div>
      <div>
        <p style="font-family:var(--arc-font-mono);font-size:.75rem;color:var(--arc-color-text-muted);margin-bottom:.5rem;">
          data-arc-glitch-intensity="medium" — burst ogni 4s (default)
        </p>
        <span
          class="arc-glitch arc-glow-yellow"
          data-text="MEDIUM INTENSITY"
          data-arc-glitch-intensity="medium"
          style="font-family:var(--arc-font-pixel);font-size:1.8rem;">
          MEDIUM INTENSITY
        </span>
      </div>
      <div>
        <p style="font-family:var(--arc-font-mono);font-size:.75rem;color:var(--arc-color-text-muted);margin-bottom:.5rem;">
          data-arc-glitch-intensity="high" — burst ogni 1.5s, offset 10px
        </p>
        <span
          class="arc-glitch arc-glow-red"
          data-text="HIGH INTENSITY"
          data-arc-glitch-intensity="high"
          style="font-family:var(--arc-font-pixel);font-size:1.8rem;">
          HIGH INTENSITY
        </span>
      </div>
    </div>
  \`
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Su background-image',
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'padding:2rem;display:flex;flex-direction:column;gap:1.5rem;';
    wrapper.innerHTML = \`
      <div
        class="arc-glitch"
        data-arc-glitch-intensity="high"
        style="
          width:320px;height:180px;
          background: repeating-linear-gradient(
            45deg,
            var(--arc-color-bg-panel) 0px, var(--arc-color-bg-panel) 10px,
            var(--arc-color-bg-alt)   10px, var(--arc-color-bg-alt)   20px
          );
          display:flex;align-items:center;justify-content:center;
          border:2px solid var(--arc-color-cyan);
        ">
        <span class="arc-glow-cyan" style="font-family:var(--arc-font-pixel);font-size:1.2rem;">BG GLITCH</span>
      </div>
      <p style="font-family:var(--arc-font-mono);font-size:.75rem;color:var(--arc-color-text-muted);max-width:340px;">
        Il layer ::before clona <code>background: inherit</code>, spostando
        lo sfondo durante il burst. Chiama <code>initGlitch()</code> per
        popolare automaticamente <code>data-text</code>.
      </p>
    \`;
    initGlitch(wrapper);
    return wrapper;
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Showcase completo',
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'padding:2rem;max-width:640px;display:flex;flex-direction:column;gap:3rem;';
    wrapper.innerHTML = \`
      <!-- Hero -->
      <div style="text-align:center;">
        <h1
          class="arc-glitch arc-glow-cyan"
          data-text="ARCADE UI"
          data-arc-glitch-intensity="high"
          style="font-family:var(--arc-font-pixel);font-size:4rem;letter-spacing:.2em;">
          ARCADE UI
        </h1>
        <p class="arc-glow-yellow arc-u-blink" style="font-family:var(--arc-font-pixel);margin-top:.75rem;font-size:.9rem;">
          ► INSERT COIN TO CONTINUE ◄
        </p>
      </div>

      <!-- Panel con glitch-hover -->
      <div class="arc-panel arc-panel-red">
        <div class="arc-panel-header">
          <span class="arc-glitch-hover arc-glow-red" data-text="SYSTEM ALERT">SYSTEM ALERT</span>
          <span class="arc-badge arc-badge-red arc-badge-pulse" style="margin-left:auto;">DANGER</span>
        </div>
        <div class="arc-panel-body" style="line-height:2;">
          <div>&gt; MEMORY CORRUPTION DETECTED</div>
          <div>&gt; ATTEMPTING RECOVERY...</div>
          <div class="arc-glow-red arc-u-blink">&gt; ██ FATAL ERROR ██</div>
        </div>
        <div class="arc-panel-footer">
          <button id="glitch-btn" class="arc-btn arc-btn-danger">TRIGGER GLITCH</button>
          <button class="arc-btn arc-btn-ghost">IGNORE</button>
        </div>
      </div>

      <!-- Intensity grid -->
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:1rem;">
        <div class="arc-panel" style="align-items:center;padding:1rem;">
          <span class="arc-glitch arc-glow-green" data-text="LOW" data-arc-glitch-intensity="low"
            style="font-family:var(--arc-font-pixel);font-size:1.2rem;">LOW</span>
          <span style="font-family:var(--arc-font-mono);font-size:.65rem;color:var(--arc-color-text-muted);margin-top:.5rem;">8s</span>
        </div>
        <div class="arc-panel" style="align-items:center;padding:1rem;">
          <span class="arc-glitch arc-glow-yellow" data-text="MED" data-arc-glitch-intensity="medium"
            style="font-family:var(--arc-font-pixel);font-size:1.2rem;">MED</span>
          <span style="font-family:var(--arc-font-mono);font-size:.65rem;color:var(--arc-color-text-muted);margin-top:.5rem;">4s</span>
        </div>
        <div class="arc-panel" style="align-items:center;padding:1rem;">
          <span class="arc-glitch arc-glow-red" data-text="HIGH" data-arc-glitch-intensity="high"
            style="font-family:var(--arc-font-pixel);font-size:1.2rem;">HIGH</span>
          <span style="font-family:var(--arc-font-mono);font-size:.65rem;color:var(--arc-color-text-muted);margin-top:.5rem;">1.5s</span>
        </div>
      </div>
    \`;
    const btn = wrapper.querySelector('#glitch-btn');
    const panel = wrapper.querySelector('.arc-panel-red');
    btn.addEventListener('click', () => triggerGlitch(panel, 800));
    return wrapper;
  }
}`,...d.parameters?.docs?.source}}},f=[`AlwaysOn`,`HoverTrigger`,`JsTrigger`,`Intensity`,`ImageElement`,`Showcase`]}))();export{o as AlwaysOn,s as HoverTrigger,u as ImageElement,l as Intensity,c as JsTrigger,d as Showcase,f as __namedExportsOrder,a as default};