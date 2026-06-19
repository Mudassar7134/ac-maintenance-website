// ============================================================
// مصادر الصور — صور حقيقية تم اختيارها والتحقق منها بصرياً
// لتكون متعلقة فعلياً بصيانة المكيفات والفنيين.
//
// المصادر: Pexels و Unsplash (تراخيص مجانية تسمح بالاستخدام
// التجاري). كل رابط تمت معاينته للتأكد من محتواه.
//
// ⚠️ للاستبدال بصورك الخاصة (الأفضل لنشاط تجاري حقيقي):
//    1) ضع صورك في مجلد public/images/
//    2) بدّل الرابط أدناه إلى مثل '/images/your-photo.jpg'
// ============================================================

// Pexels: نمرّر الرابط الأساسي ونضيف أبعاد العرض
const px = (base: string, w = 800): string =>
  `${base}?auto=compress&cs=tinysrgb&w=${w}`

// Unsplash: نبني الرابط من معرّف الصورة
const un = (id: string, w = 800): string =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`

// روابط Pexels الأساسية (تمت معاينتها)
const P = {
  techWallSplit: 'https://images.pexels.com/photos/7347538/pexels-photo-7347538.jpeg', // فني يصلح سبليت خارجي
  techMaintenance: 'https://images.pexels.com/photos/5463576/pexels-photo-5463576.jpeg', // فني صيانة وحدة خارجية
  techGauges: 'https://images.pexels.com/photos/5463575/pexels-photo-5463575.jpeg', // فني مع مقياس غاز الفريون
  techRoof: 'https://images.pexels.com/photos/5463587/pexels-photo-5463587.jpeg', // فني على السطح
  modernInterior:
    'https://images.pexels.com/photos/8089196/pexels-photo-8089196.jpeg', // مساحة حديثة بتكييف مخفي
  techOutdoorInspect:
    'https://images.pexels.com/photos/32497161/pexels-photo-32497161/free-photo-of-technician-inspecting-outdoor-hvac-unit.jpeg',
  techWorkshop:
    'https://images.pexels.com/photos/33671149/pexels-photo-33671149/free-photo-of-air-conditioner-repair-technician-in-workshop.jpeg',
  techTraining1:
    'https://images.pexels.com/photos/33925031/pexels-photo-33925031/free-photo-of-training-session-on-ac-repair-techniques-in-delhi.jpeg',
  techTraining2:
    'https://images.pexels.com/photos/33958627/pexels-photo-33958627/free-photo-of-ac-repair-training-at-an-institute-in-new-delhi.jpeg',
}

export const IMAGES = {
  // القسم الرئيسي + شريط الدعوة (فنّيون أثناء العمل)
  heroTechnician: px(P.techWallSplit, 900),
  ctaBand: px(P.techMaintenance, 1400),

  // صور بطاقات الخدمات (المفتاح = حقل icon في constants.ts)
  service: {
    concealed: px(P.modernInterior), // مكيفات مخفية في مساحة حديثة
    central: px(P.techOutdoorInspect), // فني يفحص وحدة مركزية خارجية
    split: un('1757219525975-03b5984bc6e8'), // وحدة سبليت على الجدار
    advanced: un('1681042803902-f79c240d8f03'), // وحدة تكييف متطورة على المبنى
    clean: px(P.techWorkshop), // فني ينظّف/يصلح وحدات داخلية
    gas: px(P.techGauges), // شحن غاز الفريون بالمقياس
  } as Record<string, string>,

  // معرض الأعمال (كلها معاينة وتأكدنا أنها متعلقة بالمكيفات)
  gallery: [
    { src: px(P.techRoof, 700), alt: 'فني يصلح وحدة تكييف على السطح' },
    { src: px(P.techGauges, 700), alt: 'فحص وشحن غاز الفريون' },
    { src: un('1698479603408-1a66a6d9e80f', 700), alt: 'وحدات تكييف مركزية' },
    { src: un('1545649311-24d0ac00ae82', 700), alt: 'مكثفات مكيفات خارجية' },
    { src: un('1718203862467-c33159fdc504', 700), alt: 'مكيف سبليت' },
    { src: un('1705444509014-fed54b6191bf', 700), alt: 'صف من وحدات التكييف' },
    { src: px(P.techTraining1, 700), alt: 'صيانة احترافية للمكيفات' },
    { src: px(P.techWorkshop, 700), alt: 'فني صيانة مكيفات' },
  ],
}
