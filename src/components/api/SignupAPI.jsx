import { json } from "react-router-dom";

export async function handleFormSubmit(data) {
  try {
    const url = import.meta.env.VITE_POSTMAN_SIGNUP_API_KEY;

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      throw json(
        {
          message: res.message || "An error occurred while signing up.",
          redirectMessage: res.redirectMessage || "Back to signup",
          link: res.link || "/signup",
        },
        { status: res.status }
      );
    } else {
      return;
    }
  } catch (error) {
    //Research Winston for better error logging
    console.error("Sign up request failed:", error.message);
  }
}
