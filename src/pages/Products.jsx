import { useLoaderData } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useMemo } from "react";
import Filters from "../components/Filters";
import ProductList from "../components/ProductList";
import { selectFavoritesSet, selectCartCount } from "../store/selectors";

// This is the loader function that your router.jsx is looking for
export async function loader() {
  const res = await fetch("/data/products.json");
  if (!res.ok) {
    throw new Response("Failed to load products", { status: 500 });
  }
  return res.json();
}

export default function Products() {
  // Data is fetched before the component mounts by the route loader
  const products = useLoaderData(); 
  
  const [filters, setFilters] = useState({ query: "", minPrice: 0 });
  const favorites = useSelector(selectFavoritesSet);
  const cartCount = useSelector(selectCartCount);

  const filtered = useMemo(() => {
    const q = filters.query.trim().toLowerCase();
    const minP = Number(filters.minPrice) || 0;
    return products.filter(p => {
      const matchesQ = q ? p.name.toLowerCase().includes(q) : true;
      const matchesP = p.price >= minP;
      return matchesQ && matchesP;
    });
  }, [products, filters]);

  return (
    <div>
      <p style={{ marginTop: 0 }}>
        Favorites: <strong>{favorites.size}</strong> &nbsp;|&nbsp; Cart items: <strong>{cartCount}</strong>
      </p>

      <Filters initialQuery="" initialMinPrice={0} onChange={setFilters} />

      {/* Since the loader handles the fetching, you don't need 'loading' or 'failed' state here */}
      <ProductList products={filtered} />
    </div>
  );
}