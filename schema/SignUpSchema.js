import { z } from "zod";

export const signUpSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(10, "Password must be 10 characters"),
    confirmPwd: z.string(),
  })
  .refine((data) => data.password === data.confirmPwd, {
    message: "Password must match.",
    path: ["confirmPwd"],
  });
