import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const SingaporeMap = () => {
  const [position, setPosition] = useState([1.3521, 103.8198]); // Default to Singapore

  // Function to get current location
  const getLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setPosition([latitude, longitude]);
        },
        (error) => {
          console.error("Error getting location:", error);
          alert("Unable to retrieve your location");
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  return (
    <div>
      <button onClick={getLocation} style={{ marginBottom: "10px", padding: "10px" }}>
        Get Current Location
      </button>

      <MapContainer center={position} zoom={12} style={{ height: "500px", width: "100%" }}>
        <MapUpdater position={position} />
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>Your Location 📍</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

// Component to update map center dynamically
const MapUpdater = ({ position }) => {
  const map = useMap();
  map.setView(position, 12);
  return null;
};

export default SingaporeMap;
