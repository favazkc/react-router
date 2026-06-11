import CartBadge from "./CartBadge";

export default function Header({ cartCount = 0 }) {
  return (
    <header style={{ padding: 16, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <div>
        <h1 style={{ fontSize: 28, margin: 0 }}>ShopSmart</h1>
        <p style={{ color: "#666", margin: 0 }}>Learn React Router with a real mini-shop.</p>
      </div>
      <CartBadge count={cartCount} />
    </header>
  );
}