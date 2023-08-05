"use client";

import React, { FC, useState } from "react";

const RangeFilter: FC = () => {
  const [radius, setRadius] = useState(2500);
  return (
    <div>
      <h2 className="font-bold px-2 mt-6">Select Radius (In meters)</h2>
      <input
        type="range"
        className="w-full h-2 rounded-lg bg-gray-200 appearance-none cursor-pointer"
        min="500"
        max="5000"
        step="500"
        onChange={(e: any) => {
          setRadius(e.target.value);
        }}
        defaultValue={radius}
      />
      <label className="text-gray-500 text-[15px]">{radius} in meters</label>
    </div>
  );
};

export default RangeFilter;
