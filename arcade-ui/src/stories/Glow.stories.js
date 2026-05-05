// src/stories/Glow.stories.js

/** @type { import('@storybook/html').Meta } */
export default {
  title: 'Effects/Glow',
}

/* ── Text Glow ─────────────────────────────────────────────────────────── */

/** @type { import('@storybook/html').StoryObj } */
export const TextGlow = {
  name: 'Text glow',
  render: () => `
    <div style="padding:2rem;display:flex;flex-direction:column;gap:1.5rem;">
      <span class="arc-glow-cyan"  style="font-family:var(--arc-font-pixel);font-size:2rem;">CYAN GLOW</span>
      <span class="arc-glow-red"   style="font-family:var(--arc-font-pixel);font-size:2rem;">RED GLOW</span>
      <span class="arc-glow-yellow"style="font-family:var(--arc-font-pixel);font-size:2rem;">YELLOW GLOW</span>
      <span class="arc-glow-green" style="font-family:var(--arc-font-pixel);font-size:2rem;">GREEN GLOW</span>
      <span class="arc-glow-purple"style="font-family:var(--arc-font-pixel);font-size:2rem;">PURPLE GLOW</span>
    </div>
  `,
}

/* ── Box Glow ──────────────────────────────────────────────────────────── */

export const BoxGlow = {
  name: 'Box glow',
  render: () => `
    <div style="padding:2rem;display:flex;gap:1.5rem;flex-wrap:wrap;">
      <div class="arc-box-glow-cyan"   style="padding:1rem 1.5rem;border:2px solid var(--arc-color-cyan);font-family:var(--arc-font-pixel);color:var(--arc-color-cyan);">CYAN</div>
      <div class="arc-box-glow-red"    style="padding:1rem 1.5rem;border:2px solid var(--arc-color-red);font-family:var(--arc-font-pixel);color:var(--arc-color-red);">RED</div>
      <div class="arc-box-glow-yellow" style="padding:1rem 1.5rem;border:2px solid var(--arc-color-yellow);font-family:var(--arc-font-pixel);color:var(--arc-color-yellow);">YELLOW</div>
      <div class="arc-box-glow-green"  style="padding:1rem 1.5rem;border:2px solid var(--arc-color-green);font-family:var(--arc-font-pixel);color:var(--arc-color-green);">GREEN</div>
      <div class="arc-box-glow-purple" style="padding:1rem 1.5rem;border:2px solid var(--arc-color-purple);font-family:var(--arc-font-pixel);color:var(--arc-color-purple);">PURPLE</div>
    </div>
  `,
}

/* ── Blink ─────────────────────────────────────────────────────────────── */

export const Blink = {
  name: '.arc-u-blink',
  render: () => `
    <div style="padding:2rem;display:flex;flex-direction:column;gap:1.5rem;align-items:flex-start;">
      <span class="arc-glow-yellow arc-u-blink" style="font-family:var(--arc-font-pixel);font-size:1.5rem;">
        ► INSERT COIN ◄
      </span>
      <span class="arc-glow-cyan arc-u-blink" style="font-family:var(--arc-font-pixel);font-size:1rem;">
        ▮ CURSOR BLINK
      </span>
    </div>
  `,
}

/* ── Pulse ─────────────────────────────────────────────────────────────── */

export const Pulse = {
  name: '.arc-u-pulse',
  render: () => `
    <div style="padding:2rem;display:flex;flex-direction:column;gap:2rem;align-items:flex-start;">
      <span class="arc-glow-cyan arc-u-pulse" style="font-family:var(--arc-font-pixel);font-size:2rem;">
        PULSE TEXT
      </span>
      <div class="arc-box-glow-red arc-u-pulse" style="padding:1rem 2rem;border:2px solid var(--arc-color-red);font-family:var(--arc-font-pixel);color:var(--arc-color-red);">
        PULSE BOX
      </div>
      <button class="arc-btn arc-btn-primary arc-u-pulse">
        PULSE BUTTON
      </button>
    </div>
  `,
}

/* ── Glitch ────────────────────────────────────────────────────────────── */

export const Glitch = {
  name: '.arc-u-glitch',
  render: () => `
    <div style="padding:2rem;display:flex;flex-direction:column;gap:2.5rem;align-items:flex-start;">
      <span
        class="arc-u-glitch arc-glow-cyan"
        data-text="GAME OVER"
        style="font-family:var(--arc-font-pixel);font-size:3rem;">
        GAME OVER
      </span>
      <span
        class="arc-u-glitch arc-glow-red"
        data-text="ERROR 404"
        style="font-family:var(--arc-font-pixel);font-size:2rem;">
        ERROR 404
      </span>
      <span
        class="arc-u-glitch arc-glow-yellow"
        data-text="HIGH SCORE"
        style="font-family:var(--arc-font-pixel);font-size:2rem;">
        HIGH SCORE
      </span>
      <p style="font-family:var(--arc-font-mono);font-size:.75rem;color:var(--arc-color-text-muted);max-width:380px;">
        Richiede <code>data-text</code> con lo stesso testo dell'elemento per il layer cromatico.
      </p>
    </div>
  `,
}

/* ── Effects Showcase ──────────────────────────────────────────────────── */

export const EffectsShowcase = {
  name: 'Effects Showcase',
  render: () => `
    <div style="padding:2rem;display:flex;flex-direction:column;gap:3rem;max-width:700px;">

      <!-- Hero title -->
      <div style="text-align:center;">
        <h1
          class="arc-u-glitch arc-glow-cyan"
          data-text="ARCADE UI"
          style="font-family:var(--arc-font-pixel);font-size:3.5rem;letter-spacing:.2em;">
          ARCADE UI
        </h1>
        <p class="arc-glow-yellow arc-u-blink" style="font-family:var(--arc-font-pixel);margin-top:1rem;">
          ► INSERT COIN TO CONTINUE ◄
        </p>
      </div>

      <!-- Text glow palette -->
      <div class="arc-panel arc-panel-cyan">
        <div class="arc-panel-header">TEXT GLOW PALETTE</div>
        <div class="arc-panel-body" style="display:flex;flex-direction:column;gap:.75rem;">
          <span class="arc-glow-cyan"  style="font-family:var(--arc-font-pixel);">▸ .arc-glow-cyan</span>
          <span class="arc-glow-red"   style="font-family:var(--arc-font-pixel);">▸ .arc-glow-red</span>
          <span class="arc-glow-yellow"style="font-family:var(--arc-font-pixel);">▸ .arc-glow-yellow</span>
          <span class="arc-glow-green" style="font-family:var(--arc-font-pixel);">▸ .arc-glow-green</span>
          <span class="arc-glow-purple"style="font-family:var(--arc-font-pixel);">▸ .arc-glow-purple</span>
        </div>
      </div>

      <!-- Box glow + components -->
      <div style="display:flex;gap:1rem;flex-wrap:wrap;align-items:center;">
        <button class="arc-btn arc-btn-primary arc-box-glow-cyan arc-u-pulse">READY</button>
        <button class="arc-btn arc-btn-danger  arc-box-glow-red">DANGER</button>
        <span   class="arc-badge arc-badge-yellow arc-box-glow-yellow arc-u-pulse">★ NEW</span>
        <span   class="arc-badge arc-badge-green  arc-box-glow-green">✓ OK</span>
        <span   class="arc-badge arc-badge-purple arc-box-glow-purple">MAGIC</span>
      </div>

      <!-- CRT screen con glow -->
      <div class="arc-crt-screen arc-panel arc-panel-purple" style="max-width:100%;">
        <div class="arc-panel-header">
          <span class="arc-glow-purple">SYSTEM STATUS</span>
          <span class="arc-badge arc-badge-cyan arc-badge-pulse arc-u-pulse" style="margin-left:auto;">LIVE</span>
        </div>
        <div class="arc-panel-body" style="font-family:var(--arc-font-terminal);line-height:2;">
          <div>&gt; CPU <span class="arc-glow-green">██████████</span> 12%</div>
          <div>&gt; MEM <span class="arc-glow-yellow">████████░░</span> 78%</div>
          <div>&gt; GPU <span class="arc-glow-red arc-u-pulse">██████████</span> 99%</div>
        </div>
      </div>

    </div>
  `,
}
