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
  return (
    <section
      className="relative z-10 border-b border-[var(--canvas-border)] py-20 md:py-32 overflow-hidden"
      style={{ backgroundColor: 'transparent' }}
      aria-label="Trusted Hardware Brands"
    >
      <div className="mx-auto max-w-[1800px] px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-24 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block font-mono text-[11px] font-bold uppercase tracking-[0.3em] text-[var(--canvas-text-muted)] border border-[var(--canvas-border)] bg-black/20 backdrop-blur-md px-6 py-3 rounded-full mb-6">
              Trusted Hardware
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6"
          >
            Our Hardware Partners
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[var(--canvas-text-muted)] max-w-2xl mx-auto text-lg md:text-xl leading-relaxed"
          >
            We collaborate with industry-leading hardware providers to deliver robust and reliable display solutions for our clients.
          </motion.p>
        </div>
        
        {/* Premium Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {brandImages.map((imageSrc, index) => (
            <motion.div
              key={`brand-${index}`}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (index % 6) * 0.1 }}
              whileHover={{ scale: 1.05, y: -8 }}
              className="relative flex items-center justify-center p-8 md:p-10 rounded-2xl border border-[var(--canvas-border)] bg-[#0a0a0a]/40 backdrop-blur-md group overflow-hidden transition-all duration-300 cursor-pointer hover:border-cyan-500/40 hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.3)]"
            >
              {/* Dynamic Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Floating Animation for the Logo */}
              <motion.div 
                animate={{ y: [0, -5, 0] }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 4, 
                  delay: (index % 5) * 0.4, 
                  ease: "easeInOut" 
                }}
                className="relative h-14 w-full max-w-[140px] transition-transform duration-500 group-hover:scale-110 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
              >
                <Image 
                  src={imageSrc} 
                  alt={`Trusted Hardware Logo ${index + 1}`} 
                  fill
                  sizes="(max-width: 768px) 140px, 160px"
                  className="object-contain" 
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
