import{n as e}from"./chunk-DnJy8xQt.js";function t(e){e.querySelectorAll(`.arc-dropdown-trigger`).forEach(e=>{let t=e.cloneNode(!0);e.replaceWith(t),t.addEventListener(`click`,()=>{let e=t.getAttribute(`aria-expanded`)===`true`;t.setAttribute(`aria-expanded`,String(!e))})}),e.querySelectorAll(`.arc-dropdown-option:not(.arc-dropdown-option--disabled)`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.closest(`.arc-dropdown`),n=t.querySelector(`.arc-dropdown-trigger`),r=t.querySelector(`.arc-dropdown-value`);r&&(r.textContent=e.textContent.replace(` ◀`,``).trim()),t.querySelectorAll(`.arc-dropdown-option`).forEach(e=>e.classList.remove(`arc-dropdown-option--selected`)),e.classList.add(`arc-dropdown-option--selected`),n.setAttribute(`aria-expanded`,`false`)})}),document.addEventListener(`click`,t=>{t.target.closest(`.arc-dropdown`)||e.querySelectorAll(`.arc-dropdown-trigger[aria-expanded="true"]`).forEach(e=>{e.setAttribute(`aria-expanded`,`false`)})})}function n({variant:e=`arc-dropdown-cyan`,value:t=`SELECT OPTION`,options:n=[],disabled:r=!1}={}){return`
    <div class="arc-dropdown ${e}${r?` arc-dropdown-disabled`:``}">
      <button class="arc-dropdown-trigger" aria-haspopup="listbox" aria-expanded="false"${r?` disabled`:``}>
        <span class="arc-dropdown-value">${t}</span>
        <span class="arc-dropdown-chevron" aria-hidden="true"></span>
      </button>
      <ul class="arc-dropdown-menu" role="listbox">
        ${n.map(({label:e,selected:t,disabled:n})=>`
          <li class="arc-dropdown-option${t?` arc-dropdown-option-selected`:``}${n?` arc-dropdown-option-disabled`:``}"
              role="option"
              ${n?`aria-disabled="true"`:``}>
            ${e}
          </li>`).join(``)}
      </ul>
    </div>`}var r,i,a,o,s,c,l,u,d,f,p,m,h,g,_;e((()=>{r=[{label:`EASY`},{label:`NORMAL`,selected:!0},{label:`HARD`},{label:`NIGHTMARE`,disabled:!0}],i=[{label:`LASER CANNON`},{label:`PLASMA RIFLE`,selected:!0},{label:`RAIL GUN`},{label:`PHOTON TORPEDO`}],a={title:`Components/Dropdown`,decorators:[e=>{let n=document.createElement(`div`);return n.style.cssText=`padding:3rem;display:flex;gap:2rem;flex-wrap:wrap;align-items:flex-start;`,n.innerHTML=e(),setTimeout(()=>t(n),0),n}],parameters:{docs:{description:{component:`@type { import('@storybook/html').Meta }`}}}},o={render:()=>n({options:r})},s={render:()=>n({options:r}).replace(`aria-expanded="false"`,`aria-expanded="true"`)},c={render:()=>n({variant:`arc-dropdown-cyan`,value:`SELECT WEAPON`,options:i})},l={render:()=>n({variant:`arc-dropdown-green`,value:`SELECT LEVEL`,options:[{label:`WORLD 1`},{label:`WORLD 2`,selected:!0},{label:`WORLD 3`},{label:`WORLD 4 (LOCKED)`,disabled:!0}]})},u={render:()=>n({variant:`arc-dropdown-red`,value:`SELECT LIVES`,options:[{label:`1 LIFE`,selected:!0},{label:`3 LIVES`},{label:`5 LIVES`},{label:`INFINITE`}]})},d={render:()=>n({variant:`arc-dropdown-yellow`,value:`SELECT SPEED`,options:[{label:`SLOW`},{label:`NORMAL`,selected:!0},{label:`FAST`},{label:`TURBO`}]})},f={render:()=>n({variant:`arc-dropdown-purple`,value:`SELECT MAGIC`,options:[{label:`NONE`},{label:`FIRE`,selected:!0},{label:`ICE`},{label:`LIGHTNING`}]})},p={render:()=>n({variant:`arc-dropdown-cyan`,value:`UNAVAILABLE`,disabled:!0,options:r})},m={render:()=>n({variant:`arc-dropdown-cyan`,value:`SELECT DIFFICULTY`,options:r})},h={render:()=>`
    <div style="display:flex;flex-direction:column;gap:1.5rem;width:220px;">
      ${n({variant:`arc-dropdown-cyan`,value:`CYAN`,options:r})}
      ${n({variant:`arc-dropdown-green`,value:`GREEN`,options:r})}
      ${n({variant:`arc-dropdown-red`,value:`RED`,options:r})}
      ${n({variant:`arc-dropdown-yellow`,value:`YELLOW`,options:r})}
      ${n({variant:`arc-dropdown-purple`,value:`PURPLE`,options:r})}
    </div>
  `},g={render:()=>`
    <div class="arc-panel arc-panel-cyan" style="max-width:380px;width:100%;">
      <div class="arc-panel-header">GAME SETTINGS</div>
      <div class="arc-panel-body" style="display:flex;flex-direction:column;gap:1.5rem;">
        <div class="arc-input-wrapper">
          <label class="arc-label">DIFFICULTY</label>
          ${n({variant:`arc-dropdown-cyan`,value:`NORMAL`,options:r})}
        </div>
        <div class="arc-input-wrapper">
          <label class="arc-label">WEAPON</label>
          ${n({variant:`arc-dropdown-yellow`,value:`PLASMA RIFLE`,options:i})}
        </div>
      </div>
      <div class="arc-panel-footer">
        <button class="arc-btn arc-btn-primary">SAVE</button>
        <button class="arc-btn arc-btn-ghost">RESET</button>
      </div>
    </div>
  `},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => dropdown({
    options: DIFFICULTY_OPTIONS
  })
}`,...o.parameters?.docs?.source},description:{story:`@type { import('@storybook/html').StoryObj }`,...o.parameters?.docs?.description}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => dropdown({
    options: DIFFICULTY_OPTIONS
  }).replace('aria-expanded="false"', 'aria-expanded="true"')
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => dropdown({
    variant: 'arc-dropdown-cyan',
    value: 'SELECT WEAPON',
    options: WEAPON_OPTIONS
  })
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => dropdown({
    variant: 'arc-dropdown-green',
    value: 'SELECT LEVEL',
    options: [{
      label: 'WORLD 1'
    }, {
      label: 'WORLD 2',
      selected: true
    }, {
      label: 'WORLD 3'
    }, {
      label: 'WORLD 4 (LOCKED)',
      disabled: true
    }]
  })
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => dropdown({
    variant: 'arc-dropdown-red',
    value: 'SELECT LIVES',
    options: [{
      label: '1 LIFE',
      selected: true
    }, {
      label: '3 LIVES'
    }, {
      label: '5 LIVES'
    }, {
      label: 'INFINITE'
    }]
  })
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => dropdown({
    variant: 'arc-dropdown-yellow',
    value: 'SELECT SPEED',
    options: [{
      label: 'SLOW'
    }, {
      label: 'NORMAL',
      selected: true
    }, {
      label: 'FAST'
    }, {
      label: 'TURBO'
    }]
  })
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => dropdown({
    variant: 'arc-dropdown-purple',
    value: 'SELECT MAGIC',
    options: [{
      label: 'NONE'
    }, {
      label: 'FIRE',
      selected: true
    }, {
      label: 'ICE'
    }, {
      label: 'LIGHTNING'
    }]
  })
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => dropdown({
    variant: 'arc-dropdown-cyan',
    value: 'UNAVAILABLE',
    disabled: true,
    options: DIFFICULTY_OPTIONS
  })
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => dropdown({
    variant: 'arc-dropdown-cyan',
    value: 'SELECT DIFFICULTY',
    options: DIFFICULTY_OPTIONS
  })
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => \`
    <div style="display:flex;flex-direction:column;gap:1.5rem;width:220px;">
      \${dropdown({
    variant: 'arc-dropdown-cyan',
    value: 'CYAN',
    options: DIFFICULTY_OPTIONS
  })}
      \${dropdown({
    variant: 'arc-dropdown-green',
    value: 'GREEN',
    options: DIFFICULTY_OPTIONS
  })}
      \${dropdown({
    variant: 'arc-dropdown-red',
    value: 'RED',
    options: DIFFICULTY_OPTIONS
  })}
      \${dropdown({
    variant: 'arc-dropdown-yellow',
    value: 'YELLOW',
    options: DIFFICULTY_OPTIONS
  })}
      \${dropdown({
    variant: 'arc-dropdown-purple',
    value: 'PURPLE',
    options: DIFFICULTY_OPTIONS
  })}
    </div>
  \`
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => \`
    <div class="arc-panel arc-panel-cyan" style="max-width:380px;width:100%;">
      <div class="arc-panel-header">GAME SETTINGS</div>
      <div class="arc-panel-body" style="display:flex;flex-direction:column;gap:1.5rem;">
        <div class="arc-input-wrapper">
          <label class="arc-label">DIFFICULTY</label>
          \${dropdown({
    variant: 'arc-dropdown-cyan',
    value: 'NORMAL',
    options: DIFFICULTY_OPTIONS
  })}
        </div>
        <div class="arc-input-wrapper">
          <label class="arc-label">WEAPON</label>
          \${dropdown({
    variant: 'arc-dropdown-yellow',
    value: 'PLASMA RIFLE',
    options: WEAPON_OPTIONS
  })}
        </div>
      </div>
      <div class="arc-panel-footer">
        <button class="arc-btn arc-btn-primary">SAVE</button>
        <button class="arc-btn arc-btn-ghost">RESET</button>
      </div>
    </div>
  \`
}`,...g.parameters?.docs?.source}}},_=[`Default`,`Open`,`Cyan`,`Green`,`Red`,`Yellow`,`Purple`,`Disabled`,`WithDisabledOption`,`AllVariants`,`InContext`]}))();export{h as AllVariants,c as Cyan,o as Default,p as Disabled,l as Green,g as InContext,s as Open,f as Purple,u as Red,m as WithDisabledOption,d as Yellow,_ as __namedExportsOrder,a as default};