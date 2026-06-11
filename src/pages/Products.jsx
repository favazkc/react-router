import { Link, useLoaderData, Await } from "react-router-dom";
import { Suspense, useMemo, useState } from "react";
import Filters from "../components/Filters";
import ProductList from "../components/ProductList";

export async function loader() {
  const listPromise = fetch("/data/products.json").then(r => {
    if (!r.ok) throw new Response("Failed to load products", { status: 500 });
    return r.json();
  });
  // Simply return the object containing the promise
  return { products: listPromise };
}

export default function Products() {
  const data = useLoaderData();

  // LIFTED STATE (page-level):
  // favorites: Set of product ids
  const [favoriteIds, setFavoriteIds] = useState(() => new Set());
  // cart: Map<productId, qty>
  const [cart, setCart] = useState(() => new Map());
  // filters: query + minPrice
  const [filters, setFilters] = useState({ query: "", minPrice: 0 });

  const cartCount = [...cart.values()].reduce((a, b) => a + b, 0);

  function handleToggleFavorite(id) {
    setFavoriteIds(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  function handleAddToCart(id) {
    setCart(prev => {
      const next = new Map(prev);
      next.set(id, (next.get(id) || 0) + 1);
      return next;
    });
  }

  function handleFiltersChange(nextFilters) {
    setFilters(nextFilters);
  }

  // filter the products according to page-level state
  function applyFilters(list) {
    const q = filters.query.trim().toLowerCase();
    const minP = Number(filters.minPrice) || 0;
    return list.filter(p => {
      const matchesQ = q ? p.name.toLowerCase().includes(q) : true;
      const matchesP = p.price >= minP;
      return matchesQ && matchesP;
    });
  }

  return (
    <div>
      {/* Show page-level derived info */}
      <p style={{ marginTop: 0 }}>
        Favorites: <strong>{favoriteIds.size}</strong> &nbsp;|&nbsp; Cart items: <strong>{cartCount}</strong>
      </p>

      <Filters
        initialQuery=""
        initialMinPrice={0}
        onChange={handleFiltersChange}
      />

      <Suspense fallback={<p>Loading products…</p>}>
        <Await resolve={data.products}>
          {(products) => {
            const filtered = applyFilters(products);
            return (
              <ProductList
                products={filtered}
                favoriteIds={favoriteIds}
                onToggleFavorite={handleToggleFavorite}
                onAddToCart={handleAddToCart}
              />
            );
          }}
        </Await>
      </Suspense>
    </div>
  );
}