'use client'

import { useRef, useState, FormEvent } from 'react'
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { WhatsAppFAB } from "@/components/layout/whatsapp-fab"
import { ArrowRight, CheckCircle, AlertCircle } from 'lucide-react'

const positionOptions = [
  "",
  "Sales Executive / Manager",
  "LED Technician / Engineer",
  "Project Manager",
  "Marketing & Communications",
  "Operations & Logistics",
  "Other / General Application",
]

export default function CareersPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  
  const [focusedField, setFocusedField] = useState<Record<string, boolean>>({})
  const [fieldValues, setFieldValues] = useState<Record<string, string>>({
    name: "",
    email: "",
    phone: "",
    position: "",
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

    if (!data.name || !data.email || !data.phone || !data.position) {
      setErrorMsg('Please complete all required fields (*).')
      setIsSubmitting(false)
      return
    }

    const subject = `New Career Application: ${data.position} - ${data.name}`
    const body = [
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Phone / WhatsApp: ${data.phone}`,
      `Position Applying For: ${data.position}`,
      '',
      'Cover Letter / Message:',
      data.message || 'No message provided',
      '',
      '=========================================',
      'IMPORTANT: PLEASE REMEMBER TO ATTACH YOUR RESUME BEFORE SENDING THIS EMAIL.',
      '========================================='
    ].join('\n')

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
    <>
      <Navbar />
      <main id="main" role="main" className="min-h-screen bg-white text-slate-900 pt-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
          
          {/* Header */}
          <div className="grid grid-cols-12 gap-6 border-b border-slate-200 pb-12 mb-16">
            <div className="col-span-12 md:col-span-4 lg:col-span-3">
              <span className="text-[10px] tracking-widest uppercase font-mono text-slate-900 block font-bold">
                JOIN OUR TEAM // CAREERS
              </span>
            </div>
            <div className="col-span-12 md:col-span-8 lg:col-span-9">
              <h1 className="font-serif text-[7vw] md:text-[6vw] font-bold tracking-[-0.04em] leading-[0.95] text-black mb-6">
                Build the future of visual technology.
              </h1>
              <p className="text-sm md:text-base tracking-normal leading-relaxed text-slate-600 max-w-2xl font-medium">
                At Aztech LED, we are always looking for passionate, driven individuals to join our growing team. Whether you are an experienced engineer, a creative marketer, or a sales professional, we want to hear from you.
              </p>
            </div>
          </div>

          {/* Layout */}
          <div className="grid grid-cols-12 gap-8 lg:gap-16 items-start">
            
            {/* Left Column: Info */}
            <div className="col-span-12 lg:col-span-5 space-y-8">
              <div className="bg-slate-50 border border-slate-200 p-8 space-y-6 w-full relative">
                <span className="text-[10px] tracking-widest uppercase font-mono text-slate-900 block font-bold">
                  // WHY JOIN US
                </span>
                <div className="space-y-6 text-sm text-slate-700 leading-relaxed font-medium">
                  <p>
                    <strong className="text-black block mb-1 font-bold">Innovation First</strong>
                    Work with cutting-edge LED technologies and push the boundaries of what's possible in digital displays.
                  </p>
                  <p>
                    <strong className="text-black block mb-1 font-bold">Global Scale</strong>
                    Be part of projects that shape the skylines and retail experiences of major cities across the UAE and India.
                  </p>
                  <p>
                    <strong className="text-black block mb-1 font-bold">Growth & Development</strong>
                    We invest in our people with continuous training, clear career paths, and opportunities to lead.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Application Form */}
            <div className="col-span-12 lg:col-span-7">
              {isSubmitted ? (
                <div className="flex flex-col items-start py-12">
                  <div className="text-black mb-6">
                    <CheckCircle className="w-12 h-12 stroke-[1.5]" />
                  </div>
                  <h3 className="font-serif text-3xl font-bold tracking-tight mb-4 text-black">
                    Application Initiated.
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed max-w-md mb-8 font-medium">
                    A Gmail composition window has been prepared with your application details. <strong>Please remember to attach your resume manually before clicking send.</strong> Our HR department will review your profile and reach out if there is a match.
                  </p>
                  <button 
                    onClick={() => {
                      setIsSubmitted(false)
                      setFieldValues({ name: "", email: "", phone: "", position: "", message: "" })
                    }}
                    className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-black hover:text-slate-600 bg-transparent border-none cursor-pointer p-0 font-bold transition-colors"
                  >
                    Submit Another Application
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-10" noValidate>
                  <span className="text-[10px] tracking-widest uppercase font-mono text-slate-900 block border-b border-slate-200 pb-4 font-bold">
                    // CANDIDATE PROFILE
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
                        className="bg-transparent border-b border-slate-300 focus:border-black text-sm py-2 px-0 focus:outline-none transition-colors rounded-none w-full text-black font-semibold"
                      />
                      <label 
                        htmlFor="name" 
                        className={`absolute left-0 transition-all duration-300 origin-left pointer-events-none font-mono uppercase tracking-wider font-bold
                          ${isFieldActive('name') 
                            ? 'top-[-8px] text-[10px] text-black' 
                            : 'top-[16px] text-xs text-slate-500'}`}
                      >
                        Full Name *
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
                        className="bg-transparent border-b border-slate-300 focus:border-black text-sm py-2 px-0 focus:outline-none transition-colors rounded-none w-full text-black font-semibold"
                      />
                      <label 
                        htmlFor="email" 
                        className={`absolute left-0 transition-all duration-300 origin-left pointer-events-none font-mono uppercase tracking-wider font-bold
                          ${isFieldActive('email') 
                            ? 'top-[-8px] text-[10px] text-black' 
                            : 'top-[16px] text-xs text-slate-500'}`}
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
                        className="bg-transparent border-b border-slate-300 focus:border-black text-sm py-2 px-0 focus:outline-none transition-colors rounded-none w-full text-black font-semibold"
                      />
                      <label 
                        htmlFor="phone" 
                        className={`absolute left-0 transition-all duration-300 origin-left pointer-events-none font-mono uppercase tracking-wider font-bold
                          ${isFieldActive('phone') 
                            ? 'top-[-8px] text-[10px] text-black' 
                            : 'top-[16px] text-xs text-slate-500'}`}
                      >
                        Phone / WhatsApp *
                      </label>
                    </div>

                    {/* Position select */}
                    <div className="relative flex flex-col pt-4">
                      <select
                        id="position"
                        name="position"
                        required
                        value={fieldValues.position}
                        onFocus={() => handleFocus('position')}
                        onBlur={() => handleBlur('position')}
                        onChange={(e) => handleChange('position', e.target.value)}
                        className="bg-transparent border-b border-slate-300 focus:border-black text-sm py-2 px-0 focus:outline-none transition-colors rounded-none appearance-none cursor-pointer w-full text-black font-semibold"
                      >
                        {positionOptions.map((opt) => (
                          <option key={opt} value={opt} className="bg-white text-black text-xs font-medium">
                            {opt || ""}
                          </option>
                        ))}
                      </select>
                      <label 
                        htmlFor="position" 
                        className={`absolute left-0 transition-all duration-300 origin-left pointer-events-none font-mono uppercase tracking-wider font-bold
                          ${isFieldActive('position') 
                            ? 'top-[-8px] text-[10px] text-black' 
                            : 'top-[16px] text-xs text-slate-500'}`}
                      >
                        Position Applying For *
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
                      className="bg-transparent border-b border-slate-300 focus:border-black text-sm py-2 px-0 focus:outline-none transition-colors resize-none rounded-none w-full text-black font-semibold"
                    />
                    <label 
                      htmlFor="message" 
                      className={`absolute left-0 transition-all duration-300 origin-left pointer-events-none font-mono uppercase tracking-wider font-bold
                        ${isFieldActive('message') 
                          ? 'top-[-8px] text-[10px] text-black' 
                          : 'top-[22px] text-xs text-slate-500'}`}
                    >
                      Cover Letter / Message
                    </label>
                  </div>
                  
                  <div className="pt-4 border-l-2 border-black pl-4">
                    <p className="text-sm font-semibold text-black mb-1">Important Note</p>
                    <p className="text-xs text-slate-600 font-medium">Clicking submit will open your email client. Please ensure you manually attach your resume before sending.</p>
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
                    className="w-full py-4 border-2 border-black bg-black text-[11px] tracking-widest uppercase font-mono text-white font-bold transition-all duration-300 hover:bg-transparent hover:text-black disabled:opacity-50 rounded-none cursor-pointer"
                  >
                    {isSubmitting ? "INITIATING..." : "PREPARE APPLICATION EMAIL"}
                  </button>
                  
                  <p className="text-[10px] font-mono text-slate-500 text-center uppercase tracking-wider font-semibold">
                    all applicant data is encrypted // equal opportunity employer
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  )
}
