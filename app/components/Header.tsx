'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import clsx from 'clsx'
import { Menu, X } from 'lucide-react'

const navigationItems = [
  { name: 'Home', href: '/' },
  { name: 'Shelters', href: '/shelters' },
  { name: 'Programs', href: '/programs' },
  { name: 'Resources', href: '/resources' },
  { name: 'Impact Stories', href: '/stories' },
  { name: 'About', href: '/about' },
]

export default function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [bannerHeight, setBannerHeight] = useState(0)

  useEffect(() => {
    const updateBannerHeight = () => {
      const banner = document.querySelector('[class*="bg-amber-500"]') as HTMLElement
      setBannerHeight(banner ? banner.offsetHeight : 0)
    }
    updateBannerHeight()
    const observer = new MutationObserver(updateBannerHeight)
    observer.observe(document.body, { childList: true, subtree: true, attributes: true })
    window.addEventListener('resize', updateBannerHeight)
    return () => { observer.disconnect(); window.removeEventListener('resize', updateBannerHeight) }
  }, [])

  const getActiveTab = () => {
    if (pathname === '/') return 'Home'
    for (const item of navigationItems) {
      if (item.href !== '/' && pathname.startsWith(item.href)) {
        return item.name
      }
    }
    return null
  }

  const activeTab = getActiveTab()

  return (
    <header className="bg-[#faf8f5] border-b border-primary-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <div className="flex justify-between items-center py-6">
          <div className="flex-1" />
          <Link href="/" className="text-center hover:opacity-80 transition-opacity duration-200">
            <h1 className="text-2xl sm:text-3xl font-serif font-bold text-primary-800 tracking-tight">
              Haven House Initiative
            </h1>
            <p className="text-sm text-primary-500 mt-1 tracking-widest uppercase">Shelter &middot; Hope &middot; Restoration</p>
          </Link>
          <div className="flex-1 flex justify-end">
            <button
              type="button"
              className="lg:hidden inline-flex items-center justify-center p-2 rounded-lg text-primary-600 hover:text-primary-800 hover:bg-primary-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open menu</span>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center justify-center space-x-1 pb-4">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={clsx(
                'px-4 py-2 text-sm font-medium transition-colors tracking-wide',
                activeTab === item.name
                  ? 'text-accent-700 border-b-2 border-accent-600'
                  : 'text-primary-500 hover:text-primary-800'
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-primary-200 py-4">
            <nav className="flex flex-col space-y-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={clsx(
                    'px-4 py-3 text-sm font-medium transition-colors',
                    activeTab === item.name
                      ? 'text-accent-700 border-l-4 border-accent-600 bg-primary-50'
                      : 'text-primary-500 hover:text-primary-800 hover:bg-primary-50'
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
