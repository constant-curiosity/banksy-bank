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
