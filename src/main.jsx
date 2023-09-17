import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Auth0ProviderWithNavigate } from "./auth0/Auth0_Provider";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import RootLayout from "./pages/RootLayout";
import ErrorPage from "./pages/Error";
import Home from "./pages/Home";
import Crypto, { loader as cryptoLoader } from "./pages/Crypto";
import About from "./pages/About";
import SignUpLogIn from "./pages/SignUpLogIn";
import FormErrorPage from "./pages/FormErrorPage";
import Call_Back from "./pages/Call_Back";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Auth0ProviderWithNavigate>
        <RootLayout />
      </Auth0ProviderWithNavigate>
    ),
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "/error", element: <ErrorPage /> },
      { path: "/crypto", element: <Crypto />, loader: cryptoLoader },
      { path: "/about", element: <About /> },
      { path: "/signup", element: <SignUpLogIn /> },
      { path: "/login", element: <SignUpLogIn /> },
      { path: "/Signup-Login-Error", element: <FormErrorPage /> },
    ],
  },
  {
    path: "/callback",
    element: <Call_Back />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <RootLayout />,
//     errorElement: <ErrorPage />,
//     children: [
//       { index: true, element: <Home /> },
//       { path: "/error", element: <ErrorPage /> },
//       { path: "/crypto", element: <Crypto />, loader: cryptoLoader },
//       { path: "/about", element: <About /> },
//       { path: "/signup", element: <SignUpLogIn /> },
//       { path: "/login", element: <SignUpLogIn /> },
//       { path: "/Signup-Login-Error", element: <FormErrorPage /> },
//     ],
//   },
//   { path: "/callback", element: <Call_Back /> },
// ]);
