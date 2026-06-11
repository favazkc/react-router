import { useLoaderData } from "react-router-dom";

export async function loader({ params }) {
  const res = await fetch("/data/products.json");
  if (!res.ok) throw new Response("Failed to load product", { status: 500 });
  const list = await res.json();
  const prod = list.find(p => p.id === params.productId);
  if (!prod) throw new Response("Not found", { status: 404, statusText: "Product not found" });
  return prod;
}

export default function ProductDetail() {
  const p = useLoaderData();
  return (
    <article>
      <h2>{p.name}</h2>
      <p>{p.desc}</p>
      <p><strong>Price:</strong> ₹{p.price}</p>
      <p><strong>Stock:</strong> {p.stock}</p>
    </article>
  );
}