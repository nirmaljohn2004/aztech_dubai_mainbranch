'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export function BrandingSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-32 md:py-64">
      <div className="mx-auto w-full max-w-[1200px] px-4 md:px-12">
        
        {/* Minimalist Text Header */}
        <div className="flex flex-col items-center justify-center text-center pb-16 md:pb-24">
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-slate-500 mb-6 border border-slate-200 px-4 py-1.5 rounded-full">
            Engineering Identity
          </span>
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-slate-900 mb-6">
            Designed for impact.
          </h2>
          <p className="max-w-2xl text-base md:text-lg text-slate-600 font-light leading-[1.8]">
            Our displays aren&apos;t just hardware; they are the architectural centerpiece of your space. We engineer visual experiences that define your brand&apos;s physical presence.
          </p>
        </div>

        {/* Brand Image */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative w-full aspect-video md:aspect-[21/9] rounded-2xl md:rounded-[2rem] overflow-hidden shadow-2xl"
        >
          <Image
            src="/images/branding_box.jpg"
            alt="Aztech Branding Display"
            fill
            sizes="(max-width: 768px) 100vw, 90vw"
            className="object-cover object-center"
          />
        </motion.div>
      </div>
    </section>
  )
}
