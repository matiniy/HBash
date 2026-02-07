import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

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
        const resend = new Resend(process.env.RESEND_API_KEY);
        
        const { data, error } = await resend.emails.send({
          from: process.env.RESEND_FROM_EMAIL || 'Contact Form <onboarding@resend.dev>',
          to: recipientEmail,
          subject: subject,
          text: emailBody,
          replyTo: email,
        });
        
        if (error) {
          console.error('Resend API error:', error);
          // In production, return error; in development, log and continue
          if (process.env.NODE_ENV === 'production') {
            return NextResponse.json(
              { error: error.message || 'Failed to send email. Please try again later.' },
              { status: 500 }
            );
          }
          // In development, log error but don't fail
          console.warn('Email sending failed, but continuing in development mode');
        } else {
          emailSent = true;
          console.log('✅ Email sent successfully via Resend');
        }
      } catch (resendError: any) {
        console.error('Resend initialization error:', resendError);
        // In production, return error; in development, log and continue
        if (process.env.NODE_ENV === 'production') {
          return NextResponse.json(
            { error: 'Email service error. Please contact support if this persists.' },
            { status: 500 }
          );
        }
        // In development, log error but don't fail
        console.warn('Email service error, but continuing in development mode');
      }
    }

    // If Resend is not configured or failed, log the email
    if (!emailSent) {
      console.log('\n' + '='.repeat(60));
      console.log('📧 CONTACT FORM SUBMISSION (Logged - Email service not configured)');
      console.log('='.repeat(60));
      console.log(`To: ${recipientEmail}`);
      console.log(`Subject: ${subject}`);
      console.log(`From: ${email}`);
      console.log(`Phone: ${phone || 'Not provided'}`);
      console.log('\nMessage:');
      console.log(message);
      console.log('='.repeat(60) + '\n');
      
      // In production, require email service
      if (process.env.NODE_ENV === 'production') {
        return NextResponse.json(
          { error: 'Email service not configured. Please contact the website administrator.' },
          { status: 500 }
        );
      }
      
      // In development, return success even without email service
      console.log('ℹ️  NOTE: In production, configure RESEND_API_KEY to send emails automatically.\n');
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
