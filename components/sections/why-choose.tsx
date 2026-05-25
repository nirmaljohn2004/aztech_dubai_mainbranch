'use client'

import { Calendar, Users, Landmark, Package, Wrench, Award } from 'lucide-react'

const features = [
  {
    icon: Calendar,
    title: "20+ Years Dubai Experience",
    description: "Deep supplier connections and world-class product access, built on active execution since 2004 — now directly deployed across India.",
  },
  {
    icon: Users,
    title: "In-House execution team",
    description: "We do not hire external subcontractors. Our in-house engineering team handles structural design, mounting, configuration, and maintenance.",
  },
  {
    icon: Landmark,
    title: "Government-Grade Standards",
    description: "ADNOC HQ, RTA Dubai, and Parliament Palace palaces trust Aztech. When institutions demand extreme reliability, they contract us.",
  },
  {
    icon: Package,
    title: "Direct Dubai Supply Chain",
    description: "We bypass middlemen, holding stock locally. Your installation launches on schedule without long custom clearance delays.",
  },
  {
    icon: Wrench,
    title: "Accountable Support Contracts",
    description: "Offering comprehensive annual maintenance contracts (AMC), emergency response SLA, and direct hardware diagnostic support.",
  },
  {
    icon: Award,
    title: "Trusted by 500+ Corporations",
    description: "Serving hypermarkets, stadiums, hotels, and schools. Our growth runs on repeats and recommendations — the honest index of quality.",
  },
]

export function WhyChooseSection() {
  return (
    <section 
      className="py-24 md:py-32 px-6 md:px-12 border-b border-[var(--canvas-border)] transition-colors duration-300"
      style={{ backgroundColor: 'transparent' }}
      aria-label="Why choose Aztech"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Asymmetric 12-Column Layout Header */}
        <div className="grid grid-cols-12 gap-6 border-b border-[var(--canvas-border)] pb-12 mb-16">
          <div className="col-span-12 md:col-span-4 lg:col-span-3">
            <span className="text-[10px] tracking-widest uppercase font-mono text-purple-500/80 block">
              THE AZTECH DIFFERENCE // TRUST
            </span>
          </div>
          <div className="col-span-12 md:col-span-8 lg:col-span-9">
            <h2 className="font-serif text-[6vw] md:text-[5vw] font-medium tracking-[-0.04em] leading-[0.95] mb-6">
              Why Serious Buyers Choose Aztech.
            </h2>
            <p className="text-xs md:text-sm tracking-normal leading-relaxed text-neutral-400 max-w-xl">
              In a crowded market, serious clients choose Aztech because we control the hardware supply chain and maintain absolute engineering accountability.
            </p>
          </div>
        </div>

        {/* Features Asymmetric Layout */}
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-3">
            <span className="text-[10px] tracking-widest uppercase font-mono text-neutral-500 block mb-6 lg:mb-0">
              CORE PRINCIPLES
            </span>
          </div>

          <div className="col-span-12 lg:col-span-9">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              {features.map((feature, idx) => (
                <div 
                  key={idx} 
                  className="flex flex-col items-start border-t border-[var(--canvas-border)] pt-6"
                >
                  {/* Icon */}
                  <div className="text-purple-500/80 mb-4">
                    <feature.icon className="w-5 h-5 stroke-[1.5]" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="font-serif text-base font-medium tracking-tight mb-2">
                    {feature.title}
                  </h3>
                  
                  {/* Body description */}
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
