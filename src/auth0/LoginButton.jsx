import Button from "../components/UI/Button";
import { useAuth0 } from "@auth0/auth0-react";

export default function LoginButton() {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/crypto",
      },
    });
  };
  return (
    <Button
      onClick={handleLogin}
      className="rounded-md bg-banksyRed px-3 py-2 text-lg font-semibold text-white shadow-sm hover:bg-banksyHoverRed"
      type="button"
      aria-label="Sign in with Auth0"
    >
      Log In
    </Button>
  );
}
