'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
  },
}

export function HeroSection() {
  const { scrollY } = useScroll()
  
  // Fade out and translate the background slightly as we scroll down
  const bgOpacity = useTransform(scrollY, [0, 600], [1, 0])
  const bgScale = useTransform(scrollY, [0, 600], [1, 1.05])
  
  return (
    <>
      {/* ── Fixed Background Image Layer (Sereniche Style) ── */}
      <motion.div 
        style={{ opacity: bgOpacity, scale: bgScale }}
        className="fixed inset-0 z-[-1] flex items-start justify-center pointer-events-none"
      >
        {/* Neon Light Trails (Sereniche style curves) */}
        <div className="absolute left-1/2 top-[45%] z-[1] h-[55rem] w-[55rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-500/20 bg-transparent opacity-60 blur-[3px] shadow-[0_0_80px_rgba(168,85,247,0.25)]" />
        <div className="absolute left-1/2 top-1/3 z-[1] h-[65rem] w-[75rem] -translate-x-1/2 -translate-y-[40%] rounded-[100%] border-t-2 border-l-2 border-purple-400/30 bg-transparent opacity-50 blur-[4px] shadow-[inset_0_0_60px_rgba(168,85,247,0.15)] transform -rotate-[15deg]" />
        <div className="absolute left-1/2 top-1/2 z-[1] h-[45rem] w-[95rem] -translate-x-1/2 -translate-y-[45%] rounded-[100%] border-b-2 border-r-2 border-fuchsia-400/20 bg-transparent opacity-40 blur-[3px] transform rotate-12" />

        {/* Ambient purple glow behind the portrait */}
        <div className="absolute top-[45%] left-1/2 z-[1] h-[45rem] w-[45rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/15 blur-[120px]" />

        {/* The portrait — Huge, centered, touching the very top navbar */}
        <div className="relative w-full h-[105vh] max-w-[85rem] z-[2]">
          <Image
            src="/images/hero_boy_hd.png"
            alt="Smiling child — Aztech LED"
            fill
            priority
            sizes="100vw"
            className="object-cover object-top md:object-contain md:object-top drop-shadow-[0_0_60px_rgba(168,85,247,0.15)] drop-shadow-[0_0_12px_rgba(0,0,0,0.9)]"
          />
        </div>
        
        {/* Dark gradient scrims so text stays legible on both left and right sides */}
        <div className="absolute inset-0 z-[3] bg-gradient-to-r from-black/80 via-transparent to-black/80 pointer-events-none" />
        <div className="absolute inset-0 z-[3] bg-gradient-to-t from-[var(--canvas-bg)] via-[var(--canvas-bg)]/40 to-transparent pointer-events-none" />
      </motion.div>

      {/* ── Foreground Hero Content (Scrolls normally) ── */}
      <section
        id="hero"
        className="relative h-screen w-full flex flex-col justify-center border-b border-white/[0.06] pt-12"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 flex flex-col md:flex-row h-full items-center justify-between px-6 md:px-14 lg:px-20 xl:px-28 w-full max-w-[1800px] mx-auto gap-8"
        >
          {/* LEFT — Headline */}
          <div className="flex flex-col justify-center w-full max-w-[35rem]">
            {/* Badge */}
            <motion.span
              variants={itemVariants}
              className="mb-6 inline-flex w-fit items-center gap-3 rounded-full border border-white/14 bg-white/6 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.26em] text-white/65 backdrop-blur-sm"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(110,231,183,0.9)]" />
              PREMIUM DISPLAY SYSTEMS
            </motion.span>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-serif font-medium uppercase leading-[0.92] text-white"
              style={{ fontSize: 'clamp(3rem, 6vw, 6.5rem)' }}
            >
              ADVANCED{' '}
              <br className="hidden md:block" />
              <span className="bg-[linear-gradient(90deg,#ffffff_10%,#d8b4fe_55%,#ffffff_95%)] bg-clip-text text-transparent">
                LED
              </span>
              <br className="hidden md:block" />
              SOLUTIONS
            </motion.h1>
          </div>
          
          {/* RIGHT — Subcopy and CTA (Sereniche style layout) */}
          <div className="flex flex-col justify-center items-start md:items-end w-full max-w-[28rem] text-left md:text-right md:mt-24">
            {/* Sub-copy */}
            <motion.p
              variants={itemVariants}
              className="mb-8 text-sm leading-relaxed text-white/75 md:text-base font-light tracking-wide"
            >
              High-performance digital displays engineered for absolute clarity, architectural integration, and maximum impact.
            </motion.p>

            {/* CTA button */}
            <motion.div variants={itemVariants}>
              <a
                href="#contact"
                className="inline-flex h-12 items-center gap-3 rounded-full bg-[#d4c0f7] px-8 font-mono text-xs uppercase tracking-[0.24em] text-[#2a153d] shadow-lg shadow-purple-400/20 transition duration-300 hover:bg-[#e4d5ff]"
              >
                Book a Site Visit
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Bottom Stats Strip (Scrolls with the hero section) */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="absolute bottom-10 left-0 w-full z-10 px-6 md:px-14 lg:px-20 xl:px-28"
        >
          <div className="flex items-center justify-between border-t border-white/10 pt-6 max-w-[1800px] mx-auto">
            <div className="flex items-center gap-12">
              {[
                { value: '500+', label: 'Installations' },
                { value: '20yr', label: 'Dubai Legacy' },
                { value: 'P1.2', label: 'Finest Pitch' },
              ].map(({ value, label }) => (
                <div key={label} className="flex flex-col gap-0.5">
                  <span className="font-serif text-2xl font-medium text-white">
                    {value}
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-white/40">
                    {label}
                  </span>
                </div>
              ))}
            </div>
            
            {/* Scroll Indicator */}
            <div className="hidden md:flex flex-col items-center gap-3 opacity-60">
               <span className="font-mono text-[9px] uppercase tracking-widest text-white">Scroll to explore</span>
               <div className="w-[1px] h-10 bg-gradient-to-b from-white to-transparent" />
            </div>
          </div>
        </motion.div>
      </section>
    </>
  )
}
