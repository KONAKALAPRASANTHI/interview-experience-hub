import mongoose from "mongoose";

const experienceSchema = new mongoose.Schema(
  {
    company: String,
    role: String,
    description: String,
    questions: String,
    tips: String,

    userName: String,
    userEmail: String,
    userId: String,

    likes: {
      type: Number,
      default: 0,
    },
    comments: {
      type: Array,
      default: [],
    },
  },

  { timestamps: true },
);

export default mongoose.model("Experience", experienceSchema);
