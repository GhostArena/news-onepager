import React from "react";
import logo from "../../assets/images/logo.svg";
import { webLinks } from "../../assets/data/data";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-10 ">
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
  );
};
