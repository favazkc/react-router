import { NavLink, Outlet, ScrollRestoration, useOutletContext } from "react-router-dom";
import { useState } from "react";
import Header from "../components/Header";

export async function loader() { return null; }

export default function RootLayout() {
  // Cart lives in the layout so all pages can reflect it (Header, etc.)
  const [cart, setCart] = useState(() => new Map());
  const cartCount = [...cart.values()].reduce((a, b) => a + b, 0);

  const active = ({ isActive }) => (isActive ? "text-blue-600 font-semibold" : "text-gray-700");

  return (
    <div>
      {/* Drill cartCount to Header */}
      <Header cartCount={cartCount} />

      <nav style={{ display: "flex", gap: 12, padding: 16, borderBottom: "1px solid #eee" }}>
        <NavLink to="/" className={active} end>Home</NavLink>
        <NavLink to="/about" className={active}>About</NavLink>
        <NavLink to="/products" className={active}>Products</NavLink>
        <NavLink to="/contact" className={active}>Contact</NavLink>
        <NavLink to="/dashboard" className={active}>Dashboard</NavLink>
      </nav>

      <main style={{ padding: 16 }}>
        {/* Provide cart + setter to all child routes via Outlet context */}
        <Outlet context={{ cart, setCart }} />
      </main>

      <ScrollRestoration />
    </div>
  );
}