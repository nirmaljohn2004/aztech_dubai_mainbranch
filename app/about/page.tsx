'use client'

import { DynamicCanvasWrapper } from '@/components/layout/dynamic-canvas'
import { Footer } from '@/components/layout/footer'
import { Navbar } from '@/components/layout/navbar'
import { WhatsAppFAB } from '@/components/layout/whatsapp-fab'

const milestones = [
  {
    tag: '01 // DIODE',
    title: 'Component validation diode burn-ins',
    body: 'LED batches are stress-tested before cabinet assembly so thermal drift, dead-pixel behavior, and color response are caught before site deployment.',
  },
  {
    tag: '02 // CABINET',
    title: '0.05mm robotic cabinet alignment tracking',
    body: 'Mounting tolerances are measured at the cabinet level to keep large-format planes structurally permanent after vibration, service cycles, and seasonal movement.',
  },
  {
    tag: '03 // CHROMA',
    title: 'Pixel-by-pixel chroma adjustments',
    body: 'Final calibration maps brightness, grayscale, and chromatic consistency across the full array so the display reads as one architectural surface.',
  },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main id="main" role="main" className="min-h-screen bg-transparent pt-24">
        <DynamicCanvasWrapper>
          <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24">
            <section className="grid grid-cols-1 gap-8 border-b border-[var(--canvas-border)] pb-16 md:grid-cols-12">
              <div className="md:col-span-3">
                <span className="block font-mono text-[10px] uppercase tracking-widest text-purple-500">
                  ABOUT // MANUFACTURING RIGOR
                </span>
              </div>
              <div className="md:col-span-9">
                <h1 className="font-serif text-4xl font-medium leading-tight text-[var(--canvas-text)] md:text-6xl lg:text-7xl">
                  We believe digital displays shouldn&apos;t be tacked onto a building as an afterthought. They are a core material of modern architecture. We manufacture to break boundaries, ensuring every pixel alignment is structurally permanent.
                </h1>
              </div>
            </section>

            <section className="grid grid-cols-1 gap-12 py-16 md:grid-cols-12 md:py-24">
              <div className="md:col-span-4">
                <span className="block font-mono text-[10px] uppercase tracking-widest text-purple-500">
                  RIGOR TIMELINE
                </span>
                <p className="mt-6 max-w-xs text-sm leading-relaxed text-[var(--canvas-text-muted)]">
                  The centerline spine tracks the same logic as our production process: one continuous path, measured at every critical tolerance point.
                </p>
              </div>
              <div className="md:col-span-8">
                <div className="border-t border-[var(--canvas-border)]">
                  {milestones.map((item) => (
                    <article
                      key={item.tag}
                      className="grid grid-cols-1 gap-6 border-b border-[var(--canvas-border)] py-10 md:grid-cols-8"
                    >
                      <span className="font-mono text-xs text-purple-500 md:col-span-2">
                        {item.tag}
                      </span>
                      <div className="md:col-span-6">
                        <h2 className="font-serif text-3xl font-medium leading-tight text-[var(--canvas-text)] md:text-5xl">
                          {item.title}
                        </h2>
                        <p className="mt-6 max-w-xl text-sm leading-relaxed text-[var(--canvas-text-muted)]">
                          {item.body}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </DynamicCanvasWrapper>
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  )
}
