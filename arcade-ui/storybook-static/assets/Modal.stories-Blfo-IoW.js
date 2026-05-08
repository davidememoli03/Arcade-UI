import{n as e}from"./chunk-DnJy8xQt.js";function t(e){return[...e.querySelectorAll(o)].filter(e=>!e.closest(`[aria-hidden="true"]`))}function n(e){return function(n){if(n.key!==`Tab`)return;let r=t(e);if(r.length===0)return;let i=r[0],a=r[r.length-1];n.shiftKey?document.activeElement===i&&(n.preventDefault(),a.focus()):document.activeElement===a&&(n.preventDefault(),i.focus())}}function r(e,{trigger:r=document.activeElement}={}){let a=typeof e==`string`?document.getElementById(e):e;if(!a)return;let o=a.querySelector(`[role="dialog"]`);if(!o)return;a.classList.add(s),a.setAttribute(`aria-hidden`,`false`),document.body.style.overflow=`hidden`;let l=t(o);l.length>0&&l[0].focus();let u=n(o);document.addEventListener(`keydown`,u);let d=e=>{e.key===`Escape`&&i(a)};document.addEventListener(`keydown`,d);let f=e=>{e.target===a&&i(a)};a.addEventListener(`click`,f);let p=a.id||a;c.set(p,{trapHandler:u,escHandler:d,backdropClickHandler:f,backdrop:a,trigger:r instanceof Element?r:null})}function i(e){let t=typeof e==`string`?document.getElementById(e):e;if(!t)return;t.classList.remove(s),t.setAttribute(`aria-hidden`,`true`),document.body.style.overflow=``;let n=t.id||t,r=c.get(n);r&&(document.removeEventListener(`keydown`,r.trapHandler),document.removeEventListener(`keydown`,r.escHandler),t.removeEventListener(`click`,r.backdropClickHandler),r.trigger&&r.trigger.focus(),c.delete(n))}function a(e=document){e.querySelectorAll(`[data-arc-modal-open]`).forEach(e=>{e.addEventListener(`click`,()=>{r(e.dataset.arcModalOpen,{trigger:e})})}),e.querySelectorAll(`.arc-modal-close`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.closest(`.arc-modal-backdrop`);t&&i(t)})})}var o,s,c,l,u=e((()=>{o=`a[href],button:not(:disabled),input:not(:disabled),select:not(:disabled),textarea:not(:disabled),[tabindex]:not([tabindex="-1"])`,s=`arc-modal-backdrop-open`,c=new Map,typeof document<`u`&&(document.readyState===`loading`?document.addEventListener(`DOMContentLoaded`,()=>a(),{once:!0}):a()),l={open:r,close:i,bindModalTriggers:a}}));function d({backdropId:e=`story-modal`,variant:t=``,title:n=`GAME OVER`,body:r=`Insert coin to continue.<br>Your score has been saved to the leaderboard.`,footer:i=!0,triggerlabel:a=`OPEN MODAL`}){return`
<button
  class="arc-btn arc-btn-primary"
  data-arc-modal-open="${e}"
  id="${e}-trigger"
  style="margin-bottom:16px">
  ${a}
</button>

<div class="arc-modal-backdrop"
     id="${e}"
     aria-hidden="true">
  <div class="arc-modal${t?` arc-modal-${t}`:` arc-modal-cyan`}"
       role="dialog"
       aria-modal="true"
       aria-labelledby="${e}-title">
    <div class="arc-modal-header">
      <span id="${e}-title" class="arc-modal-title">${n}</span>
      <button class="arc-modal-close" aria-label="Close dialog">[X]</button>
    </div>
    <div class="arc-modal-body">${r}</div>
    ${i?`<div class="arc-modal-footer">
        <button class="arc-btn arc-btn-primary" onclick="arcModal.close('${e}')">OK</button>
        <button class="arc-btn arc-btn-ghost"   onclick="arcModal.close('${e}')">CANCEL</button>
       </div>`:``}
  </div>
</div>`}var f,p,m,h,g,_,v,y,b,x,S;e((()=>{u(),f={title:`Components/Modal`,tags:[`autodocs`],parameters:{layout:`centered`,docs:{description:{component:"Dialog modale arcade con backdrop scanlines, bordo neon doppio e focus trap. Usare `arcModal.open(id)` / `arcModal.close(id)` per controllare programmaticamente."}}}},p={name:`Default (cyan)`,render:()=>d({backdropId:`modal-default`}),play:async()=>{l.bindModalTriggers()}},m={name:`Open (pre-opened)`,render:()=>d({backdropId:`modal-preopen`}),play:async()=>{l.bindModalTriggers(),l.open(`modal-preopen`)}},h={name:`Variant: info (cyan)`,render:()=>d({backdropId:`modal-info`,variant:`cyan`,title:`INFO`,triggerlabel:`OPEN INFO`,body:`Level completed! Your time was <strong>02:47</strong>.`}),play:async()=>{l.bindModalTriggers()}},g={name:`Variant: success (green)`,render:()=>d({backdropId:`modal-success`,variant:`green`,title:`LEVEL UP!`,triggerlabel:`OPEN SUCCESS`,body:`You reached <strong>Level 5</strong>. New abilities unlocked.`}),play:async()=>{l.bindModalTriggers()}},_={name:`Variant: warning (yellow)`,render:()=>d({backdropId:`modal-warning`,variant:`yellow`,title:`WARNING`,triggerlabel:`OPEN WARNING`,body:`Low battery detected. Save your progress before continuing.`}),play:async()=>{l.bindModalTriggers()}},v={name:`Variant: danger (red)`,render:()=>d({backdropId:`modal-danger`,variant:`red`,title:`! DANGER`,triggerlabel:`OPEN DANGER`,body:`Are you sure you want to delete this save file? This action cannot be undone.`}),play:async()=>{l.bindModalTriggers()}},y={name:`No footer`,render:()=>d({backdropId:`modal-nofooter`,title:`NOTICE`,triggerlabel:`OPEN NOTICE`,body:`Press [ESC] or click the [X] button to close this dialog.`,footer:!1}),play:async()=>{l.bindModalTriggers()}},b={name:`Long content (scrollable)`,render:()=>d({backdropId:`modal-long`,title:`HIGH SCORES`,triggerlabel:`OPEN SCORES`,body:`
      <table style="width:100%;border-collapse:collapse;font-family:var(--arc-font-terminal)">
        ${[...Array(20)].map((e,t)=>`
          <tr>
            <td style="padding:4px 8px;color:var(--arc-color-cyan)">#${t+1}</td>
            <td style="padding:4px 8px">PLAYER_${(t+1).toString().padStart(2,`0`)}</td>
            <td style="padding:4px 8px;text-align:right">${(999999-t*42e3).toLocaleString()}</td>
          </tr>`).join(``)}
      </table>`,footer:!0}),play:async()=>{l.bindModalTriggers()}},x={name:`Trigger inside a panel`,render:()=>`
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
</div>`,play:async()=>{l.bindModalTriggers()}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Default (cyan)',
  render: () => makeModal({
    backdropId: 'modal-default'
  }),
  play: async () => {
    arcModal.bindModalTriggers();
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Open (pre-opened)',
  render: () => {
    const html = makeModal({
      backdropId: 'modal-preopen'
    });
    return html;
  },
  play: async () => {
    arcModal.bindModalTriggers();
    arcModal.open('modal-preopen');
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Variant: info (cyan)',
  render: () => makeModal({
    backdropId: 'modal-info',
    variant: 'cyan',
    title: 'INFO',
    triggerlabel: 'OPEN INFO',
    body: 'Level completed! Your time was <strong>02:47</strong>.'
  }),
  play: async () => {
    arcModal.bindModalTriggers();
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Variant: success (green)',
  render: () => makeModal({
    backdropId: 'modal-success',
    variant: 'green',
    title: 'LEVEL UP!',
    triggerlabel: 'OPEN SUCCESS',
    body: 'You reached <strong>Level 5</strong>. New abilities unlocked.'
  }),
  play: async () => {
    arcModal.bindModalTriggers();
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'Variant: warning (yellow)',
  render: () => makeModal({
    backdropId: 'modal-warning',
    variant: 'yellow',
    title: 'WARNING',
    triggerlabel: 'OPEN WARNING',
    body: 'Low battery detected. Save your progress before continuing.'
  }),
  play: async () => {
    arcModal.bindModalTriggers();
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Variant: danger (red)',
  render: () => makeModal({
    backdropId: 'modal-danger',
    variant: 'red',
    title: '! DANGER',
    triggerlabel: 'OPEN DANGER',
    body: 'Are you sure you want to delete this save file? This action cannot be undone.'
  }),
  play: async () => {
    arcModal.bindModalTriggers();
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'No footer',
  render: () => makeModal({
    backdropId: 'modal-nofooter',
    title: 'NOTICE',
    triggerlabel: 'OPEN NOTICE',
    body: 'Press [ESC] or click the [X] button to close this dialog.',
    footer: false
  }),
  play: async () => {
    arcModal.bindModalTriggers();
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Long content (scrollable)',
  render: () => makeModal({
    backdropId: 'modal-long',
    title: 'HIGH SCORES',
    triggerlabel: 'OPEN SCORES',
    body: \`
      <table style="width:100%;border-collapse:collapse;font-family:var(--arc-font-terminal)">
        \${[...Array(20)].map((_, i) => \`
          <tr>
            <td style="padding:4px 8px;color:var(--arc-color-cyan)">#\${i + 1}</td>
            <td style="padding:4px 8px">PLAYER_\${(i + 1).toString().padStart(2, '0')}</td>
            <td style="padding:4px 8px;text-align:right">\${(999999 - i * 42000).toLocaleString()}</td>
          </tr>\`).join('')}
      </table>\`,
    footer: true
  }),
  play: async () => {
    arcModal.bindModalTriggers();
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Trigger inside a panel',
  render: () => \`
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
</div>\`,
  play: async () => {
    arcModal.bindModalTriggers();
  }
}`,...x.parameters?.docs?.source}}},S=[`Default`,`Open`,`Info`,`Success`,`Warning`,`Danger`,`NoFooter`,`LongContent`,`InPanel`]}))();export{v as Danger,p as Default,x as InPanel,h as Info,b as LongContent,y as NoFooter,m as Open,g as Success,_ as Warning,S as __namedExportsOrder,f as default};