'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    id: "faq-1",
    question: "What is the price of an LED screen in India?",
    answer:
      "LED screen prices in India vary based on size, pixel pitch and type. Indoor LED screens start from ₹50,000, while large outdoor billboard displays range from ₹2,00,000 to ₹10,00,000+. Contact Aztech LED for a free custom quote.",
  },
  {
    id: "faq-2",
    question: "Does Aztech LED supply outdoor LED screens in India?",
    answer:
      "Yes. Aztech LED supplies weatherproof outdoor DIP and SMD LED displays rated up to 5000 nits, suitable for billboards, building facades, and roadside signage across India.",
  },
  {
    id: "faq-3",
    question: "What is pixel pitch and which one should I choose?",
    answer:
      "Pixel pitch is the distance in millimetres between LED clusters. A smaller number (e.g. P1.2) means higher resolution suitable for close viewing indoors. A larger number (e.g. P6 or P10) is ideal for outdoor billboards viewed from a distance. Aztech stocks P1.2 to P10.",
  },
  {
    id: "faq-4",
    question: "Does Aztech LED provide installation services in India?",
    answer:
      "Yes. Aztech LED has a full in-house installation team that handles site survey, structural mounting, cable routing, screen assembly, controller configuration and final commissioning across India. No subcontractors are used.",
  },
  {
    id: "faq-5",
    question: "Do you offer maintenance contracts for LED screens?",
    answer:
      "Yes. Aztech LED offers Annual Maintenance Contracts (AMC) covering preventive maintenance, emergency callouts, spare parts supply, remote monitoring and firmware updates with a 24-hour response SLA.",
  },
]

export function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(null)

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <section
      id="faq"
      className="py-24 md:py-32 px-6 md:px-12 border-b border-[var(--canvas-border)] transition-colors duration-300"
      style={{ backgroundColor: 'transparent' }}
      aria-label="Frequently Asked Questions about LED screens in India"
    >
      <div className="max-w-7xl mx-auto">
        {/* Asymmetric Header */}
        <div className="grid grid-cols-12 gap-6 border-b border-[var(--canvas-border)] pb-12 mb-16">
          <div className="col-span-12 md:col-span-4 lg:col-span-3">
            <span className="text-[10px] tracking-widest uppercase font-mono text-purple-500/80 block">
              SUPPORT HUB // FAQ
            </span>
          </div>
          <div className="col-span-12 md:col-span-8 lg:col-span-9">
            <h2 className="font-serif text-[6vw] md:text-[5vw] font-medium tracking-[-0.04em] leading-[0.95] mb-6">
              Frequently Asked Questions.
            </h2>
            <p className="text-xs md:text-sm tracking-normal leading-relaxed text-neutral-400 max-w-xl">
              Common operational and purchasing questions from buyers about LED screens.
            </p>
          </div>
        </div>

        {/* Asymmetric Accordion Layout */}
        <div className="grid grid-cols-12 gap-8">
          
          {/* Left Column: Glassmorphic Hub Card */}
          <div className="col-span-12 lg:col-span-3">
            <div className="bg-white/[0.02] border border-[var(--canvas-border)] p-6 backdrop-blur-md rounded-none flex flex-col justify-between min-h-[200px] h-full relative overflow-hidden group">
              {/* Glow backing */}
              <div className="space-y-4 relative z-10">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[9px] tracking-widest uppercase font-mono text-neutral-400">
                    LIVE KNOWLEDGE BASE
                  </span>
                </div>
                <h3 className="font-serif text-lg font-medium leading-tight">
                  Detailed answers on architectural screen selection.
                </h3>
              </div>
              
              <span className="text-[9px] tracking-widest uppercase font-mono text-neutral-500 block mt-8">
                // HARDWARE FAQ
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Accordion */}
          <div className="col-span-12 lg:col-span-9 border-t border-[var(--canvas-border)]">
            {faqs.map((faq) => {
              const isOpen = openId === faq.id
              return (
                <div
                  key={faq.id}
                  className={`border-b border-[var(--canvas-border)] transition-all duration-300 px-4 md:px-6 rounded-none ${
                    isOpen 
                      ? "bg-white/[0.015] border-purple-500/20 backdrop-blur-sm my-3" 
                      : "hover:bg-white/[0.01]"
                  }`}
                >
                  <button
                    onClick={() => toggle(faq.id)}
                    aria-expanded={isOpen}
                    aria-controls={`${faq.id}-answer`}
                    id={`${faq.id}-btn`}
                    className="w-full flex items-start justify-between gap-4 py-6 text-left group cursor-pointer"
                  >
                    <span className={`font-serif text-sm md:text-base font-medium tracking-tight transition-colors ${
                      isOpen ? "text-purple-400" : "group-hover:text-purple-400"
                    }`}>
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-neutral-500 shrink-0 mt-[2px] transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-purple-400" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                  <div
                    id={`${faq.id}-answer`}
                    role="region"
                    aria-labelledby={`${faq.id}-btn`}
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-[500px] opacity-100 pb-6" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-xs md:text-sm text-neutral-400 leading-relaxed max-w-2xl">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom CTA Panel - Dynamic Box */}
        <div className="mt-20 border border-[var(--canvas-border)] bg-white/[0.01] p-8 md:p-12 backdrop-blur-sm relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 group">
          {/* Subtle Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          
          <div className="flex flex-col items-start gap-1 relative z-10 text-left">
            <span className="text-[10px] tracking-widest uppercase font-mono text-purple-400">
              STILL HAVE QUESTIONS?
            </span>
            <h4 className="font-serif text-xl sm:text-2xl font-medium tracking-tight">
              Get direct assistance from our engineering desk.
            </h4>
            <p className="text-xs text-neutral-400">
              We provide comprehensive site surveys and custom architectural calculations.
            </p>
          </div>
          
          <a
            href="#contact"
            className="relative z-10 inline-flex h-12 px-8 items-center justify-center border border-[var(--canvas-border)] hover:border-purple-400 bg-transparent text-[10px] tracking-widest uppercase font-mono transition-all duration-300 whitespace-nowrap"
          >
            Connect With Our Engineering Team
          </a>
        </div>
      </div>
    </section>
  )
}
