import * as Yup from "yup";

export const LoginValidation = Yup.object({
  email: Yup.string()
    .matches(
      /^[a-zA-Z0-9]{4,}@[a-zA-Z]{2,}\.[a-zA-Z]{2,}$/,
      "Invalid email format, please use abcd@gmail.com format"
    )
    .required("Email is required")
    .matches(/^\S*$/, "Email must not contain spaces"),
  password: Yup.string()
    .min(8, "Password Must be atlest 8 charachter")
    .required("Password is required")
    .matches(/^\S*$/, "Password must not contain spaces"),
});
