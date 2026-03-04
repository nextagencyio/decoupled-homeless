'use client'

import { DrupalHomepage } from '@/lib/types'

interface StatsSectionProps {
  homepageContent: DrupalHomepage | null | undefined
}

export default function StatsSection({ homepageContent }: StatsSectionProps) {
  const stats = (homepageContent as any)?.stats || (homepageContent as any)?.statsItems || []

  const defaultStats = [
    { value: '2,400+', label: 'People Sheltered' },
    { value: '850', label: 'Families Housed' },
    { value: '15', label: 'Programs Offered' },
    { value: '38', label: 'Years of Service' },
  ]

  const displayStats = stats.length > 0 ? stats : defaultStats

  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center divide-y md:divide-y-0 md:divide-x divide-primary-200">
          {displayStats.map((stat: any, i: number) => (
            <div key={stat.id || i} className="text-center px-8 py-6 md:py-0">
              <div className="text-3xl md:text-4xl font-serif font-bold text-accent-600">
                {stat.value || stat.statValue}
              </div>
              <div className="text-sm text-primary-500 mt-1 uppercase tracking-wider">
                {stat.label || stat.statLabel || stat.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
