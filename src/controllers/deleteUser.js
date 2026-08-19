import { users } from "../store/users.store.js";


export const deleteUser = (req, res) => {
    const id = Number(req.params.id);

    const index = users.findIndex(user => user.id === id);
    if (index < 0) {
        return res.status(404).json({
            error: "User not found."
        })
    }

    const [ deletedUser ] = users.splice(index, 1)

    res.status(200).json({
        message: "User was successfully deleted!",
        data: deletedUser
    })
}


// Sette opp en server
// Sette opp rutere
// Sette opp endepunkter
// Bruke path params
// burke body
// brukt validering

// ??? database, innlogging, docker.
