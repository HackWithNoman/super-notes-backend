import { prisma } from "../../lib/prisma";

const createNote = async (payload: any) => {
  const note = prisma.notes.create({
    data: payload,
  });

  return note;
};

const getNote = async (userId: number) => {
  const notes = await prisma.notes.findMany({
    where: {
      user_id: userId,
    },
  });

  return notes;
};

const deleteNote = async (noteId: number, userId: number) => {
  const note = await prisma.notes.findUnique({
    where: {
      id: noteId,
    },
  });

  if (!note) {
    throw new Error("Note not found");
  }

  if (note.user_id !== userId) {
    throw new Error("Permission denied. You can only delete your own notes.");
  }

  return await prisma.notes.delete({
    where: { id: noteId },
  });
};

export const notesService = {
  createNote,
  getNote,
  deleteNote,
};
