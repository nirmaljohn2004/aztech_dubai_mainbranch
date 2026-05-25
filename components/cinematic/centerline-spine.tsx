'use client'

import { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

// ─────────────────────────────────────────────────────────────────────────────
// Three long diagonal rays — upper-right → lower-left — matching Sereniche.
// ViewBox 1000 × 800 landscape; preserveAspectRatio="none" fills the viewport.
// Each ray is a gentle bezier curve (not a rigid straight line) for an
// organic, light-streak feel.
// ─────────────────────────────────────────────────────────────────────────────
const RAY_A = `M 1050,0 C 820,200 600,400 380,600 C 240,720 80,780 -80,820`
const RAY_B = `M 980,0  C 760,200 550,400 330,600 C 195,720 30,780 -130,820`
const RAY_C = `M 1120,0 C 880,200 650,400 440,600 C 300,720 140,780 -20,820`

export function CenterlineSpine() {
  const rawProgress = useMotionValue(0)

  // Slow, liquid spring — line tip lags pleasantly behind scroll
  const pathLength = useSpring(rawProgress, {
    stiffness: 10,
    damping: 22,
    restDelta: 0.0005,
  })

  useEffect(() => {
    const handleScroll = () => {
      const scrollY  = window.scrollY
      const pageH    = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight
      )
      const maxScroll = pageH - window.innerHeight
      const progress  = maxScroll > 0
        ? Math.max(0, Math.min(1, scrollY / maxScroll))
        : 0

      rawProgress.set(progress)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)
    const t = setTimeout(handleScroll, 200)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
      clearTimeout(t)
    }
  }, [rawProgress])

  return (
    <div
      aria-hidden="true"
      className="hidden md:block fixed inset-0 pointer-events-none z-[5] overflow-hidden"
    >
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1000 800"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* ── Wide atmospheric halo — large soft purple bloom ── */}
          <filter id="ray-halo" x="-800%" y="-800%" width="1700%" height="1700%"
            colorInterpolationFilters="sRGB">
            <feGaussianBlur in="SourceGraphic" stdDeviation="28" result="halo" />
            <feComponentTransfer in="halo">
              <feFuncA type="linear" slope="0.5" />
            </feComponentTransfer>
          </filter>

          {/* ── Medium bloom — saturated neon body ── */}
          <filter id="ray-bloom" x="-400%" y="-400%" width="900%" height="900%"
            colorInterpolationFilters="sRGB">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="bloom" />
            <feComponentTransfer in="bloom" result="faded">
              <feFuncA type="linear" slope="0.7" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode in="faded" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* ── Tight inner glow ── */}
          <filter id="ray-core" x="-200%" y="-200%" width="500%" height="500%"
            colorInterpolationFilters="sRGB">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="glow" />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* ══════════════════════════════════════════════
            RAY A — central / brightest ray
        ══════════════════════════════════════════════ */}

        {/* ghost track */}
        <path d={RAY_A} stroke="rgba(192,160,240,0.07)" strokeWidth="1.5"
          strokeLinecap="round" vectorEffect="non-scaling-stroke" />

        {/* outer atmospheric halo */}
        <motion.path d={RAY_A}
          stroke="rgba(180,140,230,1)" strokeWidth="18"
          strokeOpacity="0.22" strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          style={{ pathLength }} filter="url(#ray-halo)" />

        {/* mid bloom */}
        <motion.path d={RAY_A}
          stroke="rgba(200,170,255,1)" strokeWidth="6"
          strokeOpacity="0.5" strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          style={{ pathLength }} filter="url(#ray-bloom)" />

        {/* core glow */}
        <motion.path d={RAY_A}
          stroke="rgba(220,200,255,1)" strokeWidth="1.8"
          strokeOpacity="0.85" strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          style={{ pathLength }} filter="url(#ray-core)" />

        {/* white-hot filament */}
        <motion.path d={RAY_A}
          stroke="rgba(250,248,255,1)" strokeWidth="0.5"
          strokeOpacity="0.95" strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          style={{ pathLength }} />


        {/* ══════════════════════════════════════════════
            RAY B — slightly left of A, 70% intensity
        ══════════════════════════════════════════════ */}

        <path d={RAY_B} stroke="rgba(170,140,220,0.05)" strokeWidth="1.2"
          strokeLinecap="round" vectorEffect="non-scaling-stroke" />

        <motion.path d={RAY_B}
          stroke="rgba(160,120,210,1)" strokeWidth="14"
          strokeOpacity="0.16" strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          style={{ pathLength }} filter="url(#ray-halo)" />

        <motion.path d={RAY_B}
          stroke="rgba(185,155,240,1)" strokeWidth="4"
          strokeOpacity="0.38" strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          style={{ pathLength }} filter="url(#ray-bloom)" />

        <motion.path d={RAY_B}
          stroke="rgba(210,190,255,1)" strokeWidth="1.2"
          strokeOpacity="0.65" strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          style={{ pathLength }} filter="url(#ray-core)" />

        <motion.path d={RAY_B}
          stroke="rgba(248,245,255,1)" strokeWidth="0.4"
          strokeOpacity="0.8" strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          style={{ pathLength }} />


        {/* ══════════════════════════════════════════════
            RAY C — slightly right of A, 50% intensity
        ══════════════════════════════════════════════ */}

        <path d={RAY_C} stroke="rgba(160,130,210,0.04)" strokeWidth="1"
          strokeLinecap="round" vectorEffect="non-scaling-stroke" />

        <motion.path d={RAY_C}
          stroke="rgba(150,110,200,1)" strokeWidth="10"
          strokeOpacity="0.12" strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          style={{ pathLength }} filter="url(#ray-halo)" />

        <motion.path d={RAY_C}
          stroke="rgba(175,145,230,1)" strokeWidth="3"
          strokeOpacity="0.28" strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          style={{ pathLength }} filter="url(#ray-bloom)" />

        <motion.path d={RAY_C}
          stroke="rgba(200,180,250,1)" strokeWidth="0.9"
          strokeOpacity="0.5" strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          style={{ pathLength }} />

      </svg>
    </div>
  )
}
