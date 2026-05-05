// src/stories/Input.stories.js

/** @type { import('@storybook/html').Meta } */
export default {
  title: 'Components/Input',
  decorators: [
    story => `<div style="padding:2rem;max-width:400px;">${story()}</div>`,
  ],
}

/** @type { import('@storybook/html').StoryObj } */
export const Default = {
  render: () => `
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
  `,
}

export const WithValidation = {
  render: () => `
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
  `,
}

export const Invalid = {
  render: () => `
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
  `,
}

export const Disabled = {
  render: () => `
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
  `,
}

export const Textarea = {
  render: () => `
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
  `,
}

export const Select = {
  render: () => `
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
  `,
}

export const AllControls = {
  render: () => `
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
  `,
}
