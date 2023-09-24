import { withAuthenticationRequired } from "@auth0/auth0-react";
// import LoadingPage from "../pages/Loading";
// import Call_Back from "../pages/CallBack";
import Image from "../components/UI/Image";

export const AuthenticationGuard = ({ component }) => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => (
      <div className="page-layout">
        <Image
          src={"/Banksy_Art/Lifestyle_1.jpg"}
          alt={"Page Loading..."}
          className={
            "h-full min-h-screen w-full min-w-screen aspect-w-16 aspect-h-9"
          }
        />
      </div>
    ),
  });

  return <Component />;
};
