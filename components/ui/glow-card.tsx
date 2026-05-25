'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface GlowCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  noPadding?: boolean
}

export function GlowCard({ 
  children, 
  className, 
  noPadding = false,
  ...props 
}: GlowCardProps) {
  return (
    <div
      className={cn(
        'glass-card',
        !noPadding && 'p-6',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
