import { NavLink, Outlet, ScrollRestoration } from "react-router-dom";
 import Header from "../components/Header";
 
export async function loader() {
   return null;
 }
 
export default function RootLayout() {
   const active = ({ isActive }) =>
 	isActive ? "text-blue-600 font-semibold" : "text-gray-700";
 
  return (
<div>
<Header />
 
  	<nav style={{ display: "flex", gap: 12, padding: 16 }}>
<NavLink to="/" end>
       	Home
</NavLink>
 
    	<NavLink to="/about">
       	About
</NavLink>
 
    	<NavLink to="/products">
       	Products
</NavLink>
 
    	<NavLink to="/contact">
       	Contact
</NavLink>
 
    	<NavLink to="/dashboard">
       	Dashboard
</NavLink>
</nav>
 
  	<main style={{ padding: 16 }}>
<Outlet />
</main>
 
  	<ScrollRestoration />
</div>
   );
 }