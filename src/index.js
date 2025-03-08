import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { DB_NAME } from "./constants.js";

dotenv.config({
    path: './env'
})

connectDB();












/*
// first approach to connect the database

import mongoose from "mongoose";
import { DB_NAME } from "./constants";

import express from "express";
const app = express();

(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("erorr", (error) =>{
            console.log("Error: ", error);
            throw error
        })

        app.listen(process.env.PORT, ()=> {
            console.log(`Server is running at port: ${process.env.PORT}`);
        })
    } catch (error) {
        console.error(error);
    }
})
*/