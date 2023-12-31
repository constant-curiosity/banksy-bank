import Image from "../components/UI/Image";
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
export default function Home() {
  const { isAuthenticated } = useAuth0();
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div className="overflow-hidden bg-white py-32">
        <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
            <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
              <h2 className="text-4xl font-Branda-yolq tracking-tight text-gray-900 sm:text-6xl">
                Banksy Bank
              </h2>
              <p className="mt-6 text-xl leading-8 text-gray-600">
                Quasi est quaerat. Sit molestiae et. Provident ad dolorem
                occaecati eos iste. Soluta rerum quidem minus ut molestiae velit
                error quod. Excepturi quidem expedita molestias quas.
              </p>
              <p className="mt-6 text-base leading-7 text-gray-600">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat. Quasi aperiam sit non sit neque reprehenderit.
              </p>
              <div className="mt-10 flex">
                {!isAuthenticated && (
                  <NavLink
                    to="signup"
                    className="rounded-md bg-banksyRed px-3.5 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-banksyHoverRed"
                  >
                    Sign Up <span aria-hidden="true">&rarr;</span>
                  </NavLink>
                )}
              </div>
            </div>
            <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
              <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                <Image
                  src="/Banksy_Art/American_Depress.jpg"
                  alt="American depress card, sign your life away"
                  className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
              <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
                <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                  <Image
                    src={"/Banksy_Art/LifeStyle_2.webp"}
                    alt={"Sorry your order for your new life is out of stock"}
                    className={
                      "aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                    }
                  />
                </div>
                <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                  <Image
                    src={"/Banksy_Art/10_Pound_Note.jpg"}
                    alt={"Banksy of England ten pound note"}
                    className={
                      "aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                    }
                  />
                </div>
                <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                  {" "}
                  <Image
                    src={"/Banksy_Art/Love_Over_Money.jpg"}
                    alt={"Man pointing to love over money"}
                    className={
                      "aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
