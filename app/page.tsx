import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { WhatsAppFAB } from "@/components/layout/whatsapp-fab"
import { HeroSection } from "@/components/sections/hero"
import { CompanyProcess } from "@/components/sections/company-process"
import { ClientMarquee } from "@/components/sections/client-marquee"
import { ProductsSection } from "@/components/sections/products"
import { BrandMarquee } from "@/components/sections/brand-marquee"
import { SolutionsSection } from "@/components/sections/solutions"
import { PortfolioSection } from "@/components/sections/portfolio"
import { BrandingSection } from "@/components/sections/branding"
import { BlogSection } from "@/components/sections/blog"
import { ContactSection } from "@/components/sections/contact"
import { DynamicCanvasWrapper } from "@/components/layout/dynamic-canvas"

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main" role="main" className="min-h-screen bg-transparent overflow-x-clip">
        <DynamicCanvasWrapper>
          <HeroSection />
          <CompanyProcess />
          <BrandMarquee />
          <ProductsSection />
          <ClientMarquee />
          <SolutionsSection />
          <PortfolioSection />
          <BrandingSection />
          <BlogSection />
          <ContactSection />
        </DynamicCanvasWrapper>
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  )
}
