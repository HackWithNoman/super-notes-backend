import { Router } from "express";
import { notesController } from "./notes.controller";

const router = Router();

router.post("/", notesController.createNote);

export const notesRouter = router;
