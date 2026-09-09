import Link from 'next/link'

const categories = [
  { label: 'Women', href: '/womens' },
  { label: 'Men', href: '/mens' },
  { label: 'Dresses', href: '/dresses' },
  { label: 'New Arrivals', href: '/new-arrivals' },
  { label: 'Sale', href: '/sale' },
]

export default function Sidebar() {
  return (
    <aside className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
      <h2 className="mb-4 text-xl font-black text-gray-900">Categories</h2>
      <ul className="space-y-1">
        {categories.map((category) => (
          <li key={category.href}>
            <Link href={category.href} className="block rounded-lg px-3 py-2 text-gray-600 transition hover:bg-pink-50 hover:text-pink-600">
              {category.label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  )
}
