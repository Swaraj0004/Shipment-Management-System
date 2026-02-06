import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [shipments, setShipments] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/shipments")
      .then((res) => setShipments(res.data))
      .catch(() => console.log("Backend not connected"));
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Shipment Management System</h1>
      <p>SwiftBL MERN Assignment</p>

      {shipments.length === 0 ? (
        <p>No shipments available.</p>
      ) : (
        shipments.map((s) => (
          <div
            key={s._id}
            style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}
          >
            <strong>{s.shipmentId}</strong> <br />
            {s.origin} → {s.destination} <br />
            Status: {s.status}
          </div>
        ))
      )}
    </div>
  );
}

export default App;
