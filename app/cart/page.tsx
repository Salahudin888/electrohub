"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { CartItem } from "@/app/types/cartitem";

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem("electrohub-cart");

    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  function removeItem(id: number) {
    const updatedCart = cart.filter((item) => item.id !== id);

    setCart(updatedCart);
    localStorage.setItem("electrohub-cart", JSON.stringify(updatedCart));
  }

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold">Your Shopping Cart</h1>

        {cart.length === 0 ? (
          <div className="mt-8 rounded-xl border border-slate-800 p-8 text-center">
            <p className="text-slate-400">Your cart is empty.</p>
            <Link
              href="/"
              className="mt-5 inline-block rounded-lg bg-cyan-400 px-5 py-3 font-semibold text-slate-950"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="mt-8 space-y-4">
              {cart.map((item) => (
                <article
                  key={item.id}
                  className="flex items-center gap-4 rounded-xl border border-slate-800 bg-slate-900 p-5"
                >
                  <div className="text-4xl">{item.emoji}</div>

                  <div className="flex-1">
                    <h2 className="font-semibold">{item.name}</h2>
                    <p className="text-sm text-slate-400">
                      ${item.price.toFixed(2)} × {item.quantity}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="font-bold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>

                    <button
                      onClick={() => removeItem(item.id)}
                      className="mt-2 text-sm text-red-400 hover:text-red-300"
                    >
                      Remove
                    </button>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-8 rounded-xl border border-slate-800 bg-slate-900 p-6">
              <div className="flex items-center justify-between text-xl font-bold">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              <p className="mt-2 text-sm text-slate-400">
                Shipping and taxes are not included.
              </p>

              <button
                disabled
                className="mt-6 w-full cursor-not-allowed rounded-lg bg-slate-700 px-6 py-3 font-semibold text-slate-400"
              >
                Checkout coming soon
              </button>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
