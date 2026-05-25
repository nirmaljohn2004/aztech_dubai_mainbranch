'use client'

import { useRef, useState, FormEvent } from 'react'
import { MapPin, Phone, Mail, Clock, ArrowRight, CheckCircle, AlertCircle } from 'lucide-react'

const serviceOptions = [
  "",
  "Indoor LED Screen",
  "Outdoor LED Screen",
  "Rental / Event Screen",
  "Transparent LED Screen",
  "LCD Video Wall",
  "Custom LED Display",
  "Exterior / Architectural Lighting",
  "After-Sales & Maintenance",
  "Other / Not Sure",
]

const locationOptions = [
  "",
  "Mumbai",
  "Delhi / NCR",
  "Bangalore",
  "Hyderabad",
  "Chennai",
  "Kochi",
  "Other (within India)",
  "Outside India",
]

const budgetOptions = [
  "",
  "Under ₹50,000",
  "₹50,000 – ₹2,00,000",
  "₹2,00,000 – ₹10,00,000",
  "₹10,00,000+",
]

const sourceOptions = [
  "",
  "Google Search",
  "Referral",
  "Social Media",
  "Other",
]

export function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  
  // State to track field focus and value changes for premium floating label transitions
  const [focusedField, setFocusedField] = useState<Record<string, boolean>>({})
  const [fieldValues, setFieldValues] = useState<Record<string, string>>({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    location: "",
    budget: "",
    source: "",
    message: ""
  })

  const formRef = useRef<HTMLFormElement>(null)

  const handleFocus = (field: string) => {
    setFocusedField(prev => ({ ...prev, [field]: true }))
  }

  const handleBlur = (field: string) => {
    setFocusedField(prev => ({ ...prev, [field]: false }))
  }

  const handleChange = (field: string, val: string) => {
    setFieldValues(prev => ({ ...prev, [field]: val }))
  }

  const isFieldActive = (field: string) => {
    return focusedField[field] || !!fieldValues[field]
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMsg(null)

    const data = fieldValues

    if (!data.name || !data.email || !data.phone || !data.service) {
      setErrorMsg('Please complete all required fields (*).')
      setIsSubmitting(false)
      return
    }

    const subject = `New LED Enquiry: ${data.service} — ${data.name}${data.company ? ` (${data.company})` : ''}`
    const body = [
      `Name: ${data.name}`,
      data.company ? `Company: ${data.company}` : '',
      `Email: ${data.email}`,
      `Phone / WhatsApp: ${data.phone}`,
      `Service Required: ${data.service}`,
      data.location ? `Project Location: ${data.location}` : '',
      `Approximate Budget: ${data.budget}`,
      data.source ? `How They Heard: ${data.source}` : '',
      '',
      'Project Details / Message:',
      data.message || 'No message provided',
    ].filter(Boolean).join('\n')

    const gmailUrl =
      `https://mail.google.com/mail/?view=cm&fs=1` +
      `&to=${encodeURIComponent('sales@az-tech.ae')}` +
      `&su=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`

    window.open(gmailUrl, '_blank')
    setIsSubmitted(true)
    setIsSubmitting(false)
  }

  return (
    <section 
      id="contact" 
      className="py-24 md:py-32 px-6 md:px-12 border-b border-[var(--canvas-border)] transition-colors duration-300 bg-transparent"
      aria-label="Contact Aztech LED — Get a Free Quote"
    >
      <div className="max-w-7xl mx-auto animate-fade-in-up">
        
        {/* Asymmetric Header */}
        <div className="grid grid-cols-12 gap-6 border-b border-[var(--canvas-border)] pb-12 mb-16">
          <div className="col-span-12 md:col-span-4 lg:col-span-3">
            <span className="text-[10px] tracking-widest uppercase font-mono text-purple-500/80 block">
              GET IN TOUCH // INQUIRIES
            </span>
          </div>
          <div className="col-span-12 md:col-span-8 lg:col-span-9">
            <h2 className="font-serif text-[6vw] md:text-[5vw] font-medium tracking-[-0.04em] leading-[0.95] mb-6 text-[var(--canvas-text)]">
              Request a Technical Consultation.
            </h2>
            <p className="text-xs md:text-sm tracking-normal leading-relaxed text-[var(--canvas-text-muted)] max-w-xl">
              Tell us about your display targets, and we will formulate a full spec layout with quotation details within 24 hours.
            </p>
          </div>
        </div>

        {/* Form & Info Asymmetric 12-Column split */}
        <div className="grid grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* Info - Left Column (Span 5) */}
          <div className="col-span-12 lg:col-span-5 space-y-8">
            <div className="flex flex-col items-start gap-4 w-full">
              <span className="text-[10px] tracking-widest uppercase font-mono text-[var(--canvas-text-muted)]">
                // OFFICE DIRECTORIES
              </span>
              
              <div className="grid grid-cols-1 gap-4 w-full">
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=CHAMMANY+COMPLEX,+SHOP+NO+65%2F869,+SEBASTIAN+ROAD,+KALOOR,+KOCHIN+682017" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-start gap-4 p-5 bg-[var(--canvas-text)]/[0.02] border border-[var(--canvas-border)] hover:border-purple-500/30 transition-all duration-300 group relative overflow-hidden"
                >
                  <div className="p-2.5 bg-purple-500/10 text-purple-500 group-hover:bg-purple-500/20 group-hover:text-purple-600 transition-colors">
                    <MapPin className="w-4 h-4 shrink-0" />
                  </div>
                  <address className="text-xs text-[var(--canvas-text-muted)] not-italic leading-relaxed">
                    <strong className="text-[var(--canvas-text)] block font-sans text-xs tracking-wider uppercase font-semibold mb-1 group-hover:text-purple-500 transition-colors">INDIA OFFICE</strong>
                    CHAMMANY COMPLEX, SHOP NO 65/869,<br />
                    SEBASTIAN ROAD, KALOOR, KOCHIN 682017
                  </address>
                </a>
                
                <a 
                  href="https://maps.google.com/?q=Warehouse+55,+Al+Quoz+Industrial+Area+3,+Dubai" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-start gap-4 p-5 bg-[var(--canvas-text)]/[0.02] border border-[var(--canvas-border)] hover:border-purple-500/30 transition-all duration-300 group relative overflow-hidden"
                >
                  <div className="p-2.5 bg-purple-500/10 text-purple-500 group-hover:bg-purple-500/20 group-hover:text-purple-600 transition-colors">
                    <MapPin className="w-4 h-4 shrink-0" />
                  </div>
                  <address className="text-xs text-[var(--canvas-text-muted)] not-italic leading-relaxed">
                    <strong className="text-[var(--canvas-text)] block font-sans text-xs tracking-wider uppercase font-semibold mb-1 group-hover:text-purple-500 transition-colors">DUBAI MAIN OFFICE</strong>
                    Warehouse 55, Al Quoz Industrial Area 3, Dubai, UAE
                  </address>
                </a>
              </div>
            </div>

            <div className="bg-[var(--canvas-text)]/[0.02] border border-[var(--canvas-border)] p-6 backdrop-blur-md space-y-4 w-full relative overflow-hidden group">
              <span className="text-[10px] tracking-widest uppercase font-mono text-[var(--canvas-text-muted)] block">
                // DIRECT HOTLINES
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 font-mono text-xs">
                <a href="tel:+917356780866" className="flex items-center gap-3 p-3 bg-[var(--canvas-text)]/[0.01] border border-[var(--canvas-border)] hover:border-purple-500/20 text-[var(--canvas-text-muted)] hover:text-[var(--canvas-text)] transition-all">
                  <Phone className="w-3.5 h-3.5 text-purple-500" />
                  <span>+91 73567 80866 (IN)</span>
                </a>
                <a href="https://wa.me/971561425339" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 bg-[var(--canvas-text)]/[0.01] border border-[var(--canvas-border)] hover:border-purple-500/20 text-[var(--canvas-text-muted)] hover:text-[var(--canvas-text)] transition-all">
                  <Phone className="w-3.5 h-3.5 text-purple-500" />
                  <span>+971 56 142 5339 (UAE)</span>
                </a>
                <a href="mailto:sales@az-tech.ae" className="flex items-center gap-3 p-3 bg-[var(--canvas-text)]/[0.01] border border-[var(--canvas-border)] hover:border-purple-500/20 text-[var(--canvas-text-muted)] hover:text-[var(--canvas-text)] transition-all sm:col-span-2 lg:col-span-1">
                  <Mail className="w-3.5 h-3.5 text-purple-500" />
                  <span>sales@az-tech.ae</span>
                </a>
              </div>
              <div className="flex items-center gap-2 pt-2 border-t border-[var(--canvas-border)] text-[9px] text-[var(--canvas-text-muted)] font-mono uppercase tracking-wider">
                <Clock className="w-3 h-3 text-purple-500/60" />
                <span>RESPONSE PROTOCOL: MON–SAT (8AM–6PM)</span>
              </div>
            </div>

            {/* Map Frame - High Tech Console */}
            <div className="relative aspect-[16/10] w-full overflow-hidden border border-[var(--canvas-border)] group">
              <div className="absolute top-3 left-3 bg-[#090514]/90 border border-purple-500/20 text-purple-400 font-mono text-[9px] tracking-widest uppercase px-2.5 py-1 backdrop-blur-md z-10 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <span>GPS // KOCHI_LAB_VERIFIED</span>
              </div>
              <iframe
                title="Aztech LED office location map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.139446059174!2d76.29227567484307!3d9.996924872922797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d38101683cb%3A0x86811d6199f3d53a!2sSebastian%20Rd%2C%20Kaloor%2C%20Kochi%2C%20Kerala%20682017!5e0!3m2!1sen!2sin!4v1715841445791!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="group-hover:scale-[1.02] transition-transform duration-700 mix-blend-luminosity opacity-80"
              />
            </div>
          </div>

          {/* Form - Right Column (Span 7) */}
          <div className="col-span-12 lg:col-span-7">
            {isSubmitted ? (
              <div className="flex flex-col items-start py-12">
                <div className="text-purple-500 mb-6">
                  <CheckCircle className="w-12 h-12 stroke-[1.2]" />
                </div>
                <h3 className="font-serif text-2xl font-medium tracking-tight mb-4 text-[var(--canvas-text)]">
                  Request Initiated.
                </h3>
                <p className="text-xs md:text-xs text-[var(--canvas-text-muted)] leading-relaxed max-w-md mb-8">
                  A Gmail composition window has been prepared with your inquiry data. Please complete the transmission via your mail client. Our sales desk will verify specifications and respond shortly.
                </p>
                <a 
                  href="#projects" 
                  className="inline-flex items-center gap-2 font-mono text-[10px] tracking-widest uppercase text-purple-600 hover:text-purple-500"
                >
                  Explore Project Blueprints
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-10" noValidate>
                <span className="text-[10px] tracking-widest uppercase font-mono text-[var(--canvas-text-muted)] block border-b border-[var(--canvas-border)] pb-4">
                  // PROJECT SPECIFICATIONS SHEET
                </span>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
                  {/* Name */}
                  <div className="relative flex flex-col pt-4">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={fieldValues.name}
                      onFocus={() => handleFocus('name')}
                      onBlur={() => handleBlur('name')}
                      onChange={(e) => handleChange('name', e.target.value)}
                      className="bg-transparent border-b border-[var(--canvas-border)] focus:border-purple-500 text-sm py-2 px-0 focus:outline-none transition-colors rounded-none w-full text-[var(--canvas-text)]"
                    />
                    <label 
                      htmlFor="name" 
                      className={`absolute left-0 transition-all duration-300 origin-left pointer-events-none font-mono uppercase tracking-wider
                        ${isFieldActive('name') 
                          ? 'top-[-8px] text-[9px] text-purple-500' 
                          : 'top-[16px] text-xs text-[var(--canvas-text-muted)]'}`}
                    >
                      Full Name *
                    </label>
                  </div>

                  {/* Company */}
                  <div className="relative flex flex-col pt-4">
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={fieldValues.company}
                      onFocus={() => handleFocus('company')}
                      onBlur={() => handleBlur('company')}
                      onChange={(e) => handleChange('company', e.target.value)}
                      className="bg-transparent border-b border-[var(--canvas-border)] focus:border-purple-500 text-sm py-2 px-0 focus:outline-none transition-colors rounded-none w-full text-[var(--canvas-text)]"
                    />
                    <label 
                      htmlFor="company" 
                      className={`absolute left-0 transition-all duration-300 origin-left pointer-events-none font-mono uppercase tracking-wider
                        ${isFieldActive('company') 
                          ? 'top-[-8px] text-[9px] text-purple-500' 
                          : 'top-[16px] text-xs text-[var(--canvas-text-muted)]'}`}
                    >
                      Company Name
                    </label>
                  </div>

                  {/* Email */}
                  <div className="relative flex flex-col pt-4">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={fieldValues.email}
                      onFocus={() => handleFocus('email')}
                      onBlur={() => handleBlur('email')}
                      onChange={(e) => handleChange('email', e.target.value)}
                      className="bg-transparent border-b border-[var(--canvas-border)] focus:border-purple-500 text-sm py-2 px-0 focus:outline-none transition-colors rounded-none w-full text-[var(--canvas-text)]"
                    />
                    <label 
                      htmlFor="email" 
                      className={`absolute left-0 transition-all duration-300 origin-left pointer-events-none font-mono uppercase tracking-wider
                        ${isFieldActive('email') 
                          ? 'top-[-8px] text-[9px] text-purple-500' 
                          : 'top-[16px] text-xs text-[var(--canvas-text-muted)]'}`}
                    >
                      Email Address *
                    </label>
                  </div>

                  {/* Phone */}
                  <div className="relative flex flex-col pt-4">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={fieldValues.phone}
                      onFocus={() => handleFocus('phone')}
                      onBlur={() => handleBlur('phone')}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      className="bg-transparent border-b border-[var(--canvas-border)] focus:border-purple-500 text-sm py-2 px-0 focus:outline-none transition-colors rounded-none w-full text-[var(--canvas-text)]"
                    />
                    <label 
                      htmlFor="phone" 
                      className={`absolute left-0 transition-all duration-300 origin-left pointer-events-none font-mono uppercase tracking-wider
                        ${isFieldActive('phone') 
                          ? 'top-[-8px] text-[9px] text-purple-500' 
                          : 'top-[16px] text-xs text-[var(--canvas-text-muted)]'}`}
                    >
                      Phone / WhatsApp *
                    </label>
                  </div>

                  {/* Service select */}
                  <div className="relative flex flex-col pt-4">
                    <select
                      id="service"
                      name="service"
                      required
                      value={fieldValues.service}
                      onFocus={() => handleFocus('service')}
                      onBlur={() => handleBlur('service')}
                      onChange={(e) => handleChange('service', e.target.value)}
                      className="bg-transparent border-b border-[var(--canvas-border)] focus:border-purple-500 text-sm py-2 px-0 focus:outline-none transition-colors rounded-none appearance-none cursor-pointer w-full text-[var(--canvas-text)]"
                    >
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-[var(--canvas-bg)] text-[var(--canvas-text)] text-xs">
                          {opt || ""}
                        </option>
                      ))}
                    </select>
                    <label 
                      htmlFor="service" 
                      className={`absolute left-0 transition-all duration-300 origin-left pointer-events-none font-mono uppercase tracking-wider
                        ${isFieldActive('service') 
                          ? 'top-[-8px] text-[9px] text-purple-500' 
                          : 'top-[16px] text-xs text-[var(--canvas-text-muted)]'}`}
                    >
                      Hardware Required *
                    </label>
                  </div>

                  {/* Location select */}
                  <div className="relative flex flex-col pt-4">
                    <select
                      id="location"
                      name="location"
                      value={fieldValues.location}
                      onFocus={() => handleFocus('location')}
                      onBlur={() => handleBlur('location')}
                      onChange={(e) => handleChange('location', e.target.value)}
                      className="bg-transparent border-b border-[var(--canvas-border)] focus:border-purple-500 text-sm py-2 px-0 focus:outline-none transition-colors rounded-none appearance-none cursor-pointer w-full text-[var(--canvas-text)]"
                    >
                      {locationOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-[var(--canvas-bg)] text-[var(--canvas-text)] text-xs">
                          {opt || ""}
                        </option>
                      ))}
                    </select>
                    <label 
                      htmlFor="location" 
                      className={`absolute left-0 transition-all duration-300 origin-left pointer-events-none font-mono uppercase tracking-wider
                        ${isFieldActive('location') 
                          ? 'top-[-8px] text-[9px] text-purple-500' 
                          : 'top-[16px] text-xs text-[var(--canvas-text-muted)]'}`}
                    >
                      Project Location
                    </label>
                  </div>

                  {/* Budget select */}
                  <div className="relative flex flex-col pt-4">
                    <select
                      id="budget"
                      name="budget"
                      value={fieldValues.budget}
                      onFocus={() => handleFocus('budget')}
                      onBlur={() => handleBlur('budget')}
                      onChange={(e) => handleChange('budget', e.target.value)}
                      className="bg-transparent border-b border-[var(--canvas-border)] focus:border-purple-500 text-sm py-2 px-0 focus:outline-none transition-colors rounded-none appearance-none cursor-pointer w-full text-[var(--canvas-text)]"
                    >
                      {budgetOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-[var(--canvas-bg)] text-[var(--canvas-text)] text-xs">
                          {opt || ""}
                        </option>
                      ))}
                    </select>
                    <label 
                      htmlFor="budget" 
                      className={`absolute left-0 transition-all duration-300 origin-left pointer-events-none font-mono uppercase tracking-wider
                        ${isFieldActive('budget') 
                          ? 'top-[-8px] text-[9px] text-purple-500' 
                          : 'top-[16px] text-xs text-[var(--canvas-text-muted)]'}`}
                    >
                      Budget Scale
                    </label>
                  </div>

                  {/* Source select */}
                  <div className="relative flex flex-col pt-4">
                    <select
                      id="source"
                      name="source"
                      value={fieldValues.source}
                      onFocus={() => handleFocus('source')}
                      onBlur={() => handleBlur('source')}
                      onChange={(e) => handleChange('source', e.target.value)}
                      className="bg-transparent border-b border-[var(--canvas-border)] focus:border-purple-500 text-sm py-2 px-0 focus:outline-none transition-colors rounded-none appearance-none cursor-pointer w-full text-[var(--canvas-text)]"
                    >
                      {sourceOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-[var(--canvas-bg)] text-[var(--canvas-text)] text-xs">
                          {opt || ""}
                        </option>
                      ))}
                    </select>
                    <label 
                      htmlFor="source" 
                      className={`absolute left-0 transition-all duration-300 origin-left pointer-events-none font-mono uppercase tracking-wider
                        ${isFieldActive('source') 
                          ? 'top-[-8px] text-[9px] text-purple-500' 
                          : 'top-[16px] text-xs text-[var(--canvas-text-muted)]'}`}
                    >
                      Reference Channel
                    </label>
                  </div>
                </div>

                {/* Message */}
                <div className="relative flex flex-col pt-6">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={fieldValues.message}
                    onFocus={() => handleFocus('message')}
                    onBlur={() => handleBlur('message')}
                    onChange={(e) => handleChange('message', e.target.value)}
                    className="bg-transparent border-b border-[var(--canvas-border)] focus:border-purple-500 text-sm py-2 px-0 focus:outline-none transition-colors resize-none rounded-none w-full text-[var(--canvas-text)]"
                  />
                  <label 
                    htmlFor="message" 
                    className={`absolute left-0 transition-all duration-300 origin-left pointer-events-none font-mono uppercase tracking-wider
                      ${isFieldActive('message') 
                        ? 'top-[-8px] text-[9px] text-purple-500' 
                        : 'top-[22px] text-xs text-[var(--canvas-text-muted)]'}`}
                  >
                    Project Details / Parameters
                  </label>
                </div>

                {errorMsg && (
                  <div className="flex items-start gap-2 text-xs text-red-500 font-mono">
                    <AlertCircle className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                    <p>{errorMsg}</p>
                  </div>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 border border-[var(--canvas-border)] hover:border-purple-500 bg-transparent text-[10px] tracking-widest uppercase font-mono text-[var(--canvas-text)] transition-all duration-300 hover:bg-purple-500/10 disabled:opacity-50 rounded-none cursor-pointer"
                >
                  {isSubmitting ? "TRANSMITTING..." : "SUBMIT SPEC SHEET"}
                </button>
                
                <p className="text-[9px] font-mono text-[var(--canvas-text-muted)] text-center uppercase tracking-wider">
                  24-Hour response guaranteed // privacy encryption active
                </p>
              </form>
            )}

            {/* Premium WhatsApp Hotline block */}
            <div className={`mt-12 pt-8 border-t border-[var(--canvas-border)] ${isSubmitted ? 'hidden' : ''} flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4`}>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] tracking-widest uppercase font-mono text-purple-500">
                  INSTANT HOTLINE CHANNEL
                </span>
                <span className="text-xs text-[var(--canvas-text-muted)]">
                  Prefer instant messaging? Connect directly via our secure WhatsApp hotline.
                </span>
              </div>
              <a 
                href="https://wa.me/971561425339?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20LED%20screens."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 px-6 items-center justify-center border border-[var(--canvas-border)] hover:border-purple-500 bg-transparent text-[10px] tracking-widest uppercase font-mono text-[var(--canvas-text)] transition-all duration-300 whitespace-nowrap rounded-none w-full sm:w-auto"
              >
                Launch WhatsApp Chat
              </a>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}
