// ============================================================
// بيانات التواصل والمحتوى الثابت للموقع (عربي فقط)
// Central business content — Arabic only.
// ============================================================

export const PHONE_DISPLAY = '+966 58 261 2650'
export const PHONE_TEL = 'tel:+966582612650'

const WA_MESSAGE = encodeURIComponent(
  'مرحباً، أرغب في الاستفسار عن خدمة صيانة المكيفات.',
)
export const WHATSAPP_URL = `https://wa.me/966582612650?text=${WA_MESSAGE}`

export const CONTACT_NAME = 'شهزاد'
export const LOCATION = 'الرياض'

export const NAV_LINKS = [
  { id: 'home', label: 'الرئيسية' },
  { id: 'services', label: 'خدماتنا' },
  { id: 'gallery', label: 'أعمالنا' },
  { id: 'why', label: 'لماذا نحن' },
  { id: 'testimonials', label: 'آراء العملاء' },
  { id: 'contact', label: 'تواصل معنا' },
]

// خدمات صيانة المكيفات فقط
export interface Service {
  title: string
  desc: string
  icon: 'concealed' | 'central' | 'split' | 'advanced' | 'clean' | 'gas'
}

export const SERVICES: Service[] = [
  {
    title: 'صيانة المكيفات المخفية',
    desc: 'فحص وصيانة المكيفات المخفية (الدكت) داخل الأسقف مع تنظيف المجاري وضمان توزيع متوازن للهواء البارد.',
    icon: 'concealed',
  },
  {
    title: 'صيانة المكيفات المركزية',
    desc: 'صيانة شاملة لأنظمة التكييف المركزي للفلل والمباني، تشمل الوحدات والمواسير ولوحات التحكم.',
    icon: 'central',
  },
  {
    title: 'صيانة مكيفات السبليت',
    desc: 'تنظيف وصيانة الوحدات الداخلية والخارجية لمكيفات السبليت لاستعادة كفاءة التبريد وتقليل الضوضاء.',
    icon: 'split',
  },
  {
    title: 'أنظمة التكييف المتطورة',
    desc: 'صيانة الأنظمة الحديثة والذكية وأنظمة الـ VRF / الإنفرتر مع معايرة دقيقة وتحديث إعدادات التحكم.',
    icon: 'advanced',
  },
  {
    title: 'تنظيف وتعقيم المكيفات',
    desc: 'تنظيف عميق للفلاتر والملفات وتعقيم الوحدات للقضاء على الروائح والجراثيم وتحسين جودة الهواء.',
    icon: 'clean',
  },
  {
    title: 'شحن غاز الفريون والفحص الدوري',
    desc: 'كشف التسريبات وشحن غاز الفريون بالكمية المثالية مع فحص دوري وقائي يحافظ على أداء المكيف.',
    icon: 'gas',
  },
]

export interface WhyItem {
  title: string
  desc: string
  icon: 'tech' | 'fast' | 'price' | 'warranty'
}

export const WHY_US: WhyItem[] = [
  {
    title: 'فنيون متخصصون',
    desc: 'فريق مدرّب وخبير في جميع أنواع المكيفات وأحدث الأنظمة.',
    icon: 'tech',
  },
  {
    title: 'خدمة سريعة',
    desc: 'استجابة عاجلة وحضور في نفس اليوم داخل مدينة الرياض.',
    icon: 'fast',
  },
  {
    title: 'أسعار مناسبة',
    desc: 'أسعار واضحة وعادلة بدون رسوم خفية ومعاينة شفافة.',
    icon: 'price',
  },
  {
    title: 'ضمان على العمل',
    desc: 'نضمن جودة الصيانة ونتابع معك بعد إتمام الخدمة.',
    icon: 'warranty',
  },
]

export interface Stat {
  value: number
  suffix: string
  label: string
}

export const STATS: Stat[] = [
  { value: 12, suffix: '+', label: 'سنوات خبرة' },
  { value: 5000, suffix: '+', label: 'مكيف تمت صيانته' },
  { value: 98, suffix: '٪', label: 'رضا العملاء' },
  { value: 24, suffix: '/7', label: 'دعم وخدمة' },
]

export interface Step {
  num: string
  title: string
  desc: string
  icon: 'phone' | 'visit' | 'wrench'
}

export const STEPS: Step[] = [
  {
    num: '١',
    title: 'اتصل بنا',
    desc: 'تواصل معنا هاتفياً أو عبر واتساب واطلب موعد الصيانة المناسب لك.',
    icon: 'phone',
  },
  {
    num: '٢',
    title: 'نحضر للمعاينة',
    desc: 'يصل الفني في الموعد المحدد لفحص المكيف وتحديد المشكلة بدقة.',
    icon: 'visit',
  },
  {
    num: '٣',
    title: 'صيانة احترافية',
    desc: 'نُنجز الصيانة باحترافية ونتأكد من عمل المكيف بكفاءة قبل المغادرة.',
    icon: 'wrench',
  },
]

export interface Testimonial {
  name: string
  area: string
  text: string
  rating: number
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'أبو فهد',
    area: 'حي الياسمين، الرياض',
    text: 'تواصلت معهم لصيانة المكيف المركزي في الفيلا، حضروا بسرعة والفني محترف جداً. رجع التبريد ممتاز والسعر معقول.',
    rating: 5,
  },
  {
    name: 'نورة العتيبي',
    area: 'حي النرجس، الرياض',
    text: 'نظّفوا مكيفات السبليت وعقّموها بشكل احترافي، اختفت الروائح وأصبح الهواء أنظف. خدمة راقية وأنصح بهم.',
    rating: 5,
  },
  {
    name: 'م. خالد الدوسري',
    area: 'حي الملقا، الرياض',
    text: 'عندي نظام تكييف متطور وكنت خايف من الصيانة، لكنهم تعاملوا معه باحترافية عالية ومعايرة دقيقة. شغل نظيف ومضمون.',
    rating: 5,
  },
  {
    name: 'سارة القحطاني',
    area: 'حي العقيق، الرياض',
    text: 'المكيفات المخفية كانت ما تبرّد زين، اكتشفوا المشكلة بالدكت وصلّحوها في نفس اليوم. التزام بالموعد وأسعار واضحة.',
    rating: 5,
  },
]
