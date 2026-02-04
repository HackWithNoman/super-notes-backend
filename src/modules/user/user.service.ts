import { prisma } from "../../lib/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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

const login = async (payload: { email: string; password_hash: string }) => {
  const user = await prisma.user.findUnique({
    where: { email: payload.email },
  });

  if (!user) throw new Error("Invalid credentials");

  const isMatch = await bcrypt.compare(
    payload.password_hash,
    user.password_hash,
  );
  if (!isMatch) throw new Error("Invalid credentials");

  const secret = process.env.JWT_SECRET;

  if (!secret) {
    throw new Error("JWT_SECRET is not defined in environment variables");
  }

  const token = jwt.sign({ email: user.email }, secret, { expiresIn: "1h" });

  return {
    message: "Login successful",
    token,
    user: { id: user.id, email: user.email },
  };
};

export const userService = {
  register,
  login,
};
