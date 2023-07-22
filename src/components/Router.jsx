import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import ErrorPage from "./ErrorPage";
import ShopPage from "./ShopPage";

const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            errorElement: <ErrorPage />
        },
        {
            path: "shop-page",
            element: <ShopPage />,
        },
    ]);

    return <RouterProvider router={router} />
};

export default Router;