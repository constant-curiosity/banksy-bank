import { Auth0ProviderWithNavigate } from "../auth0/Auth0_Provider";
import RootLayout from "../layout/RootLayout";
import ErrorPage from "../pages/Error";
import Home from "../pages/Home";
import Crypto, { loader as cryptoLoader } from "../pages/Crypto";
import About from "../pages/About";

export const publicRoutes = [
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
    ],
  },
];
