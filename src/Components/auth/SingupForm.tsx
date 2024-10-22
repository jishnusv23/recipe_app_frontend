import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { SignupinitailValues } from "../../types/SingupType";
import { SignUpValidation } from "../../utils/validation/SignupValication";

const SingupForm = () => {
  const handleSubmit = (values: any) => {
    console.log("Form submitted with values:", values);
  };
  return (
    <div>
      <div>
        <h1 className="text-xl font-bold">Login</h1>
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
                Login
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default SingupForm;
