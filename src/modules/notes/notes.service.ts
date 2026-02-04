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

export const notesService = {
  createNote,
  getNote,
};
