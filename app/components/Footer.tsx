'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-bold text-lg mb-4 text-pink-400">Information</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-pink-400 text-sm">About</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-pink-400 text-sm">Delivery</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-pink-400 text-sm">Privacy Policy</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-pink-400 text-sm">Terms & Conditions</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4 text-pink-400">Customer Service</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-pink-400 text-sm">Contact Us</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-pink-400 text-sm">Returns</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-pink-400 text-sm">Site Map</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4 text-pink-400">Extras</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-pink-400 text-sm">Bistando</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-pink-400 text-sm">Gift Vouchers</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-pink-400 text-sm">Affiliates</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-pink-400 text-sm">Specials</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4 text-pink-400">My Account</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-pink-400 text-sm">My Account</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-pink-400 text-sm">Order History</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-pink-400 text-sm">Wish List</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-pink-400 text-sm">Newsletters</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-gray-500 text-sm">Powered by OpenCart Global Store © 2013</p>
        </div>
      </div>
    </footer>
  )
}