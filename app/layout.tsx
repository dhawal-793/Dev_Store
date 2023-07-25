import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'

import './globals.css'

const font = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ecommerce Store',
  description: 'Your All in One Store',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        {children}
      </body>
    </html>
  )
}
