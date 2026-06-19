import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'
import SectionHeading from './SectionHeading'
import { TESTIMONIALS } from '../constants'
import { StarIcon } from './Icons'

// ============================================================
// قسم آراء العملاء — كاروسيل بحركة سلسة
// ============================================================

export default function Testimonials() {
  const ref = useScrollReveal<HTMLDivElement>()
  const reduce = useReducedMotion()
  const [index, setIndex] = useState(0)
  const [dir, setDir] = useState(1)
  const count = TESTIMONIALS.length

  const paginate = (d: number) => {
    setDir(d)
    setIndex((i) => (i + d + count) % count)
  }

  // تقدّم تلقائي (يتوقف عند تفضيل تقليل الحركة)
  useEffect(() => {
    if (reduce) return
    const t = setInterval(() => {
      setDir(1)
      setIndex((i) => (i + 1) % count)
    }, 5500)
    return () => clearInterval(t)
  }, [reduce, count])

  const current = TESTIMONIALS[index]

  return (
    <section id="testimonials" className="relative py-24">
      <div ref={ref} className="mx-auto max-w-4xl px-5">
        <SectionHeading
          eyebrow="آراء العملاء"
          title="ماذا يقول عملاؤنا في الرياض"
          subtitle="ثقة عملائنا هي أهم ما نحرص عليه في كل خدمة صيانة."
        />

        <div className="reveal relative">
          <div className="relative min-h-[260px] overflow-hidden rounded-3xl glass-strong p-8 md:p-12">
            <AnimatePresence mode="wait" custom={dir}>
              <motion.blockquote
                key={index}
                custom={dir}
                initial={{ opacity: 0, x: dir * 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: dir * -60 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="text-center"
              >
                {/* النجوم */}
                <div className="mb-5 flex justify-center gap-1 text-ice">
                  {Array.from({ length: current.rating }).map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5" />
                  ))}
                </div>

                <p className="mx-auto max-w-2xl font-body text-lg leading-loose text-frost/90">
                  ”{current.text}“
                </p>

                <footer className="mt-6">
                  <div className="font-display text-base font-bold text-frost">
                    {current.name}
                  </div>
                  <div className="font-body text-sm text-teal">
                    {current.area}
                  </div>
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          {/* أزرار التنقل */}
          <div className="mt-6 flex items-center justify-center gap-3">
            <button
              onClick={() => paginate(-1)}
              aria-label="السابق"
              className="flex h-10 w-10 items-center justify-center rounded-full glass text-frost transition-colors hover:bg-white/10"
            >
              ›
            </button>

            {/* نقاط المؤشر */}
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  aria-label={`رأي ${i + 1}`}
                  onClick={() => {
                    setDir(i > index ? 1 : -1)
                    setIndex(i)
                  }}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    i === index
                      ? 'w-7 bg-gradient-to-l from-ice to-teal'
                      : 'w-2.5 bg-silver/30 hover:bg-silver/50'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => paginate(1)}
              aria-label="التالي"
              className="flex h-10 w-10 items-center justify-center rounded-full glass text-frost transition-colors hover:bg-white/10"
            >
              ‹
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
