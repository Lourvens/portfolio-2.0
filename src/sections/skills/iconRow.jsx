import React from "react";
import items from "./iconItems";

export default function IconRow() {
  return (
    <div className="flex flex-wrap justify-center gap-4 ">
      {items.map(({ name, imgSrc }) => (
        <div
          key={name}
          className="w-16 h-16 p-4 bg-white rounded-full dark:bg-white dark:bg-opacity-10 cursor-pointer"
          title={name}
        >
          <img src={imgSrc} alt={`${name} logo`} />
        </div>
      ))}
    </div>
  );
}
