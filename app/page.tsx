
"use client";

import { useState } from "react";
import Link from "next/link";
import type { CartItem } from "@/app/types/cartitem";

const products = [
  {
    id: 1,
    name: "Premium Laptop",
    price: 899,
    emoji: "💻",
    category: "Laptops",
    description: "Powerful performance for work and creativity.",
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "Smartphone Pro",
    price: 699,
    emoji: "📱",
    category: "Phones",
    description: "Capture every moment with incredible detail.",
    badge: "Popular",
  },
  {
    id: 3,
    name: "Wireless Headphones",
    price: 149,
    emoji: "🎧",
    category: "Audio",
    description: "Immersive sound for music and everyday life.",
    badge: "Trending",
  },
  {
    id: 4,
    name: "Smart Watch",
    price: 199,
    emoji: "⌚",
    category: "Accessories",
    description: "Stay connected, active, and organized.",
    badge: "",
  },
  {
    id: 5,
    name: "Gaming Laptop",
    price: 1299,
    emoji: "🎮",
    category: "Laptops",
    description: "Serious power for gaming and demanding tasks.",
    badge: "Performance",
  },
  {
    id: 6,
    name: "Wireless Earbuds",
    price: 89,
    emoji: "🎵",
    category: "Audio",
    description: "Compact design with impressive everyday sound.",
    badge: "",
  },
  {
    id: 7,
    name: "Tablet Pro",
    price: 449,
    emoji: "📲",
    category: "Accessories",
    description: "A versatile screen for learning and entertainment.",
    badge: "",
  },
  {
    id: 8,
    name: "Digital Camera",
    price: 549,
    emoji: "📷",
    category: "Accessories",
    description: "Bring your favorite moments into focus.",
    badge: "Featured",
  },
];

const categories = [
  { name: "All", emoji: "✨" },
  { name: "Laptops", emoji: "💻" },
  { name: "Phones", emoji: "📱" },
  { name: "Audio", emoji: "🎧" },
  { name: "Accessories", emoji: "⌚" },
];

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [notice, setNotice] = useState("");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(
          (product) => product.category === selectedCategory
        );

  function addToCart(product: (typeof products)[number]) {
    try {
      const savedCart = localStorage.getItem("electrohub-cart");

      const cart: CartItem[] = savedCart
        ? JSON.parse(savedCart)
        : [];

      const existingItem = cart.find(
        (item) => item.id === product.id
      );

      let updatedCart: CartItem[];

      if (existingItem) {
        updatedCart = cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        updatedCart = [
          ...cart,
          {
            id: product.id,
            name: product.name,
            price: product.price,
            emoji: product.emoji,
            quantity: 1,
          },
        ];
      }

      localStorage.setItem(
        "electrohub-cart",
        JSON.stringify(updatedCart)
      );

      window.dispatchEvent(new Event("cart-updated"));

      setNotice(`${product.name} added to your cart!`);

      window.setTimeout(() => setNotice(""), 2500);
    } catch {
      setNotice("Unable to update your cart. Please try again.");
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Announcement Bar */}
      <div className="bg-blue-600 px-4 py-2 text-center text-sm font-medium">
        Discover your next favorite gadget at ElectroHub.
      </div>

      {/* Hero Section */}
      <section
        id="home"
        className="relative overflow-hidden border-b border-slate-800"
      >
        <div className="pointer-events-none absolute -right-20 top-10 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
          <div className="relative z-10">
            <span className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
              Technology for your everyday life
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Upgrade Your World with{" "}
              <span className="text-blue-500">
                Better Technology.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
              Discover laptops, smartphones, audio devices, and
              everyday tech essentials in one place. Find the
              technology that fits your lifestyle.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="#products"
                className="rounded-lg bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-500"
              >
                Explore Products →
              </Link>

              <Link
                href="/contact"
                className="rounded-lg border border-slate-700 px-6 py-3 font-semibold transition hover:border-blue-500 hover:text-blue-400"
              >
                Contact Us
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-8 border-t border-slate-800 pt-6">
              <div>
                <p className="text-2xl font-bold">8+</p>
                <p className="mt-1 text-sm text-slate-400">
                  Featured products
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold">4</p>
                <p className="mt-1 text-sm text-slate-400">
                  Product categories
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold">1</p>
                <p className="mt-1 text-sm text-slate-400">
                  Shopping destination
                </p>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative flex min-h-80 items-center justify-center">
            <div className="absolute h-72 w-72 rounded-full border border-blue-500/20 sm:h-96 sm:w-96" />
            <div className="absolute h-56 w-56 rounded-full bg-blue-600/10 blur-2xl sm:h-72 sm:w-72" />

            <div className="relative grid w-full max-w-md grid-cols-2 gap-4">
              <div className="flex aspect-square flex-col items-center justify-center rounded-3xl border border-slate-700 bg-slate-900/90 shadow-2xl transition duration-300 hover:-translate-y-2">
                <span className="text-7xl sm:text-8xl">💻</span>
                <p className="mt-4 font-semibold">Computing</p>
                <p className="mt-1 text-sm text-slate-400">
                  Work smarter
                </p>
              </div>

              <div className="mt-10 flex aspect-square flex-col items-center justify-center rounded-3xl border border-slate-700 bg-slate-900/90 shadow-2xl transition duration-300 hover:-translate-y-2">
                <span className="text-7xl sm:text-8xl">📱</span>
                <p className="mt-4 font-semibold">Mobile Tech</p>
                <p className="mt-1 text-sm text-slate-400">
                  Stay connected
                </p>
              </div>

              <div className="flex aspect-square flex-col items-center justify-center rounded-3xl border border-slate-700 bg-slate-900/90 shadow-2xl transition duration-300 hover:-translate-y-2">
                <span className="text-7xl sm:text-8xl">🎧</span>
                <p className="mt-4 font-semibold">Audio</p>
                <p className="mt-1 text-sm text-slate-400">
                  Feel the sound
                </p>
              </div>

              <div className="mt-10 flex aspect-square flex-col items-center justify-center rounded-3xl border border-slate-700 bg-slate-900/90 shadow-2xl transition duration-300 hover:-translate-y-2">
                <span className="text-7xl sm:text-8xl">⌚</span>
                <p className="mt-4 font-semibold">Accessories</p>
                <p className="mt-1 text-sm text-slate-400">
                  Everyday essentials
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="border-b border-slate-800 bg-slate-900/40">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex gap-4">
            <span className="text-3xl">🛍️</span>
            <div>
              <h2 className="font-semibold">Easy Shopping</h2>
              <p className="mt-1 text-sm text-slate-400">
                Browse products and manage your cart with ease.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <span className="text-3xl">🔎</span>
            <div>
              <h2 className="font-semibold">Explore Technology</h2>
              <p className="mt-1 text-sm text-slate-400">
                Discover gadgets across different categories.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <span className="text-3xl">💬</span>
            <div>
              <h2 className="font-semibold">Customer Support</h2>
              <p className="mt-1 text-sm text-slate-400">
                Visit our contact page whenever you need help.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section
        id="products"
        className="mx-auto max-w-7xl px-6 py-20"
      >
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              Find your next favorite
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Explore Our Products
            </h2>

            <p className="mt-3 max-w-xl text-slate-400">
              Browse our featured collection and find the right
              technology for work, entertainment, and everyday life.
            </p>
          </div>

          <Link
            href="/cart"
            className="font-medium text-blue-400 hover:text-blue-300"
          >
            View Shopping Cart →
          </Link>
        </div>

        {/* Category Filters */}
        <div className="mt-8 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category.name}
              type="button"
              onClick={() => setSelectedCategory(category.name)}
              className={`rounded-full border px-5 py-2.5 text-sm font-medium transition ${
                selectedCategory === category.name
                  ? "border-blue-500 bg-blue-600 text-white"
                  : "border-slate-700 bg-slate-900 text-slate-300 hover:border-blue-500 hover:text-white"
              }`}
            >
              <span className="mr-2">{category.emoji}</span>
              {category.name}
            </button>
          ))}
        </div>

       
        {/* Product Grid */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredProducts.map((product) => (
            <article
              key={product.id}
              className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 transition duration-300 hover:-translate-y-1 hover:border-blue-500/60 hover:shadow-xl hover:shadow-blue-950/20"
            >
              <div className="relative flex h-52 items-center justify-center overflow-hidden bg-gradient-to-br from-slate-800 to-slate-950">
                <div className="absolute h-32 w-32 rounded-full bg-blue-500/10 blur-2xl transition group-hover:bg-blue-500/20" />

                {product.badge && (
                  <span className="absolute left-4 top-4 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-300">
                    {product.badge}
                  </span>
                )}

                <span className="relative text-7xl transition duration-300 group-hover:scale-110">
                  {product.emoji}
                </span>
              </div>

              <div className="p-5">
                <p className="text-xs font-medium uppercase tracking-wider text-blue-400">
                  {product.category}
                </p>

                <h3 className="mt-2 text-lg font-semibold text-white">
                  {product.name}
                </h3>

                <p className="mt-2 min-h-10 text-sm leading-5 text-slate-400">
                  {product.description}
                </p>

                <Link
                  href={`/products/${product.id}`}
                  className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-blue-400 transition hover:text-blue-300"
                >
                  View Details →
                </Link>

                <div className="mt-5 flex items-center justify-between gap-3 border-t border-slate-700 pt-4">
                  <p className="text-xl font-bold text-white">
                    ${product.price.toFixed(2)}
                  </p>

                  <button
                    type="button"
                    onClick={() => addToCart(product)}
                    className="rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-500 active:scale-95"
                  >
                    + Add
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <p className="mt-10 text-center text-slate-400">
            No products found in this category.
          </p>
        )}
    </section>
      {/* Call to Action */}
      <section className="px-6 pb-20">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl border border-blue-500/20 bg-gradient-to-r from-blue-950 via-slate-900 to-slate-900 px-6 py-12 sm:px-12 sm:py-16">
          <div className="pointer-events-none absolute -right-10 -top-20 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />

          <div className="relative flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <p className="font-semibold text-blue-400">
                YOUR NEXT UPGRADE STARTS HERE
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Find the technology that moves you forward.
              </h2>

              <p className="mt-4 leading-7 text-slate-400">
                Explore the collection, choose your favorites,
                and build your cart in just a few clicks.
              </p>
            </div>

            <Link
              href="/#products"
              className="inline-flex shrink-0 items-center justify-center rounded-lg bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-500"
            >
              Shop the Collection →
            </Link>
          </div>
        </div>
      </section>

      {/* Cart Notification */}
      {notice && (
        <div
          role="status"
          className="fixed bottom-6 right-6 z-50 max-w-sm rounded-xl border border-slate-700 bg-slate-900 px-5 py-4 text-sm font-medium text-white shadow-2xl"
        >
          {notice}
          {notice.includes("added") && (
            <Link
              href="/cart"
              className="ml-3 text-blue-400 hover:text-blue-300"
            >
              View Cart →
            </Link>
          )}
        </div>
      )}
    </main>
  );
}
