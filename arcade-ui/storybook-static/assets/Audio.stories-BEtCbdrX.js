const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./howler-CBI0GVin.js","./chunk-DnJy8xQt.js"])))=>i.map(i=>d[i]);
import{a as e,n as t}from"./chunk-DnJy8xQt.js";import{n,t as r}from"./preload-helper-DVWkohm0.js";function i(e,t,n,r,i,a=`square`){let o=e.createOscillator(),s=e.createGain();o.connect(s),s.connect(e.destination),o.type=a,o.frequency.setValueAtTime(t,n),s.gain.setValueAtTime(i,n),s.gain.exponentialRampToValueAtTime(1e-4,n+r),o.start(n),o.stop(n+r+.01)}function a(e,t,n,r,i,a,o=`square`){let s=e.createOscillator(),c=e.createGain();s.connect(c),c.connect(e.destination),s.type=o,s.frequency.setValueAtTime(t,r),s.frequency.exponentialRampToValueAtTime(n,r+i),c.gain.setValueAtTime(a,r),c.gain.exponentialRampToValueAtTime(1e-4,r+i),s.start(r),s.stop(r+i+.01)}var o,s,c,l,u,d,f=t((()=>{n(),o=`arc-audio-volume`,s=`arc-audio-muted`,c=`.arc-btn`,l=`.arc-btn-primary`,u={coin:(e,t)=>{let n=e.currentTime;i(e,987,n,.08,t*.4),i(e,1319,n+.08,.12,t*.4)},select:(e,t)=>{a(e,660,880,e.currentTime,.08,t*.35)},blip:(e,t)=>{i(e,1200,e.currentTime,.04,t*.22)},error:(e,t)=>{a(e,440,110,e.currentTime,.3,t*.3,`sawtooth`)},win:(e,t)=>{let n=e.currentTime;[523,659,784,1047].forEach((r,a)=>i(e,r,n+a*.08,.1,t*.35))},gameover:(e,t)=>{let n=e.currentTime;[440,370,311,261].forEach((r,a)=>i(e,r,n+a*.13,.15,t*.3))}},d=class t{static#e=null;#t=null;#n=null;#r=new Map;#i=[];#a=.5;#o=!1;#s=!1;#c=[];#l=!1;#u=new WeakSet;constructor(){this.#d(),this.#m(),this.#h(),this.#g()}static getInstance(){return t.#e||=new t,t.#e}#d(){try{let e=sessionStorage.getItem(o),t=sessionStorage.getItem(s);e!==null&&(this.#a=Math.max(0,Math.min(1,parseFloat(e)))),t!==null&&(this.#o=t===`true`)}catch{}}#f(){try{sessionStorage.setItem(o,String(this.#a)),sessionStorage.setItem(s,String(this.#o))}catch{}}#p(){return typeof AudioContext>`u`?null:(this.#t||=new AudioContext,this.#t.state===`suspended`&&this.#t.resume().catch(()=>{}),this.#t)}async#m(){try{let t=await r(()=>import(`./howler-CBI0GVin.js`).then(t=>e(t.default,1)),__vite__mapDeps([0,1]),import.meta.url);this.#n=t.Howl??t.default?.Howl??null}catch{typeof window<`u`&&typeof window.Howl==`function`&&(this.#n=window.Howl)}this.#n&&this.#i.splice(0).forEach(({id:e,src:t})=>this.register(e,t))}#h(){if(typeof document>`u`)return;let e=()=>{this.#l||this.#s||(this.#s=!0,this.#c.splice(0).forEach(e=>this.play(e)))};[`click`,`keydown`,`touchstart`].forEach(t=>{document.addEventListener(t,e,{once:!0,capture:!0})})}#g(){if(typeof document>`u`)return;let e=()=>this.#_();document.readyState===`loading`?document.addEventListener(`DOMContentLoaded`,e,{once:!0}):e()}#_(e=document){e.querySelectorAll(c).forEach(e=>{if(this.#u.has(e))return;this.#u.add(e);let t=`arcSoundHover`in e.dataset,n=`arcSoundClick`in e.dataset,r=t?e.dataset.arcSoundHover:`blip`,i=n?e.dataset.arcSoundClick:e.matches(l)?`select`:null;r&&e.addEventListener(`mouseenter`,()=>{e.disabled||this.play(r)}),i&&e.addEventListener(`click`,()=>{e.disabled||this.play(i)})})}play(e){if(this.#l)return this;if(!this.#s)return this.#c.push(e),this;if(this.#o)return this;if(u[e]){let t=this.#p();t&&u[e](t,this.#a)}else this.#r.has(e)?this.#r.get(e).play():this.#n&&(this.#r.set(e,new this.#n({src:[e],volume:this.#a,preload:!0})),this.#r.get(e).play());return this}setVolume(e){return this.#a=Math.max(0,Math.min(1,e)),this.#f(),this.#o||this.#r.forEach(e=>e.volume(this.#a)),this}getVolume(){return this.#a}mute(){return this.#o=!0,this.#f(),this.#r.forEach(e=>e.volume(0)),this}unmute(){return this.#o=!1,this.#f(),this.#r.forEach(e=>e.volume(this.#a)),this}isMuted(){return this.#o}register(e,t){return this.#n?this.#r.has(e)||this.#r.set(e,new this.#n({src:[t],volume:this.#o?0:this.#a,preload:!0})):this.#i.push({id:e,src:t}),this}bindButtons(e=document){return this.#_(e),this}static get SFX(){return Object.keys(u)}static _resetForTest(){t.#e&&(t.#e.#l=!0),t.#e=null}}}));function p(e,t=`cyan`){return`<span class="arc-badge arc-badge-${t}" style="font-size:.65rem;">${e}</span>`}function m(e,t){let n=[{id:`coin`,icon:`🪙`,color:`yellow`,label:`COIN`},{id:`select`,icon:`▶`,color:`cyan`,label:`SELECT`},{id:`blip`,icon:`◆`,color:`green`,label:`BLIP`},{id:`error`,icon:`✗`,color:`red`,label:`ERROR`},{id:`win`,icon:`★`,color:`yellow`,label:`WIN`},{id:`gameover`,icon:`☠`,color:`red`,label:`GAMEOVER`}],r=document.createElement(`div`);return r.style.cssText=`display:grid;grid-template-columns:repeat(3,1fr);gap:.75rem;`,n.forEach(({id:n,icon:i,color:a,label:o})=>{let s=document.createElement(`button`);s.className=`arc-btn arc-btn-ghost`,s.style.cssText=`border-color:var(--arc-color-${a===`green`?`green`:a===`yellow`?`yellow`:a===`red`?`red`:`cyan`});color:var(--arc-color-${a===`green`?`green`:a===`yellow`?`yellow`:a===`red`?`red`:`cyan`});gap:.35rem;padding:10px 8px;font-size:11px;justify-content:flex-start;`,s.innerHTML=`<span>${i}</span> ${o}`,s.addEventListener(`click`,()=>{e.play(n),h(t,n,a)}),r.appendChild(s)}),r}function h(e,t,n=`cyan`){let r=document.createElement(`div`);r.style.cssText=`font-family:var(--arc-font-mono);font-size:.72rem;color:var(--arc-color-${n===`green`?`green`:n===`yellow`?`yellow`:n===`red`?`red`:`cyan`});display:flex;align-items:center;gap:.5rem;`,r.innerHTML=`<span style="color:var(--arc-color-text-muted)">[${new Date().toLocaleTimeString(`it`,{hour:`2-digit`,minute:`2-digit`,second:`2-digit`})}]</span> audio.play(<b>'${t}'</b>)`,e.prepend(r),e.children.length>6&&e.lastChild.remove()}var g,_,v,y,b,x,S;t((()=>{f(),g={title:`Audio/AudioManager`,parameters:{docs:{description:{component:`@type { import('@storybook/html').Meta }`}}}},_={wrap:`padding:2rem;max-width:680px;display:flex;flex-direction:column;gap:1.5rem;`,label:`font-family:var(--arc-font-mono);font-size:.7rem;color:var(--arc-color-text-muted);text-transform:uppercase;letter-spacing:.1em;`,value:`font-family:var(--arc-font-mono);font-size:.85rem;color:var(--arc-color-cyan);`,heading:`font-family:var(--arc-font-pixel);font-size:1rem;color:var(--arc-color-text);letter-spacing:.1em;margin:0;`,note:`font-family:var(--arc-font-mono);font-size:.7rem;color:var(--arc-color-text-muted);line-height:1.6;`,row:`display:flex;align-items:center;gap:.75rem;flex-wrap:wrap;`,sep:`border:none;border-top:1px solid #1a0a2e;margin:0;`},v={name:`Overview — pannello completo`,render:()=>{let e=d.getInstance(),t=document.createElement(`div`);t.style.cssText=_.wrap;let n=document.createElement(`div`);n.style.cssText=`${_.row}padding:.75rem 1rem;background:var(--arc-color-bg-panel);border:1px solid #1a0a2e;`;let r=document.createElement(`span`);r.id=`arc-story-audio-badge`,r.innerHTML=typeof AudioContext<`u`?p(`WEB AUDIO: OK ✓`,`green`):p(`WEB AUDIO: N/A`,`red`);let i=document.createElement(`span`);i.id=`arc-story-muted-badge`,i.innerHTML=e.isMuted()?p(`MUTED`,`red`):p(`AUDIO ON`,`green`);let a=document.createElement(`span`);a.id=`arc-story-vol-label`,a.style.cssText=`${_.value}margin-left:auto;`,a.textContent=`VOL ${Math.round(e.getVolume()*100)}%`,n.append(r,i,a);let o=document.createElement(`h2`);o.style.cssText=_.heading,o.innerHTML=`
      <span style="color:var(--arc-color-cyan)">▶</span>
      AUDIO MANAGER
      <span style="font-size:.6rem;color:var(--arc-color-text-muted);letter-spacing:.05em;vertical-align:middle;">
        singleton
      </span>
    `;let s=document.createElement(`div`);s.style.cssText=`display:flex;flex-direction:column;gap:.5rem;`,s.innerHTML=`<span style="${_.label}">Volume</span>`;let c=document.createElement(`div`);c.style.cssText=`${_.row}gap:1rem;`;let l=document.createElement(`input`);l.type=`range`,l.min=`0`,l.max=`100`,l.value=String(Math.round(e.getVolume()*100)),l.style.cssText=`flex:1;accent-color:var(--arc-color-cyan);cursor:pointer;`;let u=document.createElement(`span`);u.style.cssText=_.value,u.textContent=`${l.value}%`,l.addEventListener(`input`,()=>{let t=Number(l.value)/100;e.setVolume(t),u.textContent=`${l.value}%`,a.textContent=`VOL ${l.value}%`}),c.append(l,u),s.append(c);let f=document.createElement(`div`);f.style.cssText=`display:flex;flex-direction:column;gap:.5rem;`,f.innerHTML=`<span style="${_.label}">Mute</span>`;let g=document.createElement(`div`);g.style.cssText=_.row;let v=document.createElement(`button`);v.className=`arc-btn arc-btn-danger arc-btn-sm`,v.textContent=`MUTE`;let y=document.createElement(`button`);y.className=`arc-btn arc-btn-ghost arc-btn-sm`,y.textContent=`UNMUTE`;let b=document.createElement(`span`);b.style.cssText=_.value,b.textContent=e.isMuted()?`isMuted() → true`:`isMuted() → false`;let x=()=>{let t=e.isMuted();b.textContent=`isMuted() → ${t}`,i.innerHTML=t?p(`MUTED`,`red`):p(`AUDIO ON`,`green`)};v.addEventListener(`click`,()=>{e.mute(),x()}),y.addEventListener(`click`,()=>{e.unmute(),x()}),g.append(v,y,b),f.append(g);let S=document.createElement(`div`);S.style.cssText=`display:flex;flex-direction:column;gap:.75rem;`,S.innerHTML=`<span style="${_.label}">SFX built-in — clicca per riprodurre</span>`;let C=document.createElement(`div`);C.style.cssText=`display:flex;flex-direction:column;gap:.25rem;min-height:1rem;`;let w=m(e,C);S.append(w);let T=document.createElement(`div`);T.style.cssText=`display:flex;flex-direction:column;gap:.5rem;`,T.innerHTML=`<span style="${_.label}">Play log</span>`;let E=document.createElement(`div`);E.style.cssText=`padding:.75rem 1rem;background:var(--arc-color-bg-panel);border:1px solid #1a0a2e;min-height:3.5rem;display:flex;flex-direction:column;gap:.2rem;`,E.innerHTML=`<span style="${_.note}">Interagisci con i bottoni per vedere il log…</span>`,S.querySelectorAll,w.querySelectorAll(`button`).forEach((t,n)=>{let r=d.SFX[n],i=[`yellow`,`cyan`,`green`,`red`,`yellow`,`red`];t.onclick=()=>{e.play(r),h(E,r,i[n])}}),T.append(E);let D=document.createElement(`p`);D.style.cssText=`${_.note}padding:.5rem .75rem;border-left:2px solid var(--arc-color-cyan);`,D.textContent=`Volume e mute sono persistiti in sessionStorage. Naviga tra le storie: lo stato rimane.`;let O=document.createElement(`p`);return O.style.cssText=`${_.note}padding:.5rem .75rem;border-left:2px solid var(--arc-color-green, #0f0);`,O.innerHTML=`
      <b style="color:var(--arc-color-text)">Suoni built-in:</b> sintetizzati via
      <code style="color:var(--arc-color-cyan)">Web Audio API</code> — nessun file mp3 necessario.
      Per suoni custom usa <code>audio.register('id', '/path/to/file.mp3')</code> con Howler.js.
    `,t.append(n,o,s,f,S,T,D,O),t}},y={name:`Auto-binding su .arc-btn`,render:()=>{let e=d.getInstance(),t=document.createElement(`div`);return t.style.cssText=_.wrap,t.innerHTML=`
      <h2 style="${_.heading}">AUTO-BINDING</h2>
      <p style="${_.note}">
        AudioManager collega automaticamente i suoni a tutti i
        <code style="color:var(--arc-color-cyan)">.arc-btn</code> al DOMContentLoaded.
        Usa <code>audio.bindButtons(root)</code> per elementi aggiunti dinamicamente.
      </p>

      <div style="display:flex;flex-direction:column;gap:1.5rem;">

        <!-- Primary: click → select -->
        <div style="display:flex;flex-direction:column;gap:.5rem;">
          <span style="${_.label}">click → play('select')</span>
          <div style="${_.row}">
            <button class="arc-btn arc-btn-primary">INSERT COIN</button>
            <span style="${_.note}">
              <code>.arc-btn-primary</code> → suono <code>select</code> al click (default)
            </span>
          </div>
        </div>

        <hr style="${_.sep}">

        <!-- Qualsiasi bottone: hover → blip -->
        <div style="display:flex;flex-direction:column;gap:.5rem;">
          <span style="${_.label}">mouseenter → play('blip')</span>
          <div style="${_.row}">
            <button class="arc-btn arc-btn-ghost">GHOST BTN</button>
            <button class="arc-btn arc-btn-danger">DANGER BTN</button>
            <span style="${_.note}">tutti i <code>.arc-btn</code> → <code>blip</code> sull'hover</span>
          </div>
        </div>

        <hr style="${_.sep}">

        <!-- Override data-arc-sound-click -->
        <div style="display:flex;flex-direction:column;gap:.5rem;">
          <span style="${_.label}">data-arc-sound-click="win"</span>
          <div style="${_.row}">
            <button class="arc-btn arc-btn-primary" data-arc-sound-click="win">YOU WIN!</button>
            <span style="${_.note}">override: click suona <code>win</code> invece di <code>select</code></span>
          </div>
        </div>

        <hr style="${_.sep}">

        <!-- Override data-arc-sound-hover -->
        <div style="display:flex;flex-direction:column;gap:.5rem;">
          <span style="${_.label}">data-arc-sound-hover="error"</span>
          <div style="${_.row}">
            <button class="arc-btn arc-btn-ghost" data-arc-sound-hover="error">DANGER ZONE</button>
            <span style="${_.note}">override hover: <code>error</code> invece di <code>blip</code></span>
          </div>
        </div>

        <hr style="${_.sep}">

        <!-- Silenzioso -->
        <div style="display:flex;flex-direction:column;gap:.5rem;">
          <span style="${_.label}">data-arc-sound-hover="" — hover silenzioso</span>
          <div style="${_.row}">
            <button class="arc-btn arc-btn-ghost" data-arc-sound-hover="">SILENT HOVER</button>
            <span style="${_.note}">stringa vuota → nessun suono sull'hover</span>
          </div>
        </div>

      </div>
    `,e.bindButtons(t),t}},b={name:`SFX — tutti i suoni built-in`,render:()=>{let e=d.getInstance(),t=document.createElement(`div`);t.style.cssText=_.wrap;let n=[{id:`coin`,trigger:`Apertura dialog`,color:`yellow`},{id:`select`,trigger:`Click .arc-btn-primary`,color:`cyan`},{id:`blip`,trigger:`Hover .arc-btn`,color:`green`},{id:`error`,trigger:`Validazione fallita`,color:`red`},{id:`win`,trigger:`Completamento`,color:`yellow`},{id:`gameover`,trigger:`Manuale`,color:`red`}],r=document.createElement(`div`);r.style.cssText=`display:flex;flex-direction:column;gap:.5rem;`;let i=document.createElement(`div`);i.style.cssText=`display:grid;grid-template-columns:100px 1fr 1fr;gap:.5rem;padding:.4rem .75rem;${_.label}border-bottom:1px solid #1a0a2e;`,i.innerHTML=`<span>PLAY</span><span>ID</span><span>TRIGGER DEFAULT</span>`,r.appendChild(i),n.forEach(({id:t,trigger:n,color:i})=>{let a=`var(--arc-color-${i===`green`?`green`:i===`yellow`?`yellow`:i===`red`?`red`:`cyan`})`,o=document.createElement(`div`);o.style.cssText=`display:grid;grid-template-columns:100px 1fr 1fr;gap:.5rem;align-items:center;padding:.35rem .75rem;border-bottom:1px solid #0d001a;`;let s=document.createElement(`button`);s.className=`arc-btn arc-btn-ghost arc-btn-sm`,s.style.cssText=`border-color:${a};color:${a};padding:6px 12px;`,s.textContent=`▶ PLAY`,s.addEventListener(`click`,()=>e.play(t));let c=document.createElement(`code`);c.style.cssText=`font-family:var(--arc-font-mono);font-size:.8rem;color:${a};`,c.textContent=`'${t}'`;let l=document.createElement(`span`);l.style.cssText=`${_.note}`,l.textContent=n,o.append(s,c,l),r.appendChild(o)}),t.innerHTML=`<h2 style="${_.heading}">SFX BUILT-IN</h2>`,t.appendChild(r);let a=document.createElement(`pre`);return a.style.cssText=`font-family:var(--arc-font-mono);font-size:.72rem;color:var(--arc-color-text-muted);background:var(--arc-color-bg-panel);padding:1rem;margin:0;line-height:1.7;overflow:auto;`,a.textContent=[`import { AudioManager } from '@davide03memoli/arcade-ui'`,``,`const audio = AudioManager.getInstance()`,``,`audio.play('coin')      // apertura dialog`,`audio.play('select')    // conferma`,`audio.play('blip')      // navigazione`,`audio.play('error')     // errore`,`audio.play('win')       // vittoria`,`audio.play('gameover')  // game over`].join(`
`),t.appendChild(a),t}},x={name:`Playground — scenario reale`,render:()=>{let e=d.getInstance(),t=document.createElement(`div`);return t.style.cssText=`${_.wrap}max-width:560px;`,t.innerHTML=`
      <h2 style="${_.heading}">
        <span style="color:var(--arc-color-yellow)">★</span>
        STAGE CLEAR
      </h2>
      <p style="${_.note}">
        Esempio di scenario: un pannello con bottoni che usano i suoni built-in
        e override tramite attributi data-*.
      </p>

      <div class="arc-panel arc-panel-cyan" style="gap:1rem;">
        <div class="arc-panel-header">
          <span style="font-family:var(--arc-font-pixel);font-size:.85rem;">PLAYER STATS</span>
          <span class="arc-badge arc-badge-yellow arc-badge-pulse" style="margin-left:auto;">LEVEL 7</span>
        </div>

        <div class="arc-panel-body" style="display:flex;flex-direction:column;gap:.5rem;font-family:var(--arc-font-mono);font-size:.8rem;">
          <div style="display:flex;justify-content:space-between;">
            <span>SCORE</span>
            <span style="color:var(--arc-color-yellow)">024,800</span>
          </div>
          <div style="display:flex;justify-content:space-between;">
            <span>LIVES</span>
            <span style="color:var(--arc-color-red)">♥ ♥ ♥</span>
          </div>
          <div style="display:flex;justify-content:space-between;">
            <span>TIME</span>
            <span style="color:var(--arc-color-cyan)">02:34</span>
          </div>
        </div>

        <div class="arc-panel-footer" style="gap:.75rem;">
          <!-- Primary: auto → select -->
          <button class="arc-btn arc-btn-primary">
            CONTINUE
          </button>

          <!-- Win sound on click -->
          <button class="arc-btn arc-btn-ghost" data-arc-sound-click="win">
            SAVE &amp; EXIT
          </button>

          <!-- Error on hover, gameover on click -->
          <button class="arc-btn arc-btn-danger"
            data-arc-sound-hover="error"
            data-arc-sound-click="gameover">
            QUIT
          </button>
        </div>
      </div>

      <p style="${_.note}">
        <code style="color:var(--arc-color-cyan)">CONTINUE</code> → click suona <code>select</code> (default .arc-btn-primary)<br>
        <code style="color:var(--arc-color-cyan)">SAVE &amp; EXIT</code> → click suona <code>win</code> (data-arc-sound-click)<br>
        <code style="color:var(--arc-color-red)">QUIT</code> → hover suona <code>error</code>, click suona <code>gameover</code>
      </p>
    `,e.bindButtons(t),t}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Overview — pannello completo',
  render: () => {
    const audio = AudioManager.getInstance();
    const wrap = document.createElement('div');
    wrap.style.cssText = css.wrap;

    // ── Status bar
    const statusBar = document.createElement('div');
    statusBar.style.cssText = \`\${css.row}padding:.75rem 1rem;background:var(--arc-color-bg-panel);border:1px solid #1a0a2e;\`;
    const audioBadge = document.createElement('span');
    audioBadge.id = 'arc-story-audio-badge';
    audioBadge.innerHTML = typeof AudioContext !== 'undefined' ? badge('WEB AUDIO: OK ✓', 'green') : badge('WEB AUDIO: N/A', 'red');
    const mutedBadge = document.createElement('span');
    mutedBadge.id = 'arc-story-muted-badge';
    mutedBadge.innerHTML = audio.isMuted() ? badge('MUTED', 'red') : badge('AUDIO ON', 'green');
    const volLabel = document.createElement('span');
    volLabel.id = 'arc-story-vol-label';
    volLabel.style.cssText = \`\${css.value}margin-left:auto;\`;
    volLabel.textContent = \`VOL \${Math.round(audio.getVolume() * 100)}%\`;
    statusBar.append(audioBadge, mutedBadge, volLabel);

    // ── Titolo
    const title = document.createElement('h2');
    title.style.cssText = css.heading;
    title.innerHTML = \`
      <span style="color:var(--arc-color-cyan)">▶</span>
      AUDIO MANAGER
      <span style="font-size:.6rem;color:var(--arc-color-text-muted);letter-spacing:.05em;vertical-align:middle;">
        singleton
      </span>
    \`;

    // ── Volume
    const volSection = document.createElement('div');
    volSection.style.cssText = 'display:flex;flex-direction:column;gap:.5rem;';
    volSection.innerHTML = \`<span style="\${css.label}">Volume</span>\`;
    const volRow = document.createElement('div');
    volRow.style.cssText = \`\${css.row}gap:1rem;\`;
    const slider = document.createElement('input');
    slider.type = 'range';
    slider.min = '0';
    slider.max = '100';
    slider.value = String(Math.round(audio.getVolume() * 100));
    slider.style.cssText = 'flex:1;accent-color:var(--arc-color-cyan);cursor:pointer;';
    const sliderVal = document.createElement('span');
    sliderVal.style.cssText = css.value;
    sliderVal.textContent = \`\${slider.value}%\`;
    slider.addEventListener('input', () => {
      const v = Number(slider.value) / 100;
      audio.setVolume(v);
      sliderVal.textContent = \`\${slider.value}%\`;
      volLabel.textContent = \`VOL \${slider.value}%\`;
    });
    volRow.append(slider, sliderVal);
    volSection.append(volRow);

    // ── Mute / Unmute
    const muteSection = document.createElement('div');
    muteSection.style.cssText = 'display:flex;flex-direction:column;gap:.5rem;';
    muteSection.innerHTML = \`<span style="\${css.label}">Mute</span>\`;
    const muteRow = document.createElement('div');
    muteRow.style.cssText = css.row;
    const muteBtn = document.createElement('button');
    muteBtn.className = 'arc-btn arc-btn-danger arc-btn-sm';
    muteBtn.textContent = 'MUTE';
    const unmuteBtn = document.createElement('button');
    unmuteBtn.className = 'arc-btn arc-btn-ghost arc-btn-sm';
    unmuteBtn.textContent = 'UNMUTE';
    const muteStatus = document.createElement('span');
    muteStatus.style.cssText = css.value;
    muteStatus.textContent = audio.isMuted() ? 'isMuted() → true' : 'isMuted() → false';
    const syncMuteUI = () => {
      const m = audio.isMuted();
      muteStatus.textContent = \`isMuted() → \${m}\`;
      mutedBadge.innerHTML = m ? badge('MUTED', 'red') : badge('AUDIO ON', 'green');
    };
    muteBtn.addEventListener('click', () => {
      audio.mute();
      syncMuteUI();
    });
    unmuteBtn.addEventListener('click', () => {
      audio.unmute();
      syncMuteUI();
    });
    muteRow.append(muteBtn, unmuteBtn, muteStatus);
    muteSection.append(muteRow);

    // ── SFX
    const sfxSection = document.createElement('div');
    sfxSection.style.cssText = 'display:flex;flex-direction:column;gap:.75rem;';
    sfxSection.innerHTML = \`<span style="\${css.label}">SFX built-in — clicca per riprodurre</span>\`;
    const log = document.createElement('div');
    log.style.cssText = 'display:flex;flex-direction:column;gap:.25rem;min-height:1rem;';
    const grid = sfxGrid(audio, log);
    sfxSection.append(grid);

    // ── Log
    const logSection = document.createElement('div');
    logSection.style.cssText = 'display:flex;flex-direction:column;gap:.5rem;';
    logSection.innerHTML = \`<span style="\${css.label}">Play log</span>\`;
    const logBox = document.createElement('div');
    logBox.style.cssText = 'padding:.75rem 1rem;background:var(--arc-color-bg-panel);border:1px solid #1a0a2e;min-height:3.5rem;display:flex;flex-direction:column;gap:.2rem;';
    logBox.innerHTML = \`<span style="\${css.note}">Interagisci con i bottoni per vedere il log…</span>\`;

    // override addLog to write to logBox instead
    const originalLog = log;
    sfxSection.querySelectorAll && void 0; // noop

    // rewire grid buttons to log in logBox
    grid.querySelectorAll('button').forEach((btn, i) => {
      const id = AudioManager.SFX[i];
      const colors = ['yellow', 'cyan', 'green', 'red', 'yellow', 'red'];
      btn.onclick = () => {
        audio.play(id);
        addLog(logBox, id, colors[i]);
      };
    });
    logSection.append(logBox);

    // ── sessionStorage note
    const note = document.createElement('p');
    note.style.cssText = \`\${css.note}padding:.5rem .75rem;border-left:2px solid var(--arc-color-cyan);\`;
    note.textContent = 'Volume e mute sono persistiti in sessionStorage. Naviga tra le storie: lo stato rimane.';

    // ── Howler note
    const webAudioNote = document.createElement('p');
    webAudioNote.style.cssText = \`\${css.note}padding:.5rem .75rem;border-left:2px solid var(--arc-color-green, #0f0);\`;
    webAudioNote.innerHTML = \`
      <b style="color:var(--arc-color-text)">Suoni built-in:</b> sintetizzati via
      <code style="color:var(--arc-color-cyan)">Web Audio API</code> — nessun file mp3 necessario.
      Per suoni custom usa <code>audio.register('id', '/path/to/file.mp3')</code> con Howler.js.
    \`;
    wrap.append(statusBar, title, volSection, muteSection, sfxSection, logSection, note, webAudioNote);
    return wrap;
  }
}`,...v.parameters?.docs?.source},description:{story:`@type { import('@storybook/html').StoryObj }`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Auto-binding su .arc-btn',
  render: () => {
    const audio = AudioManager.getInstance();
    const wrap = document.createElement('div');
    wrap.style.cssText = css.wrap;
    wrap.innerHTML = \`
      <h2 style="\${css.heading}">AUTO-BINDING</h2>
      <p style="\${css.note}">
        AudioManager collega automaticamente i suoni a tutti i
        <code style="color:var(--arc-color-cyan)">.arc-btn</code> al DOMContentLoaded.
        Usa <code>audio.bindButtons(root)</code> per elementi aggiunti dinamicamente.
      </p>

      <div style="display:flex;flex-direction:column;gap:1.5rem;">

        <!-- Primary: click → select -->
        <div style="display:flex;flex-direction:column;gap:.5rem;">
          <span style="\${css.label}">click → play('select')</span>
          <div style="\${css.row}">
            <button class="arc-btn arc-btn-primary">INSERT COIN</button>
            <span style="\${css.note}">
              <code>.arc-btn-primary</code> → suono <code>select</code> al click (default)
            </span>
          </div>
        </div>

        <hr style="\${css.sep}">

        <!-- Qualsiasi bottone: hover → blip -->
        <div style="display:flex;flex-direction:column;gap:.5rem;">
          <span style="\${css.label}">mouseenter → play('blip')</span>
          <div style="\${css.row}">
            <button class="arc-btn arc-btn-ghost">GHOST BTN</button>
            <button class="arc-btn arc-btn-danger">DANGER BTN</button>
            <span style="\${css.note}">tutti i <code>.arc-btn</code> → <code>blip</code> sull'hover</span>
          </div>
        </div>

        <hr style="\${css.sep}">

        <!-- Override data-arc-sound-click -->
        <div style="display:flex;flex-direction:column;gap:.5rem;">
          <span style="\${css.label}">data-arc-sound-click="win"</span>
          <div style="\${css.row}">
            <button class="arc-btn arc-btn-primary" data-arc-sound-click="win">YOU WIN!</button>
            <span style="\${css.note}">override: click suona <code>win</code> invece di <code>select</code></span>
          </div>
        </div>

        <hr style="\${css.sep}">

        <!-- Override data-arc-sound-hover -->
        <div style="display:flex;flex-direction:column;gap:.5rem;">
          <span style="\${css.label}">data-arc-sound-hover="error"</span>
          <div style="\${css.row}">
            <button class="arc-btn arc-btn-ghost" data-arc-sound-hover="error">DANGER ZONE</button>
            <span style="\${css.note}">override hover: <code>error</code> invece di <code>blip</code></span>
          </div>
        </div>

        <hr style="\${css.sep}">

        <!-- Silenzioso -->
        <div style="display:flex;flex-direction:column;gap:.5rem;">
          <span style="\${css.label}">data-arc-sound-hover="" — hover silenzioso</span>
          <div style="\${css.row}">
            <button class="arc-btn arc-btn-ghost" data-arc-sound-hover="">SILENT HOVER</button>
            <span style="\${css.note}">stringa vuota → nessun suono sull'hover</span>
          </div>
        </div>

      </div>
    \`;
    audio.bindButtons(wrap);
    return wrap;
  }
}`,...y.parameters?.docs?.source},description:{story:`@type { import('@storybook/html').StoryObj }`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'SFX — tutti i suoni built-in',
  render: () => {
    const audio = AudioManager.getInstance();
    const wrap = document.createElement('div');
    wrap.style.cssText = css.wrap;
    const rows = [{
      id: 'coin',
      trigger: 'Apertura dialog',
      color: 'yellow'
    }, {
      id: 'select',
      trigger: 'Click .arc-btn-primary',
      color: 'cyan'
    }, {
      id: 'blip',
      trigger: 'Hover .arc-btn',
      color: 'green'
    }, {
      id: 'error',
      trigger: 'Validazione fallita',
      color: 'red'
    }, {
      id: 'win',
      trigger: 'Completamento',
      color: 'yellow'
    }, {
      id: 'gameover',
      trigger: 'Manuale',
      color: 'red'
    }];
    const table = document.createElement('div');
    table.style.cssText = 'display:flex;flex-direction:column;gap:.5rem;';

    // Header
    const header = document.createElement('div');
    header.style.cssText = \`display:grid;grid-template-columns:100px 1fr 1fr;gap:.5rem;padding:.4rem .75rem;\${css.label}border-bottom:1px solid #1a0a2e;\`;
    header.innerHTML = '<span>PLAY</span><span>ID</span><span>TRIGGER DEFAULT</span>';
    table.appendChild(header);
    rows.forEach(({
      id,
      trigger,
      color
    }) => {
      const arcColor = \`var(--arc-color-\${color === 'green' ? 'green' : color === 'yellow' ? 'yellow' : color === 'red' ? 'red' : 'cyan'})\`;
      const row = document.createElement('div');
      row.style.cssText = 'display:grid;grid-template-columns:100px 1fr 1fr;gap:.5rem;align-items:center;padding:.35rem .75rem;border-bottom:1px solid #0d001a;';
      const btn = document.createElement('button');
      btn.className = 'arc-btn arc-btn-ghost arc-btn-sm';
      btn.style.cssText = \`border-color:\${arcColor};color:\${arcColor};padding:6px 12px;\`;
      btn.textContent = '▶ PLAY';
      btn.addEventListener('click', () => audio.play(id));
      const idCell = document.createElement('code');
      idCell.style.cssText = \`font-family:var(--arc-font-mono);font-size:.8rem;color:\${arcColor};\`;
      idCell.textContent = \`'\${id}'\`;
      const triggerCell = document.createElement('span');
      triggerCell.style.cssText = \`\${css.note}\`;
      triggerCell.textContent = trigger;
      row.append(btn, idCell, triggerCell);
      table.appendChild(row);
    });
    wrap.innerHTML = \`<h2 style="\${css.heading}">SFX BUILT-IN</h2>\`;
    wrap.appendChild(table);
    const codeEx = document.createElement('pre');
    codeEx.style.cssText = 'font-family:var(--arc-font-mono);font-size:.72rem;color:var(--arc-color-text-muted);background:var(--arc-color-bg-panel);padding:1rem;margin:0;line-height:1.7;overflow:auto;';
    codeEx.textContent = ['import { AudioManager } from \\'@davide03memoli/arcade-ui\\'', '', 'const audio = AudioManager.getInstance()', '', 'audio.play(\\'coin\\')      // apertura dialog', 'audio.play(\\'select\\')    // conferma', 'audio.play(\\'blip\\')      // navigazione', 'audio.play(\\'error\\')     // errore', 'audio.play(\\'win\\')       // vittoria', 'audio.play(\\'gameover\\')  // game over'].join('\\n');
    wrap.appendChild(codeEx);
    return wrap;
  }
}`,...b.parameters?.docs?.source},description:{story:`@type { import('@storybook/html').StoryObj }`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Playground — scenario reale',
  render: () => {
    const audio = AudioManager.getInstance();
    const wrap = document.createElement('div');
    wrap.style.cssText = \`\${css.wrap}max-width:560px;\`;
    wrap.innerHTML = \`
      <h2 style="\${css.heading}">
        <span style="color:var(--arc-color-yellow)">★</span>
        STAGE CLEAR
      </h2>
      <p style="\${css.note}">
        Esempio di scenario: un pannello con bottoni che usano i suoni built-in
        e override tramite attributi data-*.
      </p>

      <div class="arc-panel arc-panel-cyan" style="gap:1rem;">
        <div class="arc-panel-header">
          <span style="font-family:var(--arc-font-pixel);font-size:.85rem;">PLAYER STATS</span>
          <span class="arc-badge arc-badge-yellow arc-badge-pulse" style="margin-left:auto;">LEVEL 7</span>
        </div>

        <div class="arc-panel-body" style="display:flex;flex-direction:column;gap:.5rem;font-family:var(--arc-font-mono);font-size:.8rem;">
          <div style="display:flex;justify-content:space-between;">
            <span>SCORE</span>
            <span style="color:var(--arc-color-yellow)">024,800</span>
          </div>
          <div style="display:flex;justify-content:space-between;">
            <span>LIVES</span>
            <span style="color:var(--arc-color-red)">♥ ♥ ♥</span>
          </div>
          <div style="display:flex;justify-content:space-between;">
            <span>TIME</span>
            <span style="color:var(--arc-color-cyan)">02:34</span>
          </div>
        </div>

        <div class="arc-panel-footer" style="gap:.75rem;">
          <!-- Primary: auto → select -->
          <button class="arc-btn arc-btn-primary">
            CONTINUE
          </button>

          <!-- Win sound on click -->
          <button class="arc-btn arc-btn-ghost" data-arc-sound-click="win">
            SAVE &amp; EXIT
          </button>

          <!-- Error on hover, gameover on click -->
          <button class="arc-btn arc-btn-danger"
            data-arc-sound-hover="error"
            data-arc-sound-click="gameover">
            QUIT
          </button>
        </div>
      </div>

      <p style="\${css.note}">
        <code style="color:var(--arc-color-cyan)">CONTINUE</code> → click suona <code>select</code> (default .arc-btn-primary)<br>
        <code style="color:var(--arc-color-cyan)">SAVE &amp; EXIT</code> → click suona <code>win</code> (data-arc-sound-click)<br>
        <code style="color:var(--arc-color-red)">QUIT</code> → hover suona <code>error</code>, click suona <code>gameover</code>
      </p>
    \`;
    audio.bindButtons(wrap);
    return wrap;
  }
}`,...x.parameters?.docs?.source},description:{story:`@type { import('@storybook/html').StoryObj }`,...x.parameters?.docs?.description}}},S=[`Overview`,`AutoBinding`,`SFXShowcase`,`Playground`]}))();export{y as AutoBinding,v as Overview,x as Playground,b as SFXShowcase,S as __namedExportsOrder,g as default};