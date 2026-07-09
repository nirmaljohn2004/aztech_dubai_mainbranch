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
      className="py-24 md:py-32 px-6 md:px-12 bg-transparent text-[var(--canvas-text)] border-t border-[var(--canvas-border)] transition-colors duration-500"
      aria-label="Contact Aztech LED — Get a Free Quote"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="grid grid-cols-12 gap-6 border-b border-[var(--canvas-border)] pb-12 mb-16">
          <div className="col-span-12 md:col-span-4 lg:col-span-3">
            <span className="text-[10px] tracking-widest uppercase font-sans text-[var(--canvas-text)] opacity-80 block font-bold">
              GET IN TOUCH
            </span>
          </div>
          <div className="col-span-12 md:col-span-8 lg:col-span-9">
            <h2 className="font-serif text-[6vw] md:text-[5vw] font-bold tracking-[-0.04em] leading-[0.95] mb-6 text-[var(--canvas-text)]">
              Request a Consultation.
            </h2>
            <p className="text-sm md:text-base tracking-normal leading-relaxed text-[var(--canvas-text-muted)] max-w-2xl font-medium">
              Tell us about your display requirements, and our team will formulate a comprehensive proposal and quotation tailored to your project.
            </p>
          </div>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* Left Column: Info */}
          <div className="col-span-12 lg:col-span-5 space-y-8">
            <div className="bg-[var(--canvas-text)]/[0.03] border border-[var(--canvas-border)] p-8 space-y-8 w-full relative">
              <span className="text-[10px] tracking-widest uppercase font-sans text-[var(--canvas-text)] block font-bold">
                OUR OFFICES
              </span>
              
              <div className="grid grid-cols-1 gap-6 w-full">
                {/* Aztech Head Quarters */}
                <a 
                  href="https://maps.google.com/?q=Warehouse+55,+Al+Quoz+Industrial+Area+3,+Dubai" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex flex-col gap-2 group relative overflow-hidden"
                >
                  <address className="text-sm text-[var(--canvas-text-muted)] not-italic leading-relaxed font-medium">
                    <strong className="text-[var(--canvas-text)] block font-sans text-sm tracking-wider uppercase font-bold mb-2 opacity-90 group-hover:opacity-100 transition-opacity flex items-center gap-2">
                      <MapPin className="w-4 h-4" /> AZTECH HEAD QUARTERS
                    </strong>
                    Warehouse 55, Al Quoz Industrial Area 3,<br />Dubai, UAE
                  </address>
                </a>
                
                <div className="h-px w-full bg-[var(--canvas-border)]" />

                {/* Sister Concern */}
                <a 
                  href="#" 
                  className="flex flex-col gap-2 group relative overflow-hidden"
                >
                  <address className="text-sm text-[var(--canvas-text-muted)] not-italic leading-relaxed font-medium">
                    <strong className="text-[var(--canvas-text)] block font-sans text-sm tracking-wider uppercase font-bold mb-2 opacity-90 group-hover:opacity-100 transition-opacity flex items-center gap-2">
                      <MapPin className="w-4 h-4" /> SISTER CONCERN
                    </strong>
                    Lamps Plus
                  </address>
                </a>

                <div className="h-px w-full bg-[var(--canvas-border)]" />

                {/* Oman */}
                <a 
                  href="#" 
                  className="flex flex-col gap-2 group relative overflow-hidden"
                >
                  <address className="text-sm text-[var(--canvas-text-muted)] not-italic leading-relaxed font-medium">
                    <strong className="text-[var(--canvas-text)] block font-sans text-sm tracking-wider uppercase font-bold mb-2 opacity-90 group-hover:opacity-100 transition-opacity flex items-center gap-2">
                      <MapPin className="w-4 h-4" /> AZTECH LED SCREEN
                    </strong>
                    Muscat, Oman
                  </address>
                </a>

                <div className="h-px w-full bg-[var(--canvas-border)]" />

                {/* Saudi */}
                <a 
                  href="#" 
                  className="flex flex-col gap-2 group relative overflow-hidden"
                >
                  <address className="text-sm text-[var(--canvas-text-muted)] not-italic leading-relaxed font-medium">
                    <strong className="text-[var(--canvas-text)] block font-sans text-sm tracking-wider uppercase font-bold mb-2 opacity-90 group-hover:opacity-100 transition-opacity flex items-center gap-2">
                      <MapPin className="w-4 h-4" /> AZTECH LED SCREEN
                    </strong>
                    Riyadh, Saudi Arabia
                  </address>
                </a>

                <div className="h-px w-full bg-[var(--canvas-border)]" />

                {/* Abu Dhabi */}
                <a 
                  href="#" 
                  className="flex flex-col gap-2 group relative overflow-hidden"
                >
                  <address className="text-sm text-[var(--canvas-text-muted)] not-italic leading-relaxed font-medium">
                    <strong className="text-[var(--canvas-text)] block font-sans text-sm tracking-wider uppercase font-bold mb-2 opacity-90 group-hover:opacity-100 transition-opacity flex items-center gap-2">
                      <MapPin className="w-4 h-4" /> AZTECH LED SCREEN
                    </strong>
                    Abu Dhabi, UAE
                  </address>
                </a>

                <div className="h-px w-full bg-[var(--canvas-border)]" />

                {/* Kerala */}
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=CHAMMANY+COMPLEX,+SHOP+NO+65%2F869,+SEBASTIAN+ROAD,+KALOOR,+KOCHIN+682017" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex flex-col gap-2 group relative overflow-hidden"
                >
                  <address className="text-sm text-[var(--canvas-text-muted)] not-italic leading-relaxed font-medium">
                    <strong className="text-[var(--canvas-text)] block font-sans text-sm tracking-wider uppercase font-bold mb-2 opacity-90 group-hover:opacity-100 transition-opacity flex items-center gap-2">
                      <MapPin className="w-4 h-4" /> AZTECH LED SCREEN
                    </strong>
                    CHAMMANY COMPLEX, SHOP NO 65/869,<br />
                    SEBASTIAN ROAD, KALOOR, KOCHIN 682017<br />
                    Kerala, India
                  </address>
                </a>
              </div>
            </div>

            <div className="bg-[var(--canvas-text)]/[0.03] border border-[var(--canvas-border)] p-8 space-y-6 w-full relative">
              <span className="text-[10px] tracking-widest uppercase font-sans text-[var(--canvas-text)] block font-bold">
                DIRECT HOTLINES
              </span>
              <div className="grid grid-cols-1 gap-4 text-sm font-semibold text-[var(--canvas-text)] opacity-90">
                <a href="tel:+917356780866" className="flex items-center gap-3 hover:opacity-100 transition-all">
                  <Phone className="w-4 h-4" />
                  <span>+91 73567 80866 (IN)</span>
                </a>
                <a href="https://wa.me/971561425339" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:opacity-100 transition-all">
                  <Phone className="w-4 h-4" />
                  <span>+971 56 142 5339 (UAE)</span>
                </a>
                <a href="mailto:sales@az-tech.ae" className="flex items-center gap-3 hover:opacity-100 transition-all">
                  <Mail className="w-4 h-4" />
                  <span>sales@az-tech.ae</span>
                </a>
              </div>
              <div className="flex items-center gap-2 pt-6 border-t border-[var(--canvas-border)] text-[10px] text-[var(--canvas-text-muted)] font-sans uppercase tracking-wider font-bold">
                <Clock className="w-3.5 h-3.5" />
                <span>BUSINESS HOURS: MON–SAT (8AM–6PM)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Application Form */}
          <div className="col-span-12 lg:col-span-7">
            {isSubmitted ? (
              <div className="flex flex-col items-start py-12">
                <div className="text-[var(--canvas-text)] mb-6">
                  <CheckCircle className="w-12 h-12 stroke-[1.5]" />
                </div>
                <h3 className="font-serif text-3xl font-bold tracking-tight mb-4 text-[var(--canvas-text)]">
                  Request Initiated.
                </h3>
                <p className="text-sm text-[var(--canvas-text-muted)] leading-relaxed max-w-md mb-8 font-medium">
                  A Gmail composition window has been prepared with your inquiry data. Please complete the transmission via your mail client. Our sales desk will verify specifications and respond shortly.
                </p>
                <button 
                  onClick={() => {
                    setIsSubmitted(false)
                    setFieldValues({ name: "", company: "", email: "", phone: "", service: "", location: "", budget: "", source: "", message: "" })
                  }}
                  className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-[var(--canvas-text)] opacity-80 hover:opacity-100 bg-transparent border-none cursor-pointer p-0 font-bold transition-opacity"
                >
                  Submit Another Inquiry
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-10" noValidate>
                <span className="text-[10px] tracking-widest uppercase font-sans text-[var(--canvas-text)] block border-b border-[var(--canvas-border)] pb-4 font-bold">
                  PROJECT INQUIRY DETAILS
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
                      className="bg-transparent border-b border-[var(--canvas-border)] focus:border-[var(--canvas-text)] text-sm py-2 px-0 focus:outline-none transition-colors rounded-none w-full text-[var(--canvas-text)] font-semibold"
                    />
                    <label 
                      htmlFor="name" 
                      className={`absolute left-0 transition-all duration-300 origin-left pointer-events-none font-mono uppercase tracking-wider font-bold
                        ${isFieldActive('name') 
                          ? 'top-[-8px] text-[10px] text-[var(--canvas-text)]' 
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
                      className="bg-transparent border-b border-[var(--canvas-border)] focus:border-[var(--canvas-text)] text-sm py-2 px-0 focus:outline-none transition-colors rounded-none w-full text-[var(--canvas-text)] font-semibold"
                    />
                    <label 
                      htmlFor="company" 
                      className={`absolute left-0 transition-all duration-300 origin-left pointer-events-none font-mono uppercase tracking-wider font-bold
                        ${isFieldActive('company') 
                          ? 'top-[-8px] text-[10px] text-[var(--canvas-text)]' 
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
                      className="bg-transparent border-b border-[var(--canvas-border)] focus:border-[var(--canvas-text)] text-sm py-2 px-0 focus:outline-none transition-colors rounded-none w-full text-[var(--canvas-text)] font-semibold"
                    />
                    <label 
                      htmlFor="email" 
                      className={`absolute left-0 transition-all duration-300 origin-left pointer-events-none font-mono uppercase tracking-wider font-bold
                        ${isFieldActive('email') 
                          ? 'top-[-8px] text-[10px] text-[var(--canvas-text)]' 
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
                      className="bg-transparent border-b border-[var(--canvas-border)] focus:border-[var(--canvas-text)] text-sm py-2 px-0 focus:outline-none transition-colors rounded-none w-full text-[var(--canvas-text)] font-semibold"
                    />
                    <label 
                      htmlFor="phone" 
                      className={`absolute left-0 transition-all duration-300 origin-left pointer-events-none font-mono uppercase tracking-wider font-bold
                        ${isFieldActive('phone') 
                          ? 'top-[-8px] text-[10px] text-[var(--canvas-text)]' 
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
                      className="bg-transparent border-b border-[var(--canvas-border)] focus:border-[var(--canvas-text)] text-sm py-2 px-0 focus:outline-none transition-colors rounded-none appearance-none cursor-pointer w-full text-[var(--canvas-text)] font-semibold [&>option]:bg-white [&>option]:text-black"
                    >
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt} className="text-xs font-medium">
                          {opt || ""}
                        </option>
                      ))}
                    </select>
                    <label 
                      htmlFor="service" 
                      className={`absolute left-0 transition-all duration-300 origin-left pointer-events-none font-mono uppercase tracking-wider font-bold
                        ${isFieldActive('service') 
                          ? 'top-[-8px] text-[10px] text-[var(--canvas-text)]' 
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
                      className="bg-transparent border-b border-[var(--canvas-border)] focus:border-[var(--canvas-text)] text-sm py-2 px-0 focus:outline-none transition-colors rounded-none appearance-none cursor-pointer w-full text-[var(--canvas-text)] font-semibold [&>option]:bg-white [&>option]:text-black"
                    >
                      {locationOptions.map((opt) => (
                        <option key={opt} value={opt} className="text-xs font-medium">
                          {opt || ""}
                        </option>
                      ))}
                    </select>
                    <label 
                      htmlFor="location" 
                      className={`absolute left-0 transition-all duration-300 origin-left pointer-events-none font-mono uppercase tracking-wider font-bold
                        ${isFieldActive('location') 
                          ? 'top-[-8px] text-[10px] text-[var(--canvas-text)]' 
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
                      className="bg-transparent border-b border-[var(--canvas-border)] focus:border-[var(--canvas-text)] text-sm py-2 px-0 focus:outline-none transition-colors rounded-none appearance-none cursor-pointer w-full text-[var(--canvas-text)] font-semibold [&>option]:bg-white [&>option]:text-black"
                    >
                      {budgetOptions.map((opt) => (
                        <option key={opt} value={opt} className="text-xs font-medium">
                          {opt || ""}
                        </option>
                      ))}
                    </select>
                    <label 
                      htmlFor="budget" 
                      className={`absolute left-0 transition-all duration-300 origin-left pointer-events-none font-mono uppercase tracking-wider font-bold
                        ${isFieldActive('budget') 
                          ? 'top-[-8px] text-[10px] text-[var(--canvas-text)]' 
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
                      className="bg-transparent border-b border-[var(--canvas-border)] focus:border-[var(--canvas-text)] text-sm py-2 px-0 focus:outline-none transition-colors rounded-none appearance-none cursor-pointer w-full text-[var(--canvas-text)] font-semibold [&>option]:bg-white [&>option]:text-black"
                    >
                      {sourceOptions.map((opt) => (
                        <option key={opt} value={opt} className="text-xs font-medium">
                          {opt || ""}
                        </option>
                      ))}
                    </select>
                    <label 
                      htmlFor="source" 
                      className={`absolute left-0 transition-all duration-300 origin-left pointer-events-none font-mono uppercase tracking-wider font-bold
                        ${isFieldActive('source') 
                          ? 'top-[-8px] text-[10px] text-[var(--canvas-text)]' 
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
                    className="bg-transparent border-b border-[var(--canvas-border)] focus:border-[var(--canvas-text)] text-sm py-2 px-0 focus:outline-none transition-colors resize-none rounded-none w-full text-[var(--canvas-text)] font-semibold"
                  />
                  <label 
                    htmlFor="message" 
                    className={`absolute left-0 transition-all duration-300 origin-left pointer-events-none font-mono uppercase tracking-wider font-bold
                      ${isFieldActive('message') 
                        ? 'top-[-8px] text-[10px] text-[var(--canvas-text)]' 
                        : 'top-[22px] text-xs text-[var(--canvas-text-muted)]'}`}
                  >
                    Project Details / Additional Info
                  </label>
                </div>

                {errorMsg && (
                  <div className="flex items-start gap-2 text-sm text-red-600 font-medium">
                    <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                    <p>{errorMsg}</p>
                  </div>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 border-2 border-[var(--canvas-text)] text-[var(--canvas-bg)] bg-[var(--canvas-text)] text-[11px] tracking-widest uppercase font-mono font-bold transition-all duration-300 hover:bg-transparent hover:text-[var(--canvas-text)] disabled:opacity-50 rounded-none cursor-pointer"
                >
                  {isSubmitting ? "PREPARING..." : "SUBMIT INQUIRY"}
                </button>
                
                <p className="text-[10px] font-sans text-[var(--canvas-text-muted)] text-center uppercase tracking-wider font-semibold">
                  All data is kept confidential | Guaranteed 24-hour response
                </p>
              </form>
            )}

            {/* WhatsApp CTA */}
            <div className={`mt-12 pt-8 border-t border-[var(--canvas-border)] ${isSubmitted ? 'hidden' : ''} flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6`}>
              <div className="flex flex-col gap-2 max-w-sm">
                <span className="text-[10px] tracking-widest uppercase font-mono text-[var(--canvas-text)] font-bold">
                  PREFER INSTANT MESSAGING?
                </span>
                <span className="text-sm text-[var(--canvas-text-muted)] font-medium">
                  Connect with our team directly via WhatsApp for quicker assistance and quotes.
                </span>
              </div>
              <a 
                href="https://wa.me/971561425339?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20LED%20screens."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 px-8 items-center justify-center border-2 border-[var(--canvas-border)] hover:border-[var(--canvas-text)] bg-transparent text-[11px] tracking-widest uppercase font-mono text-[var(--canvas-text)] font-bold transition-all duration-300 whitespace-nowrap rounded-none w-full sm:w-auto"
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
