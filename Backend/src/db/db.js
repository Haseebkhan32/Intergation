
import {MongoClient} from "mongodb"

export let dbo;


async function db() {
    try {
        
     const client = new MongoClient(process.env.MONGO_DB_KEY)
      
     await client.connect();

     dbo = client.db("Approach_Native_MongoDB_Driver")
     
     console.log("Connected to MongoDB");
     

    } catch (error) {
        console.log(error);
        
    }

}

export default db; 