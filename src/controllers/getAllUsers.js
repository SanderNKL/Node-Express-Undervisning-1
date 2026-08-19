import sequelize from "../config/database.js"


export const getAllUsers = async (req, res) => {
    try {
        const [ users ] = await sequelize.query("SELECT * FROM Users")
        res.json({data: users})
    } catch (error) {
        console.error(error)
        res.status(500).json({message: error.message || "Something went wrong"})
    }
}