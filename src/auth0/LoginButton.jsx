import Button from "../components/UI/Button";
import { useAuth0 } from "@auth0/auth0-react";

export default function LoginButton({ className }) {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/auth/account",
      },
    });
  };
  return (
    <Button
      onClick={handleLogin}
      className={className}
      type="button"
      aria-label="Sign in with Auth0"
    >
      Log In
    </Button>
  );
}
