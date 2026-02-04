import { prisma } from "../../lib/prisma";

const createNote = async (payload: any) => {
  const note = prisma.notes.create({
    data: payload,
  });

  return note;
};

const getNote = async () => {
  const notes = await prisma.notes.findMany();

  return notes;
};

export const notesService = {
  createNote,
  getNote,
};
