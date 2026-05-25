'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion, useInView } from 'framer-motion'

gsap.registerPlugin(ScrollTrigger)

// ── Reusable reveal variants ──
export const fadeUpVariant = {
  hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
      delay: i * 0.14,
    },
  }),
}

export const fadeInVariant = {
  hidden: { opacity: 0, scale: 0.96, filter: 'blur(6px)' },
  visible: (i = 0) => ({
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 1.0,
      ease: [0.16, 1, 0.3, 1],
      delay: i * 0.1,
    },
  }),
}

export const slideLeftVariant = {
  hidden: { opacity: 0, x: -60, filter: 'blur(8px)' },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.95,
      ease: [0.16, 1, 0.3, 1],
      delay: i * 0.12,
    },
  }),
}

export const slideRightVariant = {
  hidden: { opacity: 0, x: 60, filter: 'blur(8px)' },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.95,
      ease: [0.16, 1, 0.3, 1],
      delay: i * 0.12,
    },
  }),
}

// ── Scroll-reveal wrapper component ──
interface RevealProps {
  children: React.ReactNode
  variant?: 'fadeUp' | 'fadeIn' | 'slideLeft' | 'slideRight'
  delay?: number
  className?: string
  once?: boolean
}

const variantMap = {
  fadeUp: fadeUpVariant,
  fadeIn: fadeInVariant,
  slideLeft: slideLeftVariant,
  slideRight: slideRightVariant,
}

export function Reveal({
  children,
  variant = 'fadeUp',
  delay = 0,
  className,
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once, margin: '-8% 0px' })

  return (
    <motion.div
      ref={ref}
      custom={delay}
      variants={variantMap[variant]}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ── GSAP Parallax hook ──
export function useParallax(ref: React.RefObject<HTMLElement | null>, speed = 0.3) {
  useEffect(() => {
    if (!ref.current) return
    const el = ref.current

    const ctx = gsap.context(() => {
      gsap.to(el, {
        yPercent: -speed * 100,
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })
    }, el)

    return () => ctx.revert()
  }, [ref, speed])
}

// ── GSAP text character split-reveal ──
export function useSplitTextReveal(
  ref: React.RefObject<HTMLElement | null>,
  options?: { delay?: number; stagger?: number }
) {
  useEffect(() => {
    if (!ref.current) return
    const el = ref.current
    const text = el.innerText
    el.innerHTML = text
      .split('')
      .map((char) =>
        char === ' '
          ? '<span style="display:inline-block;width:0.3em">&nbsp;</span>'
          : `<span style="display:inline-block;overflow:hidden"><span class="char-inner" style="display:inline-block">${char}</span></span>`
      )
      .join('')

    const chars = el.querySelectorAll<HTMLElement>('.char-inner')

    const ctx = gsap.context(() => {
      gsap.from(chars, {
        y: '110%',
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: options?.stagger ?? 0.025,
        delay: options?.delay ?? 0,
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          once: true,
        },
      })
    })

    return () => ctx.revert()
  }, [ref, options?.delay, options?.stagger])
}
