import dotenv from "dotenv";
import { userRouter } from "./modules/user/user.route";
import express from "express";
import app from "./app";
import { notesRouter } from "./modules/notes/notes.route";

dotenv.config();
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Root route
app.get("/", (req, res) => {
  res.json({
    project: "super-notes-backend",
    Instruction: "Please read the doc or visit the repo.",
  });
});

// Auth Routes
app.use("/api/v1/auth", userRouter);

// Notes Routes
app.use("/api/v1/notes", notesRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
