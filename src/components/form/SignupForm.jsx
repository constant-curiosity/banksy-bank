import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import Button from "../UI/Button";
import InputField from "../UI/InputField";
import { emailValidation, passwordValidation } from "./FormValidation";
import { handleFormSubmit } from "../api/SignupAPI";
export default function SignupForm() {
  const form = useForm();
  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = form;

  const password = watch("password");
  const reEnterPassword = watch("reEnterPassword");

  return (
    <>
      //Do not forget this is react router and we need to write an action to
      this when we submit the form.
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="space-y-2"
        method="POST"
      >
        <InputField
          type={"text"}
          label={"Email"}
          htmlFor={"email"}
          aria-label={"Enter your email address"}
          register={{
            ...register("email", emailValidation),
          }}
        />
        {errors.email && (
          <span className={"text-banksyRed"} role="alert" aria-invalid="true">
            {errors.email?.message}
          </span>
        )}

        <InputField
          type={"text"}
          label={"Password"}
          htmlFor={"password"}
          aria-label={"Enter your password"}
          register={{
            ...register("password", passwordValidation),
          }}
        />
        <span className={"text-banksyRed"} role="alert" aria-invalid="true">
          {errors.password?.message}
        </span>
        <span className="block text-sm font-medium text-gray-700">
          Password (Min. 8 characters, including uppercase, lowercase, number,
          and special character)
        </span>
        <InputField
          type={"text"}
          label={"Re-enter Password"}
          htmlFor={"reEnterPassword"}
          aria-label={"Re-enter your password"}
          register={{ ...register("reEnterPassword", { required: true }) }}
        />
        {reEnterPassword !== password && (
          <span className={"text-banksyRed"} role="alert" aria-invalid="true">
            Passwords do not match
          </span>
        )}
        <div>
          <Button
            type={"submit"}
            disabled={!isValid}
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
