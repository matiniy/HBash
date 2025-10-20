import type { Metadata } from 'next'
import { Inter, Space_Grotesk, Sora } from 'next/font/google'
import './globals.css'

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
    <html lang="en">
      <body className={`${inter.className} ${spaceGrotesk.variable} ${sora.variable}`}>{children}</body>
    </html>
  )
}
