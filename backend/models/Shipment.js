import mongoose from "mongoose";

const shipmentSchema = new mongoose.Schema({
  shipmentId: {
    type: String,
    required: true
  },
  origin: String,
  destination: String,
  status: {
    type: String,
    default: "Pending"
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("Shipment", shipmentSchema);
