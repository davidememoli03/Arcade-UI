import { initGlitch } from '@davide03memoli/arcade-ui'
import type { ReactNode } from 'react'
import { useEffect, useRef } from 'react'

type Props = {
  children: ReactNode
}

/**
 * Scoped glitch setup on a subtree. `initGlitch` only writes `data-text` when missing,
 * so running it multiple times (including React Strict Mode dev remounts) is safe.
 */
export function GlitchSurface({ children }: Props) {
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = rootRef.current
    if (!root) return
    initGlitch(root)
  }, [])

  return <div ref={rootRef}>{children}</div>
}
