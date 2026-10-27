import Link from "next/link";

type ProductCardProps = {
  name: string;
  productId: number;
  category: string;
  price: number;
  emoji: string;
};

export default function ProductCard({
  name,
  productId,
  category,
  price,
  emoji,
}: ProductCardProps) {
  return (
    <article className="rounded-xl border border-slate-800 bg-slate-900 p-6">
      <div className="flex h-40 items-center justify-center rounded-lg bg-slate-800 text-6xl">
        {emoji}
      </div>

      <p className="mt-4 text-sm text-cyan-400">{category}</p>

      <h3 className="mt-2 text-xl font-semibold">{name}</h3>

      <p className="mt-3 text-lg font-bold">
        ${price.toFixed(2)}
      </p>

      <Link
     href={`/products/${productId}`}
      className="mt-5 block w-full rounded-lg bg-cyan-400 px-4 py-3 text-center font-semibold text-slate-950 hover:bg-cyan-300"
    >
        View Product
   </Link>
    </article>
  );
}
