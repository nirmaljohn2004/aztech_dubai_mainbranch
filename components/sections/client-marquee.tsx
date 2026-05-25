'use client'

import { motion } from 'framer-motion'

const clients = [
  'CARREFOUR UAE',
  'ZULEKHA HOSPITAL',
  'ROVE HOTELS',
  'GEMS SCHOOLS',
  'OBEROI HOTEL',
  'ADNOC HQ',
  'RTA DUBAI',
  'UNION COOP',
  'IBM ABU DHABI',
  'PARLIAMENT PALACE ABU DHABI',
  'AJMAN MUNICIPALITY',
  'FUJAIRAH AVIATION CLUB',
]

export function ClientMarquee() {
  // We need enough copies so that half the track fills the screen.
  const track = [...clients, ...clients, ...clients, ...clients]

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
            transition={{ repeat: Infinity, ease: "linear", duration: 50 }}
            className="flex whitespace-nowrap items-center w-max"
          >
            {track.map((client, index) => (
              <div key={`track-${index}`} className="flex items-center">
                <span className="text-xl md:text-2xl font-sans font-light uppercase tracking-[0.15em] text-[var(--canvas-text)] opacity-40 hover:opacity-100 transition-opacity duration-500 cursor-default px-8 md:px-12">
                  {client}
                </span>
                {/* Elegant Minimal Separator */}
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--canvas-text-muted)] opacity-20" />
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  )
}
