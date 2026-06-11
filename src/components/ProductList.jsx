import ProductCard from "./ProductCard";

/**
 * Props:
 *  - products: array of product objects to render
 *  - favoriteIds: Set or array of ids
 *  - onToggleFavorite(id)
 *  - onAddToCart(id)
 */
export default function ProductList({ products, favoriteIds = new Set(), onToggleFavorite, onAddToCart }) {
  const favSet = favoriteIds instanceof Set ? favoriteIds : new Set(favoriteIds);

  return (
    <section
      style={{
        display: "grid",
        gap: 12,
        gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))"
      }}
    >
      {products.map(p => (
        <ProductCard
          key={p.id}
          product={p}
          isFavorite={favSet.has(p.id)}
          onToggleFavorite={onToggleFavorite}
          onAddToCart={onAddToCart}
        />
      ))}
    </section>
  );
}