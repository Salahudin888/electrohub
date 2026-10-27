
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { CartItem } from "@/app/types/cartitem";

export default function Navbar() {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    function updateCartCount() {
      const savedCart = localStorage.getItem("electrohub-cart");

      if (savedCart) {
        try {
          const cart: CartItem[] = JSON.parse(savedCart);

          const count = cart.reduce(
            (total, item) => total + item.quantity,
            0
          );

          setCartCount(count);
        } catch {
          setCartCount(0);
        }
      } else {
        setCartCount(0);
      }
    }

    updateCartCount();

    window.addEventListener("storage", updateCartCount);

    return () => {
      window.removeEventListener("storage", updateCartCount);
    };
  }, []);

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/95 text-white backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-tight">
          Electro<span className="text-blue-500">Hub</span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-5 text-sm font-medium text-slate-300 sm:gap-7">
          <Link
            href="/"
            className="transition hover:text-blue-400"
          >
            Home
          </Link>

          <Link
            href="/#products"
            className="transition hover:text-blue-400"
          >
            Products
          </Link>

          <Link
            href="/contact"
            className="transition hover:text-blue-400"
          >
            Contact
          </Link>

          {/* Cart Link */}
          <Link
            href="/cart"
            className="relative flex items-center gap-2 rounded-lg bg-blue-600 px-3 py-2 text-white transition hover:bg-blue-700"
          >
            <span aria-hidden="true">🛒</span>
            <span>Cart</span>

            {cartCount > 0 && (
              <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-white px-1 text-xs font-bold text-blue-700">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}
