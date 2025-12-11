import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { fullName, email, phone, message } = body;

    // Validate required fields
    if (!fullName || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email configuration
    const recipientEmail = 'info@haidehbashash.com';
    const subject = `New Contact Form Submission from ${fullName}`;
    
    // Format email body
    const emailBody = `
New Contact Form Submission

Name: ${fullName}
Email: ${email}
Phone: ${phone || 'Not provided'}

Message:
${message}

---
This email was sent from the Haideh Bashash Realtor website contact form.
    `.trim();

    // Try to use Resend if available, otherwise log for manual setup
    let emailSent = false;
    
    if (process.env.RESEND_API_KEY) {
      try {
        const { Resend } = require('resend');
        const resend = new Resend(process.env.RESEND_API_KEY);
        
        const { data, error } = await resend.emails.send({
          from: process.env.RESEND_FROM_EMAIL || 'Contact Form <onboarding@resend.dev>',
          to: recipientEmail,
          subject: subject,
          text: emailBody,
          replyTo: email,
        });
        
        if (error) {
          console.error('Resend error:', error);
        } else {
          emailSent = true;
        }
      } catch (resendError) {
        console.error('Resend setup error:', resendError);
      }
    }

    // If Resend is not configured, log the email for manual sending or use alternative service
    if (!emailSent) {
      console.log('='.repeat(50));
      console.log('CONTACT FORM SUBMISSION');
      console.log('='.repeat(50));
      console.log(`To: ${recipientEmail}`);
      console.log(`Subject: ${subject}`);
      console.log(`From: ${email}`);
      console.log(`Phone: ${phone || 'Not provided'}`);
      console.log('\nMessage:');
      console.log(message);
      console.log('='.repeat(50));
      
      // In development, we'll still return success but log the email
      // In production, you should set up Resend or another email service
      if (process.env.NODE_ENV === 'production') {
        return NextResponse.json(
          { error: 'Email service not configured. Please set up RESEND_API_KEY.' },
          { status: 500 }
        );
      }
    }
    
    return NextResponse.json(
      { 
        success: true,
        message: 'Email sent successfully',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
