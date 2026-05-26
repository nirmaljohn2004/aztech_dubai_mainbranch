'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

const navLinks = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#products', label: 'Products' },
  { href: '#solutions', label: 'Sectors' },
  { href: '#projects', label: 'Projects' },
  { href: '#blog', label: 'Blog' },
  { href: '#contact', label: 'Contact' },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav
        className="fixed left-0 right-0 top-0 z-50 transition-all duration-300 bg-transparent"
        role="navigation"
        aria-label="Main navigation"
        style={{ color: 'var(--canvas-text)' }}
      >
        <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6 md:px-12">
          <Link href="/" className="flex items-center transition-opacity hover:opacity-85">
            <span className="flex h-20 w-20 items-center justify-center bg-transparent p-0 overflow-hidden">
              <Image
                src="/images/1.jpg__2_-removebg-preview.png"
                alt="Aztech LED"
                width={80}
                height={80}
                className="h-full w-full object-contain transition-all duration-300 scale-[1.7]"
                style={{ filter: "var(--logo-filter)" }}
                priority
              />
            </span>
          </Link>

          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-mono uppercase tracking-wider text-[var(--canvas-text)] transition-colors hover:text-purple-400 font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden min-h-10 items-center border border-[var(--canvas-border)] bg-transparent px-6 text-xs font-mono uppercase tracking-widest text-[var(--canvas-text)] transition duration-300 hover:bg-[var(--canvas-text)]/5 lg:inline-flex rounded-none"
          >
            Get a Quote
          </a>

          <button
            className="inline-flex h-10 w-10 items-center justify-center border border-[var(--canvas-border)] text-[var(--canvas-text)] transition hover:bg-[var(--canvas-text)]/5 lg:hidden rounded-none"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-xs lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="fixed left-4 right-4 top-24 z-50 rounded-none border border-[var(--canvas-border)] bg-[var(--canvas-bg)]/95 p-6 backdrop-blur-2xl lg:hidden"
            >
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-xs font-mono uppercase tracking-wider text-[var(--canvas-text)]/80 transition hover:text-[var(--canvas-text)]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  className="mt-2 text-center text-xs font-mono uppercase tracking-widest text-[var(--canvas-text)] border border-[var(--canvas-border)] py-3 hover:bg-[var(--canvas-text)]/5"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Quote
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
