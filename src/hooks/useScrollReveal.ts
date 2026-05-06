'use client'
import { useEffect, useRef, type RefObject } from 'react'

interface RevealOptions {
  y?: number
  x?: number
  duration?: number
  delay?: number
  stagger?: number
  childSelector?: string
  start?: string
}

export function useScrollReveal<T extends HTMLElement>(
  options: RevealOptions = {}
): RefObject<T | null> {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    let ctx: { revert: () => void } | null = null

    const init = async () => {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      if (!ref.current) return

      const {
        y = 36,
        x = 0,
        duration = 0.8,
        delay = 0,
        stagger = 0,
        childSelector,
        start = 'top 88%',
      } = options

      ctx = gsap.context(() => {
        const targets = childSelector
          ? ref.current!.querySelectorAll(childSelector)
          : [ref.current!]

        gsap.from(targets, {
          y,
          x,
          opacity: 0,
          duration,
          delay,
          stagger,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: ref.current,
            start,
            toggleActions: 'play none none none',
          },
        })
      }, ref)
    }

    init()

    return () => {
      ctx?.revert()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return ref
}
