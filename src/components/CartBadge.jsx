export default function CartBadge({ count = 0 }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "4px 10px",
        borderRadius: 999,
        background: "#f5f5f5",
        fontSize: 13
      }}
      title="Items in cart"
    >
      🛒 <strong>{count}</strong>
    </span>
  );
}