import jwt from "jsonwebtoken";
import RefreshToken from "../models/RefreshToken.model.js";


export const createRefreshToken = async (user) => {
    const refreshToken = jwt.sign(
        {
            id: user.id
        },
        process.env.JWT_REFRESH_SECRET,
        {
            expiresIn: "7d"
        }
    );

    const decoded = jwt.decode(refreshToken); // alt fjern <-

    await RefreshToken.create({
        token: refreshToken,
        userId: user.id,
        expiresAt: new Date(decoded.exp * 1000) // alt:  new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    });

    return refreshToken;
};