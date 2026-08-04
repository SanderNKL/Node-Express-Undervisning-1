import { users } from "../store/users.store.js";


export const createUser = (req, res) => {
    const { username, password, email } = req.body;

    /* Lage brukeren */
    const user = {
        id: 0,
        username,
        email,
        password
    }

    users.push(user)

    // delete password
    delete user.password

    res.json({ data: user })
}