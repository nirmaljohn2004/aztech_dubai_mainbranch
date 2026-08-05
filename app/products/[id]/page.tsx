import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Check, ChevronRight, Download, LayoutGrid } from 'lucide-react'
import { productDetails } from '@/lib/product-data'
import { DynamicCanvasWrapper } from '@/components/layout/dynamic-canvas'
import { Footer } from '@/components/layout/footer'
import { Navbar } from '@/components/layout/navbar'
import { WhatsAppFAB } from '@/components/layout/whatsapp-fab'

interface PageProps {
  params: Promise<{
    id: string
  }>
}

export function generateStaticParams() {
  return Object.keys(productDetails).map((id) => ({
    id,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params
  const product = productDetails[id]
  
  if (!product) {
    return { title: 'Product Not Found | AZTECH' }
  }

  return {
    title: product.seo?.title || `${product.name} | AZTECH`,
    description: product.seo?.description || product.title,
  }
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { id } = await params
  const product = productDetails[id]

  if (!product) {
    notFound()
  }

  // Try to determine category from title for visual tag
  let categoryTag = "Professional LED";
  if (product.title.toLowerCase().includes("indoor")) categoryTag = "Indoor LED";
  if (product.title.toLowerCase().includes("outdoor")) categoryTag = "Outdoor LED";
  if (product.title.toLowerCase().includes("flexible")) categoryTag = "Creative Flexible";

  return (
    <>
      <Navbar />
      <main id="main" role="main" className="min-h-screen pt-24 pb-20">
        <DynamicCanvasWrapper>
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 py-8 text-xs font-mono text-[var(--canvas-text-muted)] border-b border-white/5 mb-12">
              <Link href="/products" className="hover:text-purple-400 transition-colors flex items-center gap-2">
                <ArrowLeft className="w-3 h-3" />
                Products
              </Link>
              <ChevronRight className="w-3 h-3 opacity-50" />
              <span>{categoryTag}</span>
              <ChevronRight className="w-3 h-3 opacity-50" />
              <span className="text-purple-300">{product.name}</span>
            </div>

            {/* Hero Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
              
              {/* Product Visual */}
              <div className="relative aspect-square md:aspect-[4/3] lg:aspect-square overflow-hidden rounded-2xl border border-white/10 bg-[#05020a] flex items-center justify-center group shadow-2xl">
                {product.image ? (
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <>
                     <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] opacity-20"></div>
                     <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-purple-500/5"></div>
                     
                     <div className="relative z-10 flex flex-col items-center gap-8">
                       <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-tr from-purple-600/20 to-purple-400/10 border border-purple-500/30 flex items-center justify-center backdrop-blur-md shadow-[0_0_50px_rgba(168,85,247,0.2)] group-hover:scale-105 transition-transform duration-700">
                         <span className="font-mono text-purple-300 tracking-widest uppercase text-sm md:text-base rotate-[-45deg] opacity-80">
                           {categoryTag}
                         </span>
                       </div>
                     </div>
                  </>
                )}
              </div>

              {/* Product Info */}
              <div className="flex flex-col justify-center">
                <span className="inline-block font-mono text-xs text-purple-400 tracking-widest uppercase mb-6 px-4 py-2 bg-purple-500/10 rounded-full border border-purple-500/20 w-fit">
                  {product.id}
                </span>
                
                <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.1] text-[var(--canvas-text)] mb-6">
                  {product.name}
                </h1>
                
                <h2 className="text-2xl md:text-3xl font-light text-purple-300/90 mb-10">
                  {product.title}
                </h2>

                <div className="space-y-6 text-base md:text-lg text-[var(--canvas-text-muted)] leading-relaxed mb-12">
                  {product.description.map((desc, idx) => (
                    <p key={idx}>{desc}</p>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#specifications"
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-purple-500/20 border border-purple-500/50 text-sm font-mono uppercase tracking-wider text-white hover:bg-purple-500/30 transition-all duration-300"
                  >
                    Technical Specs
                  </a>
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white/5 border border-white/10 text-sm font-mono uppercase tracking-wider text-white hover:bg-white/10 transition-all duration-300"
                  >
                    Request Quote
                  </a>
                </div>
              </div>
            </div>

            {/* Features (if any) */}
            {product.features && product.features.length > 0 && (
              <div className="mb-20">
                <div className="mb-10 flex items-center gap-4 opacity-80">
                  <span className="uppercase tracking-[0.35em] text-[11px] font-mono text-purple-300/70">Key Features</span>
                  <div className="w-12 h-[1px] bg-purple-500/30"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
                      <div className="p-2 rounded-full bg-purple-500/20 text-purple-400 mt-1">
                        <Check className="w-4 h-4" />
                      </div>
                      <p className="text-sm md:text-base text-white/90 leading-relaxed">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technical Specifications */}
            <div id="specifications" className="scroll-mt-32">
              <div className="mb-12 flex items-center gap-4 opacity-80">
                <span className="uppercase tracking-[0.35em] text-[11px] font-mono text-purple-300/70">Technical Documentation</span>
                <div className="flex-1 h-[1px] bg-gradient-to-r from-purple-500/30 to-transparent"></div>
              </div>

              <div className="grid grid-cols-1 gap-12">
                {product.specifications.map((specGroup, idx) => (
                  <div key={idx} className="rounded-2xl border border-white/10 overflow-hidden bg-black/20 backdrop-blur-md">
                    <div className="px-6 py-5 border-b border-white/10 bg-white/5">
                      <h3 className="font-mono text-sm tracking-widest uppercase text-white/90">
                        {specGroup.category}
                      </h3>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/5 border-b border-white/5 last:border-0">
                      {specGroup.specs.map((spec, sIdx) => (
                        <div key={sIdx} className="flex flex-col sm:flex-row sm:items-center justify-between px-6 py-4 hover:bg-white/[0.02] transition-colors border-b border-white/5">
                          <span className="text-xs md:text-sm font-mono text-[var(--canvas-text-muted)] uppercase tracking-wider mb-2 sm:mb-0 max-w-[50%]">
                            {spec.label}
                          </span>
                          <span className="text-sm md:text-base text-white text-left sm:text-right font-medium">
                            {spec.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Applications (if any) */}
            {product.applications && product.applications.length > 0 && (
              <div className="mt-20">
                <div className="mb-10 flex items-center gap-4 opacity-80">
                  <span className="uppercase tracking-[0.35em] text-[11px] font-mono text-purple-300/70">Applications</span>
                  <div className="flex-1 h-[1px] bg-gradient-to-r from-purple-500/30 to-transparent"></div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {product.applications.map((app, idx) => (
                    <div key={idx} className="flex flex-col items-center justify-center p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm text-center group hover:bg-white/10 transition-colors">
                      <LayoutGrid className="w-6 h-6 text-purple-400 mb-3 opacity-70 group-hover:opacity-100 transition-opacity" />
                      <span className="text-sm font-medium text-white/90">{app.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Downloads (if any) */}
            {product.downloads && product.downloads.length > 0 && (
              <div className="mt-20">
                <div className="mb-10 flex items-center gap-4 opacity-80">
                  <span className="uppercase tracking-[0.35em] text-[11px] font-mono text-purple-300/70">Downloads</span>
                  <div className="flex-1 h-[1px] bg-gradient-to-r from-purple-500/30 to-transparent"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.downloads.map((download, idx) => (
                    <a key={idx} href={download.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm group hover:bg-white/10 hover:border-purple-500/30 transition-all">
                      <span className="font-medium text-white/90">{download.title}</span>
                      <Download className="w-5 h-5 text-purple-400 opacity-70 group-hover:opacity-100 transition-opacity" />
                    </a>
                  ))}
                </div>
              </div>
            )}

          </div>
        </DynamicCanvasWrapper>
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  )
}
