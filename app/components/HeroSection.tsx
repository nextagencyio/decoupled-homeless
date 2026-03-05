'use client'

import Image from 'next/image'
import { DrupalHomepage } from '@/lib/types'

interface HeroSectionProps {
  homepageContent: DrupalHomepage | null | undefined
}

export default function HeroSection({ homepageContent }: HeroSectionProps) {
  const title = (homepageContent as any)?.heroTitle || (homepageContent as any)?.title || 'Everyone Deserves a Place to Call Home'
  const subtitle = (homepageContent as any)?.heroSubtitle || ''
  const description = (homepageContent as any)?.heroDescription?.processed || ''

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=1920&q=80"
          alt="Volunteers helping community"
          fill
          className="object-cover"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/60 to-black/65" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <div className="w-16 h-0.5 bg-accent-500 mx-auto mb-8" />
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-white mb-6 leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto font-light leading-relaxed">
            {subtitle}
          </p>
        )}
        {description && (
          <div className="text-lg text-white/80 max-w-2xl mx-auto" dangerouslySetInnerHTML={{ __html: description }} />
        )}
        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <a href="/programs" className="px-8 py-3 bg-accent-600 text-white rounded-full hover:bg-accent-700 transition-colors font-medium tracking-wide">
            Our Programs
          </a>
          <a href="/shelters" className="px-8 py-3 border-2 border-white text-white rounded-full hover:bg-white hover:text-primary-800 transition-colors font-medium tracking-wide">
            Find Shelter
          </a>
        </div>
      </div>
    </section>
  )
}
