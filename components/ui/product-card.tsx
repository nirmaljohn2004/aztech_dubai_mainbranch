'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { ProductDetail } from '@/lib/product-data'
import { ProductModal } from '@/components/ui/product-modal'

interface ProductCardProps {
  product: ProductDetail;
  index: number;
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

export function ProductCard({ product, index }: ProductCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Try to determine category from title for visual tag
  let categoryTag = "Professional LED";
  if (product.title.toLowerCase().includes("indoor")) categoryTag = "Indoor LED";
  if (product.title.toLowerCase().includes("outdoor")) categoryTag = "Outdoor LED";
  if (product.title.toLowerCase().includes("flexible")) categoryTag = "Creative Flexible";

  // Extract a few key specs for the card
  const paramsCategory = product.specifications.find(s => s.category === "Parameters");
  const specsList = paramsCategory?.specs || [];
  
  const keySpecLabels = ["Pixel Pitch", "Brightness (Max)", "Refresh Rate", "Cabinet Size"];
  const displaySpecs = specsList.filter(s => keySpecLabels.includes(s.label)).slice(0, 4);

  return (
    <motion.article
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
            <h2 className="font-serif text-4xl font-medium leading-tight text-[var(--canvas-text)] md:text-5xl mb-4">
              {product.name}
            </h2>
            <h3 className="text-xl text-purple-300/80 mb-6 font-light">
              {product.title}
            </h3>
            <p className="text-base leading-relaxed text-[var(--canvas-text-muted)] mb-8 max-w-xl line-clamp-3">
              {product.description[0]}
            </p>
          </div>

          {/* Specs Grid */}
          <div className="mb-8">
            <p className="font-mono text-[10px] uppercase tracking-wider text-purple-500/70 mb-4">Key Specifications</p>
            <div className="grid grid-cols-2 gap-4">
              {displaySpecs.map((spec) => (
                <div key={spec.label} className="border border-white/8 rounded-lg p-3 backdrop-blur-sm hover:border-purple-500/30 transition-colors">
                  <div className="font-mono text-[9px] uppercase tracking-wider text-[var(--canvas-text-muted)] mb-1">
                    {spec.label}
                  </div>
                  <div className="font-mono text-sm font-semibold text-white truncate">
                    {spec.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center justify-center gap-3 w-fit px-6 py-3 rounded-full bg-purple-500/20 border border-purple-500/50 text-sm font-mono uppercase tracking-wider text-white hover:bg-purple-500/30 hover:border-purple-500/80 transition-all duration-300 group/cta"
          >
            Full Details
            <ArrowRight className="w-4 h-4 group-hover/cta:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Right: Decorative / Abstract Representation instead of Image */}
        <div className="flex flex-col justify-center h-full">
          <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl border border-white/10 bg-[#05020a] flex items-center justify-center group-hover:border-purple-500/30 transition-colors duration-500">
            {/* Abstract Tech Graphic */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
            
            <div className="relative z-10 flex flex-col items-center gap-6">
               <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-purple-600/20 to-purple-400/10 border border-purple-500/20 flex items-center justify-center backdrop-blur-md shadow-[0_0_30px_rgba(168,85,247,0.15)] group-hover:shadow-[0_0_50px_rgba(168,85,247,0.3)] transition-all duration-700 group-hover:scale-110">
                 <span className="font-mono text-purple-300 tracking-widest uppercase text-xs rotate-[-45deg] opacity-70">
                   {categoryTag}
                 </span>
               </div>
               <div className="text-center z-10 px-4">
                  <div className="text-[10px] font-mono text-purple-500/50 uppercase tracking-[0.3em] mb-2">Display Series</div>
                  <div className="text-sm font-medium text-white/80">{product.name}</div>
               </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-100 rounded-xl pointer-events-none" />
          </div>
          <div className="mt-4 flex items-center gap-2 text-xs text-[var(--canvas-text-muted)]">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.8)]"></span>
            Precision Engineering • Advanced LED
          </div>
        </div>
      </div>
      
      <ProductModal 
        product={product}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </motion.article>
  )
}
