import mongoose from "mongoose";

async function connectdb() {
    try {
        await mongoose.connect(process.env.MongoUrl);
        console.log("Let Go DateBase is Connected");


    } catch (error) {
        console.log(error);
        
    }
};

export default connectdb;