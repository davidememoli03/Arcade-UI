// src/stories/Select.stories.js

// Minimal JS to wire open/close behaviour in Storybook stories.
// The CSS handles all visual states; JS only toggles aria-expanded.
function wireDropdowns(container) {
  container.querySelectorAll('.arc-dropdown-trigger').forEach(trigger => {
    // Remove existing listeners by cloning
    const fresh = trigger.cloneNode(true)
    trigger.replaceWith(fresh)

    fresh.addEventListener('click', () => {
      const expanded = fresh.getAttribute('aria-expanded') === 'true'
      fresh.setAttribute('aria-expanded', String(!expanded))
      // Update value text when an option is picked (set up after open)
    })
  })

  container.querySelectorAll('.arc-dropdown-option:not(.arc-dropdown-option-disabled)').forEach(opt => {
    opt.addEventListener('click', () => {
      const dropdown = opt.closest('.arc-dropdown')
      const trigger  = dropdown.querySelector('.arc-dropdown-trigger')
      const value    = dropdown.querySelector('.arc-dropdown-value')
      if (value) value.textContent = opt.textContent.replace(' ◀', '').trim()
      dropdown.querySelectorAll('.arc-dropdown-option').forEach(o => {
        o.classList.remove('arc-dropdown-option-selected')
        o.removeAttribute('aria-selected')
      })
      opt.classList.add('arc-dropdown-option-selected')
      opt.setAttribute('aria-selected', 'true')
      trigger.setAttribute('aria-expanded', 'false')
    })
  })

  // Close on outside click
  document.addEventListener('click', e => {
    if (!e.target.closest('.arc-dropdown')) {
      container.querySelectorAll('.arc-dropdown-trigger[aria-expanded="true"]').forEach(t => {
        t.setAttribute('aria-expanded', 'false')
      })
    }
  })
}

function dropdown({ variant = 'arc-dropdown-cyan', value = 'SELECT OPTION', options = [], disabled = false } = {}) {
  const listId = `list-${Math.random().toString(36).slice(2, 8)}`
  return `
    <div class="arc-dropdown ${variant}${disabled ? ' arc-dropdown-disabled' : ''}">
      <button type="button" class="arc-dropdown-trigger"
              aria-haspopup="listbox"
              aria-expanded="false"
              aria-controls="${listId}"${disabled ? ' disabled' : ''}>
        <span class="arc-dropdown-value">${value}</span>
        <span class="arc-dropdown-chevron" aria-hidden="true"></span>
      </button>
      <ul id="${listId}" class="arc-dropdown-menu" role="listbox">
        ${options.map(({ label, selected, disabled: dOpt }) => `
          <li class="arc-dropdown-option${selected ? ' arc-dropdown-option-selected' : ''}${dOpt ? ' arc-dropdown-option-disabled' : ''}"
              role="option"
              ${selected ? 'aria-selected="true"' : ''}
              ${dOpt ? 'aria-disabled="true"' : ''}>
            ${label}
          </li>`).join('')}
      </ul>
    </div>`
}

const DIFFICULTY_OPTIONS = [
  { label: 'EASY' },
  { label: 'NORMAL', selected: true },
  { label: 'HARD' },
  { label: 'NIGHTMARE', disabled: true },
]

const WEAPON_OPTIONS = [
  { label: 'LASER CANNON' },
  { label: 'PLASMA RIFLE', selected: true },
  { label: 'RAIL GUN' },
  { label: 'PHOTON TORPEDO' },
]

/** @type { import('@storybook/html').Meta } */
export default {
  title: 'Components/Dropdown',
  parameters: {
    docs: {
      description: {
        component:
          'Listbox custom: `aria-haspopup`, `aria-expanded` sul trigger, `role="listbox"` / `role="option"`. ' +
          'Navigazione da tastiera va implementata in app (vedi guida). ' +
          '[`docs/ACCESSIBILITY.md`](https://github.com/davidememoli03/Arcade-UI/blob/main/arcade-ui/docs/ACCESSIBILITY.md#dropdown-arc-dropdown).',
      },
    },
  },
  decorators: [
    story => {
      const wrapper = document.createElement('div')
      wrapper.style.cssText = 'padding:3rem;display:flex;gap:2rem;flex-wrap:wrap;align-items:flex-start;'
      wrapper.innerHTML = story()
      setTimeout(() => wireDropdowns(wrapper), 0)
      return wrapper
    },
  ],
}

/** @type { import('@storybook/html').StoryObj } */
export const Default = {
  render: () => dropdown({ options: DIFFICULTY_OPTIONS }),
}

export const Open = {
  render: () => dropdown({ options: DIFFICULTY_OPTIONS })
    .replace('aria-expanded="false"', 'aria-expanded="true"'),
}

export const Cyan = {
  render: () => dropdown({ variant: 'arc-dropdown-cyan', value: 'SELECT WEAPON', options: WEAPON_OPTIONS }),
}

export const Green = {
  render: () => dropdown({ variant: 'arc-dropdown-green', value: 'SELECT LEVEL', options: [
    { label: 'WORLD 1' },
    { label: 'WORLD 2', selected: true },
    { label: 'WORLD 3' },
    { label: 'WORLD 4 (LOCKED)', disabled: true },
  ] }),
}

export const Red = {
  render: () => dropdown({ variant: 'arc-dropdown-red', value: 'SELECT LIVES', options: [
    { label: '1 LIFE', selected: true },
    { label: '3 LIVES' },
    { label: '5 LIVES' },
    { label: 'INFINITE' },
  ] }),
}

export const Yellow = {
  render: () => dropdown({ variant: 'arc-dropdown-yellow', value: 'SELECT SPEED', options: [
    { label: 'SLOW' },
    { label: 'NORMAL', selected: true },
    { label: 'FAST' },
    { label: 'TURBO' },
  ] }),
}

export const Purple = {
  render: () => dropdown({ variant: 'arc-dropdown-purple', value: 'SELECT MAGIC', options: [
    { label: 'NONE' },
    { label: 'FIRE', selected: true },
    { label: 'ICE' },
    { label: 'LIGHTNING' },
  ] }),
}

export const Disabled = {
  render: () => dropdown({ variant: 'arc-dropdown-cyan', value: 'UNAVAILABLE', disabled: true, options: DIFFICULTY_OPTIONS }),
}

export const WithDisabledOption = {
  render: () => dropdown({ variant: 'arc-dropdown-cyan', value: 'SELECT DIFFICULTY', options: DIFFICULTY_OPTIONS }),
}

export const AllVariants = {
  render: () => `
    <div style="display:flex;flex-direction:column;gap:1.5rem;width:220px;">
      ${dropdown({ variant: 'arc-dropdown-cyan',   value: 'CYAN',   options: DIFFICULTY_OPTIONS })}
      ${dropdown({ variant: 'arc-dropdown-green',  value: 'GREEN',  options: DIFFICULTY_OPTIONS })}
      ${dropdown({ variant: 'arc-dropdown-red',    value: 'RED',    options: DIFFICULTY_OPTIONS })}
      ${dropdown({ variant: 'arc-dropdown-yellow', value: 'YELLOW', options: DIFFICULTY_OPTIONS })}
      ${dropdown({ variant: 'arc-dropdown-purple', value: 'PURPLE', options: DIFFICULTY_OPTIONS })}
    </div>
  `,
}

export const InContext = {
  render: () => `
    <div class="arc-panel arc-panel-cyan" style="max-width:380px;width:100%;">
      <div class="arc-panel-header">GAME SETTINGS</div>
      <div class="arc-panel-body" style="display:flex;flex-direction:column;gap:1.5rem;">
        <div class="arc-input-wrapper">
          <label class="arc-label">DIFFICULTY</label>
          ${dropdown({ variant: 'arc-dropdown-cyan', value: 'NORMAL', options: DIFFICULTY_OPTIONS })}
        </div>
        <div class="arc-input-wrapper">
          <label class="arc-label">WEAPON</label>
          ${dropdown({ variant: 'arc-dropdown-yellow', value: 'PLASMA RIFLE', options: WEAPON_OPTIONS })}
        </div>
      </div>
      <div class="arc-panel-footer">
        <button class="arc-btn arc-btn-primary">SAVE</button>
        <button class="arc-btn arc-btn-ghost">RESET</button>
      </div>
    </div>
  `,
}
