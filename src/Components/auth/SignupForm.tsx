import { Field, Form, Formik } from "formik";
import { SignupinitailValues } from "../../types/SignupType";
import { SignUpValidation } from "../../utils/validation/SignupValication";
import GoogleAuth from "./GoogleAuth";
import { useAppDispatch } from "../../hooks/hooks";
import { SignupAction } from "../../redux/actions/auth/SignupAction";
import toast from "react-hot-toast";
import { storeUserData } from "../../redux/slice/userSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SignupForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [loading, setIsloading] = useState(false);
  const [formErrors, setFormErrors] = useState<string[]>([]);

  const handleSubmit = async (values: any, { setSubmitting }: any) => {
    console.log("Form submitted with values:", values);
    try {
      const allData = {
        name: values.name,
        email: values.email,
        password: values.password,
      };
      setIsloading(true);

      const response = await dispatch(SignupAction(allData));
      console.log(
        "🚀 ~ file: SignupForm.tsx:15 ~ handleSubmit ~ response:",
        response
      );
      if (!response.payload.success) {
        toast.error("Please Login");
      } else {
        dispatch(storeUserData(response.payload.data));
      }
      setIsloading(false);
    } catch (error: any) {
      console.error("Something went wrong in signup form", error);
    } finally {
      setIsloading(false);
      setSubmitting(false);
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
            onSubmit={(values, actions) => {
              setFormErrors([]);
              actions.setSubmitting(true);
              handleSubmit(values, actions);
            }}
          >
            {({  handleSubmit }) => (
              <Form
                onSubmit={(e) => {
                  setFormErrors([
                    "Please fill in all required fields correctly.",
                  ]); 
                  handleSubmit(e);
                }}
              >
          
                {formErrors.length > 0 && (
                  <div className="text-red-500 text-sm mb-4">
                    {formErrors.map((error, index) => (
                      <div key={index}>{error}</div>
                    ))}
                  </div>
                )}

                <Field
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="w-full px-4 py-2 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:bg-white focus:border-red-500"
                />

                <Field
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 mt-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:bg-white focus:border-red-500"
                />

                <Field
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="w-full px-4 py-2 mt-4 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:bg-white focus:border-red-500"
                />

                <Field
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  className="w-full px-4 py-2 mt-4 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:bg-white focus:border-red-500"
                />

                <button
                  type="submit"
                  className="mt-4 w-full bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                >
                  {loading ? "Loading..." : "Submit"}
                </button>
              </Form>
            )}
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

export default SignupForm;
