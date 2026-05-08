import{n as e}from"./chunk-DnJy8xQt.js";function t({variant:e,open:t,title:n,body:r}){return`
    <details class="arc-accordion arc-accordion-${e}" ${t?`open`:``}>
      <summary class="arc-accordion-summary">${n}</summary>
      <div class="arc-accordion-content">${r}</div>
    </details>
  `}var n,r,i,a,o,s,c,l;e((()=>{n={title:`Components/Accordion`,decorators:[e=>`<div style="padding:2rem;max-width:720px;">${e()}</div>`],argTypes:{variant:{control:{type:`select`},options:[`cyan`,`red`,`yellow`,`green`]},open:{control:`boolean`},title:{control:`text`},body:{control:`text`}},args:{variant:`cyan`,open:!1,title:`SYSTEM STATUS`,body:`All arcade subsystems are online. Insert coin to continue mission.`},parameters:{docs:{description:{component:`@type { import('@storybook/html').Meta }`}}}},r={render:t},i={args:{open:!0},render:t},a={args:{variant:`red`},render:t},o={args:{variant:`yellow`},render:t},s={args:{variant:`green`},render:t},c={render:()=>`
    <div>
      <details class="arc-accordion arc-accordion-cyan" open>
        <summary class="arc-accordion-summary">PLAYER PROFILE</summary>
        <div class="arc-accordion-content">
          Alias: NEON-RUNNER_07<br />
          Rank: Captain
        </div>
      </details>
      <details class="arc-accordion arc-accordion-yellow">
        <summary class="arc-accordion-summary">MISSIONS</summary>
        <div class="arc-accordion-content">
          3 active missions are available. Select one to start.
        </div>
      </details>
      <details class="arc-accordion arc-accordion-red">
        <summary class="arc-accordion-summary">ALERTS</summary>
        <div class="arc-accordion-content">
          Enemy drones detected near sector 9.
        </div>
      </details>
    </div>
  `},r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: renderAccordion
}`,...r.parameters?.docs?.source},description:{story:`@type { import('@storybook/html').StoryObj }`,...r.parameters?.docs?.description}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    open: true
  },
  render: renderAccordion
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'red'
  },
  render: renderAccordion
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'yellow'
  },
  render: renderAccordion
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'green'
  },
  render: renderAccordion
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => \`
    <div>
      <details class="arc-accordion arc-accordion-cyan" open>
        <summary class="arc-accordion-summary">PLAYER PROFILE</summary>
        <div class="arc-accordion-content">
          Alias: NEON-RUNNER_07<br />
          Rank: Captain
        </div>
      </details>
      <details class="arc-accordion arc-accordion-yellow">
        <summary class="arc-accordion-summary">MISSIONS</summary>
        <div class="arc-accordion-content">
          3 active missions are available. Select one to start.
        </div>
      </details>
      <details class="arc-accordion arc-accordion-red">
        <summary class="arc-accordion-summary">ALERTS</summary>
        <div class="arc-accordion-content">
          Enemy drones detected near sector 9.
        </div>
      </details>
    </div>
  \`
}`,...c.parameters?.docs?.source}}},l=[`Default`,`Opened`,`Red`,`Yellow`,`Green`,`Stack`]}))();export{r as Default,s as Green,i as Opened,a as Red,c as Stack,o as Yellow,l as __namedExportsOrder,n as default};