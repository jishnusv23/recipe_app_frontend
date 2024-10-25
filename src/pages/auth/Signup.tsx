
import SingupForm from "../../Components/auth/SignupForm";
import Header from "../../Components/common/Header";
import IMG from "../../assets/auth/chef-cooking-with-flair-hotel-restaurant-kitchen_1101231-9130.jpg";

const Signup = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
        <div className="flex items-center justify-center p-5 md:p-20">
          <SingupForm />
        </div>
        <div className="relative w-full lg:pt-10">
          <img src={IMG} alt="" className="w-full h-full object-cover" />
        </div>
      </div>
    </>
  );
};

export default Signup;
