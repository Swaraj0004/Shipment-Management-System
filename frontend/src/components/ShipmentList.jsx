import { api } from "../api";

export default function ShipmentList({ data, refresh }) {
  const updateStatus = async (id, status) => {
    await api.put(`/shipments/${id}`, { status });
    refresh();
  };

  const remove = async (id) => {
    await api.delete(`/shipments/${id}`);
    refresh();
  };

  return (
    <ul>
      {data.map(s => (
        <li key={s._id}>
          {s.shipmentId} | {s.origin} → {s.destination}
          <select onChange={e => updateStatus(s._id, e.target.value)}>
            <option>Pending</option>
            <option>In Transit</option>
            <option>Delivered</option>
          </select>
          <button onClick={() => remove(s._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
