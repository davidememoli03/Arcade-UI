import{n as e}from"./chunk-DnJy8xQt.js";var t,n,r,i,a,o;e((()=>{t={title:`Tokens/Animation`,parameters:{layout:`padded`,docs:{description:{component:"Keyframe base da `tokens/animation.css`. Per le utility `.arc-anim-*` vedi **Effects → Animations**."}}}},n={render:()=>`
    <div style="padding:2rem;font-family:var(--arc-font-pixel);color:var(--arc-color-cyan);">
      <span style="animation:blink var(--arc-anim-normal) var(--arc-ease-step) infinite;">
        ▮ CURSOR
      </span>
    </div>
  `},r={render:()=>`
    <div style="padding:2rem;">
      <button class="arcade-btn"
        style="animation:pulse-glow var(--arc-anim-slow) var(--arc-ease-pixel) infinite;">
        PULSE
      </button>
    </div>
  `},i={render:()=>`
    <div style="padding:2rem;font-family:var(--arc-font-pixel);font-size:2rem;color:var(--arc-color-red);">
      <span style="display:inline-block;animation:glitch var(--arc-anim-fast) var(--arc-ease-arcade) infinite;">
        GLITCH
      </span>
    </div>
  `},a={name:`keyframes`,render:()=>`
    <p style="font-family:var(--arc-font-mono);color:var(--arc-color-text-muted);padding:1rem;">
      Usa <strong>Blink</strong>, <strong>PulseGlow</strong> o <strong>Glitch</strong> qui sotto,
      oppure <a href="?path=/story/effects-animations--showcase" style="color:var(--arc-color-cyan)">Effects / Animations</a> per tutte le utility.
    </p>
  `},n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => \`
    <div style="padding:2rem;font-family:var(--arc-font-pixel);color:var(--arc-color-cyan);">
      <span style="animation:blink var(--arc-anim-normal) var(--arc-ease-step) infinite;">
        ▮ CURSOR
      </span>
    </div>
  \`
}`,...n.parameters?.docs?.source}}},r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => \`
    <div style="padding:2rem;">
      <button class="arcade-btn"
        style="animation:pulse-glow var(--arc-anim-slow) var(--arc-ease-pixel) infinite;">
        PULSE
      </button>
    </div>
  \`
}`,...r.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => \`
    <div style="padding:2rem;font-family:var(--arc-font-pixel);font-size:2rem;color:var(--arc-color-red);">
      <span style="display:inline-block;animation:glitch var(--arc-anim-fast) var(--arc-ease-arcade) infinite;">
        GLITCH
      </span>
    </div>
  \`
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'keyframes',
  render: () => \`
    <p style="font-family:var(--arc-font-mono);color:var(--arc-color-text-muted);padding:1rem;">
      Usa <strong>Blink</strong>, <strong>PulseGlow</strong> o <strong>Glitch</strong> qui sotto,
      oppure <a href="?path=/story/effects-animations--showcase" style="color:var(--arc-color-cyan)">Effects / Animations</a> per tutte le utility.
    </p>
  \`
}`,...a.parameters?.docs?.source},description:{story:"Alias per link storici `?path=/story/tokens-animation--keyframes`.",...a.parameters?.docs?.description}}},o=[`Blink`,`PulseGlow`,`Glitch`,`Keyframes`]}))();export{n as Blink,i as Glitch,a as Keyframes,r as PulseGlow,o as __namedExportsOrder,t as default};