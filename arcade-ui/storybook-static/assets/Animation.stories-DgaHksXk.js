import{n as e}from"./chunk-DnJy8xQt.js";var t,n,r,i,a;e((()=>{t={title:`Tokens/Animation`,parameters:{docs:{description:{component:`@type { import('@storybook/html').Meta }`}}}},n={render:()=>`
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
  `},n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => \`
    <div style="padding:2rem;font-family:var(--arc-font-pixel);color:var(--arc-color-cyan);">
      <span style="animation:blink var(--arc-anim-normal) var(--arc-ease-step) infinite;">
        ▮ CURSOR
      </span>
    </div>
  \`
}`,...n.parameters?.docs?.source},description:{story:`@type { import('@storybook/html').StoryObj }`,...n.parameters?.docs?.description}}},r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}},a=[`Blink`,`PulseGlow`,`Glitch`]}))();export{n as Blink,i as Glitch,r as PulseGlow,a as __namedExportsOrder,t as default};