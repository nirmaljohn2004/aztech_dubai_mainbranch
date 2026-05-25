'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import { DynamicCanvasWrapper } from '@/components/layout/dynamic-canvas'
import { Footer } from '@/components/layout/footer'
import { Navbar } from '@/components/layout/navbar'
import { WhatsAppFAB } from '@/components/layout/whatsapp-fab'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

const productsCatalog = [
  {
    id: '01 // ULTRA-FINE',
    title: 'Indoor Ultra-Fine Pitch LED',
    description:
      'P1.2 - P1.86 display architecture for command rooms, executive briefing suites, luxury retail, and boardroom walls where near-field clarity matters.',
    image: '/images/product_indoor_1774782297798.webp',
    specs: [
      ['Pixel Pitch', 'P1.2 - P1.86'],
      ['Refresh', '>=3840 Hz'],
      ['Service', 'Front access'],
      ['Cabinet', 'Die-cast aluminum'],
    ],
    useCases: ['Command Centers', 'Retail Display', 'Boardroom Walls', 'Executive Suites'],
  },
  {
    id: '02 // OUTDOOR',
    title: 'Outdoor High-Brightness Commercial Displays',
    description:
      'P2.5 - P10 weather-rated commercial displays for roadside media, stadium perimeter systems, building signage, and direct-sun exposure sites.',
    image: '/images/product_outdoor_1774782316663.webp',
    specs: [
      ['Pixel Pitch', 'P2.5 - P10'],
      ['Brightness', 'Up to 8,000 nits'],
      ['Ingress', 'IP65 chassis'],
      ['Frame', 'Hot-dip steel options'],
    ],
    useCases: ['Stadium Perimeter', 'Building Signage', 'Roadside Media', 'Outdoor Venues'],
  },
  {
    id: '03 // CREATIVE',
    title: 'Flexible & Curved Creative Mesh Series',
    description:
      'Lightweight bendable and mesh display systems for curved pillars, sculptural atriums, facade ribbons, and irregular architectural surfaces.',
    image: '/images/prod_12.webp',
    specs: [
      ['Geometry', 'Convex / concave'],
      ['Weight', 'Low-load mesh'],
      ['Module', 'Magnetic service'],
      ['Use Case', 'Pillars / ribbons'],
    ],
    useCases: ['Curved Pillars', 'Sculptural Atriums', 'Facade Ribbons', 'Creative Installations'],
  },
  {
    id: '04 // GLASS',
    title: 'Transparent Architectural Glass LED Windows',
    description:
      'High-transparency LED glass systems for storefront windows, malls, transit halls, and frontage layers that need media without blocking daylight.',
    image: '/images/product_transparent_1774782335491.webp',
    specs: [
      ['Transparency', '75% - 85%'],
      ['Thickness', '<10 mm'],
      ['Brightness', '5,500 nits'],
      ['Install', 'Interior glass line'],
    ],
    useCases: ['Storefront Windows', 'Malls & Retail', 'Transit Halls', 'Architectural Glass'],
  },
]

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main id="main" role="main" className="min-h-screen pt-24">
        <DynamicCanvasWrapper>
          <div className="mx-auto max-w-7xl px-6 md:px-12 py-16 md:py-24">
            {/* Hero Section */}
            <div className="mb-20 grid grid-cols-1 gap-6 border-b border-[var(--canvas-border)] pb-16 md:grid-cols-12">
              <motion.div 
                className="md:col-span-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <span className="block font-mono text-[10px] uppercase tracking-widest text-purple-500 mb-8">
                  PRODUCTS INDEX // TECHNICAL LINES
                </span>
              </motion.div>
              <motion.div 
                className="md:col-span-9"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="font-serif text-5xl font-medium leading-tight text-[var(--canvas-text)] md:text-7xl lg:text-8xl mb-6">
                  Hardware, indexed by spatial demand.
                </h1>
                <p className="text-lg text-[var(--canvas-text-muted)] max-w-2xl">
                  Four distinct product lines, each engineered for specific architectural contexts, viewing distances, and environmental conditions.
                </p>
              </motion.div>
            </div>

            {/* Products Grid */}
            <motion.div 
              className="grid gap-12"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
            >
              {productsCatalog.map((product, idx) => (
                <motion.article
                  key={product.id}
                  variants={itemVariants}
                  className="group relative grid gap-8 md:gap-10 overflow-hidden rounded-xl border border-[var(--canvas-border)] bg-gradient-to-br from-white/[0.03] to-white/[0.01] p-8 md:p-10 hover:border-purple-500/30 transition-all duration-500 backdrop-blur-sm"
                >
                  {/* Background Gradient on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/0 to-purple-500/0 group-hover:from-purple-500/5 group-hover:via-purple-500/3 group-hover:to-purple-500/0 transition-all duration-500 pointer-events-none rounded-xl" />
                  
                  <div className="relative grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
                    {/* Left: Content */}
                    <div className="flex flex-col justify-between">
                      <div>
                        <span className="inline-block font-mono text-xs text-purple-400 tracking-widest uppercase mb-4 px-3 py-1.5 bg-purple-500/10 rounded-full border border-purple-500/20">
                          {product.id}
                        </span>
                        <h2 className="font-serif text-4xl font-medium leading-tight text-[var(--canvas-text)] md:text-5xl mb-6">
                          {product.title}
                        </h2>
                        <p className="text-base leading-relaxed text-[var(--canvas-text-muted)] mb-8 max-w-xl">
                          {product.description}
                        </p>
                      </div>

                      {/* Specs Grid */}
                      <div className="mb-8">
                        <p className="font-mono text-[10px] uppercase tracking-wider text-purple-500/70 mb-4">Key Specifications</p>
                        <div className="grid grid-cols-2 gap-4">
                          {product.specs.map(([label, value]) => (
                            <div key={label} className="border border-white/8 rounded-lg p-3 backdrop-blur-sm hover:border-purple-500/30 transition-colors">
                              <div className="font-mono text-[9px] uppercase tracking-wider text-[var(--canvas-text-muted)] mb-1">
                                {label}
                              </div>
                              <div className="font-mono text-sm font-semibold text-white">
                                {value}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Use Cases */}
                      <div className="mb-8">
                        <p className="font-mono text-[10px] uppercase tracking-wider text-purple-500/70 mb-3">Ideal For</p>
                        <div className="flex flex-wrap gap-2">
                          {product.useCases.map((useCase) => (
                            <span key={useCase} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-white/80 hover:bg-white/10 transition-colors">
                              <Check className="w-3 h-3 text-emerald-400" />
                              {useCase}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* CTA */}
                      <a
                        href="#contact"
                        className="inline-flex items-center justify-center gap-3 w-fit px-6 py-3 rounded-full bg-purple-500/20 border border-purple-500/50 text-sm font-mono uppercase tracking-wider text-white hover:bg-purple-500/30 hover:border-purple-500/80 transition-all duration-300 group/cta"
                      >
                        Get Specs
                        <ArrowRight className="w-4 h-4 group-hover/cta:translate-x-1 transition-transform" />
                      </a>
                    </div>

                    {/* Right: Image */}
                    <div className="flex flex-col justify-center">
                      <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/2">
                        <Image
                          src={product.image}
                          alt={product.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                      </div>
                      <div className="mt-4 flex items-center gap-2 text-xs text-[var(--canvas-text-muted)]">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                        Premium Quality • Ready Stock
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>

            {/* Bottom CTA */}
            <motion.div 
              className="mt-20 flex flex-col items-center justify-center gap-6 py-16 border-t border-[var(--canvas-border)]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-center text-lg text-[var(--canvas-text-muted)] max-w-2xl">
                Need a custom configuration or technical consultation? Our engineering team is ready to design the perfect solution for your spatial requirements.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-full bg-gradient-to-r from-purple-600 to-purple-700 text-white font-mono text-xs uppercase tracking-widest hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] transition-all duration-300 hover:scale-105"
              >
                Schedule Consultation
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </DynamicCanvasWrapper>
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  )
}
