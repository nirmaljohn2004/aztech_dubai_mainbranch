'use client'

import { Check } from 'lucide-react'
import Image from 'next/image'

const services = [
  {
    tag: "LED Screen Supply",
    title: "Supply Of Premium LED Displays",
    description: "We supply the full spectrum of LED screen types — indoor, outdoor, specialty, rental and niche displays. All products come with manufacturer warranty, locally-stocked for fast dispatch. We advise on the right pixel pitch, brightness, and panel configuration for your specific environment and viewing distance.",
    specs: ["P1.2 to P10 pixel pitch range", "1000–8000 nits brightness", "Direct stock, fast dispatch"],
    image: "/images/service_components_1774782522853.webp",
  },
  {
    tag: "Design & Fabrication",
    title: "Custom Design & In-House Manufacturing",
    description: "Not every space fits a standard screen. Our in-house design team creates LED solutions for any shape, size, and architectural constraint — curved screens, spherical displays, custom cabinets, and creative installations. We produce technical drawings, structural calculations, and fabrication.",
    specs: ["Curves, spheres, cylinders", "Structural drawings provided", "Full fabrication in-house"],
    image: "/images/service_software_1774782562265.webp",
  },
  {
    tag: "Installation & Commissioning",
    title: "Professional Structural Installation",
    description: "Our certified installation teams manage the complete process: site survey, structural mount design, cable routing, screen assembly, controller configuration, and final commissioning test. We work to schedule, we work clean, and we don't leave until the screen performs perfectly.",
    specs: ["Site survey included", "Certified installation engineers", "Full commissioning & handover"],
    image: "/images/service_install_1774782503987.webp",
  },
  {
    tag: "Architectural Lighting",
    title: "Exterior & Facade LED Lighting",
    description: "Our roots are in architectural lighting — transforming the faces of buildings, bridges, hotels and villas with programmable LED profiles and facade illumination. We have lit some of Dubai's most recognizable addresses, from palaces to retail malls.",
    specs: ["DALI & DMX programmable", "IP67/IP68 rated profiles", "Custom color temperature"],
    image: "/images/service_facade_1774782541436.webp",
  },
  {
    tag: "After-Sales & AMC",
    title: "Ongoing Maintenance & Support",
    description: "LED screens are long-term investments. We protect that investment with Annual Maintenance Contracts (AMC) covering preventive maintenance, emergency callouts, spare parts, and remote monitoring.",
    specs: ["AMC contracts available", "24hr response SLA", "Local spare parts stock"],
    image: "/images/service_maintenance_1774782580512.webp",
  },
]

export function ServicesSection() {
  return (
    <section 
      id="services" 
      className="py-24 md:py-32 px-6 md:px-12 border-b border-[var(--canvas-border)] transition-colors duration-300"
      style={{ backgroundColor: 'transparent' }}
      aria-label="Our services"
    >
      <div className="max-w-7xl mx-auto">
        {/* Asymmetric Header */}
        <div className="grid grid-cols-12 gap-6 border-b border-[var(--canvas-border)] pb-12 mb-16">
          <div className="col-span-12 md:col-span-4 lg:col-span-3">
            <span className="text-[10px] tracking-widest uppercase font-mono text-purple-500/80 block">
              OUR SERVICES // OPERATIONS
            </span>
          </div>
          <div className="col-span-12 md:col-span-8 lg:col-span-9">
            <h2 className="font-serif text-[6vw] md:text-[5vw] font-medium tracking-[-0.04em] leading-[0.95] mb-6">
              Turnkey Execution. Single Accountability.
            </h2>
            <p className="text-xs md:text-sm tracking-normal leading-relaxed text-neutral-400 max-w-xl">
              We design, build, install, and support every LED display we supply. From site survey to emergency warranty support, we manage everything.
            </p>
          </div>
        </div>

        {/* Services List - Asymmetric 12-column rows */}
        <div className="flex flex-col border-b border-[var(--canvas-border)]">
          {services.map((service, index) => (
            <div 
              key={index}
              className="py-12 md:py-16 border-t border-[var(--canvas-border)] grid grid-cols-12 gap-8 items-center"
            >
              {/* Index & Tag (Span 3) */}
              <div className="col-span-12 md:col-span-3 flex flex-col items-start gap-1">
                <span className="font-mono text-xs text-neutral-500">
                  0{index + 1}
                </span>
                <span className="text-[10px] tracking-widest uppercase font-mono text-purple-500/80">
                  {service.tag}
                </span>
              </div>
              
              {/* Title & Description (Span 5) */}
              <div className="col-span-12 md:col-span-5 space-y-4">
                <h3 className="font-serif text-2xl font-medium tracking-tight">
                  {service.title}
                </h3>
                <p className="text-xs md:text-sm text-neutral-400 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {service.specs.map((spec) => (
                    <span 
                      key={spec} 
                      className="font-mono text-[9px] tracking-wider uppercase px-2 py-1 border border-[var(--canvas-border)] text-neutral-500"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Service image (Span 4) */}
              <div className="col-span-12 md:col-span-4">
                <div className="relative aspect-[16/10] w-full bg-neutral-900/10 overflow-hidden border border-[var(--canvas-border)]">
                  <Image 
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover brightness-95"
                    width={400}
                    height={250}
                    sizes="(max-width: 768px) 100vw, 30vw"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
