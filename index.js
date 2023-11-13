import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import { routerUser } from "./router/user.router.js";
// import { routerStripe } from "./router/stripe.router.js";
let app = express();
dotenv.config();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json())
app.use(morgan('common'))
let PORT = process.env.PORT
let MONGODB = process.env.MONGODB;
mongoose.connect(MONGODB).then(() => {
    app.listen(PORT,() => console.log(`Server is running on port ${PORT}`))
}).catch(err => console.log(err))
mongoose.connection.on('connected',() => console.log('mongodb start listening again'))
mongoose.connection.on('disconnected',() => console.log('mongodb stopped listening'))
app.use('/api/auth',routerUser)
// app.use("/api/stripe", routerStripe);
app.use((err,req,res,next) => {
    let errorMessage = err.message
    let errorStatus = err.status
    res.status(errorStatus).json(errorMessage)
})