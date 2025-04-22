// global imports
import express from "express";
import session from "express-session";


// local imports

import authRoute from "../routes/auth.routes.js";
const app = express();
const PORT = 8080;

// Global Middleware
app.use(express.json());

//Routes 
app.get("/",(req, res)=>{
    res.send("welcome to task Manager API");
    
})

app.use("/auth",authRoute)


app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});

// local imports can go here