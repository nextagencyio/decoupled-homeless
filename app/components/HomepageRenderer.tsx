'use client'

import Image from 'next/image'
import Header from './Header'
import HeroSection from './HeroSection'
import StatsSection from './StatsSection'
import CTASection from './CTASection'
import ErrorBoundary from './ErrorBoundary'
import { DrupalHomepage } from '@/lib/types'
import { Home, Heart, Users, Shield, HandHelping, Utensils } from 'lucide-react'

interface HomepageRendererProps {
  homepageContent: DrupalHomepage | null | undefined
}

const serviceIcons = [
  { icon: Home, label: 'Emergency Shelter', description: 'Safe overnight accommodation for those in need' },
  { icon: Heart, label: 'Counseling', description: 'Mental health and wellness support services' },
  { icon: Users, label: 'Family Support', description: 'Programs for families experiencing homelessness' },
  { icon: Shield, label: 'Case Management', description: 'Personalized plans for long-term stability' },
  { icon: HandHelping, label: 'Job Training', description: 'Skills development and employment placement' },
  { icon: Utensils, label: 'Meal Programs', description: 'Nutritious meals served daily to our community' },
]

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&q=80', alt: 'Community volunteers serving meals' },
  { src: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=600&q=80', alt: 'Support group session' },
  { src: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80', alt: 'Family receiving assistance' },
  { src: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=600&q=80', alt: 'Community outreach event' },
]

export default function HomepageRenderer({ homepageContent }: HomepageRendererProps) {
  return (
    <div className="min-h-screen bg-[#faf8f5]">
      <Header />

      <ErrorBoundary>
        <HeroSection homepageContent={homepageContent} />
      </ErrorBoundary>

      <ErrorBoundary>
        <StatsSection homepageContent={homepageContent} />
      </ErrorBoundary>

      {/* Featured Content */}
      <ErrorBoundary>
        <section className="py-20 bg-[#faf8f5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-medium text-gray-900 mb-4">How We Help</h2>
              <div className="w-16 h-0.5 bg-accent-600 mx-auto mb-6" />
              <p className="text-lg text-primary-500 max-w-2xl mx-auto">Comprehensive support services designed to help individuals and families find stability and hope.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {['Emergency Shelter', 'Job Training', 'Family Housing', 'Community Outreach'].map((title, i) => (
                <div key={i} className="bg-white border-l-4 border-primary-600 shadow-sm hover:shadow-md transition-all duration-200 p-6">
                  <h3 className="text-xl font-serif font-semibold text-gray-900 mb-2">{title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {i === 0 && 'Safe, warm beds and essential services for individuals seeking refuge from the streets.'}
                    {i === 1 && 'Skills workshops, resume building, and employment connections for sustainable independence.'}
                    {i === 2 && 'Transitional and permanent housing solutions to keep families together.'}
                    {i === 3 && 'Street outreach teams connecting people with the resources they need.'}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ErrorBoundary>

      {/* Services Icons */}
      <ErrorBoundary>
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-medium text-gray-900 mb-4">Our Services</h2>
              <div className="w-16 h-0.5 bg-accent-600 mx-auto mb-6" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
              {serviceIcons.map(({ icon: Icon, label, description }) => (
                <div key={label} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary-50 flex items-center justify-center group-hover:bg-accent-50 transition-colors">
                    <Icon className="w-7 h-7 text-primary-600 group-hover:text-accent-600 transition-colors" />
                  </div>
                  <h3 className="font-serif font-semibold text-gray-900 mb-1">{label}</h3>
                  <p className="text-sm text-primary-500">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ErrorBoundary>

      {/* Photo Gallery */}
      <ErrorBoundary>
        <section className="py-20 bg-[#faf8f5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-medium text-gray-900 mb-4">Making a Difference</h2>
              <div className="w-16 h-0.5 bg-accent-600 mx-auto" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {galleryImages.map((img, i) => (
                <div key={i} className="relative aspect-square overflow-hidden rounded-sm shadow-sm group">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    unoptimized
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </ErrorBoundary>

      {/* Key Info Dark Section */}
      <ErrorBoundary>
        <section className="bg-primary-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-medium text-white mb-4">Get Involved</h2>
              <div className="w-16 h-0.5 bg-accent-500 mx-auto" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-lg font-serif font-semibold text-accent-400 mb-2">Shelter Hours</h3>
                <p className="text-primary-300">Intake: 5:00 PM - 10:00 PM</p>
                <p className="text-primary-300">Checkout: 7:00 AM</p>
                <p className="text-primary-400 text-sm mt-1">Open 365 days a year</p>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-serif font-semibold text-accent-400 mb-2">Volunteer Shifts</h3>
                <p className="text-primary-300">Morning: 6:00 AM - 12:00 PM</p>
                <p className="text-primary-300">Evening: 4:00 PM - 10:00 PM</p>
                <p className="text-primary-400 text-sm mt-1">Training provided for all volunteers</p>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-serif font-semibold text-accent-400 mb-2">Donation Drop-off</h3>
                <p className="text-primary-300">Mon-Fri: 9:00 AM - 5:00 PM</p>
                <p className="text-primary-300">Saturday: 10:00 AM - 2:00 PM</p>
                <p className="text-primary-400 text-sm mt-1">Clothing, toiletries, and non-perishables</p>
              </div>
            </div>
          </div>
        </section>
      </ErrorBoundary>

      <ErrorBoundary>
        <CTASection homepageContent={homepageContent} />
      </ErrorBoundary>

      {/* Footer */}
      <footer className="bg-[#faf8f5] border-t border-primary-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-serif font-bold text-primary-800 mb-4">Haven House Initiative</h3>
              <p className="text-primary-500 mb-4 leading-relaxed">
                Providing shelter, support, and hope to individuals and families experiencing homelessness since 1986. Together we can end homelessness in our community.
              </p>
              <div className="w-12 h-0.5 bg-accent-600" />
            </div>
            <div>
              <h4 className="font-serif font-semibold text-primary-800 mb-4">Quick Links</h4>
              <ul className="space-y-2 text-primary-500">
                <li><a href="/shelters" className="hover:text-accent-600 transition-colors">Shelters</a></li>
                <li><a href="/programs" className="hover:text-accent-600 transition-colors">Programs</a></li>
                <li><a href="/resources" className="hover:text-accent-600 transition-colors">Resources</a></li>
                <li><a href="/stories" className="hover:text-accent-600 transition-colors">Impact Stories</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif font-semibold text-primary-800 mb-4">Contact</h4>
              <ul className="space-y-2 text-primary-500">
                <li>450 Hope Avenue</li>
                <li>Portland, OR 97201</li>
                <li>info@havenhouse.org</li>
                <li>(503) 555-0147</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-200 mt-12 pt-8 text-center text-primary-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Haven House Initiative. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
