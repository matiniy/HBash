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
  description: 'Professional real estate services in Dallas, TX. Luxury listings, home buying and selling consultation, and expert local guidance.',
  keywords: [
    'Dallas realtor',
    'Dallas real estate agent',
    'luxury homes Dallas',
    'buy a home in Dallas',
    'sell my home in Dallas',
    'Dallas TX real estate',
    'Texas realtor',
    'listing agent Dallas',
    'buyer agent Dallas',
    'relocation services Dallas',
    'investment properties Dallas',
    'Haideh Bashash Realtor',
    'Iranian realtor in texas',
    'Iranian realtor in Dallas',
    'Iranian agent in Dallas',
    'Dallas Fort Worth agent',
    'Persian realtor Texas',
    'Farsi speaking realtor',
    'مشاور ایرانی در تگزاس',
    'مشاور املاک در دالاس',
    'بهترین مشاور',
    'خرید خانه',
    'فروش خانه',
    'سرمایه گذاری در تگزاس',
    'new construction homes Dallas TX',
    'how to buy a house in Dallas',
    'first-time homebuyer programs Dallas',
    'best Dallas neighborhoods for families',
    'affordable homes in Dallas TX',
    'Dallas down payment assistance first-time',
    'Dallas FHA loans first-time homebuyer',
    'starter homes Dallas first-time buyer',
    'cheapest Dallas neighborhoods first-time',
    'Farsi-speaking Realtor Dallas TX',
    'Dallas suburbs for families',
    'Dallas neighborhoods schools',
    'family neighborhoods Dallas TX',
    'child-friendly Dallas area',
    'Dallas new home communities',
    'Dallas home builders',
    'Dallas new homes for sale',
    'new house developments Dallas',
    'Dallas homebuying process',
    'homebuying steps Dallas TX',
    'first home Dallas tips',
    'buy house Dallas Texas guide',
    'Dallas First-Time Homebuyer Programs and Grants',
    'Dallas DHAP down payment',
    'homebuyer grant Dallas TX',
    'zero down loan Dallas',
    'Dallas home loan assistance',
    'Persian real estate agent Dallas',
    'Dallas Persian realtor',
    'Dallas Iranian realtor',
    'مشاور املاک دالاس فارسی'
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1
    }
  },
  openGraph: {
    title: 'Haideh Bashash Realtor - Dallas, TX',
    description: 'Dallas real estate services for luxury listings, home buying, home selling, and relocation support.',
    type: 'website',
    locale: 'en_US'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Haideh Bashash Realtor - Dallas, TX',
    description: 'Dallas real estate services for luxury listings, home buying, home selling, and relocation support.'
  },
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
