import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"

import experienceRoutes from "./routes/experienceRoutes.js"
import jobRoutes from "./routes/jobRoutes.js";

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

// TEST ROUTE (VERY IMPORTANT)
app.get("/", (req, res) => {
  res.send("Backend is running 🚀")
})

// MAIN ROUTE
app.use("/api/experiences", experienceRoutes)
app.use("/api/jobs", jobRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err))

app.listen(5000, () => {
  console.log("Server running on port 5000")
})