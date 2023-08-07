"use client";

import React, { FC, useEffect, useState } from "react";
import Categories from "./Categories";
import RangeFilter from "./RangeFilter";
import SelectRating from "./SelectRating";
import GoogleMapView from "./GoogleMapView";
import { getGooglePlace } from "@/helper/API";
import { useLocation } from "@/context/LocationContext";

const HomePage: FC = () => {
  const [category, setCategory] = useState<string | null>("IndianFood");
  const [radius, setRadius] = useState(2500);
  const { location } = useLocation();
  const [businessList,setBusinessList]=useState([])
  const [businessListOrg,setBusinessListOrg]=useState([])

  const handlechange = (arg: any) => {
    return;
  };

  useEffect(() => {
    if ((location.latitude as number, location.longitude as number)) {
      const data = getGooglePlace(
        category as string,
        radius,
        location.latitude as number,
        location.longitude as number
      ).then((res) => {
        console.log("data", res.data.product.results);
        setBusinessList(res.data.product.results);
        setBusinessListOrg(res.data.product.results);
        
      });

    }
  }, [category, radius, location]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 h-screen">
      <div className="p-3">
        <Categories setCategory={setCategory} />
        <RangeFilter radius={radius} setRadius={setRadius} />
        <SelectRating onRatingChange={handlechange} />
      </div>
      <div className="col-span-3">
        <GoogleMapView />
      </div>
    </div>
  );
};

export default HomePage;
