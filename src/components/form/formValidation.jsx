export const emailValidation = {
  pattern: {
    value:
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "Enter a valid email address",
  },
};

export const passwordValidation = {
  //This needs to be cleaned up to give a better user experience
  validate: {
    minLength: (value) =>
      value.length >= 8 ||
      "Password must be at least 8 characters long, including at least 1 uppercase, 1 lowercase, 1 number and 1 special character",
    specialCharacter: (value) =>
      /[^A-Za-z0-9]/.test(value) ||
      "Password must contain at least one special character",
    number: (value) =>
      /[0-9]/.test(value) || "Password must contain at least one number",
    uppercase: (value) =>
      /[A-Z]/.test(value) ||
      "Password must contain at least one uppercase letter",
    lowercase: (value) =>
      /[a-z]/.test(value) ||
      "Password must contain at least one lowercase letter",
  },
};
