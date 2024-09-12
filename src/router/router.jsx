import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import SearchPage from "../pages/Searchpage";
import ProductPage from "../pages/Productpage";
import HomePage from "../pages/Homepage";
import ShopPage from "../pages/ShopPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <h1>header</h1>
        <Outlet />
        <h1>footer</h1>
      </>
    ),
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/search", element: <SearchPage /> },
      { path: "/products/:productId", element: <ProductPage /> },
      { path: "/shops/:shopId", element: <ShopPage /> },
    ],
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
