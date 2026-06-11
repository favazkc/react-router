/**
 * A dumb presentational card.
 * Props:
 *  - product: { id, name, price, stock, desc }
 *  - isFavorite: boolean
 *  - onToggleFavorite(id)
 *  - onAddToCart(id)
 */
export default function ProductCard({ product, isFavorite, onToggleFavorite, onAddToCart }) {
  return (
    <article
      style={{
        border: "1px solid #eee",
        borderRadius: 8,
        padding: 12,
        display: "grid",
        gap: 8
      }}
    >
      <h4 style={{ margin: 0 }}>{product.name}</h4>
      <p style={{ color: "#555", margin: 0 }}>{product.desc}</p>
      <p style={{ margin: 0 }}>
        <strong>₹{product.price}</strong> &nbsp;•&nbsp; Stock: {product.stock}
      </p>

      <div style={{ display: "flex", gap: 8 }}>
        <button onClick={() => onAddToCart?.(product.id)}>Add to Cart</button>
        <button onClick={() => onToggleFavorite?.(product.id)}>
          {isFavorite ? "★ Favorited" : "☆ Favorite"}
        </button>
      </div>
    </article>
  );
}