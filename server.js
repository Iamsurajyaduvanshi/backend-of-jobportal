import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDB from "./database/conn.js"
import router from "./router/authRouter.js";
import jobRouter from "./router/jobRouter.js";

import cors from  "cors";
import errorMiddleware from "./middleware/errormiddleware.js";

const app = express();

dotenv.config();

app.use(express.json())

app.use(cors())


app.use("/api",router)
app.use("/api",jobRouter)

app.use(errorMiddleware)

 
connectDB();

 const PORT = process.env.PORT || 3000

 app.listen(PORT,()=>{
    console.log(`listing to the Port ${PORT}`)
 })
