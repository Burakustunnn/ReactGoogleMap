import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const Home = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });
  const center = useMemo(
    () => ({ lat: 41.0423904497029, lng: 29.004673812622478 }),
    []
  );
  if (!isLoaded) return <div>Loading...</div>;
  return (
    <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
      <Marker position={{ lat:  41.0423904497029, lng: 29.004673812622478 }} />
    </GoogleMap>
  );
};

export default Home;
