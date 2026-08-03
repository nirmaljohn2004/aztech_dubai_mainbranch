'use client'

import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

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
              WHO WE ARE
            </span>
            
            <h2 className="font-serif text-[6vw] md:text-[5vw] lg:text-[4.5vw] font-medium tracking-[-0.04em] leading-[0.95] mb-8">
              20+ Years of LED Expertise, Rooted in Dubai.
            </h2>
            
            <div className="space-y-6 text-xs md:text-sm text-neutral-400 leading-relaxed max-w-xl">
              <p>
                Aztech has been in the LED display business since 2003, working out of Dubai. Over the years, we&apos;ve supplied and installed screens for government buildings, shopping malls, hotels, stadiums, and corporate offices across the UAE, Oman, Saudi Arabia, and beyond.
              </p>
              <p>
                We started with exterior architectural lighting — facades, bridges, hotel exteriors — and grew from there into full LED display solutions. Today we handle everything from indoor fine-pitch screens to large outdoor billboards and rental event displays.
              </p>
              <p>
                What sets us apart is simple: we don&apos;t just sell panels. We design the layout, build custom structures, handle the installation, and stay on for maintenance. One team, start to finish. No middlemen.
              </p>
            </div>

            {/* Corporate Structure */}
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

          {/* Right Column - Office Image (col-span 5) */}
          <div className="col-span-12 lg:col-span-5">
            <div className="relative aspect-[3/4] w-full bg-neutral-900/10 overflow-hidden border border-[var(--canvas-border)]">
              <Image 
                src="/images/aztech_office.jpg"
                alt="Aztech LED Display Solutions Office Space"
                className="absolute inset-0 w-full h-full object-cover brightness-95"
                width={600}
                height={800}
                sizes="(max-width: 1024px) 100vw, 40vw"
                loading="lazy"
              />
              <div className="absolute top-4 right-4 bg-purple-500/10 border border-purple-500/20 text-white font-mono text-[9px] tracking-widest uppercase px-3 py-1 backdrop-blur-md">
                EST. 2003 // DUBAI
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}
