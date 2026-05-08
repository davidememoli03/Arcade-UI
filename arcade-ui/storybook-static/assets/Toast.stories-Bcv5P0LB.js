import{n as e}from"./chunk-DnJy8xQt.js";function t(e){if(o.has(e))return o.get(e);let t=document.createElement(`div`);return t.className=`arc-toast-container arc-toast-${e}`,t.setAttribute(`aria-live`,`polite`),t.setAttribute(`aria-atomic`,`false`),document.body.appendChild(t),o.set(e,t),t}function n({id:e,message:t,type:n,duration:i}){let a=document.createElement(`div`);a.className=`arc-toast arc-toast-${n}`,a.setAttribute(`role`,`status`),a.setAttribute(`aria-live`,`assertive`),a.dataset.arcToastId=e;let o=document.createElement(`span`);o.className=`arc-toast-icon`,o.setAttribute(`aria-hidden`,`true`),o.textContent=l[n]??l.info;let s=document.createElement(`span`);s.className=`arc-toast-message`,s.textContent=t;let c=document.createElement(`button`);if(c.className=`arc-toast-close`,c.setAttribute(`aria-label`,`Dismiss notification`),c.textContent=`[X]`,c.addEventListener(`click`,()=>r(e)),a.appendChild(o),a.appendChild(s),a.appendChild(c),i>0){let e=document.createElement(`div`);e.className=`arc-toast-progress`,e.setAttribute(`aria-hidden`,`true`);let t=document.createElement(`div`);t.className=`arc-toast-progress-bar`,t.style.setProperty(`--arc-toast-duration`,`${i}ms`),e.appendChild(t),a.appendChild(e)}return a}function r(e){let t=s.get(e);if(!t)return;let{el:n,timer:r}=t;r!==null&&clearTimeout(r),s.delete(e),n.classList.add(`arc-toast-exiting`),n.addEventListener(`animationend`,()=>{n.remove()},{once:!0})}function i(){for(let e of s.keys())r(e)}function a({message:e=``,type:i=p,duration:a=f,position:o=d}={}){if(typeof document>`u`)return-1;let m=i in l?i:p,h=u.has(o)?o:d,g=typeof a==`number`&&a>=0?a:f,_=c++,v=t(h),y=n({id:_,message:e,type:m,duration:g});h.startsWith(`top`)?v.insertBefore(y,v.firstChild):v.appendChild(y);let b=null;return g>0&&(b=setTimeout(()=>r(_),g)),s.set(_,{el:y,timer:b}),_}var o,s,c,l,u,d,f,p,m,h=e((()=>{o=new Map,s=new Map,c=1,l={info:`[ i ]`,success:`[ + ]`,warning:`[ ! ]`,error:`[ x ]`},u=new Set([`top-right`,`top-left`,`top-center`,`bottom-right`,`bottom-left`,`bottom-center`]),d=`bottom-right`,f=3e3,p=`info`,m={show:a,dismiss:r,dismissAll:i}}));function g(e,t){let n=document.createElement(`button`);return n.className=`arc-btn arc-btn-primary`,n.textContent=e,n.addEventListener(`click`,t),n}var _,v,y,b,x,S,C,w,T,E,D,O;e((()=>{h(),_={title:`Components/Toast`,tags:[`autodocs`],parameters:{layout:`centered`,docs:{description:{component:`Notifiche di sistema arcade-style che imitano i messaggi "PLAYER 1 READY", "GAME OVER", "NEW HIGH SCORE". Posizione configurabile, animazione slide-in con glow flash, auto-dismiss con progress bar, stack automatico.`}}},argTypes:{message:{control:`text`},type:{control:{type:`select`},options:[`info`,`success`,`warning`,`error`]},duration:{control:{type:`number`,min:0,max:1e4,step:500}},position:{control:{type:`select`},options:[`bottom-right`,`bottom-left`,`bottom-center`,`top-right`,`top-left`,`top-center`]}},args:{message:`PLAYER 1 READY`,type:`info`,duration:3e3,position:`bottom-right`}},v={name:`Playground (interactive)`,render:e=>{let t=document.createElement(`div`);t.style.cssText=`display:flex;flex-direction:column;align-items:center;gap:16px;padding:2rem;`;let n=g(`▶ SHOW TOAST`,()=>{m.show(e)});return t.appendChild(n),t}},y={name:`Info (cyan)`,render:()=>{let e=document.createElement(`div`);e.style.cssText=`display:flex;align-items:center;justify-content:center;padding:2rem;`;let t=g(`PLAYER 1 READY`,()=>{m.show({message:`PLAYER 1 READY`,type:`info`})});return e.appendChild(t),e}},b={name:`Success (green)`,render:()=>{let e=document.createElement(`div`);e.style.cssText=`display:flex;align-items:center;justify-content:center;padding:2rem;`;let t=g(`NEW HIGH SCORE`,()=>{m.show({message:`NEW HIGH SCORE!  1,248,000 PTS`,type:`success`})});return e.appendChild(t),e}},x={name:`Warning (yellow)`,render:()=>{let e=document.createElement(`div`);e.style.cssText=`display:flex;align-items:center;justify-content:center;padding:2rem;`;let t=g(`LOW CREDIT WARNING`,()=>{m.show({message:`LOW CREDITS — INSERT COIN`,type:`warning`})});return e.appendChild(t),e}},S={name:`Error (red)`,render:()=>{let e=document.createElement(`div`);e.style.cssText=`display:flex;align-items:center;justify-content:center;padding:2rem;`;let t=g(`GAME OVER`,()=>{m.show({message:`GAME OVER — NO CONTINUES LEFT`,type:`error`})});return e.appendChild(t),e}},C={name:`Persistent (no auto-dismiss)`,render:()=>{let e=document.createElement(`div`);e.style.cssText=`display:flex;gap:12px;align-items:center;justify-content:center;padding:2rem;`;let t=null,n=g(`SHOW PERSISTENT`,()=>{t=m.show({message:`WAITING FOR PLAYER 2...`,type:`info`,duration:0})}),r=g(`DISMISS`,()=>{t!==null&&m.dismiss(t)});return r.className=`arc-btn arc-btn-ghost`,e.appendChild(n),e.appendChild(r),e}},w={name:`Stack (multiple toasts)`,render:()=>{let e=document.createElement(`div`);e.style.cssText=`display:flex;gap:12px;align-items:center;justify-content:center;flex-wrap:wrap;padding:2rem;`;let t=[{label:`INFO`,message:`STAGE 1-1 START`,type:`info`},{label:`SUCCESS`,message:`POWER-UP COLLECTED`,type:`success`},{label:`WARNING`,message:`1 LIFE REMAINING`,type:`warning`},{label:`ERROR`,message:`CONNECTION TO SERVER LOST`,type:`error`}];t.forEach(({label:t,message:n,type:r})=>{e.appendChild(g(t,()=>m.show({message:n,type:r})))});let n=g(`ALL AT ONCE`,()=>{t.forEach(({message:e,type:t},n)=>{setTimeout(()=>m.show({message:e,type:t}),n*200)})});n.className=`arc-btn arc-btn-ghost`,e.appendChild(n);let r=g(`DISMISS ALL`,()=>m.dismissAll());return r.className=`arc-btn arc-btn-ghost`,e.appendChild(r),e}},T={name:`Position: top-center`,render:()=>{let e=document.createElement(`div`);e.style.cssText=`display:flex;align-items:center;justify-content:center;padding:2rem;`;let t=g(`BROADCAST MESSAGE`,()=>{m.show({message:`TOURNAMENT MODE ACTIVATED`,type:`success`,position:`top-center`,duration:4e3})});return e.appendChild(t),e}},E={name:`Long duration (5s)`,render:()=>{let e=document.createElement(`div`);e.style.cssText=`display:flex;align-items:center;justify-content:center;padding:2rem;`;let t=g(`SHOW — 5 SEC`,()=>{m.show({message:`ACHIEVEMENT UNLOCKED: SPEED RUNNER`,type:`success`,duration:5e3})});return e.appendChild(t),e}},D={name:`All types (sequential)`,render:()=>{let e=document.createElement(`div`);e.style.cssText=`display:flex;align-items:center;justify-content:center;padding:2rem;`;let t=g(`▶ DEMO SEQUENCE`,()=>{[{message:`STAGE CLEAR!`,type:`info`,delay:0},{message:`SECRET BONUS FOUND  +5000 PTS`,type:`success`,delay:800},{message:`TIME BONUS EXPIRING SOON`,type:`warning`,delay:1600},{message:`SHIELD BROKEN — TAKE COVER`,type:`error`,delay:2400}].forEach(({message:e,type:t,delay:n})=>{setTimeout(()=>m.show({message:e,type:t,duration:4e3}),n)})});return e.appendChild(t),e}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Playground (interactive)',
  render: args => {
    const wrap = document.createElement('div');
    wrap.style.cssText = 'display:flex;flex-direction:column;align-items:center;gap:16px;padding:2rem;';
    const btn = triggerBtn('▶ SHOW TOAST', () => {
      arcToast.show(args);
    });
    wrap.appendChild(btn);
    return wrap;
  }
}`,...v.parameters?.docs?.source},description:{story:`Controllo interattivo: configura tipo, messaggio, durata e posizione.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Info (cyan)',
  render: () => {
    const wrap = document.createElement('div');
    wrap.style.cssText = 'display:flex;align-items:center;justify-content:center;padding:2rem;';
    const btn = triggerBtn('PLAYER 1 READY', () => {
      arcToast.show({
        message: 'PLAYER 1 READY',
        type: 'info'
      });
    });
    wrap.appendChild(btn);
    return wrap;
  }
}`,...y.parameters?.docs?.source},description:{story:`Tipo info — ciano, messaggio di sistema.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Success (green)',
  render: () => {
    const wrap = document.createElement('div');
    wrap.style.cssText = 'display:flex;align-items:center;justify-content:center;padding:2rem;';
    const btn = triggerBtn('NEW HIGH SCORE', () => {
      arcToast.show({
        message: 'NEW HIGH SCORE!  1,248,000 PTS',
        type: 'success'
      });
    });
    wrap.appendChild(btn);
    return wrap;
  }
}`,...b.parameters?.docs?.source},description:{story:`Tipo success — verde, vittoria o completamento.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Warning (yellow)',
  render: () => {
    const wrap = document.createElement('div');
    wrap.style.cssText = 'display:flex;align-items:center;justify-content:center;padding:2rem;';
    const btn = triggerBtn('LOW CREDIT WARNING', () => {
      arcToast.show({
        message: 'LOW CREDITS — INSERT COIN',
        type: 'warning'
      });
    });
    wrap.appendChild(btn);
    return wrap;
  }
}`,...x.parameters?.docs?.source},description:{story:`Tipo warning — giallo, attenzione.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Error (red)',
  render: () => {
    const wrap = document.createElement('div');
    wrap.style.cssText = 'display:flex;align-items:center;justify-content:center;padding:2rem;';
    const btn = triggerBtn('GAME OVER', () => {
      arcToast.show({
        message: 'GAME OVER — NO CONTINUES LEFT',
        type: 'error'
      });
    });
    wrap.appendChild(btn);
    return wrap;
  }
}`,...S.parameters?.docs?.source},description:{story:`Tipo error — rosso, perdita di vita o errore critico.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Persistent (no auto-dismiss)',
  render: () => {
    const wrap = document.createElement('div');
    wrap.style.cssText = 'display:flex;gap:12px;align-items:center;justify-content:center;padding:2rem;';
    let persistId = null;
    const show = triggerBtn('SHOW PERSISTENT', () => {
      persistId = arcToast.show({
        message: 'WAITING FOR PLAYER 2...',
        type: 'info',
        duration: 0
      });
    });
    const dismiss = triggerBtn('DISMISS', () => {
      if (persistId !== null) arcToast.dismiss(persistId);
    });
    dismiss.className = 'arc-btn arc-btn-ghost';
    wrap.appendChild(show);
    wrap.appendChild(dismiss);
    return wrap;
  }
}`,...C.parameters?.docs?.source},description:{story:`Toast persistente senza auto-dismiss (duration: 0).`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Stack (multiple toasts)',
  render: () => {
    const wrap = document.createElement('div');
    wrap.style.cssText = 'display:flex;gap:12px;align-items:center;justify-content:center;flex-wrap:wrap;padding:2rem;';
    const items = [{
      label: 'INFO',
      message: 'STAGE 1-1 START',
      type: 'info'
    }, {
      label: 'SUCCESS',
      message: 'POWER-UP COLLECTED',
      type: 'success'
    }, {
      label: 'WARNING',
      message: '1 LIFE REMAINING',
      type: 'warning'
    }, {
      label: 'ERROR',
      message: 'CONNECTION TO SERVER LOST',
      type: 'error'
    }];
    items.forEach(({
      label,
      message,
      type
    }) => {
      wrap.appendChild(triggerBtn(label, () => arcToast.show({
        message,
        type
      })));
    });
    const allBtn = triggerBtn('ALL AT ONCE', () => {
      items.forEach(({
        message,
        type
      }, i) => {
        setTimeout(() => arcToast.show({
          message,
          type
        }), i * 200);
      });
    });
    allBtn.className = 'arc-btn arc-btn-ghost';
    wrap.appendChild(allBtn);
    const dismissBtn = triggerBtn('DISMISS ALL', () => arcToast.dismissAll());
    dismissBtn.className = 'arc-btn arc-btn-ghost';
    wrap.appendChild(dismissBtn);
    return wrap;
  }
}`,...w.parameters?.docs?.source},description:{story:`Stack di più toast contemporanei.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Position: top-center',
  render: () => {
    const wrap = document.createElement('div');
    wrap.style.cssText = 'display:flex;align-items:center;justify-content:center;padding:2rem;';
    const btn = triggerBtn('BROADCAST MESSAGE', () => {
      arcToast.show({
        message: 'TOURNAMENT MODE ACTIVATED',
        type: 'success',
        position: 'top-center',
        duration: 4000
      });
    });
    wrap.appendChild(btn);
    return wrap;
  }
}`,...T.parameters?.docs?.source},description:{story:`Posizione top-center, stile "system broadcast".`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'Long duration (5s)',
  render: () => {
    const wrap = document.createElement('div');
    wrap.style.cssText = 'display:flex;align-items:center;justify-content:center;padding:2rem;';
    const btn = triggerBtn('SHOW — 5 SEC', () => {
      arcToast.show({
        message: 'ACHIEVEMENT UNLOCKED: SPEED RUNNER',
        type: 'success',
        duration: 5000
      });
    });
    wrap.appendChild(btn);
    return wrap;
  }
}`,...E.parameters?.docs?.source},description:{story:`Durata estesa (5 s) con progress bar più lenta.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'All types (sequential)',
  render: () => {
    const wrap = document.createElement('div');
    wrap.style.cssText = 'display:flex;align-items:center;justify-content:center;padding:2rem;';
    const btn = triggerBtn('▶ DEMO SEQUENCE', () => {
      const sequence = [{
        message: 'STAGE CLEAR!',
        type: 'info',
        delay: 0
      }, {
        message: 'SECRET BONUS FOUND  +5000 PTS',
        type: 'success',
        delay: 800
      }, {
        message: 'TIME BONUS EXPIRING SOON',
        type: 'warning',
        delay: 1600
      }, {
        message: 'SHIELD BROKEN — TAKE COVER',
        type: 'error',
        delay: 2400
      }];
      sequence.forEach(({
        message,
        type,
        delay
      }) => {
        setTimeout(() => arcToast.show({
          message,
          type,
          duration: 4000
        }), delay);
      });
    });
    wrap.appendChild(btn);
    return wrap;
  }
}`,...D.parameters?.docs?.source},description:{story:`Tutti i quattro tipi in sequenza — demo completa.`,...D.parameters?.docs?.description}}},O=[`Playground`,`Info`,`Success`,`Warning`,`Error`,`Persistent`,`Stack`,`TopCenter`,`LongDuration`,`AllTypes`]}))();export{D as AllTypes,S as Error,y as Info,E as LongDuration,C as Persistent,v as Playground,w as Stack,b as Success,T as TopCenter,x as Warning,O as __namedExportsOrder,_ as default};