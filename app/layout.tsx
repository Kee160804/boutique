// import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
// import './globals.css'
// import Header from '@/app/components/Header'
// import Footer from '@/app/components/Footer'

// const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'Boutique | Trendy Clothing for Everyone',
//   description: 'Shop the latest trends in fashion at Boutique. Free shipping on orders over $75.',
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         <Header />
//         <main className="min-h-screen pt-16">
//           {children}
//         </main>
//         <Footer />
//       </body>
//     </html>
//   )
// }




// import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
// import './globals.css'
// import Header from '@/app/components/Header'
// import Footer from '@/app/components/Footer'

// const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'ClothesStore | The biggest online store for clothes',
//   description: 'The biggest online store for clothes. Get up to 70% off on all products.',
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         <Header />
//         <main className="min-h-screen pt-16">
//           {children}
//         </main>
//         <Footer />
//       </body>
//     </html>
//   )
// }





import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ClothesStore',
  description: 'ClothesStore',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}