import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import Button from "../UI/Button";
import InputField from "../UI/InputField";
export default function SignupForm() {
  const form = useForm();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = form;

  const onSubmit = (data) => console.log(data);
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-2"
        action="SignUpForm"
        method="POST"
      >
        <InputField
          type={"text"}
          label={"Email"}
          htmlFor={"email"}
          aria-label={"Enter your email address"}
          register={{
            ...register("Email", {
              pattern: {
                value:
                  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Enter a valid email address",
              },
            }),
          }}
        />
        <span className={""}>{errors.Email?.message}</span>
        <InputField
          type={"text"}
          label={"Password"}
          htmlFor={"password"}
          aria-label={"Enter your password"}
          register={{
            ...register("Password", {
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                message:
                  "Password must be a min of 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character",
              },
            }),
          }}
        />
        <span className={""}>{errors.Password?.message}</span>
        <InputField
          type={"text"}
          label={"Re-enter Password"}
          htmlFor={"reEnterPassword"}
          aria-label={"Re-enter your password"}
          register={{ ...register("Re-enter Password", { required: true }) }}
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

// {isValid ? (
//   <Button
//     type="submit"
//     className="mt-5 flex w-full justify-center rounded-md px-3 py-1.5 font-semibold leading-6 text-white shadow-sm hover:bg-banksyHoverRed bg-banksyRed focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
//     aria-label="Account sign up"
//   >
//     Sign Up
//   </Button>
// ) : (
//   <Button
//     type="submit"
//     disabled
//     className="mt-5 flex w-full justify-center rounded-md px-3 py-1.5 font-semibold leading-6 text-white shadow-sm bg-banksyHoverRed cursor-not-allowed focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
//     aria-label="Account sign up"
//   >
//     Sign Up
//   </Button>
// )}

// (includesNumber = /[0-9]/.test(password1)),
//   (includesLowerCase = /[a-z]/.test(password1)),
//   (includesUpperCase = /[A-Z]/.test(password1)),
//   (includesSpecialCharacters =
//     /[\s~`!@#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?()\._]/.test(password1));
