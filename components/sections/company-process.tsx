'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const steps = [
  {
    num: "01",
    title: "Initial Assessment",
    desc: "A structured initial session to understand your space, technical constraints, and visual goals, giving our engineering team a clear picture of what you need."
  },
  {
    num: "02",
    title: "Custom Engineering",
    desc: "Sourcing the highest-grade LED modules and designing bespoke mounting structures. We plan every millimeter to ensure seamless integration into your architecture."
  },
  {
    num: "03",
    title: "Precision Deployment",
    desc: "Certified technicians install your displays with absolute precision. We calibrate color, brightness, and contrast on-site for flawless, uniform visual performance."
  },
  {
    num: "04",
    title: "Walk Together",
    desc: "Ready to create your space? Whether you're here for a single installation or a nationwide rollout, we'll walk it together — adapting our support as you scale."
  }
]

export function CompanyProcess() {
  const [activeIndex, setActiveIndex] = useState(0)

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % steps.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="about" className="relative h-screen min-h-[600px] w-full flex items-center bg-transparent">
      {/* Background Swirls (Sereniche Style) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[10%] top-[20%] h-[60rem] w-[60rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-500/10 opacity-50 blur-[1px]" />
        <div className="absolute right-[5%] bottom-[10%] h-[80rem] w-[80rem] translate-x-1/4 translate-y-1/4 rounded-[100%] border-t border-l border-fuchsia-400/10 opacity-40 blur-[2px] transform rotate-[15deg]" />
        <div className="absolute top-1/2 left-1/2 h-[60rem] w-[60rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-900/10 blur-[120px]" />
      </div>

      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center h-full">
        
        {/* Left Side: Giant Number */}
        <div className="col-span-1 md:col-span-5 lg:col-span-6 relative h-full flex items-center justify-center md:justify-start">
          <AnimatePresence mode="wait">
            <motion.div
              key={`num-${activeIndex}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="absolute left-0 md:left-10 lg:left-20 font-sans font-bold text-[#e5e5e5]"
            >
              <span className="text-[12rem] md:text-[18rem] lg:text-[24rem] leading-none tracking-tighter opacity-90 drop-shadow-[0_0_40px_rgba(168,85,247,0.15)]">
                {steps[activeIndex].num}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Side: Text Content */}
        <div className="col-span-1 md:col-span-7 lg:col-span-6 relative h-[25rem] flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={`text-${activeIndex}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="absolute max-w-2xl w-full pr-6"
            >
              <h3 className="font-serif text-4xl md:text-5xl lg:text-[4rem] font-medium tracking-tight text-white mb-6 drop-shadow-md leading-[1.1]">
                {steps[activeIndex].title}
              </h3>
              <p className="text-base md:text-lg lg:text-[19px] text-white/70 leading-relaxed font-light mb-12">
                {steps[activeIndex].desc}
              </p>
              
              {/* Dot Indicators */}
              <div className="flex gap-3 items-center">
                {steps.map((_, dotIdx) => (
                  <button 
                    key={`dot-${dotIdx}`}
                    onClick={() => setActiveIndex(dotIdx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      dotIdx === activeIndex ? "w-8 bg-purple-400" : "w-2 bg-white/20 hover:bg-white/40"
                    }`}
                    aria-label={`Go to step ${dotIdx + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  )
}
