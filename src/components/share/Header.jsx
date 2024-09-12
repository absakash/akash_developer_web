import React, { useState } from "react";
import logo from "../../assets/images/logo/ss.png";
import bgImage from "../../assets/images/bg/Image.png";
import banner from "../../assets/images/banner/banner.png";
import { Link } from "react-router-dom";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { TbXboxXFilled } from "react-icons/tb";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const Header = () => {
  const [click, setClick] = useState(false);

  const handleClickNav = () => {
    console.log("cliked");
    setClick(true);

  }

  const handleCross=()=>{
     setClick(false)
  }
  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center "
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Bubble Animation */}
      <div
        className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none"
        style={{ zIndex: 1 }}
      >
        <style>
          {`
            @keyframes bubble {
              0% {
                transform: translateY(100vh) scale(1);
                opacity: 1;
              }
              100% {
                transform: translateY(-100vh) scale(0.3);
                opacity: 0;
              }
            }

            .bubble {
              position: absolute;
              background: rgba(255, 255, 255, 0.6);
              border-radius: 50%;
              pointer-events: none;
              animation: bubble infinite ease-in-out;
            }

            /* Bubble Sizes and Animation Durations */
            .bubble:nth-child(1) {
              width: 30px;
              height: 30px;
              left: 15%;
              animation-duration: 8s;
              animation-delay: 0s;
              background: rgba(255, 255, 255, 0.7);
            }

            .bubble:nth-child(2) {
              width: 40px;
              height: 40px;
              left: 30%;
              animation-duration: 10s;
              animation-delay: 1s;
              background: rgba(255, 255, 255, 0.5);
            }

            .bubble:nth-child(3) {
              width: 50px;
              height: 50px;
              left: 50%;
              animation-duration: 12s;
              animation-delay: 2s;
              background: rgba(255, 255, 255, 0.6);
            }

            .bubble:nth-child(4) {
              width: 60px;
              height: 60px;
              left: 70%;
              animation-duration: 14s;
              animation-delay: 3s;
              background: rgba(255, 255, 255, 0.4);
            }

            .bubble:nth-child(5) {
              width: 70px;
              height: 70px;
              left: 85%;
              animation-duration: 16s;
              animation-delay: 4s;
              background: rgba(255, 255, 255, 0.3);
            }
          `}
        </style>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        {/* Add more bubbles if needed */}
      </div>

      {/* Existing Header Content */}
      <div className="container mx-auto px-6 lg:px-20">
        <nav className="flex items-center justify-between py-6">
          <img className="w-48 cursor-pointer" src={logo} alt="Logo" />

          <ul className="flex space-x-8 hidden md:inline-block md:flex">
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

          {
            click ? <TbXboxXFilled onClick={handleCross} className="text-white w-10 h-10"></TbXboxXFilled>: <li className="md:hidden mb-10 absolute right-0">
            <Link onClick={handleClickNav}>
              <FaBars className=" w-10 h-8 text-white"></FaBars>
            </Link>
          </li>
          }
         

          {click ? (
            <>
              <div className="text-white list-none absolute right-20 top-20 ">
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
              </div>
            </>
          ) : (
            <></>
          )}
        </nav>

        <div className="text-white md:mt-48 mt-10 max-w-lg">
          <h1 className="font-semibold md:text-6xl text-4xl leading-tight hover:shadow-lg hover:-translate-y-1 transition-all duration-300 transform">
            Developer <br /> Based on{" "}
            <span className="font-light">your criteria</span>
          </h1>
          <p className="mt-4 text-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300 transform">
            I'm Akash Biswas, Mern Stack Devloper, Interest in Machine Learning
            & Enjoy to Learn Something New
          </p>
          <div className="mt-8 md:flex md:gap-10 gap-3">
            <div>
              <button className="relative inline-block px-8 md:mb-0 mb-5  py-3 text-lg font-semibold text-white border-2 border-white rounded-lg hover:bg-white hover:text-black hover:shadow-lg hover:-translate-y-1">
                Find Me
                <FaArrowCircleRight className="inline-block mx-2"></FaArrowCircleRight>
              </button>
            </div>

            <div className="flex md:gap-6 gap-4 justify-center mt-3 relative">
              <Link target="blank" to="https://www.facebook.com/sskybiswas">
                <FaFacebook className="w-10 h-10 hover:scale-150 hover:text-emerald-500 hover:translate-x-5 transform duration-300"></FaFacebook>
              </Link>
              <Link
                target="blank"
                to="https://www.instagram.com/akashbiswas305/"
              >
                <FaInstagram className="w-10 h-10 hover:scale-150 hover:text-emerald-500 hover:translate-y-5 transform duration-300"></FaInstagram>
              </Link>
              <Link>
                <FaTwitter className="w-10 h-10 hover:scale-150 hover:text-emerald-500 hover:translate-x-5 transform duration-300"></FaTwitter>
              </Link>
              <Link
                target="blank"
                to="https://www.linkedin.com/in/akash-biswas-3529a21a2/"
              >
                <FaLinkedin className="w-10 h-10 hover:scale-150 hover:text-emerald-500 hover:translate-y-5 transform duration-300"></FaLinkedin>
              </Link>
              <Link target="blank" to="https://github.com/absakash">
                <FaGithub className="w-10 h-10 hover:scale-150 hover:text-emerald-500 hover:translate-x-5 transform duration-300"></FaGithub>
              </Link>
            </div>
          </div>
        </div>

        <img
          className="w-full xl:w-1/2 xl:absolute right-20 bottom-32 transition-transform duration-500 ease-in-out transform hover:translate-x-10 hover:shadow-xl hover:translate-y-3"
          src={banner}
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
