import { NextRequest, NextResponse } from "next/server";

const BASE_URL = "https://maps.googleapis.com/maps/api/place";
const GOOGLE_API_KEY = process.env.GOOGLE_MAP_API_KEY;


export const GET = async (request: NextRequest, response: NextResponse) => {
    try {
    //   console.log(GOOGLE_API_KEY);
    const { searchParams } = new URL(request.url);

    // console.log(searchParams);

    const category = searchParams.get("category");
    const radius = searchParams.get("radius");
    const lat = searchParams.get("lat");
    const lng = searchParams.get("lng");
    // console.log(
    //   BASE_URL +
    //     "/textsearch/json?query=" +
    //     category +
    //     "&location=" +
    //     lat +
    //     "," +
    //     lng +
    //     "&radius=" +
    //     radius +
    //     "&key=" +
    //     process.env.GOOGLE_MAP_API_KEY
    // );
    const res = await fetch(
      BASE_URL +
        "/textsearch/json?query=" +
        category +
        "&location=" +
        lat +
        "," +
        lng +
        "&radius=" +
        radius +
        "&key=" +
        GOOGLE_API_KEY,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const product = await res.json();

    return NextResponse.json({ product });

  } catch (err) {}
};
