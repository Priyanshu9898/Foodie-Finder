"use client";

import React, { FC, useState } from 'react'
import Categories from './Categories'
import RangeFilter from './RangeFilter'
import SelectRating from './SelectRating'
import GoogleMapView from './GoogleMapView';

const HomePage:FC =  () => {

  const [category, setCategory] = useState<string | null>("Indian");
  const [radius, setRadius] = useState(2500);

  const handlechange = (arg: any) => {
    return;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 h-screen">
        <div className="p-3">
          <Categories setCategory={setCategory} />
          <RangeFilter radius={radius} setRadius={setRadius}/>
          <SelectRating onRatingChange={handlechange} />
        </div>
        <div className="col-span-3">
          <GoogleMapView />
        </div>
    </div>
  )
}

export default HomePage