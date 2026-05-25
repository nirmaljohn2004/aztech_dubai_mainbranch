import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { WhatsAppFAB } from "@/components/layout/whatsapp-fab"
import { BlogSection } from "@/components/sections/blog"
import { DynamicCanvasWrapper } from "@/components/layout/dynamic-canvas"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog & Insights | Aztech LED Screens Dubai",
  description: "Read the latest insights, buying guides, and technical advice for LED screens from Aztech LED General Trading LLC.",
}

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main id="main" role="main" className="min-h-screen bg-transparent">
        <DynamicCanvasWrapper>
          <div className="pt-24 min-h-[80vh]">
            <BlogSection />
          </div>
        </DynamicCanvasWrapper>
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  )
}
