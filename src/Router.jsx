import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import { lazy, Suspense } from "react";

//lazy loading components

const Home = lazy(() => import("./components/Home"));
const ProductList = lazy(() => import("./components/ProductList"));
const ProductDetails = lazy(() => import("./components/ProductDetails"));
const Cart = lazy(() => import("./components/Cart"));
const Checkout = lazy(() => import("./components/Checkout"));
const NoFound = lazy(() => import("./components/NotFound"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "products",
        element: <ProductList />,
      },
      {
        path: "products/:id",
        element: <ProductDetails />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
    ],
  },
  {
    path: "*",
    element: <NoFound />,
  },
]);
function Loading() {
  return (
    <div className="loading-page">
      <div className="loader"></div>
      <h2>Loading....</h2>
    </div>
  );
}

export default router;
