
export const getGooglePlace = async (
  category: string,
  radius: number,
  lat: number,
  lng: number
) => {
  const res = await fetch('/api/googlePlace');

  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }


  return data;

};
