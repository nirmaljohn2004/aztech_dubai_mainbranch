'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const brandImages = [
  '/images/trusted_hardware/IMG_9435.PNG',
  '/images/trusted_hardware/IMG_9436.PNG',
  '/images/trusted_hardware/IMG_9437.PNG',
  '/images/trusted_hardware/IMG_9438.JPG.jpeg',
  '/images/trusted_hardware/IMG_9439.PNG',
  '/images/trusted_hardware/IMG_9440.PNG',
  '/images/trusted_hardware/IMG_9441.PNG',
  '/images/trusted_hardware/IMG_9442.PNG',
  '/images/trusted_hardware/IMG_9443.PNG',
  '/images/trusted_hardware/IMG_9444.PNG',
  '/images/trusted_hardware/IMG_9445.PNG',
  '/images/trusted_hardware/IMG_9446.PNG',
  '/images/trusted_hardware/IMG_9447.PNG',
  '/images/trusted_hardware/IMG_9448.PNG',
  '/images/trusted_hardware/IMG_9449.JPG.jpeg',
  '/images/trusted_hardware/IMG_9450.PNG',
  '/images/trusted_hardware/IMG_9451.JPG.jpeg',
  '/images/trusted_hardware/IMG_9452.PNG',
]

export function BrandMarquee() {
  // We need enough copies so that half the track fills the screen.
  const track = [...brandImages, ...brandImages, ...brandImages, ...brandImages]

  return (
    <section
      className="relative z-10 border-b border-[var(--canvas-border)] py-12 md:py-16 overflow-hidden"
      style={{ backgroundColor: 'transparent' }}
      aria-label="Hardware Brands"
    >
      <div className="mx-auto max-w-[1800px] flex flex-col lg:flex-row items-center gap-8 px-6 md:px-12">
        
        {/* Label */}
        <div className="shrink-0 w-full lg:w-auto flex justify-center lg:justify-start">
          <span className="inline-block font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--canvas-text-muted)] border border-[var(--canvas-border)] px-4 py-2 rounded-full">
            Trusted Hardware
          </span>
        </div>
        
        {/* Premium Minimalist Marquee */}
        <div 
          className="w-full overflow-hidden relative flex items-center h-16"
          style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
        >
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 80 }}
            className="flex whitespace-nowrap items-center w-max"
          >
            {track.map((imageSrc, index) => (
              <div key={`track-${index}`} className="flex items-center px-4 md:px-8">
                <div className="relative h-10 w-28 md:h-14 md:w-36">
                  <Image 
                    src={imageSrc} 
                    alt={`Trusted Hardware Logo ${index}`} 
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
