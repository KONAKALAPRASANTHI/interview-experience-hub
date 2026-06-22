import express from "express";
import Experience from "../models/Experience.js";

const router = express.Router();

/* =========================
   GET + HYBRID SEARCH
========================= */
router.get("/", async (req, res) => {
  try {
    const search = req.query.search;

    const filter = search
      ? {
          $or: [
            { company: { $regex: search, $options: "i" } },
            { role: { $regex: search, $options: "i" } },
            { userName: { $regex: search, $options: "i" } },
          ],
        }
      : {};

    const data = await Experience.find(filter || {}).sort({ createdAt: -1 });
    res.json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

/* =========================
   CREATE POST
========================= */
router.post("/", async (req, res) => {
  try {
    const data = await Experience.create(req.body);
    res.json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

/* =========================
   LIKE POST (FIXED)
========================= */
router.patch("/like/:id", async (req, res) => {
  try {
    const exp = await Experience.findById(req.params.id);

    if (!exp) {
      return res.status(404).json({ message: "Experience not found" });
    }

    exp.likes = (exp.likes || 0) + 1;

    await exp.save();
    res.json(exp);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
});

/* =========================
   COMMENT POST (FIXED)
========================= */
router.post("/comment/:id", async (req, res) => {
  try {
    const exp = await Experience.findById(req.params.id);

    if (!exp) {
      return res.status(404).json({ message: "Not found" });
    }

    exp.comments.push({
      userName: req.body.userName,
      text: req.body.text,
    });

    await exp.save();

    res.json(exp);
  } catch (err) {
    res.status(500).json(err);
  }
});

/* =========================
   DELETE POST (OWNER ONLY)
========================= */
router.delete("/:id", async (req, res) => {
  try {
    const experience = await Experience.findById(req.params.id);

    if (!experience) {
      return res.status(404).json({ message: "Not found" });
    }

    // ONLY OWNER CAN DELETE
    if (experience.userId !== req.body.userId) {
      return res.status(403).json({ message: "Not allowed" });
    }

    await Experience.findByIdAndDelete(req.params.id);

    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;