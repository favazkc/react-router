import { NavLink, Outlet } from "react-router-dom";

export default function DashboardLayout() {
  const active = ({ isActive }) => (isActive ? "text-blue-600 font-semibold" : "text-gray-700");

  return (
    <div>
      <h2 style={{ fontSize: 22, marginBottom: 10 }}>Dashboard</h2>
      <nav style={{ display: "flex", gap: 12, marginBottom: 16 }}>
        <NavLink to="orders" className={active}>Orders</NavLink>
        <NavLink to="settings" className={active}>Settings</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}