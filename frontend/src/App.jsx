import { useEffect, useState } from "react";
import { api } from "./api";
import AddShipment from "./components/AddShipment";
import ShipmentList from "./components/ShipmentList";

function App() {
  const [shipments, setShipments] = useState([]);

  const load = async () => {
    const res = await api.get("/shipments");
    setShipments(res.data);
  };

  useEffect(() => { load(); }, []);

  return (
    <div>
      <h2>SwiftBL Shipment Manager</h2>
      <AddShipment refresh={load} />
      <ShipmentList data={shipments} refresh={load} />
    </div>
  );
}

export default App;
