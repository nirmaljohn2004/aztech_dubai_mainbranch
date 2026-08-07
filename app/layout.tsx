import type { Metadata, Viewport } from 'next'
import { DM_Sans, DM_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { LenisProvider } from '@/components/cinematic/LenisProvider'

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Aztech LED Screen Dubai | Premium Indoor & Outdoor Displays",
  description: "Aztech LED is Dubai's leading LED screen supplier with 20+ years of expertise. We design, supply, install, and maintain high-quality indoor and outdoor LED displays across the UAE and Middle East.",
  keywords: "LED screen Dubai, LED display supplier Dubai, outdoor LED billboard Dubai, indoor LED screen UAE, video wall Dubai, transparent LED display UAE, LED screen installation Dubai, digital signage Dubai, LED screen price Dubai, P2 LED screen UAE, LED wall Abu Dhabi, outdoor billboard UAE",
  authors: [{ name: "Aztech General Trading LLC" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
    },
  },
  openGraph: {
    type: "website",
    url: "https://az-tech.ae/",
    title: "Aztech LED Screen Dubai | Premium Indoor & Outdoor Displays",
    description: "Dubai's most trusted LED display company with 20+ years of excellence. Indoor, outdoor, transparent LED screens & video walls across the UAE and Middle East.",
    siteName: "Aztech General Trading LLC",
    locale: "en_AE",
    images: [
      {
        url: "https://az-tech.ae/images/hero_led_wall_1774782256673.webp",
        width: 1200,
        height: 800,
        alt: "Large LED video wall display installed in a modern Dubai commercial space by Aztech LED",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aztech LED Screen Dubai | Premium Indoor & Outdoor Displays",
    description: "Dubai's leading LED display company. Indoor, outdoor & specialty LED screens. 20+ years expertise, 500+ projects across UAE and Middle East.",
    images: ["https://az-tech.ae/images/hero_led_wall_1774782256673.webp"],
  },
  alternates: {
    canonical: "https://az-tech.ae/",
  },
  other: {
    'geo.region': 'AE-DU',
    'geo.placename': 'Dubai, United Arab Emirates',
    'geo.position': '25.1850;55.2467',
    'ICBM': '25.1850, 55.2467',
    'http-equiv-Content-Language': 'en',
  },
  formatDetection: {
    telephone: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#0a1628',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${dmSans.variable} ${dmMono.variable}`}>
      <head>
        {/* Favicon */}
        <link rel="icon" href="/generate_a_high_quality_favicon_202605051045-removebg-preview.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/generate_a_high_quality_favicon_202605051045-removebg-preview.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/generate_a_high_quality_favicon_202605051045-removebg-preview.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/generate_a_high_quality_favicon_202605051045-removebg-preview.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0a1628" />
        {/* Preconnect for Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Preconnect for Fontshare (Clash Display) */}
        <link rel="preconnect" href="https://api.fontshare.com" />
        {/* Geo tags for local SEO — Dubai, UAE */}
        <meta name="geo.region" content="AE-DU" />
        <meta name="geo.placename" content="Dubai, United Arab Emirates" />
        <meta name="geo.position" content="25.1850;55.2467" />
        <meta name="ICBM" content="25.1850, 55.2467" />
        <meta httpEquiv="Content-Language" content="en" />
        {/* LocalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Aztech General Trading LLC",
              "image": "https://az-tech.ae/images/hero_led_wall_1774782256673.webp",
              "@id": "https://az-tech.ae/",
              "url": "https://az-tech.ae/",
              "telephone": "+971 56 142 5339",
              "priceRange": "AED 5,000 - AED 100,000+",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Karama, Dubai Al Nishwan Building, Near ADCB Metro Station",
                "addressLocality": "Dubai",
                "addressRegion": "Dubai",
                "postalCode": "239101",
                "addressCountry": "AE"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 25.1850,
                "longitude": 55.2467
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                "opens": "08:00",
                "closes": "18:00"
              },
              "sameAs": [],
              "description": "Aztech General Trading LLC is Dubai's leading LED screen supplier with 20+ years of expertise. We design, supply, install, and maintain indoor and outdoor LED displays, video walls, and architectural lighting across the UAE and Middle East.",
              "areaServed": ["Dubai", "Abu Dhabi", "Sharjah", "Muscat", "Riyadh", "Doha", "UAE", "Oman", "Saudi Arabia"],
              "knowsAbout": ["LED Screen", "Digital Signage", "Outdoor Billboard", "Video Wall", "Indoor LED Display", "Transparent LED", "Architectural Lighting", "Rental LED Screen"]
            })
          }}
        />
        {/* WebSite Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Aztech LED",
              "url": "https://az-tech.ae/",
              "description": "Dubai's #1 LED screen supplier. Indoor, outdoor, specialty LED displays and video walls across UAE and the Middle East.",
              "publisher": {
                "@type": "Organization",
                "name": "Aztech General Trading LLC",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://az-tech.ae/icon.svg",
                  "width": 512,
                  "height": 512
                }
              }
            })
          }}
        />
        {/* BreadcrumbList Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://az-tech.ae/" },
                { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://az-tech.ae/#products" },
                { "@type": "ListItem", "position": 3, "name": "Solutions", "item": "https://az-tech.ae/#solutions" },
                { "@type": "ListItem", "position": 4, "name": "Projects", "item": "https://az-tech.ae/#projects" },
                { "@type": "ListItem", "position": 5, "name": "Contact", "item": "https://az-tech.ae/#contact" }
              ]
            })
          }}
        />
        {/* FAQPage Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is the price of an LED screen in Dubai?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "LED screen prices in Dubai vary based on size, pixel pitch and type. Indoor LED screens start from AED 5,000, while large outdoor billboard displays range from AED 20,000 to AED 100,000+. Contact Aztech LED for a free custom quote."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Does Aztech LED supply outdoor LED screens in Dubai and the UAE?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Aztech LED supplies weatherproof outdoor DIP and SMD LED displays rated up to 5000 nits, suitable for billboards, building facades, and roadside signage across Dubai, Abu Dhabi, Sharjah, and the wider UAE."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is pixel pitch and which one should I choose?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Pixel pitch is the distance in millimetres between LED clusters. A smaller number (e.g. P1.2) means higher resolution suitable for close viewing indoors. A larger number (e.g. P6 or P10) is ideal for outdoor billboards viewed from a distance. Aztech stocks P1.2 to P10."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Does Aztech LED provide installation services in Dubai?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Aztech LED has a full in-house installation team that handles site survey, structural mounting, cable routing, screen assembly, controller configuration and final commissioning across Dubai and the UAE. No subcontractors are used."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you offer maintenance contracts for LED screens in the UAE?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Aztech LED offers Annual Maintenance Contracts (AMC) covering preventive maintenance, emergency callouts, spare parts supply, remote monitoring and firmware updates with a 24-hour response SLA across the UAE and GCC."
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-[var(--accent)] focus:text-white focus:rounded">
          Skip to main content
        </a>
        <LenisProvider>
          {children}
        </LenisProvider>
        <Analytics />
      </body>
    </html>
  )
}
