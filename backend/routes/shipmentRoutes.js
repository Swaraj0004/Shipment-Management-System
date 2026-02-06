import express from "express";
import {
  createShipment,
  getShipments,
  updateShipment,
  deleteShipment
} from "../controllers/shipmentController.js";

const router = express.Router();

router.post("/", createShipment);
router.get("/", getShipments);
router.put("/:id", updateShipment);
router.delete("/:id", deleteShipment);

export default router;
