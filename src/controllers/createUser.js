import { users } from "../store/users.store.js";
import { validateUserDetails } from "../utils/validateUserDetails.js";


export const createUser = (req, res) => {
    const { username, password, email } = req.body;

    /* VALIDERING!! */
    const validation = validateUserDetails({ username, password, email })
    if (!validation.valid) {
        return res.status(400).json({
            error: validation.error
        })
    }

    /* Lage brukeren */
    const user = {
        id: 0,
        username,
        email
    }

    users.push(user)

    res.json({
        data: user
    })
}