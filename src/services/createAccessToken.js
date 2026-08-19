import jwt from "jsonwebtoken";


export const createAccessToken = (user) => {
    return jwt.sign(
        {
            id: user.id,
            email: user.email
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "20s"
        }
    );
};