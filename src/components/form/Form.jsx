import { createPortal } from "react-dom";
import { useState } from "react";
import Modal from "../UI/Modal";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import SignupMessage from "./SignupMessage";
import LoginMessage from "./LoginMessage";
import ResetPwdForm from "./resetPwdForm";

export default function Form({ pathname }) {
  const [openModal, setOpenModal] = useState(false);

  const onModalClickHandler = () => setOpenModal(true);
  const modalCloseHandler = () => setOpenModal(false);

  return (
    <>
      {pathname === "/login" ? (
        <LoginForm onModalClickHandler={onModalClickHandler} />
      ) : (
        <SignupForm />
      )}

      {pathname === "/signup" ? (
        <SignupMessage
          className={"mt-5"}
          children={
            "Guest credentials on Log in page, which you allow you to access authorized routes, without having to sign up."
          }
        />
      ) : (
        <LoginMessage
          className={"mt-5"}
          children={"To view authorized routes, without signing up:"}
        />
      )}
      {openModal &&
        createPortal(
          <Modal
            setOpenModal={setOpenModal}
            openModal={openModal}
            onClick={modalCloseHandler}
            ariaLabel={"Password reset modal"}
            ariaDescribedBy={"Modal used to reset the users password"}
            content={<ResetPwdForm modalCloseHandler={modalCloseHandler} />}
          />,
          document.getElementById("modal")
        )}
    </>
  );
}

// import Modal from "../UI/Modal";
// import { createPortal } from "react-dom";
// import { useState } from "react";
// import LoginForm from "./LoginForm";
// import SignupForm from "./SignupForm";
// import SignupMessage from "./SignupMessage";
// import LoginMessage from "./LoginMessage";
// import InputField from "../UI/InputField";
// import Button from "../UI/Button";

// export default function Form({ pathname }) {
//   const [openModal, setOpenModal] = useState(false);

//   const onModalClickHandler = () => setOpenModal(true);
//   const modalCloseHandler = () => setOpenModal(false);

//   return (
//     <>
//       {openModal &&
//         createPortal(
//           <Modal
//             setOpenModal={setOpenModal}
//             openModal={openModal}
//             onClick={modalCloseHandler}
//             ariaLabel={"Password reset modal"}
//             ariaDescribedBy={"Modal used to reset the users password"}
//             content={
//               <form className="space-y-6" action="RestPwd" method="POST">
//                 <InputField
//                   label={"Email address"}
//                   htmlForLabel={"email"}
//                   className={
//                     "block text-sm font-medium leading-6 text-gray-900"
//                   }
//                   type={"email"}
//                   name={"email"}
//                   aria-label={"Email Field"}
//                   aria-describedby={"Email Input Reset Password"}
//                   required
//                 />
//                 <InputField
//                   label={"New Password"}
//                   htmlForLabel={"password"}
//                   className={
//                     "block text-sm font-medium leading-6 text-gray-900"
//                   }
//                   type={"password"}
//                   name={"pwd"}
//                   aria-label={"New password field"}
//                   aria-describedby={"Password input to reset password"}
//                 />
//                 <InputField
//                   label={"Re-enter New Password"}
//                   htmlForLabel={"password"}
//                   className={
//                     "block text-sm font-medium leading-6 text-gray-900"
//                   }
//                   type={"password"}
//                   name={"reenterpassword"}
//                   aria-label={" Re-enter new password field"}
//                   aria-describedby={"Re-enter password input to reset password"}
//                 />

//                 <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
//                   <Button
//                     type={"submit"}
//                     className={
//                       "inline-flex w-full justify-center rounded-md bg-banksyRed px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-banksyHoverRed focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-banksyRed sm:col-start-2"
//                     }
//                     children={"Submit"}
//                   />
//                   <Button
//                     type={"button"}
//                     className={
//                       "mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
//                     }
//                     onClick={modalCloseHandler}
//                     children={"Cancel"}
//                   />
//                 </div>
//               </form>
//             }
//           />,
//           document.getElementById("modal")
//         )}

//       {pathname === "/login" ? (
//         <LoginForm onModalClickHandler={onModalClickHandler} />
//       ) : (
//         <SignupForm />
//       )}

//       {pathname === "/signup" ? (
//         <SignupMessage
//           className={"mt-5"}
//           children={
//             "Guest credentials on Log in page, which you allow you to access authorized routes, without having to sign up."
//           }
//         />
//       ) : (
//         <LoginMessage
//           className={"mt-5"}
//           children={"To view authorized routes, without signing up:"}
//         />
//       )}
//     </>
//   );
// }
