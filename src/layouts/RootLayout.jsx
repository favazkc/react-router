import { NavLink, Outlet, ScrollRestoration } from "react-router-dom";
import Header from "../components/Header";

export async function loader() { return null; }

export default function RootLayout() {
  const active = ({ isActive }) => (isActive ? "text-blue-600 font-semibold" : "text-gray-700");

  return (
    <div>
      <Header />

      <nav style={{ display: "flex", gap: 12, padding: 16, borderBottom: "1px solid #eee" }}>
        <NavLink to="/" className={active} end>Home</NavLink>
        <NavLink to="/about" className={active}>About</NavLink>
        <NavLink to="/products" className={active}>Products</NavLink>
        <NavLink to="/contact" className={active}>Contact</NavLink>
        <NavLink to="/dashboard" className={active}>Dashboard</NavLink>
      </nav>

      <main style={{ padding: 16 }}>
        <Outlet />
      </main>

      <ScrollRestoration />
    </div>
  );
}