import IMG_LOGO from "../../assets/auth/Logo.png";

const Header = () => {
  return (
    <div className="flex justify-between lg:px-40 py-3 bg-white shadow-md fixed w-full z-50">
      <div className="flex justify-start">
        <img src={IMG_LOGO} alt="" width={60} height={60} />
        <h1 className="font-bold text-2xl">CookCraft</h1>
      </div>
      <div className="flex items-center gap-5">
        <div className="font-bold text-xl text-red-600">Home</div>
        <div className="font-bold text-xl text-red-600">About</div>
        <div className="font-bold text-xl text-red-600">Login</div>
        <div className="font-bold text-xl text-red-600">Signup</div>
      </div>
    </div>
  );
};

export default Header;
