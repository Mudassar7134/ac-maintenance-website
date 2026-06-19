// ============================================================
// أيقونات SVG مخصّصة متعلقة بصيانة المكيفات
// Custom AC-related SVG icons. Stroke inherits currentColor.
// ============================================================
import type { SVGProps } from 'react'

const base: SVGProps<SVGSVGElement> = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

/** وحدة سبليت داخلية + موجات هواء */
export const SplitIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <rect x="2.5" y="4" width="19" height="7" rx="2" />
    <line x1="2.5" y1="8" x2="21.5" y2="8" />
    <path d="M6 15c0 1.2 1 1.2 1 2.4M11 15c0 1.4 1.2 1.4 1.2 2.8M16.5 15c0 1.2 1 1.2 1 2.4" />
  </svg>
)

/** مكيف مخفي في السقف (دكت) */
export const ConcealedIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M3 4h18" />
    <rect x="6" y="7" width="12" height="6" rx="1.5" />
    <path d="M8.5 13v3M12 13v3.5M15.5 13v3" />
    <path d="M9 10h6" />
  </svg>
)

/** نظام مركزي / وحدة خارجية كبيرة */
export const CentralIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <rect x="3" y="4" width="18" height="14" rx="2" />
    <circle cx="9" cy="11" r="3" />
    <path d="M9 8.5v5M6.5 11h5" />
    <path d="M15 8h4M15 11h4M15 14h4" />
  </svg>
)

/** أنظمة متطورة / ذكية */
export const AdvancedIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <rect x="4" y="3" width="16" height="11" rx="2" />
    <circle cx="12" cy="8.5" r="2.3" />
    <path d="M12 1.5v1.5M12 14v1.5M4 8.5H2.5M21.5 8.5H20" />
    <path d="M8 18h8M10 18v3M14 18v3" />
  </svg>
)

/** تنظيف وتعقيم (رذاذ) */
export const CleanIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M9 3h4v4H9z" />
    <path d="M11 7v3a3 3 0 0 0-3 3v7h7v-7a3 3 0 0 0-3-3" />
    <path d="M15 5h2M16 3v2M18 8h2M19 6v4" />
  </svg>
)

/** شحن غاز الفريون (قارورة) */
export const GasIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M9 2h6M10 2v3M14 2v3" />
    <path d="M8 9a4 4 0 0 1 8 0v9a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3z" />
    <path d="M8 13h8" />
    <path d="M12 15.5v3" />
  </svg>
)

/** فني / عامل متخصص */
export const TechIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="7" r="3.2" />
    <path d="M5.5 21a6.5 6.5 0 0 1 13 0" />
    <path d="M9 4.5 12 6l3-1.5" />
  </svg>
)

/** سرعة / استجابة */
export const FastIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M13 2 4 14h7l-1 8 9-12h-7z" />
  </svg>
)

/** سعر / علامة */
export const PriceIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M3 11.5 11.5 3H20a1 1 0 0 1 1 1v8.5L12.5 21a1.5 1.5 0 0 1-2.1 0L3 13.6a1.5 1.5 0 0 1 0-2.1z" />
    <circle cx="16.5" cy="7.5" r="1.3" />
  </svg>
)

/** ضمان / درع */
export const WarrantyIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M12 2.5 5 5v6c0 5 3.5 8 7 9.5 3.5-1.5 7-4.5 7-9.5V5z" />
    <path d="m9.5 12 1.8 1.8L15 9.8" />
  </svg>
)

/** هاتف */
export const PhoneIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M6.5 3.5 9 4l1 3.5L8 9.5c.9 2 2.5 3.6 4.5 4.5l2-2 3.5 1 .5 2.5c0 1-1 2-2 2A14 14 0 0 1 4.5 5.5c0-1 1-2 2-2z" />
  </svg>
)

/** زيارة / معاينة (موقع) */
export const VisitIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
)

/** أدوات الصيانة (مفتاح ربط) */
export const WrenchIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M15 6a3.5 3.5 0 0 0-4.7 4.2L3.5 17l3.5 3.5 6.8-6.8A3.5 3.5 0 0 0 18 9.5l-2.2 2.2-2.3-2.3L15.7 7" />
  </svg>
)

/** واتساب */
export const WhatsAppIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l-.999 3.648 3.978-.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
  </svg>
)

/** نجمة تقييم */
export const StarIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="m12 2 2.95 5.98 6.6.96-4.78 4.66 1.13 6.57L12 17.98 5.6 20.17l1.13-6.57L1.95 8.94l6.6-.96z" />
  </svg>
)

/** ندفة ثلج */
export const SnowflakeIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <line x1="12" y1="2" x2="12" y2="22" />
    <line x1="3.5" y1="7" x2="20.5" y2="17" />
    <line x1="20.5" y1="7" x2="3.5" y2="17" />
    <polyline points="9.5 3.5 12 5 14.5 3.5" />
    <polyline points="9.5 20.5 12 19 14.5 20.5" />
  </svg>
)
