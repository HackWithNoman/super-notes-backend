import { prisma } from "../../lib/prisma";
import bcrypt from "bcrypt";

const register = async (payload: any) => {
  const salt = await bcrypt.genSalt(10);
  const hasshedPassword = await bcrypt.hash(payload.password_hash, salt);

  const user = await prisma.user.create({
    data: {
      ...payload,
      password_hash: hasshedPassword,
    },
  });

  return user;
};

export const userService = {
  register,
};
