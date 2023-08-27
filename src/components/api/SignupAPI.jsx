export async function signup(data, navigate) {
  try {
    const res = await fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      navigate("/Signup-Login-Error");
      return;
    }

    navigate("/login");
  } catch (error) {
    console.log("Sign up failed:", error.message);
  }
}
