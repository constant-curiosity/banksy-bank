import { AuthenticationGuard } from "../auth0/AuthGuard";
import { Auth0ProviderWithNavigate } from "../auth0/Auth0_Provider";
import Home from "../pages/Home";
import AuthLayout from "../layout/AuthLayout";
import AuthError from "../pages/AuthErrorPage";
import Account from "../pages/Account";
import Transaction from "../pages/Transaction";

export const privateRoutes = [
  {
    path: "/auth",
    element: (
      <Auth0ProviderWithNavigate>
        <AuthLayout />
      </Auth0ProviderWithNavigate>
    ),
    errorElement: <AuthError />,
    children: [
      { index: true, element: <AuthenticationGuard component={Home} /> },
      { path: "home", element: <AuthenticationGuard component={Home} /> },
      { path: "account", element: <AuthenticationGuard component={Account} /> },
      {
        path: "transaction",
        element: <AuthenticationGuard component={Transaction} />,
      },
      { path: "*", element: <AuthenticationGuard component={AuthError} /> },
    ],
  },
];
