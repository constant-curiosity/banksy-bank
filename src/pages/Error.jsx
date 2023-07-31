import { NavLink } from "react-router-dom";
export default function Error() {
  return (
    <>
      <main className="relative isolate h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="public/Banksy_Art/Cancelled.jpg"
            alt=""
            className="w-full h-full object-cover object-top"
          />
        </div>
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
              className="text-lg hover:text-[#B30000] font-semibold leading-7"
            >
              <span aria-hidden="true">&larr;</span> Back to home
            </NavLink>
          </div>
        </div>
      </main>
    </>
  );
}
