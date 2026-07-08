import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const TO_EMAIL = process.env.CAREERS_TO_EMAIL ?? process.env.CONTACT_TO_EMAIL ?? 'sales@az-tech.ae'
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL ?? 'enquiries@az-tech.ae'

function escapeHtml(value: unknown) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

export async function POST(req: NextRequest) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    
    const formData = await req.formData()
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const phone = formData.get('phone') as string
    const position = formData.get('position') as string
    const message = formData.get('message') as string
    const resume = formData.get('resume') as File | null

    // Basic server-side validation
    if (!name || !email || !phone || !position) {
      return NextResponse.json(
        { error: 'Please fill in all required fields.' },
        { status: 400 }
      )
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailPattern.test(email)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 })
    }

    const safeName = escapeHtml(name)
    const safeEmail = escapeHtml(email)
    const safePhone = escapeHtml(phone)
    const safePosition = escapeHtml(position)
    const safeMessage = escapeHtml(message).replace(/\n/g, '<br/>')

    let attachments = []
    
    if (resume) {
      // Validate file size (e.g., max 10MB)
      if (resume.size > 10 * 1024 * 1024) {
        return NextResponse.json(
          { error: 'Resume file is too large. Maximum size is 10MB.' },
          { status: 400 }
        )
      }
      
      const buffer = Buffer.from(await resume.arrayBuffer())
      attachments.push({
        filename: resume.name,
        content: buffer
      })
    }

    const { error } = await resend.emails.send({
      from: `Aztech Careers <${FROM_EMAIL}>`,
      to: [TO_EMAIL],
      replyTo: email,
      subject: `New Career Application: ${position} - ${name}`,
      attachments,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9f9f9; border-radius: 8px; overflow: hidden;">
          <div style="background: #0a1628; padding: 24px 32px;">
            <h1 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 700;">
              AZTECH <span style="color: #c9a84c; font-size: 14px; font-weight: 600;">LED</span>
            </h1>
            <p style="color: #8899aa; margin: 4px 0 0; font-size: 13px;">New Job Application Received</p>
          </div>

          <div style="padding: 32px; background: #ffffff;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666; font-size: 13px; width: 35%;">Full Name</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #111; font-size: 14px; font-weight: 600;">${safeName}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666; font-size: 13px;">Email</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-size: 14px;"><a href="mailto:${safeEmail}" style="color: #0a4fd6;">${safeEmail}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666; font-size: 13px;">Phone / WhatsApp</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #111; font-size: 14px;"><a href="tel:${safePhone}" style="color: #0a4fd6;">${safePhone}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666; font-size: 13px;">Position Applied For</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #111; font-size: 14px; font-weight: 600;">${safePosition}</td>
              </tr>
              ${message ? `
              <tr>
                <td style="padding: 10px 0; color: #666; font-size: 13px; vertical-align: top; padding-top: 16px;">Cover Letter / Message</td>
                <td style="padding: 10px 0; color: #111; font-size: 14px; padding-top: 16px; line-height: 1.6;">${safeMessage}</td>
              </tr>` : ''}
              <tr>
                <td style="padding: 10px 0; color: #666; font-size: 13px; vertical-align: top; padding-top: 16px;">Resume Attached</td>
                <td style="padding: 10px 0; color: #111; font-size: 14px; padding-top: 16px; line-height: 1.6;">${resume ? 'Yes' : 'No'}</td>
              </tr>
            </table>
          </div>

          <div style="padding: 20px 32px; background: #f0f4f8; border-top: 1px solid #e2e8f0;">
            <p style="margin: 0; font-size: 12px; color: #888;">
              This application was submitted via the Aztech LED website career form.<br/>
              Reply directly to this email to reach <strong>${safeName}</strong>.
            </p>
          </div>
        </div>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send application. Please try again or email us directly.' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (err) {
    console.error('Careers API error:', err)
    return NextResponse.json(
      { error: 'Server error. Please try again later.' },
      { status: 500 }
    )
  }
}
