# Email Setup Guide

The contact form is configured to send emails to **info@haidehbashash.com**.

## Setup Instructions

### Option 1: Using Resend (Recommended)

1. **Install Resend:**
   ```bash
   npm install resend
   ```

2. **Get Resend API Key:**
   - Sign up at [resend.com](https://resend.com)
   - Create an API key
   - Add it to your `.env.local` file:
     ```
     RESEND_API_KEY=re_xxxxxxxxxxxxx
     RESEND_FROM_EMAIL=Contact Form <noreply@haidehbashash.com>
     ```

3. **Verify Domain (Optional but Recommended):**
   - Add and verify your domain in Resend dashboard
   - This allows you to send from your own domain

### Option 2: Using Other Email Services

You can modify `/src/app/api/contact/route.ts` to use:
- **SendGrid**: `npm install @sendgrid/mail`
- **Nodemailer**: `npm install nodemailer`
- **AWS SES**: `npm install @aws-sdk/client-ses`

### Current Configuration

- **Recipient Email**: `info@haidehbashash.com`
- **API Route**: `/api/contact`
- **Form Location**: Homepage and Contact page

### Testing

In development mode, emails are logged to the console. Check your server logs to see the email content.

### Production

Make sure to:
1. Set up your email service (Resend recommended)
2. Add API keys to your production environment variables
3. Test the form before going live
4. Monitor email delivery

## Troubleshooting

- **Emails not sending**: Check that `RESEND_API_KEY` is set in your environment variables
- **Check server logs**: The API route logs errors to help debug issues
- **Verify recipient email**: Ensure `info@haidehbashash.com` is correct and accessible
