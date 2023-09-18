import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export default function SignupButton() {
  const { loginWithRedirect } = useAuth0();

  const handleSignUp = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/about",
      },
      authorizationParams: {
        screen_hint: "signup",
      },
    });
  };

  return (
    <Link
      onClick={handleSignUp}
      className="hidden md:block text-white hover:text-banksyGray"
    >
      Sign Up <span aria-hidden="true">&rarr;</span>
    </Link>
  );
}
