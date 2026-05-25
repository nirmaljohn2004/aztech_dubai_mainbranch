'use client'

const steps = [
  {
    number: "01",
    title: "Project Enquiry",
    description: "Contact us via form, phone, or WhatsApp. Describe your target environment, installation location, and rough display size.",
  },
  {
    number: "02",
    title: "Structural Site Survey",
    description: "Our technical team reviews blueprints or visits your location to assess power feed access, mounting support, and environmental factors.",
  },
  {
    number: "03",
    title: "Detailed Proposal",
    description: "Within 48 hours, we present a full configuration quote containing pixel pitch guidance, structural weight calculations, and itemized pricing.",
  },
  {
    number: "04",
    title: "Turnkey Installation",
    description: "Our direct engineering team deploys to handle mount installation, cable routing, panel assembly, receiver card calibration, and final checks.",
  },
  {
    number: "05",
    title: "Operational Handover",
    description: "Post-installation: on-site training for content control players, technical manuals handover, and warranty deployment.",
  },
]

export function ProcessSection() {
  return (
    <section 
      id="process" 
      className="py-24 md:py-32 px-6 md:px-12 border-b border-[var(--canvas-border)] transition-colors duration-300"
      style={{ backgroundColor: 'transparent' }}
      aria-label="How we work"
    >
      <div className="max-w-7xl mx-auto">
        {/* Asymmetric Header */}
        <div className="grid grid-cols-12 gap-6 border-b border-[var(--canvas-border)] pb-12 mb-16">
          <div className="col-span-12 md:col-span-4 lg:col-span-3">
            <span className="text-[10px] tracking-widest uppercase font-mono text-purple-500/80 block">
              OUR PROCESS // EXECUTION
            </span>
          </div>
          <div className="col-span-12 md:col-span-8 lg:col-span-9">
            <h2 className="font-serif text-[6vw] md:text-[5vw] font-medium tracking-[-0.04em] leading-[0.95] mb-6">
              From Blueprints to Commissioning.
            </h2>
            <p className="text-xs md:text-sm tracking-normal leading-relaxed text-neutral-400 max-w-xl">
              We manage the entire project lifecycle. Here is our 5-step process designed to get your LED display online efficiently.
            </p>
          </div>
        </div>

        {/* Steps Grid - Hairline Divided Cells */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-0 border-t border-l border-[var(--canvas-border)]">
          {steps.map((step, idx) => (
            <div 
              key={idx}
              className="border-r border-b border-[var(--canvas-border)] p-6 md:p-8 flex flex-col justify-between min-h-[220px] hover:bg-neutral-500/[0.02] transition-colors"
            >
              <span className="font-mono text-3xl font-medium text-purple-500/30 mb-6 block">
                {step.number}
              </span>
              <div>
                <h3 className="font-serif text-base font-medium tracking-tight mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
