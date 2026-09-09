'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

/* ─── Main Slider Slides ─────────────────────────────────────────── */
const slides = [
  {
    title: "SALE",
    subtitle: "GET UP TO 70% OFF ON ALL PRODUCTS",
    description: "Limited time offer on selected items",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1400&h=560&fit=crop",
    titleColor: "#e91e8c",
    ctaLabel: "Shop Now",
    href: "/sale",
  },
  {
    title: "NEW ARRIVALS",
    subtitle: "Discover the latest trends",
    description: "The new-season collection is here",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=1400&h=560&fit=crop",
    titleColor: "#e91e8c",
    ctaLabel: "Explore Now",
    href: "/new-arrivals",
  },
  {
    title: "WOMEN'S FASHION",
    subtitle: "Trendy styles for every occasion",
    description: "Up to 50% off on selected items",
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=1400&h=560&fit=crop",
    titleColor: "#e91e8c",
    ctaLabel: "Shop Collection",
    href: "/womens",
  },
  {
    title: "MEN'S COLLECTION",
    subtitle: "Fresh looks for the season",
    description: "Shop the latest arrivals",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=1400&h=560&fit=crop",
    titleColor: "#e91e8c",
    ctaLabel: "Shop Men's",
    href: "/mens",
  },
]

/* ─── Bottom Promo Banners ───────────────────────────────────────── */
const promoBanners = [
  {
    title: "BLOUSES",
    subtitle: "& SHIRTS",
    image: "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=600&h=300&fit=crop",
    titleColor: "#e91e8c",
    type: "image" as const,
  },
  {
    title: "PANTIES",
    subtitle: "& BRAS",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=600&h=300&fit=crop",
    titleColor: "#e91e8c",
    type: "image" as const,
  },
  {
    title: "FREE SHIPPING",
    subtitle: "ON ORDERS OVER $99",
    description: "This offer is valid on all our store items.",
    image: null,
    bgColor: "#2b2b2b",
    titleColor: "#e91e8c",
    type: "dark" as const,
  },
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

  useEffect(() => {
    if (!isHovered) {
      timerRef.current = setInterval(nextSlide, 5000)
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [isHovered])

  const slide = slides[currentSlide]

  return (
    <section className="w-full pt-4">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ── Main Hero Slider ── */}
        <div
          className="relative rounded-xl overflow-hidden shadow-lg"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Full photo — no color overlay */}
          <div className="relative h-[420px] w-full md:h-[500px]">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              sizes="(min-width: 1280px) 1280px, 100vw"
              className="object-cover object-top transition-all duration-700"
              priority
            />

            {/* Only a very subtle right-side fade so text is readable */}
            <div className="absolute inset-0 bg-gradient-to-l from-white/70 via-white/10 to-transparent" />
          </div>

          {/* Text block — right-aligned, floating over the image */}
          <div className="absolute inset-0 z-10 flex flex-col items-end justify-center overflow-hidden px-8 text-right md:px-14">
            <div className="w-[58%] min-w-[210px] max-w-[380px] sm:w-[45%]">
              <h2
                className="text-4xl md:text-5xl font-black leading-tight mb-2 tracking-tight break-words"
                style={{ color: slide.titleColor }}
              >
                {slide.title}
              </h2>
              <p className="text-xs md:text-sm font-semibold text-gray-800 uppercase tracking-widest mb-1 leading-snug">
                {slide.subtitle}
              </p>
              <p className="text-xs text-gray-600 mb-5">
                {slide.description}
              </p>
              <Link
                href={slide.href}
                className="inline-block bg-gray-900 text-white text-xs font-bold uppercase tracking-widest px-6 py-3 rounded-full hover:bg-pink-600 transition-all duration-300 hover:scale-105"
              >
                {slide.ctaLabel} →
              </Link>
            </div>
          </div>

          {/* Prev / Next Arrows */}
          <button
            onClick={prevSlide}
            aria-label="Previous slide"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow transition-all hover:scale-110 z-20"
          >
            <FiChevronLeft size={20} className="text-gray-700" />
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next slide"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow transition-all hover:scale-110 z-20"
          >
            <FiChevronRight size={20} className="text-gray-700" />
          </button>

          {/* Dot Indicators */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className="h-2 rounded-full transition-all duration-300"
                style={{
                  width: currentSlide === idx ? '1.75rem' : '0.5rem',
                  backgroundColor: currentSlide === idx ? '#e91e8c' : '#d1d5db',
                }}
              />
            ))}
          </div>
        </div>

        {/* ── Bottom Promo Banners (3-column) ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mt-2 rounded-xl overflow-hidden shadow-md">
          {promoBanners.map((banner, idx) => (
            <div
              key={idx}
              className="relative h-[180px] md:h-[200px] overflow-hidden cursor-pointer group"
              style={banner.type === 'dark' ? { backgroundColor: banner.bgColor } : {}}
            >
              {/* Image banners */}
              {banner.type === 'image' && banner.image && (
                <>
                  <Image
                    src={banner.image}
                    alt={banner.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Subtle left fade for text */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/10 to-transparent" />
                </>
              )}

              {/* Text overlay */}
              <div className="absolute inset-0 flex flex-col justify-center pl-6 z-10">
                <span
                  className="text-2xl md:text-3xl font-black leading-tight"
                  style={{ color: banner.titleColor }}
                >
                  {banner.title}
                </span>
                <span
                  className={`text-sm font-semibold uppercase tracking-widest ${
                    banner.type === 'dark' ? 'text-white' : 'text-gray-800'
                  }`}
                >
                  {banner.subtitle}
                </span>
                {banner.description && (
                  <p className="text-xs text-gray-400 mt-1 max-w-[180px]">
                    {banner.description}
                  </p>
                )}
              </div>

              {/* Hover border highlight */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-pink-400 transition-all duration-300 z-20 pointer-events-none" />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
