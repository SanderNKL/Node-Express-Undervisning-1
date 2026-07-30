import express from "express"

import { getAllUsers } from "../controllers/getAllUsers.js";
import { createUser } from "../controllers/createUser.js";

const router = express.Router();

router.get('/', getAllUsers)
router.post('/', createUser)

export default router;