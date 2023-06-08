// express, dotenv, jsonwebtoken, bcrypt, cookie-parser, mongoose, nodemon

import express from "express";
import userRouter from './routes/user.js';
import taskRouter from './routes/task.js';
import {config} from "dotenv";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/error.js";
import cors from "cors";

export const app = express();

config({
    path:"./data/config.env"
})

//using middle ware
app.use(express.json());

// for getMyProfile
app.use(cookieParser());

app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods:['GET','POST','PUT','DELETE'],
    credentials:true,
}
))

// using routes
app.use('/api/v1/users',userRouter);
app.use('/api/v1/task',taskRouter);




app.get("/", (req, res) => {
    res.send("Nice Working");
})


// error handling

app.use(errorMiddleware)

