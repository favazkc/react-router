import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearFavorites } from "../store/favoritesSlice";

/** Props:
 *  - initialQuery?: string
 *  - initialMinPrice?: number
 *  - onChange({ query, minPrice })
 */
export default function Filters({ initialQuery = "", initialMinPrice = 0, onChange }) {
  const [query, setQuery] = useState(initialQuery);
  const [minPrice, setMinPrice] = useState(initialMinPrice);
  const dispatch = useDispatch();

  useEffect(() => {
    onChange?.({ query, minPrice });
  }, [query, minPrice, onChange]);

  return (
    <section style={{ padding: 12, border: "1px solid #eee", borderRadius: 8, marginBottom: 16 }}>
      <h3 style={{ marginTop: 0 }}>Filters</h3>
      <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
        <label>
          Search:&nbsp;
          <input value={query} onChange={e => setQuery(e.target.value)} placeholder="name contains..." />
        </label>
        <label>
          Min Price:&nbsp;
          <input
            type="number"
            min={0}
            value={minPrice}
            onChange={e => setMinPrice(Number(e.target.value || 0))}
            style={{ width: 100 }}
          />
        </label>
        <button onClick={() => dispatch(clearFavorites())}>Clear Favorites</button>
      </div>
    </section>
  );
}