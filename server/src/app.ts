import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

// Fix for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the client build directory
app.use(express.static(path.join(__dirname, "../../client/dist")));

// API routes
app.get("/api", (req, res) => {
  console.log("API route hit!");
  res.json({ message: "Hello from the API!" });
});

// Fallback for React Router
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../client/dist/index.html"));
});

export default app;
