import express from "express";
import Job from "../models/Job.js";

const router = express.Router();

/* GET ALL JOBS */
router.get("/", async (req, res) => {
  try {
    const jobs = await Job.find().sort({ createdAt: -1 });
    res.json(jobs);
  } catch (err) {
    res.status(500).json(err);
  }
});

/* CREATE JOB */
router.post("/", async (req, res) => {
  try {
    const job = await Job.create(req.body);
    res.json(job);
  } catch (err) {
    res.status(500).json(err);
  }
});

/* DELETE JOB */
router.delete("/:id", async (req, res) => {
  try {
    await Job.findByIdAndDelete(req.params.id);
    res.json({ message: "Job deleted" });
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;