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
  return (
    <section
      id="trust"
      className="relative z-10 border-b border-white/5 px-6 py-20 md:px-12"
      aria-label="Strategic partnerships"
      style={{ backgroundColor: 'transparent' }}
    >
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/4 shrink-0">
          <span className="block font-mono text-[10px] uppercase tracking-[0.24em] text-purple-400/80">
            // STRATEGIC PARTNERSHIPS
          </span>
        </div>
        
        {/* Infinite Scrolling Marquee */}
        <div 
          className="md:w-3/4 overflow-hidden relative flex items-center h-10 w-full"
          style={{ maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' }}
        >
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
            className="flex whitespace-nowrap items-center gap-16"
          >
            {[...clients, ...clients, ...clients].map((client, index) => (
              <span 
                key={`${client}-${index}`} 
                className="text-[11px] font-mono uppercase tracking-[0.2em] text-white/40"
              >
                {client}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
