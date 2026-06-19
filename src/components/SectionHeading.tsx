// ============================================================
// عنوان قسم موحّد — يستخدم في كل الأقسام
// Reusable section heading (eyebrow + title + subtitle).
// ============================================================

interface Props {
  eyebrow: string
  title: string
  subtitle?: string
}

export default function SectionHeading({ eyebrow, title, subtitle }: Props) {
  return (
    <div className="reveal mx-auto mb-12 max-w-2xl text-center">
      <span className="font-body text-sm font-bold tracking-wide text-teal">
        {eyebrow}
      </span>
      <h2 className="mt-2 font-display text-3xl font-extrabold text-frost md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 font-body text-base leading-loose text-silver/85">
          {subtitle}
        </p>
      )}
      <div className="divider-glow mx-auto mt-6 w-24" />
    </div>
  )
}
