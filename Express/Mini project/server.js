import express from "express";
import publicRoutes from "./routes/public.routes.js"
import privateRoutes from "./routes/private.routes.js"

const app = express();
const PORT = 8080;

// *InBuilt Middleware 
app.use(express.json());

// *Middleware to Routes
app.use("/public",publicRoutes)
app.use("/private",privateRoutes)

app.listen(PORT,()=>{

    console.log(`Server is running on http://localhost:${PORT}`);
})