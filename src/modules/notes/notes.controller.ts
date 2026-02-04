import { RequestHandler } from "express";
import { notesService } from "./notes.service";

const createNote: RequestHandler = async (req, res) => {
  const payload = req.body;

  try {
    const note = await notesService.createNote(payload);

    res.status(200).json({
      message: "Success",
      note: note,
    });
  } catch (error) {
    res.status(500).json({
      message: "Faild",
      error: error,
    });
  }
};

export const notesController = {
  createNote,
};
