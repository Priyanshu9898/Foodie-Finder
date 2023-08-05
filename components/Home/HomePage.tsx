"use client";

import React, { FC } from 'react'
import Categories from './Categories'
import RangeFilter from './RangeFilter'
import SelectRating from './SelectRating'

const HomePage:FC =  () => {


  const handlechange = (arg: any) => {
    return;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 h-screen">
        <div className="p-3">
          <Categories />
          <RangeFilter />
          <SelectRating onRatingChange={handlechange} />
        </div>
        <div className="col-span-3">
          
        </div>
    </div>
  )
}

export default HomePage