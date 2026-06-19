import { useScrollReveal } from '../hooks/useScrollReveal'
import Img from './Img'
import { IMAGES } from '../images'
import { PhoneIcon, WhatsAppIcon } from './Icons'
import { PHONE_TEL, WHATSAPP_URL } from '../constants'

// ============================================================
// شريط دعوة للتواصل — خلفية صورة فنّي + طبقة لونية + أزرار
// Full-width CTA band over a technician photo background.
// ============================================================

export default function CtaBand() {
  const ref = useScrollReveal<HTMLDivElement>()

  return (
    <section ref={ref} className="relative px-5 py-16">
      <div className="reveal relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-ice/15">
        {/* الخلفية */}
        <Img
          src={IMAGES.ctaBand}
          alt="فني صيانة مكيفات أثناء العمل"
          className="absolute inset-0 h-full w-full"
        />
        {/* طبقة لونية للتباين */}
        <div className="absolute inset-0 bg-gradient-to-l from-abyss/95 via-midnight/85 to-steel/80" />

        <div className="relative z-10 flex flex-col items-center gap-6 px-6 py-14 text-center md:px-12">
          <h2 className="max-w-2xl font-display text-2xl font-extrabold leading-snug text-frost md:text-4xl">
            مكيفك لا يبرّد كما يجب؟ نحن هنا لخدمتك في{' '}
            <span className="text-gradient">الرياض</span>
          </h2>
          <p className="max-w-xl font-body text-base leading-loose text-silver/85">
            تواصل معنا الآن واحصل على معاينة سريعة وصيانة احترافية بأيدي فنيين
            متخصصين وبضمان على العمل.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href={PHONE_TEL}
              className="btn-glow flex items-center justify-center gap-2 rounded-full bg-gradient-to-l from-glacier to-teal px-8 py-4 font-body text-base font-bold text-abyss shadow-glow transition-transform hover:scale-105"
            >
              <PhoneIcon className="h-5 w-5" />
              اتصل الآن
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full border border-[#25D366]/50 bg-[#25D366]/15 px-8 py-4 font-body text-base font-bold text-[#aef5c8] backdrop-blur transition-all hover:bg-[#25D366]/25"
            >
              <WhatsAppIcon className="h-5 w-5" />
              واتساب
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
