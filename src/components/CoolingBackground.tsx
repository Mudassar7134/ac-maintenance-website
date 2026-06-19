import { useMemo } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

// ============================================================
// خلفية التبريد المتحركة: تدفّق هواء + ندف ثلجية تنجرف
// Animated cooling visual — flowing airflow waves + drifting
// frost particles. Sits behind the hero content.
// ============================================================

export default function CoolingBackground() {
  const reduce = useReducedMotion()

  // ندف ثلجية بمواضع وأحجام عشوائية ثابتة
  const flakes = useMemo(
    () =>
      Array.from({ length: 16 }).map((_, i) => ({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: 4 + Math.random() * 10,
        delay: Math.random() * 6,
        dur: 7 + Math.random() * 8,
        opacity: 0.25 + Math.random() * 0.5,
      })),
    [],
  )

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* تدرّج معدني/جليدي متحرك */}
      <div className="absolute inset-0 bg-cool-radial" />
      <div
        className="absolute inset-0 opacity-60 animate-shimmer"
        style={{
          background:
            'linear-gradient(120deg, rgba(58,157,255,0.10), rgba(39,214,196,0.06) 35%, transparent 70%)',
          backgroundSize: '200% 200%',
        }}
      />

      {/* موجات تدفّق الهواء البارد */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1200 800"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="flow" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#7ad7ff" stopOpacity="0" />
            <stop offset="50%" stopColor="#7ad7ff" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#27d6c4" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.path
            key={i}
            d={`M-100 ${180 + i * 120} C 300 ${120 + i * 120}, 700 ${
              260 + i * 120
            }, 1300 ${160 + i * 120}`}
            fill="none"
            stroke="url(#flow)"
            strokeWidth={2}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={
              reduce
                ? { pathLength: 1, opacity: 0.4 }
                : {
                    pathLength: [0, 1, 0],
                    opacity: [0, 0.6, 0],
                    x: [-40, 40, -40],
                  }
            }
            transition={{
              duration: 9 + i * 1.5,
              repeat: reduce ? 0 : Infinity,
              ease: 'easeInOut',
              delay: i * 0.8,
            }}
          />
        ))}
      </svg>

      {/* ندف ثلجية تنجرف */}
      {flakes.map((f) => (
        <motion.span
          key={f.id}
          className="absolute rounded-full"
          style={{
            top: `${f.top}%`,
            left: `${f.left}%`,
            width: f.size,
            height: f.size,
            background:
              'radial-gradient(circle, rgba(189,236,255,0.9), rgba(122,215,255,0.1))',
            opacity: f.opacity,
          }}
          animate={
            reduce
              ? undefined
              : { y: [0, 60, 0], x: [0, -30, 0], opacity: [0, f.opacity, 0] }
          }
          transition={{
            duration: f.dur,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: f.delay,
          }}
        />
      ))}

      {/* تدرّج سفلي لدمج الخلفية مع المحتوى */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-abyss to-transparent" />
    </div>
  )
}
