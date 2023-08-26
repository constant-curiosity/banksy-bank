import { useState } from "react";
import { useForm } from "react-hook-form";
// import { DevTool } from "@hookform/devtools";
import Button from "../UI/Button";
import InputField from "../UI/InputField";
import LoadingCard from "../UI/LoadingCard";
import Image from "../UI/Image";
import { emailValidation, passwordValidation } from "./FormValidation";
import { handleFormSubmit } from "../api/SignupAPI";
import { useNavigate } from "react-router-dom";

export default function SignupForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  console.log([1, 2, 3]);

  const form = useForm();
  const {
    register,
    // control,
    handleSubmit,
    formState: { errors, isValid },
  } = form;

  const onSubmit = async (data) => {
    try {
      setIsSubmitting(true);
      await handleFormSubmit(data);
      navigate("/login");
    } catch (error) {
      setIsSubmitting(false);
      //Research Winston for better error logging
      console.log("Sign up failed on submission:", error.message);
    }
  };
  return (
    <>
      {isSubmitting === true ? (
        <LoadingCard
          image={
            <Image
              src={"/Banksy_Art/Always_Listening.jpg"}
              alt={"Submitting sign up form"}
            />
          }
          children={"Submitting..."}
        />
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
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
            register={{
              ...register("reEnterPassword", {
                required: true,
                validate: (value) =>
                  value === form.watch("password") || "Passwords do not match",
              }),
            }}
          />
          {errors.reEnterPassword && (
            <span className={"text-banksyRed"} role="alert" aria-invalid="true">
              {errors.reEnterPassword?.message}
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
      )}
      {/* <DevTool control={control} /> */}
    </>
  );
}
