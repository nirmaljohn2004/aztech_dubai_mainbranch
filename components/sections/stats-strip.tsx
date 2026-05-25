'use client'

import { motion } from 'framer-motion'

export function StatsStrip() {
  return (
    <section
      id="stats"
      className="relative py-24 md:py-32 px-6 md:px-12 border-b border-[var(--canvas-border)]"
      style={{ backgroundColor: 'transparent' }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-4 lg:col-span-3">
          <span className="text-[10px] tracking-widest uppercase font-mono text-purple-500/80 block">
            OUR PHILOSOPHY // APPROACH
          </span>
        </div>
        <div className="col-span-12 md:col-span-8 lg:col-span-9 animate-fade-in">
          <h2 className="font-serif text-[6vw] md:text-[5vw] font-medium tracking-[-0.04em] leading-[0.95] mb-6">
            Getting started doesn&apos;t have to be complicated.
          </h2>
          <p className="text-xs md:text-sm tracking-normal leading-relaxed text-neutral-400 max-w-xl">
            Our process is simple, supportive, and designed to move at a pace that feels right
            for you. From the initial layouts in Dubai to final structural commissioning in India, we keep your brand at the center of the frame.
          </p>
        </div>
      </div>
    </section>
  )
}
