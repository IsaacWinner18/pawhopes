import Link from "next/link"
import { Facebook, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  return (
    (<footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-2">Paw Hope Rescue</h3>
            <p className="text-sm">Give them hope, one paw at a time</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm hover:underline">Home</Link></li>
              <li><Link href="#gallery" className="text-sm hover:underline">Our Dogs</Link></li>
              <li><Link href="#how-donations-help" className="text-sm hover:underline">How We Help</Link></li>
              <li><Link href="#" className="text-sm hover:underline">Donate</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-teal-400"><Facebook size={24} /></Link>
              <Link href="#" className="hover:text-teal-400"><Twitter size={24} /></Link>
              <Link href="#" className="hover:text-teal-400"><Instagram size={24} /></Link>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">Newsletter</h4>
            <p className="text-sm mb-2">Stay updated with our latest rescues and events</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-3 py-2 text-gray-700 bg-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-teal-400" />
              <button
                type="submit"
                className="px-4 py-2 bg-teal-500 text-white rounded-r-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Paw Hope Rescue. All rights reserved.</p>
          <div className="mt-2">
            <Link href="#" className="hover:underline">Privacy Policy</Link> | <Link href="#" className="hover:underline">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>)
  );
}

