import{n as e}from"./chunk-DnJy8xQt.js";function t({variant:e,glass:t,title:n,body:r}){return`
    <div class="arc-panel arc-panel-${e} ${t?`arc-panel-glass`:``}">
      <div class="arc-panel-header">${n}</div>
      <div class="arc-panel-body">${r}</div>
      <div class="arc-panel-footer">
        <button class="arc-btn arc-btn-primary arc-btn-sm">SAVE</button>
        <button class="arc-btn arc-btn-ghost arc-btn-sm">CANCEL</button>
      </div>
    </div>
  `}var n,r,i,a,o,s,c,l,u;e((()=>{n={title:`Components/Panel`,decorators:[e=>`<div style="padding:2rem;">${e()}</div>`],argTypes:{variant:{control:{type:`select`},options:[`cyan`,`red`,`yellow`,`green`]},glass:{control:`boolean`},title:{control:`text`},body:{control:`text`}},args:{variant:`cyan`,glass:!1,title:`GAME OVER`,body:`You scored 42,000 points. Enter your name to save.`},parameters:{docs:{description:{component:`@type { import('@storybook/html').Meta }`}}}},r={args:{variant:`cyan`},render:t},i={args:{variant:`red`},render:t},a={args:{variant:`yellow`},render:t},o={args:{variant:`green`},render:t},s={args:{variant:`cyan`,glass:!0},render:t,parameters:{backgrounds:{default:`arcade-dark`}}},c={render:()=>`
    <div class="arc-panel arc-panel-cyan">
      <div class="arc-panel-header">HIGH SCORE</div>
      <div class="arc-panel-body">
        Congratulations! You reached the top of the leaderboard.
      </div>
    </div>
  `},l={render:()=>`
    <div style="display:flex;flex-direction:column;gap:2rem;padding:2rem;">
      <div class="arc-panel arc-panel-cyan">
        <div class="arc-panel-header">CYAN</div>
        <div class="arc-panel-body">Variante default.</div>
      </div>
      <div class="arc-panel arc-panel-red">
        <div class="arc-panel-header">RED</div>
        <div class="arc-panel-body">Pericolo / errore.</div>
      </div>
      <div class="arc-panel arc-panel-yellow">
        <div class="arc-panel-header">YELLOW</div>
        <div class="arc-panel-body">Avviso / monete.</div>
      </div>
      <div class="arc-panel arc-panel-green">
        <div class="arc-panel-header">GREEN</div>
        <div class="arc-panel-body">Successo / vittoria.</div>
      </div>
    </div>
  `},r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'cyan'
  },
  render: renderPanel
}`,...r.parameters?.docs?.source},description:{story:`@type { import('@storybook/html').StoryObj }`,...r.parameters?.docs?.description}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'red'
  },
  render: renderPanel
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'yellow'
  },
  render: renderPanel
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'green'
  },
  render: renderPanel
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'cyan',
    glass: true
  },
  render: renderPanel,
  parameters: {
    backgrounds: {
      default: 'arcade-dark'
    }
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => \`
    <div class="arc-panel arc-panel-cyan">
      <div class="arc-panel-header">HIGH SCORE</div>
      <div class="arc-panel-body">
        Congratulations! You reached the top of the leaderboard.
      </div>
    </div>
  \`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => \`
    <div style="display:flex;flex-direction:column;gap:2rem;padding:2rem;">
      <div class="arc-panel arc-panel-cyan">
        <div class="arc-panel-header">CYAN</div>
        <div class="arc-panel-body">Variante default.</div>
      </div>
      <div class="arc-panel arc-panel-red">
        <div class="arc-panel-header">RED</div>
        <div class="arc-panel-body">Pericolo / errore.</div>
      </div>
      <div class="arc-panel arc-panel-yellow">
        <div class="arc-panel-header">YELLOW</div>
        <div class="arc-panel-body">Avviso / monete.</div>
      </div>
      <div class="arc-panel arc-panel-green">
        <div class="arc-panel-header">GREEN</div>
        <div class="arc-panel-body">Successo / vittoria.</div>
      </div>
    </div>
  \`
}`,...l.parameters?.docs?.source}}},u=[`Cyan`,`Red`,`Yellow`,`Green`,`Glass`,`NoFooter`,`AllVariants`]}))();export{l as AllVariants,r as Cyan,s as Glass,o as Green,c as NoFooter,i as Red,a as Yellow,u as __namedExportsOrder,n as default};