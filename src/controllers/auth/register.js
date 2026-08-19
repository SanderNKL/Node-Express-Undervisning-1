import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../../models/User.model.js";

export const register = async (req, res) => {
  const { username, password, email } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = {
    username,
    email,
    password: hashedPassword,
  };

  const result = await User.create(user);

  res.status(201).json({
    data: result,
  });
};
