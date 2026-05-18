import { useMemo } from 'react'

import { AudioManager } from '@davide03memoli/arcade-ui'

/**
 * Stable handle to the Arcade UI audio singleton — safe across React 18 / 19 renders.
 * AudioManager already persists preferences via sessionStorage.
 */
export function useArcadeAudio(): AudioManager {
  return useMemo(() => AudioManager.getInstance(), [])
}
