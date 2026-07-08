'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const clientImages = [
  '/images/trustedbrands/Screenshot 2026-06-15 130527.png',
  '/images/trustedbrands/Screenshot 2026-06-15 130536.png',
  '/images/trustedbrands/Screenshot 2026-06-15 130544.png',
  '/images/trustedbrands/Screenshot 2026-06-15 130553.png',
  '/images/trustedbrands/Screenshot 2026-06-15 130558.png',
  '/images/trustedbrands/Screenshot 2026-06-15 130607.png',
  '/images/trustedbrands/Screenshot 2026-06-15 130620.png',
  '/images/trustedbrands/Screenshot 2026-06-15 130625.png',
  '/images/trustedbrands/Screenshot 2026-06-15 130633.png',
  '/images/trustedbrands/Screenshot 2026-06-15 130640.png',
  '/images/trustedbrands/Screenshot 2026-06-15 130646.png',
  '/images/trustedbrands/Screenshot 2026-06-15 130652.png',
  '/images/trustedbrands/Screenshot 2026-06-15 130703.png',
  '/images/trustedbrands/Screenshot 2026-06-15 130709.png',
  '/images/trustedbrands/Screenshot 2026-06-15 130719.png',
  '/images/trustedbrands/Screenshot 2026-06-15 130733.png',
  '/images/trustedbrands/Screenshot 2026-06-15 130742.png',
  '/images/trustedbrands/Screenshot 2026-06-15 130752.png',
  '/images/trustedbrands/Screenshot 2026-06-15 130805.png',
  '/images/trustedbrands/Screenshot 2026-06-15 130811.png',
  '/images/trustedbrands/Screenshot 2026-06-15 130820.png',
  '/images/trustedbrands/Screenshot 2026-06-15 130827.png',
  '/images/trustedbrands/Screenshot 2026-06-15 130837.png',
  '/images/trustedbrands/Screenshot 2026-06-15 130842.png',
  '/images/trustedbrands/Screenshot 2026-06-15 130850.png',
  '/images/trustedbrands/Screenshot 2026-06-15 130858.png',
  '/images/trustedbrands/Screenshot 2026-06-15 130906.png',
  '/images/trustedbrands/Screenshot 2026-06-15 130913.png',
  '/images/trustedbrands/Screenshot 2026-06-15 130928.png',
  '/images/trustedbrands/Screenshot 2026-06-15 130935.png',
  '/images/trustedbrands/Screenshot 2026-06-15 130955.png',
  '/images/trustedbrands/Screenshot 2026-06-15 131001.png',
  '/images/trustedbrands/Screenshot 2026-06-15 131006.png',
  '/images/trustedbrands/Screenshot 2026-06-15 131015.png',
  '/images/trustedbrands/Screenshot 2026-06-15 131026.png',
  '/images/trustedbrands/Screenshot 2026-06-15 131034.png',
  '/images/trustedbrands/Screenshot 2026-06-15 131039.png',
  '/images/trustedbrands/Screenshot 2026-06-15 131044.png',
  '/images/trustedbrands/Screenshot 2026-06-15 131049.png',
  '/images/trustedbrands/Screenshot 2026-06-15 131054.png',
  '/images/trustedbrands/Screenshot 2026-06-15 131102.png',
  '/images/trustedbrands/Screenshot 2026-06-15 131112.png',
  '/images/trustedbrands/Screenshot 2026-06-15 131117.png',
  '/images/trustedbrands/Screenshot 2026-06-15 131122.png',
  '/images/trustedbrands/Screenshot 2026-06-15 131127.png',
  '/images/trustedbrands/Screenshot 2026-06-15 131130.png',
  '/images/trustedbrands/Screenshot 2026-06-15 131134.png',
  '/images/trustedbrands/Screenshot 2026-06-15 131141.png',
  '/images/trustedbrands/Screenshot 2026-06-15 131151.png',
  '/images/trustedbrands/Screenshot 2026-06-15 131156.png',
  '/images/trustedbrands/Screenshot 2026-06-15 131202.png',
  '/images/trustedbrands/Screenshot 2026-06-15 131212.png',
  '/images/trustedbrands/Screenshot 2026-06-15 131220.png',
  '/images/trustedbrands/Screenshot 2026-06-15 131232.png',
  '/images/trustedbrands/Screenshot 2026-06-15 131242.png',
  '/images/trustedbrands/Screenshot 2026-06-15 131248.png',
  '/images/trustedbrands/Screenshot 2026-06-15 131255.png',
  '/images/trustedbrands/Screenshot 2026-06-15 131300.png',
  '/images/trustedbrands/Screenshot 2026-06-15 131306.png',
  '/images/trustedbrands/Screenshot 2026-06-15 131310.png',
  '/images/trustedbrands/Screenshot 2026-06-15 131320.png',
  '/images/trustedbrands/Screenshot 2026-06-15 131331.png',
  '/images/trustedbrands/Screenshot 2026-06-15 131338.png',
  '/images/trustedbrands/Screenshot 2026-06-15 131346.png',
  '/images/trustedbrands/Screenshot 2026-06-15 131403.png',
  '/images/trustedbrands/Screenshot 2026-06-15 131408.png',
  '/images/trustedbrands/Screenshot 2026-06-15 131413.png',
  '/images/trustedbrands/Screenshot 2026-06-15 131420.png',
  '/images/trustedbrands/Screenshot 2026-06-15 131427.png',
  '/images/trustedbrands/Screenshot 2026-06-15 131437.png',
  '/images/trustedbrands/Screenshot 2026-06-15 131443.png',
  '/images/trustedbrands/Screenshot 2026-06-15 131452.png',
]

export function ClientMarquee() {
  // We need enough copies so that half the track fills the screen.
  const track = [...clientImages, ...clientImages]

  return (
    <section
      id="trust"
      className="relative z-10 border-b border-[var(--canvas-border)] py-16 md:py-24 overflow-hidden"
      aria-label="Strategic partnerships"
      style={{ backgroundColor: 'transparent' }}
    >
      <div className="mx-auto max-w-[1800px] flex flex-col lg:flex-row items-center gap-10 px-6 md:px-12">
        
        {/* Label */}
        <div className="shrink-0 w-full lg:w-auto flex justify-center lg:justify-start">
          <span className="inline-block font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--canvas-text-muted)] border border-[var(--canvas-border)] px-4 py-2 rounded-full">
            Strategic Partners
          </span>
        </div>
        
        {/* Premium Minimalist Marquee */}
        <div 
          className="w-full overflow-hidden relative flex items-center h-16"
          style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
        >
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 250 }}
            className="flex whitespace-nowrap items-center w-max"
          >
            {track.map((imageSrc, index) => (
              <div key={`track-${index}`} className="flex items-center px-4 md:px-8">
                <div className="relative h-10 w-28 md:h-14 md:w-36">
                  <Image 
                    src={imageSrc} 
                    alt={`Strategic Partner Logo ${index}`} 
                    fill
                    className="object-contain" 
                  />
                </div>
                {/* Elegant Minimal Separator */}
                <span className="w-[2px] h-8 bg-white/20 ml-4 md:ml-8" />
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  )
}
