"use client"

import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { motion, AnimatePresence } from "framer-motion"
import { X, Check } from "lucide-react"
import Image from "next/image"
import { ProductDetail } from "@/lib/product-data"

interface ProductModalProps {
  product: ProductDetail | null
  fallbackName?: string
  fallbackSubtitle?: string
  imageSrc?: string
  isOpen: boolean
  onClose: () => void
}

export function ProductModal({
  product,
  fallbackName,
  fallbackSubtitle,
  imageSrc,
  isOpen,
  onClose
}: ProductModalProps) {
  const [imgError, setImgError] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown)
      // Save current overflow
      const originalBodyOverflow = document.body.style.overflow;
      const originalHtmlOverflow = document.documentElement.style.overflow;
      
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = originalBodyOverflow;
        document.documentElement.style.overflow = originalHtmlOverflow;
      }
    }
  }, [isOpen, onClose])

  // Reset image error state when modal opens with new product
  useEffect(() => {
    if (isOpen) {
      setImgError(false);
    }
  }, [isOpen, product, imageSrc]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto bg-black/60 backdrop-blur-md overscroll-none touch-none"
          onWheel={(e) => e.stopPropagation()}
          onTouchMove={(e) => e.stopPropagation()}
        >
          {/* Modal Container */}
          <div className="min-h-full w-full flex items-center justify-center p-4 sm:p-6 my-auto pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 10 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-5xl bg-white text-black shadow-2xl flex flex-col lg:flex-row overflow-hidden rounded-xl pointer-events-auto touch-auto"
              onClick={(e) => e.stopPropagation()} // Prevent clicks inside modal from closing it
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/5 hover:bg-black/10 text-black/60 hover:text-black transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left: Header/Visual Area (Clean & Minimal) */}
              <div className="w-full lg:w-[35%] bg-[#f8f9fa] border-b lg:border-b-0 lg:border-r border-black/10 p-8 lg:p-12 flex flex-col justify-center relative">
                <div className="relative w-full aspect-square mb-8 rounded-lg overflow-hidden border border-black/5 bg-white shadow-sm flex items-center justify-center">
                  {imageSrc && !imgError ? (
                    <Image
                      src={imageSrc}
                      alt={product?.name || fallbackName || "Product"}
                      fill
                      sizes="(max-width: 1024px) 100vw, 35vw"
                      className="object-contain p-4"
                      onError={() => setImgError(true)}
                    />
                  ) : (
                    <div className="w-32 h-32 rounded-full bg-black text-white shadow-lg flex items-center justify-center">
                      <span className="font-mono text-xl tracking-widest uppercase font-bold">
                        {(product?.name || fallbackName)?.split('-')[1] || "LED"}
                      </span>
                    </div>
                  )}
                </div>
                
                <div>
                  <span className="inline-block font-mono text-[10px] text-black/50 tracking-widest uppercase mb-4 font-semibold">
                    {product?.id || "Hardware Series"}
                  </span>
                  <h2 className="font-sans text-3xl md:text-4xl font-semibold leading-[1.1] text-black mb-4 tracking-tight break-words">
                    {product?.name || fallbackName}
                  </h2>
                  <h3 className="text-lg text-black/60 font-light leading-snug">
                    {product?.title || fallbackSubtitle}
                  </h3>
                </div>
              </div>

              {/* Right: Info & Specs (White Background) */}
              <div className="w-full lg:w-[65%] p-6 sm:p-8 lg:p-12 overflow-y-auto max-h-[80vh] custom-scrollbar bg-white overscroll-contain">
                
                {product ? (
                  <div className="space-y-12">
                    
                    {/* Descriptions */}
                    {product.description && product.description.length > 0 && (
                      <div>
                        <h4 className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-black/40 mb-6 border-b border-black/10 pb-2">
                          Product Overview
                        </h4>
                        <div className="space-y-4 text-[15px] leading-[1.8] text-black/80 font-light">
                          {product.description.map((desc, i) => (
                            <p key={i}>{desc}</p>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Features */}
                    {product.features && product.features.length > 0 && (
                      <div>
                        <h4 className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-black/40 mb-6 border-b border-black/10 pb-2">
                          Key Features
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {product.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-3 p-4 rounded-lg bg-[#f8f9fa] border border-black/5">
                              <Check className="w-4 h-4 text-black mt-0.5 shrink-0" />
                              <span className="text-sm text-black/80 font-medium leading-snug">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* All Specifications */}
                    {product.specifications && product.specifications.length > 0 && (
                      <div>
                        <h4 className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-black/40 mb-6 border-b border-black/10 pb-2">
                          Technical Specifications
                        </h4>
                        <div className="space-y-8">
                          {product.specifications.map((specGroup, idx) => (
                            <div key={idx} className="overflow-hidden">
                              <h5 className="font-mono text-[11px] font-semibold tracking-widest uppercase text-black/60 mb-3 bg-[#f8f9fa] inline-block px-3 py-1 rounded">
                                {specGroup.category}
                              </h5>
                              <div className="divide-y divide-black/5 border-t border-b border-black/5">
                                {specGroup.specs.map((spec, sIdx) => (
                                  <div key={sIdx} className="flex flex-col sm:flex-row sm:items-center justify-between py-3 hover:bg-black/[0.02] transition-colors px-2">
                                    <span className="text-xs font-mono text-black/50 uppercase tracking-wider mb-1 sm:mb-0 sm:w-1/2">
                                      {spec.label}
                                    </span>
                                    <span className="text-sm text-black font-medium sm:w-1/2 sm:text-right break-words">
                                      {spec.value}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Call to Action */}
                    <div className="pt-8 flex flex-col sm:flex-row gap-4">
                      <a
                        href="/contact"
                        className="inline-flex items-center justify-center px-8 py-3.5 bg-black text-white text-xs font-bold uppercase tracking-widest hover:bg-black/80 transition-colors rounded-none"
                      >
                        Request Quote
                      </a>
                      <button
                        onClick={onClose}
                        className="inline-flex items-center justify-center px-8 py-3.5 bg-transparent border border-black text-black text-xs font-bold uppercase tracking-widest hover:bg-black/5 transition-colors rounded-none"
                      >
                        Close Details
                      </button>
                    </div>

                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full min-h-[300px] text-center space-y-6">
                    <div className="text-black/50 text-sm">Detailed specifications coming soon.</div>
                    <a
                        href="/contact"
                        className="inline-flex items-center justify-center px-8 py-3.5 bg-black text-white text-xs font-bold uppercase tracking-widest hover:bg-black/80 transition-colors rounded-none"
                    >
                      Contact us for info
                    </a>
                  </div>
                )}
                
              </div>
            </motion.div>
            
            {/* Clickable backdrop area around the modal */}
            <div className="absolute inset-0 -z-10" onClick={onClose} />
          </div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  )
}
