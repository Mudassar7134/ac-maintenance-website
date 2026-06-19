import {
  SnowflakeIcon,
  PhoneIcon,
  WhatsAppIcon,
  VisitIcon,
} from './Icons'
import {
  NAV_LINKS,
  PHONE_TEL,
  PHONE_DISPLAY,
  WHATSAPP_URL,
  CONTACT_NAME,
  LOCATION,
} from '../constants'

// ============================================================
// تذييل الموقع — بيانات التواصل وحقوق النشر
// ============================================================

export default function Footer() {
  const year = new Date().getFullYear()

  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className="relative border-t border-white/10 bg-midnight/60 pt-14">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 pb-10 md:grid-cols-3">
        {/* التعريف */}
        <div>
          <div className="mb-4 flex items-center gap-2 text-frost">
            <SnowflakeIcon className="h-7 w-7 text-ice" />
            <span className="font-display text-xl font-extrabold">
              تبريد <span className="text-gradient">الرياض</span>
            </span>
          </div>
          <p className="max-w-xs font-body text-sm leading-loose text-silver/70">
            متخصصون في صيانة المكيفات المخفية والمركزية والسبليت وأنظمة التكييف
            المتطورة، بأيدي فنيين محترفين في مدينة {LOCATION}.
          </p>
        </div>

        {/* روابط سريعة */}
        <div>
          <h4 className="mb-4 font-display text-base font-bold text-frost">
            روابط سريعة
          </h4>
          <ul className="space-y-2.5">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => go(link.id)}
                  className="font-body text-sm text-silver/70 transition-colors hover:text-ice"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* تواصل */}
        <div>
          <h4 className="mb-4 font-display text-base font-bold text-frost">
            تواصل معنا
          </h4>
          <ul className="space-y-3 font-body text-sm text-silver/75">
            <li className="flex items-center gap-2">
              <PhoneIcon className="h-4 w-4 text-ice" />
              <a href={PHONE_TEL} dir="ltr" className="hover:text-frost">
                {PHONE_DISPLAY}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-frost"
              >
                تواصل عبر واتساب
              </a>
            </li>
            <li className="flex items-center gap-2">
              <VisitIcon className="h-4 w-4 text-teal" />
              {LOCATION} — المملكة العربية السعودية
            </li>
            <li className="text-silver/60">المسؤول: {CONTACT_NAME}</li>
          </ul>
        </div>
      </div>

      {/* حقوق النشر */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-5 text-center font-body text-xs text-silver/55">
          © {year} تبريد الرياض لصيانة المكيفات — جميع الحقوق محفوظة.
        </div>
      </div>
    </footer>
  )
}
