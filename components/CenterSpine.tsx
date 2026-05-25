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
    'M 720 0 C 720 400, 1020 600, 720 1000 S 420 1400, 720 1800 C 1120 2200, 1120 2600, 720 2900 S 320 3200, 720 3700 C 620 4100, 820 4500, 720 5000'

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
          <stop offset="0%" stopColor="#D8B4FE" stopOpacity="0.55" />
          <stop offset="25%" stopColor="#A855F7" stopOpacity="1" />
          <stop offset="65%" stopColor="#818CF8" stopOpacity="1" />
          <stop offset="100%" stopColor="#4F46E5" stopOpacity="0.5" />
        </linearGradient>
      </defs>

      <path
        d={spinePath}
        stroke="rgba(168, 85, 247, 0.22)"
        strokeWidth="1.4"
        strokeLinecap="round"
      />

      <motion.path
        d={spinePath}
        stroke="url(#editorialSpineGradient)"
        strokeWidth="3.2"
        strokeLinecap="round"
        pathLength={referencePathLength}
        strokeDasharray={referencePathLength}
        style={{
          opacity: activeOpacity,
          strokeDashoffset: synchronizedOffset,
          filter: 'drop-shadow(0 0 8px rgba(168, 85, 247, 0.75))',
        }}
      />
    </svg>
  )
}
