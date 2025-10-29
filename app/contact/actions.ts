'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

interface ContactForm {
  name: string
  email: string
  message: string
}

export async function sendEmail(data: ContactForm) {
  try {
    // Validate the data
    if (!data.name || !data.email || !data.message) {
      throw new Error('All fields are required')
    }

    if (!data.email.includes('@')) {
      throw new Error('Invalid email address')
    }

    // Send email using Resend
    const { data: emailData, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // You can customize this after domain verification
      to: 'sachin.rathod.sr904@gmail.com', // Your email address
      replyTo: data.email,
      subject: `Portfolio Contact from ${data.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message.replace(/\n/g, '<br>')}</p>
      `
    })

    if (error) {
      console.error('Error sending email:', error)
      throw new Error('Failed to send message')
    }

    return { success: true }
  } catch (error) {
    console.error('Error sending email:', error)
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Failed to send message' 
    }
  }
}