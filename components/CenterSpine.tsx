'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

export const CenterSpine: React.FC = () => {
  const spineRef = useRef<SVGSVGElement>(null)
  const { scrollYProgress } = useScroll()

  const linearProgress = useSpring(scrollYProgress, {
    stiffness: 65,
    damping: 28,
    restDelta: 0.0005,
  })

  const referencePathLength = 5000
  const synchronizedOffset = useTransform(
    linearProgress,
    [0, 1],
    [referencePathLength, 0]
  )

  const activeOpacity = useTransform(
    scrollYProgress,
    [0, 0.08, 0.92, 1],
    [0.75, 1, 1, 0.72]
  )

  const spinePath =
    'M 720 0 C 720 400, 1020 600, 720 1000 S 420 1400, 720 1800 C 1120 2200, 1120 2600, 720 2900 S 320 3200, 720 3700 C 1200 4100, 240 4600, 720 5000'

  return (
    <svg
      ref={spineRef}
      aria-hidden="true"
      className="absolute left-1/2 top-0 z-[5] h-full w-[100vw] -translate-x-1/2 select-none overflow-visible pointer-events-none"
      viewBox="0 0 1440 5000"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id="editorialSpineGradient"
          x1="0%"
          y1="0%"
          x2="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.8" />
          <stop offset="35%" stopColor="#c084fc" stopOpacity="1" />
          <stop offset="70%" stopColor="#f472b6" stopOpacity="1" />
          <stop offset="100%" stopColor="#38bdf8" stopOpacity="1" />
        </linearGradient>
      </defs>

      {/* Background track removed for cleaner single-shade look */}

      <motion.path
        d={spinePath}
        stroke="url(#editorialSpineGradient)"
        strokeWidth="4"
        strokeLinecap="round"
        pathLength={referencePathLength}
        strokeDasharray={referencePathLength}
        style={{
          opacity: activeOpacity,
          strokeDashoffset: synchronizedOffset,
          filter: 'drop-shadow(0 0 12px rgba(192, 132, 252, 0.9))',
        }}
      />
    </svg>
  )
}
