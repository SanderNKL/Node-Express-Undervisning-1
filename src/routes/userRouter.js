import express from "express";

import { getAllUsers } from "../controllers/getAllUsers.js";
import { register } from "../controllers/auth/register.js";
import { validate } from "../middlewares/validate.js";
import { createUserSchema } from "../schemas/user.schema.js";
import { deleteUser } from "../controllers/deleteUser.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", authMiddleware, getAllUsers);
router.delete("/:id", authMiddleware, deleteUser);

export default router;
