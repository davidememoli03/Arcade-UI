import{n as e}from"./chunk-DnJy8xQt.js";function t({label:e,variant:t,size:n,disabled:r}){return`<button class="arc-btn ${`arc-btn-${t}`} ${n===`default`?``:`arc-btn-${n}`}" ${r?`disabled`:``}>${e}</button>`}var n,r,i,a,o,s,c,l,u;e((()=>{n={title:`Components/Button`,argTypes:{label:{control:`text`},variant:{control:{type:`select`},options:[`primary`,`ghost`,`danger`]},size:{control:{type:`select`},options:[`sm`,`default`,`lg`]},disabled:{control:`boolean`}},args:{label:`INSERT COIN`,variant:`primary`,size:`default`,disabled:!1},parameters:{docs:{description:{component:`@type { import('@storybook/html').Meta }`}}}},r={args:{variant:`primary`},render:t},i={args:{variant:`ghost`},render:t},a={args:{variant:`danger`},render:t},o={args:{variant:`primary`,size:`sm`},render:t},s={args:{variant:`primary`,size:`lg`},render:t},c={args:{variant:`primary`,disabled:!0},render:t},l={render:()=>`
    <div style="display:flex;gap:16px;align-items:center;flex-wrap:wrap;padding:2rem;">
      <button class="arc-btn arc-btn-primary arc-btn-sm">SM</button>
      <button class="arc-btn arc-btn-primary">PRIMARY</button>
      <button class="arc-btn arc-btn-primary arc-btn-lg">LG</button>
      <button class="arc-btn arc-btn-ghost">GHOST</button>
      <button class="arc-btn arc-btn-danger">DANGER</button>
      <button class="arc-btn arc-btn-primary" disabled>DISABLED</button>
    </div>
  `},r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary'
  },
  render: renderBtn
}`,...r.parameters?.docs?.source},description:{story:`@type { import('@storybook/html').StoryObj }`,...r.parameters?.docs?.description}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'ghost'
  },
  render: renderBtn
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'danger'
  },
  render: renderBtn
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'sm'
  },
  render: renderBtn
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'lg'
  },
  render: renderBtn
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    disabled: true
  },
  render: renderBtn
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => \`
    <div style="display:flex;gap:16px;align-items:center;flex-wrap:wrap;padding:2rem;">
      <button class="arc-btn arc-btn-primary arc-btn-sm">SM</button>
      <button class="arc-btn arc-btn-primary">PRIMARY</button>
      <button class="arc-btn arc-btn-primary arc-btn-lg">LG</button>
      <button class="arc-btn arc-btn-ghost">GHOST</button>
      <button class="arc-btn arc-btn-danger">DANGER</button>
      <button class="arc-btn arc-btn-primary" disabled>DISABLED</button>
    </div>
  \`
}`,...l.parameters?.docs?.source}}},u=[`Primary`,`Ghost`,`Danger`,`Small`,`Large`,`Disabled`,`AllVariants`]}))();export{l as AllVariants,a as Danger,c as Disabled,i as Ghost,s as Large,r as Primary,o as Small,u as __namedExportsOrder,n as default};