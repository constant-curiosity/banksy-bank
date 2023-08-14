import InputField from "../UI/InputField";
import Button from "../UI/Button";
export default function SignupForm() {
  return (
    <>
      <form className="space-y-6" action="SignUpForm" method="POST">
        <InputField
          label={"Email"}
          htmlFor={"email"}
          name={"email"}
          type={"email"}
          aria-label={"Enter your email address"}
          required
        />
        <InputField
          label={"Password"}
          htmlFor={"password"}
          name={"password"}
          type={"password"}
          aria-label={"Enter your password"}
        />

        <InputField
          label={"Re-enter Password"}
          htmlFor={"reenter-password"}
          name={"reenter-password"}
          type={"password"}
          aria-label={"Re-enter your password"}
        />
        <div>
          <Button
            type={"submit"}
            className={
              "flex w-full justify-center rounded-md bg-banksyRed px-3 py-1.5 text- font-semibold leading-6 text-white shadow-sm hover:bg-banksyHoverRed focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            }
            aria-label={"Account sign up"}
            children={"Sign Up"}
          />
        </div>
      </form>
    </>
  );
}
