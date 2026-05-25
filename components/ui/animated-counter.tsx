'use client'

import React, { useEffect, useState } from 'react'
import { useMotionValue, useSpring, motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface AnimatedCounterProps {
  target: number
  duration?: number
  className?: string
  format?: (value: number) => string
}

export function AnimatedCounter({
  target,
  duration = 2.5,
  className,
  format = (val) => Math.round(val).toLocaleString(),
}: AnimatedCounterProps) {
  const count = useMotionValue(0)
  const rounded = useSpring(count, {
    damping: 60,
    mass: 1,
    stiffness: 100,
  })
  const [displayValue, setDisplayValue] = useState('0')

  useEffect(() => {
    rounded.on('change', (latest) => {
      setDisplayValue(format(latest))
    })
  }, [rounded, format])

  useEffect(() => {
    count.set(target)
  }, [target, count])

  return (
    <span className={cn('font-bold text-accent-primary', className)}>
      {displayValue}
    </span>
  )
}
