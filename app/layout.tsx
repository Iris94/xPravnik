import './globals.css'
import type { Metadata } from 'next'
import { Footer } from '@/components'

export const metadata: Metadata = {
  title: 'xPravnik',
  description: 'Vaš Pametni Pravnik',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      {children}
      <Footer />
      </body>
    </html>
  )
}
