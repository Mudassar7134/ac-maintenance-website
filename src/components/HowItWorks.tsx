import { useScrollReveal } from '../hooks/useScrollReveal'
import SectionHeading from './SectionHeading'
import { STEPS } from '../constants'
import type { Step } from '../constants'
import { PhoneIcon, VisitIcon, WrenchIcon } from './Icons'

// ============================================================
// قسم "كيف نعمل" — ثلاث خطوات
// ============================================================

const ICONS: Record<Step['icon'], (p: { className?: string }) => JSX.Element> = {
  phone: PhoneIcon,
  visit: VisitIcon,
  wrench: WrenchIcon,
}

export default function HowItWorks() {
  const ref = useScrollReveal<HTMLDivElement>()

  return (
    <section className="relative py-24">
      <div ref={ref} className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="كيف نعمل"
          title="ثلاث خطوات بسيطة لمكيف بارد"
          subtitle="من أول اتصال حتى إتمام الصيانة — تجربة سهلة وواضحة."
        />

        <div className="relative grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* خط رابط بين الخطوات (سطح المكتب) */}
          <div className="divider-glow absolute right-[16%] top-12 hidden w-[68%] md:block" />

          {STEPS.map((step) => {
            const Icon = ICONS[step.icon]
            return (
              <div
                key={step.num}
                className="reveal relative flex flex-col items-center rounded-3xl glass p-8 text-center"
              >
                {/* رقم الخطوة */}
                <div className="relative mb-5">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-glacier to-teal text-abyss shadow-glow">
                    <Icon className="h-9 w-9" />
                  </div>
                  <span className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-abyss font-display text-base font-extrabold text-ice ring-1 ring-ice/40">
                    {step.num}
                  </span>
                </div>
                <h3 className="mb-2 font-display text-xl font-bold text-frost">
                  {step.title}
                </h3>
                <p className="font-body text-sm leading-loose text-silver/80">
                  {step.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
