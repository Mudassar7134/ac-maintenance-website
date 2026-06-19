import { useScrollReveal } from '../hooks/useScrollReveal'
import SectionHeading from './SectionHeading'
import Img from './Img'
import { SERVICES } from '../constants'
import type { Service } from '../constants'
import { IMAGES } from '../images'
import {
  ConcealedIcon,
  CentralIcon,
  SplitIcon,
  AdvancedIcon,
  CleanIcon,
  GasIcon,
} from './Icons'

// ============================================================
// قسم الخدمات — بطاقات صيانة المكيفات فقط
// ============================================================

const ICONS: Record<Service['icon'], (p: { className?: string }) => JSX.Element> = {
  concealed: ConcealedIcon,
  central: CentralIcon,
  split: SplitIcon,
  advanced: AdvancedIcon,
  clean: CleanIcon,
  gas: GasIcon,
}

export default function Services() {
  const ref = useScrollReveal<HTMLDivElement>()

  return (
    <section id="services" className="relative py-24">
      <div ref={ref} className="mx-auto max-w-7xl px-5">
        <SectionHeading
          eyebrow="خدماتنا"
          title="حلول صيانة لجميع أنواع المكيفات"
          subtitle="نُغطّي كل أنظمة التكييف بخبرة فنية متخصصة — من السبليت إلى الأنظمة المركزية والمتطورة."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = ICONS[service.icon]
            return (
              <article
                key={service.title}
                className="reveal group relative overflow-hidden rounded-3xl glass-strong transition-all duration-300 hover:-translate-y-2 hover:border-ice/40 hover:shadow-glow"
              >
                {/* صورة الخدمة */}
                <div className="relative overflow-hidden">
                  <Img
                    src={IMAGES.service[service.icon]}
                    alt={service.title}
                    label={service.title}
                    className="aspect-[16/10] w-full"
                    imgClassName="transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/20 to-transparent" />
                  {/* أيقونة فوق الصورة */}
                  <div className="absolute bottom-3 right-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl glass-strong text-ice shadow-glow">
                    <Icon className="h-6 w-6" />
                  </div>
                </div>

                <div className="relative p-7 pt-5">
                  <h3 className="relative mb-3 font-display text-xl font-bold text-frost">
                    {service.title}
                  </h3>
                  <p className="relative font-body text-sm leading-loose text-silver/80">
                    {service.desc}
                  </p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
