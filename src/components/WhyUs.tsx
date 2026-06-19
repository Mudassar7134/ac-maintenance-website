import { useScrollReveal } from '../hooks/useScrollReveal'
import { useCountUp } from '../hooks/useCountUp'
import SectionHeading from './SectionHeading'
import { WHY_US, STATS } from '../constants'
import type { WhyItem, Stat } from '../constants'
import { TechIcon, FastIcon, PriceIcon, WarrantyIcon } from './Icons'

// ============================================================
// قسم "لماذا نحن" — مميزات + عدّادات إحصائية متحركة
// ============================================================

const ICONS: Record<WhyItem['icon'], (p: { className?: string }) => JSX.Element> = {
  tech: TechIcon,
  fast: FastIcon,
  price: PriceIcon,
  warranty: WarrantyIcon,
}

// تحويل الأرقام إلى صيغة عربية
const toArabic = (n: number) =>
  n.toLocaleString('ar-EG', { useGrouping: true })

function StatBlock({ stat }: { stat: Stat }) {
  const { value, ref } = useCountUp(stat.value)
  return (
    <div ref={ref} className="reveal text-center">
      <div className="font-display text-4xl font-extrabold text-gradient md:text-5xl">
        {toArabic(value)}
        <span className="text-2xl md:text-3xl">{stat.suffix}</span>
      </div>
      <div className="mt-2 font-body text-sm text-silver/80">{stat.label}</div>
    </div>
  )
}

export default function WhyUs() {
  const ref = useScrollReveal<HTMLDivElement>()

  return (
    <section id="why" className="relative py-24">
      <div ref={ref} className="mx-auto max-w-7xl px-5">
        <SectionHeading
          eyebrow="لماذا نحن"
          title="لماذا تختار فريقنا لصيانة مكيفاتك؟"
          subtitle="نلتزم بالجودة والسرعة والشفافية في كل زيارة صيانة."
        />

        {/* بطاقات المميزات */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_US.map((item) => {
            const Icon = ICONS[item.icon]
            return (
              <div
                key={item.title}
                className="reveal group flex flex-col items-center rounded-3xl glass p-7 text-center transition-all duration-300 hover:-translate-y-1.5 hover:bg-white/[0.07] hover:shadow-glow-teal"
              >
                <div className="mb-5 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-teal/25 to-glacier/20 text-teal ring-1 ring-inset ring-white/10 transition-transform duration-300 group-hover:scale-110 group-hover:animate-floaty">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="mb-2 font-display text-lg font-bold text-frost">
                  {item.title}
                </h3>
                <p className="font-body text-sm leading-loose text-silver/75">
                  {item.desc}
                </p>
              </div>
            )
          })}
        </div>

        {/* شريط العدّادات */}
        <div className="reveal mt-14 grid grid-cols-2 gap-8 rounded-3xl glass-strong p-10 md:grid-cols-4">
          {STATS.map((stat) => (
            <StatBlock key={stat.label} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  )
}
