import { createBrowserRouter } from "react-router-dom";
import RootLayout, { loader as rootLoader } from "./layouts/RootLayout.jsx";
import DashboardLayout from "./layouts/DashboardLayout.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact, { action as contactAction } from "./pages/Contact.jsx";
import Products, { loader as productsLoader } from "./pages/Products.jsx";
import ProductDetail, { loader as productLoader } from "./pages/ProductDetail.jsx";
import Login, { action as loginAction } from "./pages/Login.jsx";
import NotFound from "./pages/NotFound.jsx";
import { requireAuth } from "./utils/auth.js";
 
const router = createBrowserRouter([
  {
	path: "/",
	element: <RootLayout />,
	loader: rootLoader,
	errorElement: <ErrorPage />,
	children: [
  	{ index: true, element: <Home /> },
  	{ path: "about", element: <About /> },
  	{ path: "contact", element: <Contact />, action: contactAction },
  	{ path: "products", element: <Products />, loader: productsLoader },
  	{ path: "products/:productId", element: <ProductDetail />, loader: productLoader },
  	{ path: "login", element: <Login />, action: loginAction },
 
  	{
    	path: "dashboard",
    	element: <DashboardLayout />,
    	loader: async (args) => requireAuth(args.request),
    	children: [
      	{ index: true, element: <div>Select a tab</div> },
      	{ path: "orders", element: <div><h3>Orders</h3></div> },
      	{ path: "settings", element: <div><h3>Settings</h3></div> }
    	]
  	},
 
  	{ path: "*", element: <NotFound /> }
	]
  }
]);
 
export default router;