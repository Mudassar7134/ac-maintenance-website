import { useScrollReveal } from '../hooks/useScrollReveal'
import SectionHeading from './SectionHeading'
import {
  PhoneIcon,
  WhatsAppIcon,
  VisitIcon,
  TechIcon,
  SnowflakeIcon,
} from './Icons'
import {
  PHONE_TEL,
  PHONE_DISPLAY,
  WHATSAPP_URL,
  CONTACT_NAME,
  LOCATION,
} from '../constants'

// ============================================================
// قسم التواصل — أزرار اتصال وواتساب كبيرة + بيانات
// ============================================================

export default function Contact() {
  const ref = useScrollReveal<HTMLDivElement>()

  return (
    <section id="contact" className="relative py-24">
      <div ref={ref} className="mx-auto max-w-5xl px-5">
        <SectionHeading
          eyebrow="تواصل معنا"
          title="احجز صيانة مكيفك الآن"
          subtitle="فريقنا جاهز لخدمتك في جميع أنحاء الرياض — تواصل معنا واحصل على معاينة سريعة."
        />

        <div className="reveal overflow-hidden rounded-[2rem] glass-strong p-8 md:p-12">
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
            {/* الأزرار */}
            <div className="order-2 flex flex-col gap-4 md:order-1">
              <a
                href={PHONE_TEL}
                className="btn-glow group flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-l from-glacier to-teal px-6 py-5 font-display text-lg font-bold text-abyss shadow-glow transition-transform hover:scale-[1.03]"
              >
                <PhoneIcon className="h-6 w-6" />
                اتصل الآن
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 rounded-2xl border border-[#25D366]/40 bg-[#25D366]/12 px-6 py-5 font-display text-lg font-bold text-[#aef5c8] transition-all hover:bg-[#25D366]/22 hover:shadow-[0_0_35px_rgba(37,211,102,0.4)]"
              >
                <WhatsAppIcon className="h-6 w-6" />
                راسلنا عبر واتساب
              </a>

              <p className="mt-1 text-center font-body text-sm text-silver/70">
                متاحون للرد على استفساراتك بخصوص صيانة المكيفات
              </p>
            </div>

            {/* بيانات التواصل */}
            <ul className="order-1 space-y-5 md:order-2">
              <li className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/5 text-ice ring-1 ring-inset ring-white/10">
                  <PhoneIcon className="h-6 w-6" />
                </span>
                <div>
                  <div className="font-body text-sm text-silver/70">
                    الهاتف / واتساب
                  </div>
                  <a
                    href={PHONE_TEL}
                    dir="ltr"
                    className="font-display text-lg font-bold text-frost"
                  >
                    {PHONE_DISPLAY}
                  </a>
                </div>
              </li>

              <li className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/5 text-teal ring-1 ring-inset ring-white/10">
                  <TechIcon className="h-6 w-6" />
                </span>
                <div>
                  <div className="font-body text-sm text-silver/70">
                    اسم المسؤول
                  </div>
                  <div className="font-display text-lg font-bold text-frost">
                    {CONTACT_NAME}
                  </div>
                </div>
              </li>

              <li className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/5 text-ice ring-1 ring-inset ring-white/10">
                  <VisitIcon className="h-6 w-6" />
                </span>
                <div>
                  <div className="font-body text-sm text-silver/70">
                    منطقة الخدمة
                  </div>
                  <div className="font-display text-lg font-bold text-frost">
                    {LOCATION} وضواحيها
                  </div>
                </div>
              </li>

              <li className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/5 text-teal ring-1 ring-inset ring-white/10">
                  <SnowflakeIcon className="h-6 w-6" />
                </span>
                <div>
                  <div className="font-body text-sm text-silver/70">
                    أوقات العمل
                  </div>
                  <div className="font-display text-lg font-bold text-frost">
                    يومياً — خدمة سريعة في نفس اليوم
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
