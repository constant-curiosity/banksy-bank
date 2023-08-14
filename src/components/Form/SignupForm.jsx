import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import Button from "../UI/Button";

export default function SignupForm() {
  const form = useForm();
  const { register, control } = form;
  return (
    <>
      <form className="space-y-2" action="SignUpForm" method="POST">
        <label
          className="block text-sm font-medium text-gray-700"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className=" block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 lg:text-lg"
          type="text"
          id="email"
          {...register("email")}
        />
        <label
          className=" block text-sm font-medium text-gray-700"
          htmlFor="password"
        >
          Password
        </label>
        <input
          className=" block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 lg:text-lg"
          type="text"
          id="password"
          {...register("password")}
        />
        <label
          className=" block text-sm font-medium text-gray-700"
          htmlFor="reenter-password"
        >
          Re-enter Password
        </label>
        <input
          className=" block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 lg:text-lg"
          type="text"
          id="reenter-password"
          {...register("reenter-password")}
        />
        <div>
          <Button
            type={"submit"}
            className={
              " mt-5 flex w-full justify-center rounded-md bg-banksyRed px-3 py-1.5 text- font-semibold leading-6 text-white shadow-sm hover:bg-banksyHoverRed focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            }
            aria-label={"Account sign up"}
            children={"Sign Up"}
          />
        </div>
      </form>
      <DevTool control={control} />
    </>
  );
}
