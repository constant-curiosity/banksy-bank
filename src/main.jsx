import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Auth0ProviderWithNavigate } from "./auth0/Auth0_Provider";
import { AuthenticationGuard } from "./auth0/AuthGuard";
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
import AccountPage from "./pages/Account";
import Call_Back from "./pages/CallBack";

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
      {
        path: "/account",
        element: <AuthenticationGuard component={AccountPage} />,
      },
    ],
  },
  {
    path: "/callback",
    element: (
      <Auth0ProviderWithNavigate>
        <Call_Back />
      </Auth0ProviderWithNavigate>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
