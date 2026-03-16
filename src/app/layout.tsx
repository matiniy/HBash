import type { Metadata } from 'next'
import { Inter, Space_Grotesk, Sora, Oxygen, Acme, Playfair_Display, Raleway } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/contexts/LanguageContext'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })
const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk'
})
const sora = Sora({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sora'
})
const oxygen = Oxygen({ 
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-oxygen'
})
/* Title font: try --font-acme (current) or --font-playfair for a serif look */
const acme = Acme({ subsets: ['latin'], weight: ['400'], variable: '--font-acme' })
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-playfair'
})
const raleway = Raleway({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
  variable: '--font-raleway'
})

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
};

export const metadata: Metadata = {
  title: 'Haideh Bashash Realtor - Dallas, TX',
  description: 'Professional real estate services in Dallas, TX. Luxury listings, consultation booking, and expert guidance.',
  icons: {
    icon: [
      { url: '/images/Logo/logo.svg', type: 'image/svg+xml' },
      { url: '/images/Logo/logo.png', type: 'image/png' }
    ],
    shortcut: ['/images/Logo/logo.png'],
    apple: ['/images/Logo/logo.png']
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="ltr">
      <body className={`${inter.className} ${spaceGrotesk.variable} ${sora.variable} ${oxygen.variable} ${acme.variable} ${playfair.variable} ${raleway.variable}`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
