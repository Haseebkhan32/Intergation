import { json, Router } from "express";
import { dbo } from "../db/db.js";
import bcrypt from "bcrypt"

const route = Router();

route.post("/", async (req, res) => {
    try {

        
        const { email, password } = req.body

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const collection = dbo.collection("users");
        const result = await collection.insertOne({ email, password: hashedPassword });


        res.status(200).json({
            message: "Sucess",
            result
        })

    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: "Server Error"
        });

    }

})
export { route as studentRoutes };