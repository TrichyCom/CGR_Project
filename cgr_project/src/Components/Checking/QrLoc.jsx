import React, { useState, useEffect } from "react";
// import QrScanner from "@yudiel/react-qr-scanner"; 
import { QrScanner } from "@yudiel/react-qr-scanner";

import { QRCodeCanvas } from "qrcode.react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";


const QrLoc = () => {
  const [showScanner, setShowScanner] = useState(false);
  const [scannedData, setScannedData] = useState(null);
  const [position, setPosition] = useState([1.3521, 103.8198]); // Default to Singapore
  const [showMap, setShowMap] = useState(false);
  const qrData = "https://www.google.com"; // Sample QR Code data

  // Get current location after scanning
  useEffect(() => {
    if (scannedData) {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          (pos) => {
            const { latitude, longitude } = pos.coords;
            setPosition([latitude, longitude]);
            setShowMap(true);
          },
          (error) => {
            console.error("Error getting location:", error);
            alert("Unable to retrieve your location");
          }
        );
      } else {
        alert("Geolocation is not supported by your browser.");
      }
    }
  }, [scannedData]);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>QR Code Location App</h1>

      <button onClick={() => setShowScanner(!showScanner)} style={{ padding: "10px", marginBottom: "10px" }}>
        {showScanner ? "Generate QR Code" : "Scan QR Code"}
      </button>

      {showScanner ? (
        <div>
          <h2>Scan QR Code</h2>
          <QrScanner
            onDecode={(result) => setScannedData(result)}
            onError={(error) => console.error("QR Scan Error:", error)}
            scanDelay={1000}
            style={{ width: "100%", maxWidth: "400px" }}
          />
          {scannedData && <p>Scanned QR Code: {scannedData}</p>}
        </div>
      ) : (
        <QRCodeGenerator data={qrData} />
      )}

      {showMap && (
        <div>
          <h2>Current Location</h2>
          <MapContainer center={position} zoom={15} style={{ height: "500px", width: "100%" }}>
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
      )}
    </div>
  );
};

// Component to update map center dynamically
const MapUpdater = ({ position }) => {
  const map = useMap();
  useEffect(() => {
    map.setView(position, 15);
  }, [position, map]);
  return null;
};

// QR Code Generator Component
const QRCodeGenerator = ({ data }) => (
  <div>
    <h2>QR Code Generator</h2>
    <QRCodeCanvas value={data} size={200} />
    <p>Scan this QR Code to get location</p>
  </div>
);

export default QrLoc;
