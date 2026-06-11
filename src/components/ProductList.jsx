import ProductCard from "./ProductCard";

/** Props:
 *  - products: array of product objects
 */
export default function ProductList({ products }) {
  return (
    <section
      style={{
        display: "grid",
        gap: 12,
        gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))"
      }}
    >
      {products.map(p => (
        <ProductCard key={p.id} product={p} />
      ))}
    </section>
  );
}