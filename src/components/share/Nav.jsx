import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/images/logo/ss.png"
import { FaBars } from "react-icons/fa";
import { TbXboxXFilled } from "react-icons/tb";

const Nav = () => {
  const [click, setClick] = useState(false);

  const handleClickNav = () => {
    console.log("cliked");
    setClick(true);

  }

  const handleCross=()=>{
     setClick(false)
  }
      return (
            <nav className="flex items-center justify-between py-6">
            <img className="w-48 cursor-pointer" src={logo} alt="Logo" />
  
            <ul className="md:flex space-x-8 hidden md:inline-block">
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
      );
};

export default Nav;