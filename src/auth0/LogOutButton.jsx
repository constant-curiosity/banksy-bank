import Button from "../components/UI/Button";
import { useAuth0 } from "@auth0/auth0-react";

export default function LogoutButton() {
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
      className="rounded-md bg-banksyRed px-3 py-2 text-lg font-semibold text-white shadow-sm hover:bg-banksyHoverRed"
      type="button"
      aria-label="Sign in with Auth0"
    >
      Log Out
    </Button>
  );
}
