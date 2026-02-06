import Shipment from "../models/Shipment.js";

export const createShipment = async (req, res) => {
  const shipment = await Shipment.create(req.body);
  res.json(shipment);
};

export const getShipments = async (req, res) => {
  const shipments = await Shipment.find();
  res.json(shipments);
};

export const updateShipment = async (req, res) => {
  const updated = await Shipment.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updated);
};

export const deleteShipment = async (req, res) => {
  await Shipment.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};
