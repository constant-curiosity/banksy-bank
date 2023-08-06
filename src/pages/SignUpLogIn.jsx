import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import Form from "../components/Form/Form";
import Image from "../components/UI/Image";
export default function SignUpLogIn() {
  const location = useLocation();
  const pathname = location.pathname;
  const image =
    pathname === "/signup"
      ? "/Banksy_Art/Looking_At_CCTV.jpg"
      : "/Banksy_Art/Profits_Over_People.jpg";
  const alt =
    pathname === "/signup"
      ? "Sign up, What are you looking at"
      : "Log in, Profits over people";
  //This is causing the sideEffect Error
  const title = pathname === "/signup" ? "Sign Up" : "Log In";

  return (
    <>
      <Helmet>
        //This is causing the sideEffect Error
        <title>{title}</title>
      </Helmet>
      <div className="flex min-h-full flex-1">
        <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <h2 className="mt-6 font-Branda-yolq text-5xl font-extrabold  text-gray-900">
                Banksy Bank
              </h2>
            </div>
            <div>
              <h2 className="mt-10 text-2xl font-bold leading-9 tracking-tight text-gray-900">
                {pathname === "/signup" ? "Sign up for an account" : "Log in"}
              </h2>
            </div>
            <div className="mt-10">
              <div>
                <Form pathname={pathname} />
              </div>
              <div className="mt-11">
                <div className="relative">
                  <div
                    className="absolute inset-0 flex items-center"
                    aria-hidden="true"
                  >
                    <div className="w-full border-t border-gray-200" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative hidden w-0 flex-1 lg:block">
          <Image
            //Code the makes images responsive
            className={
              "h-full min-h-screen w-full min-w-screen aspect-w-16 aspect-h-9"
              // "absolute inset-0 h-full w-full object-cover brightness-125 saturate-0"
            }
            src={image}
            alt={alt}
          />
        </div>
      </div>
    </>
  );
}
