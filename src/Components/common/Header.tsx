import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { RootState } from "../../redux";
import toast from "react-hot-toast";
import { useState } from "react";
import { logoutAction } from "../../redux/actions/auth/LogoutAction";
import { IoMdLogOut } from "react-icons/io";

const Header = () => {
  const navigate = useNavigate();
  const { data } = useAppSelector((state: RootState) => state.user);
  const dispatch = useAppDispatch();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const handleLogut = async () => {
    await dispatch(logoutAction());
  };
  return (
    <div className="flex justify-between lg:px-40 py-3 bg-white shadow-md fixed w-full z-50">
      <div className="flex justify-start">
        <h1 className="font-bold text-2xl">CookCraft</h1>
      </div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden">
        <button className="text-red-600 text-xl" onClick={toggleSidebar}>
          ☰
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-md transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden w-64 z-50`}
      >
        <div className="flex flex-col p-4">
          {data ? (
            <>
              <div
                className="font-bold text-xl text-red-600"
                onClick={() => navigate("/")}
              >
                Home
              </div>
              <div
                className="font-bold text-xl text-red-600"
                onClick={() => navigate("/allProducts")}
              >
                Products
              </div>
              <div
                className="font-bold text-xl text-red-600"
                onClick={() => navigate("/profile")}
              >
                Profile
              </div>
              <div
                className="font-bold text-xl text-red-600"
                onClick={handleLogut}
              >
                Logout
              </div>
              <div className="font-bold text-xl text-red-600"> {data.name}</div>
            </>
          ) : (
            <>
              <div
                className="font-bold text-xl text-red-600"
                onClick={() => toast.error("please login")}
              >
                Home
              </div>
              <div
                className="font-bold text-xl text-red-600"
                onClick={() => toast.error("Please Login")}
              >
                Products
              </div>
              <div
                className="font-bold text-xl text-red-600"
                onClick={() => navigate("/login")}
              >
                Login
              </div>
              <div
                className="font-bold text-xl text-red-600"
                onClick={() => navigate("/signup")}
              >
                Signup
              </div>
            </>
          )}
          <button className="mt-4" onClick={toggleSidebar}>
            Close
          </button>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center gap-5">
        {data ? (
          <>
            <div
              className="font-bold text-xl text-red-600"
              onClick={() => navigate("/")}
            >
              Home
            </div>
            <div
              className="font-bold text-xl text-red-600"
              onClick={() => navigate("/allProducts")}
            >
              Products
            </div>
            <div
              className="font-bold text-xl text-red-600"
              onClick={() => navigate("/profile")}
            >
              Profile
            </div>
            <div
              className="font-bold  text-red-600 text-3xl"
              onClick={handleLogut}
            >
              <IoMdLogOut />
            </div>
            <div className="font-bold text-xl text-green-600">
              {" "}
              Dear: {data.name}🍻
            </div>
          </>
        ) : (
          <>
            <div
              className="font-bold text-xl text-red-600"
              onClick={() => toast.error("please login")}
            >
              Home
            </div>
            <div
              className="font-bold text-xl text-red-600"
              onClick={() => toast.error("Please Login")}
            >
              Products
            </div>
            <div
              className="font-bold text-xl text-red-600"
              onClick={() => navigate("/login")}
            >
              Login
            </div>
            <div
              className="font-bold text-xl text-red-600"
              onClick={() => navigate("/signup")}
            >
              Signup
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
