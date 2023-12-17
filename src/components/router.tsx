import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import { HomePage } from "./pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/game/1", element: <p> Hey Details </p> },
    ],
  },
]);

export default router;
