"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronDown, Menu, X } from "lucide-react"
import { ProductsDropdown } from "./products-dropdown"
import { SolutionsDropdown } from "./solutions-dropdown"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#products", label: "Products", hasDropdown: true, dropdownType: "products" },
  { href: "/#solutions", label: "Solutions", hasDropdown: true, dropdownType: "solutions" },
  { href: "/#projects", label: "Projects" },
  { href: "/#blog", label: "Blog" },
  { href: "/#contact", label: "Contact" },
]

export function MainNav() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleDropdownEnter = (type: string) => {
    setActiveDropdown(type)
  }

  const handleDropdownLeave = () => {
    setActiveDropdown(null)
  }

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          isScrolled 
            ? "bg-[var(--nav-bg,rgba(18,10,33,0.85))] backdrop-blur-md border-[var(--canvas-border)] py-0" 
            : "bg-transparent border-transparent py-4"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="h-14 md:h-16 px-[var(--section-pad-x)] flex items-center justify-between max-w-[1920px] mx-auto">
          {/* Logo — icon only, text cropped out */}
          <a href="/" className="inline-flex items-center justify-center h-full hover:opacity-90 transition-opacity">
            {/* Clip to top 58% of image so only the geometric icon shows, not the AZTECH text */}
            <div
              className="overflow-hidden flex-shrink-0"
              style={{ width: "52px", height: "52px" }}
            >
              <Image
                src="/images/1.jpg__2_-removebg-preview.png"
                alt="Aztech LED Logo"
                width={90}
                height={90}
                priority
                loading="eager"
                style={{
                  filter: "var(--logo-filter)",
                  /* Shift image up so the icon fills the container and the text falls below the clip */
                  objectFit: "cover",
                  objectPosition: "top center",
                  marginTop: "-2px",
                }}
              />
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.hasDropdown && handleDropdownEnter(link.dropdownType!)}
                onMouseLeave={handleDropdownLeave}
              >
                <a
                  href={link.href}
                  className="flex items-center gap-1 font-mono text-[10px] uppercase tracking-[0.15em] font-medium transition-colors duration-300 relative group py-1.5 text-[var(--canvas-text)] hover:text-[var(--accent)]"
                >
                  {link.label}
                  {link.hasDropdown && (
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === link.dropdownType ? "rotate-180" : ""}`} />
                  )}
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[var(--accent)] transition-all duration-200 group-hover:w-full" />
                </a>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a
              href="#contact"
              className="inline-flex items-center justify-center border border-[var(--canvas-border)] hover:border-purple-500/50 bg-white/[0.01] hover:bg-purple-500/10 text-[var(--canvas-text)] font-mono text-[10px] uppercase tracking-[0.15em] rounded-none px-5 py-2.5 transition-all duration-300"
            >
              Get a Free Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 text-[var(--canvas-text)]" />
            ) : (
              <Menu className="w-5 h-5 text-[var(--canvas-text)]" />
            )}
          </button>
        </div>

        {/* Mega Dropdowns */}
        {activeDropdown === "products" && (
          <div 
            className="hidden lg:block absolute left-0 right-0 bg-[var(--canvas-bg)] border-t border-[var(--accent)] border-b border-[var(--canvas-border)]"
            onMouseEnter={() => handleDropdownEnter("products")}
            onMouseLeave={handleDropdownLeave}
          >
            <ProductsDropdown />
          </div>
        )}
        
        {activeDropdown === "solutions" && (
          <div 
            className="hidden lg:block absolute left-0 right-0 bg-[var(--canvas-bg)] border-t border-[var(--accent)] border-b border-[var(--canvas-border)]"
            onMouseEnter={() => handleDropdownEnter("solutions")}
            onMouseLeave={handleDropdownLeave}
          >
            <SolutionsDropdown />
          </div>
        )}
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="fixed top-0 right-0 bottom-0 w-full max-w-[320px] bg-[var(--canvas-bg)] border-l border-[var(--canvas-border)] z-[70] lg:hidden overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-end mb-8">
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Close menu"
                  className="p-2"
                >
                  <X className="w-5 h-5 text-[var(--canvas-text)]" />
                </button>
              </div>
              
              <nav className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="font-mono text-[14px] uppercase tracking-widest text-[var(--canvas-text)] hover:text-[var(--accent)] transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                
                <a
                  href="#contact"
                  className="mt-4 inline-flex items-center justify-center border border-[var(--canvas-border)] hover:border-purple-500/50 bg-white/[0.01] hover:bg-purple-500/10 text-[var(--canvas-text)] font-mono text-[12px] uppercase tracking-widest py-3.5 rounded-none transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get a Free Quote
                </a>
              </nav>
            </div>
          </div>
        </>
      )}
    </>
  )
}
