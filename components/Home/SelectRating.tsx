"use client";

import { ratingList } from "@/constants/CategoryData";
import React, { FC, useState } from "react";

const SelectRating: FC<{onRatingChange: (arg: any) => void}> = ({onRatingChange}) => {
  const [selectedRating, setSelectedRating] = useState<number[]>([]);

  const onSelectRating=(isChecked: any,value: number)=>{
    if(isChecked)
    {
        setSelectedRating([...selectedRating,value]);
    }
    else{
        setSelectedRating(selectedRating.filter((n)=>n!==value));
    }
    onRatingChange(selectedRating);
}

  return (
    <div className="px-2 mt-5">
      <h2 className="font-bold">Select Rating</h2>
      <div>
        {ratingList.map((item, index) => (
          <div key={index} className="flex justify-between">
            <label>{item.icon}</label>
            <input
              type="checkbox"
              className="focus:outline-none outline-none cursor-pointer"
              onChange={(e) => onSelectRating(e.target.checked, item.name)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectRating;
