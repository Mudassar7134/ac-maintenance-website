import { useLayoutEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import CoolingBackground from './CoolingBackground'
import Img from './Img'
import { PhoneIcon, WhatsAppIcon, SnowflakeIcon, StarIcon, FastIcon } from './Icons'
import { PHONE_TEL, WHATSAPP_URL, LOCATION } from '../constants'
import { IMAGES } from '../images'

// ============================================================
// القسم الرئيسي (Hero) — نص + صورة فنّي
// ============================================================

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.2 } },
}
const item = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null)

  // بارالاكس خفيف للخلفية عند التمرير
  useLayoutEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce || !bgRef.current) return
    const ctx = gsap.context(() => {
      gsap.to(bgRef.current, {
        yPercent: 18,
        ease: 'none',
        scrollTrigger: {
          trigger: '#home',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pb-16 pt-28"
    >
      <div ref={bgRef} className="absolute inset-0">
        <CoolingBackground />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-5 lg:grid-cols-2">
        {/* العمود النصي */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="text-center lg:text-right"
        >
          <motion.div
            variants={item}
            className="mb-6 flex justify-center lg:justify-start"
          >
            <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-sm font-medium text-frost">
              <SnowflakeIcon className="h-4 w-4 text-ice" />
              خدمة صيانة مكيفات احترافية في {LOCATION}
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display text-3xl font-extrabold leading-[1.45] text-frost sm:text-4xl md:text-5xl md:leading-[1.4]"
          >
            صيانة المكيفات{' '}
            <span className="text-gradient">المخفية، المركزية، السبليت</span>،
            وأنظمة التكييف المتطورة بأيدي فنيين متخصصين.
          </motion.h1>

          <motion.p
            variants={item}
            className="mx-auto mt-6 max-w-xl font-body text-base leading-loose text-silver/90 md:text-lg lg:mx-0"
          >
            نُعيد لمكيفك كفاءة التبريد بأعلى معايير الجودة — فحص دقيق، صيانة سريعة،
            وضمان على العمل في جميع أنحاء الرياض.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start"
          >
            <a
              href={PHONE_TEL}
              className="btn-glow group flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-l from-glacier to-teal px-8 py-4 font-body text-base font-bold text-abyss shadow-glow transition-transform hover:scale-105 sm:w-auto"
            >
              <PhoneIcon className="h-5 w-5" />
              اتصل الآن
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-full border border-[#25D366]/40 bg-[#25D366]/10 px-8 py-4 font-body text-base font-bold text-[#aef5c8] backdrop-blur transition-all hover:bg-[#25D366]/20 hover:shadow-[0_0_30px_rgba(37,211,102,0.35)] sm:w-auto"
            >
              <WhatsAppIcon className="h-5 w-5" />
              واتساب
            </a>
          </motion.div>
        </motion.div>

        {/* عمود الصور */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto hidden w-full max-w-md lg:block"
        >
          {/* الصورة الرئيسية للفنّي */}
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 shadow-card ring-1 ring-ice/10">
            <Img
              src={IMAGES.heroTechnician}
              alt="فني متخصص في صيانة المكيفات"
              label="فني صيانة مكيفات"
              className="aspect-[4/5] w-full"
            />
            {/* تدرّج سفلي */}
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-abyss/80 to-transparent" />
          </div>

          {/* بطاقة تقييم عائمة */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -bottom-5 -left-5 flex items-center gap-3 rounded-2xl glass-strong p-4 shadow-glow"
          >
            <div className="flex gap-0.5 text-ice">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} className="h-4 w-4" />
              ))}
            </div>
            <div className="text-right">
              <div className="font-display text-sm font-bold text-frost">
                رضا العملاء
              </div>
              <div className="font-body text-xs text-silver/70">
                تقييم ٤٫٩ من ٥
              </div>
            </div>
          </motion.div>

          {/* بطاقة خدمة سريعة عائمة */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -right-4 top-6 flex items-center gap-2 rounded-2xl glass-strong px-4 py-3 shadow-glow-teal"
          >
            <FastIcon className="h-5 w-5 text-teal" />
            <span className="font-body text-xs font-bold text-frost">
              حضور في نفس اليوم
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* مؤشر التمرير */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-frost/40 p-1">
          <span className="h-2 w-1 rounded-full bg-ice" />
        </div>
      </motion.div>
    </section>
  )
}
