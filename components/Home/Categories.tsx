"use client";

import { CategoryListData } from "@/constants/CategoryData";
import Image from "next/image";
import React, { FC, useState } from "react";

const Categories: FC<{ setCategory: (arg: string) => void }> = ({
  setCategory,
}) => {
  const [selectedFood, setSelectedFood] = useState(0);
  const [categoryData, setCategoryData] = useState(CategoryListData);

  const handleCategory = (id: number) => {
    setSelectedFood(id);
  };

  return (
    <div>
      <h2 className="font-bold">Select Food Type</h2>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {categoryData.map((item, index: number) => {
          return (
            <div
              key={index}
              className={`flex flex-col border-blue-300 items-center justify-center bg-gray-100 p-2 m-2 rounded-lg grayscale cursor-pointer hover:grayscale-0 ${
                selectedFood === index
                  ? "grayscale-0 border-[1px]"
                  : "grayscale"
              }`}
              onClick={() => {
                handleCategory(index);
                setCategory(item.name);
              }}
            >
              <Image src={item.icon} alt={item.name} width={40} height={40} />
              {item.name}
              <p></p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
