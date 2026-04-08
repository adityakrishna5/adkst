import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'

import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  title: 'Advanced Knowledge Systems Inc. | AI Services, AEM & Tech Consulting',
  description:
    'Advanced Knowledge Systems delivers cutting-edge AI solutions, Adobe Experience Manager web development, and strategic technology consulting to transform your business.',
}

export const viewport: Viewport = {
  themeColor: '#f3f4f7',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
