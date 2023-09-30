import { Helmet } from "react-helmet";
import { NavLink, useRouteError } from "react-router-dom";
import Image from "../components/UI/Image";
export default function Error() {
  const errorDetails = useRouteError();
  const status = errorDetails.status || 404;
  const message = errorDetails.data.message || "Oops! Page not found!";
  const redirectMessage = errorDetails.data.redirectMessage || "Back to home";
  return (
    <>
      <Helmet>
        <title>Error</title>
      </Helmet>
      <main className="relative isolate h-screen overflow-hidden">
        <figure className="aspect-w-16 aspect-h-9">
          <Image
            src={"/Banksy_Art/Cancelled.jpg"}
            alt={"404 Error - Page Not Found"}
            className={
              "h-full min-h-screen w-full min-w-screen aspect-w-16 aspect-h-9"
            }
          />
          <figcaption className="sr-only">
            You dreams have been cancelled
          </figcaption>
        </figure>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50">
          <p className="text-4xl font-semibold leading-8">{status}</p>
          <h1 className="mt-4 text-2xl font-bold tracking-tight sm:text-5xl">
            {message}
          </h1>
          <div className="mt-10 flex justify-center">
            <NavLink
              to={".."}
              className="text-lg hover:text-banksyRed font-semibold leading-7"
            >
              <span aria-hidden="true">&larr;</span> {redirectMessage}
            </NavLink>
          </div>
        </div>
      </main>
    </>
  );
}
