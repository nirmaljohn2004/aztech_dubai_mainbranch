'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useState, useMemo } from 'react'
import { DynamicCanvasWrapper } from '@/components/layout/dynamic-canvas'
import { Footer } from '@/components/layout/footer'
import { Navbar } from '@/components/layout/navbar'
import { WhatsAppFAB } from '@/components/layout/whatsapp-fab'
import { productDetails, ProductDetail } from '@/lib/product-data'
import { ProductCard } from '@/components/ui/product-card'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

export default function ProductsPage() {
  // Extract products array from the record
  const allProducts: ProductDetail[] = useMemo(() => Object.values(productDetails), []);
  
  // Extract unique categories based on title (or other attributes)
  const categories = useMemo(() => {
    const cats = new Set<string>();
    cats.add("All");
    allProducts.forEach(p => {
      if (p.title.toLowerCase().includes("indoor")) cats.add("Indoor LED");
      else if (p.title.toLowerCase().includes("outdoor")) cats.add("Outdoor LED");
      else if (p.title.toLowerCase().includes("flexible") || p.title.toLowerCase().includes("creative")) cats.add("Creative Flexible");
      else cats.add("Specialty LED");
    });
    return Array.from(cats);
  }, [allProducts]);

  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = useMemo(() => {
    if (activeCategory === "All") return allProducts;
    return allProducts.filter(p => {
      const isIndoor = p.title.toLowerCase().includes("indoor");
      const isOutdoor = p.title.toLowerCase().includes("outdoor");
      const isCreative = p.title.toLowerCase().includes("flexible") || p.title.toLowerCase().includes("creative");
      
      if (activeCategory === "Indoor LED") return isIndoor;
      if (activeCategory === "Outdoor LED") return isOutdoor;
      if (activeCategory === "Creative Flexible") return isCreative;
      if (activeCategory === "Specialty LED") return !isIndoor && !isOutdoor && !isCreative;
      return false;
    });
  }, [activeCategory, allProducts]);
  const getCount = (cat: string) => {
    if (cat === "All") return allProducts.length;
    return allProducts.filter(p => {
      const isIndoor = p.title.toLowerCase().includes("indoor");
      const isOutdoor = p.title.toLowerCase().includes("outdoor");
      const isCreative = p.title.toLowerCase().includes("flexible") || p.title.toLowerCase().includes("creative");
      
      if (cat === "Indoor LED") return isIndoor;
      if (cat === "Outdoor LED") return isOutdoor;
      if (cat === "Creative Flexible") return isCreative;
      if (cat === "Specialty LED") return !isIndoor && !isOutdoor && !isCreative;
      return false;
    }).length;
  };

  return (
    <>
      <Navbar />
      <main id="main" role="main" className="min-h-screen pt-24">
        <DynamicCanvasWrapper>
          <div className="mx-auto max-w-7xl px-6 md:px-12 py-16 md:py-24">
            {/* Hero Section */}
            <div className="mb-16 grid grid-cols-1 gap-6 border-b border-[var(--canvas-border)] pb-12 md:grid-cols-12">
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
                  Explore our comprehensive catalog of display architectures, engineered for specific environments, viewing distances, and installation conditions.
                </p>
              </motion.div>
            </div>

            {/* Category Tabs */}
            <motion.div 
              className="flex flex-wrap items-center gap-2 md:gap-4 mb-16"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-xs font-mono tracking-widest uppercase transition-all duration-300 ${
                    activeCategory === cat
                      ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.15)]'
                      : 'bg-white/5 text-[var(--canvas-text-muted)] hover:text-white border border-white/10 hover:border-white/20 hover:bg-white/10'
                  }`}
                >
                  {cat}
                  <span className="ml-2 opacity-50">
                    ({getCount(cat)})
                  </span>
                </button>
              ))}
            </motion.div>

            {/* Products Grid */}
            <motion.div 
              className="grid gap-12"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {filteredProducts.map((product, idx) => (
                <ProductCard key={product.id} product={product} index={idx} />
              ))}
              
              {filteredProducts.length === 0 && (
                <div className="py-20 text-center text-[var(--canvas-text-muted)] border border-dashed border-white/10 rounded-xl bg-white/5">
                  No products found in this category.
                </div>
              )}
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
                href="/contact"
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
