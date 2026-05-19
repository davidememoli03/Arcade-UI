import { arcModal } from '../components/modal.js'

export default {
  title: 'Components/Modal',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Dialog modale arcade con backdrop scanlines, bordo neon doppio e focus trap. ' +
          'Markup: `role="dialog"`, `aria-modal="true"`, `aria-labelledby`, close con `aria-label`. ' +
          'Tastiera: Tab trap, Esc, restore focus (`arcModal`). ' +
          'Vedi [`docs/ACCESSIBILITY.md`](https://github.com/davidememoli03/Arcade-UI/blob/main/arcade-ui/docs/ACCESSIBILITY.md#modal-arc-modal).',
      },
    },
  },
}

// ─── Helper: genera backdrop + modal con un bottone trigger ───────────────────

function makeModal({
  backdropId = 'story-modal',
  variant = '',
  title = 'GAME OVER',
  body = 'Insert coin to continue.<br>Your score has been saved to the leaderboard.',
  footer = true,
  triggerlabel = 'OPEN MODAL',
}) {
  const variantClass = variant ? ` arc-modal-${variant}` : ' arc-modal-cyan'

  const footerHTML = footer
    ? `<div class="arc-modal-footer">
        <button class="arc-btn arc-btn-primary" onclick="arcModal.close('${backdropId}')">OK</button>
        <button class="arc-btn arc-btn-ghost"   onclick="arcModal.close('${backdropId}')">CANCEL</button>
       </div>`
    : ''

  return `
<button
  class="arc-btn arc-btn-primary"
  data-arc-modal-open="${backdropId}"
  id="${backdropId}-trigger"
  style="margin-bottom:16px">
  ${triggerlabel}
</button>

<div class="arc-modal-backdrop"
     id="${backdropId}"
     aria-hidden="true">
  <div class="arc-modal${variantClass}"
       role="dialog"
       aria-modal="true"
       aria-labelledby="${backdropId}-title">
    <div class="arc-modal-header">
      <span id="${backdropId}-title" class="arc-modal-title">${title}</span>
      <button class="arc-modal-close" aria-label="Close dialog">[X]</button>
    </div>
    <div class="arc-modal-body">${body}</div>
    ${footerHTML}
  </div>
</div>`
}

// ─── Stories ──────────────────────────────────────────────────────────────────

export const Default = {
  name: 'Default (cyan)',
  render: () => makeModal({ backdropId: 'modal-default' }),
  play: async () => {
    arcModal.bindModalTriggers()
  },
}

export const Open = {
  name: 'Open (pre-opened)',
  render: () => {
    const html = makeModal({ backdropId: 'modal-preopen' })
    return html
  },
  play: async () => {
    arcModal.bindModalTriggers()
    arcModal.open('modal-preopen')
  },
}

export const Info = {
  name: 'Variant: info (cyan)',
  render: () => makeModal({
    backdropId: 'modal-info',
    variant: 'cyan',
    title: 'INFO',
    triggerlabel: 'OPEN INFO',
    body: 'Level completed! Your time was <strong>02:47</strong>.',
  }),
  play: async () => { arcModal.bindModalTriggers() },
}

export const Success = {
  name: 'Variant: success (green)',
  render: () => makeModal({
    backdropId: 'modal-success',
    variant: 'green',
    title: 'LEVEL UP!',
    triggerlabel: 'OPEN SUCCESS',
    body: 'You reached <strong>Level 5</strong>. New abilities unlocked.',
  }),
  play: async () => { arcModal.bindModalTriggers() },
}

export const Warning = {
  name: 'Variant: warning (yellow)',
  render: () => makeModal({
    backdropId: 'modal-warning',
    variant: 'yellow',
    title: 'WARNING',
    triggerlabel: 'OPEN WARNING',
    body: 'Low battery detected. Save your progress before continuing.',
  }),
  play: async () => { arcModal.bindModalTriggers() },
}

export const Danger = {
  name: 'Variant: danger (red)',
  render: () => makeModal({
    backdropId: 'modal-danger',
    variant: 'red',
    title: '! DANGER',
    triggerlabel: 'OPEN DANGER',
    body: 'Are you sure you want to delete this save file? This action cannot be undone.',
  }),
  play: async () => { arcModal.bindModalTriggers() },
}

export const NoFooter = {
  name: 'No footer',
  render: () => makeModal({
    backdropId: 'modal-nofooter',
    title: 'NOTICE',
    triggerlabel: 'OPEN NOTICE',
    body: 'Press [ESC] or click the [X] button to close this dialog.',
    footer: false,
  }),
  play: async () => { arcModal.bindModalTriggers() },
}

export const LongContent = {
  name: 'Long content (scrollable)',
  render: () => makeModal({
    backdropId: 'modal-long',
    title: 'HIGH SCORES',
    triggerlabel: 'OPEN SCORES',
    body: `
      <table style="width:100%;border-collapse:collapse;font-family:var(--arc-font-terminal)">
        ${[...Array(20)].map((_, i) => `
          <tr>
            <td style="padding:4px 8px;color:var(--arc-color-cyan)">#${i + 1}</td>
            <td style="padding:4px 8px">PLAYER_${(i + 1).toString().padStart(2, '0')}</td>
            <td style="padding:4px 8px;text-align:right">${(999999 - i * 42000).toLocaleString()}</td>
          </tr>`).join('')}
      </table>`,
    footer: true,
  }),
  play: async () => { arcModal.bindModalTriggers() },
}

export const InPanel = {
  name: 'Trigger inside a panel',
  render: () => `
<div class="arc-panel" style="padding:24px;max-width:400px">
  <h2 class="arc-panel-header">Settings</h2>
  <div class="arc-panel-body" style="display:flex;flex-direction:column;gap:12px">
    <p style="font-family:var(--arc-font-terminal);font-size:20px;color:var(--arc-color-text-muted)">
      Configure your game settings.
    </p>
    <button class="arc-btn arc-btn-primary" data-arc-modal-open="modal-inpanel">RESET PROGRESS</button>
  </div>
</div>

<div class="arc-modal-backdrop" id="modal-inpanel" aria-hidden="true">
  <div class="arc-modal arc-modal-red"
       role="dialog" aria-modal="true"
       aria-labelledby="modal-inpanel-title">
    <div class="arc-modal-header">
      <span id="modal-inpanel-title" class="arc-modal-title">RESET?</span>
      <button class="arc-modal-close" aria-label="Close">[X]</button>
    </div>
    <div class="arc-modal-body">
      All progress will be permanently deleted. This cannot be undone.
    </div>
    <div class="arc-modal-footer">
      <button class="arc-btn arc-btn-danger" onclick="arcModal.close('modal-inpanel')">CONFIRM</button>
      <button class="arc-btn arc-btn-ghost"  onclick="arcModal.close('modal-inpanel')">CANCEL</button>
    </div>
  </div>
</div>`,
  play: async () => { arcModal.bindModalTriggers() },
}
