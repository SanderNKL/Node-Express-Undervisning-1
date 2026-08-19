import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import User from "../../models/User.model.js";

import { createAccessToken } from "../../services/createAccessToken.js";
import { createRefreshToken } from "../../services/createRefreshToken.js";

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({
      where: {
        email,
      },
    });

    if (!user) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    const passwordCorrect = await bcrypt.compare(password, user.password);

    if (!passwordCorrect) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    const accessToken = createAccessToken(user);
    const refreshToken = await createRefreshToken(user);

    res.status(200).json({
      accessToken,
      refreshToken,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: error.message || "Something went wrong",
    });
  }
};
