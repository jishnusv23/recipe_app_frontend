// import "./App.css";
import {
  Navigate,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
// import AllProducts from "./Components/Home/AllProducts";

// import LandingPage from "./pages/common/LandingPage";

// import Signup from "./pages/auth/Signup";

import Login from "./pages/auth/Login";
import { useSelector } from "react-redux";
import { RootState } from "./redux";
import LandingPage from "./pages/common/LandingPage";
import Signup from "./pages/auth/Signup";
import AllProducts from "./Components/Home/AllProducts";
import { useEffect } from "react";
import { useAppDispatch } from "./hooks/hooks";
import { getUserData } from "./redux/actions/auth/getUserData";
import Wishlist from "./pages/common/Wishlist";
import Details from "./Components/spoonacular/Details";

function App() {
  const { data } = useSelector((state: RootState) => state.user);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (!data) {
      dispatch(getUserData());
    }
  }, [data, dispatch]);
  return (
    <>
      {/* <Login /> */}
      {/* <Signup /> */}
      {/* <LandingPage /> */}
      {/* <AllProducts /> */}
      <Router>
        <Routes>
          <Route
            path="/"
            element={data ? <LandingPage /> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={!data ? <Login /> : <Navigate to="/" />}
          />
          <Route
            path="/signup"
            element={!data ? <Signup /> : <Navigate to="/" />}
          />
          <Route path="/allProducts" element={<AllProducts />} />
          <Route
            path="/profile"
            element={data ? <Wishlist /> : <Navigate to="/" />}
          />
          <Route path="/productDetail/:id" element={<Details />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
