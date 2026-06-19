import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { NAV_LINKS, PHONE_TEL } from '../constants'
import { PhoneIcon, SnowflakeIcon } from './Icons'

// ============================================================
// شريط التنقل العلوي الثابت — مع خط سفلي متحرك عند المرور
// Sticky navbar with animated hover underline + mobile menu.
// ============================================================

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (id: string) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled ? 'glass-strong py-2 shadow-card' : 'bg-transparent py-4'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5">
        {/* الشعار */}
        <button
          onClick={() => go('home')}
          className="flex items-center gap-2 text-frost"
        >
          <SnowflakeIcon className="h-7 w-7 text-ice animate-spin-slow" />
          <span className="font-display text-lg font-extrabold tracking-tight">
            تبريد <span className="text-gradient">الرياض</span>
          </span>
        </button>

        {/* روابط سطح المكتب */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => go(link.id)}
                className="group relative py-1 font-body text-sm font-medium text-silver transition-colors hover:text-frost"
              >
                {link.label}
                {/* خط سفلي متحرك */}
                <span className="absolute -bottom-0.5 right-0 h-0.5 w-0 rounded-full bg-gradient-to-l from-ice to-teal transition-all duration-300 group-hover:w-full" />
              </button>
            </li>
          ))}
        </ul>

        {/* زر اتصال سطح المكتب */}
        <a
          href={PHONE_TEL}
          className="btn-glow hidden items-center gap-2 rounded-full bg-gradient-to-l from-glacier to-teal px-5 py-2.5 font-body text-sm font-bold text-abyss shadow-glow transition-transform hover:scale-105 md:flex"
        >
          <PhoneIcon className="h-4 w-4" />
          اتصل الآن
        </a>

        {/* زر القائمة للجوال */}
        <button
          onClick={() => setOpen((o) => !o)}
          aria-label="القائمة"
          className="flex flex-col gap-1.5 p-2 md:hidden"
        >
          <span
            className={`h-0.5 w-6 rounded bg-frost transition-all ${
              open ? 'translate-y-2 rotate-45' : ''
            }`}
          />
          <span
            className={`h-0.5 w-6 rounded bg-frost transition-all ${
              open ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`h-0.5 w-6 rounded bg-frost transition-all ${
              open ? '-translate-y-2 -rotate-45' : ''
            }`}
          />
        </button>
      </nav>

      {/* قائمة الجوال المنسدلة */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden md:hidden"
          >
            <ul className="mx-4 mt-3 flex flex-col gap-1 rounded-2xl glass-strong p-3">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => go(link.id)}
                    className="w-full rounded-xl px-4 py-3 text-right font-body text-silver transition-colors hover:bg-white/5 hover:text-frost"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <a
                  href={PHONE_TEL}
                  className="mt-1 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-l from-glacier to-teal px-4 py-3 font-bold text-abyss"
                >
                  <PhoneIcon className="h-4 w-4" />
                  اتصل الآن
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
