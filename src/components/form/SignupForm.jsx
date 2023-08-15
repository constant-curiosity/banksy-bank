import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import Button from "../UI/Button";
import InputField from "../UI/InputField";
export default function SignupForm() {
  const form = useForm();
  const { register, control, handleSubmit } = form;
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
          register={register}
          aria-label={"Enter your email address"}
          required
        />
        <InputField
          type={"text"}
          label={"Password"}
          htmlFor={"password"}
          register={register}
          aria-label={"Enter your password"}
          required
        />
        <InputField
          type={"text"}
          label={"Re-enter Passwod"}
          htmlFor={"reEnterPassword"}
          register={register}
          aria-label={"Re-enter your password"}
          required
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
