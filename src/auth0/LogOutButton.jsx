import Button from "../components/UI/Button";
import { useAuth0 } from "@auth0/auth0-react";

export default function LogoutButton({ className }) {
  const { logout } = useAuth0();

  const handleLogout = () => {
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });
  };

  return (
    <Button
      onClick={handleLogout}
      className={className}
      type="button"
      aria-label="Sign in with Auth0"
    >
      Log Out
    </Button>
  );
}
