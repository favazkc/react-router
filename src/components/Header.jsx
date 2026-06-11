import CartBadge from "./CartBadge";
import { useSelector } from "react-redux";
import { selectCartCount } from "../store/selectors";

export default function Header() {
  const cartCount = useSelector(selectCartCount);
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
