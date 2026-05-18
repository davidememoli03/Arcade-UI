/**
 * CI-positive fixture: `jsx: react-jsx`, strict compiler options, real package resolution.
 */
import '@davide03memoli/arcade-ui/react'

import { useEffect } from 'react'

import { GlitchSurface } from './GlitchSurface.js'
import { useArcadeAudio } from './useArcadeAudio.js'
import { ArcButton, ArcModalTrigger } from './wrappers.js'

export function ArcadeJsxSmokeApp() {
  const audio = useArcadeAudio()

  useEffect(() => {
    void audio.getVolume()
  }, [audio])

  return (
    <GlitchSurface>
      <div className="arc-panel arc-panel-cyan">
        <p data-tooltip="Tooltip hook" className="arc-tooltip-bottom">
          Hover copy
        </p>
        <input
          type="range"
          min={0}
          max={100}
          defaultValue={50}
          data-arc-slider=""
          aria-label="volume"
        />
        <ArcModalTrigger modalId="demo-modal" className="arc-btn arc-btn-ghost">
          OPEN (wrapper)
        </ArcModalTrigger>
        <ArcButton variant="primary" arcSoundClick="win">
          WIN (wrapper)
        </ArcButton>
        <span className="arc-glitch" data-text="OK" data-arc-glitch-intensity="medium">
          OK
        </span>
      </div>
    </GlitchSurface>
  )
}
