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
      {/* ── Fixed Background Image Layer ── */}
      <motion.div
        style={{ opacity: bgOpacity, scale: bgScale }}
        className="fixed inset-0 z-[-1] w-full h-full pointer-events-none"
      >
        {/* Desktop Image */}
        <Image
          src="/images/new_hero_image.jpg"
          alt="Hero Background Desktop"
          fill
          priority
          sizes="100vw"
          className="hidden md:block object-cover object-center"
        />
        {/* Mobile Image */}
        <Image
          src="/images/new_hero_mobile.jpg"
          alt="Hero Background Mobile"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 0vw"
          className="block md:hidden object-cover object-center"
        />

        {/* Subtle dark overlay for overall text legibility, without blacking out the bottom */}
        <div className="absolute inset-0 z-[1] bg-black/10 pointer-events-none" />
      </motion.div>

      {/* ── Foreground Hero Content ── */}
      <section
        id="home"
        className="relative h-screen w-full flex flex-col justify-end pb-24 md:pb-32 pt-12"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 flex flex-col md:flex-row h-full items-start md:items-end justify-end md:justify-between px-4 md:px-14 lg:px-20 xl:px-28 w-full max-w-[1800px] mx-auto gap-8 md:gap-8"
        >
          {/* LEFT — Minimal Headline */}
          <div className="flex flex-col justify-end w-full max-w-[45rem]">
            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-serif font-medium uppercase leading-[0.92] text-white drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)]"
              style={{ fontSize: 'clamp(2.5rem, 10vw, 6.5rem)' }}
            >
              ADVANCED{' '}
              <br className="hidden md:block" />
              LED SOLUTIONS
            </motion.h1>
          </div>

          {/* RIGHT — CTA */}
          <div className="flex flex-col justify-end items-start md:items-end w-full max-w-[28rem] text-left md:text-right md:pb-4">
            <motion.div variants={itemVariants}>
              <a
                href="#contact"
                className="inline-flex h-12 items-center gap-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-8 font-mono text-xs uppercase tracking-[0.24em] text-white shadow-lg transition duration-300 hover:bg-white/20 hover:scale-105"
              >
                Book a Site Visit
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </>
  )
}
