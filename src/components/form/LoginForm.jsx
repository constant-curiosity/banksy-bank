import InputField from "../UI/InputField";
import Button from "../UI/Button";
export default function LoginForm({ onModalClickHandler }) {
  return (
    <>
      <form
        onClick={() => alert("Login_Submit")}
        className="space-y-6"
        action="loginForm"
        method="POST"
      >
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
        <div className="flex items-center justify-between">
          <div className="mt-5 text-sm leading-6">
            <Button
              type={"button"}
              onClick={onModalClickHandler}
              className={
                "font-semibold text-banksyRed hover:text-banksyHoverRed"
              }
              aria-label={"Forgot Password Modal"}
              children={"Forgot password?"}
            />
          </div>
        </div>
        <div>
          <Button
            type={"submit"}
            className={
              "flex w-full justify-center rounded-md bg-banksyRed px-3 py-1.5 text- font-semibold leading-6 text-white shadow-sm hover:bg-banksyHoverRed focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            }
            aria-label={"Log in button"}
            children={"Log in"}
          />
        </div>
      </form>
    </>
  );
}
