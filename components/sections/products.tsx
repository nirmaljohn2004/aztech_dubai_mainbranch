'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const technicalLines = [
  {
    index: '01',
    title: 'Indoor ultra-fine pitch',
    metric: 'P1.2 - P1.86',
    use: 'Command rooms, luxury retail, close-view walls',
    image: '/images/product_indoor_1774782297798.webp',
  },
  {
    index: '02',
    title: 'Outdoor high-brightness',
    metric: 'P2.5 - P10',
    use: 'Facades, roadsides, stadium perimeter media',
    image: '/images/product_outdoor_1774782316663.webp',
  },
  {
    index: '03',
    title: 'Flexible curved mesh',
    metric: 'Creative radius',
    use: 'Pillars, atriums, ribbons, irregular surfaces',
    image: '/images/prod_12.webp',
  },
  {
    index: '04',
    title: 'Transparent glass LED',
    metric: '75% - 85%',
    use: 'Storefront windows and architectural frontage',
    image: '/images/product_transparent_1774782335491.webp',
  },
]

export function ProductsSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section
      id="products"
      className="relative z-10 border-b border-white/5 px-6 py-24 md:px-12 md:py-32"
      style={{ backgroundColor: 'transparent' }}
    >
      <div className="mx-auto max-w-7xl">
        {/* Minimal Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-white/5 pb-16 mb-16">
          <div className="mb-8 md:mb-0">
            <span className="block font-mono text-[10px] uppercase tracking-[0.24em] text-purple-400/80 mb-6 drop-shadow-sm">
              // HARDWARE PORTFOLIO
            </span>
            <h2 className="max-w-3xl font-serif text-4xl md:text-6xl font-medium leading-[1.05] text-white tracking-tight">
              Precision display <br className="hidden md:block"/>systems.
            </h2>
          </div>
          <p className="max-w-[280px] text-sm leading-relaxed text-white/50 text-left md:text-right font-light">
            Engineered for absolute clarity across any architectural scale or viewing distance.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 items-center">
          {/* Left Column - Clean Minimal Image Frame */}
          <div className="md:col-span-6 flex flex-col justify-center">
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#05020a]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={technicalLines[activeIndex].title}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="absolute inset-0 h-full w-full"
                >
                  <Image
                    src={technicalLines[activeIndex].image}
                    alt={technicalLines[activeIndex].title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    priority={true}
                  />
                  {/* Subtle vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090514]/80 via-transparent to-transparent" />
                </motion.div>
              </AnimatePresence>

              {/* Minimal floating specs */}
              <div className="absolute bottom-6 left-6 z-10 flex items-center gap-4">
                <span className="font-mono text-[10px] text-purple-300 tracking-[0.2em] uppercase">
                  {technicalLines[activeIndex].metric}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column - Clean interactive list */}
          <div className="md:col-span-5 md:col-start-8 flex flex-col justify-center">
            <div className="flex flex-col border-t border-white/5">
              {technicalLines.map((line, index) => {
                const isActive = index === activeIndex
                return (
                  <article
                    key={line.title}
                    onMouseEnter={() => setActiveIndex(index)}
                    onClick={() => setActiveIndex(index)}
                    className={`group cursor-pointer border-b border-white/5 py-8 transition-all duration-500 ${
                      isActive ? 'opacity-100' : 'opacity-40 hover:opacity-70'
                    }`}
                  >
                    <div className="flex items-start gap-6">
                      <span className="font-mono text-[10px] mt-2 text-purple-400">
                        {line.index}
                      </span>
                      <div className="flex-1">
                        <h3 className="font-serif text-3xl md:text-4xl leading-tight text-white mb-3 transition-transform duration-500 group-hover:translate-x-2">
                          {line.title}
                        </h3>
                        <p className={`text-xs text-white/60 leading-relaxed font-light transition-all duration-500 overflow-hidden ${
                          isActive ? 'max-h-20 opacity-100 mt-2' : 'max-h-0 opacity-0'
                        }`}>
                          {line.use}
                        </p>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
