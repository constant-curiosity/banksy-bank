import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import RootLayout from "./pages/RootLayout";
import ErrorPage from "./pages/Error";
import Home from "./pages/Home";
import Crypto from "./pages/Crypto";
import About from "./components/About";
import SignUpLogIn from "./pages/SignUpLogIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "/crypto", element: <Crypto /> },
      { path: "/about", element: <About /> },
      { path: "/signup", element: <SignUpLogIn /> },
      { path: "/login", element: <SignUpLogIn /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
