import { RequestHandler } from "express";
import { userService } from "./user.service";

const register: RequestHandler = async (req, res) => {
  const payload = req.body;
  try {
    const user = await userService.register(payload);
    res.status(201).json({
      message: "User created!",
      user,
    });
  } catch (error) {
    res.status(500).json({
      message: "User is not created!",
      Error: error,
    });
  }
};

const login: RequestHandler = async (req, res) => {
  try {
    const user = await userService.login(req.body);
    res.status(201).json({
      message: "User found!",
      user,
    });
  } catch (error) {
    res.status(500).json({
      message: "User not found!",
      Error: error,
    });
  }
};

export const userController = {
  register,
  login,
};
