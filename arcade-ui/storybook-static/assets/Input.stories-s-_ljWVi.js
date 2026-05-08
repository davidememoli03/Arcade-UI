import{n as e}from"./chunk-DnJy8xQt.js";var t,n,r,i,a,o,s,c,l;e((()=>{t={title:`Components/Input`,decorators:[e=>`<div style="padding:2rem;max-width:400px;">${e()}</div>`],parameters:{docs:{description:{component:`@type { import('@storybook/html').Meta }`}}}},n={render:()=>`
    <div class="arc-input-wrapper">
      <label class="arc-label" for="name">PLAYER NAME</label>
      <input
        id="name"
        class="arc-input"
        type="text"
        placeholder="ENTER NAME_"
        aria-describedby="name-hint"
      />
      <span id="name-hint" class="arc-input-hint">MAX 10 CHARACTERS</span>
    </div>
  `},r={render:()=>`
    <div class="arc-input-wrapper">
      <label class="arc-label" for="code">ACCESS CODE</label>
      <input
        id="code"
        class="arc-input"
        type="text"
        placeholder="XXXX_"
        pattern="[A-Z0-9]{4}"
        maxlength="4"
        aria-describedby="code-hint"
      />
      <span id="code-hint" class="arc-input-hint">4 CHARACTERS — A-Z / 0-9</span>
    </div>
  `},i={render:()=>`
    <div class="arc-input-wrapper">
      <label class="arc-label" for="invalid-input">ACCESS CODE</label>
      <input
        id="invalid-input"
        class="arc-input"
        type="text"
        value="!!!"
        pattern="[A-Z0-9]{4}"
        aria-describedby="invalid-hint"
      />
      <span id="invalid-hint" class="arc-input-hint-error">⚠ INVALID FORMAT</span>
    </div>
  `},a={render:()=>`
    <div class="arc-input-wrapper">
      <label class="arc-label" for="disabled-input">LOCKED FIELD</label>
      <input
        id="disabled-input"
        class="arc-input"
        type="text"
        placeholder="LOCKED_"
        disabled
      />
      <span class="arc-input-hint">THIS FIELD IS READ-ONLY</span>
    </div>
  `},o={render:()=>`
    <div class="arc-input-wrapper">
      <label class="arc-label" for="message">MESSAGE</label>
      <textarea
        id="message"
        class="arc-textarea"
        placeholder="ENTER MESSAGE_"
        aria-describedby="message-hint"
      ></textarea>
      <span id="message-hint" class="arc-input-hint">MAX 200 CHARACTERS</span>
    </div>
  `},s={render:()=>`
    <div class="arc-input-wrapper">
      <label class="arc-label" for="difficulty">DIFFICULTY</label>
      <select id="difficulty" class="arc-select" aria-describedby="diff-hint">
        <option value="">SELECT_</option>
        <option value="easy">EASY</option>
        <option value="normal">NORMAL</option>
        <option value="hard">HARD</option>
        <option value="insane">INSANE</option>
      </select>
      <span id="diff-hint" class="arc-input-hint">CHOOSE DIFFICULTY LEVEL</span>
    </div>
  `},c={render:()=>`
    <div style="display:flex;flex-direction:column;gap:1.5rem;">
      <div class="arc-input-wrapper">
        <label class="arc-label" for="ctrl-name">PLAYER NAME</label>
        <input id="ctrl-name" class="arc-input" type="text" placeholder="ENTER NAME_" />
        <span class="arc-input-hint">MAX 10 CHARACTERS</span>
      </div>
      <div class="arc-input-wrapper">
        <label class="arc-label" for="ctrl-diff">DIFFICULTY</label>
        <select id="ctrl-diff" class="arc-select">
          <option>NORMAL</option>
          <option>HARD</option>
        </select>
      </div>
      <div class="arc-input-wrapper">
        <label class="arc-label" for="ctrl-msg">MESSAGE</label>
        <textarea id="ctrl-msg" class="arc-textarea" placeholder="ENTER MESSAGE_"></textarea>
      </div>
    </div>
  `},n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => \`
    <div class="arc-input-wrapper">
      <label class="arc-label" for="name">PLAYER NAME</label>
      <input
        id="name"
        class="arc-input"
        type="text"
        placeholder="ENTER NAME_"
        aria-describedby="name-hint"
      />
      <span id="name-hint" class="arc-input-hint">MAX 10 CHARACTERS</span>
    </div>
  \`
}`,...n.parameters?.docs?.source},description:{story:`@type { import('@storybook/html').StoryObj }`,...n.parameters?.docs?.description}}},r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => \`
    <div class="arc-input-wrapper">
      <label class="arc-label" for="code">ACCESS CODE</label>
      <input
        id="code"
        class="arc-input"
        type="text"
        placeholder="XXXX_"
        pattern="[A-Z0-9]{4}"
        maxlength="4"
        aria-describedby="code-hint"
      />
      <span id="code-hint" class="arc-input-hint">4 CHARACTERS — A-Z / 0-9</span>
    </div>
  \`
}`,...r.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => \`
    <div class="arc-input-wrapper">
      <label class="arc-label" for="invalid-input">ACCESS CODE</label>
      <input
        id="invalid-input"
        class="arc-input"
        type="text"
        value="!!!"
        pattern="[A-Z0-9]{4}"
        aria-describedby="invalid-hint"
      />
      <span id="invalid-hint" class="arc-input-hint-error">⚠ INVALID FORMAT</span>
    </div>
  \`
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => \`
    <div class="arc-input-wrapper">
      <label class="arc-label" for="disabled-input">LOCKED FIELD</label>
      <input
        id="disabled-input"
        class="arc-input"
        type="text"
        placeholder="LOCKED_"
        disabled
      />
      <span class="arc-input-hint">THIS FIELD IS READ-ONLY</span>
    </div>
  \`
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => \`
    <div class="arc-input-wrapper">
      <label class="arc-label" for="message">MESSAGE</label>
      <textarea
        id="message"
        class="arc-textarea"
        placeholder="ENTER MESSAGE_"
        aria-describedby="message-hint"
      ></textarea>
      <span id="message-hint" class="arc-input-hint">MAX 200 CHARACTERS</span>
    </div>
  \`
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => \`
    <div class="arc-input-wrapper">
      <label class="arc-label" for="difficulty">DIFFICULTY</label>
      <select id="difficulty" class="arc-select" aria-describedby="diff-hint">
        <option value="">SELECT_</option>
        <option value="easy">EASY</option>
        <option value="normal">NORMAL</option>
        <option value="hard">HARD</option>
        <option value="insane">INSANE</option>
      </select>
      <span id="diff-hint" class="arc-input-hint">CHOOSE DIFFICULTY LEVEL</span>
    </div>
  \`
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => \`
    <div style="display:flex;flex-direction:column;gap:1.5rem;">
      <div class="arc-input-wrapper">
        <label class="arc-label" for="ctrl-name">PLAYER NAME</label>
        <input id="ctrl-name" class="arc-input" type="text" placeholder="ENTER NAME_" />
        <span class="arc-input-hint">MAX 10 CHARACTERS</span>
      </div>
      <div class="arc-input-wrapper">
        <label class="arc-label" for="ctrl-diff">DIFFICULTY</label>
        <select id="ctrl-diff" class="arc-select">
          <option>NORMAL</option>
          <option>HARD</option>
        </select>
      </div>
      <div class="arc-input-wrapper">
        <label class="arc-label" for="ctrl-msg">MESSAGE</label>
        <textarea id="ctrl-msg" class="arc-textarea" placeholder="ENTER MESSAGE_"></textarea>
      </div>
    </div>
  \`
}`,...c.parameters?.docs?.source}}},l=[`Default`,`WithValidation`,`Invalid`,`Disabled`,`Textarea`,`Select`,`AllControls`]}))();export{c as AllControls,n as Default,a as Disabled,i as Invalid,s as Select,o as Textarea,r as WithValidation,l as __namedExportsOrder,t as default};