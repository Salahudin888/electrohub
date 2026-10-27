
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4">

        {/* Brand */}
        <div>
          <Link
            href="/"
            className="text-2xl font-bold text-white"
          >
            Electro<span className="text-blue-500">Hub</span>
          </Link>

          <p className="mt-4 max-w-xs text-sm leading-6 text-slate-400">
            Your destination for modern electronics,
            quality products, and a better shopping experience.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="mb-4 font-semibold text-white">
            Quick Links
          </h2>

          <ul className="space-y-3 text-sm">
            <li>
              <Link href="/" className="hover:text-blue-400">
                Home
              </Link>
            </li>

            <li>
              <Link href="/" className="hover:text-blue-400">
                Products
              </Link>
            </li>

            <li>
              <Link href="/cart" className="hover:text-blue-400">
                Shopping Cart
              </Link>
            </li>

            <li>
              <Link href="/contact" className="hover:text-blue-400">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h2 className="mb-4 font-semibold text-white">
            Customer Service
          </h2>

          <ul className="space-y-3 text-sm">
            <li>
              <Link href="/checkout" className="hover:text-blue-400">
                Checkout
              </Link>
            </li>

            <li>
              <Link href="/contact" className="hover:text-blue-400">
                Help & Support
              </Link>
            </li>

            <li>
              <Link href="/contact" className="hover:text-blue-400">
                Returns & Questions
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="mb-4 font-semibold text-white">
            Get in Touch
          </h2>

          <ul className="space-y-3 text-sm text-slate-400">
            <li>Email: support@electrohub.com</li>
            <li>Location: Ethiopia</li>
          </ul>

          <Link
            href="/contact"
            className="mt-5 inline-block rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-slate-800 px-6 py-5">
        <p className="text-center text-sm text-slate-500">
          &copy; 2026 ElectroHub. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
