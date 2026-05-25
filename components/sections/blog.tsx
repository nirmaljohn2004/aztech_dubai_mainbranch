'use client'

import Image from 'next/image'

const posts = [
  {
    title: "Indoor vs Outdoor LED Screens: Which Do You Actually Need?",
    slug: "indoor-vs-outdoor-led-screens",
    category: "BUYING GUIDE",
    readTime: "6 min read",
    date: "Jan 2025",
    excerpt: "The choice between indoor and outdoor LED isn't just about weatherproofing. Brightness, pixel pitch, viewing distance, and content type all play a role in your final decision.",
    image: "/images/blog_compare.webp"
  },
  {
    title: "Pixel Pitch Explained: Choosing Resolution for Your Space",
    slug: "pixel-pitch-explained",
    category: "TECHNICAL GUIDE",
    readTime: "7 min read",
    date: "Dec 2024",
    excerpt: "P1.86 vs P2.5 vs P4 — what do these numbers mean and how do they affect what your audience sees? A plain-English technical guide for procurement managers.",
    image: "/images/blog_pixel.webp"
  },
  {
    title: "Top 5 LED Display Trends Dominating Dubai in 2025",
    slug: "led-display-trends-dubai-2025",
    category: "INDUSTRY INSIGHT",
    readTime: "5 min read",
    date: "Feb 2025",
    excerpt: "Transparent LED, kinetic screens, and AI-driven content management are reshaping how business uses digital displays. Discover what's worth investing in this year.",
    image: "/images/blog_trends.webp"
  },
]

export function BlogSection() {
  return (
    <section 
      id="blog" 
      className="py-24 md:py-32 px-6 md:px-12 transition-colors duration-300"
      style={{ background: 'linear-gradient(to bottom, #090514 0%, #25104d 60%, transparent 100%)' }}
      aria-label="LED Screen Buying Guides and Industry Insights"
    >
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="grid grid-cols-12 gap-6 pb-12 mb-8">
          <div className="col-span-12 md:col-span-4 lg:col-span-3">
            <span className="text-[10px] tracking-widest uppercase font-mono text-purple-400 block">
              LED KNOWLEDGE // INSIGHTS
            </span>
          </div>
          <div className="col-span-12 md:col-span-8 lg:col-span-9">
            <h2 className="font-serif text-[6vw] md:text-[4.5vw] font-medium tracking-[-0.04em] leading-[0.95] mb-6 text-white">
              Practical Advice. Written for Buyers.
            </h2>
            <p className="text-sm md:text-base tracking-normal leading-relaxed text-white/70 max-w-2xl">
              Practical advice on LED screen selection, pixel pitch metrics, installation setups, and maintenance operations.
            </p>
          </div>
        </div>

        {/* Sereniche Style Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {posts.map((post, idx) => (
            <article 
              key={idx}
              className="group relative h-[28rem] lg:h-[32rem] flex flex-col justify-between p-6 lg:p-8 overflow-hidden bg-[#05020a] border border-white/[0.03] hover:border-white/10 transition-colors duration-500"
            >
              {/* Background Image Layer */}
              <div className="absolute inset-0 z-0">
                <Image 
                  src={post.image} 
                  alt={post.title} 
                  fill
                  className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110 opacity-30 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-60"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  loading="lazy"
                />
                {/* Gradient overlays to ensure text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#05020a]/90 via-transparent to-[#05020a]/95" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05020a]/90 via-[#05020a]/40 to-transparent" />
              </div>

              {/* Content Container (Z-10) */}
              <div className="relative z-10 flex flex-col h-full justify-between">
                
                {/* Top Section: Title */}
                <div>
                  <h3 className="font-serif text-2xl lg:text-3xl font-medium tracking-tight text-white leading-[1.15] mb-2 drop-shadow-md">
                    {post.title}
                  </h3>
                </div>

                {/* Middle/Bottom Section: Excerpt */}
                <div className="mt-auto mb-8">
                  <p className="text-sm text-white/70 leading-relaxed font-light drop-shadow-sm md:opacity-70 group-hover:opacity-100 transition-opacity duration-500 line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                {/* Bottom Section: Read More Link */}
                <div className="flex items-center justify-between border-t border-white/10 pt-4 mt-2">
                  <a 
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 font-mono text-[9px] tracking-[0.2em] uppercase text-white hover:text-purple-300 transition-colors"
                  >
                    + READ MORE
                  </a>
                  <span className="text-[9px] font-mono text-white/40 uppercase tracking-widest">
                    {post.category}
                  </span>
                </div>

              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <a
            href="/blog"
            className="inline-flex h-14 px-10 items-center justify-center border border-white/20 bg-transparent text-[10px] tracking-[0.2em] uppercase font-mono text-white transition-all duration-300 hover:bg-white hover:text-[#090514]"
          >
            View All Insights
          </a>
        </div>
      </div>
    </section>
  )
}
