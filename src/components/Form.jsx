import Modal from "../UI/Modal";
import { useState } from "react";

export default function Form({ pathname }) {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      {openModal && <Modal setOpenModal={setOpenModal} openModal={openModal} />}
      <form action="#" method="POST" className="space-y-6">
        <div>
          <label
            htmlFor="email"
            className="block text-md font-medium leading-6 text-gray-900"
          >
            Email address
          </label>
          <div className="mt-3">
            <input
              name="email"
              type="email"
              required
              className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 lg:text-lg"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-md font-medium leading-6 text-gray-900"
          >
            Password
          </label>
          <div className="mt-3">
            <input
              name="password"
              type="password"
              required
              className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 lg:text-lg"
            />
          </div>
        </div>
        {pathname === "/signup" && (
          <div>
            <label
              htmlFor="reenter-password"
              className="block text-md font-medium leading-6 text-gray-900"
            >
              Re-enter Password
            </label>
            <div className="mt-3">
              <input
                name="reenter-password"
                type="password"
                required
                className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 lg:text-lg"
              />
            </div>
          </div>
        )}

        <div className="flex items-center justify-between">
          <div className="mt-5 text-sm leading-6">
            <button
              type="button"
              onClick={() => setOpenModal(true)}
              className="font-semibold text-[#B30000] hover:text-[#FF6666]"
            >
              {pathname === "/signup" ? "" : "Forgot password?"}
            </button>
          </div>
          {/* {openModal && (
            <Modal setOpenModal={setOpenModal} openModal={openModal} />
          )} */}
        </div>
        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-[#B30000] px-3 py-1.5 text- font-semibold leading-6 text-white shadow-sm hover:bg-[#FF6666] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            {pathname === "/signup" ? "Sign Up" : "Log in"}
          </button>
        </div>
      </form>
    </>
  );
}
