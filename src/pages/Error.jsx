import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import Image from "../components/UI/Image";
export default function Error() {
  return (
    <>
      <Helmet>
        <title>Error</title>
      </Helmet>
      <main className="relative isolate h-screen overflow-hidden">
        {/* <figure className="absolute inset-0"> */}
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
          <p className="text-2xl font-semibold leading-8">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-4 text-base sm:mt-6">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex justify-center">
            <NavLink
              to=".."
              className="text-lg hover:text-banksyRed font-semibold leading-7"
            >
              <span aria-hidden="true">&larr;</span> Back to home
            </NavLink>
          </div>
        </div>
      </main>
    </>
  );
}
