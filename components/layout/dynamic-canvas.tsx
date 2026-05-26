'use client'

import { useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { CenterSpine } from '@/components/CenterSpine'

export function DynamicCanvasWrapper({ children }: { children: React.ReactNode }) {
  const { scrollYProgress } = useScroll()

  const canvasBg = useTransform(
    scrollYProgress,
    [0, 0.15, 0.3, 0.4, 0.45, 0.70, 0.75, 0.85, 0.88, 0.90, 1],
    ["#05020A", "#0b0617", "#140b2e", "#241352", "#F9F9FB", "#F9F9FB", "#05020A", "#090514", "#0c061a", "#0f0822", "#170b33"]
  )

  const navBg = useTransform(
    scrollYProgress,
    [0, 0.15, 0.3, 0.4, 0.45, 0.70, 0.75, 0.85, 0.88, 0.90, 1],
    [
      "rgba(5, 2, 10, 0.05)",
      "rgba(11, 6, 23, 0.05)",
      "rgba(20, 11, 46, 0.08)",
      "rgba(36, 19, 82, 0.1)",
      "rgba(249, 249, 251, 0.15)",
      "rgba(249, 249, 251, 0.15)",
      "rgba(5, 2, 10, 0.05)",
      "rgba(9, 5, 20, 0.05)",
      "rgba(9, 5, 20, 0.05)",
      "rgba(9, 5, 20, 0.05)",
      "rgba(9, 5, 20, 0.05)"
    ]
  )

  const canvasText = useTransform(
    scrollYProgress,
    [0, 0.15, 0.3, 0.4, 0.45, 0.70, 0.75, 0.85, 0.88, 0.90, 1],
    ["#F3F4F6", "#F3F4F6", "#F3F4F6", "#F3F4F6", "#0B0B0C", "#0B0B0C", "#F3F4F6", "#F3F4F6", "#F3F4F6", "#F3F4F6", "#F3F4F6"]
  )

  const canvasTextMuted = useTransform(
    scrollYProgress,
    [0, 0.15, 0.3, 0.4, 0.45, 0.70, 0.75, 0.85, 0.88, 0.90, 1],
    ["#d7cdea", "#d7cdea", "#d7cdea", "#d7cdea", "#51515A", "#51515A", "#d7cdea", "#d7cdea", "#d7cdea", "#d7cdea", "#d7cdea"]
  )

  const canvasBorder = useTransform(
    scrollYProgress,
    [0, 0.15, 0.3, 0.4, 0.45, 0.70, 0.75, 0.85, 0.88, 0.90, 1],
    [
      "rgba(255, 255, 255, 0.08)",
      "rgba(255, 255, 255, 0.08)",
      "rgba(255, 255, 255, 0.08)",
      "rgba(255, 255, 255, 0.08)",
      "rgba(11, 11, 12, 0.08)",
      "rgba(11, 11, 12, 0.08)",
      "rgba(255, 255, 255, 0.08)",
      "rgba(255, 255, 255, 0.08)",
      "rgba(255, 255, 255, 0.08)",
      "rgba(255, 255, 255, 0.08)",
      "rgba(255, 255, 255, 0.08)"
    ]
  )

  const glowOpacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.3, 0.4, 0.45, 0.85, 0.86, 0.90, 0.93, 0.96, 1],
    [0.72, 0.75, 0.8, 0.85, 0.14, 0.14, 0.72, 0.75, 0.8, 0.85, 0.14]
  )

  const spineColor = useTransform(
    scrollYProgress,
    [0, 0.15, 0.3, 0.4, 0.45, 0.85, 0.86, 0.90, 0.93, 0.96, 1],
    ["#D8B4FE", "#C084FC", "#A855F7", "#9333EA", "#A855F7", "#A855F7", "#D8B4FE", "#C084FC", "#A855F7", "#9333EA", "#A855F7"]
  )

  const spineOpacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.3, 0.4, 0.45, 0.85, 0.86, 0.90, 0.93, 0.96, 1],
    [0.95, 0.95, 0.9, 0.85, 0.72, 0.72, 0.95, 0.95, 0.9, 0.85, 0.72]
  )

  const spineGlowOpacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.3, 0.4, 0.45, 0.85, 0.86, 0.90, 0.93, 0.96, 1],
    [0.9, 0.9, 0.8, 0.7, 0.36, 0.36, 0.9, 0.9, 0.8, 0.7, 0.36]
  )

  useEffect(() => {
    const updateLogoFilter = (bgColor: string) => {
      const hex = bgColor.replace("#", "")
      const rgb = hex.length === 6
        ? [
            parseInt(hex.slice(0, 2), 16),
            parseInt(hex.slice(2, 4), 16),
            parseInt(hex.slice(4, 6), 16),
          ]
        : [0, 0, 0]
      const luminance = (0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]) / 255

      if (luminance > 0.68) {
        document.body.style.setProperty("--logo-filter", "brightness(0)")
      } else {
        document.body.style.setProperty("--logo-filter", "brightness(0) invert(1)")
      }
    }

    const unsubscribeBg = canvasBg.on("change", (latest) => {
      document.body.style.setProperty("--canvas-bg", latest)
      updateLogoFilter(latest)
    })
    const unsubscribeNavBg = navBg.on("change", (latest) => {
      document.body.style.setProperty("--nav-bg", latest)
    })
    const unsubscribeText = canvasText.on("change", (latest) => {
      document.body.style.setProperty("--canvas-text", latest)
    })
    const unsubscribeTextMuted = canvasTextMuted.on("change", (latest) => {
      document.body.style.setProperty("--canvas-text-muted", latest)
    })
    const unsubscribeBorder = canvasBorder.on("change", (latest) => {
      document.body.style.setProperty("--canvas-border", latest)
    })
    const unsubscribeSpineColor = spineColor.on("change", (latest) => {
      document.body.style.setProperty("--spine-color", latest)
    })
    const unsubscribeSpineOpacity = spineOpacity.on("change", (latest) => {
      document.body.style.setProperty("--spine-opacity", latest.toString())
    })
    const unsubscribeSpineGlow = spineGlowOpacity.on("change", (latest) => {
      document.body.style.setProperty("--spine-glow-opacity", latest.toString())
    })

    // Initial configuration
    document.body.style.setProperty("--canvas-bg", canvasBg.get())
    document.body.style.setProperty("--nav-bg", navBg.get())
    document.body.style.setProperty("--canvas-text", canvasText.get())
    document.body.style.setProperty("--canvas-text-muted", canvasTextMuted.get())
    document.body.style.setProperty("--canvas-border", canvasBorder.get())
    document.body.style.setProperty("--spine-color", spineColor.get())
    document.body.style.setProperty("--spine-opacity", spineOpacity.get().toString())
    document.body.style.setProperty("--spine-glow-opacity", spineGlowOpacity.get().toString())
    updateLogoFilter(canvasBg.get())

    return () => {
      unsubscribeBg()
      unsubscribeNavBg()
      unsubscribeText()
      unsubscribeTextMuted()
      unsubscribeBorder()
      unsubscribeSpineColor()
      unsubscribeSpineOpacity()
      unsubscribeSpineGlow()
    }
  }, [canvasBg, navBg, canvasText, canvasTextMuted, canvasBorder, spineColor, spineOpacity, spineGlowOpacity])

  return (
    <div className="relative w-full min-h-screen">
      <motion.div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{ backgroundColor: canvasBg }}
      />
      <motion.div 
        className="fixed inset-0 pointer-events-none z-0" 
        style={{ 
          opacity: glowOpacity,
          background: "radial-gradient(circle at 76% 16%, rgba(216,180,254,0.38), transparent 34%), radial-gradient(circle at 18% 80%, rgba(124,58,237,0.2), transparent 42%), linear-gradient(120deg, rgba(255,255,255,0.10), transparent 46%)" 
        }} 
      />
      {/* Grainy dot-grid overlay removed for a clean, glassy aesthetic */}

      <div className="absolute inset-0 z-[5] pointer-events-none">
        <CenterSpine />
      </div>
      
      <div className="relative z-10 w-full">
        {children}
      </div>
    </div>
  )
}
