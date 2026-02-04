import { prisma } from "../../lib/prisma";

const createNote = async (payload: any) => {
  const note = prisma.notes.create({
    data: payload,
  });

  return note;
};

export const notesService = {
  createNote,
};
