
import AddToCartButton from "@/app/components/Addtocartbtn";
import { products } from "@/app/data/product";

export const instant = false;

export default async function ProductDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <main className="min-h-screen bg-slate-950 p-10 text-white">
        <h1 className="text-2xl font-bold">
          Product not found
        </h1>
        <p className="mt-3 text-slate-400">
          The product you are looking for does not exist.
        </p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-3xl rounded-2xl border border-slate-800 bg-slate-900 p-8">

        {/* Product Image */}
        <div className="flex h-64 items-center justify-center rounded-xl bg-slate-800 text-8xl">
          {product.emoji}
        </div>

        {/* Product Category */}
        <p className="mt-6 text-sm font-medium uppercase tracking-wider text-cyan-400">
          {product.category}
        </p>

        {/* Product Name */}
        <h1 className="mt-2 text-3xl font-bold sm:text-4xl">
          {product.name}
        </h1>

        {/* Product Badge */}
        {product.badge && (
          <span className="mt-4 inline-block rounded-full bg-cyan-400/10 px-3 py-1 text-sm font-medium text-cyan-400">
            {product.badge}
          </span>
        )}

        {/* Product Description */}
        <div className="mt-6 border-t border-slate-800 pt-6">
          <h2 className="text-xl font-semibold">
            Product Description
          </h2>

          <p className="mt-3 leading-7 text-slate-400">
            {product.description}
          </p>
        </div>

        {/* Product Price */}
        <div className="mt-6">
          <p className="text-sm text-slate-400">
            Price
          </p>

          <p className="mt-1 text-3xl font-bold text-white">
            ${product.price.toFixed(2)}
          </p>
        </div>

        {/* Add to Cart Button */}
        <div className="mt-8">
          <AddToCartButton
            product={{
              id: product.id,
              name: product.name,
              price: product.price,
              emoji: product.emoji,
            }}
          />
        </div>

      </div>
    </main>
  );
}
