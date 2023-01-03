import { React, useState } from "react";
import logo from "../../assets/images/logo.svg";
import menuClosed from "../../assets/images/icon-menu.svg";
import menuOpen from "../../assets/images/icon-menu-close.svg";
import { webLinks } from "../../assets/data/data";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/* Desktop */}
      <div className="md:flex justify-between items-center md:py-10 hidden">
        {/* Desktop */}
        <div>
          <img src={logo} alt="brand-icon" className="cursor-pointer" />
        </div>
        <div className="flex">
          {webLinks.map((items, i) => (
            <NavLink
              to={items.path}
              className="ml-10 hover:text-[#f15e50] transition-all duration-300"
            >
              {items.label}
            </NavLink>
          ))}
        </div>
      </div>
      {/* Mobile */}
      <div className="flex  justify-between items-center my-4 relative">
        <div className="flex justify-between items-center w-full">
          <button>
            <img
              src={logo}
              alt="brand-icon"
              className="cursor-pointer md:hidden w-auto h-full b-icon"
            />
          </button>
          <button className="">
            <img
              src={menuClosed}
              alt="menu-icon"
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer md:hidden w-auto menu-icon-close z-0"
            />
          </button>
        </div>
        <div className={`${isOpen ? "block" : "hidden"} `}>
          <div className="menu-card flex flex-col justify-start items-center sticky">
            <img
              src={menuOpen}
              alt="close"
              className="menu-icon absolute top-0 right-0"
              onClick={() => setIsOpen(!isOpen)}
            />
            <div className="flex flex-col w-full px-6 my-12 ">
              {webLinks.map((items, i) => (
                <NavLink
                  to={items.path}
                  className="first:mt-[50%] mt-5 hover:text-[#f15e50] transition-all duration-300"
                >
                  {items.label}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
