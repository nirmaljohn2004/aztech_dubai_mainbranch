'use client'

import { useEffect, useRef } from 'react'

// Interpolate two RGB triplets
const lerp = (a: number, b: number, t: number) => a + (b - a) * t

// Cinematic scroll gradient stages:
// Dark purple → Indigo → Mid purple → Lavender → Soft silver-white
const GRADIENT_STOPS: [number[], number[]][] = [
  [[12, 6, 32],    [22, 10, 52]],    // 0%   – Deep void purple
  [[20, 8, 56],    [38, 18, 88]],    // 20%  – Indigo depths
  [[48, 26, 98],   [70, 40, 120]],   // 40%  – Vibrant indigo
  [[90, 60, 150],  [115, 82, 165]],  // 60%  – Mid-lavender
  [[155, 120, 195],[178, 148, 215]], // 80%  – Soft lavender
  [[215, 200, 235],[235, 225, 245]], // 100% – Ethereal near-white
]

export function CinematicScrollGradient() {
  const scrollY = useRef(0)
  const smoothY = useRef(0)
  const rafId = useRef<number>(0)
  const isRunning = useRef(false)

  useEffect(() => {
    const lerp3 = (c1: number[], c2: number[], t: number) =>
      c1.map((v, i) => Math.round(lerp(v, c2[i], t)))

    const getGradient = (progress: number) => {
      const scaled = Math.max(0, Math.min(1, progress)) * (GRADIENT_STOPS.length - 1)
      const idx = Math.min(GRADIENT_STOPS.length - 2, Math.floor(scaled))
      const frac = scaled - idx
      const [a1, a2] = GRADIENT_STOPS[idx]
      const [b1, b2] = GRADIENT_STOPS[idx + 1]
      return {
        top: lerp3(a1, b1, frac),
        bot: lerp3(a2, b2, frac),
      }
    }

    const tick = () => {
      // Smooth interpolation – buttery catch-up
      smoothY.current = lerp(smoothY.current, scrollY.current, 0.055)
      const maxScroll = Math.max(1, document.body.scrollHeight - window.innerHeight)
      const progress = smoothY.current / maxScroll

      const { top, bot } = getGradient(progress)
      const body = document.body
      body.style.setProperty('--scroll-progress', String(progress.toFixed(4)))
      body.style.background = `linear-gradient(175deg, rgb(${top.join(',')}) 0%, rgb(${bot.join(',')}) 100%)`

      // Adaptive text glow color
      const isDark = progress < 0.65
      body.style.setProperty('--adaptive-text', isDark ? '#ffffff' : '#1a1028')
      body.style.setProperty('--adaptive-text-muted', isDark ? 'rgba(255,255,255,0.62)' : 'rgba(26,16,40,0.62)')
      body.style.setProperty('--adaptive-glow', isDark ? 'rgba(180,150,255,0.35)' : 'rgba(120,80,200,0.18)')

      if (Math.abs(scrollY.current - smoothY.current) > 0.3) {
        rafId.current = requestAnimationFrame(tick)
      } else {
        isRunning.current = false
      }
    }

    const onScroll = () => {
      scrollY.current = window.scrollY
      if (!isRunning.current) {
        isRunning.current = true
        rafId.current = requestAnimationFrame(tick)
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    // Init
    scrollY.current = window.scrollY
    smoothY.current = window.scrollY
    isRunning.current = true
    rafId.current = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(rafId.current)
    }
  }, [])

  return null
}
