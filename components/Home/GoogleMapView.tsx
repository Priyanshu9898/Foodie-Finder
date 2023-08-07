import { useLocation } from "@/context/LocationContext";
import { LoadScript, GoogleMap, MarkerF } from "@react-google-maps/api";
import React, { FC } from "react";

const containerStyle = {
  width: "100%",
  height: "70vh",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

const GoogleMapView: FC = () => {
  const { location } = useLocation();

  const center = {
    lat: location.latitude as number,
    lng: location.longitude as number,
  };

  return (
    <div>
      <LoadScript
        googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY as string}
        mapIds={["8611701adf8e4ed4"]}
      >
        <GoogleMap
          options={{ mapId: "8611701adf8e4ed4" }}
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
          <MarkerF position={center} icon={{
            url: "/user-location.png",
            scaledSize: {
              width: 50,
              height: 50,
              equals: function(size: google.maps.Size) {
                return this.height === size.height && this.width === size.width;
              },
            }
          }} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default GoogleMapView;
