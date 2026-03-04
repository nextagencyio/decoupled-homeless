'use client'

import { DrupalHomepage } from '@/lib/types'

interface CTASectionProps {
  homepageContent: DrupalHomepage | null | undefined
}

export default function CTASection({ homepageContent }: CTASectionProps) {
  const title = (homepageContent as any)?.ctaTitle || 'You Can Make a Difference'
  const description = (homepageContent as any)?.ctaDescription?.processed || ''
  const primaryLabel = (homepageContent as any)?.ctaPrimary || 'Donate Now'
  const secondaryLabel = (homepageContent as any)?.ctaSecondary || 'Volunteer'

  return (
    <section className="bg-primary-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-16 h-0.5 bg-accent-600 mx-auto mb-8" />
        <h2 className="text-3xl md:text-4xl font-serif font-medium text-gray-900 mb-4">{title}</h2>
        {description && (
          <div className="text-lg text-primary-500 mb-10 max-w-2xl mx-auto leading-relaxed" dangerouslySetInnerHTML={{ __html: description }} />
        )}
        <div className="flex justify-center gap-4 flex-wrap">
          <a href="/contact" className="px-8 py-3 bg-accent-600 text-white rounded-full hover:bg-accent-700 transition-colors font-medium tracking-wide">
            {primaryLabel}
          </a>
          <a href="/about" className="px-8 py-3 border-2 border-primary-700 text-primary-700 rounded-full hover:bg-primary-700 hover:text-white transition-colors font-medium tracking-wide">
            {secondaryLabel}
          </a>
        </div>
      </div>
    </section>
  )
}
