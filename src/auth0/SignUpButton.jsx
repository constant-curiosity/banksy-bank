import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export default function SignupButton({ className }) {
  const { loginWithRedirect } = useAuth0();

  const handleSignUp = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/home",
      },
      authorizationParams: {
        screen_hint: "signup",
      },
    });
  };

  return (
    <Link onClick={handleSignUp} className={className}>
      Sign Up <span aria-hidden="true">&rarr;</span>
    </Link>
  );
}
