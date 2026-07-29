'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Star, MessageSquare, ArrowUpRight } from 'lucide-react'

interface Review {
  name: string
  rating: number
  date: string
  text: string
  avatarText: string
  avatarBg: string
  isNew?: boolean
}

const googleReviews: Review[] = [
  {
    name: "Yasar Arafath",
    rating: 5,
    date: "a month ago",
    text: "AZ TECH is an excellent team. Whenever I contact their technical support team, they respond immediately and attend to the site promptly. They troubleshoot and resolve issues professionally and efficiently. They also provided clear and thorough training on how to operate the LED screen, including how to upload and manage videos. I am very satisfied with their service. Special thanks to Vetri and his team for their outstanding support. Highly recommended. Thank you, Vetri and Team.",
    avatarText: "Y",
    avatarBg: "bg-blue-600/20 text-blue-400 border-blue-500/30"
  },
  {
    name: "IT Dept Al Bassam",
    rating: 5,
    date: "a month ago",
    text: "Very satisfied with their service. They were attentive, reliable, and took fast action to fix our LED screen issue. Excellent support and quick response from their team. Highly recommended!",
    avatarText: "IT",
    avatarBg: "bg-emerald-600/20 text-emerald-400 border-emerald-500/30"
  },
  {
    name: "Idrees Maqsood",
    rating: 5,
    date: "a year ago",
    text: "Working with Aztech General Trading LLC has been a rewarding experience. Aztech is delivering high-quality LED display solutions that combine cutting-edge technology with exceptional customer service. From large-scale outdoor installations to custom indoor screens, every project is handled with precision, creativity, and a strong focus on client satisfaction. What truly sets them apart is commitment to innovation, reliability, and long-term partnerships. If you're looking for a dependable partner in LED screen solutions, Aztech is a name you can trust.",
    avatarText: "I",
    avatarBg: "bg-purple-600/20 text-purple-400 border-purple-500/30"
  },
  {
    name: "Fariskhaleej Khalifacity",
    rating: 5,
    date: "a month ago",
    text: "Vetri and Team did fantastic work and i am very satified his team work.",
    avatarText: "F",
    avatarBg: "bg-indigo-600/20 text-indigo-400 border-indigo-500/30"
  },
  {
    name: "Rizwan Ahmad",
    rating: 5,
    date: "a year ago",
    text: "Amazing team—highly professional, efficient, and dedicated to delivering top-quality service. They truly understand their clients' needs and ensure a smooth experience from start to finish. If you're looking for a reliable company to work with, I highly recommend AzTech General Trading!",
    avatarText: "R",
    avatarBg: "bg-rose-600/20 text-rose-400 border-rose-500/30"
  },
  {
    name: "Shahenda Wafa",
    rating: 5,
    date: "4 months ago",
    text: "Great technologies and much appreciated after sale technical support, kudos to Francis for the professionalism and quick help.",
    avatarText: "S",
    avatarBg: "bg-sky-600/20 text-sky-400 border-sky-500/30"
  },
  {
    name: "alex",
    rating: 5,
    date: "2 weeks ago",
    text: "Best installation team ever !! Did a great job and the screen works like a magic !",
    avatarText: "A",
    avatarBg: "bg-amber-600/20 text-amber-400 border-amber-500/30",
    isNew: true
  },
  {
    name: "Mohammed Elrayah",
    rating: 5,
    date: "a month ago",
    text: "Great service. Vetri was really a great help with setting everything up",
    avatarText: "M",
    avatarBg: "bg-violet-600/20 text-violet-400 border-violet-500/30"
  },
  {
    name: "Kaman To",
    rating: 5,
    date: "3 weeks ago",
    text: "Umer is very helpful, and always wearing smile, good service and good company!! Thank you so much",
    avatarText: "K",
    avatarBg: "bg-cyan-600/20 text-cyan-400 border-cyan-500/30",
    isNew: true
  },
  {
    name: "Wahab Paloly",
    rating: 5,
    date: "a month ago",
    text: "Umar and his team very good service. Thank you for cooperating with Hayal dragon super market.",
    avatarText: "W",
    avatarBg: "bg-teal-600/20 text-teal-400 border-teal-500/30"
  },
  {
    name: "Mohammed Hashim",
    rating: 5,
    date: "6 months ago",
    text: "Great company with top-notch support. Francis provided excellent technical assistance for our screen. Very satisfied with the service!",
    avatarText: "M",
    avatarBg: "bg-blue-600/20 text-blue-400 border-blue-500/30"
  },
  {
    name: "Aakash Jaisankar",
    rating: 5,
    date: "a year ago",
    text: "Excellent LED solutions from AZ Tech!...The installation was smooth & the displays are clear, eye catching... The team was super helpful from start to end...and the person's are more polite and knowledgeable.....",
    avatarText: "A",
    avatarBg: "bg-orange-600/20 text-orange-400 border-orange-500/30"
  }
]

export function ReviewsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section 
      id="reviews" 
      className="py-24 md:py-32 px-6 md:px-12 border-b border-[var(--canvas-border)] transition-colors duration-300 relative overflow-hidden"
      style={{ backgroundColor: 'transparent' }}
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="grid grid-cols-12 gap-6 border-b border-[var(--canvas-border)] pb-12 mb-16">
          <div className="col-span-12 md:col-span-4 lg:col-span-3">
            <span className="text-[10px] tracking-widest uppercase font-mono text-purple-500/80 block">
              CLIENT TESTIMONIALS // RATINGS
            </span>
          </div>
          <div className="col-span-12 md:col-span-8 lg:col-span-9 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="font-serif text-[6vw] md:text-[5vw] font-medium tracking-[-0.04em] leading-[0.95] mb-6">
                What Our Clients Say.
              </h2>
              <p className="text-xs md:text-sm tracking-normal leading-relaxed text-neutral-400 max-w-xl">
                We are proud to serve leading businesses, government institutions, and retail brands. Read reviews from our Google Business profile.
              </p>
            </div>
            
            {/* Google Rating Badge */}
            <div className="shrink-0 flex items-center gap-4 bg-white/[0.02] border border-white/[0.08] px-5 py-4 rounded-xl backdrop-blur-md">
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <span className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white font-mono">5.0</span>
                  <div className="flex items-center text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current stroke-current" />
                    ))}
                  </div>
                </div>
                <span className="text-[10px] tracking-wider uppercase font-mono text-neutral-500 mt-1">
                  12 Google Reviews
                </span>
              </div>
              <a 
                href="https://g.co/kgs/rW46K7z" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] flex items-center justify-center transition-colors group"
                aria-label="View our Google Business Profile"
              >
                <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Masonry Review Columns */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {googleReviews.map((review, idx) => (
            <motion.div
              key={idx}
              className="break-inside-avoid bg-white/[0.015] hover:bg-white/[0.03] border border-white/[0.06] hover:border-purple-500/30 p-6 rounded-2xl transition-all duration-300 relative group overflow-hidden"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: Math.min(idx * 0.05, 0.3) }}
            >
              {/* Subtle Glowing Background Mesh on Hover */}
              <div 
                className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" 
              />
              
              <div className="flex items-start justify-between gap-4 mb-4 relative z-10">
                <div className="flex items-center gap-3">
                  {/* Google style avatar initials with custom styling */}
                  <div className={`w-10 h-10 rounded-full border flex items-center justify-center font-bold font-mono text-sm shrink-0 ${review.avatarBg}`}>
                    {review.avatarText}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold tracking-tight text-neutral-900 dark:text-white flex items-center gap-2">
                      {review.name}
                      {review.isNew && (
                        <span className="text-[9px] font-mono tracking-widest uppercase px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-400 border border-purple-500/30">
                          New
                        </span>
                      )}
                    </h3>
                    <span className="text-[10px] text-neutral-500 font-mono block mt-0.5">
                      {review.date}
                    </span>
                  </div>
                </div>

                {/* Google Icon indicator */}
                <svg className="w-5 h-5 opacity-40 group-hover:opacity-80 transition-opacity" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
                </svg>
              </div>

              {/* Stars */}
              <div className="flex items-center text-amber-400 gap-0.5 mb-3 relative z-10">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current stroke-current" />
                ))}
              </div>

              {/* Review Content */}
              <p className="text-xs md:text-[13px] text-neutral-400 leading-relaxed font-sans relative z-10 whitespace-pre-line group-hover:text-neutral-300 transition-colors">
                {review.text}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
