// src/stories/CRT.stories.js

/** @type { import('@storybook/html').Meta } */
export default {
  title: 'Effects/CRT',
}

/** @type { import('@storybook/html').StoryObj } */
export const Screen = {
  name: '.arc-crt-screen',
  render: () => `
    <div style="padding:2rem;">
      <div class="arc-crt-screen arc-panel arc-panel-cyan" style="max-width:420px;min-height:200px;">
        <div class="arc-panel-header">TERMINAL</div>
        <div class="arc-panel-body" style="font-family:var(--arc-font-terminal);line-height:1.8;">
          <div>&gt; SYSTEM BOOT OK</div>
          <div>&gt; LOADING ASSETS... <span style="animation:blink var(--arc-anim-normal) var(--arc-ease-step) infinite;">▮</span></div>
          <div style="color:var(--arc-color-yellow);">&gt; PLAYER 1 READY</div>
        </div>
      </div>
    </div>
  `,
}

export const Boot = {
  name: '.arc-crt-boot',
  render: () => `
    <div style="padding:2rem;">
      <div class="arc-crt-screen arc-crt-boot arc-panel arc-panel-cyan" style="max-width:420px;min-height:200px;">
        <div class="arc-panel-header">POWER ON</div>
        <div class="arc-panel-body" style="font-family:var(--arc-font-terminal);line-height:1.8;">
          <div>&gt; CRT POWER ON</div>
          <div style="color:var(--arc-color-green);">&gt; SIGNAL ACQUIRED</div>
          <div>&gt; READY</div>
        </div>
      </div>
      <p style="margin-top:1rem;font-family:var(--arc-font-mono);font-size:.8rem;color:var(--arc-color-text-muted);">
        Ricarica la pagina per rivedere l'animazione.
      </p>
    </div>
  `,
}

export const ScreenVariants = {
  name: 'Screen variants',
  render: () => `
    <div style="padding:2rem;display:flex;gap:1.5rem;flex-wrap:wrap;">
      <div class="arc-crt-screen arc-panel arc-panel-cyan" style="width:200px;min-height:140px;">
        <div class="arc-panel-header">CYAN</div>
        <div class="arc-panel-body">SCANLINES</div>
      </div>
      <div class="arc-crt-screen arc-panel arc-panel-red" style="width:200px;min-height:140px;">
        <div class="arc-panel-header">RED</div>
        <div class="arc-panel-body">SCANLINES</div>
      </div>
      <div class="arc-crt-screen arc-panel arc-panel-yellow" style="width:200px;min-height:140px;">
        <div class="arc-panel-header">YELLOW</div>
        <div class="arc-panel-body">SCANLINES</div>
      </div>
      <div class="arc-crt-screen arc-panel arc-panel-purple" style="width:200px;min-height:140px;">
        <div class="arc-panel-header">PURPLE</div>
        <div class="arc-panel-body">SCANLINES</div>
      </div>
    </div>
  `,
}

export const BootWithScreen = {
  name: 'Boot + Screen',
  render: () => `
    <div style="padding:2rem;">
      <div class="arc-crt-screen arc-crt-boot arc-panel" style="max-width:480px;">
        <div class="arc-panel-header">
          ARCADE-UI
          <span class="arc-badge arc-badge-green arc-badge-pulse" style="margin-left:auto;">LIVE</span>
        </div>
        <div class="arc-panel-body" style="font-family:var(--arc-font-terminal);line-height:2;">
          <div>&gt; BIOS v1.0 OK</div>
          <div>&gt; RAM CHECK... <span style="color:var(--arc-color-green);">PASS</span></div>
          <div>&gt; GPU INIT... <span style="color:var(--arc-color-green);">PASS</span></div>
          <div>&gt; LOADING ARCADE-UI <span style="animation:blink var(--arc-anim-normal) var(--arc-ease-step) infinite;">▮</span></div>
        </div>
        <div class="arc-panel-footer">
          <button class="arc-btn arc-btn-ghost arc-btn-sm" onclick="this.closest('.arc-crt-boot').classList.remove('arc-crt-boot'); void this.offsetWidth; this.closest('.arc-crt-boot, .arc-panel').classList.add('arc-crt-boot');">
            REPLAY BOOT
          </button>
        </div>
      </div>
    </div>
  `,
}

export const Tokens = {
  name: 'Token personalizzati',
  render: () => `
    <div style="padding:2rem;display:flex;flex-direction:column;gap:1.5rem;">
      <div class="arc-crt-screen arc-panel arc-panel-cyan"
           style="
             --arc-crt-scanline-opacity: 0.25;
             --arc-crt-line-size: 3px;
             --arc-crt-vignette-opacity: 0.9;
             max-width:380px;min-height:140px;
           ">
        <div class="arc-panel-header">PESANTE (opacity 0.25)</div>
        <div class="arc-panel-body">Scanlines più visibili, vignetta intensa.</div>
      </div>
      <div class="arc-crt-screen arc-panel arc-panel-cyan"
           style="
             --arc-crt-scanline-opacity: 0.06;
             --arc-crt-line-size: 6px;
             --arc-crt-vignette-opacity: 0.4;
             max-width:380px;min-height:140px;
           ">
        <div class="arc-panel-header">LEGGERO (opacity 0.06)</div>
        <div class="arc-panel-body">Scanlines sottili, vignetta morbida.</div>
      </div>
    </div>
  `,
}
