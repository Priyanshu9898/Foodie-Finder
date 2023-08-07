import  axios from "axios";

export const getGooglePlace = async (
  category: string,
  radius: number,
  lat: number,
  lng: number
) => {
  const data = await axios.get(
    "/api/google-place?" +
      "category=" +
      category +
      "&radius=" +
      radius +
      "&lat=" +
      lat +
      "&lng=" +
      lng
  );

  return data;

};
