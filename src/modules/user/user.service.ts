import { prisma } from "../../lib/prisma";

const register = async (payload: any) => {
  const user = await prisma.user.create({
    data: payload,
  });

  return user;
};

export const userService = {
  register,
};
