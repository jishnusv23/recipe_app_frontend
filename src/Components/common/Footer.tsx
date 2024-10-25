// import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white py-10 gap-5 px-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col">
          <h2 className="text-3xl font-bold">CookCraft</h2>
          <p className="mt-4">Delicious recipes to explore every day!</p>
          <div className="mt-auto">
            <input
              type="email"
              placeholder="Subscribe for updates"
              className="mt-4 p-2 rounded w-full text-black"
            />
            <button className="mt-2 p-2 bg-red-600 rounded w-full hover:bg-red-700">
              Subscribe
            </button>
          </div>
        </div>
        <div className="flex flex-col space-y-4 md:space-y-6">
          <h3 className="text-xl font-semibold">Explore</h3>
          <a href="#" className="hover:underline">
            Features
          </a>
          <a href="#" className="hover:underline">
            About Us
          </a>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Contact
          </a>
        </div>
        <div className="flex flex-col space-y-4 md:space-y-6">
          <h3 className="text-xl font-semibold">Resources</h3>
          <a href="#" className="hover:underline">
            Blog
          </a>
          <a href="#" className="hover:underline">
            Recipes
          </a>
          <a href="#" className="hover:underline">
            FAQs
          </a>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-400">
        &copy; 2024 CookCraft. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
