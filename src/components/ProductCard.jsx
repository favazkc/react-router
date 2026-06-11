import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { toggleFavorite } from "../store/favoritesSlice";
import { selectIsFavorite } from "../store/selectors";

/** Props:
 *  - product: { id, name, price, stock, desc }
 */
export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const isFavorite = useSelector(selectIsFavorite(product.id));

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
        <button onClick={() => dispatch(addToCart(product.id))}>Add to Cart</button>
        <button onClick={() => dispatch(toggleFavorite(product.id))}>
          {isFavorite ? "★ Favorited" : "☆ Favorite"}
        </button>
      </div>
    </article>
  );
}