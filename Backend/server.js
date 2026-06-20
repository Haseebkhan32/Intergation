import app from "./src/app.js";
import connectdb from "./src/db/db.js";


connectdb();
app.listen(process.env.PORT,()=>{
    console.log("Server is Live");
    
})