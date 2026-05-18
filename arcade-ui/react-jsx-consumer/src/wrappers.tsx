/**
 * Thin wrappers — optional alternative to relying on raw `data-*` in JSX.
 * Prefer these when you want explicit props and shared defaults instead of stringly attributes.
 *
 * @see README § TypeScript + React (JSX)
 */
import type { ButtonHTMLAttributes } from 'react'

export type ArcButtonVariant = 'danger' | 'ghost' | 'primary'

export type ArcButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> & {
  /** Defaults to `primary`. */
  variant?: ArcButtonVariant | undefined
  /** Passed through as `data-arc-sound-hover`. */
  arcSoundHover?: string | undefined
  /** Passed through as `data-arc-sound-click`. */
  arcSoundClick?: string | undefined
}

const VARIANT_CLASS: Record<ArcButtonVariant, string> = {
  primary: 'arc-btn arc-btn-primary',
  ghost: 'arc-btn arc-btn-ghost',
  danger: 'arc-btn arc-btn-danger',
}

export function ArcButton({
  variant = 'primary',
  arcSoundHover,
  arcSoundClick,
  className,
  ...rest
}: ArcButtonProps) {
  const base = VARIANT_CLASS[variant]
  const cls = className ? `${base} ${className}` : base

  return (
    <button
      type="button"
      className={cls}
      {...(arcSoundHover !== undefined ? { 'data-arc-sound-hover': arcSoundHover } : {})}
      {...(arcSoundClick !== undefined ? { 'data-arc-sound-click': arcSoundClick } : {})}
      {...rest}
    />
  )
}

export type ArcModalTriggerProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'type' | 'data-arc-modal-open'
> & {
  /** Backdrop element `id` (`data-arc-modal-open`). */
  modalId: string
}

export function ArcModalTrigger({ modalId, ...rest }: ArcModalTriggerProps) {
  return <button type="button" {...rest} data-arc-modal-open={modalId} />
}
