import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import SearchPage from "../pages/Searchpage";
import ProductPage from "../pages/Productpage";
import HomePage from "../pages/Homepage";
import ShopPage from "../pages/ShopPage";
import Header from "../components/header";
import Footer from "../components/footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Outlet />
        <Footer/>
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
