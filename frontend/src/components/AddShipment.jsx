import { useState } from "react";
import { api } from "../api";

export default function AddShipment({ refresh }) {
  const [form, setForm] = useState({
    shipmentId: "",
    origin: "",
    destination: ""
  });

  const submit = async () => {
    await api.post("/shipments", form);
    setForm({ shipmentId: "", origin: "", destination: "" });
    refresh();
  };

  return (
    <div>
      <h3>Add Shipment</h3>
      <input placeholder="Shipment ID" onChange={e => setForm({...form, shipmentId: e.target.value})} />
      <input placeholder="Origin" onChange={e => setForm({...form, origin: e.target.value})} />
      <input placeholder="Destination" onChange={e => setForm({...form, destination: e.target.value})} />
      <button onClick={submit}>Add</button>
    </div>
  );
}
