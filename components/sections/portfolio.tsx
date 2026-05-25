'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const projects = [
  { 
    name: "ADNOC Headquarters", 
    category: "Corporate LED Walls", 
    location: "Abu Dhabi", 
    image: "/images/proj_adnoc_1774784409133.webp" 
  },
  { 
    name: "RTA Dubai Control Center", 
    category: "Command Center", 
    location: "Dubai", 
    image: "/images/proj_rta_1774784465970.webp" 
  },
  { 
    name: "Dubai Cricket Stadium", 
    category: "Sports Perimeter", 
    location: "Dubai", 
    image: "/images/proj_cricket_1774784549601.webp" 
  },
  { 
    name: "Wafi Mall Digital Entrance", 
    category: "Retail Advertising", 
    location: "Dubai", 
    image: "/images/proj_wafi_1774784593202.webp" 
  },
  { 
    name: "The Dubai Mall Showrooms", 
    category: "Retail Display", 
    location: "Dubai", 
    image: "/images/proj_dubaimall_1774784635796.webp" 
  },
  { 
    name: "Zulekha Hospital", 
    category: "Healthcare Signage", 
    location: "Dubai", 
    image: "/images/proj_zulekha.webp" 
  },
  { 
    name: "Rove Hotels Lobby", 
    category: "Hospitality Media", 
    location: "Dubai", 
    image: "/images/proj_rove.webp" 
  },
  { 
    name: "Parliament Palace", 
    category: "Government Display", 
    location: "Abu Dhabi", 
    image: "/images/proj_parliament.webp" 
  },
  { 
    name: "GEMS School Auditorium", 
    category: "Education LED", 
    location: "Dubai", 
    image: "/images/proj_gems.webp" 
  },
  { 
    name: "Carrefour Hypermarkets", 
    category: "In-Store Signage", 
    location: "Multiple Locations", 
    image: "/images/proj_carrefour.webp" 
  },
  { 
    name: "Expo 2020 Pavilions", 
    category: "Exhibition Displays", 
    location: "Dubai", 
    image: "/images/proj_expo.webp" 
  },
  { 
    name: "Oberoi Hotel Exterior", 
    category: "Architectural Facade", 
    location: "Dubai", 
    image: "/images/proj_oberoi.webp" 
  }
]

export function PortfolioSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % projects.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section 
      id="projects" 
      className="relative h-screen min-h-[700px] w-full flex items-center bg-[#090514] -mt-24 z-30"
      style={{
        clipPath: 'inset(0 0 0 0 round 50% 50% 0 0 / 80px 80px 0 0)'
      }}
    >
      {/* Background Images Cross-Fade Backdrop */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          {/* Base dark layer */}
          <div className="absolute inset-0 bg-[#090514]" />
          
          <AnimatePresence>
            <motion.div
              key={`bg-${activeIndex}`}
              initial={{ opacity: 0, scale: 1.0 }}
              animate={{ opacity: 1, scale: 1.05 }}
              exit={{ opacity: 0 }}
              transition={{ 
                opacity: { duration: 1.2 },
                scale: { duration: 8, ease: "easeOut" }
              }}
              className="absolute inset-0 w-full h-full"
            >
              <img 
                src={projects[activeIndex].image} 
                alt="" 
                className="w-full h-full object-cover object-center" 
              />
              {/* Gradients to blend text perfectly */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#090514]/20 via-transparent to-[#090514]" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#090514]/80 via-transparent to-transparent" />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-8 h-full pt-40 pb-24 items-end">
        
        {/* Left Side: Typography & Info */}
        <div className="col-span-1 md:col-span-8 lg:col-span-9 h-full flex flex-col justify-end">
          <span className="text-[10px] tracking-widest uppercase font-mono text-purple-400 block mb-6 drop-shadow-md">
            FEATURED INSTALLATIONS // {activeIndex < 9 ? `0${activeIndex + 1}` : activeIndex + 1} OF {projects.length}
          </span>
          
          <div className="min-h-[200px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={`text-${activeIndex}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <h2 className="font-serif text-5xl md:text-7xl lg:text-[6rem] font-medium tracking-tight leading-[1.05] text-white mb-8 drop-shadow-xl">
                  {projects[activeIndex].name}
                </h2>
                <div className="flex flex-wrap gap-3 font-mono text-[10px] tracking-wider uppercase text-white/80">
                  <span className="bg-white/10 px-4 py-2 rounded-full backdrop-blur-md border border-white/20 shadow-lg">
                    {projects[activeIndex].category}
                  </span>
                  <span className="bg-white/10 px-4 py-2 rounded-full backdrop-blur-md border border-white/20 shadow-lg">
                    {projects[activeIndex].location}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        
        {/* Right Side: Navigation Dots & CTA */}
        <div className="col-span-1 md:col-span-4 lg:col-span-3 flex flex-col justify-end items-start md:items-end pb-4">
          <div className="flex flex-wrap gap-2 max-w-[200px] justify-start md:justify-end mb-12">
            {projects.map((_, dotIdx) => (
              <button 
                key={`dot-${dotIdx}`}
                onClick={() => setActiveIndex(dotIdx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  dotIdx === activeIndex ? "w-8 bg-purple-400" : "w-2 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to project ${dotIdx + 1}`}
              />
            ))}
          </div>

          <a
            href="#contact"
            className="inline-flex h-12 px-8 items-center justify-center border border-white/[0.15] bg-transparent text-[10px] tracking-widest uppercase font-mono text-white transition-all duration-300 hover:bg-white/[0.05] hover:border-white/40 w-full md:w-auto"
          >
            Request Full Case Studies
          </a>
        </div>

      </div>
    </section>
  )
}
