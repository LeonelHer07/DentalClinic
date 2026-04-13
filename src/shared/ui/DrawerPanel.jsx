import { useEffect, useState } from 'react'

import { Card } from './Card'

const EXIT_DURATION_MS = 260

export function DrawerPanel({ children, onClose, open = false, subtitle, title }) {
  const [shouldRender, setShouldRender] = useState(open)
  const [isVisible, setIsVisible] = useState(open)

  useEffect(() => {
    let timeoutId
    let frameId
    let nestedFrameId

    if (open) {
      frameId = window.requestAnimationFrame(() => {
        setShouldRender(true)
        nestedFrameId = window.requestAnimationFrame(() => setIsVisible(true))
      })
    } else if (shouldRender) {
      frameId = window.requestAnimationFrame(() => {
        setIsVisible(false)
      })
      timeoutId = window.setTimeout(() => {
        setShouldRender(false)
      }, EXIT_DURATION_MS)
    }

    return () => {
      window.clearTimeout(timeoutId)
      window.cancelAnimationFrame(frameId)
      window.cancelAnimationFrame(nestedFrameId)
    }
  }, [open, shouldRender])

  useEffect(() => {
    if (!shouldRender) {
      return undefined
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose?.()
      }
    }

    const { overflow } = document.body.style

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = overflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose, shouldRender])

  if (!shouldRender) {
    return null
  }

  return (
    <div
      aria-modal="true"
      className={[
        'fixed inset-0 z-50 flex items-center justify-center bg-slate-950/32 p-4 backdrop-blur-sm transition-opacity duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]',
        isVisible
          ? 'opacity-100'
          : 'opacity-0',
      ].join(' ')}
      onClick={onClose}
      role="dialog"
    >
      <Card
        className={[
          'max-h-[calc(100vh-2rem)] w-full max-w-xl overflow-y-auto p-5 shadow-[0_28px_70px_rgba(15,23,42,0.22)] transform-gpu will-change-transform will-change-opacity transition-[transform,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]',
          isVisible
            ? 'translate-y-0 scale-100 opacity-100'
            : 'translate-y-3 scale-[0.985] opacity-0',
        ].join(' ')}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mb-5 flex items-start justify-between gap-3">
          <div>
            <h2 className="text-xl font-semibold tracking-[-0.03em] text-[var(--color-text-primary)]">
              {title}
            </h2>
            {subtitle ? (
              <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
                {subtitle}
              </p>
            ) : null}
          </div>
          <button
            className="text-sm text-[var(--color-text-muted)] transition hover:text-[var(--color-text-primary)]"
            onClick={onClose}
            type="button"
          >
            x
          </button>
        </div>
        {children}
      </Card>
    </div>
  )
}
