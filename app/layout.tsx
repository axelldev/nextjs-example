import Navbar from '@/components/Navbar'
import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Providers from './providers'

const inter = Inter({
  weight: ['300', '500', '700'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Next js tutorial',
  description: 'This is a tutorial for Next js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        <main className="px-8 py-20 max-w-6xl mx-auto">
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  )
}
