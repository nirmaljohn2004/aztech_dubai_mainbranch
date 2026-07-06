"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { useSearchParams } from "next/navigation"
import { ProductModal } from "@/components/ui/product-modal"
import { productDetails, categories } from "@/lib/product-data"
import { Suspense } from "react"

function ProductsSectionInner() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-10% 0px" })
  const searchParams = useSearchParams()
  const initialCategory = searchParams.get("category") || categories[0].id
  const initialSubcategory = searchParams.get("subcategory") || categories[0].subcategories[0].id

  const [activeTab, setActiveTab] = useState(initialCategory)
  const [activeSubTab, setActiveSubTab] = useState(initialSubcategory)
  const [currentPage, setCurrentPage] = useState(1)

  const [selectedProduct, setSelectedProduct] = useState<{name: string, subtitle: string, image: string} | null>(null)

  // Update tabs if URL search params change
  useEffect(() => {
    const category = searchParams.get("category")
    const subcategory = searchParams.get("subcategory")
    if (category && categories.some(c => c.id === category)) {
      setActiveTab(category)
      const targetCat = categories.find(c => c.id === category)!
      if (subcategory && targetCat.subcategories.some(s => s.id === subcategory)) {
        setActiveSubTab(subcategory)
      } else {
        setActiveSubTab(targetCat.subcategories[0].id)
      }
      setCurrentPage(1)
    }
  }, [searchParams])

  const activeCategory = categories.find(c => c.id === activeTab) || categories[0]
  const activeSubcategory = activeCategory.subcategories.find(s => s.id === activeSubTab) || activeCategory.subcategories[0]

  const itemsPerPage = 6;
  const totalPages = Math.max(1, Math.ceil(activeSubcategory.products.length / itemsPerPage));
  const paginatedProducts = activeSubcategory.products.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <section 
      ref={sectionRef}
      id="products" 
      className="bg-white relative overflow-hidden flex flex-col justify-center py-24 lg:py-40 scroll-mt-24"
    >
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--section-pad-x)] relative z-10 w-full">
        
        {/* Massive Centered Header with plenty of space */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 lg:mb-28 text-center flex flex-col items-center"
        >
          <p className="font-sans text-[0.65rem] font-bold tracking-[0.25em] text-[var(--accent)] uppercase mb-6">
            Our Technologies
          </p>
          <h2 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] font-medium text-[var(--text-primary)] leading-[1.1] tracking-tight max-w-4xl">
            Engineered to <span className="text-[var(--text-muted)] italic">captivate.</span>
          </h2>
          <p className="font-sans text-sm text-[var(--text-secondary)] max-w-2xl mt-8 leading-relaxed">
            {activeCategory.description}
          </p>
        </motion.div>

        {/* Clean Horizontal Filtering */}
        <div className="flex flex-col items-center mb-16 lg:mb-24 gap-8">
          
          {/* Main Categories (Minimalist text links) */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 pb-4 border-b border-black/5 w-full max-w-4xl">
            {categories.map((category) => {
              const isActive = activeTab === category.id
              return (
                <button
                  key={category.id}
                  onClick={() => {
                    setActiveTab(category.id)
                    setActiveSubTab(category.subcategories[0].id)
                    setCurrentPage(1)
                  }}
                  className={`relative pb-4 font-sans text-xs md:text-sm tracking-widest uppercase transition-colors duration-300
                    ${isActive ? 'text-black font-bold' : 'text-black/40 font-medium hover:text-black/70'}
                  `}
                >
                  {category.name}
                  {isActive && (
                    <motion.div 
                      layoutId="activeCategory"
                      className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-black"
                    />
                  )}
                </button>
              )
            })}
          </div>

          {/* Subcategories (Elegant Pills) */}
          {activeCategory.subcategories.length > 1 && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-wrap justify-center gap-3"
            >
              {activeCategory.subcategories.map((sub) => (
                <button
                  key={sub.id}
                  onClick={() => {
                    setActiveSubTab(sub.id)
                    setCurrentPage(1)
                  }}
                  className={`
                    px-5 py-2.5 rounded-full font-sans text-[0.75rem] tracking-wider uppercase transition-all duration-300 font-bold
                    ${activeSubTab === sub.id 
                      ? 'bg-black text-white shadow-lg' 
                      : 'bg-black/5 text-black/60 hover:bg-black/10 hover:text-black'}
                  `}
                >
                  {sub.name}
                </button>
              ))}
            </motion.div>
          )}
        </div>

        {/* Spacious 3-Column Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSubTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12"
          >
            {paginatedProducts.map((prod, idx) => (
              <div 
                key={`${prod.name}-${idx}`} 
                className="group cursor-pointer flex flex-col"
                onClick={() => setSelectedProduct({ name: prod.name, subtitle: prod.subtitle || "", image: prod.image })}
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] w-full bg-[#f8f9fa] rounded-2xl overflow-hidden mb-6 flex items-center justify-center p-8 transition-colors duration-500 group-hover:bg-black/[0.03]">
                  {prod.image ? (
                    <Image 
                      src={prod.image}
                      alt={prod.name}
                      fill
                      className="object-contain p-8 transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="w-20 h-20 rounded-full bg-black/10 flex items-center justify-center">
                      <span className="font-mono text-sm tracking-widest uppercase font-bold text-black/40">
                        {prod.name.split('-')[1] || "LED"}
                      </span>
                    </div>
                  )}
                  
                  {/* Subtle View Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-white/40 backdrop-blur-[2px]">
                    <div className="bg-black text-white text-xs font-bold uppercase tracking-widest px-6 py-3 rounded-full flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      View Details
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
                
                {/* Text Content */}
                <div className="flex flex-col items-center text-center px-4">
                  <h4 className="font-sans text-lg font-bold text-black tracking-tight mb-2">
                    {prod.name}
                  </h4>
                  {prod.subtitle && (
                    <p className="font-sans text-xs text-black/50 uppercase tracking-widest leading-relaxed">
                      {prod.subtitle}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Minimalist Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-6 mt-20">
            <button 
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="text-black/40 hover:text-black disabled:opacity-30 disabled:pointer-events-none transition-colors p-2"
            >
              <ArrowRight className="w-5 h-5 rotate-180" />
            </button>
            
            <div className="flex items-center gap-3">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentPage === i + 1 
                      ? 'bg-black w-6' 
                      : 'bg-black/20 hover:bg-black/40'
                  }`}
                  aria-label={`Page ${i + 1}`}
                />
              ))}
            </div>

            <button 
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="text-black/40 hover:text-black disabled:opacity-30 disabled:pointer-events-none transition-colors p-2"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>

      {/* Product Modal */}
      <ProductModal 
        product={selectedProduct ? (productDetails[selectedProduct.name] || null) : null}
        fallbackName={selectedProduct?.name}
        fallbackSubtitle={selectedProduct?.subtitle}
        imageSrc={selectedProduct?.image || ""}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  )
}

export function ProductsSection() {
  return (
    <Suspense fallback={<div className="min-h-[100svh] bg-white flex items-center justify-center">Loading products...</div>}>
      <ProductsSectionInner />
    </Suspense>
  )
}
