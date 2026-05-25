'use client'

import { MessageCircle } from 'lucide-react'

export function WhatsAppFAB() {
  return (
    <a
      href="https://wa.me/971561425339?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20LED%20screens."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center"
      aria-label="Chat on WhatsApp"
    >
      {/* Sleek, sharp dark-glass button with green border */}
      <div className="w-12 h-12 border border-green-500/60 bg-[#090514]/80 flex items-center justify-center backdrop-blur-md hover:scale-105 hover:border-green-400 transition-all duration-300 relative">
        <MessageCircle size={20} className="text-green-500" />
      </div>
    </a>
  )
}
