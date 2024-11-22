import { Request, Response } from "express";

const express = require("express");
const path = require("path");

const app = express();

// Serve static files from the client build directory
app.use(express.static(path.join(__dirname, "../../client/dist")));

// API routes
app.get("/api", (req: Request, res: Response) => {
  console.log("API route hit!");
  res.json({ message: "Hello from the API!" });
});

// Fallback for React Router
app.get("*", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "../../client/dist/index.html"));
});

export default app;
