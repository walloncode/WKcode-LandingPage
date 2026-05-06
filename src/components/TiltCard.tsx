'use client'
import { useRef, useCallback } from 'react'

type Props = {
  children: React.ReactNode
  className?: string
  intensity?: number
  glare?: boolean
}

export default function TiltCard({
  children,
  className = '',
  intensity = 10,
  glare = true,
}: Props) {
  const cardRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)
  const glareRef = useRef<HTMLDivElement>(null)

  const handleMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const el = cardRef.current
      const inner = innerRef.current
      if (!el || !inner) return
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const cx = rect.width / 2
      const cy = rect.height / 2
      const rotX = ((y - cy) / cy) * -intensity
      const rotY = ((x - cx) / cx) * intensity

      inner.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(20px)`

      if (glareRef.current && glare) {
        const px = (x / rect.width) * 100
        const py = (y / rect.height) * 100
        glareRef.current.style.background = `radial-gradient(circle at ${px}% ${py}%, rgba(0,191,255,0.35) 0%, transparent 55%)`
        glareRef.current.style.opacity = '1'
      }
    },
    [intensity, glare]
  )

  const handleLeave = useCallback(() => {
    if (innerRef.current) {
      innerRef.current.style.transform =
        'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)'
    }
    if (glareRef.current) {
      glareRef.current.style.opacity = '0'
    }
  }, [])

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`group/tilt ${className}`}
      style={{ perspective: '1000px' }}
    >
      <div
        ref={innerRef}
        className="relative h-full w-full transition-transform duration-200 ease-out"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {children}
        {glare && (
          <div
            ref={glareRef}
            className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 transition-opacity duration-200"
            style={{ mixBlendMode: 'screen' }}
          />
        )}
      </div>
    </div>
  )
}
