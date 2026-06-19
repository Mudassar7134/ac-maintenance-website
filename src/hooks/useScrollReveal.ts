import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * useScrollReveal
 * Reveals every element carrying the `.reveal` class inside the returned
 * container ref, using GSAP ScrollTrigger with a staggered slide-up.
 * Respects prefers-reduced-motion (elements are simply shown).
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return

    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    const items = el.querySelectorAll<HTMLElement>('.reveal')
    if (prefersReduced) {
      items.forEach((i) => {
        i.style.opacity = '1'
        i.style.transform = 'none'
      })
      return
    }

    const ctx = gsap.context(() => {
      items.forEach((item) => {
        gsap.to(item, {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        })
      })
    }, el)

    return () => ctx.revert()
  }, [])

  return ref
}
