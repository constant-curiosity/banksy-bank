import Form from "../components/Form";
export default function SignUp() {
  return (
    <>
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
                Sign up for an account
              </h2>
            </div>
            <div className="mt-10">
              <div>
                <Form />
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
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="/Banksy_Art/Looking_At_CCTV.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
