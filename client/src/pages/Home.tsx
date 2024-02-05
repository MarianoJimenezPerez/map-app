import React from "react";
import "leaflet/dist/leaflet.css";
import Map from "../components/UI/Map/Map";

const Home: React.FC = () => {
  const markers = [
    {
      id: 1,
      latitude: 39.422,
      longitude: -0.351,
      markerContent: <h1>My content</h1>,
    },
  ];

  return (
    <div>
      <Map markers={markers} />
    </div>
  );
};

export default Home;
