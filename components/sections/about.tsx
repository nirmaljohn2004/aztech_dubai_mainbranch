'use client'

import { Zap, Package, Shield, Headphones, ArrowRight } from 'lucide-react'
import Image from 'next/image'

const achievements = [
  { icon: Zap, title: "In-House Engineering", subtitle: "Design, fabrication, and mounting" },
  { icon: Package, title: "Ready Stock Capacity", subtitle: "Immediate availability of panels" },
  { icon: Shield, title: "Guaranteed Performance", subtitle: "Dubai-standard warranty protection" },
  { icon: Headphones, title: "AMC Post-Installation", subtitle: "24/7 emergency response SLA" },
]

export function AboutSection() {
  return (
    <section 
      id="about" 
      className="py-24 md:py-32 px-6 md:px-12 border-b border-[var(--canvas-border)] transition-colors duration-300"
      style={{ backgroundColor: 'transparent' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* Left Column - Content (col-span 7) */}
          <div className="col-span-12 lg:col-span-7 flex flex-col items-start">
            <span className="text-[10px] tracking-widest uppercase font-mono text-purple-500/80 mb-6 block">
              WHO WE ARE // LEGACY
            </span>
            
            <h2 className="font-serif text-[6vw] md:text-[5vw] lg:text-[4.5vw] font-medium tracking-[-0.04em] leading-[0.95] mb-8">
              Dubai&apos;s Engineering Legacy, Deployed in India.
            </h2>
            
            <div className="space-y-6 text-xs md:text-sm text-neutral-400 leading-relaxed max-w-xl">
              <p>
                After establishing ourselves as a premier LED hardware supplier in Dubai for over 20 years, Aztech LED is expanding operations to India. From our roots in Dubai — where we served government ministries, stadiums, and international hotel groups — we deliver that exact same world-class standard across India.
              </p>
              <p>
                We began by projecting light onto building facades, bridges, and hotel exteriors — turning architecture into landmarks across the UAE. That obsession with quality and precision carries into everything we do today: indoor LED screens that command attention, outdoor displays built for harsh climates, and custom solutions that resellers cannot support.
              </p>
              <p>
                Unlike standard resellers, we maintain complete in-house execution capability. Our team designs, fabricates, installs, and services every project from start to finish. No third-party subcontractors. Just accountable engineering.
              </p>
            </div>

            {/* Corporate Structure - Hairline divider list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full border-t border-[var(--canvas-border)] pt-8 mt-8">
              <div className="flex flex-col gap-1">
                <span className="text-[9px] tracking-wider uppercase font-mono text-purple-500/80">HEAD QUARTERS</span>
                <span className="text-sm font-medium tracking-tight">Aztech General Trading LLC</span>
                <span className="text-xs text-neutral-500">Dubai, UAE</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[9px] tracking-wider uppercase font-mono text-neutral-500">SISTER CONCERN</span>
                <span className="text-sm font-medium tracking-tight">Lamps Plus Electronics LLC</span>
                <span className="text-xs text-neutral-500">Dubai, UAE</span>
              </div>
            </div>

            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 mt-8 text-[10px] tracking-widest uppercase font-mono text-purple-500/80 hover:text-purple-400 transition-colors"
            >
              Discuss Your Project With Us
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Right Column - Visual & Spec Sheets (col-span 5) */}
          <div className="col-span-12 lg:col-span-5 space-y-12">
            {/* Visual Frame - Borderless */}
            <div className="relative aspect-[4/3] w-full bg-neutral-900/10 overflow-hidden border border-[var(--canvas-border)]">
              <Image 
                src="/images/about_team_install_1774782278140.webp"
                alt="Aztech LED engineering team collaborating on project blueprints"
                className="absolute inset-0 w-full h-full object-cover brightness-95"
                width={600}
                height={450}
                sizes="(max-width: 1024px) 100vw, 40vw"
                loading="lazy"
              />
              <div className="absolute top-4 right-4 bg-purple-500/10 border border-purple-500/20 text-white font-mono text-[9px] tracking-widest uppercase px-3 py-1 backdrop-blur-md">
                DUBAI QUALITY // INDIA DEPLOYMENT
              </div>
            </div>
            
            {/* Achievements - Typographic list separated by hairline borders */}
            <div className="border-t border-[var(--canvas-border)]">
              {achievements.map((item, idx) => (
                <div 
                  key={idx}
                  className="flex items-center gap-4 py-4 border-b border-[var(--canvas-border)]"
                >
                  <div className="shrink-0 text-purple-500/80">
                    <item.icon className="w-5 h-5 stroke-[1.5]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold tracking-wider uppercase font-mono">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-neutral-500 leading-tight">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}
