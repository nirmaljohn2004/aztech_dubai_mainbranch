'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { value: 20,  suffix: '+',  label: 'Years Expertise',  color: '#7c3aed' },
  { value: 500, suffix: '+',  label: 'Projects Done',    color: '#6d28d9' },
  { value: 200, suffix: '+',  label: 'Happy Clients',    color: '#5b21b6' },
  { value: 5.0, suffix: '',   label: 'Google Reviews',   color: '#7c3aed', isDecimal: true },
]

function useCountUp(target: number, duration = 1800, start = false, isDecimal = false, onDone?: () => void) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start) return
    const startTime = performance.now()
    const step = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = eased * target
      setCount(isDecimal ? parseFloat(current.toFixed(1)) : Math.floor(current))
      if (progress < 1) requestAnimationFrame(step)
      else { setCount(target); onDone?.() }
    }
    requestAnimationFrame(step)
  }, [start, target, duration, isDecimal])
  return count
}

// Sonar ripple rings that explode outward on count-complete
function RippleRings({ color, trigger }: { color: string; trigger: boolean }) {
  return (
    <div className='absolute inset-0 -m-8 pointer-events-none flex items-center justify-center'>
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className='absolute rounded-full border'
          style={{ borderColor: color }}
          initial={{ width: 40, height: 40, opacity: 0 }}
          animate={trigger ? {
            width:   [40, 160],
            height:  [40, 160],
            opacity: [0.7, 0],
          } : {}}
          transition={{
            duration: 1.4,
            delay: i * 0.22,
            ease: 'easeOut',
            repeat: Infinity,
            repeatDelay: 1.8,
          }}
        />
      ))}
    </div>
  )
}

function StatCard({
  value, suffix, label, color, isDecimal = false, delay = 0, inView,
}: {
  value: number; suffix: string; label: string; color: string;
  isDecimal?: boolean; delay?: number; inView: boolean
}) {
  const [started, setStarted] = useState(false)
  const [done,    setDone]    = useState(false)
  const count = useCountUp(value, 1800, started, isDecimal, () => setDone(true))

  useEffect(() => {
    if (inView && !started) {
      const t = setTimeout(() => setStarted(true), delay)
      return () => clearTimeout(t)
    }
  }, [inView, started, delay])

  return (
    <motion.div
      initial={{ opacity: 0, y: 48, scale: 0.85 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ type: 'spring', stiffness: 80, damping: 14, delay: delay / 1000 }}
      className='relative flex flex-col items-center justify-center text-center group'
    >
      <div className='relative mb-6'>

        {/* Sonar ripple rings — burst when counting done */}
        <RippleRings color={color} trigger={done} />

        {/* Soft glow behind number on completion */}
        <motion.div
          className='absolute inset-0 -m-8 rounded-full blur-2xl'
          style={{ backgroundColor: color }}
          animate={done ? { opacity: [0, 0.22, 0.1] } : { opacity: 0 }}
          transition={{ duration: 1.0, ease: 'easeOut' }}
        />

        {/* Number with spring pop on done */}
        <motion.div
          className='relative z-10'
          animate={done ? { scale: [1, 1.1, 1] } : {}}
          transition={{ type: 'spring', stiffness: 260, damping: 10, delay: 0.05 }}
        >
          <span
            className='font-bold tracking-tight leading-none'
            style={{
              fontSize: 'clamp(2.8rem, 6vw, 5rem)',
              fontFamily: "'Georgia', 'Times New Roman', serif",
              color: 'var(--canvas-text)',
            }}
          >
            {isDecimal ? count.toFixed(1) : count}
          </span>
          <span
            className='font-bold leading-none'
            style={{
              fontSize: 'clamp(2rem, 4.5vw, 3.8rem)',
              fontFamily: "'Georgia', 'Times New Roman', serif",
              color: color,
            }}
          >
            {suffix}
          </span>
        </motion.div>
      </div>

      {/* Underline draws in when done */}
      <motion.div
        className='h-px mx-auto mb-3'
        style={{ backgroundColor: color }}
        initial={{ width: 0, opacity: 0 }}
        animate={done ? { width: 48, opacity: 0.6 } : {}}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
      />

      {/* Label */}
      <motion.span
        className='text-[11px] md:text-[12px] tracking-[0.2em] uppercase font-mono'
        style={{ color: 'var(--canvas-text-muted)' }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
        transition={{ duration: 0.4, delay: (delay + 400) / 1000 }}
      >
        {label}
      </motion.span>
    </motion.div>
  )
}

export function StatsCounter() {
  const ref    = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id='stats-counter'
      className='relative py-20 md:py-28 px-6 md:px-12 border-b border-[var(--canvas-border)] overflow-hidden'
      style={{ backgroundColor: 'transparent' }}
    >
      {/* Floating ambient orbs */}
      <div className='absolute inset-0 pointer-events-none' aria-hidden='true'>
        <motion.div
          className='absolute w-72 h-72 rounded-full blur-[100px] opacity-[0.06]'
          style={{ background: '#7c3aed', top: '-10%', left: '10%' }}
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className='absolute w-64 h-64 rounded-full blur-[80px] opacity-[0.05]'
          style={{ background: '#a78bfa', bottom: '-10%', right: '15%' }}
          animate={{ x: [0, -25, 0], y: [0, 15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
      </div>

      <div className='relative max-w-7xl mx-auto'>
        {/* Eyebrow with expanding lines */}
        <motion.div
          className='flex items-center justify-center gap-3 mb-16'
          initial={{ opacity: 0, y: -12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className='h-px bg-purple-500/40'
            initial={{ width: 0 }}
            animate={inView ? { width: 48 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
          <span
            className='text-[10px] tracking-widest uppercase font-mono whitespace-nowrap'
            style={{ color: 'var(--canvas-text-muted)' }}
          >
            OUR IMPACT // BY THE NUMBERS
          </span>
          <motion.div
            className='h-px bg-purple-500/40'
            initial={{ width: 0 }}
            animate={inView ? { width: 48 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
        </motion.div>

        {/* Stats grid */}
        <div
          ref={ref}
          className='grid grid-cols-2 lg:grid-cols-4 gap-y-20 gap-x-6 md:gap-x-10'
        >
          {stats.map((stat, idx) => (
            <div key={idx} className='relative'>
              {idx < stats.length - 1 && (
                <motion.div
                  className='hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px'
                  style={{ background: 'linear-gradient(to bottom, transparent, #7c3aed, transparent)' }}
                  initial={{ height: 0, opacity: 0 }}
                  animate={inView ? { height: 56, opacity: 0.25 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + idx * 0.1 }}
                />
              )}
              <StatCard
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                color={stat.color}
                isDecimal={stat.isDecimal}
                delay={idx * 150}
                inView={inView}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
