import { LoadScript, GoogleMap } from "@react-google-maps/api";
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
  return (
    <div>
      <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY as string} mapIds={['8611701adf8e4ed4']}>
        <GoogleMap
        options={{mapId:'8611701adf8e4ed4'}}
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >

        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default GoogleMapView;
