import { RequestHandler } from "express";
import { notesService } from "./notes.service";

const createNote: RequestHandler = async (req, res) => {
  const payload = req.body;

  const userId = req.user.id;

  try {
    const note = await notesService.createNote({
      ...payload,
      user_id: userId,
    });

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

const getNote: RequestHandler = async (req, res) => {
  const userId = req.user.id;

  try {
    const note = await notesService.getNote(userId);

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

const deleteNote: RequestHandler = async (req, res) => {
  const noteId = Number(req.params.id);
  const userId = req.user.id;

  try {
    const note = await notesService.deleteNote(noteId, userId);

    res.status(200).json({
      message: "Note deleted successfully",
      note: note,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

export const notesController = {
  createNote,
  getNote,
  deleteNote,
};
