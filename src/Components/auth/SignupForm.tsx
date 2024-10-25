import { ErrorMessage, Field, Form, Formik } from "formik";
// import React from "react";
import { SignupinitailValues } from "../../types/SignupType";
import { SignUpValidation } from "../../utils/validation/SignupValication";
import GoogleAuth from "./GoogleAuth";
import { useAppDispatch } from "../../hooks/hooks";
import { SignupAction } from "../../redux/actions/auth/SignupAction";
// import { LoginAction } from "../../redux/actions/auth/LoginAction";
import toast from "react-hot-toast";
import { storeUserData } from "../../redux/slice/userSlice";
import { useNavigate } from "react-router-dom";

const SingupForm = () => {
  const dispatch = useAppDispatch();
  const navigate=useNavigate()
  const handleSubmit = async (values: any) => {
    console.log("Form submitted with values:", values);
    try {
      const allData = {
        name: values.name,
        email: values.email,
        password: values.password,
      };

      const response = await dispatch(SignupAction(allData));
      console.log(
        "🚀 ~ file: SingupForm.tsx:15 ~ handleSubmit ~ response:",
        response
      );
      if (!response.payload.success) {
        toast.error("Please Login");
      }else{
        dispatch(storeUserData(response.payload.data))
      }
    } catch (error: any) {
      console.error("Something wrong in signup Form ", error);
    }
  };
  return (
    <div>
      <div>
        <h1 className="text-xl font-bold">Signup</h1>
        <div>
          <Formik
            initialValues={SignupinitailValues}
            validationSchema={SignUpValidation}
            onSubmit={handleSubmit}
          >
            <Form>
              <Field
                type="name"
                name="name"
                placeholder="Name"
                className="w-full px-4 py-2 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:bg-white focus:border-red-500"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm mt-1"
              />

              <Field
                type="email"
                name="email"
                placeholder="Email"
                className="w-full px-4 py-2 mt-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:bg-white focus:border-red-500"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm mt-1"
              />

              <Field
                type="password"
                name="password"
                placeholder="Password"
                className="w-full px-4 py-2 mt-4 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:bg-white focus:border-red-500"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
              <Field
                type="confirmPassword"
                name="confirmPassword"
                placeholder="confirmPassword"
                className="w-full px-4 py-2 mt-6 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:bg-white focus:border-red-500"
              />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="text-red-500 text-sm mt-1"
              />

              <button
                type="submit"
                className="mt-4 w-full bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
              >
                Submit
              </button>
            </Form>
          </Formik>
        </div>
        <div className="flex justify-end" onClick={() => navigate("/login")}>
          <h1 className="text-xl underline hover:text-blue-400">Login</h1>
        </div>
        <GoogleAuth />
      </div>
    </div>
  );
};

export default SingupForm;
