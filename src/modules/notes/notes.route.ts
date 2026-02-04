import { Router } from "express";
import { notesController } from "./notes.controller";

const router = Router();

router.post("/", notesController.createNote);
router.get("/", notesController.getNote);
router.post("/:id", notesController.deleteNote);

export const notesRouter = router;
