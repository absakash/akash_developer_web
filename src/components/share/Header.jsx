import React from "react";
import logo from "../../assets/images/logo/ss.png";
import bgImage from "../../assets/images/bg/Image.png"; // Import the background image
import banner from "../../assets/images/banner/banner.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div
      className="w-full min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="container mx-auto px-6 lg:px-20">
        <nav className="flex items-center justify-between py-6">
          <img className="w-48 cursor-pointer" src={logo} alt="Logo" />

          <ul className="flex space-x-8">
            <li className="group relative">
              <Link
                className="text-white text-lg no-underline relative flex items-center"
                to="/"
              >
                Home
                <span className="block h-0.5 bg-gradient-to-r from-white to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left absolute bottom-[-5px] left-0 right-0"></span>
              </Link>
            </li>
            <li className="group relative">
              <Link
                className="text-white text-lg no-underline relative flex items-center"
                to="/contact"
              >
                Contact
                <span className="block h-0.5 bg-gradient-to-r from-white to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left absolute bottom-[-5px] left-0 right-0"></span>
              </Link>
            </li>
            <li className="group relative">
              <Link
                className="text-white text-lg no-underline relative flex items-center"
                to="/features"
              >
                Features
                <span className="block h-0.5 bg-gradient-to-r from-white to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left absolute bottom-[-5px] left-0 right-0"></span>
              </Link>
            </li>
            <li className="group relative">
              <Link
                className="text-white text-lg no-underline relative flex items-center"
                to="/about"
              >
                About
                <span className="block h-0.5 bg-gradient-to-r from-white to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left absolute bottom-[-5px] left-0 right-0"></span>
              </Link>
            </li>
          </ul>
        </nav>

        <div className="text-white mt-48 max-w-lg">
          <h1 className="font-semibold text-6xl leading-tight">
            Developer <br /> Based on{" "}
            <span className="font-light">your criteria</span>
          </h1>
          <p className="mt-4 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id culpa
            eum ratione. Necessitatibus nemo soluta assumenda quibusdam nobis
            veritatis.
          </p>
          <div className="mt-8">
            <button className="relative inline-block px-8 py-3 text-lg font-semibold text-white border-2 border-white rounded-lg transition-all duration-300 transform hover:bg-white hover:text-black hover:shadow-lg hover:-translate-y-1">
              Find Me
            </button>
          </div>
        </div>

        <img
          className="w-full xl:w-1/2 xl:absolute right-20 bottom-20 transition-transform duration-500 ease-in-out transform hover:translate-x-10 hover:shadow-xl hover:translate-y-3"
          src={banner}
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
