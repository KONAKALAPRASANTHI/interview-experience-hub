import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    company: String,
    role: String,
    location: String,
    type: String,        // Full-time / Part-time
    mode: String,        // Remote / On-site / Hybrid
    openings: Number,
    experience: String,
    salary: String,
    description: String,
    skills: [String],
    qualifications: String,
    prerequisites: String,
  },
  { timestamps: true }
);

export default mongoose.model("Job", jobSchema);