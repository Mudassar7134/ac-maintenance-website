import { useEffect, useRef, useState } from 'react'

/**
 * useCountUp — animates a number from 0 → target once the element enters
 * the viewport. Respects prefers-reduced-motion (jumps straight to target).
 */
export function useCountUp(target: number, duration = 1800) {
  const [value, setValue] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || started.current) return
          started.current = true

          if (prefersReduced) {
            setValue(target)
            return
          }

          const start = performance.now()
          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1)
            // easeOutExpo for a satisfying finish
            const eased =
              progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
            setValue(Math.round(eased * target))
            if (progress < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        })
      },
      { threshold: 0.4 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  return { value, ref }
}
