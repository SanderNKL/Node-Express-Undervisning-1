import "dotenv/config";
import express from "express"

import sequelize from "./config/database.js";
import userRouter from "./routes/userRouter.js"
import authRouter from "./routes/authRouter.js";


const app = express();

// kjapp test, for db. Fjern senere
try {
    await sequelize.authenticate()
    console.log("Database connected!!!")
} catch (err) {
    console.log("Unable to connect to the database:", err)
}

app.use(express.urlencoded({ extended: true }));
app.use(express.json())

/* Våre Første Endepunkter! */
app.get('/', (req, res) => {
    res.json({"message": "Du fant en ditto..."})
})

/* Våre Routes! */
app.use('/users', userRouter)
app.use('/auth', authRouter)

export default app;