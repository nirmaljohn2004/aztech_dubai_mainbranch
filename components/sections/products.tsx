'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

// Real 18 LED products from user specifications
const allProducts = [
  { id: '1', category: 'Indoor', title: 'HD LED Display', metric: 'P1.2', image: '/images/prod_1.webp' },
  { id: '2', category: 'Indoor', title: 'Indoor LED Display', metric: 'Vibrant Colors', image: '/images/prod_2.webp' },
  { id: '3', category: 'Outdoor', title: 'Outdoor DIP LED Display', metric: '5000 nits', image: '/images/studio_outdoor_dip.png' },
  { id: '4', category: 'Outdoor', title: 'Outdoor SMD LED Display', metric: 'Wide View', image: '/images/prod_4.webp' },
  { id: '5', category: 'Outdoor', title: 'Die-Cast Aluminum LED', metric: 'IP65', image: '/images/prod_5.webp' },
  { id: '6', category: 'Specialty', title: 'Curtain / Mesh LED', metric: 'Semi-transparent', image: '/images/prod_6.webp' },
  { id: '7', category: 'Indoor', title: 'Front Service LED', metric: 'Front-access', image: '/images/prod_7.webp' },
  { id: '8', category: 'Specialty', title: 'Floor LED Display', metric: '1000kg/m²', image: '/images/studio_floor_led.png' },
  { id: '9', category: 'Indoor', title: 'Poster LED Display', metric: 'Standalone', image: '/images/prod_9.webp' },
  { id: '10', category: 'Specialty', title: 'Transparent Glass LED', metric: 'See-through', image: '/images/prod_10.webp' },
  { id: '11', category: 'Outdoor', title: 'Perimeter LED Display', metric: 'Stadium', image: '/images/prod_11.webp' },
  { id: '12', category: 'Specialty', title: 'Curve LED Display', metric: 'Flexible', image: '/images/studio_curved_led.png' },
  { id: '13', category: 'Specialty', title: 'Spherical LED Display', metric: '360° Globe', image: '/images/spherical_custom.jpg' },
  { id: '14', category: 'Specialty', title: 'Creative Shape LED', metric: 'Irregular', image: '/images/studio_creative_led.png' },
  { id: '15', category: 'Niche', title: 'Gas Price LED Display', metric: 'RTA Compliant', image: '/images/prod_15.webp' },
  { id: '16', category: 'Niche', title: 'Taxi Rooftop LED', metric: 'Taxi Ads', image: '/images/taxi_rooftop_custom.jpg' },
  { id: '17', category: 'Niche', title: 'Traffic LED Display', metric: 'VMS', image: '/images/prod_17.webp' },
  { id: '18', category: 'Indoor', title: 'LCD Video Wall', metric: 'Seamless', image: '/images/prod_18.webp' },
]

const categories = ['All', 'Indoor', 'Outdoor', 'Specialty', 'Niche']

export function ProductsSection() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProducts = activeCategory === 'All'
    ? allProducts
    : allProducts.filter(p => p.category === activeCategory)

  return (
    <section
      id="products"
      className="relative z-10 border-b border-white/5 px-4 py-20 md:px-12 md:py-40"
      style={{ backgroundColor: 'transparent' }}
    >
      <div className="mx-auto max-w-[1200px]">
        {/* Header */}
        <div className="flex flex-col items-center justify-center text-center pb-20 mb-16 relative z-10">
          <div className="mb-10 flex items-center gap-4 opacity-80">
            <span className="uppercase tracking-[0.35em] text-[11px] font-mono text-purple-300/70">Hardware Portfolio</span>
            <div className="w-12 h-[1px] bg-purple-500/30"></div>
          </div>

          <h2 className="max-w-5xl font-sans text-5xl md:text-7xl font-medium leading-[1.1] text-[var(--canvas-text)] tracking-[-0.02em] mb-8">
            Precision display <br className="hidden md:block" />systems.
          </h2>

          <p className="max-w-2xl text-base md:text-lg leading-[1.8] text-[var(--canvas-text-muted)] font-light mb-16">
            Engineered for absolute clarity across any architectural scale or viewing distance. Explore our comprehensive 18-product lineup.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 p-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 md:px-6 md:py-2.5 rounded-full text-[10px] md:text-sm font-mono tracking-widest uppercase transition-all duration-300 ${activeCategory === cat
                    ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.15)]'
                    : 'bg-transparent text-[var(--canvas-text-muted)] hover:text-[var(--canvas-text)] border border-transparent'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Minimal Product Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16 lg:gap-20"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="group relative flex flex-col cursor-pointer"
              >
                {/* Premium Image Frame */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#05020a] border border-[var(--canvas-border)] rounded-sm mb-6">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-purple-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>

                {/* Minimal Content */}
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[9px] text-purple-500 tracking-[0.2em] uppercase">
                      {product.category}
                    </span>
                    <span className="font-mono text-[10px] text-[var(--canvas-text-muted)] tracking-wider">
                      {product.metric}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-lg md:text-xl font-medium text-[var(--canvas-text)] transition-colors group-hover:text-purple-500">
                      {product.title}
                    </h3>
                    <ArrowRight className="w-4 h-4 text-[var(--canvas-text-muted)] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  )
}
