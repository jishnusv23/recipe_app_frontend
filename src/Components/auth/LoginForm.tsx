import { ErrorMessage, Field, Form, Formik } from "formik";
import { initialValues } from "../../types/Login";
import { LoginValidation } from "../../utils/validation/LoginValidation";
import { useAppDispatch } from "../../hooks/hooks";
import { LoginAction } from "../../redux/actions/auth/LoginAction";
import { useNavigate } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";
import toast from "react-hot-toast";

const LoginForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleSubmit = async (values: any) => {
    console.log("Form submitted with values:", values);
    try {
      const response = await dispatch(LoginAction(values));
      console.log(
        "🚀 ~ file: LoginForm.tsx:13 ~ handleSubmit ~ response:",
        response
      );
      if(!response.payload.success){
        toast.error(response.payload.message)
      }

    } catch (error: any) {
      console.error("Something wrong in Login Form component", error);
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
            <Form>
              <Field
                type="email"
                name="email"
                placeholder="Email"
                className="w-full px-4 py-2 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:bg-white focus:border-red-500"
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

              <button
                type="submit"
                className="mt-4 w-full bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
              >
                Login
              </button>
            </Form>
          </Formik>
        </div>
        <div className="flex justify-end" onClick={() => navigate("/signup")}>
          <h1 className="text-xl underline hover:text-blue-400">signup</h1>
        </div>
        <GoogleAuth />
      </div>
    </div>
  );
};

export default LoginForm;
