'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface SectionLabelProps {
  children: React.ReactNode
  className?: string
}

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <div className={cn('eyebrow inline-block', className)}>
      {children}
    </div>
  )
}
