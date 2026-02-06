import express from "express";
import Shipment from "../models/Shipment.js";

const router = express.Router();

// Create shipment
router.post("/", async (req, res) => {
  try {
    const shipment = await Shipment.create(req.body);
    res.status(201).json(shipment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all shipments
router.get("/", async (req, res) => {
  try {
    const shipments = await Shipment.find();
    res.json(shipments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update shipment
router.put("/:id", async (req, res) => {
  try {
    const updated = await Shipment.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete shipment
router.delete("/:id", async (req, res) => {
  try {
    await Shipment.findByIdAndDelete(req.params.id);
    res.json({ message: "Shipment deleted successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;
