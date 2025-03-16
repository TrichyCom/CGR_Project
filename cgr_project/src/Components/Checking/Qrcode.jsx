import React, { useState } from "react";
import { QrScanner } from "@yudiel/react-qr-scanner";
import SingaporeMap from "./SingaporeMap";

const QRScanner = () => {
  const [scannedData, setScannedData] = useState(null);
  const [showMap, setShowMap] = useState(false);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Scan QR Code</h2>
      <QrScanner
        onDecode={(result) => {
          setScannedData(result);
          setShowMap(true);
        }}
        onError={(error) => console.error("QR Scan Error:", error)}
        scanDelay={1000}
        style={{ width: "100%", maxWidth: "400px" }}
      />
      {scannedData && <p>Scanned QR Code: {scannedData}</p>}
      {showMap && <SingaporeMap />}
    </div>
  );
};

export default QRScanner;
