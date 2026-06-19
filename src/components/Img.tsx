import { useState } from 'react'
import { SnowflakeIcon } from './Icons'

// ============================================================
// مكوّن صورة مرن — تحميل كسول + خلفية أثناء التحميل + بديل
// عند فشل التحميل، حتى لا يظهر الموقع مكسوراً أبداً.
// Resilient image: lazy-loads, shows a themed placeholder while
// loading, and falls back gracefully if the photo fails to load.
// The parent element must define the box size (height/aspect).
// ============================================================

interface Props {
  src: string
  alt: string
  className?: string
  /** نص يظهر في حالة عدم توفر الصورة */
  label?: string
  imgClassName?: string
}

export default function Img({
  src,
  alt,
  className = '',
  label,
  imgClassName = '',
}: Props) {
  const [status, setStatus] = useState<'loading' | 'ok' | 'error'>('loading')

  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br from-steel to-midnight ${className}`}
    >
      {/* طبقة العنصر النائب أثناء التحميل أو عند الفشل */}
      {status !== 'ok' && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-ice/70">
          <SnowflakeIcon
            className={`h-9 w-9 ${status === 'loading' ? 'animate-spin-slow' : ''}`}
          />
          {label && (
            <span className="px-4 text-center font-body text-xs text-silver/70">
              {label}
            </span>
          )}
        </div>
      )}

      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setStatus('ok')}
        onError={() => setStatus('error')}
        className={`h-full w-full object-cover transition-all duration-700 ${
          status === 'ok' ? 'scale-100 opacity-100' : 'scale-105 opacity-0'
        } ${imgClassName}`}
      />
    </div>
  )
}
