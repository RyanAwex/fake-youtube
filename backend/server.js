import express from "express";
import cors from "cors";
import { sql } from "./config/db.js";
import videosRoute from "./routes/videos.js";

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173", `https://${process.env.FRONTEND_URL}`],
    credentials: true,
  })
);

app.use("/api/videos", videosRoute);

async function initDB() {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS videos (
        id SERIAL PRIMARY KEY,
        thumbnail VARCHAR(255),
        channelPic VARCHAR(255),
        title VARCHAR(255) NOT NULL,
        channelName VARCHAR(255),
        views VARCHAR(255),
        uploaded VARCHAR(255),
        link VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `;
    console.log("Database has initialized successfully");
  } catch (error) {
    console.log("Error initDB", error);
  }
}

initDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
  });
});
