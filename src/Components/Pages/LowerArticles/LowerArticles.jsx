import React from "react";
import { readMore } from "../../assets/data/data";

export const LowerArticles = () => {
  return (
    <div className=" my-14  flex">
      {readMore.map((items, i) => (
        <div className="flex first:ml-0 ml-8 overflow-hidden w-full h-[150px] ">
          <div className="w-[150px] h-[160px] bg-slate-500 items-center justify-center flex overflow-hidden">
            <img
              src={items.image}
              alt={items.id}
              className="w-full h-full object-cover"
            />
          </div>
          <div className=" ml-5">
            <h1 className="text-3xl font-bold text-[#c5c6ce] mb-2">
              0{items.id}
            </h1>
            <h2 className="text-xl font-bold text-[#00001a] hover:text-[#f15e50] transition-all duration-300 cursor-pointer mb-2">
              {items.title}
            </h2>
            <p className="text-[#5d5f79] leading-relaxed text-[15px]">
              {items.sub}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
