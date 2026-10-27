
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { CartItem } from "@/app/types/cartitem";

export default function CheckoutPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    const savedCart = localStorage.getItem("electrohub-cart");

    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch {
        setCart([]);
      }
    }
  }, []);

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (cart.length === 0) {
      alert("Your cart is empty. Please add a product first.");
      return;
    }

    alert(`Thank you, ${fullName}! Your order details are ready.`);
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-3xl font-bold">Checkout</h1>

        <p className="mt-2 text-slate-400">
          Complete your information to place your order.
        </p>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {/* Customer Information */}
          <section className="rounded-xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-semibold">
              Customer Information
            </h2>

            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              <div>
                <label
                  htmlFor="fullName"
                  className="mb-2 block text-sm text-slate-300"
                >
                  Full Name
                </label>

                <input
                  id="fullName"
                  type="text"
                  value={fullName}
                  onChange={(event) => setFullName(event.target.value)}
                  placeholder="Enter your full name"
                  required
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm text-slate-300"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@example.com"
                  required
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm text-slate-300"
                >
                  Phone Number
                </label>

                <input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  placeholder="Enter your phone number"
                  required
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="address"
                  className="mb-2 block text-sm text-slate-300"
                >
                  Delivery Address
                </label>

                <textarea
                  id="address"
                  value={address}
                  onChange={(event) => setAddress(event.target.value)}
                  placeholder="Enter your delivery address"
                  required
                  rows={3}
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Place Order
              </button>
            </form>
          </section>

          {/* Order Summary */}
          <section className="h-fit rounded-xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-semibold">Order Summary</h2>

            {cart.length === 0 ? (
              <div className="mt-6">
                <p className="text-slate-400">
                  Your cart is empty.
                </p>

                <Link
                  href="/"
                  className="mt-4 inline-block text-blue-400 hover:text-blue-300"
                >
                  Browse Products →
                </Link>
              </div>
            ) : (
              <div className="mt-6 space-y-4">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between gap-4 text-sm"
                  >
                    <span className="text-slate-300">
                      {item.name} × {item.quantity}
                    </span>

                    <span className="font-medium">
                      $
                      {(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}

                <div className="flex justify-between border-t border-slate-700 pt-4 text-lg font-bold">
                  <span>Total</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
              </div>
            )}

            <Link
              href="/cart"
              className="mt-6 block text-sm text-blue-400 hover:text-blue-300"
            >
              ← Return to Cart
            </Link>
          </section>
        </div>
      </div>
    </main>
  );
}
