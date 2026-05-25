'use client'

import { useState } from 'react'
import Image from 'next/image'
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
      className="py-24 md:py-32 px-6 md:px-12 border-b border-[var(--canvas-border)] transition-colors duration-300"
      style={{ backgroundColor: 'transparent' }}
      aria-label="LED Screen Solutions by Industry"
    >
      <div className="max-w-7xl mx-auto">
        {/* Asymmetric Grid Header */}
        <div className="grid grid-cols-12 gap-6 border-b border-[var(--canvas-border)] pb-12 mb-16">
          <div className="col-span-12 md:col-span-4 lg:col-span-3">
            <span className="text-[10px] tracking-widest uppercase font-mono text-purple-500/80 block">
              OUR DEPLOYMENTS // MARKETS
            </span>
          </div>
          <div className="col-span-12 md:col-span-8 lg:col-span-9">
            <h2 className="font-serif text-[6vw] md:text-[5vw] font-medium tracking-[-0.04em] leading-[0.95] mb-6">
              Every Sector. Custom Engineered.
            </h2>
            <p className="text-xs md:text-sm tracking-normal leading-relaxed text-neutral-400 max-w-xl">
              Aztech has delivered custom configurations to 8 core market sectors. Whether it&apos;s a single-screen retail installation or a secure municipal command center, we execute on time.
            </p>
          </div>
        </div>

        {/* Industry Grid: Asymmetric Layout split between tabs and content */}
        <div className="grid grid-cols-12 gap-0 border-t border-l border-[var(--canvas-border)]">
          
          {/* Tab Selector Column - Span 4 */}
          <div className="col-span-12 md:col-span-4 lg:col-span-3 flex flex-row md:flex-col overflow-x-auto md:overflow-visible border-r border-[var(--canvas-border)]">
            {industries.map((industry) => (
              <button
                key={industry.id}
                onClick={() => setActiveTab(industry.id)}
                className={`flex-shrink-0 md:flex-shrink text-left p-6 md:p-8 border-b border-r md:border-r-0 border-[var(--canvas-border)] hover:bg-neutral-500/[0.02] transition-colors relative rounded-none flex flex-col items-start gap-1`}
              >
                <span className={`text-xs font-mono tracking-widest uppercase ${activeTab === industry.id ? "text-purple-500 font-bold" : "text-neutral-400"}`}>
                  {industry.name}
                </span>
                <span className="text-[10px] text-neutral-500 font-mono">
                  {industry.projects} Projects
                </span>
                {activeTab === industry.id && (
                  <div className="absolute right-0 top-0 bottom-0 w-[2px] bg-purple-500 hidden md:block" />
                )}
              </button>
            ))}
          </div>

          {/* Industry Details Column - Span 8 */}
          <div className="col-span-12 md:col-span-8 lg:col-span-9 p-6 md:p-12 border-r border-b border-[var(--canvas-border)] flex flex-col justify-between">
            <div>
              {/* Image Frame - Borderless */}
              <div className="relative w-full aspect-video md:aspect-[21/9] overflow-hidden bg-neutral-900/10 border border-[var(--canvas-border)] mb-8">
                <Image 
                  key={activeIndustry.id} 
                  src={activeIndustry.image} 
                  alt={`${activeIndustry.title} LED display installations`} 
                  className="absolute inset-0 w-full h-full object-cover brightness-95"
                  width={900}
                  height={385}
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  loading="lazy"
                />
              </div>

              {/* Title & Description */}
              <div className="flex items-center gap-3 mb-6">
                <activeIndustry.icon className="w-5 h-5 text-purple-500/80 stroke-[1.5]" aria-hidden="true" />
                <h3 className="font-serif text-2xl md:text-3xl font-medium tracking-tight">
                  {activeIndustry.title}
                </h3>
              </div>

              <p className="text-xs md:text-sm leading-relaxed text-neutral-400 max-w-xl mb-8">
                {activeIndustry.description}
              </p>

              {/* Key Clients List - Hairline Divider block */}
              <div className="border-t border-[var(--canvas-border)] pt-6 mb-8">
                <span className="text-[10px] tracking-widest uppercase font-mono text-purple-500/80 block mb-2">
                  KEY CLIENTS DEPLOYED
                </span>
                <p className="text-xs text-neutral-500 leading-relaxed font-mono">
                  {activeIndustry.clients}
                </p>
              </div>
            </div>

            <div>
              <a 
                href="#projects" 
                className="inline-flex h-12 px-8 items-center justify-center border border-[var(--canvas-border)] bg-transparent text-[10px] tracking-widest uppercase font-mono transition-all duration-300 hover:bg-neutral-500/[0.05]"
              >
                View Related Project Logs
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
