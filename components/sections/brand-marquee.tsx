'use client'

import { motion } from 'framer-motion'

const brands = [
  'HIKVISION',
  'DAHUA',
  'ABSEN',
  'UNILUMIN',
  'SAMSUNG',
  'LG',
  'NOVASTAR',
  'COLORLIGHT',
  'AMX',
  'MEANWELL',
  'CRESTON',
  'LEDMAN',
]

export function BrandMarquee() {
  // We need enough copies so that half the track fills the screen.
  const track = [...brands, ...brands, ...brands, ...brands]

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
            transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
            className="flex whitespace-nowrap items-center w-max"
          >
            {track.map((brand, index) => (
              <div key={`track-${index}`} className="flex items-center">
                <span className="text-2xl md:text-3xl font-sans font-bold tracking-widest text-white uppercase px-8 md:px-14">
                  {brand}
                </span>
                {/* Elegant Minimal Separator */}
                <span className="w-[2px] h-8 bg-white/20" />
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  )
}
