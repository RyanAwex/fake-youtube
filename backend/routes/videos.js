import express from "express";
import { sql } from "../config/db.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const videos = await sql`SELECT * FROM videos ORDER BY id ASC`;

    if (!videos) {
      return res
        .status(404)
        .json({ success: false, message: "No videos in the database" });
    }

    res.status(200).json(videos);
  } catch (error) {
    console.log("Error in videos route", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

export default router;
