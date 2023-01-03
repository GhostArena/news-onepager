import React from "react";
import heroImage from "../../assets/images/image-web-3-desktop.jpg";
import "./Hero.css";

export const Hero = () => {
  return (
    <>
      {/* Desktop */}
      <div className=" md:flex md:flex-col ">
        {/* Image */}
        <div className="md:mb-10 w-full h-[300px] bg-red-500 my-6 md:mt-0 overflow-hidden flex items-center justify-center">
          <div className="bg-gray-300 w-full h-full ">
            <img
              src={heroImage}
              alt="hero"
              className="object-cover object-center h-full w-full"
            />
          </div>
        </div>
        {/* Hero Text */}
        <div className="md:flex md:justify-between">
          <div>
            <h1 className="capitalize text-5xl md:text-6xl font-bold text-[#00001a] md:leading-tight leading-13 my-4">
              The bright future of Web 3.0?
            </h1>
          </div>
          {/* Subtext */}
          <div className="md:ml-8 ">
            <p className="mb-6 md:mb-10 text-[#5d5f79] text-[15px]">
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
            <button className="py-4 px-8 hover:text-[#00001a] btn items-center flex h-12 mb-24 md:mb-0">
              <span className="text-white uppercase tracking-[3px] text-sm font-bold">
                Read More
              </span>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile */}
      <div></div>
    </>
  );
};
