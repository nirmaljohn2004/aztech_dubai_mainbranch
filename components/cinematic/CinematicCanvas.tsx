'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  hue: number
  life: number
  maxLife: number
}

interface AuroraBlob {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  hue: number
  opacity: number
  phase: number
  speed: number
}

export function CinematicCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const rafRef = useRef<number>(0)
  const timeRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    let w = 0, h = 0
    const particles: Particle[] = []
    const auroraBlobs: AuroraBlob[] = []

    const resize = () => {
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize, { passive: true })

    // Init aurora blobs
    const blobCount = 5
    for (let i = 0; i < blobCount; i++) {
      auroraBlobs.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.12,
        radius: 180 + Math.random() * 280,
        hue: 240 + Math.random() * 80, // 240-320: blue-purple-violet
        opacity: 0.04 + Math.random() * 0.06,
        phase: Math.random() * Math.PI * 2,
        speed: 0.0004 + Math.random() * 0.0003,
      })
    }

    // Spawn floating particles
    const spawnParticle = (): Particle => ({
      x: Math.random() * w,
      y: h + 20,
      vx: (Math.random() - 0.5) * 0.4,
      vy: -(0.2 + Math.random() * 0.6),
      size: 0.5 + Math.random() * 1.8,
      opacity: 0.3 + Math.random() * 0.5,
      hue: 260 + Math.random() * 80,
      life: 0,
      maxLife: 200 + Math.random() * 300,
    })

    // Seed initial particles
    for (let i = 0; i < 60; i++) {
      const p = spawnParticle()
      p.y = Math.random() * h
      p.life = Math.random() * p.maxLife
      particles.push(p)
    }

    // ── Draw moving SVG-like curves (light streaks) ──
    const drawLightStreaks = (t: number) => {
      const progress = (window.scrollY / Math.max(1, document.body.scrollHeight - window.innerHeight))
      const streakOpacity = 0.04 + (1 - progress) * 0.06

      ctx.save()
      for (let i = 0; i < 4; i++) {
        const offset = t * (0.012 + i * 0.004) + i * (Math.PI / 2)
        const y1 = h * (0.15 + i * 0.22) + Math.sin(offset) * 60
        const y2 = h * (0.15 + i * 0.22) + Math.sin(offset + 0.8) * 90
        const cp1x = w * 0.25 + Math.sin(offset * 0.7) * 80
        const cp2x = w * 0.75 + Math.cos(offset * 0.5) * 80

        const grad = ctx.createLinearGradient(0, y1, w, y2)
        grad.addColorStop(0, `hsla(${270 + i * 15}, 70%, 75%, 0)`)
        grad.addColorStop(0.3, `hsla(${270 + i * 15}, 70%, 80%, ${streakOpacity})`)
        grad.addColorStop(0.6, `hsla(${290 + i * 15}, 65%, 85%, ${streakOpacity * 0.8})`)
        grad.addColorStop(1, `hsla(${270 + i * 15}, 70%, 75%, 0)`)

        ctx.beginPath()
        ctx.moveTo(0, y1)
        ctx.bezierCurveTo(cp1x, y1 + 30, cp2x, y2 - 30, w, y2)
        ctx.strokeStyle = grad
        ctx.lineWidth = 0.8 + i * 0.3
        ctx.stroke()
      }
      ctx.restore()
    }

    // ── Draw aurora blobs ──
    const drawAurora = (t: number) => {
      ctx.save()
      ctx.globalCompositeOperation = 'screen'
      auroraBlobs.forEach((blob) => {
        blob.x += blob.vx
        blob.y += blob.vy
        if (blob.x < -blob.radius) blob.x = w + blob.radius
        if (blob.x > w + blob.radius) blob.x = -blob.radius
        if (blob.y < -blob.radius) blob.y = h + blob.radius
        if (blob.y > h + blob.radius) blob.y = -blob.radius

        const pulse = Math.sin(t * blob.speed + blob.phase) * 0.015
        const currentOpacity = blob.opacity + pulse

        const grad = ctx.createRadialGradient(
          blob.x, blob.y, 0,
          blob.x, blob.y, blob.radius
        )
        grad.addColorStop(0, `hsla(${blob.hue}, 70%, 65%, ${currentOpacity})`)
        grad.addColorStop(0.5, `hsla(${blob.hue + 20}, 60%, 55%, ${currentOpacity * 0.4})`)
        grad.addColorStop(1, `hsla(${blob.hue}, 50%, 45%, 0)`)

        ctx.beginPath()
        ctx.arc(blob.x, blob.y, blob.radius, 0, Math.PI * 2)
        ctx.fillStyle = grad
        ctx.fill()
      })
      ctx.restore()
    }

    // ── Draw floating particles ──
    const drawParticles = () => {
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy
        p.life++

        const lifeRatio = p.life / p.maxLife
        const fadeIn = Math.min(1, lifeRatio * 5)
        const fadeOut = Math.max(0, 1 - Math.pow(lifeRatio, 2))
        const alpha = p.opacity * fadeIn * fadeOut

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(${p.hue}, 75%, 80%, ${alpha})`
        ctx.fill()

        if (p.life >= p.maxLife) {
          particles[i] = spawnParticle()
        }
      }
    }

    // ── Draw noise grain overlay ──
    const drawNoise = () => {
      const imageData = ctx.createImageData(w, h)
      const data = imageData.data
      // Very sparse grain – only 0.5% of pixels
      const grainCount = Math.floor(w * h * 0.005)
      for (let i = 0; i < grainCount; i++) {
        const idx = Math.floor(Math.random() * (w * h)) * 4
        const lum = 180 + Math.random() * 75
        data[idx] = lum
        data[idx + 1] = lum
        data[idx + 2] = lum
        data[idx + 3] = Math.random() * 22
      }
      ctx.putImageData(imageData, 0, 0)
    }

    let lastNoise = 0
    const NOISE_INTERVAL = 80 // ms – refresh grain every ~12fps

    const render = (timestamp: number) => {
      rafRef.current = requestAnimationFrame(render)
      if (document.hidden) return

      timeRef.current = timestamp
      ctx.clearRect(0, 0, w, h)

      drawLightStreaks(timestamp)
      drawAurora(timestamp)
      drawParticles()

      // Sparse grain refresh
      if (timestamp - lastNoise > NOISE_INTERVAL) {
        drawNoise()
        lastNoise = timestamp
      }
    }

    rafRef.current = requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
        mixBlendMode: 'screen',
        opacity: 0.85,
        willChange: 'transform',
      }}
    />
  )
}
