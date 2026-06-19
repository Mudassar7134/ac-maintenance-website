import { motion } from 'framer-motion'
import { WhatsAppIcon } from './Icons'
import { WHATSAPP_URL } from '../constants'

// ============================================================
// زر واتساب عائم ثابت يظهر دائماً
// Always-visible floating WhatsApp button (bottom of screen).
// ============================================================

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="تواصل عبر واتساب"
      className="fixed bottom-5 left-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_30px_rgba(37,211,102,0.5)]"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, type: 'spring', stiffness: 260, damping: 18 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.92 }}
    >
      {/* نبض دائري */}
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30" />
      <WhatsAppIcon className="relative h-7 w-7" />
    </motion.a>
  )
}
