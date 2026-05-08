import{n as e}from"./chunk-DnJy8xQt.js";function t({cls:e,token:t,label:n,sample:r}){return`
    <div style="margin-bottom:2rem;border-bottom:1px solid rgb(0 119 119 / 35%);padding-bottom:1.25rem;">
      <div style="font-size:.65rem;color:var(--arc-color-text-muted);font-family:var(--arc-font-mono);margin-bottom:.5rem;">
        <strong>.${e}</strong> · ${t}-*
      </div>
      <div class="${e} arc-glow-cyan">${r}</div>
    </div>`}var n,r,i,a,o,s,c;e((()=>{n={title:`Tokens/Typography`,tags:[`autodocs`],parameters:{docs:{description:{component:"Tipografia ufficiale: Press Start 2P (display), VT323 (body), Share Tech Mono (dati/codice). Token da `--arc-font-*` e utilità `.arc-text-*`. Caricamento: woff2 self-hosted in `/fonts/` + Google Fonts."}}}},r=[{cls:`arc-text-display`,token:`--arc-text-display`,label:`Display`,sample:`GAME OVER`},{cls:`arc-text-h1`,token:`--arc-text-h1`,label:`H1`,sample:`INSERT COIN`},{cls:`arc-text-h2`,token:`--arc-text-h2`,label:`H2`,sample:`High Scores`},{cls:`arc-text-h3`,token:`--arc-text-h3`,label:`H3`,sample:`Player One`},{cls:`arc-text-body`,token:`--arc-text-body`,label:`Body`,sample:`Press start to continue...`},{cls:`arc-text-caption`,token:`--arc-text-caption`,label:`Caption`,sample:`© 1984 ARCADE INC`}],i={name:`Scale (utilities)`,render:()=>`<div style="padding:2rem;max-width:640px;">${r.map(t).join(``)}</div>`},a={name:`Font families`,render:()=>`
<div style="padding:2rem;display:flex;flex-direction:column;gap:2rem;max-width:720px;">
  <section>
    <div style="font-family:var(--arc-font-mono);font-size:11px;color:var(--arc-color-text-muted);margin-bottom:.5rem;">
      --arc-font-display / --arc-font-pixel · Press Start 2P
    </div>
    <div style="font-family:var(--arc-font-display);font-size:18px;color:var(--arc-color-cyan);text-shadow:0 0 12px var(--arc-color-cyan-glow);line-height:1.5;">
      PLAYER 1 · HIGH SCORE 1,248,000
    </div>
  </section>
  <section>
    <div style="font-family:var(--arc-font-mono);font-size:11px;color:var(--arc-color-text-muted);margin-bottom:.5rem;">
      --arc-font-body / --arc-font-terminal · VT323
    </div>
    <div style="font-family:var(--arc-font-body);font-size:22px;color:var(--arc-color-text-muted);line-height:1.5;">
      Insert coin to continue. System ready. All your base are belong to us.
    </div>
  </section>
  <section>
    <div style="font-family:var(--arc-font-mono);font-size:11px;color:var(--arc-color-text-muted);margin-bottom:.5rem;">
      --arc-font-mono · Share Tech Mono
    </div>
    <div style="font-family:var(--arc-font-mono);font-size:16px;color:var(--arc-color-green);line-height:1.6;">
      MEM $8021:0A4F  IRQ:002  CRC:0x4ADE
    </div>
  </section>
</div>`},o={name:`Mono utility`,render:()=>`
<div style="padding:2rem;">
  <p style="font-family:var(--arc-font-mono);font-size:11px;color:var(--arc-color-text-muted);margin:0 0 1rem;">
    Class: <code style="color:var(--arc-color-cyan)">.arc-text-mono</code>
  </p>
  <div class="arc-text-mono arc-glow-green" style="color:var(--arc-color-green);max-width:480px;">
    LEADERBOARD_JSON · {"rank":1,"name":"ACE","score":999999}
  </div>
</div>`},s={name:`HUD sample (mixed)`,render:()=>`
<div style="padding:2rem;font-family:var(--arc-font-display);color:var(--arc-color-cyan);font-size:11px;line-height:1.8;">
  <div>SCORE <span style="color:var(--arc-color-yellow)">004200</span></div>
  <div>HIGH  <span style="color:var(--arc-color-yellow)">009999</span></div>
  <div style="font-family:var(--arc-font-body);font-size:20px;color:var(--arc-color-text-muted);margin-top:.75rem;">
    Round 3 — Boss incoming!
  </div>
  <div style="font-family:var(--arc-font-mono);font-size:13px;color:var(--arc-color-green);margin-top:.5rem;">
    RNG seed: 0xC0FFEE · latency 12ms
  </div>
</div>`},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Scale (utilities)',
  render: () => \`<div style="padding:2rem;max-width:640px;">\${scale.map(scaleRow).join('')}</div>\`
}`,...i.parameters?.docs?.source},description:{story:"Scala tipografica con classi utility `.arc-text-*`.",...i.parameters?.docs?.description}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Font families',
  render: () => \`
<div style="padding:2rem;display:flex;flex-direction:column;gap:2rem;max-width:720px;">
  <section>
    <div style="font-family:var(--arc-font-mono);font-size:11px;color:var(--arc-color-text-muted);margin-bottom:.5rem;">
      --arc-font-display / --arc-font-pixel · Press Start 2P
    </div>
    <div style="font-family:var(--arc-font-display);font-size:18px;color:var(--arc-color-cyan);text-shadow:0 0 12px var(--arc-color-cyan-glow);line-height:1.5;">
      PLAYER 1 · HIGH SCORE 1,248,000
    </div>
  </section>
  <section>
    <div style="font-family:var(--arc-font-mono);font-size:11px;color:var(--arc-color-text-muted);margin-bottom:.5rem;">
      --arc-font-body / --arc-font-terminal · VT323
    </div>
    <div style="font-family:var(--arc-font-body);font-size:22px;color:var(--arc-color-text-muted);line-height:1.5;">
      Insert coin to continue. System ready. All your base are belong to us.
    </div>
  </section>
  <section>
    <div style="font-family:var(--arc-font-mono);font-size:11px;color:var(--arc-color-text-muted);margin-bottom:.5rem;">
      --arc-font-mono · Share Tech Mono
    </div>
    <div style="font-family:var(--arc-font-mono);font-size:16px;color:var(--arc-color-green);line-height:1.6;">
      MEM $8021:0A4F  IRQ:002  CRC:0x4ADE
    </div>
  </section>
</div>\`
}`,...a.parameters?.docs?.source},description:{story:`Tre famiglie: display, body, monospace (anteprima diretta).`,...a.parameters?.docs?.description}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Mono utility',
  render: () => \`
<div style="padding:2rem;">
  <p style="font-family:var(--arc-font-mono);font-size:11px;color:var(--arc-color-text-muted);margin:0 0 1rem;">
    Class: <code style="color:var(--arc-color-cyan)">.arc-text-mono</code>
  </p>
  <div class="arc-text-mono arc-glow-green" style="color:var(--arc-color-green);max-width:480px;">
    LEADERBOARD_JSON · {"rank":1,"name":"ACE","score":999999}
  </div>
</div>\`
}`,...o.parameters?.docs?.source},description:{story:"`.arc-text-mono` per blocchi dati / diagnostica.",...o.parameters?.docs?.description}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'HUD sample (mixed)',
  render: () => \`
<div style="padding:2rem;font-family:var(--arc-font-display);color:var(--arc-color-cyan);font-size:11px;line-height:1.8;">
  <div>SCORE <span style="color:var(--arc-color-yellow)">004200</span></div>
  <div>HIGH  <span style="color:var(--arc-color-yellow)">009999</span></div>
  <div style="font-family:var(--arc-font-body);font-size:20px;color:var(--arc-color-text-muted);margin-top:.75rem;">
    Round 3 — Boss incoming!
  </div>
  <div style="font-family:var(--arc-font-mono);font-size:13px;color:var(--arc-color-green);margin-top:.5rem;">
    RNG seed: 0xC0FFEE · latency 12ms
  </div>
</div>\`
}`,...s.parameters?.docs?.source},description:{story:`Confronto rapido uppercase + numeri (typical HUD).`,...s.parameters?.docs?.description}}},c=[`Scale`,`FontFamilies`,`MonoUtility`,`ArcadeHudSample`]}))();export{s as ArcadeHudSample,a as FontFamilies,o as MonoUtility,i as Scale,c as __namedExportsOrder,n as default};