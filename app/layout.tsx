import type { Metadata } from 'next'
import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'ClothesStore | Fashion for every day',
    template: '%s | ClothesStore',
  },
  description: 'Shop new arrivals, seasonal favorites, and everyday essentials.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <div className="flex min-h-screen flex-col bg-white">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
