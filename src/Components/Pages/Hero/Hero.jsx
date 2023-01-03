import React from "react";
import heroImage from "../../assets/images/image-web-3-desktop.jpg";
import "./Hero.css";

export const Hero = () => {
  return (
    <div className="flex flex-col">
      {/* Image */}
      <div className="mb-10">
        <img src={heroImage} alt="hero" />
      </div>
      {/* Hero Text */}
      <div className="flex justify-between">
        <div>
          <h1 className="capitalize text-6xl font-bold text-[#00001a] leading-tight">
            The bright future of Web 3.0?
          </h1>
        </div>
        {/* Subtext */}
        <div className="ml-8 ">
          <p className="mb-10 text-[#5d5f79] text-[15px]">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button className="py-4 px-8 hover:text-[#00001a] items-center flex h-12 ">
            <span className="text-white uppercase tracking-[3px] text-sm font-bold">
              Read More
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
