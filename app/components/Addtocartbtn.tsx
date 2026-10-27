"use client";

import { useState } from "react";
import type { CartItem } from "@/app/types/cartitem";

type Props = {
  product: Omit<CartItem, "quantity">;
};

export default function AddToCartButton({ product }: Props) {
  const [message, setMessage] = useState("");

  function handleAddToCart() {
    const savedCart = localStorage.getItem("electrohub-cart");

    const cart: CartItem[] = savedCart
      ? JSON.parse(savedCart)
      : [];

    const existingItem = cart.find(
      (item) => item.id === product.id
    );

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("electrohub-cart", JSON.stringify(cart));

    setMessage("Added to cart!");
  }

  return (
    <div className="mt-8">
      <button
        onClick={handleAddToCart}
        className="w-full rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300"
      >
        Add to Cart
      </button>

      {message && (
        <p className="mt-3 text-sm text-green-400">{message}</p>
      )}
    </div>
  );
}
