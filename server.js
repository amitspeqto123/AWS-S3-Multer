import dotenv from "dotenv"
dotenv.config();

import express from "express"
import {s3DB} from "./config/db.js";

import userRoute from "./routes/user.route.js"

const app = express();
const port = process.env.PORT || 8080;

// middlewares 
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/uploads", express.static("uploads"));

// Routes
app.use("/user", userRoute)
// Database
s3DB();
app.listen(port, () =>{
    console.log(`server is listening on ${port}`)
})