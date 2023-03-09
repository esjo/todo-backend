import express  from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from 'cors';
import {router} from "./routes/TodoRoute.js";



const app = express()
const PORT = process.env.port || 5000

dotenv.config()


app.use(express.json())
app.use(cors())

mongoose
.connect(process.env.MONGODB_URL)
.then(() => console.log('conectect to MongoDB'))
.catch((error) => console.log(error))

app.use(router)

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})
