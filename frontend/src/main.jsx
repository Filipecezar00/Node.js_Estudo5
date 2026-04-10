import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home copy/pages.jsx";
import Cart from "./pages/cart/pages.jsx";
import Profile from "./pages/profile/pages.jsx";
import Auth from "./pages/auth/pages.jsx";
import Plates from "./pages/plates/pages.jsx";

const pages = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/cart", element: <Cart /> },
      { path: "/profile", element: <Profile /> },
      { path: "/auth", element: <Auth /> },
      { path: "/plates", element: <Plates /> },
    ],
  },
]);

creatRoot(document.getElementById("root")).render(<StrictMode></StrictMode>);
