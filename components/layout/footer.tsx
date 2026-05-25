'use client'

import Link from 'next/link'
import { Linkedin, Instagram, Facebook } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer 
      className="border-t border-[var(--canvas-border)] relative z-10"
      style={{ backgroundColor: 'transparent', color: 'var(--canvas-text)' }}
    >
      {/* Main Footer Asymmetric Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-12 gap-8 mb-16">
          
          {/* Brand Info (Span 12 -> 3) */}
          <div className="col-span-12 lg:col-span-4 flex flex-col items-start gap-4">
            <h3 className="font-serif text-lg font-medium tracking-tight">
              Aztech LED Screens
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed max-w-xs">
              India&apos;s LED display engineering specialists. Backed by 20+ years of Dubai execution excellence.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-purple-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-purple-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-purple-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
            </div>
          </div>

          {/* Products Menu (Span 12 -> 3) */}
          <div className="col-span-6 md:col-span-4 lg:col-span-3">
            <span className="text-[10px] tracking-widest uppercase font-mono text-purple-500/80 mb-4 block">
              HARDWARE PRODUCTS
            </span>
            <ul className="space-y-2.5">
              {["Indoor LED Screens", "Outdoor Displays", "Transparent Film LED", "Fine Pitch Video Walls"].map((item, idx) => (
                <li key={idx}>
                  <Link
                    href="#products"
                    className="text-xs text-neutral-400 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links (Span 12 -> 2) */}
          <div className="col-span-6 md:col-span-4 lg:col-span-2">
            <span className="text-[10px] tracking-widest uppercase font-mono text-neutral-500 mb-4 block">
              CORPORATE
            </span>
            <ul className="space-y-2.5">
              {[
                { href: "#about", label: "About Us" },
                { href: "#projects", label: "Projects" },
                { href: "#blog", label: "Insights" },
                { href: "#contact", label: "Contact" }
              ].map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-xs text-neutral-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Hotline (Span 12 -> 3) */}
          <div className="col-span-12 md:col-span-4 lg:col-span-3">
            <span className="text-[10px] tracking-widest uppercase font-mono text-neutral-500 mb-4 block">
              HOTLINES
            </span>
            <ul className="space-y-2 text-xs text-neutral-400 font-mono">
              <li>
                <a href="tel:+917356780866" className="hover:text-purple-400 transition-colors">
                  +91 73567 80866 (India)
                </a>
              </li>
              <li>
                <a href="https://wa.me/971561425339" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
                  +971 56 142 5339 (Dubai)
                </a>
              </li>
              <li>
                <a href="mailto:sales@az-tech.ae" className="hover:text-purple-400 transition-colors">
                  sales@az-tech.ae
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Base Copy */}
        <div className="border-t border-[var(--canvas-border)] pt-8 flex flex-col sm:flex-row justify-between items-center text-[10px] tracking-wider font-mono text-neutral-500 gap-4 uppercase">
          <p>© {currentYear} Aztech LED Screens Pvt Ltd. All Rights Reserved.</p>
          <p>Dubai Engineering · India Operations</p>
        </div>
      </div>
    </footer>
  )
}
