import Link from 'next/link'

const footerLinks = [
  { title: 'Shop', links: ['New Arrivals', 'Women', 'Men', 'Sale'] },
  { title: 'Help', links: ['Contact Us', 'Delivery', 'Returns', 'Size Guide'] },
  { title: 'Company', links: ['About', 'Careers', 'Privacy Policy', 'Terms & Conditions'] },
]

export default function Footer() {
  return (
    <footer className="mt-12 bg-gray-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.3fr_repeat(3,1fr)]">
          <div>
            <Link href="/" className="text-2xl font-black tracking-tight text-pink-400">ClothesStore</Link>
            <p className="mt-4 max-w-xs text-sm leading-6 text-gray-400">
              Thoughtful fashion, fresh seasonal edits, and easy everyday style in one place.
            </p>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title}>
              <h2 className="mb-4 font-bold text-white">{section.title}</h2>
              <ul className="space-y-3">
                {section.links.map((label) => (
                  <li key={label}>
                    <Link href="#" className="text-sm text-gray-400 transition hover:text-pink-400">{label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-gray-800 pt-6 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} ClothesStore. All rights reserved.</p>
          <p>Secure checkout · Easy returns · Friendly support</p>
        </div>
      </div>
    </footer>
  )
}
