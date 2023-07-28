import Navbar from '@/components/ui/Navbar'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'X-alytics',
  description: 'Discover everything about X.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <head>
        <link
          rel="preload"
          href="/assets/fonts/n27regular/n27-regular-webfont.woff2"
          as="font"
          crossOrigin="anonymous"
          type="font/woff2"
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}
