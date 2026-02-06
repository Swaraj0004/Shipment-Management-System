import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import shipmentRoutes from "./routes/shipmentRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Health check
app.get("/", (req, res) => {
  res.send("SwiftBL MERN Assignment API Running");
});

// Routes
app.use("/api/shipments", shipmentRoutes);

// DB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(process.env.PORT || 5000, () =>
      console.log("Server running on port 5000")
    );
  })
  .catch((err) => console.error(err));
