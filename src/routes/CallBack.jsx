import { Auth0ProviderWithNavigate } from "../auth0/Auth0_Provider";
import Call_Back from "../pages/CallBack";
export const callbackRoutes = [
  {
    path: "/callback",
    element: (
      <Auth0ProviderWithNavigate>
        <Call_Back />
      </Auth0ProviderWithNavigate>
    ),
  },
];
