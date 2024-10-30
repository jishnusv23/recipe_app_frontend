import { Field, Form, Formik } from "formik";
import { initialValues } from "../../types/Login";
import { LoginValidation } from "../../utils/validation/LoginValidation";
import { useAppDispatch } from "../../hooks/hooks";
import { LoginAction } from "../../redux/actions/auth/LoginAction";
import { useNavigate } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";
import toast from "react-hot-toast";
import { useState } from "react";
import { storeUserData } from "../../redux/slice/userSlice";

const LoginForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formErrors, setFormErrors] = useState<string[]>([]);

  const handleSubmit = async (values: any, { setSubmitting }: any) => {
    setLoading(true);
    console.log("Form submitted with values:", values);
    setFormErrors([]);
    try {
      const response = await dispatch(LoginAction(values));
      console.log(
        "🚀 ~ file: LoginForm.tsx:13 ~ handleSubmit ~ response:",
        response.payload.data.data
      );
      if (!response.payload.success) {
        console.log("_________________", response.payload.message);
        toast.error(response.payload.message);
      } else {
        dispatch(storeUserData(response.payload.data.data));
      }
      setLoading(false);
    } catch (error: any) {
      toast.error("something Wrong Please create new account");
      console.error("Something wrong in Login Form component", error);
    } finally {
      setLoading(false);
      setSubmitting(false);
    }
  };

  return (
    <div>
      <div>
        <h1 className="text-xl font-bold">Login</h1>
        <div>
          <Formik
            initialValues={initialValues}
            validationSchema={LoginValidation}
            onSubmit={handleSubmit}
          >
            {({ handleSubmit }) => (
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
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:bg-white focus:border-red-500"
                />

                <Field
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="w-full px-4 py-2 mt-4 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:bg-white focus:border-red-500"
                />

                <button
                  type="submit"
                  className="mt-4 w-full bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                >
                  {loading ? "Loading..." : "Login"}
                </button>
              </Form>
            )}
          </Formik>
        </div>
        <div className="flex justify-end" onClick={() => navigate("/signup")}>
          <h1 className="text-xl underline hover:text-blue-400">Signup</h1>
        </div>
        <GoogleAuth />
      </div>
    </div>
  );
};

export default LoginForm;
