import express from "express"

import userRouter from "./routes/userRouter.js"


const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json())

/* Våre Første Endepunkter! */
app.get('/', (req, res) => {
    res.json({"message": "Du fant en ditto..."})
})

/* Våre Routes! */
app.use('/users', userRouter)

export default app;