import express from "express"

import { getAllUsers } from "../controllers/getAllUsers.js";
import { createUser } from "../controllers/createUser.js";
import { validate } from "../middlewares/validate.js";
import { createUserSchema } from "../schemas/user.schema.js";

const router = express.Router();

router.get('/', getAllUsers)
router.post('/', validate(createUserSchema), createUser)

export default router;