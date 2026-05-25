'use client'

import Image from 'next/image'
import { DynamicCanvasWrapper } from '@/components/layout/dynamic-canvas'
import { Footer } from '@/components/layout/footer'
import { Navbar } from '@/components/layout/navbar'
import { WhatsAppFAB } from '@/components/layout/whatsapp-fab'

const sectors = [
  {
    name: 'Command & Control Centers',
    image: '/images/proj_rta_1774784465970.webp',
    note: 'Redundant processors, fine-pitch control walls, low-latency switching, and calibrated color persistence for 24/7 operation.',
  },
  {
    name: 'Luxury Retail Showrooms',
    image: '/images/portfolio_mall_1774782384373.webp',
    note: 'High-contrast storefront media, curved product-stage walls, glass LED surfaces, and ambient dimming for premium merchandising.',
  },
  {
    name: 'Corporate Auditoriums',
    image: '/images/proj_adnoc_1774784409133.webp',
    note: 'Seamless presentation canvases built around sightlines, camera capture, acoustic detailing, and board-level reliability.',
  },
  {
    name: 'High-Impact Stadium Displays',
    image: '/images/proj_cricket_1774784549601.webp',
    note: 'Sunlight-readable perimeter, scoreboard, and sponsor display systems with broadcast refresh rates and weather-rated chassis.',
  },
]

export default function SectorsPage() {
  return (
    <>
      <Navbar />
      <main id="main" role="main" className="min-h-screen bg-transparent pt-24">
        <DynamicCanvasWrapper>
          <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
              <aside className="relative z-10 md:sticky md:top-24 md:col-span-4 md:h-[calc(100vh-6rem)] md:pt-8">
                <span className="block font-mono text-[10px] uppercase tracking-widest text-purple-500">
                  SECTORS // SPATIAL SYSTEMS
                </span>
                <h1 className="mt-8 font-serif text-5xl font-medium uppercase leading-none text-[var(--canvas-text)] md:text-6xl lg:text-7xl">
                  Engineered for modern spatial typologies.
                </h1>
                <p className="mt-8 max-w-sm text-sm leading-relaxed text-[var(--canvas-text-muted)]">
                  Every sector shifts the viewing distance, brightness envelope, mounting logic, and maintenance protocol. We tune the hardware around those conditions first.
                </p>
              </aside>

              <section className="relative z-10 md:col-span-8">
                {sectors.map((sector, index) => (
                  <article
                    key={sector.name}
                    className="border-t border-[var(--canvas-border)] py-10 last:border-b md:py-16"
                  >
                    <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-8">
                      <span className="font-mono text-xs text-purple-500 md:col-span-1">
                        0{index + 1}
                      </span>
                      <h2 className="font-serif text-4xl font-medium leading-none text-[var(--canvas-text)] md:col-span-5 md:text-6xl">
                        {sector.name}
                      </h2>
                      <p className="text-sm leading-relaxed text-[var(--canvas-text-muted)] md:col-span-2">
                        {sector.note}
                      </p>
                    </div>
                    <div className="relative aspect-[16/10] w-full overflow-hidden border border-[var(--canvas-border)] md:aspect-[16/8]">
                      <Image
                        src={sector.image}
                        alt={`${sector.name} LED installation`}
                        width={1100}
                        height={620}
                        className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.025]"
                        priority={index === 0}
                      />
                    </div>
                  </article>
                ))}
              </section>
            </div>
          </div>
        </DynamicCanvasWrapper>
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  )
}
