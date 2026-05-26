'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ShoppingBag, Building2, Hotel, Heart, 
  GraduationCap, Landmark, PartyPopper, Trophy,
  ArrowRight
} from 'lucide-react'

const industries = [
  {
    id: "retail",
    icon: ShoppingBag,
    name: "Retail & Malls",
    projects: 14,
    title: "Retail & Shopping Malls",
    description: "High-footfall retail environments demand displays that stop shoppers mid-step. Aztech has installed LED screens across UAE's busiest malls and hypermarkets — from entrance fascias to in-aisle promotion screens, digital price boards to checkout displays. Our retail installations are configured for maximum brightness under strong artificial lighting and designed for easy content management.",
    clients: "Carrefour, Union Coop, Wafi Mall, Deira City Centre, Avenue Mall, Center Mall Bur Dubai, Grand Hyper, Grandoose Supermarket, Smart Baby Supermarket, Splash Ajman.",
    image: "/images/portfolio_mall_1774782384373.webp",
    useCases: [],
  },
  {
    id: "corporate",
    icon: Building2,
    name: "Corporate & Office",
    projects: 8,
    title: "Corporate & Office",
    description: "Corporate environments require screens that communicate authority and professionalism. Aztech supplies and installs lobby video walls, boardroom displays, corridor information screens, and reception LED displays for UAE's leading companies. Our corporate installations are configured for perfect viewing at close range with accurate color reproduction.",
    clients: "IBM Abu Dhabi, CBD Bank Green House, Dubai Media City, Vuuzle Studio, Offshore Abu Dhabi.",
    image: "/images/portfolio-corporate.jpg",
    useCases: [],
  },
  {
    id: "hospitality",
    icon: Hotel,
    name: "Hospitality & Hotels",
    projects: 9,
    title: "Hospitality & Hotels",
    description: "Hotels, resorts and restaurants need displays that enhance the guest experience without disrupting the ambiance. Aztech has transformed hotel lobbies, restaurant feature walls, pool-area displays and event hall screens across the UAE hospitality sector — balancing visual impact with aesthetic sensitivity.",
    clients: "Rove Hotels, Goldstate Hotel, Oberoi Hotel, Rotana, Astoria Club, Red Tomato Restaurant.",
    image: "/images/portfolio_hotel_1774782425884.webp",
    useCases: [],
  },
  {
    id: "healthcare",
    icon: Heart,
    name: "Healthcare & Clinics",
    projects: 4,
    title: "Healthcare & Clinics",
    description: "Healthcare environments demand displays that communicate clearly, queue efficiently, and perform reliably 24/7. Aztech has installed patient information systems, queue management displays, wayfinding screens and pharmacy digital boards at UAE healthcare facilities.",
    clients: "Zulekha Hospital, Cosmos Clinic, Al Marana Pharmacy Delma Mall.",
    image: "/images/proj_zulekha.webp",
    useCases: [],
  },
  {
    id: "education",
    icon: GraduationCap,
    name: "Education & Schools",
    projects: 3,
    title: "Education & Schools",
    description: "From interactive classroom displays to auditorium presentation screens, Aztech equips UAE educational institutions with LED solutions that enhance learning environments. Our education screens are calibrated for comfortable viewing in variable ambient light conditions.",
    clients: "GEMS Schools UAE.",
    image: "/images/proj_gems.webp",
    useCases: [],
  },
  {
    id: "government",
    icon: Landmark,
    name: "Government & Public",
    projects: 7,
    title: "Government & Public Sector",
    description: "Government projects demand the highest standard of reliability, compliance, and professionalism. Aztech's track record includes some of the UAE's most prestigious institutional LED installations — from federal headquarters to municipal offices and royal palaces.",
    clients: "ADNOC Headquarters, RTA Dubai, Ajman Municipality, Parliament Palace Abu Dhabi, Sheikh Hamdan Palace, Sheikh Sayed Road.",
    image: "/images/portfolio_gov_1774782461132.webp",
    useCases: [],
  },
  {
    id: "events",
    icon: PartyPopper,
    name: "Events & Exhibitions",
    projects: 6,
    title: "Events & Exhibitions",
    description: "Live events demand LED screens that can be deployed fast, look spectacular on camera, and perform under pressure. Aztech provides modular rental LED screens for events of any scale — from intimate brand activations to large outdoor concerts and trade shows.",
    clients: "Expo 2020 Dubai, Fujairah Aviation Club, Flexible Screen Expo, Dubike.",
    image: "/images/portfolio-concert.jpg",
    useCases: [],
  },
  {
    id: "sports",
    icon: Trophy,
    name: "Sports & Stadiums",
    projects: 2,
    title: "Sports & Stadiums",
    description: "Stadium installations require the highest brightness, widest viewing angles, and structural-grade mounting. Aztech has delivered perimeter LED systems and large-format outdoor screens for UAE sports venues, engineered to perform under intense sunlight and in front of thousands of spectators.",
    clients: "Dubai Cricket Stadium, Fujairah P4 Outdoor, Astoria Club.",
    image: "/images/portfolio_stadium_1774782441665.webp",
    useCases: ["Perimeter Signage", "Jumbotrons", "Scoreboards"],
  },
]

export function SolutionsSection() {
  const [activeTab, setActiveTab] = useState("retail")
  const activeIndustry = industries.find(i => i.id === activeTab)!

  return (
    <section 
      id="solutions" 
      className="pt-24 pb-48 md:pt-40 md:pb-72 px-6 md:px-12 border-b border-[var(--canvas-border)] relative z-10"
      style={{ backgroundColor: 'transparent' }}
      aria-label="LED Screen Solutions by Industry"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end pb-12 mb-12 border-b border-[var(--canvas-border)]">
          <div className="mb-8 md:mb-0">
            <span className="block font-mono text-[10px] uppercase tracking-[0.24em] text-purple-600/80 mb-6 drop-shadow-sm">
              // CORE DEPLOYMENT MARKETS
            </span>
            <h2 className="max-w-3xl font-sans text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.05] text-[var(--canvas-text)] tracking-tight">
              Every Sector. <br className="hidden md:block"/>Custom Engineered.
            </h2>
          </div>
          <p className="max-w-[320px] text-sm md:text-base leading-[1.8] text-[var(--canvas-text-muted)] text-left md:text-right font-light">
            We deliver highly specialized configurations across 8 core market sectors. Whether it's a single-screen retail installation or a secure municipal command center, we execute on time.
          </p>
        </div>

        {/* Premium Grid Layout */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 relative mt-16 md:mt-24">
          
          {/* Left Column: Interactive List */}
          <div className="w-full lg:w-5/12 flex flex-col gap-8 lg:gap-10">
            {industries.map((industry) => {
              const isActive = activeTab === industry.id
              return (
                <div 
                  key={industry.id}
                  onMouseEnter={() => setActiveTab(industry.id)}
                  onClick={() => setActiveTab(industry.id)}
                  className={`group cursor-pointer transition-all duration-500 flex items-center gap-6 ${isActive ? 'opacity-100 pl-4 lg:pl-6 border-l border-purple-500' : 'opacity-30 hover:opacity-70 border-l border-transparent'}`}
                >
                  <h3 className={`font-serif text-3xl md:text-4xl lg:text-[3.5rem] font-medium leading-[1] transition-transform duration-500 ${isActive ? 'text-[var(--canvas-text)]' : 'text-[var(--canvas-text-muted)] group-hover:translate-x-2'}`}>
                    {industry.name}
                  </h3>
                  <div className={`hidden md:flex flex-col transition-all duration-500 ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
                    <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-purple-600 mb-1">Projects</span>
                    <span className="text-xl font-serif text-[var(--canvas-text)]">{industry.projects}</span>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Right Column: Sticky Visuals */}
          <div className="w-full lg:w-7/12 lg:sticky lg:top-32 h-[fit-content]">
            <div className="relative w-full aspect-[4/3] lg:aspect-[16/11] overflow-hidden rounded-none border border-white/5 bg-[#05020a] group shadow-2xl">
              
              {/* Dynamic Image with Crossfade */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndustry.id}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 w-full h-full"
                >
                  <Image 
                    src={activeIndustry.image} 
                    alt={`${activeIndustry.title} LED display installations`} 
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dynamic Content Placard (Below Image) */}
            <div className="mt-8 flex flex-col">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`content-${activeIndustry.id}`}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full border border-[var(--canvas-border)] flex items-center justify-center">
                      <activeIndustry.icon className="w-4 h-4 text-purple-600" />
                    </div>
                    <h4 className="font-sans text-2xl font-medium text-[var(--canvas-text)]">
                      {activeIndustry.title}
                    </h4>
                  </div>
                  
                  <p className="text-sm md:text-base leading-[1.8] text-[var(--canvas-text-muted)] font-light max-w-2xl mb-6">
                    {activeIndustry.description}
                  </p>

                  <div className="flex flex-col gap-2 pt-6 border-t border-[var(--canvas-border)]">
                    <span className="text-[9px] uppercase tracking-[0.2em] font-mono text-purple-600">Selected Deployments</span>
                    <p className="text-xs text-[var(--canvas-text-muted)] font-light leading-relaxed max-w-2xl">
                      {activeIndustry.clients}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
