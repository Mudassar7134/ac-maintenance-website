import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'
import SectionHeading from './SectionHeading'
import Img from './Img'
import { IMAGES } from '../images'

// ============================================================
// معرض الأعمال — شبكة صور لأعمال صيانة المكيفات + عارض مكبّر
// Work gallery with hover-zoom grid + lightbox modal.
// ============================================================

export default function Gallery() {
  const ref = useScrollReveal<HTMLDivElement>()
  const [active, setActive] = useState<number | null>(null)

  return (
    <section id="gallery" className="relative py-24">
      <div ref={ref} className="mx-auto max-w-7xl px-5">
        <SectionHeading
          eyebrow="معرض أعمالنا"
          title="لمحة من أعمال الصيانة"
          subtitle="نماذج من خدماتنا في صيانة وتنظيف وإصلاح المكيفات بمختلف أنواعها."
        />

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {IMAGES.gallery.map((photo, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`reveal group relative overflow-hidden rounded-2xl border border-white/10 transition-all duration-300 hover:border-ice/40 hover:shadow-glow ${
                i % 5 === 0 ? 'col-span-2 row-span-2' : ''
              }`}
              aria-label={`عرض الصورة: ${photo.alt}`}
            >
              <Img
                src={photo.src}
                alt={photo.alt}
                label={photo.alt}
                className={i % 5 === 0 ? 'aspect-square' : 'aspect-[4/3]'}
                imgClassName="transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-abyss/80 via-transparent to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="font-body text-xs font-medium text-frost">
                  {photo.alt}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* العارض المكبّر */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-abyss/85 p-5 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl overflow-hidden rounded-3xl border border-ice/20 shadow-card"
            >
              <Img
                src={IMAGES.gallery[active].src}
                alt={IMAGES.gallery[active].alt}
                label={IMAGES.gallery[active].alt}
                className="aspect-video w-full"
              />
              <div className="flex items-center justify-between bg-midnight/90 px-5 py-4">
                <span className="font-display text-base font-bold text-frost">
                  {IMAGES.gallery[active].alt}
                </span>
                <button
                  onClick={() => setActive(null)}
                  aria-label="إغلاق"
                  className="flex h-9 w-9 items-center justify-center rounded-full glass text-frost transition-colors hover:bg-white/10"
                >
                  ✕
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
