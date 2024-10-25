import IMG from "../../assets/home/Simply-Recipes-City-Chicken-LEAD-1-47cad2a554a64570ae8cca402072d6b4.webp";
import TodayTrending from "../spoonacular/TodayTrending";
const HeroSection = () => {
  return (
    <div className="pt-10 min-h-screen grid grid-cols-1 md:grid-cols-2 gap-3">
      <div className="overflow-clip relative">
        <img src={IMG} alt="" className="w-full h-full object-cover" />
        <div className="absolute top-1/3 pl-5 text-center bg-orange-50 ">
          <p className="text-2xl">
            Relish good food that brings you joy and wellness!{" "}
          </p>
          {/* <h1 className="text-6xl py-5 text-red-700">Welcome Back</h1> */}
        </div>
      </div>
      <div className=" h-[calc(100vh-2.5rem)] overflow-y-auto scrollbar-hide p-10 ">
        <TodayTrending />
      </div>
    </div>
  );
};

export default HeroSection;
