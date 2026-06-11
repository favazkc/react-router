import { Link, useLoaderData } from "react-router-dom";
export async function loader() {
   const response = await fetch("/data/products.json");
 
  if (!response.ok) {
 	throw new Response("Failed to load products", {
   	status: 500,
 	});
   }
 
  return response.json();
 }
 
export default function Products() {
   const products = useLoaderData();
 
  return (
<div>
<h2>Products</h2>
 
  	<ul style={{ lineHeight: 1.8 }}>
     	{products.map((p) => (
<li key={p.id}>
<Link to={`/products/${p.id}`}>
           	{p.name}
</Link>{" "}
         	— ₹{p.price}
</li>
     	))}
</ul>
</div>
   );
 }