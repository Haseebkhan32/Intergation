
import app from "./src/app.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
import db from "./src/db/db.js";


const PORT = 3000
dotenv.config()
 db();

app.listen( PORT , ()=>{

    console.log(`Server is Running ${PORT}`);
    
});

