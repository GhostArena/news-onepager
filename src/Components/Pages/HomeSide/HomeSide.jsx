import React from "react";
import { articles } from "../../assets/data/data";
import "./HomeSide.css";

export const HomeSide = () => {
  return (
    <div className="ml-10 bg-[#00001a] p-8">
      <h1 className="text-[#e9ab53] text-4xl font-bold ">New</h1>
      {/* Articles */}

      {articles.map((items, i) => (
        <div className="articles-slot">
          <div className="my-8">
            <h2 className="text-white text-xl font-bold mb-2 hover:text-[#e9ab53] transition-all duration-300 cursor-pointer">
              {items.title}
            </h2>
            <p className="text-[#5d5f79] font-medium">{items.sub}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
