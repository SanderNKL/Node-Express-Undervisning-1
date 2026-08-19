import jwt from "jsonwebtoken";

import RefreshToken from "../../models/RefreshToken.model.js";
import User from "../../models/User.model.js";

import { createAccessToken } from "../../services/createAccessToken.js";
import { createRefreshToken } from "../../services/createRefreshToken.js";


export const refresh = async (req, res) => {
    try {
        const { refreshToken } = req.body;

        const storedToken = await RefreshToken.findOne({
            where: {
                token: refreshToken
            }
        });

        if (!storedToken) {
            return res.status(401).json({
                message: "Invalid refresh token"
            });
        }

        if (storedToken.expiresAt < new Date()) {
            await storedToken.destroy();

            return res.status(401).json({
                message: "Refresh token expired"
            });
        }

        const decoded = jwt.verify(
            refreshToken,
            process.env.JWT_REFRESH_SECRET
        );

        const user = await User.findByPk(decoded.id);

        if (!user) {
            return res.status(401).json({
                message: "User not found"
            });
        }

        // Old refresh token is no longer valid
        await storedToken.destroy();

        // Create new tokens
        const accessToken = createAccessToken(user);
        const newRefreshToken = await createRefreshToken(user);

        res.json({
            accessToken,
            refreshToken: newRefreshToken
        });

    } catch (error) {
        console.error(error);

        res.status(401).json({
            message: "Invalid refresh token"
        });
    }
};