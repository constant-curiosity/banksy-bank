import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import Signup from "../api/SignupAPI";
import Button from "../UI/Button";
import InputField from "../UI/InputField";
import LoadingCard from "../UI/LoadingCard";
import Image from "../UI/Image";
import { signUpSchema } from "../../schema/SignUpSchema";

export default function SignupForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(signUpSchema),
  });

  const handleFormSubmit = async (data) => {
    try {
      setIsSubmitting(true);
      await Signup(data, navigate); // Use the signup API function
      setIsSubmitting(false);
    } catch (error) {
      console.log(error);
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
              ...register("email"),
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
              ...register("password"),
            }}
          />
          <span className={"text-banksyRed"} role="alert" aria-invalid="true">
            {errors.password?.message}
          </span>
          <InputField
            type={"text"}
            label={"Re-enter Password"}
            htmlFor={"confirmPwd"}
            aria-label={"Re-enter your password"}
            register={{
              ...register("confirmPwd"),
            }}
          />
          {errors.confirmPwd && (
            <span className={"text-banksyRed"} role="alert" aria-invalid="true">
              {errors.confirmPwd?.message}
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
    </>
  );
}

// export default function SignupForm() {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const navigate = useNavigate();

//   const form = useForm();
//   const {
//     register,
//     // control,
//     handleSubmit,
//     formState: { errors, isValid },
//   } = form;

//   const handleFormSubmit = async (data) => {
//     try {
//       setIsSubmitting(true);
//       await Signup(data, navigate); // Use the signup API function
//       setIsSubmitting(false);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <>
//       {isSubmitting === true ? (
//         <LoadingCard
//           image={
//             <Image
//               src={"/Banksy_Art/Always_Listening.jpg"}
//               alt={"Submitting sign up form"}
//             />
//           }
//           children={"Submitting..."}
//         />
//       ) : (
//         <form
//           onSubmit={handleSubmit(handleFormSubmit)}
//           className="space-y-2"
//           method="POST"
//         >
//           <InputField
//             type={"text"}
//             label={"Email"}
//             htmlFor={"email"}
//             aria-label={"Enter your email address"}
//             register={{
//               ...register("email", emailValidation),
//             }}
//           />
//           {errors.email && (
//             <span className={"text-banksyRed"} role="alert" aria-invalid="true">
//               {errors.email?.message}
//             </span>
//           )}

//           <InputField
//             type={"text"}
//             label={"Password"}
//             htmlFor={"password"}
//             aria-label={"Enter your password"}
//             register={{
//               ...register("password", passwordValidation),
//             }}
//           />
//           <span className={"text-banksyRed"} role="alert" aria-invalid="true">
//             {errors.password?.message}
//           </span>
//           <span className="block text-sm font-medium text-gray-700">
//             Password (Min. 8 characters, including uppercase, lowercase, number,
//             and special character)
//           </span>
//           <InputField
//             type={"text"}
//             label={"Re-enter Password"}
//             htmlFor={"confirmPwd"}
//             aria-label={"Re-enter your password"}
//             register={{
//               ...register("confirmPwd", {
//                 required: true,
//                 validate: (value) =>
//                   value === form.watch("password") || "Passwords do not match",
//               }),
//             }}
//           />
//           {errors.confirmPwd && (
//             <span className={"text-banksyRed"} role="alert" aria-invalid="true">
//               {errors.confirmPwd?.message}
//             </span>
//           )}
//           <div>
//             <Button
//               type={"submit"}
//               disabled={!isValid}
//               className={
//                 " mt-5 flex w-full justify-center rounded-md bg-banksyRed px-3 py-1.5 text- font-semibold leading-6 text-white shadow-sm hover:bg-banksyHoverRed focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
//               }
//               aria-label={"Account sign up"}
//               children={"Sign Up"}
//             />
//           </div>
//         </form>
//       )}
//       {/* <DevTool control={control} /> */}
//     </>
//   );
// }
