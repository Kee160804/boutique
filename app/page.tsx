import Header from '@/app/components/Header'
import Hero from '@/app/components/Hero'
import ProductSection from '@/app/components/ProductSection'
import Footer from '@/app/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ProductSection />
      <Footer />
    </div>
  )
}